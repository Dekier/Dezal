const siteUrl =
  process.env.NUXT_PUBLIC_SITE_URL || 'https://dezalroletypoznan.pl';
export default defineNuxtConfig({
  ssr: true,

  vite: {
    build: {
      target: 'esnext',
      minify: 'esbuild',
      cssCodeSplit: true,
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
  },

  output: {
    standalone: false,
  },

  generate: {
    fallback: '404.html',
    routes: [
      '/kontakt',
      '/realizacje',
      '/rolety-dzien-noc',
      '/rolety-materialowe',
      '/rolety-rzymskie',
      '/plisy',
      '/zaluzje-drewniane',
      '/zaluzje-aluminiowe',
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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/images/logo-rect.png' },
      ],
    },
  },

  css: ['@/assets/stylesheets/main.scss'],

  plugins: [],

  modules: [
    '@vite-pwa/nuxt', // 🚀 używamy zamiast sitemap + robots
    '@nuxtjs/seo',
    'nuxt-gtag',
    '@nuxtjs/critters',
    '@nuxt/image',
  ],

  critters: {
    preload: 'swap',
    pruneSource: true,
  },

  ogImage: {
    zeroRuntime: true,
  },

  runtimeConfig: {
    public: {
      siteUrl,
    },
  },

  image: {
    format: ['webp'],
    quality: 90,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  seo: {
    site: {
      url: siteUrl,
    },
    sitemap: {
      exclude: ['/error'],
      defaults: {
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: true,
      },
      trailingSlash: false,
    },
    robots: {
      indexable: true,
      sitemap: siteUrl + '/sitemap.xml',
      rules: [
        {
          userAgent: '*',
          allow: '/',
          disallow: '/error',
        },
      ],
    },
    meta: {
      title: 'Nowoczesne rolety, plisy i żaluzje | Poznań i okolice.',
      ogSiteName: 'DEŻAL Poznań',
      ogImage: {
        url: '/images/logo-rect.png',
        alt: 'Logo firmy DEŻAL',
      },
      twitterCard: 'summary_large_image',
      themeColor: '#ffe100',
      language: 'pl',
    },
  },

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

  // serverMiddleware: [{ path: '/', handler: '~/middleware/redirect.js' }],

  compatibilityDate: '2025-04-22',
});
