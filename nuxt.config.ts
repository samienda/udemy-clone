// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  ssr: false, // Disable SSR, as GitHub Pages only supports static hosting
  
  nitro: {
    preset: 'static', // Generate a static site
  },

  app: {
    baseURL: '/udemy-clone/', // Required for GitHub Pages (replace 'your-repo-name' with the actual repo name)
  },
})
