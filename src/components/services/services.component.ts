import { Component } from "@angular/core";
import { ServicesHeroComponent } from "./hero/hero.component";
import { ServicesCategoriesComponent } from "./categories/categories.component";
import { ServicesConsulairesComponent } from "./consulaires/consulaires.component";
import { ServicesVisasComponent } from "./visas/visas.component";
import { ServicesAccompagnementComponent } from "./accompagnement/accompagnement.component";

@Component({
  selector: "app-services",
  standalone: true,
  imports: [
    ServicesHeroComponent,
    ServicesCategoriesComponent,
    ServicesConsulairesComponent,
    ServicesVisasComponent,
    ServicesAccompagnementComponent,
  ],
  templateUrl: "./services.component.html",
  styleUrl: "./services.component.css",
})
export class ServicesComponent {}
