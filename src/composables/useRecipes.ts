import { computed, type Ref } from "vue";
import { useQuery, type UseQueryOptions } from "@tanstack/vue-query";

const RECIPES_API_URL = "https://dummyjson.com/recipes";
const RECIPE_API_URL = "https://dummyjson.com/recipes";

// Re-export Recipe type from utils
export type { Recipe } from "../utils/recipeUtils";

interface RecipesResponse {
  recipes: Recipe[];
}

/**
 * Composable for fetching all recipes
 * Follows Single Responsibility Principle
 */
export function useRecipes() {
  const { data, isLoading, error } = useQuery<RecipesResponse, Error>({
    queryKey: ["recipes"],
    queryFn: async () => {
      const res = await fetch(RECIPES_API_URL);
      const data = await res.json();
      return data;
    },
  });

  const recipes = computed(() => {
    const result = data.value;
    return Array.isArray(result?.recipes) ? result.recipes : [];
  });

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
export function useRecipe(
  recipeId: Ref<string | number | undefined>,
  options?: Partial<UseQueryOptions<Recipe, Error>>
) {
  const { data, isLoading, error } = useQuery<Recipe, Error>({
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
