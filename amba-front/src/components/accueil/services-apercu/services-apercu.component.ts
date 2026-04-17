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
    { icon: "🛂", title: "Visa", desc: "Demande de visa court, long séjour, affaires, tourisme." },
    { icon: "📜", title: "Légalisation", desc: "Légalisation de documents officiels et actes." },
    { icon: "🆔", title: "Passeport", desc: "Délivrance et renouvellement de passeports et documents d'identité." },
    { icon: "🫂", title: "Assistance", desc: "Assistance consulaire aux ressortissants congolais." },
  ];
}
