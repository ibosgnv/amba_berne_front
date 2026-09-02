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
    { icon: "fa-solid fa-laptop", title: "Technologies de l'information" },
    { icon: "fa-solid fa-bolt", title: "Énergies renouvelables" },
    { icon: "fa-solid fa-helmet-safety", title: "Infrastructures" },
    { icon: "fa-solid fa-wheat-awn", title: "Agriculture & agro-industrie" },
    { icon: "fa-solid fa-gem", title: "Mines & ressources" },
    { icon: "fa-solid fa-hospital", title: "Santé & biotechnologie" },
  ];
}
