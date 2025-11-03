<template>
  <div class="prose prose-lg max-w-none text-left bg-gray-50 p-8 rounded-2xl mb-8">
    <h3 class="text-2xl font-bold text-gray-900 mb-4">Instructions</h3>
    <p class="text-gray-700 leading-relaxed">{{ formattedInstructions }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { formatInstructions, type Recipe } from "../../../utils/recipeUtils";

const props = defineProps<{
  recipe: Recipe;
}>();

const formattedInstructions = computed(() => {
  return formatInstructions(props.recipe.instructions);
});
</script>




