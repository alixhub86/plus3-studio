# Prompt Claude Code — Site vitrine du collectif de communication sportive

## Contexte

Nous sommes un **collectif de 3 freelances** spécialisés en **communication sportive 360°**. Le nom provisoire est "COLLECTIF" (à adapter si besoin). Nous travaillons avec des clubs, fédérations et événements sportifs.

### Les 3 profils :

- **Alix** — Directeur artistique & graphiste. Gère toute la partie image, identité visuelle, supports print & digitaux. Fait aussi du motion design.
- **Christopher** — Vidéaste & community manager. Captation, montage, aftermovies. Gère aussi la stratégie réseaux sociaux et l'édito.
- **Alexis** — Photographe & responsable partenariats. Reportage sportif, portraits, packshots. Développe les relations avec les clubs.

---

## Ce que je veux

Crée-moi un **site vitrine one-page responsive** (React + Tailwind CSS, ou Next.js si tu préfères) avec les sections suivantes, dans cet ordre :

---

### 1. Navigation fixe

- Logo/nom du collectif à gauche (texte "COLLECTIF" en bold, letterspacing serré)
- Liens à droite : Services · Projets · Équipe · Contact
- La nav doit être **sticky**, avec un fond légèrement transparent/blur au scroll
- Burger menu sur mobile

### 2. Section Hero

- Badge en haut : "Communication sportive 360°" (pill avec bordure fine, uppercase, petit texte)
- Titre principal en serif (type DM Serif Display ou Playfair Display) : **"On raconte le sport autrement, ensemble."** — le mot "ensemble" doit être en italique et en couleur accent lime (#bbff00)
- Sous-titre : "Trois regards créatifs, une seule vision. Direction artistique, vidéo, photo — on construit l'image de vos clubs et événements sportifs."
- CTA bouton rond noir : "Découvrir nos projets →"
- **En arrière-plan ou en dessous** : prévoir un emplacement pour un showreel vidéo ou un carrousel d'images (pour l'instant, un placeholder suffit avec une grille de blocs colorés animés ou un fond subtil)
- Indicateur de scroll (3 barres horizontales dont la première est plus longue et foncée)

### 3. Section Services — "Nos expertises"

- Label en haut : "CE QU'ON FAIT" (uppercase, petit, gris)
- Titre : "Nos expertises" (serif)
- **3 cartes côte à côte** (empilées sur mobile), chacune avec :
  - Un icône rond avec les initiales du pôle (DA, VD, PH)
  - **Toutes les icônes** ont le même style : fond noir, texte #bbff00 (lime). On ne différencie PAS les pôles par couleur — l'identité est noir/blanc/lime uniquement.
  - Titre du service
  - Description courte (2 lignes max)
  - En bas de carte : "Alix — DA & graphiste" (petit texte gris, séparé par un trait fin)

**Contenu des cartes :**

| Carte | Icône | Titre | Description | Qui |
|-------|-------|-------|-------------|-----|
| 1 | DA | Direction artistique & branding | Identité visuelle, charte graphique, supports print & digitaux, motion design. | Alix — DA & graphiste |
| 2 | VD | Vidéo & social media | Captation, montage, aftermovies, contenus réseaux sociaux, stratégie éditoriale. | Christopher — vidéaste & CM |
| 3 | PH | Photo & partenariats | Reportage sportif, portraits, packshots, développement partenariats clubs. | Alexis — photographe |

### 4. Section Projets — "Portfolio"

- Label : "PORTFOLIO" (uppercase, petit)
- Titre : "Nos projets" (serif) + lien "Voir tout" aligné à droite
- **Filtres horizontaux** sous forme de pills cliquables : Tous (actif par défaut) · Branding · Vidéo · Photo · Social media
- Le filtre actif a un fond noir avec texte blanc, les autres sont outline
- **Grille de 4 projets** (2 colonnes sur desktop, 1 sur mobile), chaque carte contient :
  - Un placeholder visuel (aspect-ratio 4/3, fond clair avec un cercle décoratif coloré en haut à droite)
  - Un tag de catégorie en petit (ex: "Branding • Vidéo")
  - Le nom du projet en gras

**Projets exemples (placeholder) :**

