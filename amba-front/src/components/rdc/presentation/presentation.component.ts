import { Component } from "@angular/core";

@Component({
  selector: "app-rdc-presentation",
  standalone: true,
  imports: [],
  templateUrl: "./presentation.component.html",
  styleUrl: "./presentation.component.css",
})
export class RdcPresentationComponent {
  protected readonly highlights = [
    { icon: "💎", title: "Ressources naturelles", desc: "Cobalt, cuivre, coltan, or, diamant — un sous-sol parmi les plus riches au monde." },
    { icon: "🌳", title: "Biodiversité unique", desc: "Forêts équatoriales, parcs nationaux (Virunga, Salonga), fleuve Congo." },
    { icon: "👥", title: "Population dynamique", desc: "Une jeunesse éduquée et entrepreneuriale au cœur du développement." },
    { icon: "📍", title: "Position stratégique", desc: "Carrefour de l'Afrique centrale, 9 pays frontaliers, 10ᵉ économie africaine." },
  ];
}
