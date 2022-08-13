import { defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

const env = loadEnv('', process.cwd() + '/../', '')
let urlDev = env.APP_URL.replaceAll('http://', '')
urlDev = urlDev.replaceAll('https://', '')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Load env file in root folder, laravel .env
  envDir: '../',
  // Change prefix so env variables that begins by APP_ are loaded
  envPrefix: 'APP_',
  // When run build command copy the final content in the public folder 
  // of laravel project instead dist folder
  build: {
    outDir: '../public',
    emptyOutDir: true
  },
  // Modify server url of development server of vite and port
  server: {
    host: urlDev,
    port: 8000,
    // Api and Sanctum endpoints must be redirected to backend
    // Backend is working with port 80 with nginx in docker
    // Frontend works with 8000 with Vitejs Server
    proxy: {
      '/api': {
        target: 'http://desarrollo.zataca.com'
      },
      '/sanctum': {
        target: env.APP_URL
      }
    }
  }
})
