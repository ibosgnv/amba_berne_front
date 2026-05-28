export interface DemandeVisaDTO {
  nom: string;
  prenom: string;
  postnom: string;
  nomJeuneFille?: string;
  dateNaissance: Date;
  lieuNaissance: string;
  nationalite: string;
  etatCivil: string;
  profession?: string;
  adresse: string;
  telephone: string;
  email: string;
  motifs: string[];
  typeVisa: string;
  traitement: string;
  invitantNom?: string;
  invitantContact?: string;
  faitA: string;
  dateSignature: Date;
}
