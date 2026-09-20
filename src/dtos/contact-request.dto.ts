export interface ContactRequestDTO {
  nom: string;
  email: string;
  telephone?: string;
  objet: string;
  message: string;
  /** Piège anti-spam : toujours vide côté visiteur, rempli par les robots. */
  site?: string;
}
