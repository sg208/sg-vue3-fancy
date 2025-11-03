# sg-vue3-fancy

This is a simple template utilizing Vue 3 and couple of simple packages to make you life a bit easier as a front end developer. The stacks are below and I'm adding more to the list.

## Stacks

- Vue 3
- [Vite (bundler)](https://vitejs.dev/)
- [File based routing](https://github.com/hannoeru/vite-plugin-pages)
- [Auto import components](https://github.com/antfu/unplugin-vue-components)
- [Auto import composables and modules](https://github.com/antfu/unplugin-auto-import)
  - Resolver https://github.com/dishait/vite-auto-import-resolvers/blob/main/README_EN.md
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack Vue Query (data fetching & caching)](https://tanstack.com/query/latest/docs/vue/overview)
  - Configured with 5-minute cache (`staleTime`)
  - Includes smart cache lookup (e.g., recipe details from cached recipes list)
- [TanStack Vue Query Devtools](https://tanstack.com/query/latest/docs/vue/devtools) (development only)
- [PrimeVue (UI component library)](https://primevue.org/)
- Deployed to Cloudflare Pages
- i18n ... Coming soon!
- Meta tags ... Coming soon!
- Layouts ... Coming soon!
- [Sg208 Vue Component Library](https://www.npmjs.com/package/sg208-button?activeTab=readme)

## Demo

This project is deployed to Netlify.

https://sg-vue3-fancy-engg-me.netlify.app

## Couple of things

- Node version: `>=22.12.0`
- Target: `Single Page App`
- Public folder: `dist`
- Build command: `npm run build`
