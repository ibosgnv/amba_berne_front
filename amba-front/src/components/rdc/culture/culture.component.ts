import { Component } from "@angular/core";

@Component({
  selector: "app-rdc-culture",
  standalone: true,
  imports: [],
  templateUrl: "./culture.component.html",
  styleUrl: "./culture.component.css",
})
export class RdcCultureComponent {
  protected readonly languages = [
    { label: "Français", sub: "Langue officielle" },
    { label: "Lingala", sub: "Kinshasa & fleuve" },
    { label: "Swahili", sub: "Est du pays" },
    { label: "Kikongo", sub: "Sud-Ouest" },
    { label: "Tshiluba", sub: "Centre" },
  ];

  protected readonly arts = [
    { icon: "🎨", title: "Peinture & sculpture", desc: "Une école populaire vibrante de Kinshasa aux marchés d'art urbains." },
    { icon: "🪘", title: "Artisanat", desc: "Tissus, masques, sculptures en bois, vanneries — un héritage vivant." },
    { icon: "💃", title: "Danse & performance", desc: "Du ndombolo aux danses traditionnelles, une expression corporelle riche." },
  ];

  protected readonly traditions = [
    "Rites initiatiques ancestraux",
    "Cuisine : fufu, saka-saka, poisson salé",
    "Contes et griots transmis oralement",
    "Cérémonies communautaires et mariages",
  ];
}
