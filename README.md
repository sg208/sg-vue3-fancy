# sg-vue3-fancy

This is a simple template utilizing Vue 3 and couple of simple packages to make you life a bit easier as a front end developer. The stacks are below and I'm adding more to the list.

The demo app is **The Minute Book**, a recipe browser that draws each recipe's prep and cook time as five-minute bars and filters the list by the time you have. It has light and dark themes and follows your system setting.

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
  - Themed through a design-token preset in `src/theme/preset.ts`
  - Set `VITE_PRIMEUI_LICENSE` in the build environment to register a PrimeUI license key
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
- Package manager: `pnpm` (`packageManager` in `package.json`; run `corepack enable`)
- Install: `pnpm install`
- Build command: `pnpm build`
- Test: `pnpm test`

## License

[MIT](./LICENSE) © 2026 Syailendra Ginting
