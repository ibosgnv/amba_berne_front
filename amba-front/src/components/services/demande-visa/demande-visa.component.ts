import { Component, inject, signal } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterLink } from "@angular/router";

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
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: "./demande-visa.component.html",
  styleUrl: "./demande-visa.component.css",
})
export class DemandeVisaComponent {
  private readonly fb = inject(FormBuilder);

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
    { value: "1m_me", label: "1 mois, multiple entrées (175.-)" },
    { value: "2m_1e", label: "2 mois, 1 entrée (170.-)" },
    { value: "3m_me", label: "3 mois, multiple entrées (270.-)" },
    { value: "6m_me", label: "6 mois, multiple entrées (420.-)" },
  ];

  protected readonly etatsCivil = [
    { value: "celibataire", label: "Célibataire" },
    { value: "marie", label: "Marié(e)" },
    { value: "divorce", label: "Divorcé(e)" },
    { value: "veuf", label: "Veuf/Veuve" },
  ];

  protected readonly sending = signal(false);
  protected readonly submitted = signal(false);

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
