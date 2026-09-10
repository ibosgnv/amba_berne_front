import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-visas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './visas.component.html',
  styleUrl: './visas.component.css',
})
export class ServicesVisasComponent {
  protected readonly steps = [
    {
      num: 1,
      title: 'Télécharger le formulaire',
      desc: "Télécharger le document en ligne afin de le remplir à l'avance, depuis chez vous.",
    },
    {
      num: 2,
      title: 'Préparer le dossier',
      desc: 'Rassembler les documents requis selon la checklist.',
    },
    {
      num: 3,
      title: 'Déposer le dossier complet',
      desc: "Présentez-vous à l'Ambassade pendant les heures d'ouverture pour le dépôt de votre dossier.",
    },
  ];

  protected readonly visaTypes = [
    { duree: '1 mois', entrees: '1 entrée', price: '113 CHF' },
    { duree: '1 mois', entrees: 'Plusieurs entrées', price: '175 CHF' },
    { duree: '2 mois', entrees: '1 entrée', price: '170 CHF' },
    { duree: '2 mois', entrees: 'Plusieurs entrées', price: '220 CHF' },
    { duree: '3 mois', entrees: '1 entrée', price: '220 CHF' },
    { duree: '3 mois', entrees: 'Plusieurs entrées', price: '270 CHF' },
    { duree: '6 mois', entrees: '1 entrée', price: '320 CHF' },
    { duree: '6 mois', entrees: 'Plusieurs entrées', price: '420 CHF' },
  ];

  protected readonly visaPostalDocs = [
    "L'ensemble des documents requis",
    "L'original du passeport",
    'La preuve de paiement',
    "L'enveloppe retour déjà affranchie pour un envoi recommandé",
  ];

  protected readonly passportSteps = [
    {
      num: 1,
      title: 'Lire le communiqué officiel',
      desc: 'Prendre connaissance de la nouvelle procédure de demande de passeport en ligne.',
    },
    {
      num: 2,
      title: 'Effectuer les démarches',
      desc: "Compléter les étapes jusqu'au paiement en ligne.",
    },
    {
      num: 3,
      title: 'Envoyer les documents par voie postale',
      desc: "Faire parvenir à l'Ambassade les documents requis par courrier postal.",
    },
    {
      num: 4,
      title: 'Patienter pendant la vérification du dossier',
      desc: "Attendre que l'Ambassade puisse fixer le rendez-vous pour la capture des données biométriques.",
    },
  ];

  protected readonly passportDocs = [
    'Document de référence comportant la note de perception et le code QR personnel',
    'Formulaire « demande de e-passeport »',
    "Attestation de paiement d'Equity BCDC",
    "Copie d'ancien passeport (ou d'acte de naissance ou certificat de nationalité ou carte d'électeur)",
    'Copie recto-verso du permis de séjour en Suisse en cours de validité',
    '2 photos passeport récentes',
    'Autorisation parentale (pour les mineurs)',
    'Numéro de contact et adresse e-mail',
  ];

  protected readonly passportTypes = [
    {
      icon: 'fa-solid fa-book',
      name: 'Passeport ordinaire',
      desc: 'Pour tous les ressortissants congolais. Validité 5 ans.',
      price: 'CHF 150',
    },
    {
      icon: 'fa-solid fa-book',
      name: 'Passeport diplomatique',
      desc: "Réservé aux agents diplomatiques et officiels de l'État.",
      price: 'Sur dossier',
    },
    {
      icon: 'fa-solid fa-book',
      name: 'Passeport de service',
      desc: 'Pour les missions officielles à caractère administratif.',
      price: 'Sur dossier',
    },
  ];

  // `download: true` pour un document à remplir (enregistré sur le poste),
  // `false` pour un document à consulter (ouvert dans le lecteur du navigateur).
  protected readonly visaDocuments = [
    {
      name: 'Formulaire de demande',
      desc: 'Formulaire à remplir pour toute demande de visa.',
      file: 'Visa - Formulaire de demande.pdf',
      download: true,
    },
    {
      name: 'Conditions pour la demande',
      desc: 'Liste des pièces et conditions requises selon le type de visa.',
      file: 'Visa - Conditions pour la demande.pdf',
      download: false,
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
