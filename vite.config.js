import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://cn.vitejs.dev/guide/static-deploy.html
const processEnvDev = (env) => (env && env.NODE_ENV === 'development')? '': '/kingone-interview/' 

// https://vitejs.dev/config/
export default defineConfig({
  base: processEnvDev(process.env),
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
