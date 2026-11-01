<template>
  <div id="newsletter" class="grid gap-8 lg:grid-cols-12 lg:gap-8">
    <h2 class="text-head lg:col-span-4">One recipe a week</h2>
    <form
      class="flex flex-col gap-3 lg:col-span-8"
      novalidate
      @submit.prevent="handleSubscribe"
    >
      <label for="newsletter-email" class="text-lead">
        Your email address
      </label>
      <div class="flex flex-col gap-3 sm:flex-row">
        <InputText
          id="newsletter-email"
          v-model="email"
          type="email"
          autocomplete="email"
          :invalid="hasError"
          :aria-describedby="hasError ? 'newsletter-error' : undefined"
          class="min-h-12 flex-1"
        />
        <Button type="submit" label="Subscribe" size="large" />
      </div>
      <p id="newsletter-error" class="min-h-6 text-small" aria-live="polite">
        <template v-if="hasError"
          >Enter an email address like name@example.com.</template
        >
        <template v-else-if="isSubscribed"
          >Thank you, you are on the list.</template
        >
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const email = ref('');
const hasError = ref(false);
const isSubscribed = ref(false);

const emit = defineEmits<{
  subscribe: [email: string];
}>();

const handleSubscribe = () => {
  const value = email.value.trim();
  hasError.value = !EMAIL_PATTERN.test(value);
  isSubscribed.value = !hasError.value;
  if (hasError.value) return;
  emit('subscribe', value);
  email.value = '';
};
</script>
