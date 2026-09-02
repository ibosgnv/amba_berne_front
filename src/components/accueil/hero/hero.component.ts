import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { RouterLink } from "@angular/router";

interface HeroTheme {
  title: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  routerLink: string;
}

@Component({
  selector: "app-accueil-hero",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css",
})
export class AccueilHeroComponent implements OnInit, OnDestroy {
  protected readonly themes: HeroTheme[] = [
    {
      title: "Démarches administratives",
      description:
        "Effectuez vos démarches consulaires en ligne en toute simplicité.",
      image: "/assets/passeports.jpg",
      alt: "Passeport congolais",
      cta: "Faire une e-démarche",
      routerLink: "/services",
    },
    {
      title: "Diplomatie",
      description: "Découvrez l'action diplomatique de la RDC en Suisse.",
      image: "/assets/diplomatie.jpg",
      alt: "Rencontre diplomatique",
      cta: "En savoir plus",
      routerLink: "/a-propos",
    },
    {
      title: "Tourisme",
      description: "Explorez les paysages, la faune et la culture congolaise.",
      image: "/assets/okapi_tourisme.jpg",
      alt: "Okapi, faune de la RDC",
      cta: "Visiter la RDC",
      routerLink: "/rdc",
    },
    {
      title: "Attractivité",
      description:
        "Investissez dans un pays riche en ressources et opportunités.",
      image: "/assets/cobalt.jpg",
      alt: "Ressources et économie de la RDC",
      cta: "Explorer les opportunités",
      routerLink: "/rdc",
    },
  ];

  protected readonly currentIndex = signal(0);
  private readonly intervalMs = 5000;
  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex.update((i) => (i + 1) % this.themes.length);
    }, this.intervalMs);
  }

  ngOnDestroy(): void {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
    }
  }
}
