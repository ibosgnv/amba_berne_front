import { Component, signal } from "@angular/core";
import { RouterLink } from "@angular/router";

interface Tab {
  id: string;
  icon: string;
  title: string;
  description: string;
  action: string;
  link?: string;
}

@Component({
  selector: "app-accueil-infos-utiles",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./infos-utiles.component.html",
  styleUrl: "./infos-utiles.component.css",
})
export class AccueilInfosUtilesComponent {
  protected readonly tabs: Tab[] = [
    {
      id: "opportunites",
      icon: "fa-solid fa-chart-line",
      title: "Opportunités RDC",
      description:
        "Offres d'emploi, formations, appels à projets, stages, bénévolat, veille économique et missions humanitaires.",
      action: "Contacter",
      link: "/contact",
    },
    // { id: "business", icon: "fa-solid fa-briefcase", title: "Business", description: "Mise en relation avec chambres de commerce, investisseurs et sponsors. Développement de projets et services.", action: "Proposer un projet" },
    {
      id: "evenements",
      icon: "fa-solid fa-calendar-days",
      title: "Événements",
      description:
        "Agenda des événements en Suisse et au sein de la diaspora : culturels, économiques, professionnels.",
      action: "S'inscrire",
      link: "/contact",
    },
    //{ id: "voyageurs", icon: "fa-solid fa-plane", title: "Conseils aux voyageurs", description: "Recommandations pour voyager en RDC, itinéraires personnalisés, informations sanitaires et sécuritaires.", action: "Obtenir un itinéraire" },
    {
      id: "tourisme",
      icon: "fa-solid fa-mountain-sun",
      title: "Tourisme",
      description:
        "Sites touristiques, informations pratiques, accès, coûts et hébergement.",
      action: "Explorer la RDC",
      link: "https://www.tourisme.gouv.cd/home",
    },
    //{ id: "sante", icon: "fa-solid fa-stethoscope", title: "Informations sanitaires", description: "Santé publique, vaccins obligatoires, mesures préventives pour voyager en sécurité.", action: "Consulter" },
    // { id: "lois", icon: "fa-solid fa-scale-balanced", title: "Nouvelles lois", description: "Mise à jour des lois et réglementations administratives et économiques.", action: "Lire les publications" },
    //{ id: "partenariats", icon: "fa-solid fa-handshake", title: "Partenariats", description: "Opportunités de coopération gagnant-gagnant entre la RDC et ses partenaires internationaux.", action: "Prendre contact" },
    //{ id: "formation", icon: "fa-solid fa-graduation-cap", title: "Formation", description: "Programmes éducatifs, formations professionnelles et renforcement des capacités.", action: "S'inscrire" },
  ];

  protected readonly activeId = signal(this.tabs[0].id);

  selectTab(id: string) {
    this.activeId.set(id);
  }

  activeTab() {
    return this.tabs.find((t) => t.id === this.activeId()) ?? this.tabs[0];
  }

  isExternal(link?: string) {
    return !!link && /^https?:\/\//i.test(link);
  }
}
