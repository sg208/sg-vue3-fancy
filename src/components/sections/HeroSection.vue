<template>
  <section class="py-16 bg-gradient-to-b from-orange-50 to-white">
    <div class="container px-4 mx-auto">
      <div class="mb-12 text-center">
        <p class="mb-2 text-sm font-semibold tracking-wider text-orange-500 uppercase">
          Featured Recipe
        </p>
        <h1 class="text-5xl font-bold text-gray-900">
          Discover Today's <span class="font-serif italic">Special</span>
        </h1>
        <p class="mt-3 text-gray-600">Handpicked recipes that bring joy to your kitchen</p>
      </div>

      <FeaturedRecipeSkeleton v-if="loading" />
      <FeaturedRecipe v-else-if="featured" :recipe="featured" />
    </div>
  </section>
</template>

<script setup>
import FeaturedRecipe from "../recipes/FeaturedRecipe.vue";
import FeaturedRecipeSkeleton from "../recipes/FeaturedRecipeSkeleton.vue";

defineProps({
  featured: {
    type: Object,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>




