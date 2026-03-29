import { Component, signal, computed } from '@angular/core';

export interface InfoCategory {
  id: string;
  label: string;
}

export interface InfoArticle {
  id: number;
  category: string;
  imageType: 'craftsman' | 'citywoman' | 'eurostreet' | 'meeting' | 'party' | 'factory' | 'guide' | 'capitol';
  title: string;
  excerpt: string;
  author: string;
  commentsCount: number;
}

@Component({
  selector: 'app-infos-utiles',
  standalone: true,
  templateUrl: './infos-utiles.component.html',
  styleUrl: './infos-utiles.component.css'
})
export class InfosUtiles {
  categories: InfoCategory[] = [
    { id: 'tourist',     label: 'TOURIST' },
    { id: 'guide',       label: 'GUIDE' },
    { id: 'government',  label: 'GOVERNMENT' },
    { id: 'conference',  label: 'CONFERENCE' },
    { id: 'celebration', label: 'CELEBRATION' },
    { id: 'industry',    label: 'INDUSTRY' },
  ];

  articles: InfoArticle[] = [
    // TOURIST
    { id: 1,  category: 'tourist',     imageType: 'craftsman',  title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich, bulletin concierge airport classic, comme des garçons cozy sharp the best bulletin sunspot discerning classic.', author: 'admin', commentsCount: 11 },
    { id: 2,  category: 'tourist',     imageType: 'citywoman',  title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich, bulletin concierge airport classic, comme des garçons cozy sharp the best bulletin sunspot discerning classic.', author: 'admin', commentsCount: 11 },
    { id: 3,  category: 'tourist',     imageType: 'eurostreet', title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich, bulletin concierge airport classic, comme des garçons cozy sharp the best bulletin sunspot discerning classic.', author: 'admin', commentsCount: 11 },
    // GUIDE
    { id: 4,  category: 'guide',       imageType: 'guide',      title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 5 },
    { id: 5,  category: 'guide',       imageType: 'eurostreet', title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 7 },
    { id: 6,  category: 'guide',       imageType: 'citywoman',  title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 3 },
    // GOVERNMENT
    { id: 7,  category: 'government',  imageType: 'capitol',    title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 9 },
    { id: 8,  category: 'government',  imageType: 'meeting',    title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 4 },
    { id: 9,  category: 'government',  imageType: 'craftsman',  title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 2 },
    // CONFERENCE
    { id: 10, category: 'conference',  imageType: 'meeting',    title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 14 },
    { id: 11, category: 'conference',  imageType: 'capitol',    title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 6 },
    { id: 12, category: 'conference',  imageType: 'guide',      title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 8 },
    // CELEBRATION
    { id: 13, category: 'celebration', imageType: 'party',      title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 20 },
    { id: 14, category: 'celebration', imageType: 'eurostreet', title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 15 },
    { id: 15, category: 'celebration', imageType: 'citywoman',  title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 11 },
    // INDUSTRY
    { id: 16, category: 'industry',    imageType: 'factory',    title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 3 },
    { id: 17, category: 'industry',    imageType: 'craftsman',  title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 7 },
    { id: 18, category: 'industry',    imageType: 'meeting',    title: 'enter postcode to view services & facilities in your area.', excerpt: 'monrovia lorem dolor sit amet elegant bulletin melbourne sharp, ryolan conversation business class essential scandinavian zürich.', author: 'admin', commentsCount: 5 },
  ];

  activeCategory = signal('tourist');

  filteredArticles = computed(() =>
    this.articles.filter(a => a.category === this.activeCategory())
  );

  setCategory(id: string): void {
    this.activeCategory.set(id);
  }
}
