import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import { VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App);

// Add router
app.use(router);

// Register PrimeVue with options explicitly
app.use(PrimeVue, { theme: { preset: Aura } });

// Register Vue Query with cache configuration
app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes - data is fresh, won't refetch
        gcTime: 10 * 60 * 1000, // 10 minutes - keep unused data in cache for smart lookups
      },
    },
  },
});

app.mount("#app");
