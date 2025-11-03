<template>
  <div class="text-center py-20">
    <h2 class="text-2xl font-bold text-gray-900 mb-2">Recipe Not Found</h2>
    <p class="text-gray-600 mb-6">The recipe you're looking for doesn't exist.</p>
    <router-link
      to="/"
      class="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
    >
      <ChevronLeftIcon />
      Back to Home
    </router-link>
  </div>
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




