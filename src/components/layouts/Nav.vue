<template>
  <header class="px-4 sm:px-6">
    <nav
      aria-label="Main"
      class="flex flex-wrap items-center gap-x-6 gap-y-2 py-4"
    >
      <router-link
        to="/"
        class="mr-auto flex items-center gap-3 text-xl tracking-tight"
      >
        <BrandMark />
        <span>The Minute Book</span>
      </router-link>

      <ThemeToggle class="sm:order-last" />

      <ul
        class="order-last flex w-full flex-wrap items-center gap-x-5 gap-y-1 text-small sm:order-none sm:w-auto"
      >
        <li v-for="item in links" :key="item.to">
          <router-link
            :to="item.to"
            class="inline-block py-2 underline-offset-[0.25em] decoration-brass decoration-2 hover:underline aria-[current=page]:underline"
          >
            {{ item.label }}
          </router-link>
        </li>
        <li>
          <router-link
            to="/submit-new-recipe"
            class="btn min-h-10 px-4 py-2 text-small"
          >
            Submit a recipe
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import BrandMark from './BrandMark.vue';
import ThemeToggle from './ThemeToggle.vue';

const links = [
  { to: '/', label: 'Recipes' },
  { to: '/features', label: 'Features' },
  { to: '/blog', label: 'Blog' },
];
</script>
