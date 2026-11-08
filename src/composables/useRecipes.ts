import { computed, type Ref } from 'vue';
import { useQuery, type UseQueryOptions } from '@tanstack/vue-query';
import type { Recipe } from '../utils/recipeUtils';

const RECIPES_API_URL = 'https://dummyjson.com/recipes';
const REQUEST_TIMEOUT_MS = 10_000;

// A stalled connection must reject so the error state can show.
const withTimeout = (signal?: AbortSignal): AbortSignal => {
  const timeoutSignal = AbortSignal.timeout(REQUEST_TIMEOUT_MS);
  return signal ? AbortSignal.any([signal, timeoutSignal]) : timeoutSignal;
};

export type { Recipe };

interface RecipesResponse {
  recipes: Recipe[];
}

export const fetchRecipes = async (
  signal?: AbortSignal
): Promise<RecipesResponse> => {
  const response = await fetch(RECIPES_API_URL, {
    signal: withTimeout(signal),
  });
  if (!response.ok) {
    throw new Error(`Recipes request failed: ${response.status}`);
  }
  return response.json();
};

export const useRecipes = () => {
  const { data, isLoading, error } = useQuery<RecipesResponse, Error>({
    queryKey: ['recipes'],
    queryFn: ({ signal }) => fetchRecipes(signal),
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
};

export const useRecipe = (
  recipeId: Ref<string | number | undefined>,
  options?: Partial<UseQueryOptions<Recipe, Error>>
) => {
  const { data, isLoading, error } = useQuery<Recipe, Error>({
    queryKey: ['recipe', recipeId],
    queryFn: async ({ signal }) => {
      const response = await fetch(`${RECIPES_API_URL}/${recipeId.value}`, {
        signal: withTimeout(signal),
      });
      if (!response.ok) throw new Error('Failed to fetch recipe');
      return await response.json();
    },
    enabled: computed(() => !!recipeId.value),
    ...options,
  });

  return {
    recipe: computed(() => data.value),
    isLoading,
    error,
  };
};
