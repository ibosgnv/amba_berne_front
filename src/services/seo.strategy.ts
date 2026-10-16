import { DOCUMENT } from "@angular/common";
import { Injectable, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  TitleStrategy,
} from "@angular/router";

const SITE = "Ambassade de la RDC en Suisse";
const ORIGIN = "https://ambardcberne.ch";

/**
 * Met à jour le titre, la méta description et l'URL canonique à chaque
 * navigation, depuis `title` et `data.description` déclarés sur les routes.
 *
 * Portée de ce mécanisme : il agit sur le DOM après exécution du JavaScript.
 * Google, qui rend les pages, en bénéficie. Les réseaux sociaux, qui lisent
 * le HTML brut, ne voient que les balises statiques d'index.html — rendre
 * leurs aperçus spécifiques à chaque page nécessiterait le prerendering.
 */
@Injectable({ providedIn: "root" })
export class SeoStrategy extends TitleStrategy {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const page = this.buildTitle(snapshot);
    this.titleService.setTitle(page ? `${page} — ${SITE}` : `${SITE} — Berne`);

    const description = this.deepestData(snapshot.root)["description"];
    if (description) {
      this.meta.updateTag({ name: "description", content: description });
      this.meta.updateTag({ property: "og:description", content: description });
    }

    // Une seule forme d'URL fait autorité : sans www, sans paramètres.
    const path = snapshot.url.split(/[?#]/)[0];
    this.setCanonical(ORIGIN + (path === "/" ? "/" : path));
  }

  /** Données de la route la plus profonde, celle qui porte le contenu affiché. */
  private deepestData(route: ActivatedRouteSnapshot): Record<string, string> {
    let current = route;
    while (current.firstChild) current = current.firstChild;
    return current.data as Record<string, string>;
  }

  private setCanonical(href: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!link) {
      link = this.document.createElement("link");
      link.setAttribute("rel", "canonical");
      this.document.head.appendChild(link);
    }
    link.setAttribute("href", href);
    this.meta.updateTag({ property: "og:url", content: href });
  }
}
