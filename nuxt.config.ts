export default defineNuxtConfig({
  site: {
    url: "https://www.chadscanner.com",
    name: "Chad Scanner 2.0",
    description: "DEX pair scanner with precision for real-time insights",
    defaultLocale: "en",
  },
  css: ["~/assets/css/global.css"],
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
  ],
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
    preference: "dark",
    fallback: "dark",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  seo: {
    // SEO specific configuration
    name: "Chad Scanner 2.0",
    description:
      "Elevate your trading experience with Solana’s premier scanner.",
    openGraph: {
      type: "website",
      siteName: "Chad Scanner",
      description:
        "Elevate your trading experience with Solana's premier scanner - Backtested to provide you with quality coins and projects through its extensive custom scanning filters.",
      image: "https://i.imgur.com/RMwqcP6.webp",
    },
    twitter: {
      card: "summary_large_image",
      site: "@chadscanner",
      title: "Chad Scanner 2.0",
      description:
        "Elevate your trading experience with Solana's premier scanner - Backtested to provide you with quality coins and projects through its extensive custom scanning filters.",
      image: "https://i.imgur.com/RMwqcP6.webp",
    },
  },
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "yandex-verification", content: "b27dfd62e15fa24e" },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "chadscanner, chad scanner, chad scanner crypto, chad scanner coin, solana trading bot",
        },
      ],
    },
  },
});
