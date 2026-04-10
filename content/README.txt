CONTENU ÉDITABLE DU SITE
========================

Ce dossier contient tout ce que tu peux modifier sans toucher au code.
Tous les fichiers sont en .json — tu peux les ouvrir avec :
  - TextEdit (clic droit → Ouvrir avec → TextEdit)
  - VS Code, Sublime, Notepad, ou tout autre éditeur de texte
  - Le navigateur (double-clic, ça affichera le contenu)

────────────────────────────────────────────────────────────────────────

site.json
  Identité globale du site : nom, baseline, email, réseaux sociaux, logo.

team.json
  Membres de l'équipe : prénom, initiales, rôle, photo.

  Pour ajouter une photo :
    1) Glisse ta photo dans  public/team/  (ex: alix.jpg)
    2) Mets  "photo": "/team/alix.jpg"  dans team.json

  Pour faire un retour à la ligne dans le rôle, utilise \n  :
    "role": "Directeur artistique\n& graphiste"

────────────────────────────────────────────────────────────────────────

PROJETS DU PORTFOLIO
  Les projets ne sont PAS dans ce dossier — ils sont dans :
    public/projects/<numéro-du-projet>/

  Chaque projet a son propre meta.json à modifier directement dans
  son dossier, et toutes les images/vidéos déposées dans le dossier
  apparaissent automatiquement.

────────────────────────────────────────────────────────────────────────

ATTENTION : le format JSON est strict.
  • Les chaînes doivent être entre guillemets DOUBLES "..." (pas simples)
  • Pas de virgule après le dernier élément d'une liste ou d'un objet
  • Vérifie la syntaxe sur https://jsonlint.com si ça plante
