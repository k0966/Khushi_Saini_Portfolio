import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    cors: true,
    // Optional: if you need more specific CORS settings
    // cors: {
    //   origin: ['http://localhost:5173', 'https://sentry.io'],
    //   credentials: true
    // }
  },
  // Optional: Add proxy if CORS still doesn't work
  // server: {
  //   proxy: {
  //     '/sentry': {
  //       target: 'https://sentry-internal.temp-mail.io',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/sentry/, '')
  //     }
  //   }
  // }
})
