import { Component } from "@angular/core";

@Component({
  selector: "app-services-accompagnement",
  standalone: true,
  imports: [],
  templateUrl: "./accompagnement.component.html",
  styleUrl: "./accompagnement.component.css",
})
export class ServicesAccompagnementComponent {
  protected readonly sections = [
    {
      icon: "🤝",
      title: "Partenariats",
      desc: "Mise en relation entre acteurs économiques, institutionnels et culturels RDC–Suisse.",
      items: ["Mise en relation B2B", "Soutien aux missions officielles", "Accompagnement d'investisseurs"],
      color: "from-[#007FFF]/10 to-white",
      accent: "#007FFF",
    },
    {
      icon: "🧭",
      title: "Aide aux voyageurs",
      desc: "Informations pratiques, conseils et assistance avant, pendant et après votre voyage.",
      items: ["Conseils de voyage actualisés", "Contacts d'urgence 24/7", "Formalités sanitaires"],
      color: "from-[#FCD116]/15 to-white",
      accent: "#0b1a5c",
    },
    {
      icon: "📘",
      title: "Guide des ressortissants",
      desc: "Ressource officielle pour les Congolais vivant ou s'installant en Suisse.",
      items: ["Inscription consulaire", "Registre d'état civil", "Association diaspora"],
      color: "from-[#72d4e0]/20 to-white",
      accent: "#007FFF",
    },
    {
      icon: "🏡",
      title: "Vivre en Suisse",
      desc: "Intégration, logement, travail, éducation : les clés pour réussir votre installation.",
      items: ["Démarches administratives", "Scolarité et formation", "Santé & assurances"],
      color: "from-[#0b1a5c]/10 to-white",
      accent: "#0b1a5c",
    },
  ];

  protected readonly supports = [
    { icon: "📞", label: "Hotline d'urgence", value: "+41 (0)31 123 45 67" },
    { icon: "✉️", label: "Email dédié", value: "assistance@ambardc-berne.ch" },
    { icon: "🕑", label: "Horaires", value: "Lun–Ven · 09h–16h" },
  ];
}
