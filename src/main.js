import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";

const app = createApp(App);

// Add router and pinia via loop
const plugins = [router, createPinia()];
plugins.forEach((plugin) => app.use(plugin));

// Register PrimeVue with options explicitly
app.use(PrimeVue, { theme: { preset: Aura } });

app.mount("#app");
