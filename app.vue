<script setup lang="ts">
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  ogImage: "https://i.imgur.com/RMwqcP6.jpeg",
  twitterImage: "https://i.imgur.com/RMwqcP6.jpeg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <Header />

  <UMain>
    <NuxtPage />
  </UMain>

  <Footer />
</template>
