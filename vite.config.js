
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template:{
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('add-')
      }
    }},                
  )],
  base:'https://m-victoriacm.github.io/invitacion_martina',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
