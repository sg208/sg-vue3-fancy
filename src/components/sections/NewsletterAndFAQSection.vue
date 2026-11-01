<template>
  <section
    id="questions"
    aria-labelledby="questions-heading"
    class="field-ink scroll-mt-4 px-4 py-24 sm:px-6 lg:py-40"
  >
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
      <h2 id="questions-heading" class="text-head lg:col-span-4">
        Questions, answered
      </h2>
      <FAQSection class="lg:col-span-8" />
    </div>
    <NewsletterSection class="mt-24 lg:mt-32" />
  </section>
</template>

<script setup lang="ts">
import NewsletterSection from '../layouts/NewsletterSection.vue';
import FAQSection from '../layouts/FAQSection.vue';
</script>
