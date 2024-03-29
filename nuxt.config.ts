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
    "nuxt-particles"
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
      "DEX pair scanner with precision for real-time insights",
    openGraph: {
      type: "website",
      siteName: "Chad Scanner 2.0",
      description:
        "DEX pair scanner with precision for real-time insights",
      image: "https://i.imgur.com/oIbRHle.png",
    },
    twitter: {
      card: "summary_large_image",
      site: "@chadscannerlabs",
      title: "Chad Scanner 2.0",
      description:
        "DEX pair scanner with precision for real-time insights",
      image: "https://i.imgur.com/oIbRHle.png",
    },
  },
/*   app: {
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
  }, */
});
