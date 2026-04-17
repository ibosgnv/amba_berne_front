import { Component, signal } from "@angular/core";

interface Tab {
  id: string;
  icon: string;
  title: string;
  description: string;
  action: string;
}

@Component({
  selector: "app-accueil-infos-utiles",
  standalone: true,
  imports: [],
  templateUrl: "./infos-utiles.component.html",
  styleUrl: "./infos-utiles.component.css",
})
export class AccueilInfosUtilesComponent {
  protected readonly tabs: Tab[] = [
    { id: "opportunites", icon: "📈", title: "Opportunités RDC", description: "Offres d'emploi, formations, appels à projets, stages, bénévolat, veille économique et missions humanitaires.", action: "Postuler / Contacter" },
    { id: "business", icon: "💼", title: "Business", description: "Mise en relation avec chambres de commerce, investisseurs et sponsors. Développement de projets et services.", action: "Proposer un projet" },
    { id: "evenements", icon: "📅", title: "Événements", description: "Agenda des événements en Suisse et au sein de la diaspora : culturels, économiques, professionnels.", action: "S'inscrire" },
    { id: "voyageurs", icon: "✈️", title: "Conseils aux voyageurs", description: "Recommandations pour voyager en RDC, itinéraires personnalisés, informations sanitaires et sécuritaires.", action: "Obtenir un itinéraire" },
    { id: "tourisme", icon: "🏞️", title: "Tourisme", description: "Sites touristiques, informations pratiques, accès, coûts et hébergement.", action: "Télécharger le guide" },
    { id: "sante", icon: "🩺", title: "Informations sanitaires", description: "Santé publique, vaccins obligatoires, mesures préventives pour voyager en sécurité.", action: "Consulter" },
    { id: "lois", icon: "⚖️", title: "Nouvelles lois", description: "Mise à jour des lois et réglementations administratives et économiques.", action: "Lire les publications" },
    { id: "partenariats", icon: "🤝", title: "Partenariats", description: "Opportunités de coopération gagnant-gagnant entre la RDC et ses partenaires internationaux.", action: "Prendre contact" },
    { id: "formation", icon: "🎓", title: "Formation", description: "Programmes éducatifs, formations professionnelles et renforcement des capacités.", action: "S'inscrire" },
  ];

  protected readonly activeId = signal(this.tabs[0].id);

  selectTab(id: string) {
    this.activeId.set(id);
  }

  activeTab() {
    return this.tabs.find((t) => t.id === this.activeId()) ?? this.tabs[0];
  }
}
