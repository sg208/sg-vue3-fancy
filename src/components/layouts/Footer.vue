<template>
  <footer class="py-8 bg-white border-t border-gray-200">
    <div class="container px-4 mx-auto">
      <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
        <SocialLinks />
        <NavLinks />
        <Copyright />
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialLinks from "./Footer/SocialLinks.vue";
import NavLinks from "./Footer/NavLinks.vue";
import Copyright from "./Footer/Copyright.vue";
</script>




