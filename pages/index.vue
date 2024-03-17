<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});

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
</script>

<template>
  <div>
    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
      :style="{
        backgroundImage: 'url(/chadbg2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }"
      class="development-section"
    >
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
      :style="{
        backgroundImage: 'url(/chadbanneredit.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }"
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
      :style="{
        backgroundImage: 'url(/chadbanneredit2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }"
      class="development-section full-viewport-height"
    >
      <UPageGrid
        id="development"
        class="scroll-mt-[calc(var(--header-height)+70px+128px+96px)]"
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
              <ul class="custom-description-list">
                <li
                  v-for="(desc, dIndex) in item.description"
                  :key="`desc-${dIndex}`"
                >
                  {{ desc }}
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
      class="development-section"
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
      id="testimonials"
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      class="development-section"
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
      :style="{
        backgroundImage: 'url(/chadbannereditfull.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }"
      class="scroll-mt-[var(--header-height)]"
    >
      <ULandingFAQ
        multiple
        :items="page.faq.items"
        :ui="{
          button: {
            label: 'font-semibold',
            trailingIcon: {
              base: 'w-6 h-6',
            },
          },
        }"
        class="max-w-4xl mx-auto"
      />
    </ULandingSection>
  </div>
</template>
