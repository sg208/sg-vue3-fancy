<template>
  <div class="grid gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:py-40">
    <div class="lg:col-span-7">
      <h1 class="reveal text-head">{{ title }}</h1>
      <p class="reveal mt-8 max-w-[44ch] text-lead" style="--i: 1">
        <slot>This page is still being written. Check back soon.</slot>
      </p>
      <router-link to="/" class="reveal btn mt-10" style="--i: 2">
        Back to the recipes
      </router-link>
    </div>
    <div class="flex items-end lg:col-span-5" aria-hidden="true">
      <div class="flex h-24 w-full gap-1.5 md:h-40">
        <span
          v-for="n in 12"
          :key="n"
          class="flex-1"
          :class="n > 8 ? 'bg-cook' : 'bg-panel'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageTitle } from '../../composables/usePageTitle';

const props = defineProps<{ title: string; pageTitle?: string }>();

usePageTitle(() => props.pageTitle ?? props.title);
</script>
