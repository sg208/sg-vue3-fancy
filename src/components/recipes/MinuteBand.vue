<template>
  <div
    role="img"
    :aria-label="label"
    class="flex"
    :class="isCompact ? 'h-2 gap-px' : 'h-10 gap-1 sm:gap-1.5 md:h-14'"
  >
    <span
      v-for="block in blocks"
      :key="block.key"
      class="block"
      :class="[classFor(block.kind), isCompact ? 'w-1' : 'min-w-0 flex-1']"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getMinuteBlocks, type Recipe } from '../../utils/recipeUtils';

// The track is always at least an hour and a half long (18 five-minute
// blocks), so stripes of different recipes compare at the same scale.
const TRACK_BLOCKS = 18;

type BlockKind = 'prep' | 'cook' | 'idle';

const props = defineProps<{
  recipe: Recipe;
  isCompact?: boolean;
  // Set when the band sits on the panel tone, so idle blocks use paper.
  isOnPanel?: boolean;
}>();

const blocks = computed(() => {
  const { prep, cook } = getMinuteBlocks(props.recipe);
  const length = Math.max(TRACK_BLOCKS, prep + cook);
  return Array.from({ length }, (_, i) => ({
    key: i,
    kind: kindAt(i, prep, cook),
  }));
});

const kindAt = (index: number, prep: number, cook: number): BlockKind => {
  if (index < prep) return 'prep';
  if (index < prep + cook) return 'cook';
  return 'idle';
};

const classFor = (kind: BlockKind): string => {
  if (kind === 'prep') return 'bg-ink';
  if (kind === 'cook') return 'bg-cook';
  return props.isOnPanel ? 'bg-paper' : 'bg-panel';
};

const label = computed(
  () =>
    `${props.recipe.prepTimeMinutes ?? 0} minutes prep, ${props.recipe.cookTimeMinutes ?? 0} minutes cooking`
);
</script>
