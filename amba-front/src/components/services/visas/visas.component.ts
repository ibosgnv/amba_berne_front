import { Component, signal } from "@angular/core";

@Component({
  selector: "app-services-visas",
  standalone: true,
  imports: [],
  templateUrl: "./visas.component.html",
  styleUrl: "./visas.component.css",
})
export class ServicesVisasComponent {
  protected readonly steps = [
    { num: 1, title: "Choisir son visa", desc: "Sélectionnez le type de visa adapté à votre séjour." },
    { num: 2, title: "Préparer le dossier", desc: "Rassemblez les documents requis selon la checklist." },
    { num: 3, title: "Remplir le formulaire", desc: "Complétez le formulaire en ligne adapté à votre visa." },
    { num: 4, title: "Paiement & soumission", desc: "Réglez les frais et recevez la confirmation par email." },
  ];

  protected readonly visaTypes = [
    { icon: "🏖️", name: "Court séjour", duration: "Jusqu'à 90 jours", price: "CHF 80", desc: "Tourisme, visite familiale, court déplacement professionnel." },
    { icon: "🏠", name: "Long séjour", duration: "Plus de 90 jours", price: "CHF 180", desc: "Installation, regroupement familial, études." },
    { icon: "💼", name: "Affaires", duration: "Selon mission", price: "CHF 150", desc: "Missions commerciales, partenariats, conférences professionnelles." },
    { icon: "🏞️", name: "Tourisme", duration: "Jusqu'à 30 jours", price: "CHF 60", desc: "Découverte culturelle, safaris, tourisme de loisirs." },
  ];

  protected readonly selectedVisa = signal<string | null>(null);

  selectVisa(name: string) {
    this.selectedVisa.set(name);
  }
}
