import { Routes } from "@angular/router";
import { AccueilComponent } from "../components/accueil/accueil.component";
import { ServicesComponent } from "../components/services/services.component";

export const routes: Routes = [
  { path: "", component: AccueilComponent, pathMatch: "full" },
  { path: "services", component: ServicesComponent },
  { path: "**", redirectTo: "" },
];
