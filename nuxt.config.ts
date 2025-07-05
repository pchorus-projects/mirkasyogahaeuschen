import { repositoryName } from './slicemachine.config.json';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  css: ['~/assets/styles.scss'],
  devtools: { enabled: true },
  image: {
    format: ['avif', 'webp', 'jpeg'],
  },

  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/prismic', '@nuxtjs/sitemap'],

  prismic: {
    endpoint: repositoryName,
  },
  site: {
    url: 'https://mirkasyogahaeuschen.de',
  },
});
