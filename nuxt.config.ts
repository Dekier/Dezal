const siteUrl =
  process.env.NUXT_PUBLIC_SITE_URL || 'https://dezalroletypoznan.pl';
export default defineNuxtConfig({
  ssr: true,

  vite: {
    build: {
      cssCodeSplit: true,
      target: 'esnext',
      minify: 'esbuild',
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  routeRules: {
    // Twoje główne reguły renderowania
    '/**': { swr: 3600 },

    // Zmuszenie przeglądarki do cachowania obrazków, css, js i czcionek przez rok
    '/_nuxt/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
    '/images/**': { headers: { 'cache-control': 'public, max-age=31536000' } },
    '/*.png': { headers: { 'cache-control': 'public, max-age=31536000' } },
    '/*.webp': { headers: { 'cache-control': 'public, max-age=31536000' } },
    '/*.jpg': { headers: { 'cache-control': 'public, max-age=31536000' } },
    '/**/*.woff2': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
    '/**/*.woff': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
  },

  experimental: {
    payloadExtraction: true,
  },

  nitro: {
    serverAssets: [
      {
        baseName: 'articles', // To będzie nazwa, pod którą odwołasz się w kodzie
        dir: 'app/assets/content/articles', // Ścieżka relatywna do głównego katalogu projektu
      },
    ],
    prerender: {
      crawlLinks: true, // Nitro samo zmapuje wszystkie dynamiczne i statyczne linki
      failOnError: false,
      routes: [
        // '/',
        '/llms.txt',
        '/llms-full.txt',
        '/wiedza/czyszczenie-poradnik',
        '/wiedza/co-najlepiej-zatrzymuje-swiatlo',
        '/wiedza/co-na-okno-w-lazience',
      ],
    },
    compressPublicAssets: { gzip: true, brotli: true },
  },

  output: {},

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'pl',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/images/logo-rect.png' },
      ],
    },
  },

  css: ['~/assets/stylesheets/main.scss'],

  plugins: [],

  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/seo',
    // 'nuxt-gtag',
    '@nuxt/scripts',
    'nuxt-llms',
    '@nuxt/fonts',
  ],

  // DODAJ NOWĄ KONFIGURACJĘ SCRIPTS
  scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-7TFFQYCBP3',
      },
    },
  },

  // critters: {
  //   preload: 'swap',
  //   pruneSource: true,
  // },

  ogImage: {
    zeroRuntime: true,
  },

  runtimeConfig: {
    public: {
      siteUrl,
    },
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        // Wymuszamy pobranie konkretnych grubości, w tym 700!
        weights: ['400', '500', '600', '700'],
        display: 'swap',
      },
    ],
  },

  site: {
    url: 'https://dezalroletypoznan.pl',
    name: 'DEŻAL',
    defaultLocale: 'pl', // lub 'pl-PL' - moduł SEO preferuje standard 'pl'
    currentLocale: 'pl',
  },

  // gtag: {
  //   id: 'G-7TFFQYCBP3',
  //   enabled: process.env.NODE_ENV === 'production',
  // },

  features: {
    inlineStyles: false,
  },

  llms: {
    domain: 'https://dezalroletypoznan.pl',
    title: 'DEŻAL - Rolety Poznań',
    // Zmieniony opis - szczery i trafiający w intencje klientów
    description:
      'Profesjonalny dystrybutor i doświadczony monter rolet, żaluzji i osłon okiennych w Poznaniu. Zapewniamy pomiar i montaż.',
    full: {
      title: 'Baza Wiedzy DEŻAL - Rolety Poznań',
      description:
        'Pełne artykuły, poradniki i techniczne szczegóły dotyczące wyboru, czyszczenia i montażu rolet.',
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Deżal Rolety',
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

  // serverMiddleware: [{ path: '/', handler: '~/middleware/redirect.js' }],

  compatibilityDate: '2026-05-18',
});
