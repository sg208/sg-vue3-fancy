<template>
  <div class="bg-white border-2 border-gray-100 rounded-2xl p-8">
    <h3 class="text-2xl font-bold text-gray-900 mb-6 text-left">Ingredients</h3>
    <ul class="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-3">
      <li
        v-for="ingredient in recipe.ingredients"
        :key="ingredient"
        class="flex items-start gap-3"
      >
        <CheckIcon />
        <span class="text-gray-700">{{ ingredient }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const CheckIcon = {
  template: `
    <svg
      class="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd"
      />
    </svg>
  `,
};

defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});
</script>




