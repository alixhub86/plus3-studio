// ─────────────────────────────────────────────────────────────────────────────
// ⚠ NE PAS ÉDITER CE FICHIER POUR CHANGER LE NOM DU STUDIO, L'EMAIL, ETC.
// La config du site est dans  content/site.json  (à la racine du projet)
// Ouvre-le avec TextEdit ou VS Code.
// ─────────────────────────────────────────────────────────────────────────────

import siteJson from "../../content/site.json";

type Social = { label: string; href: string };

export type SiteConfig = {
  name: string;
  tagline: string;
  email: string;
  logo: { src: string; width: number };
  socials: Social[];
};

export const site: SiteConfig = siteJson as SiteConfig;
