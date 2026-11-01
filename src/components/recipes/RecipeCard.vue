<template>
  <router-link
    :to="`/recipe/${recipe.id}`"
    class="group grid grid-cols-[3.5rem_1fr_auto] items-start gap-x-4 py-3 transition-colors hover:bg-panel/60 sm:grid-cols-[4.5rem_1fr_auto] sm:px-2"
    @pointerenter="emit('highlight', recipe)"
    @focus="emit('highlight', recipe)"
  >
    <img
      :src="imageUrl"
      alt=""
      width="72"
      height="72"
      loading="lazy"
      class="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
    />
    <div class="min-w-0">
      <h3
        class="text-lead leading-tight group-hover:underline decoration-brass decoration-2 underline-offset-4"
      >
        {{ recipe.name }}
      </h3>
      <div class="mt-1 text-small text-muted">
        <span>{{ recipe.cuisine }}</span>
        <span aria-hidden="true"> · </span>
        <span>{{ recipe.difficulty }}</span>
      </div>
      <p class="mt-1 line-clamp-1 text-muted max-sm:hidden">
        {{ preview }}
      </p>
    </div>
    <div class="flex flex-col items-end gap-2 pt-1 text-right">
      <span class="text-small tabular-nums whitespace-nowrap">
        {{ totalMinutes }} mins
      </span>
      <MinuteBand :recipe="recipe" is-compact class="max-sm:hidden" />
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import MinuteBand from './MinuteBand.vue';
import {
  getRecipeImageUrl,
  getTotalMinutes,
  previewText,
  type Recipe,
} from '../../utils/recipeUtils';

const props = withDefaults(
  defineProps<{
    recipe: Recipe;
    previewLength?: number;
  }>(),
  {
    previewLength: 100,
  }
);

const emit = defineEmits<{ highlight: [recipe: Recipe] }>();

const imageUrl = computed(() => getRecipeImageUrl(props.recipe));
const totalMinutes = computed(() => getTotalMinutes(props.recipe));
const preview = computed(() =>
  previewText(props.recipe.instructions, props.previewLength)
);
</script>
