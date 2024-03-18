<script setup lang="ts">
const title =
  "Chad Scanner 2.0 - DEX pair scanner with precision for real-time insights";
const description =
  "Elevate your trading experience with Solana's premier scanner. Backtested to provide quality coins and projects through extensive custom scanning filters.";

useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Chad Scanner" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: "https://i.imgur.com/RMwqcP6.jpeg" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:image", content: "https://i.imgur.com/RMwqcP6.jpeg" },
    { property: "twitter:title", content: title },
    { property: "twitter:description", content: description },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

/* useSeoMeta({
  ogImage: "https://i.imgur.com/RMwqcP6.jpeg",
  twitterImage: "https://i.imgur.com/RMwqcP6.jpeg",
  twitterCard: "summary_large_image",
}); */
</script>

<template>
  <Header />

  <UMain>
    <NuxtPage />
  </UMain>

  <Footer />
</template>
