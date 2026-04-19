import { Component } from "@angular/core";
import { AproposHeroComponent } from "./hero/hero.component";
import { AproposPresentationComponent } from "./presentation/presentation.component";
import { AproposAmbassadeurComponent } from "./ambassadeur/ambassadeur.component";
import { AproposEquipeComponent } from "./equipe/equipe.component";
import { AproposInfosPratiquesComponent } from "./infos-pratiques/infos-pratiques.component";

@Component({
  selector: "app-apropos",
  standalone: true,
  imports: [
    AproposHeroComponent,
    AproposPresentationComponent,
    AproposAmbassadeurComponent,
    AproposEquipeComponent,
    AproposInfosPratiquesComponent,
  ],
  templateUrl: "./apropos.component.html",
  styleUrl: "./apropos.component.css",
})
export class AproposComponent {}
