export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: 'description', content: 'DEX pair scanner with precision for real-time insights' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.chadscanner.com' },
        { property: 'og:title', content: 'Chad Scanner 2.0' },
        { property: 'og:description', content: 'DEX pair scanner with precision for real-time insights' },
        { property: 'og:image', content: 'https://i.imgur.com/6nXcK6A.jpeg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@chadscannerlabs' },
        { name: 'twitter:title', content: 'Chad Scanner 2.0' },
        { name: 'twitter:description', content: 'DEX pair scanner with precision for real-time insights' },
        { name: 'twitter:image', content: 'https://i.imgur.com/6nXcK6A.jpeg' },
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
  css: ["~/assets/css/global.css"],
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
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
  sitemap: {
    hostname: 'https://www.chadscanner.com',
    gzip: true,
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://www.chadscanner.com/sitemap.xml'
  },
});
