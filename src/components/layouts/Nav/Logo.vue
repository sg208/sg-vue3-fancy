<template>
  <router-link to="/" class="flex items-center space-x-2">
    <ShieldIcon />
    <span class="text-xl font-bold text-gray-900">RecipeHub</span>
  </router-link>
</template>

<script setup lang="ts">
const ShieldIcon = {
  template: `
    <svg class="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-1-7-5.55-7-10V8.3l7-3.5 7 3.5V10c0 4.45-3.14 9-7 10z"
      />
      <path d="M12 6L8 8.5v3c0 2.67 1.67 5.16 4 6 2.33-.84 4-3.33 4-6v-3L12 6z" />
    </svg>
  `,
};
</script>




