export default {
    htmlAttrs: {
      lang: 'pl',
    },

  /*
   ** Headers of the page
   */
  head: {
    title: 'DEŻAL: nowoczesne żaluzje, plisy i rolety | Poznań i okolice.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffe100' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Oferowane przez lokalną firmę DEŻAL Poznań rolety, plisy i żaluzje to najwyższej jakości osłony okienne. Indywidualna oferta, szczegółowy pomiar i szybka realizacja.',
      },
      { 'http-equiv': 'cache-control', content: 'max-age=604800, public' },
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat: 300,400',
      },
    ],
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/stylesheets/mixins/main-variables.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/aos.js', ssr: false },
    { src: '~/plugins/vue-scrollto.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
  ],

  pwa: {
    manifest: {
      name: 'Deżal Rolety Poznań',
      short_name: 'Deżal',
      theme_color: '#ffe100',
      lang: 'pl',
    },
    icon: {
      iconFileName: 'logo-pwa.png',
    },
  },

  router: {
    middleware: ['redirect'],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    'nuxt-sass-resources-loader',
    '@nuxtjs/sitemap',
    '@nuxtjs/firebase'
  ],

  styleResources: {
    scss: ['@/assets/stylesheets/mixins/*.scss', '@/assets/stylesheets/*.scss'],
  },
  sitemap: {
    hostname: 'https://dezalroletypoznan.pl',
    gzip: true,
    routes: [
      '/kontakt',
      '/rolety-dzien-noc',
      '/rolety-materialowe',
      '/rolety-rzymskie',
      '/plisy',
      '/zaluzje',
      '/verticale',
      '/moskitiery',
      '/realizacje',
    ],
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyAzEy6DqrnNLqqjLagqEnxmzYRMrJrYX8A',
      authDomain: 'dezal-e34b9.firebaseapp.com',
      databaseURL: 'https://dezal-e34b9.firebaseio.com',
      projectId: 'dezal-e34b9',
      storageBucket: 'dezal-e34b9.appspot.com',
      messagingSenderId: '1098134824316',
      appId: '1:1098134824316:web:03f74fc2d6433efa',
    },
    services: {
      auth: {
        ssr: true,
      },
      firestore: true
    },
  },

  build: {},
};
