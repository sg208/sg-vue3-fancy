<template>
  <section
    id="recipes"
    aria-labelledby="recipes-heading"
    class="scroll-mt-4 px-1 pt-24 sm:px-3 lg:pt-32"
  >
    <h2 id="recipes-heading" class="text-head">Choose by the clock</h2>
    <p class="mt-6 max-w-[44ch]">
      Every recipe in the book, quickest first. Hover or focus a row to see it
      beside the list.
    </p>

    <TimeFilter v-model="maxMinutes" class="mt-10" />
    <p class="mt-6 text-small text-muted" aria-live="polite">
      {{ summary }}
    </p>

    <ul v-if="loading" class="mt-4" aria-hidden="true">
      <li v-for="n in 6" :key="n"><RecipeCardSkeleton /></li>
    </ul>

    <ul v-else-if="visibleRecipes.length" ref="listRef" class="mt-4">
      <li
        v-for="(recipe, i) in visibleRecipes"
        :key="recipe.id"
        class="reveal"
        :style="{ '--i': Math.min(i, 8) }"
      >
        <RecipeCard :recipe="recipe" @highlight="emit('highlight', $event)" />
      </li>
    </ul>

    <p v-else class="mt-8 text-lead">
      Nothing in the book is that quick. Try 30 minutes.
    </p>

    <button
      v-if="hiddenCount > 0"
      type="button"
      class="btn btn-quiet mt-8 w-full"
      @click="handleShowAll"
    >
      Show {{ hiddenCount }} more
    </button>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import RecipeCard from '../recipes/RecipeCard.vue';
import RecipeCardSkeleton from '../recipes/RecipeCardSkeleton.vue';
import TimeFilter from '../recipes/TimeFilter.vue';
import { filterByMinutes, type Recipe } from '../../utils/recipeUtils';

const props = defineProps<{
  recipes?: Recipe[];
  loading?: boolean;
}>();

const emit = defineEmits<{ highlight: [recipe: Recipe] }>();

const INITIAL_ROWS = 12;
const maxMinutes = ref(0);
const isShowingAll = ref(false);
const listRef = ref<HTMLUListElement | null>(null);

const matchingRecipes = computed(() =>
  filterByMinutes(props.recipes ?? [], maxMinutes.value || null)
);
const visibleRecipes = computed(() =>
  isShowingAll.value
    ? matchingRecipes.value
    : matchingRecipes.value.slice(0, INITIAL_ROWS)
);
const hiddenCount = computed(
  () => matchingRecipes.value.length - visibleRecipes.value.length
);
// The button disappears once clicked, so move focus to the first new row.
const handleShowAll = async () => {
  isShowingAll.value = true;
  await nextTick();
  listRef.value?.querySelectorAll('a')[INITIAL_ROWS]?.focus();
};
const summary = computed(() => {
  if (props.loading) return 'Loading the book…';
  const count = matchingRecipes.value.length;
  const noun = count === 1 ? 'recipe' : 'recipes';
  return maxMinutes.value
    ? `${count} ${noun} ready in ${maxMinutes.value} minutes or less.`
    : `${count} ${noun}, quickest first.`;
});
</script>
