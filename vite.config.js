import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/moihm96/frontend-reto-reactjs",
  build: {
    outDir: "dist",
  },
});
