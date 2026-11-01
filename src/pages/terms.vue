<template>
  <LegalPage title="Terms" updated="2026-11-01">
    <h2>What this is</h2>
    <p>
      The Minute Book is a demo and portfolio project. It shows how a Vue 3,
      PrimeVue and Tailwind app can be put together. It is not a commercial
      service and has no user accounts.
    </p>

    <h2>No warranty</h2>
    <p>
      The site and its content are provided as they are, without warranty of any
      kind. Recipes, times and photos come from a public demo API and may be
      incomplete or wrong, so use your own judgement in the kitchen. The site
      may change or go offline at any time.
    </p>

    <h2>Code and content</h2>
    <p>
      The source code is released under the
      <a
        class="link"
        href="https://github.com/sg208/sg-vue3-fancy/blob/main/LICENSE"
      >
        MIT License</a
      >. You may reuse it under those terms.
    </p>
    <p>
      Recipe text and photos come from DummyJSON, and the Boska typeface from
      Fontshare. They belong to their owners and are not covered by this
      project's license.
    </p>

    <h2>Privacy</h2>
    <p>
      How the site handles data is described on the
      <router-link class="link" to="/privacy-policy">privacy page</router-link>.
    </p>

    <h2>Questions</h2>
    <p>
      Open an issue on the
      <a class="link" href="https://github.com/sg208/sg-vue3-fancy/issues"
        >GitHub repository</a
      >.
    </p>
  </LegalPage>
</template>

<script setup lang="ts">
import LegalPage from '../components/layouts/LegalPage.vue';
</script>
