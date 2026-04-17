import { Component, signal } from "@angular/core";

@Component({
  selector: "app-services-hero",
  standalone: true,
  imports: [],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css",
})
export class ServicesHeroComponent {
  protected readonly query = signal("");
}
