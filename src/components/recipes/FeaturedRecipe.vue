<template>
  <div class="max-w-5xl mx-auto">
    <div class="flex flex-col overflow-hidden bg-white shadow-lg rounded-3xl md:flex-row">
      <div class="relative md:w-1/2">
        <img :src="imageUrl" :alt="recipe.name" class="w-full h-full object-cover min-h-[400px]" />
      </div>
      <div class="flex flex-col justify-between p-8 md:w-1/2 md:p-10">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="text-sm font-medium text-orange-500">{{ recipe.prepTimeMinutes }} mins</span>
            <span class="text-sm font-medium text-green-600">{{ recipe.difficulty }}</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900">{{ recipe.name }}</h2>
          <p class="mb-6 leading-relaxed text-gray-600">
            {{ preview }}
          </p>
          <div class="mb-6">
            <h3 class="mb-3 font-semibold text-gray-900">Key Ingredients:</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="ingredient in displayedIngredients"
                :key="ingredient"
                class="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full"
              >
                {{ ingredient }}
              </span>
            </div>
          </div>
        </div>
        <router-link
          :to="`/recipe/${recipe.id}`"
          class="block w-full py-3 font-semibold text-center text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600"
        >
          View Full Recipe
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { getRecipeImageUrl, previewText, formatIngredient } from "../../utils/recipeUtils";

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
  previewLength: {
    type: Number,
    default: 180,
  },
  maxIngredients: {
    type: Number,
    default: 4,
  },
});

const imageUrl = computed(() => getRecipeImageUrl(props.recipe));
const preview = computed(() => previewText(props.recipe.instructions, props.previewLength));

const displayedIngredients = computed(() => {
  return props.recipe.ingredients
    .slice(0, props.maxIngredients)
    .map(formatIngredient);
});
</script>




