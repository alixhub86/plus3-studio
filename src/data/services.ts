export type Service = {
  id: string;
  initials: string;
  title: string;
  description: string;
  author: string;
};

export const services: Service[] = [
  {
    id: "da",
    initials: "DA",
    title: "Direction artistique & branding",
    description:
      "Identité visuelle, charte graphique, supports print & digitaux, motion design.",
    author: "Alix — DA & graphiste",
  },
  {
    id: "vd",
    initials: "VD",
    title: "Vidéo & social media",
    description:
      "Captation, montage, aftermovies, contenus réseaux sociaux, stratégie éditoriale.",
    author: "Christopher — vidéaste & CM",
  },
  {
    id: "ph",
    initials: "PH",
    title: "Photo & partenariats",
    description:
      "Reportage sportif, portraits, packshots, développement partenariats clubs.",
    author: "Alexis — photographe",
  },
];
