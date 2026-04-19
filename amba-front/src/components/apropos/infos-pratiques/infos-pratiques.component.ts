import { Component } from "@angular/core";

@Component({
  selector: "app-apropos-infos-pratiques",
  standalone: true,
  imports: [],
  templateUrl: "./infos-pratiques.component.html",
  styleUrl: "./infos-pratiques.component.css",
})
export class AproposInfosPratiquesComponent {
  protected readonly hours = [
    { day: "Lundi – Vendredi", value: "09h00 – 16h00" },
    { day: "Samedi", value: "Fermé" },
    { day: "Dimanche", value: "Fermé" },
  ];

  protected readonly socials = [
    { icon: "📘", label: "Facebook", url: "#" },
    { icon: "✖️", label: "Twitter / X", url: "#" },
    { icon: "💼", label: "LinkedIn", url: "#" },
    { icon: "📸", label: "Instagram", url: "#" },
  ];
}
