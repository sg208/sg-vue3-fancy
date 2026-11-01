/// <reference types="vite/client" />

declare module '~pages' {
  import type { RouteRecordRaw } from 'vue-router';
  const routes: RouteRecordRaw[];
  export default routes;
}

interface ImportMetaEnv {
  readonly VITE_PRIMEUI_LICENSE?: string;
}
