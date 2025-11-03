<template>
  <div>
    <h2 class="mb-2 text-3xl font-bold text-gray-900">Ready to cook</h2>
    <h2 class="mb-4 font-serif text-3xl italic font-bold text-gray-900">delicious</h2>
    <h2 class="mb-6 text-3xl font-bold text-gray-900">meals?</h2>
    <p class="mb-6 text-gray-600">
      Subscribe to our newsletter and get weekly recipe inspiration delivered to your inbox.
    </p>
    <div class="flex gap-2">
      <input
        v-model="email"
        type="email"
        placeholder="Enter your email"
        class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button
        class="px-6 py-3 font-semibold text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600 whitespace-nowrap"
        @click="handleSubscribe"
      >
        Subscribe
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const emit = defineEmits<{
  subscribe: [email: string];
}>();

const handleSubscribe = () => {
  if (email.value) {
    emit("subscribe", email.value);
    email.value = "";
  }
};
</script>




