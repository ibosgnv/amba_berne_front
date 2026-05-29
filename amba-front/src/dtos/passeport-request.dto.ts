export interface PasseportRequestDTO {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  dateNaissance: string;   // format ISO "YYYY-MM-DD"
  consentement: boolean;
}

// Corresponds to DocumentType enum in the backend
export type DocumentType =
  | 'APPLICATION_FORM_QR'
  | 'EXPIRED_PASSPORT_OR_NATIONALITY_CERT'
  | 'SWISS_RESIDENCE_PERMIT'
  | 'EQUITY_BCDC_PAYMENT_RECEIPT'
  | 'PASSPORT_PHOTOS';
