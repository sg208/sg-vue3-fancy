<template>
  <div>
    <div class="grid gap-3 px-3 lg:grid-cols-2 lg:items-start">
      <StickyPlate :recipe="activeRecipe" class="lg:order-last" />
      <div class="min-w-0">
        <HeroSection :featured="featured" />
        <RecipeGridSection
          :recipes="listedRecipes"
          :loading="loading"
          @highlight="handleHighlight"
        />
      </div>
    </div>

    <section
      id="todays-plate"
      aria-labelledby="todays-plate-heading"
      class="scroll-mt-4 bg-panel px-4 py-24 mt-32 sm:px-6 lg:mt-48 lg:py-32"
    >
      <FeaturedRecipeSkeleton v-if="loading" />
      <FeaturedRecipe
        v-else-if="featured"
        :recipe="featured"
        @shuffle="handleShuffle"
      />
    </section>

    <NewsletterAndFAQSection />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRecipes } from '../composables/useRecipes';
import { usePageTitle } from '../composables/usePageTitle';
import { getRandomRecipe, type Recipe } from '../utils/recipeUtils';
import HeroSection from '../components/sections/HeroSection.vue';
import RecipeGridSection from '../components/sections/RecipeGridSection.vue';
import NewsletterAndFAQSection from '../components/sections/NewsletterAndFAQSection.vue';
import StickyPlate from '../components/recipes/StickyPlate.vue';
import FeaturedRecipe from '../components/recipes/FeaturedRecipe.vue';
import FeaturedRecipeSkeleton from '../components/recipes/FeaturedRecipeSkeleton.vue';

usePageTitle(undefined);

const { recipes, isLoading: loading } = useRecipes();
const featured = ref<Recipe | null>(null);
const highlighted = ref<Recipe | null>(null);

watch(
  recipes,
  (newRecipes) => {
    if (newRecipes.length && !featured.value) {
      featured.value = getRandomRecipe(newRecipes);
    }
  },
  { immediate: true }
);

// The list holds every recipe except today's plate.
const listedRecipes = computed(() =>
  recipes.value.filter((recipe) => recipe.id !== featured.value?.id)
);
const activeRecipe = computed(() => highlighted.value ?? featured.value);

const handleHighlight = (recipe: Recipe) => {
  highlighted.value = recipe;
};

const handleShuffle = () => {
  const others = recipes.value.filter(
    (recipe) => recipe.id !== featured.value?.id
  );
  featured.value = getRandomRecipe(others) ?? featured.value;
  highlighted.value = null;
};
</script>
