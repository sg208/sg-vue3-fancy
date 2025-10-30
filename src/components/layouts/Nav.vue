<template>
  <div v-for="headerItem in headers" :key="headerItem.name" class="inline-block mr-5">
    / <router-link :to="headerItem.path">{{ headerItem.name }}</router-link>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useNavigationStore } from "../../store/navigations";

const { header: headers } = storeToRefs(useNavigationStore());
</script>
