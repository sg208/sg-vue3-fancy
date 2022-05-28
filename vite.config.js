import { defineConfig } from 'vite'

// Plugins
import vue from '@vitejs/plugin-vue'

// https://github.com/hannoeru/vite-plugin-pages
import Pages from 'vite-plugin-pages'

// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'
import {
	dirResolver,
	DirResolverHelper
} from 'vite-auto-import-resolvers'

// https://github.com/antfu/unplugin-vue-components
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
    DirResolverHelper(),
    AutoImport({
      imports: ['vue'],
			resolvers: [dirResolver()]
    }),
  ]
})
