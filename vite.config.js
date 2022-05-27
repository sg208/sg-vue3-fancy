import { defineConfig } from 'vite'

// Plugins
import vue from '@vitejs/plugin-vue'

// Pages auto import
import Pages from 'vite-plugin-pages'

// Components auto import
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ]
})
