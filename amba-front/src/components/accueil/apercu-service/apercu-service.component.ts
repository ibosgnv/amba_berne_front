import { Component, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';

export interface ServiceItem {
  title: string;
  type: 'city' | 'sport' | 'food' | 'nature' | 'culture';
}

@Component({
  selector: 'app-apercu-service',
  standalone: true,
  imports: [NgClass],
  templateUrl: './apercu-service.component.html',
  styleUrl: './apercu-service.component.css'
})
export class ApercuService {
  readonly visibleCount = 3;

  services: ServiceItem[] = [
    { title: 'Guide touristique', type: 'city' },
    { title: 'Guide touristique', type: 'sport' },
    { title: 'Guide touristique', type: 'food' },
    { title: 'Guide touristique', type: 'nature' },
    { title: 'Guide touristique', type: 'culture' },
  ];

  currentIndex = signal(0);

  visibleServices = computed(() =>
    this.services.slice(this.currentIndex(), this.currentIndex() + this.visibleCount)
  );

  canPrev = computed(() => this.currentIndex() > 0);
  canNext = computed(() => this.currentIndex() + this.visibleCount < this.services.length);

  prev(): void {
    if (this.canPrev()) this.currentIndex.update(i => i - 1);
  }

  next(): void {
    if (this.canNext()) this.currentIndex.update(i => i + 1);
  }
}
