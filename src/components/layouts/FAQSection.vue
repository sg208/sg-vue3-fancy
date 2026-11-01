<template>
  <div class="gap-14 lg:columns-2">
    <p
      v-for="item in questions"
      :key="item.question"
      class="mb-6 break-inside-avoid leading-relaxed"
    >
      <strong class="font-medium">{{ item.question }}</strong>
      {{ item.answer }}
    </p>
  </div>
</template>

<script setup lang="ts">
const questions = [
  {
    question: 'How do I submit a recipe?',
    answer:
      'Submissions open soon. The Submit a recipe link in the header will take you to the form once it is ready.',
  },
  {
    question: 'Can I save my favourite recipes?',
    answer:
      'Not yet. Every recipe has its own address, so a browser bookmark keeps it for now.',
  },
  {
    question: 'Are the recipes beginner-friendly?',
    answer:
      'Each one is marked Easy or Medium, and most of the book is Easy. Start with anything under 30 minutes.',
  },
  {
    question: 'What do the bars mean?',
    answer:
      'One bar is five minutes. Ink bars are preparation, brass bars are cooking, so the length of the stripe is the length of the job.',
  },
  {
    question: 'Where do the recipes come from?',
    answer:
      'From the public DummyJSON recipe collection. Times, servings and ingredients are shown as the source lists them.',
  },
  {
    question: 'Is there a dark version?',
    answer:
      'Yes. It follows your device setting, and the sun and moon button in the header switches it by hand.',
  },
];
</script>
