<template>
  <div class="min-h-screen bg-white text-gray-900">
    <div class="container mx-auto px-4 py-8">
      <header class="flex items-center justify-between mb-8">
        <h1 class="text-2xl font-semibold tracking-tight">Recipes</h1>
        <router-link to="/contact" class="text-sm text-gray-500 hover:text-gray-700"
          >Contact</router-link
        >
      </header>

      <section v-if="loading" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="n in 6" :key="n" class="border rounded-lg p-4">
          <div class="h-40 bg-gray-100 rounded mb-3"></div>
          <div class="h-4 bg-gray-100 rounded w-2/3 mb-2"></div>
          <div class="h-4 bg-gray-100 rounded w-1/2"></div>
        </div>
      </section>

      <section v-else>
        <div v-if="featured" class="mb-10">
          <div class="flex flex-col md:flex-row gap-6 items-stretch">
            <img
              :src="imageFor(featured)"
              alt="Featured recipe"
              class="w-full md:w-1/2 h-64 object-cover rounded-lg"
            />
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h2 class="text-xl font-medium mb-2">Featured: {{ featured.name }}</h2>
                <p class="text-sm text-gray-600 mb-4">
                  {{ featured.cuisine }} • {{ featured.difficulty }} •
                  {{ featured.caloriesPerServing }} cal/serving
                </p>
                <p class="text-sm text-gray-700 line-clamp-3">
                  {{ preview(featured.instructions) }}
                </p>
              </div>
              <div class="mt-4">
                <Button
                  label="View details"
                  icon="pi pi-external-link"
                  text
                  @click="openRecipe(featured)"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="r in rest" :key="r.id" class="rounded-2xl border shadow-sm overflow-hidden">
            <template #header>
              <img :src="imageFor(r)" :alt="r.name" class="w-full h-56 object-cover" />
            </template>
            <template #title>
              <h3 class="text-2xl md:text-3xl font-semibold tracking-tight">{{ r.name }}</h3>
            </template>
            <template #subtitle>
              <span class="text-lg text-slate-500">{{ r.cuisine }} • {{ r.difficulty }}</span>
            </template>
            <template #content>
              <p class="text-slate-700 leading-relaxed text-lg mb-3">
                Serves {{ r.servings }} • {{ r.caloriesPerServing }} cal
              </p>
              <ul class="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li v-for="i in r.ingredients.slice(0, 3)" :key="i">{{ i }}</li>
              </ul>
            </template>
            <template #footer>
              <div class="flex items-center justify-end pt-2">
                <Button
                  label="Open"
                  size="large"
                  icon="pi pi-eye"
                  outlined
                  @click="openRecipe(r)"
                />
              </div>
            </template>
          </Card>
        </div>
      </section>
    </div>
  </div>

  <Dialog v-model:visible="dialogVisible" modal :style="{ width: '36rem' }" header="Recipe">
    <template v-if="active">
      <img
        :src="imageFor(active)"
        :alt="active.name"
        class="w-full h-56 object-cover rounded mb-4"
      />
      <h3 class="text-lg font-medium mb-1">{{ active.name }}</h3>
      <p class="text-sm text-gray-600 mb-3">
        {{ active.cuisine }} • {{ active.difficulty }} • Prep {{ active.prepTimeMinutes }}m • Cook
        {{ active.cookTimeMinutes }}m
      </p>
      <p class="text-sm text-gray-700 mb-4">{{ preview(active.instructions, 1000) }}</p>
      <h4 class="font-medium mb-2">Ingredients</h4>
      <ul class="text-sm list-disc pl-5 space-y-1 max-h-40 overflow-auto">
        <li v-for="i in active.ingredients" :key="i">{{ i }}</li>
      </ul>
    </template>
  </Dialog>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Dialog from "primevue/dialog";

const loading = ref(true);
const recipes = ref([]);
const featured = ref(null);
const dialogVisible = ref(false);
const active = ref(null);

const rest = computed(() => {
  if (!featured.value) return recipes.value;
  return recipes.value.filter((r) => r.id !== featured.value.id);
});

function imageFor(r) {
  if (r && r.image) return r.image;
  const q = encodeURIComponent(r?.name || "food");
  return `https://source.unsplash.com/800x600/?${q}`;
}

function preview(instructions, max = 220) {
  const text = Array.isArray(instructions) ? instructions.join(" ") : String(instructions || "");
  return text.length > max ? text.slice(0, max) + "…" : text;
}

function openRecipe(r) {
  active.value = r;
  dialogVisible.value = true;
}

onMounted(async () => {
  try {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    const list = Array.isArray(data?.recipes) ? data.recipes : [];
    recipes.value = list;
    if (list.length) {
      featured.value = list[Math.floor(Math.random() * list.length)];
    }
  } catch (e) {
    recipes.value = [];
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
