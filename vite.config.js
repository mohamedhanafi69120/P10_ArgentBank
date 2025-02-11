import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // 🚀 Correction ici : base "./" pour GitHub Pages
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
  },
});
