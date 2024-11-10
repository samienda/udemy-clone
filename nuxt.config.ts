// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  ssr: false, // Disable SSR, as GitHub Pages only supports static hosting
  
  nitro: {
    preset: 'static', // Generate a static site
  },

})
