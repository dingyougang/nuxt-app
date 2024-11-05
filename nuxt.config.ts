// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // alias: {
  // '~assets': '/assets'
  // },
  modules: [
    'nuxt-icons', '@vant/nuxt'
  ],
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {}
    }
  }
})
