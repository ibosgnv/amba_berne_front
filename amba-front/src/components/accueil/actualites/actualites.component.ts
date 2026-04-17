import { Component } from "@angular/core";

@Component({
  selector: "app-accueil-actualites",
  standalone: true,
  imports: [],
  templateUrl: "./actualites.component.html",
  styleUrl: "./actualites.component.css",
})
export class AccueilActualitesComponent {
  protected readonly news = [
    {
      image: "/assets/m23_pourpalers.jpg",
      category: "Diplomatie",
      date: "12 avril 2026",
      title: "Reprise des pourparlers de paix à l'Est de la RDC",
      excerpt: "Les discussions diplomatiques se poursuivent afin d'assurer la stabilité régionale.",
    },
    {
      image: "/assets/economie_nationale.jpg",
      category: "Économie",
      date: "08 avril 2026",
      title: "Forum économique RDC–Suisse à Genève",
      excerpt: "Rencontre entre investisseurs suisses et entrepreneurs congolais autour de secteurs stratégiques.",
    },
    {
      image: "/assets/ONU_Femme.jpg",
      category: "Coopération",
      date: "02 avril 2026",
      title: "Partenariat ONU Femmes pour les droits des femmes",
      excerpt: "Nouvelle initiative conjointe pour l'autonomisation des femmes en RDC.",
    },
    {
      image: "/assets/wagenia.jpg",
      category: "Culture",
      date: "25 mars 2026",
      title: "Exposition culturelle : les pêcheurs Wagenia",
      excerpt: "Un voyage à travers les traditions ancestrales des rives du fleuve Congo.",
    },
  ];
}
