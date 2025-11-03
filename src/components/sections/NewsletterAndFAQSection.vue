<template>
  <section class="py-16 bg-gray-50">
    <div class="container px-4 mx-auto">
      <div class="grid max-w-5xl grid-cols-1 gap-12 mx-auto md:grid-cols-2">
        <NewsletterSection @subscribe="handleSubscribe" />
        <FAQSection />
      </div>
    </div>
  </section>
</template>

<script setup>
import NewsletterSection from "../layouts/NewsletterSection.vue";
import FAQSection from "../layouts/FAQSection.vue";

const emit = defineEmits(["subscribe"]);

const handleSubscribe = (email) => {
  emit("subscribe", email);
};
</script>




