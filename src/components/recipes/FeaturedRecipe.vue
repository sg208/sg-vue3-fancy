<template>
  <div class="grid gap-8 lg:grid-cols-2 lg:gap-16">
    <img
      :src="imageUrl"
      :alt="recipe.name"
      width="1024"
      height="1024"
      loading="lazy"
      class="aspect-square w-full object-cover"
    />
    <div class="flex min-w-0 flex-col gap-8 lg:justify-between lg:py-4">
      <div>
        <h2 :id="headingId" class="text-head">{{ recipe.name }}</h2>
        <p class="mt-6 max-w-[38ch] text-lead">
          Today's pick: {{ recipe.cuisine }},
          {{ recipe.difficulty?.toLowerCase() }}, ready in
          {{ totalMinutes }} minutes for {{ recipe.servings }}.
        </p>
      </div>

      <Tabs value="ingredients">
        <TabList>
          <Tab value="ingredients">Ingredients</Tab>
          <Tab value="method">Method</Tab>
          <Tab value="clock">The clock</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="ingredients">
            <ul class="columns-1 gap-8 sm:columns-2">
              <li
                v-for="item in recipe.ingredients"
                :key="item"
                class="break-inside-avoid py-1"
              >
                {{ item }}
              </li>
            </ul>
          </TabPanel>
          <TabPanel value="method">
            <p class="max-w-[60ch]">{{ preview }}</p>
          </TabPanel>
          <TabPanel value="clock">
            <MinuteBand :recipe="recipe" is-on-panel />
            <p class="mt-3 text-small text-muted">
              {{ recipe.prepTimeMinutes }} minutes prep in ink,
              {{ recipe.cookTimeMinutes }} minutes cooking in brass. One bar is
              five minutes.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <div class="grid gap-3 sm:grid-cols-2">
        <router-link :to="`/recipe/${recipe.id}`" class="btn min-h-16">
          Read the full recipe
        </router-link>
        <button
          type="button"
          class="btn btn-quiet min-h-16 bg-paper hover:bg-paper/70"
          @click="emit('shuffle')"
        >
          Pick another
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import MinuteBand from './MinuteBand.vue';
import {
  getRecipeImageUrl,
  getTotalMinutes,
  previewText,
  type Recipe,
} from '../../utils/recipeUtils';

const props = withDefaults(
  defineProps<{
    recipe: Recipe;
    previewLength?: number;
    headingId?: string;
  }>(),
  {
    previewLength: 320,
    headingId: 'todays-plate-heading',
  }
);

const emit = defineEmits<{ shuffle: [] }>();

const imageUrl = computed(() => getRecipeImageUrl(props.recipe));
const totalMinutes = computed(() => getTotalMinutes(props.recipe));
const preview = computed(() =>
  previewText(props.recipe.instructions, props.previewLength)
);
</script>
