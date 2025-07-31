// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "./"),
  },
  modules: ["@pinia/nuxt"],
  app: {
    baseURL: "/smart-bundles/",
  },
  ssr: false,
});
