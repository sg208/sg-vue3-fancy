<template>
  <div class="grid gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:py-40">
    <div class="lg:col-span-5">
      <h1 class="reveal text-head">Blog</h1>
      <p class="reveal mt-8 max-w-[40ch] text-lead" style="--i: 1">
        Posts are on the way. Until then this page shows the template's
        composables, read straight from <code>src/composables/</code>.
      </p>
    </div>
    <dl class="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-7">
      <div v-for="entry in entries" :key="entry.source" class="bg-panel p-6">
        <dt class="text-small text-muted">
          <code>{{ entry.source }}</code>
        </dt>
        <dd class="mt-3 text-lead tabular-nums">{{ entry.value }}</dd>
      </div>
    </dl>
  </div>
</template>

<script setup lang="ts">
import counter from '../composables/counter';
import useSomething from '../composables/useSomething';
import useSomething2 from '../composables/useSomething2';
import useSomething3 from '../composables/useSomething3';
import { usePageTitle } from '../composables/usePageTitle';

usePageTitle('Blog');

const { someA, someB } = useSomething();
const { singA, singB } = useSomething2();
const { stingA, stingB } = useSomething3();

const entries = [
  { source: 'counter', value: String(counter) },
  {
    source: 'useSomething',
    value: `someA = ${someA.value}, someB = ${someB.value}`,
  },
  {
    source: 'useSomething2',
    value: `singA = ${singA.value}, singB = ${singB.value}`,
  },
  {
    source: 'useSomething3',
    value: `stingA = ${stingA.value}, stingB = ${stingB.value}`,
  },
];
</script>
