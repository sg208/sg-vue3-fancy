<template>
  <figure
    class="relative m-0 flex h-[48svh] flex-col overflow-hidden bg-panel lg:sticky lg:top-3 lg:h-[calc(100svh-1.5rem)]"
  >
    <div class="relative min-h-0 flex-1">
      <Transition name="crossfade">
        <img
          v-if="recipe"
          :key="recipe.id"
          :src="getRecipeImageUrl(recipe)"
          alt=""
          width="1024"
          height="1024"
          fetchpriority="high"
          class="absolute inset-0 size-full object-cover"
        />
      </Transition>
      <Skeleton v-if="!recipe" height="100%" border-radius="0" />
    </div>
    <figcaption
      v-if="recipe"
      class="flex items-baseline justify-between gap-4 bg-panel px-4 py-3 text-small"
    >
      <span class="truncate">{{ recipe.name }}</span>
      <span class="whitespace-nowrap tabular-nums text-muted">
        {{ recipe.prepTimeMinutes }} prep · {{ recipe.cookTimeMinutes }} cook
      </span>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton';
import { getRecipeImageUrl, type Recipe } from '../../utils/recipeUtils';

defineProps<{ recipe?: Recipe | null }>();
</script>

<style scoped>
.crossfade-enter-active,
.crossfade-leave-active {
  transition: opacity 0.9s ease;
}
.crossfade-enter-from,
.crossfade-leave-to {
  opacity: 0;
}
</style>
