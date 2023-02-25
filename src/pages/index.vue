<template>
  <div>
    <p class="text">This is index page</p>
    <router-link to="/blog">blog</router-link> |
    <router-link to="/terms">terms</router-link>
    <HelloWorld msg="hello" />
    <SgButtonText text="SG208 button text from prop" />
  </div>
</template>

<script setup>
import { SgButtonText } from "sg208-button";
import "sg208-button/dist/style.css";
</script>
