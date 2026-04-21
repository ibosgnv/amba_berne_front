import { Routes } from "@angular/router";
import { AccueilComponent } from "../components/accueil/accueil.component";
import { ServicesComponent } from "../components/services/services.component";
import { AproposComponent } from "../components/apropos/apropos.component";
import { RdcComponent } from "../components/rdc/rdc.component";
import { ContactComponent } from "../components/contact/contact.component";

export const routes: Routes = [
  { path: "", component: AccueilComponent, pathMatch: "full" },
  { path: "services", component: ServicesComponent },
  { path: "a-propos", component: AproposComponent },
  { path: "rdc", component: RdcComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", redirectTo: "" },
];
