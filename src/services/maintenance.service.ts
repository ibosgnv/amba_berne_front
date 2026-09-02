import { HttpClient } from '@angular/common/http';
import { Injectable, signal, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MaintenanceService {
  private readonly http = inject(HttpClient);

  readonly isActive = signal(false);

  constructor() {
    this.http.get<{ active: boolean }>('/maintenance.json', { params: { t: Date.now() } })
      .subscribe({ next: res => this.isActive.set(res.active) });
  }
}
