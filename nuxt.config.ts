import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  ssr: false, // GitHub Pages — тільки для SPA/статичних сайтів
  devtools: { enabled: true },
  alias: {
    "@": __dirname,
  },
  modules: ["@pinia/nuxt"],

  // ВАЖЛИВО: базовий шлях
  app: {
    baseURL: "/smart-bundles/",
  },

  // Правильний пресет для GH Pages
  nitro: {
    preset: "github-pages",
    prerender: {
      crawlLinks: true,
    },
  },
});
