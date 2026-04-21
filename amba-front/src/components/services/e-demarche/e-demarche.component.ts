import { Component, OnInit, computed, inject, signal } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, RouterLink } from "@angular/router";

type FieldType =
  | "text"
  | "email"
  | "tel"
  | "date"
  | "number"
  | "select"
  | "textarea";

interface Field {
  key: string;
  label: string;
  type: FieldType;
  required: boolean;
  options?: string[];
  placeholder?: string;
  help?: string;
  full?: boolean;
}

interface ProcedureSchema {
  id: string;
  title: string;
  icon: string;
  intro: string;
  specificFields: Field[];
  docs: string[];
}

const PERSONAL_FIELDS: Field[] = [
  {
    key: "nom",
    label: "Nom",
    type: "text",
    required: true,
    placeholder: "Maluku",
  },
  {
    key: "prenom",
    label: "Prénom",
    type: "text",
    required: true,
    placeholder: "Jean",
  },
  {
    key: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "jean.maluku@exemple.com",
  },
  {
    key: "telephone",
    label: "Téléphone",
    type: "tel",
    required: true,
    placeholder: "+41 76 000 00 00",
  },
  {
    key: "dateNaissance",
    label: "Date de naissance",
    type: "date",
    required: true,
  },
  {
    key: "nationalite",
    label: "Nationalité",
    type: "text",
    required: true,
    placeholder: "Congolaise",
  },
];

const PROCEDURES: Record<string, ProcedureSchema> = {
  carte: {
    id: "carte",
    title: "Carte consulaire",
    icon: "🪪",
    intro:
      "La carte consulaire atteste de votre inscription auprès de l'Ambassade. Elle facilite vos démarches et votre identification en Suisse.",
    specificFields: [
      {
        key: "motif",
        label: "Motif de la demande",
        type: "select",
        required: true,
        options: ["Première demande", "Renouvellement", "Perte", "Vol"],
      },
      {
        key: "adresseSuisse",
        label: "Adresse en Suisse",
        type: "textarea",
        required: true,
        full: true,
        placeholder: "Rue, numéro, code postal, ville",
      },
      {
        key: "canton",
        label: "Canton de résidence",
        type: "text",
        required: true,
        placeholder: "Berne",
      },
      {
        key: "profession",
        label: "Profession",
        type: "text",
        required: true,
        placeholder: "Ingénieur",
      },
    ],
    docs: [
      "Pièce d'identité valide (passeport ou CNI)",
      "Photo d'identité récente (format officiel)",
      "Justificatif de domicile en Suisse",
      "Formulaire de demande complété",
    ],
  },
  "etat-civil": {
    id: "etat-civil",
    title: "Transcription d'acte d'état civil",
    icon: "📜",
    intro:
      "Transcrivez un acte de naissance, de mariage ou de décès survenu à l'étranger dans les registres consulaires.",
    specificFields: [
      {
        key: "typeActe",
        label: "Type d'acte",
        type: "select",
        required: true,
        options: ["Naissance", "Mariage", "Décès"],
      },
      {
        key: "dateEvenement",
        label: "Date de l'événement",
        type: "date",
        required: true,
      },
      {
        key: "lieuEvenement",
        label: "Lieu de l'événement",
        type: "text",
        required: true,
        placeholder: "Kinshasa, RDC",
      },
      {
        key: "personnesConcernees",
        label: "Noms des personnes concernées",
        type: "textarea",
        required: true,
        full: true,
        placeholder: "Nom et prénom de chaque personne mentionnée dans l'acte",
      },
    ],
    docs: [
      "Acte original (naissance, mariage ou décès)",
      "Traduction certifiée si nécessaire",
      "Pièce d'identité du demandeur",
      "Justificatif de lien (le cas échéant)",
    ],
  },
  legalisation: {
    id: "legalisation",
    title: "Légalisation de documents",
    icon: "✔️",
    intro:
      "La légalisation authentifie la signature et le sceau des documents destinés à être utilisés à l'étranger.",
    specificFields: [
      {
        key: "typeDocument",
        label: "Type de document",
        type: "select",
        required: true,
        options: [
          "Diplôme",
          "Acte notarié",
          "Procuration",
          "Attestation",
          "Autre",
        ],
      },
      {
        key: "nombrePages",
        label: "Nombre de pages",
        type: "number",
        required: true,
        placeholder: "1",
      },
      {
        key: "paysDestination",
        label: "Pays de destination",
        type: "text",
        required: true,
        placeholder: "RDC",
      },
      {
        key: "usagePrevu",
        label: "Usage prévu du document",
        type: "textarea",
        required: true,
        full: true,
        placeholder: "Décrivez l'usage que vous comptez faire du document",
      },
    ],
    docs: [
      "Document original à légaliser",
      "Copie du document",
      "Pièce d'identité du demandeur",
      "Preuve de paiement des frais",
    ],
  },
  visite: {
    id: "visite",
    title: "Visite consulaire",
    icon: "🏛️",
    intro:
      "Prenez rendez-vous pour une visite à l'Ambassade. Nos équipes vous accueilleront à la date convenue.",
    specificFields: [
      {
        key: "motif",
        label: "Motif de la visite",
        type: "select",
        required: true,
        options: [
          "Consultation",
          "Dépôt de documents",
          "Retrait",
          "Assistance",
          "Autre",
        ],
      },
      {
        key: "dateSouhaitee",
        label: "Date souhaitée",
        type: "date",
        required: true,
      },
      {
        key: "plageHoraire",
        label: "Plage horaire",
        type: "select",
        required: true,
        options: ["09h00 – 11h00", "11h00 – 13h00", "13h00 – 15h00"],
      },
      {
        key: "nombrePersonnes",
        label: "Nombre de personnes",
        type: "number",
        required: true,
        placeholder: "1",
      },
      {
        key: "commentaires",
        label: "Commentaires ou précisions",
        type: "textarea",
        required: false,
        full: true,
        placeholder: "Toute information utile à votre rendez-vous",
      },
    ],
    docs: [
      "Confirmation de rendez-vous",
      "Pièce d'identité valide",
      "Documents relatifs à l'objet de la visite",
    ],
  },
};

