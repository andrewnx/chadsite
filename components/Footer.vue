<script setup lang="ts">
const links = [
  {
    label: "$CHAD",
    children: [
      {
        label: "Raydium",
        to: "https://raydium.io/swap/?outputCurrency=EeVNHYW1JbevmjhQQnNmoakfzmjDNKZEUatCpehgVxBU",
      },
      {
        label: "Solscan",
        to: "https://solscan.io/token/EeVNHYW1JbevmjhQQnNmoakfzmjDNKZEUatCpehgVxBU",
      },
      {
        label: "CoinMarketCap",
        to: "https://coinmarketcap.com/dexscan/en/solana/BmczK7HTihMvNENCKqPWSvnWSk58DsqnUf4c4QkjWfTy/",
      },
      {
        label: "Documentation",
        to: "https://chadscanners-org.gitbook.io/chadscanner/",
      },
    ],
  },
  {
    label: "Socials",
    children: [
      {
        label: "Telegram",
        to: "https://t.me/chadscanner",
      },
      {
        label: "Discord",
        to: "https://discord.gg/chadscanner",
      },
      /*       {
        label: "X (formerly Twitter)",
        to: "https://twitter.com/chadscanner",
      }, */
    ],
  },
  /*     {
    label: "Company",
    children: [
      {
        label: "About",
      },
      {
        label: "Pricing",
      },
      {
        label: "Careers",
      },
      {
        label: "Blog",
      },
    ],
  }, */
];

const toast = useToast();

const email = ref("");
const loading = ref(false);

function onSubmit() {
  loading.value = true;

  setTimeout(() => {
    toast.add({
      title: "Subscribed!",
      description: "You've been subscribed to our newsletter.",
    });

    loading.value = false;
  }, 1000);
}
</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="links">
        <template #right>
          <img
            src="/chadscanner_logo_text.webp"
            alt="Chad Scanner Logo"
            class="logo-footer"
          />
          <!--           <form @submit.prevent="onSubmit">
            <UFormGroup
              label="Subscribe to our newsletter"
              :ui="{ container: 'mt-3' }"
            >
              <UInput
                v-model="email"
                type="email"
                placeholder="Enter your email"
                :ui="{ icon: { trailing: { pointer: '' } } }"
                required
                size="xl"
                autocomplete="off"
                class="max-w-sm"
              >
                <template #trailing>
                  <UButton
                    type="submit"
                    size="xs"
                    :label="loading ? 'Subscribing' : 'Subscribe'"
                    :loading="loading"
                  />
                </template>
              </UInput>
            </UFormGroup>
          </form> -->
        </template>
      </UFooterColumns>
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }} Chad Scanner. All rights
        reserved.
      </p>
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
      <!--       <UButton
        to="https://twitter.com/chadscanner"
        target="_blank"
        icon="i-simple-icons-x"
        aria-label="X"
        color="gray"
        variant="ghost"
      /> -->
      <UButton
        to="https://solscan.io/token/EeVNHYW1JbevmjhQQnNmoakfzmjDNKZEUatCpehgVxBU"
        target="_blank"
        icon="i-simple-icons-solana"
        aria-label="Solscan"
        color="gray"
        variant="ghost"
      />
      <!-- <UColorModeButton size="sm" /> -->
    </template>
  </UFooter>
</template>
