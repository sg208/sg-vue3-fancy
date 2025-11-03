<template>
  <div>
    <h3 class="mb-6 text-xl font-bold text-gray-900">
      Got questions? Check out our<br />frequently asked questions.
    </h3>
    <div class="space-y-4">
      <button
        class="flex items-center justify-between w-full py-3 text-left text-gray-700 transition-colors border-b border-gray-200 hover:text-orange-500"
        @click="toggleQuestion(0)"
      >
        <span>How do I submit a recipe?</span>
        <ChevronRightIcon />
      </button>
      <button
        class="flex items-center justify-between w-full py-3 text-left text-gray-700 transition-colors border-b border-gray-200 hover:text-orange-500"
        @click="toggleQuestion(1)"
      >
        <span>Can I save my favorite recipes?</span>
        <ChevronRightIcon />
      </button>
      <button
        class="flex items-center justify-between w-full py-3 text-left text-gray-700 transition-colors border-b border-gray-200 hover:text-orange-500"
        @click="toggleQuestion(2)"
      >
        <span>Are the recipes beginner-friendly?</span>
        <ChevronRightIcon />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const ChevronRightIcon = {
  template: `
    <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  `,
};

const openQuestion = ref<number | null>(null);

const toggleQuestion = (index: number) => {
  openQuestion.value = openQuestion.value === index ? null : index;
  // TODO: Implement accordion behavior
};
</script>




