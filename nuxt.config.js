export default {
  htmlAttrs: {
    lang: 'pl',
  },

  target: 'static',
  ssr: true,

  /*
   ** Headers of the page
   */
  head: {
    title: 'DEŻAL: nowoczesne rolety, plisy i żaluzje | Poznań i okolice.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffe100' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Oferowane przez firmę DEŻAL Poznań rolety, plisy i żaluzje to najwyższej jakości osłony okienne. Indywidualna oferta, szczegółowy pomiar i szybka realizacja.',
      },
      { 'http-equiv': 'cache-control', content: 'max-age=604800, public' },
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/stylesheets/mixins/main-variables.scss',
    '~/assets/css/main.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-scrollto.js', ssr: false },
    { src: '~plugins/vue-gtag.js', ssr: false },
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
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
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

  robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: '/error',
    Sitemap: 'https://dezalroletypoznan.pl/sitemap.xml',
    robots: true,
  },

  build: {
    extend(config, { isServer }) {
      if (isServer) {
        config.resolve.alias['node-fetch-native'] = require.resolve(
          'node-fetch'
        );
      }
    },
  },
};
