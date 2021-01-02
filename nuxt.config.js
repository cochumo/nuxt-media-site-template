// 一般
const siteName = 'サイト名入ります'
const siteUrl = '' // スラあり
const baseUrl = '' // スラなし
const domain = '' // ドメイン
const restApi = '' // REST API URLの共通部分

// head周り
const title = 'タイトル入ります'
const titleTemplate = `｜${title}`
const description = ''
const keywords = ''
const ogpImage = ''

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  htmlAttrs: {
    lang: 'ja',
  },
  head: {
    title,
    titleTemplate: '%s' + titleTemplate,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no',
      },
      { hid: 'description', name: 'description', content: description },
      { hid: 'keywords', name: 'keywords', content: keywords },
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: siteUrl },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: ogpImage,
      },
    ],
    script: [
      { src: '//polyfill.io/v2/polyfill.min.js?features=IntersectionObserver' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // https://github.com/fromAtoB/vue-a2b
    { src: '@/plugins/vue-a2b', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/google-analytics-module
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // The router property lets you customize Nuxt.js router (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router)
  router: {
    trailingSlash: true,
    middleware: ['redirect'],
  },

  // public environment variable (https://github.com/nuxt-community/dotenv-module)
  env: {
    siteName,
    siteUrl,
    baseUrl,
    domain,
    restApi,
    title,
    description,
    keywords,
  },

  // public environment variable (https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config)
  // hard-coded during the build once only.
  publicRuntimeConfig: {
    // Google Analytics settings (https://github.com/nuxt-community/google-analytics-module)
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
    // Google Tag Manager settings (https://github.com/nuxt-community/gtm-module)
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID,
      pageTracking: false,
      layer: 'dataLayer',
      variables: {},
    },
  },

  // Private environment variable  (https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config)
  privateRuntimeConfig: {
    // apiSecretKey etc
  },

  // sitemap settings (https://github.com/nuxt-community/sitemap-module)
  sitemap: {
    hostname: baseUrl,
    gzip: true,
    cacheTime: 1000 * 60 * 15,
    defaults: {
      priority: 1,
      lastmod: new Date(),
    },
    exclude: [],
    routes: [
      // Get a dynamic route with axios
    ],
  },
}
