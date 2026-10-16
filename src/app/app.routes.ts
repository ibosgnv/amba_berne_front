import { Routes } from "@angular/router";
import { AccueilComponent } from "../components/accueil/accueil.component";
import { ServicesComponent } from "../components/services/services.component";
import { EDemarcheComponent } from "../components/services/e-demarche/e-demarche.component";
import { DemandeVisaComponent } from "../components/services/demande-visa/demande-visa.component";
import { DemandePasseportComponent } from "../components/services/demande-passeport/demande-passeport.component";
import { AproposComponent } from "../components/apropos/apropos.component";
import { RdcComponent } from "../components/rdc/rdc.component";
import { ContactComponent } from "../components/contact/contact.component";
import { NotFoundComponent } from "../components/shared/not-found/not-found.component";

// `title` et `data.description` alimentent SeoStrategy. L'accueil n'a
// volontairement pas de titre : il reçoit celui du site, sans préfixe.
export const routes: Routes = [
  {
    path: "",
    component: AccueilComponent,
    pathMatch: "full",
    data: {
      description:
        "Ambassade de la République démocratique du Congo en Suisse, à Berne. Visas, passeports, services consulaires, horaires et coordonnées.",
    },
  },
  {
    path: "services",
    children: [
      {
        path: "",
        component: ServicesComponent,
        pathMatch: "full",
        title: "Services consulaires, visas et passeports",
        data: {
          description:
            "Procédures de demande de visa et de passeport, tarifs consulaires, documents requis et démarches de l'Ambassade de la RDC à Berne.",
        },
      },
      {
        path: "demande-visa",
        component: DemandeVisaComponent,
        title: "Demande de visa",
        data: {
          description:
            "Formulaire de demande de visa pour la République démocratique du Congo : pièces à fournir, durées et frais consulaires.",
        },
      },
      {
        path: "demande-passeport",
        component: DemandePasseportComponent,
        title: "Demande de passeport",
        data: {
          description:
            "Demande de passeport congolais depuis la Suisse : procédure en ligne, documents requis et capture des données biométriques.",
        },
      },
      {
        path: "e-demarche/:id",
        component: EDemarcheComponent,
        title: "E-démarche",
        data: {
          description:
            "Initiez votre démarche consulaire en ligne auprès de l'Ambassade de la RDC en Suisse.",
        },
      },
    ],
  },
  {
    path: "a-propos",
    component: AproposComponent,
    title: "À propos de l'Ambassade",
    data: {
      description:
        "Missions, équipe et informations pratiques de l'Ambassade de la République démocratique du Congo en Suisse.",
    },
  },
  {
    path: "rdc",
    component: RdcComponent,
    title: "La République démocratique du Congo",
    data: {
      description:
        "Découvrir la République démocratique du Congo : économie, tourisme, culture et relations avec la Suisse.",
    },
  },
  {
    path: "contact",
    component: ContactComponent,
    title: "Contact et coordonnées",
    data: {
      description:
        "Contacter l'Ambassade de la RDC en Suisse : adresse à Berne, téléphone, courriel, horaires d'ouverture et formulaire de demande.",
    },
  },
  {
    path: "**",
    component: NotFoundComponent,
    title: "Page introuvable",
  },
];
