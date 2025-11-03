<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  msg: string;
}>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>This is just example of Hello World auto importing</p>
  <sg208-button>Hello hello again from component</sg208-button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
