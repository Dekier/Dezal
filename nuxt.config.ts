export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'vercel-static',
  },
  output: {
    standalone: false,
  },

  generate: {
    routes: [
      '/kontakt',
      '/realizacje',
      '/rolety-dzien-noc',
      '/rolety-materialowe',
      '/rolety-rzymskie',
      '/plisy',
      '/zaluzje',
      '/verticale',
      '/moskitiery',
    ],
  },
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'pl',
      },
      title: 'DEŻAL: nowoczesne rolety, plisy i żaluzje | Poznań i okolice.',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=5',
        },
        { name: 'theme-color', content: '#ffe100' },
        {
          name: 'description',
          content:
            'Rolety, plisy, żaluzje i moskitiery w Poznaniu – DEŻAL oferuje nowoczesne osłony okienne na wymiar. Profesjonalny montaż, precyzyjny pomiar i indywidualna wycena. Obsługujemy Poznań i okolice.',
        },
        {
          name: 'keywords',
          content:
            'rolety, rolety dzień noc, plisy, żaluzje, poznań, osłony okienne, dezal, rolety materialowe, rolety rzymskie, moskitiery, verticale',
        },
        {
          property: 'og:title',
          content: 'DEŻAL: Rolety, Plisy, Żaluzje | Poznań',
        },
        {
          property: 'og:description',
          content:
            'Rolety, plisy, żaluzje, moskitiery, verticale od firmy DEŻAL – indywidualny pomiar i profesjonalny montaż w Poznaniu i okolicy.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://dezalroletypoznan.pl' },
        { property: 'og:image', content: '/images/logo.png' },

        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'DEŻAL: Rolety, Plisy, Żaluzje | Poznań',
        },
        {
          name: 'twitter:description',
          content:
            'Rolety, plisy, żaluzje, moskitiery, verticale od firmy DEŻAL – indywidualny pomiar i profesjonalny montaż w Poznaniu i okolicy.',
        },
        { name: 'twitter:image', content: '/images/logo.png' },

        { 'http-equiv': 'cache-control', content: 'max-age=604800, public' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'canonical',
          href: 'https://dezalroletypoznan.pl',
        },
      ],
    },
  },

  css: ['@/assets/stylesheets/main.scss'],

  plugins: [],

  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-gtag',
    '@nuxtjs/critters',
    '@nuxt/image-edge',
  ],

  serverMiddleware: [{ path: '/', handler: '~/middleware/redirect.js' }],

  gtag: {
    id: 'G-7TFFQYCBP3',
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Deżal Rolety Poznań',
      short_name: 'Deżal',
      theme_color: '#ffe100',
      lang: 'pl',
      icons: [
        {
          src: '/logo-pwa.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },

  sitemap: {
    hostname: process.env.SITE_URL || 'https://dezalroletypoznan.pl',
    gzip: true,
    routes: [
      '/',
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
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/error',
      },
    ],
    sitemap: 'https://dezalroletypoznan.pl/sitemap.xml',
  },

  compatibilityDate: '2025-04-19',
});
