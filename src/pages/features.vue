<template>
  <div class="grid gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:py-40">
    <div class="lg:col-span-5">
      <h1 class="reveal text-head">Features</h1>
      <p class="reveal mt-8 max-w-[40ch] text-lead" style="--i: 1">
        What the template ships with, shown in a PrimeVue card that takes its
        look from the same design tokens as the rest of the site.
      </p>
    </div>
    <div class="lg:col-span-7">
      <AdvancedCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import AdvancedCard from '../components/AdvancedCard.vue';
import { usePageTitle } from '../composables/usePageTitle';

usePageTitle('Features');
</script>
