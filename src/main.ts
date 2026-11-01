import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/tailwind.css';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { minuteBookPreset } from './theme/preset';
import {
  DARK_MODE_SELECTOR,
  initColorScheme,
} from './composables/useColorScheme';

initColorScheme();

const app = createApp(App);

// Add router
app.use(router);

// PrimeVue themed through its design tokens (src/theme/preset.ts)
app.use(PrimeVue, {
  theme: {
    preset: minuteBookPreset,
    options: { darkModeSelector: DARK_MODE_SELECTOR },
  },
  // PrimeUI licence key, read from the build environment when one is set.
  license: import.meta.env.VITE_PRIMEUI_LICENSE,
});

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

app.mount('#app');
