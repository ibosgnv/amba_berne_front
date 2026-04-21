import { Routes } from "@angular/router";
import { AccueilComponent } from "../components/accueil/accueil.component";
import { ServicesComponent } from "../components/services/services.component";
import { EDemarcheComponent } from "../components/services/e-demarche/e-demarche.component";
import { DemandeVisaComponent } from "../components/services/demande-visa/demande-visa.component";
import { DemandePasseportComponent } from "../components/services/demande-passeport/demande-passeport.component";
import { AproposComponent } from "../components/apropos/apropos.component";
import { RdcComponent } from "../components/rdc/rdc.component";
import { ContactComponent } from "../components/contact/contact.component";

export const routes: Routes = [
  { path: "", component: AccueilComponent, pathMatch: "full" },
  {
    path: "services",
    children: [
      { path: "", component: ServicesComponent, pathMatch: "full" },
      { path: "demande-visa", component: DemandeVisaComponent },
      { path: "demande-passeport", component: DemandePasseportComponent },
      { path: "e-demarche/:id", component: EDemarcheComponent },
    ],
  },
  { path: "a-propos", component: AproposComponent },
  { path: "rdc", component: RdcComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", redirectTo: "" },
];
