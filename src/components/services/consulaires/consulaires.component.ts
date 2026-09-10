import { Component, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ServicesFaqComponent } from "../faq/faq.component";

interface Procedure {
  id: string;
  icon: string;
  title: string;
  steps: string[];
  docs: string[];
}

@Component({
  selector: "app-services-consulaires",
  standalone: true,
  imports: [RouterLink, ServicesFaqComponent],
  templateUrl: "./consulaires.component.html",
  styleUrl: "./consulaires.component.css",
})
export class ServicesConsulairesComponent {
  protected readonly procedures: Procedure[] = [
    {
      id: "carte",
      icon: "fa-solid fa-id-card",
      title: "Carte consulaire",
      steps: [
        "Remplir le formulaire en ligne",
        "Fournir une pièce d'identité valide",
        "Joindre une photo récente",
        "Régler les frais consulaires",
      ],
      docs: [
        "Pièce d'identité valide (passeport ou CNI)",
        "Photo d'identité récente (format officiel)",
        "Justificatif de domicile en Suisse",
        "Formulaire de demande complété",
      ],
    },
    {
      id: "etat-civil",
      icon: "fa-solid fa-scroll",
      title: "Transcription d'actes d'état civil",
      steps: [
        "Choisir le type d'acte (naissance, mariage, décès)",
        "Préparer l'acte original et sa traduction",
        "Téléverser les justificatifs",
        "Recevoir la confirmation par email",
      ],
      docs: [
        "Acte original (naissance, mariage ou décès)",
        "Traduction certifiée si nécessaire",
        "Pièce d'identité du demandeur",
        "Justificatif de lien (le cas échéant)",
      ],
    },
    {
      id: "legalisation",
      icon: "fa-solid fa-check",
      title: "Légalisation de documents",
      steps: [
        "Vérifier l'éligibilité du document",
        "Déposer les originaux à l'Ambassade",
        "Obtenir le certificat de légalisation",
      ],
      docs: [
        "Document original à légaliser",
        "Copie du document",
        "Pièce d'identité du demandeur",
        "Preuve de paiement des frais",
      ],
    },
    {
      id: "visite",
      icon: "fa-solid fa-landmark",
      title: "Visite consulaire",
      steps: [
        "Prendre rendez-vous en ligne",
        "Préparer les documents nécessaires",
        "Se présenter à la date convenue",
      ],
      docs: [
        "Confirmation de rendez-vous",
        "Pièce d'identité valide",
        "Documents relatifs à l'objet de la visite",
      ],
    },
  ];

  protected readonly openProcedure = signal<string | null>(null);

  toggleProcedure(id: string) {
    this.openProcedure.update((v) => (v === id ? null : id));
  }
}
