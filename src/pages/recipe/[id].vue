<template>
  <div class="min-h-screen bg-white text-gray-900">
    <!-- Recipe Detail Section -->
    <section class="container mx-auto px-4 py-16 max-w-4xl">
      <div v-if="loading" class="space-y-8">
        <div class="h-96 bg-gray-200 rounded-3xl animate-pulse"></div>
        <div class="space-y-4">
          <div class="h-8 bg-gray-200 rounded w-2/3 animate-pulse"></div>
          <div class="h-32 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      <div v-else-if="recipe" class="space-y-8">
        <!-- Back Button -->
        <button
          class="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors mb-4"
          @click="$router.back()"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span class="font-medium">Back to Recipes</span>
        </button>

        <!-- Recipe Image -->
        <img
          :src="imageFor(recipe)"
          :alt="recipe.name"
          class="w-full h-96 object-cover rounded-3xl shadow-lg"
        />

        <!-- Recipe Title -->
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

          <!-- Instructions -->
          <div class="prose prose-lg max-w-none text-left bg-gray-50 p-8 rounded-2xl mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Instructions</h3>
            <p class="text-gray-700 leading-relaxed">{{ formatInstructions(recipe.instructions) }}</p>
          </div>

          <!-- Ingredients -->
          <div class="bg-white border-2 border-gray-100 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 text-left">Ingredients</h3>
            <ul class="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              <li
                v-for="ingredient in recipe.ingredients"
                :key="ingredient"
                class="flex items-start gap-3"
              >
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
                <span class="text-gray-700">{{ ingredient }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Recipe Not Found</h2>
        <p class="text-gray-600 mb-6">The recipe you're looking for doesn't exist.</p>
        <router-link
          to="/"
          class="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useQuery, useQueryClient } from "@tanstack/vue-query";
import type { Recipe } from "../../utils/recipeUtils";

const route = useRoute();
const queryClient = useQueryClient();
const recipeId = computed(() => route.params.id as string);

// Try to get recipe from cached "recipes" query first
const getCachedRecipe = (): Recipe | undefined => {
  const cachedData = queryClient.getQueryData<{ recipes: Recipe[] }>(["recipes"]);
  if (cachedData && Array.isArray(cachedData.recipes)) {
    const found = cachedData.recipes.find((r) => String(r.id) === String(recipeId.value));
    return found || undefined;
  }
  return undefined;
};

const { data: recipe, isLoading: loading } = useQuery<Recipe, Error>({
  queryKey: ["recipe", recipeId],
  queryFn: async () => {
    const res = await fetch(`https://dummyjson.com/recipes/${recipeId.value}`);
    if (!res.ok) throw new Error("Failed to fetch recipe");
    return await res.json();
  },
  initialData: getCachedRecipe,
  enabled: computed(() => !!recipeId.value),
});

function imageFor(r: Recipe | null | undefined): string {
  if (r && r.image) return r.image;
  const q = encodeURIComponent(r?.name || "food");
  return `https://source.unsplash.com/800x600/?${q}`;
}

function formatInstructions(instructions: string | string[] | null | undefined): string {
  if (Array.isArray(instructions)) {
    return instructions.join(" ");
  }
  return String(instructions || "");
}
</script>

