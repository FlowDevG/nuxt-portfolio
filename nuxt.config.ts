// https://nuxt.com/docs/api/configuration/nuxt-config
import en from './locales/en.json';
import el from './locales/el.json';

export default defineNuxtConfig({
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' }
    pageTransition: { name: "fade", mode: "default" } 
    // layoutTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
      // "~/assets/scss/main.scss",
      "~/assets/css/global.css",
      // "leaflet/dist/leaflet.css",
      // "@fortawesome/fontawesome-svg-core/styles.css"
  ],
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@pinia/nuxt', 'nuxt-icon', '@nuxtjs/supabase'],
  i18n: {
    // vueI18n: {
    //   fallbackLocale: 'en',
    //   legacy: false,
    //   locale: 'en',
    //   messages: {
    //     en,
    //     el
    //   }
    // },
    vueI18n: {
      fallbackLocale: 'en',
      legacy: false,
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        files: ["en.json"]
      },
      {
        code: 'el',
        name: 'Greek',
        iso: 'el-GR',
        files: ["el.json"]
      }
    ],
    defaultLocale: 'en',
    strategy: "prefix",
    lazy: true,
    langDir: 'locales',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    // config: {},
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: 'first',
    viewer: true,
  },
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: 'https://api.openweathermap.org'
    }
  }
})