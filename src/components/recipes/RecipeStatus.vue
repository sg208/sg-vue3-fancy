<template>
  <div class="px-4 py-24 sm:px-6 lg:py-40">
    <h1 class="text-head">{{ title }}</h1>
    <p class="mt-6 max-w-[44ch] text-lead">{{ message }}</p>
    <router-link to="/" class="btn mt-10">Back to the recipes</router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; message: string }>();
</script>
