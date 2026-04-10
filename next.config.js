/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Export statique — pas de serveur, juste des fichiers HTML/CSS/JS
  output: "export",

  // Images déjà compressées, pas besoin de serveur d'optimisation
  images: {
    unoptimized: true,
    qualities: [40, 55, 75],
  },
};

module.exports = nextConfig;
