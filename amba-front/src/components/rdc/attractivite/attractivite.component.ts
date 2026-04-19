import { Component, signal } from "@angular/core";

type TabId = "opportunites" | "climat" | "ressources" | "temoignages";

@Component({
  selector: "app-rdc-attractivite",
  standalone: true,
  imports: [],
  templateUrl: "./attractivite.component.html",
  styleUrl: "./attractivite.component.css",
})
export class RdcAttractiviteComponent {
  protected readonly tabs: { id: TabId; label: string; icon: string }[] = [
    { id: "opportunites", label: "Opportunités", icon: "📊" },
    { id: "climat", label: "Climat des affaires", icon: "📉" },
    { id: "ressources", label: "Ressources stratégiques", icon: "⚡" },
    { id: "temoignages", label: "Témoignages", icon: "🧾" },
  ];

  protected readonly activeTab = signal<TabId>("opportunites");

  protected readonly sectors = [
    { icon: "⛏️", name: "Mines", desc: "Cobalt, cuivre, coltan, or, diamant." },
    { icon: "🌾", name: "Agro-industrie", desc: "Café, cacao, huile de palme, caoutchouc." },
    { icon: "⚡", name: "Énergie", desc: "Hydroélectricité, solaire, biomasse." },
    { icon: "🏗️", name: "Infrastructures", desc: "Routes, ports, télécoms, logement." },
    { icon: "💊", name: "Pharma & santé", desc: "Biodiversité, plantes médicinales." },
    { icon: "💻", name: "Tech & digital", desc: "Fintech, e-commerce, services IT." },
  ];

  protected readonly climatIndicators = [
    { label: "Réformes administratives", value: "Simplification du guichet unique", trend: "+" },
    { label: "Cadre légal", value: "Code des investissements modernisé", trend: "+" },
    { label: "Fiscalité", value: "Exonérations ciblées à l'investissement", trend: "+" },
    { label: "Zones économiques spéciales", value: "4 ZES opérationnelles", trend: "+" },
  ];

  protected readonly resources = [
    { icon: "💧", title: "Énergie hydroélectrique", desc: "Potentiel du barrage d'Inga estimé à 44 000 MW — 2ᵉ mondial." },
    { icon: "💎", title: "Minerais stratégiques", desc: "70% du cobalt mondial produit en RDC, clé des technologies vertes." },
    { icon: "🌿", title: "Biodiversité", desc: "2ᵉ massif forestier tropical de la planète, puits de carbone stratégique." },
  ];

  protected readonly testimonials = [
    {
      author: "CEO, PME suisse agro-industrielle",
      quote: "Nous sommes implantés depuis 12 ans en RDC. Les opportunités sont réelles, les équipes locales exceptionnelles.",
    },
    {
      author: "Responsable investissements, fonds genevois",
      quote: "L'ANAPI a été un partenaire fiable pour structurer notre entrée sur le marché congolais.",
    },
    {
      author: "Directrice export, groupe zurichois",
      quote: "Les exonérations à l'import nous ont permis d'installer nos équipements dans les meilleures conditions.",
    },
  ];

  setTab(id: TabId) {
    this.activeTab.set(id);
  }
}
