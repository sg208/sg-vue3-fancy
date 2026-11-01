<template>
  <div class="flex flex-col gap-3">
    <span :id="labelId" class="text-lead">How many minutes do you have?</span>
    <SelectButton
      :model-value="modelValue"
      :options="options"
      option-label="label"
      option-value="value"
      :allow-empty="false"
      :aria-labelledby="labelId"
      class="flex-wrap"
      @update:model-value="emit('update:modelValue', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';

// 0 means "any length of time".
defineProps<{ modelValue: number }>();
const emit = defineEmits<{ 'update:modelValue': [value: number] }>();

const labelId = 'time-filter-label';
const options = [
  { label: '15', value: 15 },
  { label: '30', value: 30 },
  { label: '45', value: 45 },
  { label: '60', value: 60 },
  { label: 'Any', value: 0 },
];
</script>
