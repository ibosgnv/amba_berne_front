import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-apropos-infos-pratiques",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./infos-pratiques.component.html",
  styleUrl: "./infos-pratiques.component.css",
})
export class AproposInfosPratiquesComponent {
  protected readonly mapUrl: SafeResourceUrl;
  protected readonly mapLink =
    "https://www.google.com/maps/search/?api=1&query=Ambassade+RDC+Berne+Suisse";

  constructor(sanitizer: DomSanitizer) {
    this.mapUrl = sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.google.com/maps?q=Ambassade+RDC+Berne+Suisse&output=embed",
    );
  }

  protected readonly hours = [
    { day: "Lundi – Vendredi", value: "09h00 – 16h00" },
    { day: "Samedi", value: "Fermé" },
    { day: "Dimanche", value: "Fermé" },
  ];

  protected readonly socials = [
    { icon: "fa-solid fa-book", label: "Facebook", url: "#" },
    { icon: "fa-solid fa-xmark", label: "Twitter / X", url: "#" },
    { icon: "fa-solid fa-briefcase", label: "LinkedIn", url: "#" },
    { icon: "fa-solid fa-camera", label: "Instagram", url: "#" },
  ];
}
