import { Component, inject, signal } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ContactService } from "../../../services/contact.service";
import { ContactRequestDTO } from "../../../dtos/contact-request.dto";

@Component({
  selector: "app-contact-formulaire",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./formulaire.component.html",
  styleUrl: "./formulaire.component.css",
})
export class ContactFormulaireComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  protected readonly objets = [
    "Visa",
    "Passeport",
    "Légalisation",
    "Information générale",
    "Rendez-vous",
    "Autre",
  ];

  protected readonly sending = signal(false);
  protected readonly sent = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  protected readonly form: FormGroup = this.fb.group({
    nom: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
    telephone: [""],
    objet: ["", Validators.required],
    message: ["", [Validators.required, Validators.minLength(10)]],
  });

  hasError(field: string): boolean {
    const c = this.form.get(field);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const raw = this.form.value;
    const payload: ContactRequestDTO = {
      nom:       raw.nom,
      email:     raw.email,
      telephone: raw.telephone || undefined,
      objet:     raw.objet,
      message:   raw.message,
    };

    this.sending.set(true);
    this.errorMessage.set(null);

    this.contactService.submit(payload).subscribe({
      next: () => {
        this.sent.set(true);
        this.form.reset();
      },
      error: (err) => {
        if (err.status === 0) {
          this.errorMessage.set('Impossible de joindre le serveur. Vérifiez votre connexion.');
        } else if (err.status >= 500) {
          this.errorMessage.set('Une erreur est survenue. Veuillez réessayer plus tard.');
        } else {
          this.errorMessage.set('Votre message n\'a pas pu être envoyé. Veuillez vérifier vos informations.');
        }
      },
      complete: () => this.sending.set(false),
    });
  }

  reset() {
    this.sent.set(false);
    this.errorMessage.set(null);
  }
}
