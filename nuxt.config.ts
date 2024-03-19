// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/global.css"],
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  sitemap: {
    hostname: "https://chadscanner.com",
    gzip: true,
    routes: [],
  },
  robots: {
    UserAgent: "*",
    Disallow: "/admin", // If you have admin pages that should not be indexed
    Allow: "/", // Allow web crawlers full access
    Sitemap: "https://chadscanner.com/sitemap.xml", // Replace with your domain
  },
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
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  app: {
    head: {
      title: "Chad Scanner 2.0",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Elevate your crypto journey with real-time, data-driven insights to make informed decisions.",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Chad Scanner" },
        { property: "og:title", content: "Chad Scanner 2.0" },
        {
          property: "og:description",
          content:
            "Elevate your trading experience with Solana's premier scanner - Backtested to provide you with quality coins and projects through its extensive custom scanning filters.",
        },
        { property: "og:image", content: "https://i.imgur.com/RMwqcP6.jpeg" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:site", content: "@chadscanner" }, // Replace with your Twitter handle
        { property: "twitter:creator", content: "@chadscanner" }, // Replace with your Twitter handle
        { property: "twitter:title", content: "Chad Scanner 2.0" },
        {
          property: "twitter:description",
          content:
            "Elevate your trading experience with Solana's premier scanner - Backtested to provide you with quality coins and projects through its extensive custom scanning filters.",
        },
        {
          property: "twitter:image",
          content: "https://i.imgur.com/RMwqcP6.jpeg",
        },
      ],
    },
  },
});
