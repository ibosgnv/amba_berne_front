import { Component } from "@angular/core";
import { AccueilHeroComponent } from "./hero/hero.component";
import { AccueilPresentationComponent } from "./presentation/presentation.component";
import { AccueilServicesApercuComponent } from "./services-apercu/services-apercu.component";
import { AccueilActualitesComponent } from "./actualites/actualites.component";
import { AccueilOpportunitesComponent } from "./opportunites/opportunites.component";
import { AccueilRdcEnSuisseComponent } from "./rdc-en-suisse/rdc-en-suisse.component";
import { AccueilInfosUtilesComponent } from "./infos-utiles/infos-utiles.component";
import { AccueilContactAssistanceComponent } from "./contact-assistance/contact-assistance.component";

@Component({
  selector: "app-accueil",
  standalone: true,
  imports: [
    AccueilHeroComponent,
    AccueilPresentationComponent,
    AccueilServicesApercuComponent,
    AccueilActualitesComponent,
    AccueilOpportunitesComponent,
    AccueilRdcEnSuisseComponent,
    AccueilInfosUtilesComponent,
    AccueilContactAssistanceComponent,
  ],
  templateUrl: "./accueil.component.html",
  styleUrl: "./accueil.component.css",
})
export class AccueilComponent {}
