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
    { icon: "🤝", title: "Diplomatie", desc: "Représentation de l'État congolais et dialogue bilatéral." },
    { icon: "🧾", title: "Services consulaires", desc: "Démarches administratives accessibles et sécurisées." },
    { icon: "🌍", title: "Coopération", desc: "Partenariats économiques, culturels et scientifiques." },
    { icon: "🫂", title: "Diaspora", desc: "Accompagnement des ressortissants congolais en Suisse." },
  ];
}
