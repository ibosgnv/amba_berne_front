import { Component, signal } from "@angular/core";

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: "app-services-faq",
  standalone: true,
  imports: [],
  templateUrl: "./faq.component.html",
  styleUrl: "./faq.component.css",
})
export class ServicesFaqComponent {
  protected readonly faq: FaqItem[] = [
    { question: "Combien de temps prend une transcription d'acte ?", answer: "Le délai habituel est de 10 à 20 jours ouvrés à partir de la réception du dossier complet." },
    { question: "Puis-je suivre l'avancée de ma demande ?", answer: "Oui, un accusé de réception est envoyé à chaque étape par email ou SMS." },
    { question: "Quels documents sont acceptés pour prouver mon identité ?", answer: "Passeport biométrique, carte d'identité nationale ou carte consulaire en cours de validité." },
    {
      question: "Comment prendre rendez-vous pour faire une demande de passeport ?",
      answer:
        "Après réception du dossier complet envoyé par courrier postal, l'Ambassade procédera à sa vérification. " +
        "Si celui-ci est conforme, elle contactera le requérant afin de fixer un rendez-vous pour la capture de ses données biométriques.",
    },
    {
      question: "Quel est le délai d'attente pour obtenir un passeport ?",
      answer:
        "Les passeports étant imprimés exclusivement en République démocratique du Congo, le délai d'attente varie " +
        "entre un à deux mois à partir du jour de la capture.",
    },
    {
      question: "Peut-on récupérer le passeport soi-même en République démocratique du Congo ?",
      answer:
        "Oui, c'est possible au moyen d'une procuration dûment signée. Celle-ci doit d'abord être transmise à l'Ambassade " +
        "afin d'être revêtue du cachet officiel. Une fois cette formalité accomplie, la procuration pourra être présentée " +
        "au Ministère des Affaires étrangères à Kinshasa par la personne mandatée désignée dans le document, en vue du " +
        "retrait du passeport.",
    },
    {
      question: "Faut-il prendre rendez-vous pour une demande de visa ?",
      answer:
        "Non, un rendez-vous n'est pas nécessaire. Le demandeur peut se présenter directement avec son dossier complet " +
        "aux heures d'ouverture de l'Ambassade.",
    },
    {
      question: "Quel est le délai d'attente pour obtenir un visa ?",
      answer:
        "Il faut compter 10 jours ouvrables pour le traitement d'une demande de visa.\n\n" +
        "Toutefois, si le demandeur souhaite bénéficier d'un traitement express, son visa peut être délivré dans un délai " +
        "de 24 à 48 heures ouvrées, moyennant le paiement d'une taxe supplémentaire de 30 CHF, en plus des frais de visa applicables.",
    },
    {
      question: "Doit-on obligatoirement introduire une demande de visa en présentiel ?",
      answer: "Non, il est possible de faire une demande par envoi postal.",
    },
  ];

  protected readonly openFaq = signal<number | null>(null);

  toggleFaq(i: number) {
    this.openFaq.update((v) => (v === i ? null : i));
  }
}
