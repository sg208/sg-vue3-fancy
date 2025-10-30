<template>
  <nav class="bg-white border-b border-gray-100">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2">
        <svg class="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-1-7-5.55-7-10V8.3l7-3.5 7 3.5V10c0 4.45-3.14 9-7 10z"
          />
          <path d="M12 6L8 8.5v3c0 2.67 1.67 5.16 4 6 2.33-.84 4-3.33 4-6v-3L12 6z" />
        </svg>
        <span class="text-xl font-bold text-gray-900">RecipeHub</span>
      </router-link>

      <!-- Navigation Links -->
      <div class="flex items-center space-x-8">
        <router-link
          v-for="headerItem in headers"
          :key="headerItem.name"
          :to="headerItem.path"
          class="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          active-class="text-gray-900"
        >
          {{ headerItem.name }}
        </router-link>
      </div>

      <!-- Submit Recipe Button -->
      <router-link
        to="/contact"
        class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
      >
        Submit Recipe
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useNavigationStore } from "../../store/navigations";

const { header: headers } = storeToRefs(useNavigationStore());
</script>
