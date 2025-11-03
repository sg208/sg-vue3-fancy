<template>
  <nav class="bg-white border-b border-gray-100">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <Logo />
      <SubmitRecipeButton />
    </div>
  </nav>
</template>

<script setup>
import Logo from "./Nav/Logo.vue";
import SubmitRecipeButton from "./Nav/SubmitRecipeButton.vue";
</script>
