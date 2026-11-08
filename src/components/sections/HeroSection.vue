<template>
  <section
    aria-labelledby="hero-heading"
    class="relative z-10 -mt-6 bg-panel px-5 pt-5 pb-8 sm:px-8 lg:mt-0 lg:flex lg:min-h-[calc(100svh-6rem)] lg:flex-col lg:pb-10"
  >
    <MinuteBand v-if="featured" :recipe="featured" is-on-panel class="reveal" />
    <p v-else-if="error" class="text-small text-muted">
      Today's recipe could not be loaded.
    </p>
    <Skeleton v-else height="3.5rem" border-radius="0" />
    <p v-if="featured" class="reveal mt-3 text-small text-muted" style="--i: 1">
      Today: {{ featured.name }}, {{ featured.prepTimeMinutes }} min prep and
      {{ featured.cookTimeMinutes }} min cooking.
    </p>

    <div class="flex flex-1 flex-col justify-center py-12 lg:py-16">
      <h1 id="hero-heading" class="reveal text-head" style="--i: 2">
        Recipes, timed to the minute
      </h1>
      <p class="reveal mt-8 max-w-[40ch] text-lead" style="--i: 3">
        {{ dishCount }} from around the world, each with its prep and cook time
        drawn as five-minute bars. Say how long you have; the book keeps what
        fits.
      </p>
      <div class="reveal mt-10" style="--i: 4">
        <a href="#recipes" class="btn">Find a recipe that fits</a>
      </div>
    </div>

    <nav aria-label="On this page" class="text-small">
      <ul class="flex flex-wrap gap-x-6 gap-y-2">
        <li><a href="#recipes" class="link">The list</a></li>
        <li v-if="isLoading || featured">
          <a href="#todays-plate" class="link">Today's plate</a>
        </li>
        <li><a href="#questions" class="link">Questions</a></li>
      </ul>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Skeleton from 'primevue/skeleton';
import MinuteBand from '../recipes/MinuteBand.vue';
import type { Recipe } from '../../utils/recipeUtils';

const props = defineProps<{
  featured?: Recipe | null;
  error?: Error | null;
  isLoading?: boolean;
  count?: number;
}>();

const dishCount = computed(() =>
  props.count ? `${props.count} dishes` : 'Dishes'
);
</script>
