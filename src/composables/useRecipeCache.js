import { computed } from "vue";
import { useQueryClient } from "@tanstack/vue-query";

/**
 * Composable for caching and retrieving recipe data
 * Follows Single Responsibility Principle
 */
export function useRecipeCache() {
  const queryClient = useQueryClient();

  /**
   * Get a recipe from cache by ID
   * @param {string|number} recipeId - The recipe ID
   * @returns {Object|undefined} The cached recipe or undefined
   */
  const getCachedRecipe = (recipeId) => {
    const cachedRecipes = queryClient.getQueryData(["recipes"]);
    if (Array.isArray(cachedRecipes)) {
      return cachedRecipes.find((r) => String(r.id) === String(recipeId));
    }
    return undefined;
  };

  /**
   * Set initial data for a recipe query using cache
   * @param {import('vue').ComputedRef} recipeId - The recipe ID ref
   * @returns {Function} Initial data function
   */
  const createInitialDataGetter = (recipeId) => {
    return () => getCachedRecipe(recipeId.value);
  };

  return {
    getCachedRecipe,
    createInitialDataGetter,
  };
}




