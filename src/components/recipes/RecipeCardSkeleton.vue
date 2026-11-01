<template>
  <div
    class="grid grid-cols-[3.5rem_1fr_auto] items-start gap-x-4 py-3 sm:grid-cols-[4.5rem_1fr_auto] sm:px-2"
    aria-hidden="true"
  >
    <Skeleton class="aspect-square" height="auto" />
    <div class="space-y-2">
      <Skeleton width="70%" height="1.25rem" />
      <Skeleton width="40%" height="0.875rem" />
    </div>
    <Skeleton width="3.5rem" height="0.875rem" />
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton';
</script>
