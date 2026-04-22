import { Component } from "@angular/core";

@Component({
  selector: "app-accueil-presentation",
  standalone: true,
  imports: [],
  templateUrl: "./presentation.component.html",
  styleUrl: "./presentation.component.css",
})
export class AccueilPresentationComponent {
  protected readonly piliers = [
    { icon: "fa-solid fa-handshake", title: "Diplomatie", desc: "Représentation de l'État congolais et dialogue bilatéral." },
    { icon: "fa-solid fa-receipt", title: "Services consulaires", desc: "Démarches administratives accessibles et sécurisées." },
    { icon: "fa-solid fa-earth-africa", title: "Coopération", desc: "Partenariats économiques, culturels et scientifiques." },
    { icon: "fa-solid fa-people-group", title: "Diaspora", desc: "Accompagnement des ressortissants congolais en Suisse." },
  ];
}
