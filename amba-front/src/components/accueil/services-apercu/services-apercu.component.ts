import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-accueil-services-apercu",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./services-apercu.component.html",
  styleUrl: "./services-apercu.component.css",
})
export class AccueilServicesApercuComponent {
  protected readonly services = [
    { icon: "fa-solid fa-passport", title: "Visa", desc: "Demande de visa court, long séjour, affaires, tourisme.", fragment: "services-visas" },
    { icon: "fa-solid fa-scroll", title: "Légalisation", desc: "Légalisation de documents officiels et actes.", fragment: "services-consulaires" },
    { icon: "fa-solid fa-id-card", title: "Passeport", desc: "Délivrance et renouvellement de passeports et documents d'identité.", fragment: "services-visas" },
    { icon: "fa-solid fa-people-group", title: "Assistance", desc: "Assistance consulaire aux ressortissants congolais.", fragment: "support-immediat" },
  ];
}
