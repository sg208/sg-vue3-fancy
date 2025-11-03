<template>
  <router-link
    :to="`/recipe/${recipe.id}`"
    class="block overflow-hidden transition-shadow bg-white shadow-md cursor-pointer rounded-2xl hover:shadow-xl group"
  >
    <div class="relative">
      <img
        :src="imageUrl"
        :alt="recipe.name"
        class="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-105"
      />
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 text-xs font-bold text-white bg-orange-500 rounded-full">
          {{ recipe.prepTimeMinutes }} mins
        </span>
      </div>
    </div>
    <div class="p-6">
      <div class="flex items-center gap-2 mb-2 text-sm text-gray-500">
        <span>{{ recipe.cuisine }}</span>
        <span>•</span>
        <span>{{ recipe.difficulty }}</span>
      </div>
      <h3 class="mb-3 text-xl font-bold text-gray-900">{{ recipe.name }}</h3>
      <p class="mb-4 text-sm text-gray-600 line-clamp-2">
        {{ preview }}
      </p>
      <div class="flex items-center gap-1 text-sm font-semibold text-orange-500 transition-all group-hover:gap-2">
        View Recipe
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from "vue";
import { getRecipeImageUrl, previewText } from "../../utils/recipeUtils";

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
  previewLength: {
    type: Number,
    default: 100,
  },
});

const imageUrl = computed(() => getRecipeImageUrl(props.recipe));
const preview = computed(() => previewText(props.recipe.instructions, props.previewLength));
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>




