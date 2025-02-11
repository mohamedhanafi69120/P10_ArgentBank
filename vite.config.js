// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "./", // ⚠️ IMPORTANT : base "./" pour éviter la 404 sur GitHub Pages
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

export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ Cette configuration fonctionne à la fois en local et sur GitHub Pages
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
    host: true,
    port: 5173,
  },
});
