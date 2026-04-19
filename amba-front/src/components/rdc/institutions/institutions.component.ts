import { Component, signal } from "@angular/core";

@Component({
  selector: "app-rdc-institutions",
  standalone: true,
  imports: [],
  templateUrl: "./institutions.component.html",
  styleUrl: "./institutions.component.css",
})
export class RdcInstitutionsComponent {
  protected readonly tabs = [
    { id: "commerce", label: "Commerce extérieur", icon: "🌐" },
    { id: "institutions", label: "Institutions clés", icon: "🏛️" },
  ] as const;

  protected readonly activeTab = signal<string>("commerce");

  protected readonly missions = [
    "Faciliter les échanges internationaux",
    "Promouvoir les exportations congolaises",
    "Attirer les investissements étrangers",
    "Accompagner les opérateurs économiques",
  ];

  protected readonly institutions = [
    { short: "MCE", name: "Ministère du Commerce Extérieur", desc: "Politique commerciale et stratégie d'internationalisation." },
    { short: "ANAPI", name: "Agence Nationale pour la Promotion des Investissements", desc: "Guichet unique des investisseurs étrangers." },
    { short: "BCC", name: "Banque Centrale du Congo", desc: "Politique monétaire et stabilité financière." },
    { short: "FEC", name: "Fédération des Entreprises du Congo", desc: "Principale chambre de commerce du pays." },
  ];

  setTab(id: string) {
    this.activeTab.set(id);
  }
}
