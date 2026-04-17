import { Component, signal, computed } from "@angular/core";

export interface ServiceItem {
  title: string;
  imageUrl: string;
}

@Component({
  selector: "app-apercu-service",
  standalone: true,
  imports: [],
  templateUrl: "./apercu-service.component.html",
  styleUrl: "./apercu-service.component.css",
})
export class ApercuService {
  readonly visibleCount = 3;

  services: ServiceItem[] = [
    {
      title: "Demande de visa",
      imageUrl: "https://picsum.photos/seed/city/300/300",
    },
    {
      title: "Légalisation de documents",
      imageUrl: "https://picsum.photos/seed/sport/300/300",
    },
    {
      title: "Passeports et documents d’identité",
      imageUrl: "https://picsum.photos/seed/food/300/300",
    },
    {
      title: "Guide touristique",
      imageUrl: "https://picsum.photos/seed/nature/300/300",
    },
    {
      title: "Assistance consulaire aux ressortissants",
      imageUrl: "https://picsum.photos/seed/culture/300/300",
    },
  ];

  currentIndex = signal(0);

  visibleServices = computed(() =>
    this.services.slice(
      this.currentIndex(),
      this.currentIndex() + this.visibleCount,
    ),
  );

  canPrev = computed(() => this.currentIndex() > 0);
  canNext = computed(
    () => this.currentIndex() + this.visibleCount < this.services.length,
  );

  prev(): void {
    if (this.canPrev()) this.currentIndex.update((i) => i - 1);
  }

  next(): void {
    if (this.canNext()) this.currentIndex.update((i) => i + 1);
  }
}
