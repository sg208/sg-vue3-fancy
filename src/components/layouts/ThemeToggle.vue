<template>
  <button
    type="button"
    class="inline-flex size-11 items-center justify-center rounded-[2px] transition-colors hover:bg-panel"
    :aria-pressed="isDark"
    aria-label="Dark theme"
    @click="handleToggle"
  >
    <i
      :class="isDark ? 'pi pi-moon' : 'pi pi-sun'"
      class="text-lg"
      aria-hidden="true"
    />
  </button>
</template>

<script setup lang="ts">
import { useColorScheme } from '../../composables/useColorScheme';

const { isDark, handleToggle } = useColorScheme();
</script>
