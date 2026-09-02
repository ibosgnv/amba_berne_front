import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-contact-coordonnees",
  standalone: true,
  imports: [],
  templateUrl: "./coordonnees.component.html",
  styleUrl: "./coordonnees.component.css",
})
export class ContactCoordonneesComponent {
  protected readonly mapUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.mapUrl = sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.google.com/maps?q=Ambassade+RDC+Berne+Suisse&output=embed"
    );
  }
}
