import { Component, inject, signal } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterLink } from "@angular/router";
import { DemandePasseportService } from "../../../services/demande-passeport.service";
import { DocumentType, PasseportRequestDTO } from "../../../dtos/passeport-request.dto";

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
  private readonly passeportService = inject(DemandePasseportService);

  // Maps frontend document keys to backend DocumentType enum values
  private readonly documentTypeMap: Record<string, DocumentType> = {
    formulaire: 'APPLICATION_FORM_QR',
    passeport:  'EXPIRED_PASSPORT_OR_NATIONALITY_CERT',
    permis:     'SWISS_RESIDENCE_PERMIT',
    paiement:   'EQUITY_BCDC_PAYMENT_RECEIPT',
    photos:     'PASSPORT_PHOTOS',
  };

  protected readonly uploadedFiles: Partial<Record<DocumentType, File>> = {};
  protected readonly selectedFileNames: Record<string, string> = {};
  protected readonly errorMessage = signal<string | null>(null);

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
    dateNaissance: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    telephone: ["", Validators.required],
    consentement: [false, Validators.requiredTrue],
  });

  protected hasError(key: string): boolean {
    const c = this.form.get(key);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  protected onFileSelected(event: Event, docKey: string): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const docType = this.documentTypeMap[docKey];
      if (docType) {
        this.uploadedFiles[docType] = file;
        this.selectedFileNames[docKey] = file.name;
      }
    }
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const raw = this.form.value;

    const payload: PasseportRequestDTO = {
      nom:           raw.nom,
      prenom:        raw.prenom,
      email:         raw.email,
      telephone:     raw.telephone,
      dateNaissance: raw.dateNaissance,
      consentement:  raw.consentement,
    };

    this.sending.set(true);
    this.errorMessage.set(null);

    this.passeportService.submit(payload, this.uploadedFiles).subscribe({
      next: () => {
        this.submitted.set(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: (err) => {
        if (err.status === 0) {
          this.errorMessage.set('Impossible de joindre le serveur. Vérifiez votre connexion.');
        } else if (err.status >= 500) {
          this.errorMessage.set('Une erreur est survenue côté serveur. Veuillez réessayer plus tard.');
        } else {
          this.errorMessage.set('Votre demande n\'a pas pu être envoyée. Veuillez vérifier vos informations.');
        }
      },
      complete: () => this.sending.set(false),
    });
  }
}
