import { Component } from "@angular/core";

@Component({
  selector: "app-accueil-opportunites",
  standalone: true,
  imports: [],
  templateUrl: "./opportunites.component.html",
  styleUrl: "./opportunites.component.css",
})
export class AccueilOpportunitesComponent {
  protected readonly secteurs = [
    { icon: "💻", title: "Technologies de l'information" },
    { icon: "⚡", title: "Énergies renouvelables" },
    { icon: "🏗️", title: "Infrastructures" },
    { icon: "🌾", title: "Agriculture & agro-industrie" },
    { icon: "⛏️", title: "Mines & ressources" },
    { icon: "🏥", title: "Santé & biotechnologie" },
  ];
}
