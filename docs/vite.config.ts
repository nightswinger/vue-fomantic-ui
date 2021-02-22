import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-fomantic-ui/',
  plugins: [vue({
    template: {
      transformAssetUrls: {
        img: ['src'],
        'sui-image': ['src']
      }
    }
  }), vueJsx()],
})
