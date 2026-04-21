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
    { id: "presidence", label: "Présidence de la RDC", icon: "🇨🇩" },
    { id: "commerce", label: "Commerce extérieur", icon: "🌐" },
    { id: "institutions", label: "Institutions clés", icon: "🏛️" },
  ] as const;

  protected readonly activeTab = signal<string>("presidence");

  protected readonly president = {
    nom: "Félix-Antoine Tshisekedi Tshilombo",
    fonction: "Président de la République Démocratique du Congo",
    photo: "/assets/president_rdc.jpg",
    investiture: "24 janvier 2019",
    reelection: "Réélu pour un second mandat le 20 décembre 2023",
    naissance: "13 juin 1963, Léopoldville (aujourd'hui Kinshasa)",
    parti: "Union pour la Démocratie et le Progrès Social (UDPS)",
    devise: "« Le peuple d'abord »",
    bio: "Fils d'Étienne Tshisekedi, figure historique de l'opposition congolaise, Félix Tshisekedi est élu Président de la République en décembre 2018, marquant la première alternance démocratique de l'histoire du pays. Il est investi le 24 janvier 2019. Il a également présidé l'Union africaine en 2021, portant la voix du continent sur la scène internationale.",
    axes: [
      "Consolidation de l'État de droit et lutte contre la corruption",
      "Gratuité de l'enseignement primaire",
      "Couverture santé universelle",
      "Diversification de l'économie et industrialisation",
      "Restauration de la paix à l'Est du pays",
    ],
    realisations: [
      {
        icon: "🎓",
        title: "Gratuité de l'enseignement primaire",
        desc: "Mise en œuvre effective depuis 2019, permettant la scolarisation de millions d'enfants.",
      },
      {
        icon: "🏥",
        title: "Couverture santé universelle",
        desc: "Programme ambitieux de prise en charge médicale, à commencer par la maternité gratuite.",
      },
      {
        icon: "🌍",
        title: "Présidence de l'Union africaine",
        desc: "Présidence de l'UA en 2021 : voix panafricaine sur le climat, la paix et la jeunesse.",
      },
    ],
  };

  protected readonly missions = [
    "Faciliter les échanges internationaux",
    "Promouvoir les exportations congolaises",
    "Attirer les investissements étrangers",
    "Accompagner les opérateurs économiques",
  ];

  protected readonly institutions = [
    {
      short: "MCE",
      name: "Ministère du Commerce Extérieur",
      desc: "Politique commerciale et stratégie d'internationalisation.",
    },
    {
      short: "ANAPI",
      name: "Agence Nationale pour la Promotion des Investissements",
      desc: "Guichet unique des investisseurs étrangers.",
    },
    {
      short: "BCC",
      name: "Banque Centrale du Congo",
      desc: "Politique monétaire et stabilité financière.",
    },
    {
      short: "FEC",
      name: "Fédération des Entreprises du Congo",
      desc: "Principale chambre de commerce du pays.",
    },
  ];

  setTab(id: string) {
    this.activeTab.set(id);
  }
}
