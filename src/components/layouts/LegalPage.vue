<template>
  <article
    class="grid gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:py-40"
    aria-labelledby="legal-heading"
  >
    <header class="lg:col-span-5">
      <h1 id="legal-heading" class="reveal text-head">{{ title }}</h1>
      <p class="reveal mt-8 text-small text-muted" style="--i: 1">
        Last updated <time :datetime="updated">{{ updatedLabel }}</time>
      </p>
    </header>
    <div
      class="reveal max-w-[62ch] lg:col-span-7 [&_h2]:mt-12 [&_h2]:text-lead [&_h2:first-child]:mt-0 [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6"
      style="--i: 2"
    >
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePageTitle } from '../../composables/usePageTitle';

const props = defineProps<{ title: string; updated: string }>();

const updatedLabel = computed(() =>
  new Date(props.updated).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
);

usePageTitle(() => props.title);
</script>
