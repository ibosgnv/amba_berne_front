import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../components/shared/navbar/navbar.component";
import { FooterComponent } from "../components/shared/footer/footer.component";
import { MaintenanceComponent } from "../components/shared/maintenance/maintenance.component";
import { MaintenanceService } from "../services/maintenance.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, MaintenanceComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class App {
  protected readonly maintenance = inject(MaintenanceService);
}
