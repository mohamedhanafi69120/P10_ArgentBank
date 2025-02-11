// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // Vérifie si l'environnement est GitHub Pages ou local
// const isGitHubPages = process.env.NODE_ENV === "production";

// export default defineConfig({
//   plugins: [react()],
//   base: isGitHubPages ? "/P10_ArgentBank/" : "./", // ✅ Corrige le problème de 404
//   build: {
//     outDir: "dist",
//   },
//   server: {
//     open: true,
//     host: true,
//     port: 5173,
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Détection automatique de l'environnement (local ou GitHub Pages)
const isGitHubPages = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/P10_ArgentBank/" : "/", // ⚠️ Vérification du chemin GitHub Pages
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
    host: true,
    port: 5173,
  },
});
