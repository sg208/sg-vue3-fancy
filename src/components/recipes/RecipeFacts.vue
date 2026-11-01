<template>
  <dl class="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
    <div v-for="fact in facts" :key="fact.label">
      <dt class="text-small text-muted">{{ fact.label }}</dt>
      <dd class="mt-1 text-lead tabular-nums">{{ fact.value }}</dd>
    </div>
  </dl>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getTotalMinutes, type Recipe } from '../../utils/recipeUtils';

const props = defineProps<{ recipe: Recipe }>();

const facts = computed(() =>
  [
    { label: 'Prep', value: `${props.recipe.prepTimeMinutes ?? 0} min` },
    { label: 'Cook', value: `${props.recipe.cookTimeMinutes ?? 0} min` },
    { label: 'Total', value: `${getTotalMinutes(props.recipe)} min` },
    { label: 'Serves', value: props.recipe.servings },
    {
      label: 'Per serving',
      value: props.recipe.caloriesPerServing
        ? `${props.recipe.caloriesPerServing} kcal`
        : undefined,
    },
    {
      label: 'Rating',
      value: props.recipe.rating
        ? `${props.recipe.rating} of 5 (${props.recipe.reviewCount ?? 0})`
        : undefined,
    },
  ].filter((fact) => fact.value !== undefined && fact.value !== null)
);
</script>
