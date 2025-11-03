<template>
  <div class="min-h-screen text-gray-900 bg-white">
    <HeroSection :featured="featured" :loading="loading" />
    <RecipeGridSection :recipes="displayedRecipes" :loading="loading" />
    <NewsletterAndFAQSection @subscribe="handleSubscribe" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRecipes } from "../composables/useRecipes";
import { getRandomRecipe, getDisplayedRecipes, type Recipe } from "../utils/recipeUtils";
import HeroSection from "../components/sections/HeroSection.vue";
import RecipeGridSection from "../components/sections/RecipeGridSection.vue";
import NewsletterAndFAQSection from "../components/sections/NewsletterAndFAQSection.vue";

const { recipes, isLoading: loading } = useRecipes();
const featured = ref<Recipe | null>(null);

watch(recipes, (newRecipes) => {
  if (newRecipes.length && !featured.value) {
    featured.value = getRandomRecipe(newRecipes);
  }
}, { immediate: true });

const displayedRecipes = computed(() => {
  return getDisplayedRecipes(recipes.value, featured.value, 6);
});

const handleSubscribe = (email: string) => {
  alert("Thank you for subscribing!");
};
</script>
