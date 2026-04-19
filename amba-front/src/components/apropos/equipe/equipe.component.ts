import { Component, signal } from "@angular/core";

type Department = "all" | "diplomatique" | "consulaire" | "administratif" | "communication";

interface Member {
  initials: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  dept: Exclude<Department, "all">;
  accent: string;
}

@Component({
  selector: "app-apropos-equipe",
  standalone: true,
  imports: [],
  templateUrl: "./equipe.component.html",
  styleUrl: "./equipe.component.css",
})
export class AproposEquipeComponent {
  protected readonly filters: { id: Department; label: string }[] = [
    { id: "all", label: "Tous" },
    { id: "diplomatique", label: "Diplomatique" },
    { id: "consulaire", label: "Consulaire" },
    { id: "administratif", label: "Administratif" },
    { id: "communication", label: "Communication" },
  ];

  protected readonly activeFilter = signal<Department>("all");

  protected readonly members: Member[] = [
    {
      initials: "AM",
      name: "S.E. [Ambassadeur]",
      role: "Ambassadeur Extraordinaire et Plénipotentiaire",
      email: "ambassadeur@ambardc-berne.ch",
      phone: "+41 31 123 45 67",
      dept: "diplomatique",
      accent: "#FCD116",
    },
    {
      initials: "CD",
      name: "[Nom complet]",
      role: "Conseiller Diplomatique",
      email: "conseiller@ambardc-berne.ch",
      phone: "+41 31 123 45 68",
      dept: "diplomatique",
      accent: "#007FFF",
    },
    {
      initials: "SC",
      name: "[Nom complet]",
      role: "Responsable Service Consulaire",
      email: "consulat@ambardc-berne.ch",
      phone: "+41 31 123 45 69",
      dept: "consulaire",
      accent: "#0b1a5c",
    },
    {
      initials: "SA",
      name: "[Nom complet]",
      role: "Responsable Administratif",
      email: "administration@ambardc-berne.ch",
      phone: "+41 31 123 45 70",
      dept: "administratif",
      accent: "#72d4e0",
    },
    {
      initials: "SC",
      name: "[Nom complet]",
      role: "Responsable Culturel & Communication",
      email: "communication@ambardc-berne.ch",
      phone: "+41 31 123 45 71",
      dept: "communication",
      accent: "#007FFF",
    },
  ];

  setFilter(id: Department) {
    this.activeFilter.set(id);
  }

  visibleMembers() {
    const f = this.activeFilter();
    return f === "all" ? this.members : this.members.filter((m) => m.dept === f);
  }
}
