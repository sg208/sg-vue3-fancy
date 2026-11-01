<template>
  <footer class="px-4 pt-24 pb-8 text-small sm:px-6 md:pt-40">
    <div
      class="flex flex-col gap-2 md:grid md:grid-cols-[1fr_auto_1fr] md:items-baseline md:gap-6"
    >
      <p class="text-muted">The Minute Book, a Vue 3 recipe demo</p>
      <NavLinks />
      <Copyright class="md:justify-self-end" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import NavLinks from './Footer/NavLinks.vue';
import Copyright from './Footer/Copyright.vue';
</script>
