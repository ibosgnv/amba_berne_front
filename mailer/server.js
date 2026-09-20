import express from "express";
import nodemailer from "nodemailer";

/**
 * Service d'envoi du formulaire de contact.
 *
 * Reçoit le POST proxifié par nginx sur /api/contact et relaie le message
 * via un SMTP authentifié. Le service n'expédie jamais lui-même : c'est le
 * relais qui sort le mail, avec sa réputation et ses enregistrements
 * SPF/DKIM — un envoi direct depuis l'IP du VPS serait rejeté ou classé
 * en indésirable par le destinataire.
 */

const PORT = Number(process.env.PORT ?? 3000);

// Fenêtre minimale entre deux envois réussis depuis une même IP.
const THROTTLE_MS = 60_000;

const OBJETS = [
  "Visa",
  "Passeport",
  "Légalisation",
  "Information générale",
  "Rendez-vous",
  "Autre",
];

const requis = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "MAIL_FROM", "MAIL_TO"];
const manquants = requis.filter((k) => !process.env[k]);
if (manquants.length > 0) {
  console.error(`Configuration incomplète : ${manquants.join(", ")}`);
  process.exit(1);
}

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false, // STARTTLS, négocié sur le port 587
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

/** Dernier envoi réussi par IP, purgé périodiquement pour ne pas croître sans fin. */
const derniersEnvois = new Map();
setInterval(() => {
  const limite = Date.now() - THROTTLE_MS;
  for (const [ip, date] of derniersEnvois) {
    if (date < limite) derniersEnvois.delete(ip);
  }
}, THROTTLE_MS).unref();

const app = express();
app.set("trust proxy", 1); // req.ip = X-Forwarded-For posé par nginx
app.use(express.json({ limit: "32kb" }));

app.get("/health", (_req, res) => res.send("ok"));

app.post("/contact", async (req, res) => {
  const { nom, email, telephone, objet, message, site } = req.body ?? {};

  // Honeypot : champ invisible côté visiteur, rempli par les robots.
  // On répond 204 pour ne pas leur signaler la détection.
  if (typeof site === "string" && site.trim() !== "") {
    return res.status(204).end();
  }

  if (Date.now() - (derniersEnvois.get(req.ip) ?? 0) < THROTTLE_MS) {
    return res.status(429).json({
      error: "Merci de patienter une minute avant un nouvel envoi.",
    });
  }

  // Validation refaite ici : les contrôles Angular sont contournables.
  const invalide = valider({ nom, email, objet, message });
  if (invalide) return res.status(422).json({ error: invalide });

  try {
    await transport.sendMail({
      // From sur le domaine autorisé par SPF/DKIM chez le relais.
      // Aucune boîte n'a besoin d'exister derrière cette adresse.
      from: `"Site Ambassade RDC" <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      // Pour que « Répondre » écrive au demandeur, pas à MAIL_FROM.
      replyTo: { name: nom.trim(), address: email.trim() },
      subject: `[Site web] ${objet} – ${nom.trim()}`,
      text: [
        "Nouvelle demande envoyée depuis le formulaire de contact.",
        "",
        `Nom et prénom : ${nom.trim()}`,
        `Adresse email : ${email.trim()}`,
        `Téléphone     : ${telephone?.trim() || "non renseigné"}`,
        `Objet         : ${objet}`,
        "",
        "--- Message ---",
        "",
        message.trim(),
      ].join("\n"),
    });

    // Après succès seulement : une saisie invalide ne doit pas bloquer une minute.
    derniersEnvois.set(req.ip, Date.now());
    res.status(204).end();
  } catch (err) {
    // Le détail reste dans les logs, le visiteur n'obtient qu'un message générique.
    console.error("Échec de l'envoi :", err);
    res.status(502).json({
      error: "Votre message n'a pas pu être envoyé. Veuillez réessayer plus tard.",
    });
  }
});

/** Renvoie un message d'erreur, ou null si la demande est valide. */
function valider({ nom, email, objet, message }) {
  if (typeof nom !== "string" || nom.trim().length < 2 || nom.length > 120) {
    return "Nom invalide.";
  }
  if (typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
    return "Adresse email invalide.";
  }
  if (!OBJETS.includes(objet)) {
    return "Objet invalide.";
  }
  if (typeof message !== "string" || message.trim().length < 10 || message.length > 5000) {
    return "Message invalide.";
  }
  return null;
}

app.listen(PORT, () => console.log(`mailer à l'écoute sur ${PORT}`));
