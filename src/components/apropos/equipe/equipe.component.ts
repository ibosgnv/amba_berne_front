import { Component, signal } from '@angular/core';

type Department =
  'all' | 'diplomatique' | 'consulaire' | 'administratif' | 'communication';

interface Member {
  initials: string;
  name: string;
  role: string;
  photo?: string;
  dept: Exclude<Department, 'all'>;
  accent: string;
}

@Component({
  selector: 'app-apropos-equipe',
  standalone: true,
  imports: [],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css',
})
export class AproposEquipeComponent {
  protected readonly filters: { id: Department; label: string }[] = [
    // { id: "all", label: "Tous" },
    //{ id: "diplomatique", label: "Diplomatique" },
    //{ id: "consulaire", label: "Consulaire" },
    // { id: "administratif", label: "Administratif" },
    // { id: "communication", label: "Communication" },
  ];

  protected readonly activeFilter = signal<Department>('all');

  protected readonly members: Member[] = [
    {
      initials: 'SM',
      name: 'S.E. Symphorien Bakafwa Nsenda Mutombo',
      role: 'Ambassadeur Extraordinaire et Plénipotentiaire',
      photo: 'assets/equipe/amba_mutombo.JPG',
      dept: 'diplomatique',
      accent: '#FCD116',
    },
    {
      initials: 'YK',
      name: 'Yodi Kasongo Jean Pierre',
      role: 'Ministre Conseiller',
      photo: 'assets/equipe/yodi_kasongo.jpg',
      dept: 'diplomatique',
      accent: '#007FFF',
    },
    {
      initials: 'NT',
      name: 'Nseka Koko D. Thérèse',
      role: 'Ministre Conseiller',
      photo: 'assets/equipe/nseka_therese.jpg',
      dept: 'consulaire',
      accent: '#0b1a5c',
    },
    {
      initials: 'LM',
      name: 'Lukunku Martin',
      role: 'Premier Conseiller',
      photo: 'assets/equipe/lukunku_martin.jpg',
      dept: 'communication',
      accent: '#007FFF',
    },
    {
      initials: 'KJ',
      name: 'Kumuamba Katende José',
      role: 'Deuxième Secrétaire',
      photo: 'assets/equipe/kumuamba_jose.jpg',
      dept: 'administratif',
      accent: '#72d4e0',
    },
    {
      initials: 'WL',
      name: 'Wembo Lundu Jean Pierre',
      role: 'Deuxième Secrétaire',
      photo: 'assets/equipe/wembo_lundu.jpg',
      dept: 'administratif',
      accent: '#72d4e0',
    },
    {
      initials: 'MG',
      name: 'Mutombo Shako Grâce',
      role: 'Secrétaire Administrative',
      photo: 'assets/equipe/mutombo_grace.jpg',
      dept: 'administratif',
      accent: '#72d4e0',
    },

    {
      initials: 'OT',
      name: 'Omedjambe Lopala Tonton',
      role: "Chauffeur de l'Ambassade",
      photo: 'assets/equipe/omedjambe_tonton.jpg',
      dept: 'administratif',
      accent: '#72d4e0',
    },
  ];

  setFilter(id: Department) {
    this.activeFilter.set(id);
  }

  visibleMembers() {
    const f = this.activeFilter();
    return f === 'all'
      ? this.members
      : this.members.filter((m) => m.dept === f);
  }
}
