<template>
  <div class="text-2xl text-red-600">
    <h1 class="pb-5 text-3xl text-red-500">Blog page</h1>
    <p class="pb-5">/composables/counter: {{ something }}</p>
    <p class="pb-5">/composables/useSomething: someA = {{ someA }}, someB = {{ someB }}</p>
    <p class="pb-5">/composables/useSomething2: singA = {{ singA }}, singB = {{ singB }}</p>
    <p class="pb-5">/composables/useSomething3: stingA = {{ stingA }}, stingB = {{ stingB }}</p>
  </div>
</template>

<script setup>
const something = counter;
const { someA, someB } = useSomething();
const { singA, singB } = useSomething2();
const { stingA, stingB } = useSomething3();
</script>
