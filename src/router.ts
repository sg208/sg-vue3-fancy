import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, top: 16 };
    if (to.path === from.path) return false;
    return { top: 0 };
  },
});

export default router;
