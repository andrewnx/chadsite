<script setup lang="ts">
import { ref, computed } from "vue";
import type { Container } from '@tsparticles/engine';
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

const currentTierIndex = ref(0);

// Computed property to determine the maximum index
const maxIndex = computed(() => page.value.holderTiers.tiers.length - 1);

// Methods to navigate between tiers
const nextTier = () => {
  if (currentTierIndex.value < maxIndex.value) {
    currentTierIndex.value++;
  } else {
    currentTierIndex.value = 0; // Wrap around to the first tier
  }
};

const prevTier = () => {
  if (currentTierIndex.value > 0) {
    currentTierIndex.value--;
  } else {
    currentTierIndex.value = maxIndex.value; // Wrap around to the last tier
  }
};

definePageMeta({
  colorMode: "dark",
});

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

const showModal = ref(false);
const modalTitle = ref("");
const modalContent = ref("");

// This method will be triggered when a list item is clicked.
function handleItemClick(item) {
  modalTitle.value = item.text;
  modalContent.value = item.accordionContent;
  showModal.value = true;
};

const onLoad = (container: Container ) => {
  container.play();
}

const options = {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  background: {
    color: {
      value: '#050507',
    }
  },
  particles: {
    color: {
      value: "#414A79"
    },
    links: {
      color: "#007483",
      enable: true
    },
    move: {
      enable: true
    },
    number: {
      value: 100
    }
  },
}
</script>

<template>
  <div>
    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
      class="development-section"
    >
      <div class="particles-container">
        <NuxtParticles
          id="tsparticles"
          :options="options"
          @load="onLoad"
          class="absolute inset-0"
        />
      </div>
      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold"
        >
          <NuxtLink
            :to="page.hero.headline.to"
            target="_blank"
            class="focus:outline-none"
            tabindex="-1"
          >
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon
            v-if="page.hero.headline.icon"
            :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none"
          />
        </UBadge>
      </template>
      <Placeholder />
    </ULandingHero>
    <ULandingSection
      :title="page.features.title"
      :description="page.features.description"
      :headline="page.features.headline"
      class="development-section"
    >
      <UPageGrid
        id="features"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <ULandingCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
          class="feature-card-wrapper"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :title="page.development.title"
      :description="page.development.description"
      :headline="page.development.headline"
      class="development-section"
    >
      <UPageGrid
        id="development"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <div
          v-for="(item, index) in page.development.items"
          :key="index"
          class="your-custom-class-for-item"
        >
          <ULandingCard
            :title="item.title"
            :icon="item.icon"
            class="development-title"
          >
            <template #default>
              <UModal v-model="showModal" :overlay="true" class="custom-modal">
                <h2>{{ modalTitle }}</h2>
                <p>{{ modalContent }}</p>
              </UModal>
              <ul class="custom-description-list">
                <li
                  v-for="(desc, dIndex) in item.description"
                  :key="`desc-${dIndex}`"
                  :class="{ 'is-completed': desc.completed }"
                  @click.stop="handleItemClick(desc)"
                >
                  {{ desc.text }}
                </li>
              </ul>
            </template>
          </ULandingCard>
        </div>
      </UPageGrid>
    </ULandingSection>
    <ULandingSection
      id="holderTiers"
      :title="page.holderTiers.title"
      :description="page.holderTiers.description"
      class="development-section scroll-mt-[var(--total-offset)]"
    >
      <div class="tier-carousel">
        <button class="arrow left-arrow" @click="prevTier">&lt;</button>
        <!-- Iterate over the tiers and display a card for the current tier -->
        <ULandingCard
          v-for="(tier, tierIndex) in page.holderTiers.tiers"
          :key="tier.name"
          v-show="tierIndex === currentTierIndex"
          :title="tier.name"
          class="tier-card"
        >
          <template #default>
            <ul class="tier-benefits">
              <li
                v-for="(benefit, benefitIndex) in tier.benefits"
                :key="`benefit-${benefitIndex}`"
              >
                {{ benefit }}
              </li>
            </ul>
          </template>
        </ULandingCard>
        <button class="arrow right-arrow" @click="nextTier">&gt;</button>
      </div>
    </ULandingSection>

    <ULandingSection
      title="Our Partners"
      description="Learn more about our trusted partners."
      class="development-section"
    >
      <UPageGrid
        id="partners"
        class="u-page-grid scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
      <ULandingCard
          title="Sol Drops"
          description="Claim the latest and greatest airdrops on Solana."
          color="primary"
          orientation="vertical"
          class="partner-card"
        >
        <a href="https://twitter.com/soldropsxyz" alt="Sol Drops X">
          <img
            src="/public/soldrops.webp"
            class="w-full rounded-md partner-logo"
            alt="Sol Drops Logo"
          />
        </a>
        </ULandingCard>
        <ULandingCard
          title="Your Project Here"
          description="Check out our Partnership Options below for more details!"
          color="primary"
          orientation="vertical"
          class="partner-card"
        >
          <img
            src="/public/sol-glass.webp"
            class="w-full rounded-md partner-logo"
            alt="Sol Glass"
          />
        </ULandingCard>
        <ULandingCard
          title="Your Project Here"
          description="Check out our Partnership Options below for more details!"
          color="primary"
          orientation="vertical"
          class="partner-card"
        >
          <img
            src="/public/sol-glass.webp"
            class="w-full rounded-md partner-logo"
            alt="Sol Glass"
          />
        </ULandingCard>
      </UPageGrid>
      <ULandingSection
      :title="page.partnerOptions.title"
      :description="page.partnerOptions.description"
      class="development-section"
    >
      <UPageGrid
        id="partnerOptions"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <div
          v-for="(item, index) in page.partnerOptions.items"
          :key="index"
          class="your-custom-class-for-item"
        >
          <ULandingCard
            :title="item.title"
            class="development-title"
          >
            <template #default>
              <ul class="custom-description-list">
                <li
                  v-for="(desc, dIndex) in item.description"
                  :key="`desc-${dIndex}`"
                >
                  {{ desc.text }}
                </li>
              </ul>
            </template>
          </ULandingCard>
        </div>
      </UPageGrid>
    </ULandingSection>
    </ULandingSection>

    <ULandingSection
      id="testimonials"
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      class="development-section scroll-mt-[var(--total-offset)]"
    >
      <UPageColumns>
        <div
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          class="break-inside-avoid"
        >
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
    </ULandingSection>
    <ULandingSection
      id="faq"
      :title="page.faq.title"
      :description="page.faq.description"
      class="scroll-mt-[var(--total-offset)] development-section"
    >
      <ULandingFAQ :items="page.faq.items">
        <template #item="{ item }">
          <div class="faq-item-container">
            <p>
              {{ item.content }}
              <a
                v-if="item.href"
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
                style="color: #03e1ff; text-decoration: underline"
              >
                {{ item.href }}
              </a>
            </p>
          </div>
        </template>
      </ULandingFAQ>
    </ULandingSection>
  </div>
</template>
