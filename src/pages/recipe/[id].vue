<template>
  <div v-if="isLoading" class="grid gap-3 px-3 lg:grid-cols-2" aria-busy="true">
    <Skeleton class="h-[48svh] lg:h-[calc(100svh-1.5rem)]" border-radius="0" />
    <div class="space-y-6 px-1 py-8 sm:px-6">
      <span class="sr-only" role="status">Loading the recipe…</span>
      <Skeleton width="70%" height="3.5rem" />
      <Skeleton height="3.5rem" />
      <Skeleton height="12rem" />
    </div>
  </div>

  <RecipeStatus
    v-else-if="queryError"
    title="Something went wrong"
    message="We couldn't load this recipe. Please try again in a moment."
  />

  <article
    v-else-if="recipe"
    class="grid gap-3 px-3 lg:grid-cols-2 lg:items-start"
    aria-labelledby="recipe-heading"
  >
    <img
      :src="getRecipeImageUrl(recipe)"
      :alt="recipe.name"
      width="1024"
      height="1024"
      class="h-[48svh] w-full object-cover lg:sticky lg:top-3 lg:h-[calc(100svh-1.5rem)]"
    />

    <div class="min-w-0 px-1 pt-6 sm:px-6 lg:px-10 lg:pt-4">
      <button type="button" class="link text-small" @click="handleBack">
        <i class="pi pi-arrow-left mr-2 text-xs" aria-hidden="true" />Back to
        the recipes
      </button>

      <h1 id="recipe-heading" class="reveal mt-10 text-head">
        {{ recipe.name }}
      </h1>
      <p class="reveal mt-4 text-lead text-muted" style="--i: 1">
        {{
          [recipe.cuisine, recipe.difficulty, ...(recipe.mealType ?? [])]
            .filter(Boolean)
            .join(' · ')
        }}
      </p>

      <MinuteBand :recipe="recipe" class="reveal mt-10" style="--i: 2" />
      <p class="mt-3 text-small text-muted">
        One bar is five minutes: ink for prep, brass for cooking.
      </p>

      <RecipeFacts :recipe="recipe" class="mt-10" />

      <section class="mt-20" aria-labelledby="ingredients-heading">
        <h2
          id="ingredients-heading"
          class="text-[clamp(1.75rem,1.4rem+1.5vw,2.5rem)]"
        >
          Ingredients
        </h2>
        <ul class="mt-6 space-y-2">
          <li
            v-for="ingredient in recipe.ingredients"
            :key="ingredient"
            class="flex gap-3"
          >
            <span
              class="mt-[0.6em] size-2 shrink-0 bg-cook"
              aria-hidden="true"
            />
            <span>{{ ingredient }}</span>
          </li>
        </ul>
      </section>

      <section class="mt-20" aria-labelledby="method-heading">
        <h2
          id="method-heading"
          class="text-[clamp(1.75rem,1.4rem+1.5vw,2.5rem)]"
        >
          Method
        </h2>
        <ol class="mt-6 list-decimal space-y-4 pl-6 marker:text-muted">
          <li v-for="step in steps" :key="step" class="pl-2 leading-relaxed">
            {{ step }}
          </li>
        </ol>
      </section>

      <p v-if="recipe.tags?.length" class="mt-16 text-small text-muted">
        Filed under {{ recipe.tags.join(', ') }}
      </p>
    </div>
  </article>

  <RecipeStatus
    v-else
    title="Recipe not found"
    message="The recipe you're looking for isn't in the book."
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useQueryClient } from '@tanstack/vue-query';
import Skeleton from 'primevue/skeleton';
import { useRecipe } from '../../composables/useRecipes';
import { usePageTitle } from '../../composables/usePageTitle';
import MinuteBand from '../../components/recipes/MinuteBand.vue';
import RecipeFacts from '../../components/recipes/RecipeFacts.vue';
import RecipeStatus from '../../components/recipes/RecipeStatus.vue';
import { getRecipeImageUrl, type Recipe } from '../../utils/recipeUtils';

const route = useRoute();
const router = useRouter();
const queryClient = useQueryClient();
const recipeId = computed(() => route.params.id as string);

// Use cached "recipes" list as initialData when available
const getCachedRecipe = (): Recipe | undefined =>
  queryClient
    .getQueryData<{ recipes: Recipe[] }>(['recipes'])
    ?.recipes?.find((item) => String(item.id) === String(recipeId.value));

const {
  recipe,
  isLoading,
  error: queryError,
} = useRecipe(recipeId, { initialData: getCachedRecipe });

const steps = computed(() => {
  const instructions = recipe.value?.instructions;
  if (Array.isArray(instructions)) return instructions;
  return instructions ? [instructions] : [];
});

usePageTitle(() => recipe.value?.name ?? 'Recipe');

// Go back when the visitor came from inside the site, otherwise go home.
const handleBack = () => {
  if (window.history.state?.back) {
    router.back();
    return;
  }
  router.push('/');
};
</script>
