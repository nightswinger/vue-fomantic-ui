import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

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
  })],
})
