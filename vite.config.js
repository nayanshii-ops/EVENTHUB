import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base "./" ensures assets resolve seamlessly on GitHub Pages
// (https://nayanshii-ops.github.io/EVENTHUB/) as well as custom domains
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    port: 3009,
    open: true
  }
});
