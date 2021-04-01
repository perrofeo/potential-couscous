
export default {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'es'
    },
    title: 'perrofeofilms',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'rSi0yd53I3y8F-MEiF2ts0oQUBCv3w7zC-G-ZFq2Kf8'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Existe otra vida, los que no existimos somos nosotros.'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Existe otra vida, los que no existimos somos nosotros.'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.perrofeofilms.com/portada3.jpg'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.perrofeofilms.com/'
      },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@perrofeo_' }
    ],
    script: [],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      /* {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,900'
      }, */
      {
        rel: 'preconnect',
        href: 'https://cdn.jsdelivr.net'
      }
    ]
  },

  manifest: {
    name: 'perrofeofilms',
    short_name: 'perrofeofilms',
    lang: 'es',
    display: 'minimal-ui',
    background_color: "#000000",
    theme_color: "#ddfe19",
    start_url: "/?source=pwa"
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ddfe19' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    // https://www.elian.codes/blog/adding-tracking-with-ga4-to-nuxt/
    '~/plugins/gtag.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
