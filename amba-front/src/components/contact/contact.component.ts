import { Component } from "@angular/core";
import { ContactHeroComponent } from "./hero/hero.component";
import { ContactHorairesComponent } from "./horaires/horaires.component";
import { ContactCoordonneesComponent } from "./coordonnees/coordonnees.component";
import { ContactFormulaireComponent } from "./formulaire/formulaire.component";
import { ContactAssistanceComponent } from "./assistance/assistance.component";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [
    ContactHeroComponent,
    ContactHorairesComponent,
    ContactCoordonneesComponent,
    ContactFormulaireComponent,
    ContactAssistanceComponent,
  ],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {}
