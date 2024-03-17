// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/global.css"],
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/fonts", "@nuxtjs/color-mode"],
  ui: {
    icons: ["heroicons", "simple-icons"],
  },
  devtools: {
    enabled: true,
  },
  typescript: {
    strict: false,
  },
  colorMode: {
    preference: "dark", // Force dark mode
    fallback: "dark", // Fallback to dark mode if no preference is found
    classSuffix: "",
  },
});
