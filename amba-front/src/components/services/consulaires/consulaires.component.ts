import { Component, signal } from "@angular/core";

interface Procedure {
  id: string;
  icon: string;
  title: string;
  steps: string[];
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: "app-services-consulaires",
  standalone: true,
  imports: [],
  templateUrl: "./consulaires.component.html",
  styleUrl: "./consulaires.component.css",
})
export class ServicesConsulairesComponent {
  protected readonly procedures: Procedure[] = [
    {
      id: "carte",
      icon: "🪪",
      title: "Carte consulaire",
      steps: [
        "Remplir le formulaire en ligne",
        "Fournir une pièce d'identité valide",
        "Joindre une photo récente",
        "Régler les frais consulaires",
      ],
    },
    {
      id: "etat-civil",
      icon: "📜",
      title: "Transcription d'actes d'état civil",
      steps: [
        "Choisir le type d'acte (naissance, mariage, décès)",
        "Préparer l'acte original et sa traduction",
        "Téléverser les justificatifs",
        "Recevoir la confirmation par email",
      ],
    },
    {
      id: "legalisation",
      icon: "✔️",
      title: "Légalisation de documents",
      steps: [
        "Vérifier l'éligibilité du document",
        "Déposer les originaux à l'Ambassade",
        "Obtenir le certificat de légalisation",
      ],
    },
    {
      id: "visite",
      icon: "🏛️",
      title: "Visite consulaire",
      steps: [
        "Prendre rendez-vous en ligne",
        "Préparer les documents nécessaires",
        "Se présenter à la date convenue",
      ],
    },
  ];

  protected readonly documents = [
    "Pièce d'identité valide",
    "Formulaire administratif complété",
    "Photo d'identité récente",
    "Acte officiel selon la démarche",
    "Justificatif de domicile",
    "Justificatifs complémentaires le cas échéant",
  ];

  protected readonly faq: FaqItem[] = [
    { question: "Combien de temps prend une transcription d'acte ?", answer: "Le délai habituel est de 10 à 20 jours ouvrés à partir de la réception du dossier complet." },
    { question: "Puis-je suivre l'avancée de ma demande ?", answer: "Oui, un accusé de réception est envoyé à chaque étape par email ou SMS." },
    { question: "Quels documents sont acceptés pour prouver mon identité ?", answer: "Passeport biométrique, carte d'identité nationale ou carte consulaire en cours de validité." },
  ];

  protected readonly openProcedure = signal<string | null>("carte");
  protected readonly openFaq = signal<number | null>(null);

  toggleProcedure(id: string) {
    this.openProcedure.update((v) => (v === id ? null : id));
  }

  toggleFaq(i: number) {
    this.openFaq.update((v) => (v === i ? null : i));
  }
}
