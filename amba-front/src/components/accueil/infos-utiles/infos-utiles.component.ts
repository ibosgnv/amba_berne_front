import { Component, signal, computed } from '@angular/core';

export interface InfoCategory {
  id: string;
  label: string;
}

export interface InfoCard {
  id: number;
  category: string;
  title: string;
  text: string;
  cardBg: string;
  pictureBg: string;
  pictureColor: string;
  textBg: string;
  textColor: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-infos-utiles',
  standalone: true,
  templateUrl: './infos-utiles.component.html',
  styleUrl: './infos-utiles.component.css'
})
export class InfosUtiles {
  categories: InfoCategory[] = [
    { id: 'gouvernement', label: 'Gouvernement' },
    { id: 'tourisme',     label: 'Tourisme' },
    { id: 'conference',   label: 'Conférence' },
    { id: 'celebration',  label: 'Célébration' },
  ];

  cards: InfoCard[] = [
    // Gouvernement
    { id: 1, category: 'gouvernement', title: 'Institutions de la RDC',
      text: 'Découvrez la Présidence, l\'Assemblée nationale et le Sénat, piliers de la République démocratique du Congo. Informez-vous sur leur rôle, leur organisation et leurs missions auprès des citoyens.',
      imageUrl: 'https://picsum.photos/seed/drc-parliament/600/400',
      cardBg: '#ffc9de', pictureBg: '#c3b1e1', pictureColor: '#3a2a5a', textBg: '#fff5f8', textColor: '#2a0e1c' },
    { id: 2, category: 'gouvernement', title: 'Démarches administratives',
      text: 'Guide des principales démarches auprès des services gouvernementaux : documents officiels, passeports, permis et procédures pour les ressortissants congolais en Suisse.',
      imageUrl: 'https://picsum.photos/seed/drc-government/600/400',
      cardBg: '#d9f0c7', pictureBg: '#f4a6b4', pictureColor: '#5a1e2a', textBg: '#f6fbee', textColor: '#1a2e10' },

    // Tourisme
    { id: 4, category: 'tourisme', title: 'Découvrir la RDC',
      text: 'Parc national des Virunga, fleuve Congo, massif du Ruwenzori, savanes du Katanga : la République démocratique du Congo offre une diversité naturelle exceptionnelle. Sites à visiter, hébergements recommandés, safaris et randonnées — préparez votre séjour au cœur de l\'Afrique centrale.',
      imageUrl: 'https://picsum.photos/seed/drc-tourism/600/400',
      cardBg: '#fff3b0', pictureBg: '#a0c4ff', pictureColor: '#1a3a6b', textBg: '#fffbe6', textColor: '#4a3e00' },

    // Conférence
    { id: 7, category: 'conference', title: 'Sommets et forums diplomatiques',
      text: 'Agenda des grandes rencontres internationales impliquant la RDC : sommets de l\'Union africaine, forums économiques, conférences sur la paix dans la région des Grands Lacs et rencontres bilatérales avec la Suisse. Programmes officiels et comptes-rendus à consulter.',
      imageUrl: 'https://picsum.photos/seed/drc-conference/600/400',
      cardBg: '#e0bbff', pictureBg: '#ffb3c1', pictureColor: '#5a1e2e', textBg: '#f7eeff', textColor: '#2e1a4d' },

    // Célébration
    { id: 10, category: 'celebration', title: 'Fête nationale du 30 juin',
      text: 'Chaque année, la communauté congolaise de Suisse célèbre l\'indépendance de la RDC proclamée le 30 juin 1960. Cérémonie officielle à l\'ambassade, hommage au drapeau, discours et moments culturels rassemblant les ressortissants et leurs amis suisses.',
      imageUrl: 'https://picsum.photos/seed/drc-independence/600/400',
      cardBg: '#ffafcc', pictureBg: '#cdb4db', pictureColor: '#3a2a5a', textBg: '#fff0f5', textColor: '#3a0a1e' },
    { id: 11, category: 'celebration', title: 'Événements culturels',
      text: 'Agenda des festivités organisées par l\'ambassade : concerts de rumba congolaise, expositions d\'art, soirées gastronomiques, projections de films et rencontres littéraires mettant à l\'honneur la richesse culturelle de la RDC.',
      imageUrl: 'https://picsum.photos/seed/drc-culture/600/400',
      cardBg: '#ffd6a5', pictureBg: '#caffbf', pictureColor: '#1e4d1a', textBg: '#fff8ec', textColor: '#4a3000' },
  ];

  activeCategory = signal<string>('gouvernement');

  filteredCards = computed(() =>
    this.cards.filter(c => c.category === this.activeCategory())
  );

  setCategory(id: string): void {
    this.activeCategory.set(id);
  }
}
