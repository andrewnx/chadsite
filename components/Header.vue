<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { activeHeadings, updateHeadings } = useScrollspy();

const links = computed(() => [
  {
    label: "Features",
    to: "#features",
    icon: "i-heroicons-cube-transparent",
    active:
      activeHeadings.value.includes("features") &&
      !activeHeadings.value.includes("development"),
  },
  {
    label: "Development",
    to: "#development",
    icon: "i-heroicons-credit-card",
    active:
      activeHeadings.value.includes("development") &&
      !activeHeadings.value.includes("testimonials"),
  },
  {
    label: "Tiers",
    to: "#holderTiers",
    icon: "i-heroicons-credit-card",
    active: activeHeadings.value.includes("holderTiers"),
  },
  {
    label: "Testimonials",
    to: "#testimonials",
    icon: "i-heroicons-academic-cap",
    active: activeHeadings.value.includes("testimonials"),
  },
  {
    label: "FAQ",
    to: "#faq",
    icon: "i-heroicons-question-mark-circle",
    active: activeHeadings.value.includes("faq"),
  },
]);

nuxtApp.hooks.hookOnce("page:finish", () => {
  updateHeadings([
    document.querySelector("#features"),
    document.querySelector("#development"),
    document.querySelector("#holderTiers"),
    document.querySelector("#testimonials"),
    document.querySelector("#faq"),
  ]);
});
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <img
        src="/chadscanner_logo_text.png"
        alt="Chad Scanner Logo"
        class="logo-class"
      />
      <UBadge label="v2.0" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UButton
        to="https://t.me/chadscanner"
        target="_blank"
        icon="i-simple-icons-telegram"
        aria-label="Telegram"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://discord.gg/chadscanner"
        target="_blank"
        icon="i-simple-icons-discord"
        aria-label="Discord"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://twitter.com/chadscanner"
        target="_blank"
        icon="i-simple-icons-x"
        aria-label="X"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://solscan.io/token/EeVNHYW1JbevmjhQQnNmoakfzmjDNKZEUatCpehgVxBU"
        target="_blank"
        icon="i-simple-icons-solana"
        aria-label="Solscan"
        color="gray"
        variant="ghost"
      />
      <!-- <UColorModeButton size="sm" /> -->
      <!--   <UButton
        label="Sign in"
        color="white"
        variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid"
        class="hidden lg:flex"
      /> -->
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <!-- <UButton label="Sign in" color="white" block class="mb-3" />
      <UButton label="Get started" block /> -->
    </template>
  </UHeader>
</template>
