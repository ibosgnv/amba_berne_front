import { Component, signal } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-services-visas",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./visas.component.html",
  styleUrl: "./visas.component.css",
})
export class ServicesVisasComponent {
  protected readonly steps = [
    {
      num: 1,
      title: "Choisir son visa",
      desc: "Sélectionnez le type de visa adapté à votre séjour.",
    },
    {
      num: 2,
      title: "Préparer le dossier",
      desc: "Rassemblez les documents requis selon la checklist.",
    },
    {
      num: 3,
      title: "Remplir le formulaire",
      desc: "Complétez le formulaire en ligne adapté à votre visa.",
    },
    {
      num: 4,
      title: "Télécharger le document",
      desc: "Téléchargez le formulaire rempli en ligne",
    },
  ];

  protected readonly visaTypes = [
    {
      icon: "fa-solid fa-umbrella-beach",
      name: "Court séjour",
      duration: "Jusqu'à 90 jours",
      price: "CHF 80",
      desc: "Tourisme, visite familiale, court déplacement professionnel.",
    },
    {
      icon: "fa-solid fa-house",
      name: "Long séjour",
      duration: "Plus de 90 jours",
      price: "CHF 180",
      desc: "Installation, regroupement familial, études.",
    },
    {
      icon: "fa-solid fa-briefcase",
      name: "Affaires",
      duration: "Selon mission",
      price: "CHF 150",
      desc: "Missions commerciales, partenariats, conférences professionnelles.",
    },
    {
      icon: "fa-solid fa-mountain-sun",
      name: "Tourisme",
      duration: "Jusqu'à 30 jours",
      price: "CHF 60",
      desc: "Découverte culturelle, safaris, tourisme de loisirs.",
    },
  ];

  protected readonly passportSteps = [
    {
      num: 1,
      title: "Préparer le dossier",
      desc: "Remplissez le formulaire de demande en ligne et rassemblez toutes les pièces justificatives requises.",
    },
    {
      num: 2,
      title: "Prendre rendez-vous",
      desc: "Réservez un créneau en ligne pour déposer votre dossier à l'Ambassade.",
    },
    {
      num: 3,
      title: "Se présenter à l'Ambassade",
      desc: "Rendez-vous sur place à la date convenue pour la prise d'empreintes et la remise du passeport.",
    },
  ];

  protected readonly passportDocs = [
    "Ancien passeport (pour renouvellement)",
    "Acte de naissance ou carte d'identité",
    "Deux photos d'identité récentes",
    "Justificatif de domicile en Suisse",
    "Preuve de paiement des frais consulaires",
  ];

  protected readonly passportTypes = [
    {
      icon: "fa-solid fa-book",
      name: "Passeport ordinaire",
      desc: "Pour tous les ressortissants congolais. Validité 5 ans.",
      price: "CHF 150",
    },
    {
      icon: "fa-solid fa-book",
      name: "Passeport diplomatique",
      desc: "Réservé aux agents diplomatiques et officiels de l'État.",
      price: "Sur dossier",
    },
    {
      icon: "fa-solid fa-book",
      name: "Passeport de service",
      desc: "Pour les missions officielles à caractère administratif.",
      price: "Sur dossier",
    },
  ];

  protected readonly visaDocuments = [
    {
      name: "Formulaire de demande",
      desc: "Formulaire à remplir pour toute demande de visa.",
      file: "Visa - Formulaire de demande.pdf",
    },
    {
      name: "Conditions pour la demande",
      desc: "Liste des pièces et conditions requises selon le type de visa.",
      file: "Visa - Conditions pour la demande.pdf",
    },
  ];

  protected readonly selectedVisa = signal<string | null>(null);
  protected readonly visaDialogOpen = signal(false);

  selectVisa(name: string) {
    this.selectedVisa.set(name);
  }

  openVisaDialog() {
    this.visaDialogOpen.set(true);
  }

  closeVisaDialog() {
    this.visaDialogOpen.set(false);
  }
}
