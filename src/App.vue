<script setup lang="ts">
import Nav from "./components/layouts/Nav.vue";
import Footer from "./components/layouts/Footer.vue";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";

const isDev = import.meta.env.DEV;
</script>

<template>
  <div class="min-h-screen bg-white">
    <Nav />
    <main>
      <router-view />
    </main>
    <Footer />
    <VueQueryDevtools v-if="isDev" />
  </div>
</template>

<style>
#app {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
