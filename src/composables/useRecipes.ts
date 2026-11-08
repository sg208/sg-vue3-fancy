import { computed, type Ref } from 'vue';
import { useQuery, type UseQueryOptions } from '@tanstack/vue-query';
import type { Recipe } from '../utils/recipeUtils';

const RECIPES_API_URL = 'https://dummyjson.com/recipes';

export type { Recipe };

interface RecipesResponse {
  recipes: Recipe[];
}

export const fetchRecipes = async (): Promise<RecipesResponse> => {
  const response = await fetch(RECIPES_API_URL);
  if (!response.ok) {
    throw new Error(`Recipes request failed: ${response.status}`);
  }
  return response.json();
};

export const useRecipes = () => {
  const { data, isLoading, error } = useQuery<RecipesResponse, Error>({
    queryKey: ['recipes'],
    queryFn: fetchRecipes,
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
    queryFn: async () => {
      const response = await fetch(`${RECIPES_API_URL}/${recipeId.value}`);
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
