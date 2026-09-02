import { Component, OnDestroy, OnInit, computed, signal } from "@angular/core";

@Component({
  selector: "app-contact-horaires",
  standalone: true,
  imports: [],
  templateUrl: "./horaires.component.html",
  styleUrl: "./horaires.component.css",
})
export class ContactHorairesComponent implements OnInit, OnDestroy {
  private readonly tick = signal(new Date());
  private intervalId?: ReturnType<typeof setInterval>;

  protected readonly days = [
    { label: "Lundi",    open: "10h00", close: "12h00", open2: "13h00", close2: "15h00", idx: 1 },
    { label: "Mardi",    open: "10h00", close: "12h00", open2: "13h00", close2: "15h00", idx: 2 },
    { label: "Mercredi", open: "10h00", close: "12h00", open2: "13h00", close2: "15h00", idx: 3 },
    { label: "Jeudi",    open: "10h00", close: "12h00", open2: "13h00", close2: "15h00", idx: 4 },
    { label: "Vendredi", open: "10h00", close: "12h00", open2: "13h00", close2: "15h00", idx: 5 },
    { label: "Samedi",   open: null,    close: null,    open2: null,    close2: null,    idx: 6 },
    { label: "Dimanche", open: null,    close: null,    open2: null,    close2: null,    idx: 0 },
  ];

  protected readonly isOpen = computed(() => {
    const now = this.tick();
    const day = now.getDay();
    if (day === 0 || day === 6) return false;
    const minutes = now.getHours() * 60 + now.getMinutes();
    return (minutes >= 10 * 60 && minutes < 12 * 60) ||
           (minutes >= 13 * 60 && minutes < 15 * 60);
  });

  protected readonly todayIdx = computed(() => this.tick().getDay());

  ngOnInit() {
    this.intervalId = setInterval(() => this.tick.set(new Date()), 60_000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
