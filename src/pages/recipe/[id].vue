<template>
  <div class="min-h-screen bg-white text-gray-900">
    <section class="container mx-auto px-4 py-16 max-w-4xl">
      <RecipeDetailSkeleton v-if="loading" />

      <div v-else-if="recipe" class="space-y-8">
        <BackButton />
        <img :src="imageUrl" :alt="recipe.name" class="w-full h-96 object-cover rounded-3xl shadow-lg" />
        <RecipeHeader :recipe="recipe" />
        <RecipeInstructions :recipe="recipe" />
        <RecipeIngredients :recipe="recipe" />
      </div>

      <RecipeNotFound v-else />
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useRecipe } from "../../composables/useRecipes";
import { useRecipeCache } from "../../composables/useRecipeCache";
import { getRecipeImageUrl } from "../../utils/recipeUtils";
import BackButton from "../../components/recipes/RecipeDetail/BackButton.vue";
import RecipeHeader from "../../components/recipes/RecipeDetail/RecipeHeader.vue";
import RecipeInstructions from "../../components/recipes/RecipeDetail/RecipeInstructions.vue";
import RecipeIngredients from "../../components/recipes/RecipeDetail/RecipeIngredients.vue";
import RecipeDetailSkeleton from "../../components/recipes/RecipeDetail/RecipeDetailSkeleton.vue";
import RecipeNotFound from "../../components/recipes/RecipeDetail/RecipeNotFound.vue";

const route = useRoute();
const recipeId = computed(() => route.params.id);
const { getCachedRecipe } = useRecipeCache();

const { recipe, isLoading: loading } = useRecipe(recipeId, {
  initialData: () => getCachedRecipe(recipeId.value),
});

const imageUrl = computed(() => getRecipeImageUrl(recipe.value));
</script>

