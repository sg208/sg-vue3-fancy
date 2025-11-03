<template>
  <section class="py-16 bg-white">
    <div class="container px-4 mx-auto">
      <div class="mb-12 text-center">
        <p class="mb-2 text-sm font-semibold tracking-wider text-orange-500 uppercase">
          All Recipes
        </p>
        <h2 class="text-4xl font-bold text-gray-900">
          Explore Our <span class="font-serif italic">Collection</span>
        </h2>
      </div>

      <div v-if="loading" class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <RecipeCardSkeleton v-for="n in 6" :key="n" />
      </div>

      <div v-else class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
      </div>
    </div>
  </section>
</template>

<script setup>
import RecipeCard from "../recipes/RecipeCard.vue";
import RecipeCardSkeleton from "../recipes/RecipeCardSkeleton.vue";

defineProps({
  recipes: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>




