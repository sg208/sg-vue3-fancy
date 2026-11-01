<template>
  <div class="grid gap-8 lg:grid-cols-2 lg:gap-16" aria-hidden="true">
    <Skeleton class="aspect-square" height="auto" border-radius="0" />
    <div class="space-y-6 lg:py-4">
      <Skeleton width="80%" height="3.5rem" />
      <Skeleton width="60%" height="1.5rem" />
      <Skeleton height="10rem" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton';
</script>
