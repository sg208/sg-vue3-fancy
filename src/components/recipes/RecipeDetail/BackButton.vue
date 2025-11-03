<template>
  <button
    class="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors mb-4"
    @click="$router.back()"
  >
    <ChevronLeftIcon />
    <span class="font-medium">Back to Recipes</span>
  </button>
</template>

<script setup>
const ChevronLeftIcon = {
  template: `
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  `,
};
</script>




