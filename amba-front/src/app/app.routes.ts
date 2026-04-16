import { Routes } from "@angular/router";
import { Accueil } from "../components/accueil/accueil.component";
import { EnConstruction } from "../components/shared/en-construction/en-construction.component";

export const routes: Routes = [
  { path: "", component: Accueil, pathMatch: "full" },
  { path: "passeports", component: EnConstruction },
  { path: "visas", component: EnConstruction },
  { path: "rdc-suisse", component: EnConstruction },
  { path: "autres-services", component: EnConstruction },
  { path: "**", redirectTo: "" },
];
