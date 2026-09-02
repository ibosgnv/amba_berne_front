import { Component, inject, signal } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterLink } from "@angular/router";
import { DemandeVisaDTO } from "../../../dtos/demande-visa.dto";
import { DemandeVisaService } from "../../../services/demande-visa.service";
import { DateInputComponent } from "../../shared/date-input/date-input.component";

interface MotifOption {
  key: string;
  label: string;
}

interface VisaTypeOption {
  value: string;
  label: string;
}

@Component({
  selector: "app-demande-visa",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, DateInputComponent],
  templateUrl: "./demande-visa.component.html",
  styleUrl: "./demande-visa.component.css",
})
export class DemandeVisaComponent {
  private readonly fb = inject(FormBuilder);
  private demandeVisaService = inject(DemandeVisaService);

  protected readonly documentsRequis = [
    "Passeport en cours de validité (plus de six mois)",
    "1 Photo d'identité",
    "Preuve de paiement des frais de visa",
  ];

  protected readonly motifs: MotifOption[] = [
    { key: "tourisme", label: "Tourisme" },
    { key: "affaires", label: "Affaires" },
    { key: "familial", label: "Visite familiale/amicale" },
    { key: "officielle", label: "Mission officielle" },
    { key: "etudes", label: "Études" },
    { key: "ong", label: "ONG" },
  ];

  protected readonly typesVisa: VisaTypeOption[] = [
    { value: "1m_1e", label: "1 mois, 1 entrée (113.-)" },
    { value: "1m_me", label: "1 mois, plusieurs entrées (175.-)" },
    { value: "2m_1e", label: "2 mois, 1 entrée (170.-)" },
    { value: "2m_me", label: "2 mois, plusieurs entrées (220.-)" },
    { value: "3m_1e", label: "3 mois, 1 entrée (220.-)" },
    { value: "3m_me", label: "3 mois, plusieurs entrées (270.-)" },
    { value: "6m_1e", label: "6 mois, 1 entrée (320.-)" },
    { value: "6m_me", label: "6 mois, plusieurs entrées (420.-)" },
  ];


  protected readonly etatsCivil = [
    { value: "celibataire", label: "Célibataire" },
    { value: "marie", label: "Marié(e)" },
    { value: "divorce", label: "Divorcé(e)" },
    { value: "veuf", label: "Veuf/Veuve" },
  ];

  protected readonly currentYear = new Date().getFullYear();
  protected readonly sending = signal(false);
  protected readonly submitted = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  protected readonly form: FormGroup = this.fb.group({
    nom: ["", Validators.required],
    nomJeuneFille: [""],
    postnom: [""],
    prenom: ["", Validators.required],
    dateNaissance: ["", Validators.required],
    lieuNaissance: ["", Validators.required],
    nationalite: ["", Validators.required],
    etatCivil: ["celibataire", Validators.required],
    profession: [""],
    adresse: ["", Validators.required],
    telephone: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    motifs: this.fb.group(
      Object.fromEntries(this.motifs.map((m) => [m.key, [false]])),
    ),
    typeVisa: ["1m_1e", Validators.required],
    traitement: ["normal", Validators.required],
    invitantNom: [""],
    invitantContact: [""],
    engagement: [false, Validators.requiredTrue],
    faitA: ["", Validators.required],
    dateSignature: ["", Validators.required],
  });

  protected readonly motifsGroup = this.form.get("motifs") as FormGroup;

  protected hasMotifSelected(): boolean {
    const v = this.motifsGroup.value as Record<string, boolean>;
    return Object.values(v).some(Boolean);
  }

  protected hasError(key: string): boolean {
    const c = this.form.get(key);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  protected submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid || !this.hasMotifSelected()) return;
    const visaFormData = this.form.value;
    const motifs: string[] =
      Object.entries(visaFormData.motifs as Record<string, boolean>)
        .filter(([, checked]) => checked)
        .map(([key]) => key);


    const payload: DemandeVisaDTO = {
      nom:            visaFormData.nom,
         postnom:        visaFormData.postnom || undefined,
         nomJeuneFille:  visaFormData.nomJeuneFille || undefined,
         prenom:         visaFormData.prenom,
         dateNaissance:  visaFormData.dateNaissance,   // déjà "YYYY-MM-DD" via <input type="date">
         lieuNaissance:  visaFormData.lieuNaissance,
         nationalite:    visaFormData.nationalite,
         etatCivil:      visaFormData.etatCivil,
         profession:     visaFormData.profession || undefined,
         adresse:        visaFormData.adresse,
         telephone:      visaFormData.telephone,
         email:          visaFormData.email,
         motifs,
         typeVisa:       visaFormData.typeVisa,
         traitement:     visaFormData.traitement,
         invitantNom:    visaFormData.invitantNom || undefined,
         invitantContact:visaFormData.invitantContact || undefined,
         faitA:          visaFormData.faitA,
         dateSignature:  visaFormData.dateSignature,
    }

    this.demandeVisaService.submitInfos(payload).subscribe({
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
      complete: () => {
        this.sending.set(false);
      }

    });
  }
}
