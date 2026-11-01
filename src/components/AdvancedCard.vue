<template>
  <Card class="overflow-hidden">
    <template #header>
      <img
        v-if="image"
        :src="image"
        alt=""
        width="1024"
        height="1024"
        loading="lazy"
        class="aspect-[16/9] w-full object-cover"
      />
      <Skeleton v-else class="aspect-[16/9]" height="auto" border-radius="0" />
    </template>

    <template #title>
      <h2 class="text-[clamp(1.75rem,1.4rem+1.5vw,2.5rem)]">The stack</h2>
    </template>

    <template #subtitle>
      <span>Vue 3, Vite and a handful of quiet helpers</span>
    </template>

    <template #content>
      <ul class="mt-2 space-y-3">
        <li v-for="item in stack" :key="item.name">
          <span class="font-medium">{{ item.name }}</span>
          <span class="text-muted">: {{ item.note }}</span>
        </li>
      </ul>
    </template>

    <template #footer>
      <div class="pt-2">
        <Button
          :as="RouterLink"
          to="/"
          label="Browse the recipes"
          size="large"
        />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Skeleton from 'primevue/skeleton';
import { useRecipes } from '../composables/useRecipes';

const { recipes } = useRecipes();
const image = computed(() => recipes.value[0]?.image);

const stack = [
  { name: 'File-based routing', note: 'every file in src/pages is a route' },
  {
    name: 'Auto imports',
    note: 'components and composables without import lines',
  },
  {
    name: 'TanStack Vue Query',
    note: 'five-minute cache, detail pages read from the list',
  },
  { name: 'PrimeVue', note: 'themed through a design-token preset' },
  { name: 'Tailwind CSS 4', note: 'tokens shared with the preset' },
];
</script>
