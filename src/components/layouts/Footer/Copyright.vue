<template>
  <p class="flex flex-wrap gap-x-6 text-muted">
    <span>© {{ year }} Syailendra Ginting</span>
    <a
      href="https://github.com/sg208/sg-vue3-fancy"
      class="link"
      rel="noopener"
    >
      Source on GitHub
    </a>
  </p>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
