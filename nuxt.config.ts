const siteUrl =
  process.env.NUXT_PUBLIC_SITE_URL || 'https://dezalroletypoznan.pl';
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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://dezalroletypoznan.pl' },
        { rel: 'apple-touch-icon', href: '/images/logo-rect.png' },
      ],
    },
  },

  css: ['@/assets/stylesheets/main.scss'],

  plugins: [],

  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/seo', // 🚀 używamy zamiast sitemap + robots
    'nuxt-gtag',
    '@nuxtjs/critters',
    '@nuxt/image-edge',
  ],

  runtimeConfig: {
    public: {
      siteUrl,
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
      title: 'DEŻAL: nowoczesne rolety, plisy i żaluzje | Poznań i okolice.',
      description:
        'Rolety, plisy, żaluzje i moskitiery w Poznaniu – DEŻAL oferuje nowoczesne osłony okienne na wymiar. Profesjonalny montaż, precyzyjny pomiar i indywidualna wycena.',
      ogSiteName: 'DEŻAL Poznań',
      ogImage: {
        url: '/images/logo.png',
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

  serverMiddleware: [{ path: '/', handler: '~/middleware/redirect.js' }],

  compatibilityDate: '2025-04-22',
});
