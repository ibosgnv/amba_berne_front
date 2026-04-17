import { Component } from "@angular/core";

@Component({
  selector: "app-services-categories",
  standalone: true,
  imports: [],
  templateUrl: "./categories.component.html",
  styleUrl: "./categories.component.css",
})
export class ServicesCategoriesComponent {
  protected readonly categories = [
    {
      id: "consulaires",
      icon: "🧾",
      title: "Services consulaires",
      desc: "Cartes consulaires, état civil, légalisation de documents, visites consulaires. Démarches guidées étape par étape.",
      anchor: "#services-consulaires",
      color: "from-[#007FFF] to-[#0b1a5c]",
    },
    {
      id: "visas",
      icon: "🛂",
      title: "Visas & Passeports",
      desc: "Types de visas, procédures, checklist des documents, tarification claire et formulaire en ligne sécurisé.",
      anchor: "#services-visas",
      color: "from-[#FCD116] to-[#FBA916]",
    },
    {
      id: "accompagnement",
      icon: "🤝",
      title: "Accompagnement",
      desc: "Partenariats, aide aux voyageurs, guide des ressortissants, intégration en Suisse. L'Ambassade à vos côtés.",
      anchor: "#services-accompagnement",
      color: "from-[#0b1a5c] to-[#007FFF]",
    },
  ];
}
