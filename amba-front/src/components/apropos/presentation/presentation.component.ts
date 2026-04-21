import { Component } from "@angular/core";

@Component({
  selector: "app-apropos-presentation",
  standalone: true,
  imports: [],
  templateUrl: "./presentation.component.html",
  styleUrl: "./presentation.component.css",
})
export class AproposPresentationComponent {
  protected readonly missions = [
    {
      icon: "🌐",
      title: "Promouvoir",
      desc: "les intérêts de la RDC à l'étranger.",
    },
    {
      icon: "🤝",
      title: "Accompagner",
      desc: "les ressortissants congolais en Suisse.",
    },
    {
      icon: "🔄",
      title: "Faciliter",
      desc: "les échanges bilatéraux (commerce, culture, éducation).",
    },
    {
      icon: "🏛️",
      title: "Coopérer",
      desc: "avec les institutions internationales basées en Suisse.",
    },
  ];

  protected readonly stats = [
    { value: "60+", label: "Années de coopération" },
    { value: "5", label: "Services spécialisés" },
    // { value: "24/7", label: "Assistance d'urgence" },
  ];
}