| Projet | Tags | Couleur déco |
|--------|------|-------------|
| Rebranding FC Métropole | Branding • Vidéo | Lime (#bbff00) |
| Saison 24/25 — Volley Club | Photo • Social media | Gris clair |
| Aftermovie tournoi régional | Vidéo • Motion | Noir |
| Identité visuelle — Run&Co | Branding • Photo | Lime (#bbff00) |

- **Le filtrage doit être fonctionnel** : quand on clique sur "Branding", seuls les projets taggés Branding s'affichent (avec une animation de transition douce)

### 5. Section Équipe — "Le collectif"

- Label : "LE COLLECTIF" (uppercase, petit)
- Titre : "Qui sommes-nous" (serif)
- **3 cartes centrées**, chacune avec :
  - Avatar rond avec initiales (AL, CH, AX) — fond noir, texte #bbff00 (même style que les icônes services, cohérence totale)
  - Prénom
  - Rôle sur 2 lignes (petit texte gris)

| Nom | Initiales | Rôle |
|-----|-----------|------|
| Alix | AL | Directeur artistique & graphiste |
| Christopher | CH | Vidéaste & community manager |
| Alexis | AX | Photographe & partenariats |

- Plus tard on ajoutera des photos — pour l'instant les initiales suffisent

### 6. Section CTA / Contact

- Fond secondaire (gris clair / surface)
- Titre serif : "Un projet sportif en tête ?"
- Sous-titre : "On en discute autour d'un café — ou d'un terrain."
- Bouton CTA lime (#bbff00) avec texte noir : "Nous contacter →"
- Le bouton doit ouvrir un mailto ou scroller vers un formulaire (à toi de choisir)

### 7. Footer (optionnel mais bienvenu)

- Minimaliste : nom du collectif, liens vers les réseaux (icônes), mention légale, année
- Même style que la nav

---

## Direction artistique & design

### Typographie

- **Titres / display** : DM Serif Display (Google Fonts) — serif élégant
- **Corps / UI** : Instrument Sans (Google Fonts) — ou équivalent sans-serif moderne et géométrique, PAS Inter ni Roboto
- Le contraste serif/sans-serif est voulu pour donner un côté éditorial sportif

### Palette de couleurs — NOIR / BLANC / LIME

Le site repose sur une palette **strictement monochrome** avec une seule couleur d'accent :

- **Noir** (#000000 ou #0A0A0A) — fonds de sections alternés, texte principal, boutons, icônes
- **Blanc** (#FFFFFF) — fonds de sections alternés, texte sur fond noir
- **Gris foncé** (#1A1A1A, #2A2A2A) — nuances pour cartes sur fond noir, surfaces surélevées en dark
- **Gris moyen** (#6B6B6B, #8A8A8A) — texte secondaire, labels, descriptions
- **Gris clair** (#E5E5E5, #F5F5F5) — bordures, séparateurs, fonds de sections claires
- **Accent LIME** (#bbff00) — LA couleur signature. Utilisée avec parcimonie et impact :
  - Le mot "ensemble" dans le hero
  - Les CTA principaux (bouton lime + texte noir)
  - Les initiales dans les icônes rondes (texte lime sur fond noir)
  - Les éléments hover / actifs
  - Les petits détails qui ponctuent (un trait, un point, un soulignement)
  - Le filtre actif dans le portfolio (fond lime, texte noir)

**IMPORTANT** : Le lime #bbff00 ne doit PAS être partout. C'est une couleur flash qui perd son impact si elle est trop présente. Elle doit attirer l'œil sur les éléments d'action et les moments-clés. Le reste du site vit en noir, blanc et gris.

**Pas de couleurs par pôle.** On ne différencie plus les 3 profils par couleur — tout le collectif partage la même identité visuelle noir/lime.

### Ambiance générale

- **Noir & blanc radical, accent lime chirurgical.** Le site doit avoir une identité forte et contrastée, presque éditoriale. On alterne sections blanches et sections noires pour créer du rythme.
- Bordures fines (0.5px ou 1px) en gris — plutôt que des ombres
- Coins arrondis doux (8-12px)
- Boutons arrondis (border-radius: 100px pour les pills et CTA)
- Espacement généreux entre les sections
- **Alternance noir/blanc** : par exemple Hero sur fond noir (texte blanc, "ensemble" en lime), Services sur fond blanc, Portfolio sur fond noir ou gris très foncé, Équipe sur fond blanc, CTA sur fond noir
- **Animations** : entrées en scroll (fade-in + léger slide-up), transitions douces sur les filtres du portfolio, hover subtil sur les cartes (par ex. un trait lime qui apparaît en bas de la carte au hover)

### Responsive

- Le site doit être **parfaitement responsive** : desktop, tablette, mobile
- Sur mobile : les grilles passent en colonne, la nav devient un burger, les tailles de texte s'adaptent

---

## Contraintes techniques

- **Framework** : React (Next.js si tu veux du SSR/SEO) + Tailwind CSS
- **Pas de backend** pour l'instant — tout est statique / hardcodé
- **Déploiement prévu** : Vercel ou Netlify
- Les images/vidéos seront ajoutées plus tard — utilise des placeholders propres
- Code propre et commenté, composants bien découpés
- Les données des projets et des membres doivent être dans des fichiers de data séparés (genre `data/projects.ts` et `data/team.ts`) pour qu'on puisse facilement les modifier sans toucher aux composants

---

## Structure de fichiers attendue

```
src/
├── app/ (ou pages/)
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Team.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── data/
│   ├── services.ts
│   ├── projects.ts
│   └── team.ts
└── styles/
    └── globals.css
```

---

## Résumé des priorités

1. **Le design avant tout** — le site doit donner envie, être beau et pro
2. **Montrer le travail** — la section projets est le cœur du site
3. **Clarté de l'offre** — en 5 secondes on doit comprendre qui vous êtes et ce que vous faites
4. **Mobile-first** — beaucoup de prospects dans le sport consultent sur téléphone
5. **Facile à maintenir** — data séparée des composants, code lisible
