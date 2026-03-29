import { Component, signal, computed } from '@angular/core';

export interface Article {
  id: number;
  date: string;
  month: string;
  title: string;
  excerpt: string;
  imageType: 'conference' | 'flag-people' | 'group' | 'duo' | 'outdoor' | 'event';
}

@Component({
  selector: 'app-actualites',
  standalone: true,
  templateUrl: './actualites.component.html',
  styleUrl: './actualites.component.css'
})
export class Actualites {
  readonly visibleCount = 3;

  featured: Article = {
    id: 1,
    date: '20',
    month: 'janvier',
    title: 'Nous dénonçons avec une juste indignation et une profonde aversion. Maire, « Jordan Cooper',
    excerpt: 'Nous dénonçons avec une juste indignation et une profonde aversion les hommes qui, séduits et démoralisés par les charmes du plaisir, se laissent aller à des pratiques déraisonnables.',
    imageType: 'conference'
  };

  sidebarArticles: Article[] = [
    {
      id: 2,
      date: '20',
      month: 'janvier',
      title: 'charmes du plaisir',
      excerpt: 'se laissent aller à des pratiques',
      imageType: 'flag-people'
    },
    {
      id: 3,
      date: '20',
      month: 'janvier',
      title: 'charmes du plaisir',
      excerpt: 'se laissent aller à des pratiques',
      imageType: 'group'
    },
    {
      id: 4,
      date: '20',
      month: 'janvier',
      title: 'charmes du plaisir',
      excerpt: 'se laissent aller à des pratiques',
      imageType: 'duo'
    },
    {
      id: 5,
      date: '15',
      month: 'février',
      title: 'charmes du plaisir',
      excerpt: 'se laissent aller à des pratiques',
      imageType: 'outdoor'
    },
    {
      id: 6,
      date: '10',
      month: 'mars',
      title: 'charmes du plaisir',
      excerpt: 'se laissent aller à des pratiques',
      imageType: 'event'
    },
  ];

  offset = signal(0);

  visibleSidebar = computed(() =>
    this.sidebarArticles.slice(this.offset(), this.offset() + this.visibleCount)
  );

  canScrollUp = computed(() => this.offset() > 0);
  canScrollDown = computed(() => this.offset() + this.visibleCount < this.sidebarArticles.length);

  scrollUp(): void {
    if (this.canScrollUp()) this.offset.update(o => o - 1);
  }

  scrollDown(): void {
    if (this.canScrollDown()) this.offset.update(o => o + 1);
  }
}
