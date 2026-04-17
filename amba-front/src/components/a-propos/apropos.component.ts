import { Component } from "@angular/core";
import { AproposLandingComponent } from "./apropos-landing/apropos-landing.component";
import { AproposAmbassadeurComponent } from "./apropos-ambassadeur/apropos-ambassadeur.component";

@Component({
  selector: "app-apropos",
  imports: [AproposLandingComponent, AproposAmbassadeurComponent],
  templateUrl: "./apropos.component.html",
  styleUrl: "./apropos.component.css",
})
export class AproposComponent {}