@Component({
  selector: "app-services-e-demarche",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: "./e-demarche.component.html",
  styleUrl: "./e-demarche.component.css",
})
export class EDemarcheComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);

  protected readonly personalFields = PERSONAL_FIELDS;
  protected readonly procedure = signal<ProcedureSchema | null>(null);
  protected readonly currentStep = signal(0);
  protected readonly sending = signal(false);
  protected readonly submitted = signal(false);
  protected readonly uploadedDocs = signal<Record<string, string>>({});

  protected readonly steps = [
    "Informations personnelles",
    "Détails",
    "Documents",
    "Récapitulatif",
  ];

  protected form!: FormGroup;

  protected readonly progressPct = computed(
    () => ((this.currentStep() + 1) / this.steps.length) * 100,
  );

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id") ?? "";
    const schema = PROCEDURES[id] ?? null;
    this.procedure.set(schema);
    this.form = this.buildForm(schema);
  }

  private buildForm(schema: ProcedureSchema | null): FormGroup {
    const controls: Record<string, unknown> = {};
    for (const f of PERSONAL_FIELDS) {
      controls[f.key] = [
        "",
        f.required
          ? [
              Validators.required,
              ...(f.type === "email" ? [Validators.email] : []),
            ]
          : [],
      ];
    }
    if (schema) {
      for (const f of schema.specificFields) {
        controls[f.key] = ["", f.required ? [Validators.required] : []];
      }
    }
    return this.fb.group(controls);
  }

  private stepFields(step: number): string[] {
    if (step === 0) return PERSONAL_FIELDS.map((f) => f.key);
    if (step === 1)
      return this.procedure()?.specificFields.map((f) => f.key) ?? [];
    return [];
  }

  protected isStepValid(step: number): boolean {
    if (step === 2) {
      const docs = this.procedure()?.docs ?? [];
      const uploaded = this.uploadedDocs();
      return docs.every((d) => !!uploaded[d]);
    }
    return this.stepFields(step).every((k) => this.form.get(k)?.valid);
  }

  protected hasError(key: string): boolean {
    const c = this.form.get(key);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  protected next() {
    const step = this.currentStep();
    const keys = this.stepFields(step);
    keys.forEach((k) => this.form.get(k)?.markAsTouched());
    if (!this.isStepValid(step)) return;
    this.currentStep.update((s) => Math.min(s + 1, this.steps.length - 1));
    this.scrollTop();
  }

  protected back() {
    this.currentStep.update((s) => Math.max(s - 1, 0));
    this.scrollTop();
  }

  protected goTo(step: number) {
    if (step <= this.currentStep() || this.isStepValid(this.currentStep())) {
      this.currentStep.set(step);
      this.scrollTop();
    }
  }

  protected onFileSelected(doc: string, event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.uploadedDocs.update((map) => ({ ...map, [doc]: file.name }));
  }

  protected removeFile(doc: string) {
    this.uploadedDocs.update((map) => {
      const next = { ...map };
      delete next[doc];
      return next;
    });
  }

  protected submit() {
    if (!this.isStepValid(0) || !this.isStepValid(1) || !this.isStepValid(2)) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending.set(true);
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      this.scrollTop();
    }, 1000);
  }

  protected fieldLabel(key: string): string {
    const all = [
      ...PERSONAL_FIELDS,
      ...(this.procedure()?.specificFields ?? []),
    ];
    return all.find((f) => f.key === key)?.label ?? key;
  }

  protected personalEntries(): { label: string; value: string }[] {
    return PERSONAL_FIELDS.map((f) => ({
      label: f.label,
      value: this.form.get(f.key)?.value ?? "",
    }));
  }

  protected specificEntries(): { label: string; value: string }[] {
    return (this.procedure()?.specificFields ?? []).map((f) => ({
      label: f.label,
      value: this.form.get(f.key)?.value ?? "",
    }));
  }

  private scrollTop() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}
