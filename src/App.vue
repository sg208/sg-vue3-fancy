<script setup lang="ts">
import { nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import Nav from './components/layouts/Nav.vue';
import Footer from './components/layouts/Footer.vue';

const isDev = import.meta.env.DEV;
const router = useRouter();

// Move focus to the new page's heading after client-side navigation, so
// keyboard and screen-reader users start at the top of what changed.
router.afterEach(async (to, from) => {
  if (!from.matched.length || to.path === from.path) return;
  await nextTick();
  const target =
    document.querySelector<HTMLElement>('main h1') ??
    document.querySelector<HTMLElement>('#main');
  if (!target) return;
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
});
</script>

<template>
  <a
    href="#main"
    class="fixed left-3 top-3 z-50 -translate-y-24 bg-ink px-4 py-3 text-paper focus:translate-y-0"
  >
    Skip to content
  </a>
  <div class="flex min-h-svh flex-col bg-paper text-ink">
    <Nav />
    <main id="main" tabindex="-1" class="flex-1 outline-none">
      <router-view />
    </main>
    <Footer />
  </div>
  <VueQueryDevtools v-if="isDev" />
</template>

<style>
main h1:focus {
  outline: none;
}
</style>
