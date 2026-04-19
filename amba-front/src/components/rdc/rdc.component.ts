import { Component } from "@angular/core";
import { RdcHeroComponent } from "./hero/hero.component";
import { RdcPresentationComponent } from "./presentation/presentation.component";
import { RdcInstitutionsComponent } from "./institutions/institutions.component";
import { RdcBlogComponent } from "./blog/blog.component";
import { RdcAttractiviteComponent } from "./attractivite/attractivite.component";
import { RdcTourismeComponent } from "./tourisme/tourisme.component";
import { RdcCultureComponent } from "./culture/culture.component";

@Component({
  selector: "app-rdc",
  standalone: true,
  imports: [
    RdcHeroComponent,
    RdcPresentationComponent,
    RdcInstitutionsComponent,
    RdcBlogComponent,
    RdcAttractiviteComponent,
    RdcTourismeComponent,
    RdcCultureComponent,
  ],
  templateUrl: "./rdc.component.html",
  styleUrl: "./rdc.component.css",
})
export class RdcComponent {}
