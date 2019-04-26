module.exports = {
  mode: 'Spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Deżal pewna jakość, niskie ceny, krótkie terminy w Poznaniu.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Najlepsze rolety w poznaniu, duzy wybór modeli jak i kolorów.' }

    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
      },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,600'
      }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

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
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-sass-resources-loader'
  ],

  styleResources: {
    scss: ['@/assets/stylesheets/mixins/*.scss', '@/assets/stylesheets/*.scss']
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      config.node = {
        fs: 'empty'
      }
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}