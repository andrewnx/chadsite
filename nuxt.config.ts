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
    meta: [
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Chad Scanner, Chadscanner, Leg Up Bot, Jeet Scanner, Solana Scanner, DEX Scanner, DeFi Community Insights, Solana Trading Community, Sentiment Analysis Bot, Telegram Bot for Solana Trading, Discord Bot for Solana Trading, Crypto Community Bot, Automated Trading Bot, Solana Trading Tool, AI Crypto Analysis, Crypto Community Platform, Crypto Market Analysis",
      },
    ],
  },
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        // Only keep non-SEO related tags here
      ],
    },
  },
});
