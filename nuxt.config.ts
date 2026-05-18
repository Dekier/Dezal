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
    preset: 'vercel-static',
    prerender: {
      crawlLinks: true, // Nitro samo zmapuje wszystkie dynamiczne i statyczne linki
      routes: ['/'], // Wystarczy punkt wejścia
      failOnError: false,
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
    '@vite-pwa/nuxt', // 🚀 używamy zamiast sitemap + robots
    '@nuxtjs/seo',
    'nuxt-gtag',
    '@nuxt/image',
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

  image: {
    format: ['avif', 'webp'],
    quality: 90,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  site: {
    url: 'https://dezalroletypoznan.pl',
    name: 'DEŻAL Poznań',
    defaultLocale: 'pl', // lub 'pl-PL' - moduł SEO preferuje standard 'pl'
    currentLocale: 'pl',
  },

  gtag: {
    id: 'G-7TFFQYCBP3',
  },

  features: {
    inlineStyles: true,
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

  // serverMiddleware: [{ path: '/', handler: '~/middleware/redirect.js' }],

  compatibilityDate: '2026-05-18',
});
