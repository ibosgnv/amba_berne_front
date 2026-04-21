import { Component, signal } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-contact-formulaire",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./formulaire.component.html",
  styleUrl: "./formulaire.component.css",
})
export class ContactFormulaireComponent {
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

  protected readonly form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      nom: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      telephone: [""],
      objet: ["", Validators.required],
      message: ["", [Validators.required, Validators.minLength(10)]],
    });
  }

  hasError(field: string): boolean {
    const c = this.form.get(field);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending.set(true);
    setTimeout(() => {
      this.sending.set(false);
      this.sent.set(true);
      this.form.reset();
    }, 900);
  }

  reset() {
    this.sent.set(false);
  }
}
