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
    { icon: "fa-solid fa-comment-dots", title: "Dialogue institutionnel", desc: "Renforcement des relations entre la RDC et la Confédération suisse." },
    { icon: "fa-solid fa-money-bill-transfer", title: "Échanges économiques", desc: "Promotion des investissements et du commerce bilatéral." },
    { icon: "fa-solid fa-masks-theater", title: "Valorisation culturelle", desc: "Mise en lumière de la richesse culturelle congolaise." },
    { icon: "fa-solid fa-people-group", title: "Accompagnement diaspora", desc: "Intégration et soutien des ressortissants congolais." },
  ];
}
