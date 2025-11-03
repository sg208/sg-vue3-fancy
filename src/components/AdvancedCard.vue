<template>
  <Card class="rounded-2xl border shadow-sm overflow-hidden">
    <template #header>
      <img :src="imageSrc" alt="Card header" class="w-full h-56 object-cover" />
    </template>

    <template #title>
      <h3 class="text-3xl font-semibold tracking-tight">Advanced Card</h3>
    </template>

    <template #subtitle>
      <span class="text-lg text-slate-500">Card subtitle</span>
    </template>

    <template #content>
      <p class="text-slate-700 leading-relaxed text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
        ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>

    <template #footer>
      <div class="flex justify-end pt-2">
        <Button label="Save" outlined size="large" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";

const imageSrc =
  "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1600&auto=format&fit=crop";
</script>

<style scoped></style>
