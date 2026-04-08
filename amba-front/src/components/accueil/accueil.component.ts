import { Component } from "@angular/core";
import { ApercuService } from "./apercu-service/apercu-service.component";
import { Actualites } from "./actualites/actualites.component";
import { InfosUtiles } from "./infos-utiles/infos-utiles.component";
import { Landing } from "./landing/landing.component";
import { Landing1Component } from "./landing1/landing1.component";
import { Navbar } from "../shared/navbar/navbar.component";

@Component({
  selector: "app-accueil",
  standalone: true,
  imports: [
    ApercuService,
    Actualites,
    InfosUtiles,
    Landing,
    Landing1Component,
    Navbar,
  ],
  templateUrl: "./accueil.component.html",
  styleUrl: "./accueil.component.css",
})
export class Accueil {}
