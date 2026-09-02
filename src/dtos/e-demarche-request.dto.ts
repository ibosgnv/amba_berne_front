export interface EDemarcheRequestDTO {
  type: string;              // 'carte' | 'etat-civil' | 'legalisation' | 'visite'
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  dateNaissance: string;     // ISO "YYYY-MM-DD"
  nationalite: string;
  champsSpecifiques: Record<string, string>;
  documentLabels: string[];  // ordered labels matching uploaded files
}
