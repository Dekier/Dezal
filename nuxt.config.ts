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
    '/**': { prerender: true },
  },

  experimental: {
    payloadExtraction: true,
  },

  nitro: {
    preset: 'node-cluster',
    serverAssets: [
      {
        baseName: 'articles', // To będzie nazwa, pod którą odwołasz się w kodzie
        dir: 'server/content/articles', // Ścieżka relatywna do głównego katalogu projektu
      },
    ],
    prerender: {
      crawlLinks: true, // Nitro samo zmapuje wszystkie dynamiczne i statyczne linki
      failOnError: false,
      routes: [
        '/',
        // '/llms.txt',
        // '/llms-full.txt',
        '/wiedza/czyszczenie-poradnik',
        '/wiedza/co-najlepiej-zatrzymuje-swiatlo',
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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..700;1,14..32,300..700&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/stylesheets/main.scss'],

  plugins: [],

  modules: [
    '@vite-pwa/nuxt', // 🚀 używamy zamiast sitemap + robots
    '@nuxtjs/seo',
    'nuxt-gtag',
    '@nuxt/scripts',
  ],

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

  site: {
    url: 'https://dezalroletypoznan.pl',
    name: 'DEŻAL',
    defaultLocale: 'pl', // lub 'pl-PL' - moduł SEO preferuje standard 'pl'
    currentLocale: 'pl',
  },

  gtag: {
    id: 'G-7TFFQYCBP3',
    enabled: process.env.NODE_ENV === 'production',
  },

  features: {
    inlineStyles: true,
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
