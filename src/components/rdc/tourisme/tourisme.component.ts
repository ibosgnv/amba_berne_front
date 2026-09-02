import { Component } from "@angular/core";

@Component({
  selector: "app-rdc-tourisme",
  standalone: true,
  imports: [],
  templateUrl: "./tourisme.component.html",
  styleUrl: "./tourisme.component.css",
})
export class RdcTourismeComponent {
  protected readonly destinations = [
    {
      title: "Parc National des Virunga",
      region: "Nord-Kivu",
      image: "/assets/m23_pourpalers.jpg",
      icon: "fa-solid fa-paw",
      desc: "Sanctuaire des gorilles de montagne, plus ancien parc national d'Afrique.",
    },
    {
      title: "Chutes de Zongo",
      region: "Kongo Central",
      image: "/assets/wagenia.jpg",
      icon: "fa-solid fa-droplet",
      desc: "Une merveille naturelle à 2h30 de Kinshasa, idéale pour une échappée.",
    },
    {
      title: "Fleuve Congo",
      region: "Bassin du Congo",
      image: "/assets/leopard.jpg",
      icon: "fa-solid fa-sailboat",
      desc: "Plus de 4 700 km de voie navigable à travers une biodiversité exceptionnelle.",
    },
    {
      title: "Mont Nyiragongo",
      region: "Nord-Kivu",
      image: "/assets/crise_est.jpg",
      icon: "fa-solid fa-volcano",
      desc: "Un volcan actif et son lac de lave, spectacle rare au monde.",
    },
    {
      title: "Parc de la Salonga",
      region: "Cuvette Centrale",
      image: "/assets/economie_nationale.jpg",
      icon: "fa-solid fa-tree",
      desc: "Plus grande réserve de forêt tropicale humide d'Afrique, patrimoine UNESCO.",
    },
    {
      title: "Lac Kivu",
      region: "Sud-Kivu",
      image: "/assets/ONU_Femme.jpg",
      icon: "fa-solid fa-umbrella-beach",
      desc: "Lac d'altitude aux eaux calmes, bordé de villes pittoresques comme Bukavu.",
    },
  ];
}
