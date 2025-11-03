<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ recipe.name }}</h1>

    <!-- Recipe Meta Info -->
    <div class="flex items-center justify-center gap-4 text-sm text-gray-600 mb-6">
      <span>{{ recipe.cuisine }}</span>
      <span class="text-gray-400">•</span>
      <span>{{ recipe.difficulty }}</span>
      <span class="text-gray-400">•</span>
      <span>Prep: {{ recipe.prepTimeMinutes }}m</span>
      <span class="text-gray-400">•</span>
      <span>Cook: {{ recipe.cookTimeMinutes }}m</span>
      <span class="text-gray-400">•</span>
      <span>Servings: {{ recipe.servings }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});
</script>




