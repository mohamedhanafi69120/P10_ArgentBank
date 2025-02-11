import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/P10_ArgentBank/", // ⚠️ Remplace "P10_ArgentBank" par le nom EXACT de ton repo GitHub
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
  },
});
