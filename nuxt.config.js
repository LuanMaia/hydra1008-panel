export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hydra1008-panel',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/firebase-character-data-converter.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyAGr8rJWXWx-UdJZNUxgHY1dVdCl0vTbno",
      authDomain: "hydra1008-e45e5.firebaseapp.com",
      databaseURL: "https://hydra1008-e45e5-default-rtdb.firebaseio.com",
      projectId: "hydra1008-e45e5",
      storageBucket: "hydra1008-e45e5.appspot.com",
      messagingSenderId: "961707989838",
      appId: "1:961707989838:web:0d24a593b1ada6a155dc1f",
      measurementId: "G-W2QJZCNNWJ"
    },
    services: {
      auth: true,
      database: true,
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
