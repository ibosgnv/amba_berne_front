import { Routes } from "@angular/router";
import { Accueil } from "../components/accueil/accueil.component";
import { EnConstruction } from "../components/shared/en-construction/en-construction.component";
import { AproposComponent } from "../components/a-propos/apropos.component";

export const routes: Routes = [
  { path: "", component: Accueil, pathMatch: "full" },
  { path: "a-propos", component: AproposComponent },
  { path: "visas", component: EnConstruction },
  { path: "rdc-suisse", component: EnConstruction },
  { path: "autres-services", component: EnConstruction },
  { path: "**", redirectTo: "" },
];
