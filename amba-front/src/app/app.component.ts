import { Component, signal } from "@angular/core";
import { Accueil } from "../components/accueil/accueil.component";

@Component({
  selector: "app-root",
  imports: [Accueil],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class App {
  protected readonly title = signal("amba-front");
}
