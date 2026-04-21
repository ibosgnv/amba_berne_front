import { Component, inject, signal } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterLink } from "@angular/router";

interface DocumentRequis {
  key: string;
  label: string;
}

@Component({
  selector: "app-demande-passeport",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: "./demande-passeport.component.html",
  styleUrl: "./demande-passeport.component.css",
})
export class DemandePasseportComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly prerequis = [
    {
      text: "Obtenu votre NIF sur",
      linkLabel: "app.dgirdc.cd/e-nif",
      url: "https://app.dgirdc.cd/e-nif",
    },
    {
      text: "Effectué votre préinscription sur",
      linkLabel: "www.passeport.gouv.cd",
      url: "https://www.passeport.gouv.cd",
    },
    {
      text: "Réglé les frais de 81$ (75$ + 6$ frais) en ligne.",
      linkLabel: null,
      url: null,
    },
  ];

  protected readonly documentsRequis: DocumentRequis[] = [
    {
      key: "formulaire",
      label: "Formulaire de demande avec QR Code imprimé",
    },
    {
      key: "passeport",
      label: "Copie du passeport expiré ou certificat de nationalité",
    },
    {
      key: "permis",
      label: "Copie recto-verso du permis de séjour en Suisse valide",
    },
    {
      key: "paiement",
      label: "Attestation de paiement de la banque EquityBCDC",
    },
    {
      key: "photos",
      label: "2 photos passeport récentes (pour la fiche d'identification)",
    },
  ];

  protected readonly sending = signal(false);
  protected readonly submitted = signal(false);

  protected readonly form: FormGroup = this.fb.group({
    nif: ["", Validators.required],
    qrCode: ["", Validators.required],
    nom: ["", Validators.required],
    prenom: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    telephone: ["", Validators.required],
    documents: this.fb.group(
      Object.fromEntries(
        this.documentsRequis.map((d) => [d.key, [false, Validators.requiredTrue]]),
      ),
    ),
    consentement: [false, Validators.requiredTrue],
  });

  protected readonly documentsGroup = this.form.get("documents") as FormGroup;

  protected hasError(key: string): boolean {
    const c = this.form.get(key);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  protected hasDocumentError(key: string): boolean {
    const c = this.documentsGroup.get(key);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  protected submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.sending.set(true);
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 1000);
  }
}
