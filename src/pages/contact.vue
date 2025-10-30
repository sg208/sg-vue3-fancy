<script setup>
import "sg208-button/style.css";
import { SgButton, SgButtonText } from "sg208-button";
</script>

<template>
  <div class="text-2xl text-red-600">The following buttons is from sg208-button npm package</div>
  <SgButton>SG208 button text in a slot</SgButton>
  <SgButtonText text="SG208 button text from prop" />
</template>
