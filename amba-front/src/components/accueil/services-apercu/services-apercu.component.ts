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
    { icon: "🛂", title: "Visa", desc: "Demande de visa court, long séjour, affaires, tourisme.", fragment: "services-visas" },
    { icon: "📜", title: "Légalisation", desc: "Légalisation de documents officiels et actes.", fragment: "services-consulaires" },
    { icon: "🆔", title: "Passeport", desc: "Délivrance et renouvellement de passeports et documents d'identité.", fragment: "services-visas" },
    { icon: "🫂", title: "Assistance", desc: "Assistance consulaire aux ressortissants congolais.", fragment: "support-immediat" },
  ];
}
