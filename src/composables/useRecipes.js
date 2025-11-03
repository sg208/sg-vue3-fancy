import { computed } from "vue";
import { useQuery } from "@tanstack/vue-query";

const RECIPES_API_URL = "https://dummyjson.com/recipes";
const RECIPE_API_URL = "https://dummyjson.com/recipes";

/**
 * Composable for fetching all recipes
 * Follows Single Responsibility Principle
 */
export function useRecipes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      const res = await fetch(RECIPES_API_URL);
      const data = await res.json();
      return Array.isArray(data?.recipes) ? data.recipes : [];
    },
  });

  const recipes = computed(() => data.value || []);

  return {
    recipes,
    isLoading,
    error,
  };
}

/**
 * Composable for fetching a single recipe by ID
 * Follows Single Responsibility Principle
 */
export function useRecipe(recipeId, options = {}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: async () => {
      const res = await fetch(`${RECIPE_API_URL}/${recipeId.value}`);
      if (!res.ok) throw new Error("Failed to fetch recipe");
      return await res.json();
    },
    enabled: computed(() => !!recipeId.value),
    ...options,
  });

  return {
    recipe: computed(() => data.value),
    isLoading,
    error,
  };
}

