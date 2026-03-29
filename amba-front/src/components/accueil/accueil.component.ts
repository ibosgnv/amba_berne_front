import { Component } from "@angular/core";
import { ApercuService } from "./apercu-service/apercu-service.component";
import { Actualites } from "./actualites/actualites.component";
import { InfosUtiles } from "./infos-utiles/infos-utiles.component";
import { Landing } from "./landing/landing.component";

@Component({
  selector: "app-accueil",
  standalone: true,
  imports: [ApercuService, Actualites, InfosUtiles, Landing],
  templateUrl: "./accueil.component.html",
  styleUrl: "./accueil.component.css",
})
export class Accueil {}
