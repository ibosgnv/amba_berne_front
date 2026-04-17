import { Component } from "@angular/core";

@Component({
  selector: "app-accueil-rdc-en-suisse",
  standalone: true,
  imports: [],
  templateUrl: "./rdc-en-suisse.component.html",
  styleUrl: "./rdc-en-suisse.component.css",
})
export class AccueilRdcEnSuisseComponent {
  protected readonly piliers = [
    { icon: "🗣️", title: "Dialogue institutionnel", desc: "Renforcement des relations entre la RDC et la Confédération suisse." },
    { icon: "💱", title: "Échanges économiques", desc: "Promotion des investissements et du commerce bilatéral." },
    { icon: "🎭", title: "Valorisation culturelle", desc: "Mise en lumière de la richesse culturelle congolaise." },
    { icon: "🫂", title: "Accompagnement diaspora", desc: "Intégration et soutien des ressortissants congolais." },
  ];
}
