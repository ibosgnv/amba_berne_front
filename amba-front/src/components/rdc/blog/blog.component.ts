import { Component, signal, computed } from "@angular/core";
import { FormsModule } from "@angular/forms";

type Category = "all" | "histoire" | "mines" | "geographie" | "culture";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: Exclude<Category, "all">;
  date: string;
  image: string;
  tag: string;
}

@Component({
  selector: "app-rdc-blog",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./blog.component.html",
  styleUrl: "./blog.component.css",
})
export class RdcBlogComponent {
  protected readonly filters: { id: Category; label: string }[] = [
    { id: "all", label: "Tous" },
    { id: "histoire", label: "Histoire" },
    { id: "mines", label: "Mines" },
    { id: "geographie", label: "Géographie" },
    { id: "culture", label: "Culture" },
  ];

  protected readonly activeCategory = signal<Category>("all");
  protected readonly query = signal<string>("");

  protected readonly articles: Article[] = [
    {
      id: 1,
      title: "L'indépendance de 1960 : une date fondatrice",
      excerpt: "Retour sur les étapes décisives qui ont conduit à la naissance de la RDC indépendante.",
      category: "histoire",
      date: "12 mars 2026",
      image: "/assets/wagenia.jpg",
      tag: "Histoire",
    },
    {
      id: 2,
      title: "Cobalt & cuivre : les minerais de la transition énergétique",
      excerpt: "Comment la RDC est devenue un acteur incontournable des batteries et véhicules électriques.",
      category: "mines",
      date: "5 mars 2026",
      image: "/assets/economie_nationale.jpg",
      tag: "Mines",
    },
    {
      id: 3,
      title: "Le fleuve Congo, artère vitale d'un continent",
      excerpt: "Plus de 4 700 km de voie navigable, deuxième débit mondial après l'Amazone.",
      category: "geographie",
      date: "28 février 2026",
      image: "/assets/leopard.jpg",
      tag: "Géographie",
    },
    {
      id: 4,
      title: "La rumba congolaise inscrite à l'UNESCO",
      excerpt: "Un patrimoine immatériel célébré à travers le monde et réinventé par chaque génération.",
      category: "culture",
      date: "20 février 2026",
      image: "/assets/ONU_Femme.jpg",
      tag: "Culture",
    },
    {
      id: 5,
      title: "Parc des Virunga : 100 ans de conservation",
      excerpt: "Plus ancien parc national d'Afrique, sanctuaire des gorilles de montagne.",
      category: "geographie",
      date: "10 février 2026",
      image: "/assets/m23_pourpalers.jpg",
      tag: "Géographie",
    },
    {
      id: 6,
      title: "Royaume Kongo : aux origines d'un empire",
      excerpt: "Un voyage dans l'Afrique précoloniale et ses structures politiques sophistiquées.",
      category: "histoire",
      date: "3 février 2026",
      image: "/assets/crise_est.jpg",
      tag: "Histoire",
    },
  ];

  protected readonly visible = computed(() => {
    const cat = this.activeCategory();
    const q = this.query().toLowerCase().trim();
    return this.articles.filter((a) => {
      const matchCat = cat === "all" || a.category === cat;
      if (!matchCat) return false;
      if (!q) return true;
      const haystack = [a.title, a.excerpt, a.tag, a.category]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  });

  setCategory(id: Category) {
    this.activeCategory.set(id);
  }

  updateQuery(value: string) {
    this.query.set(value);
  }

  clearQuery() {
    this.query.set("");
  }
}
