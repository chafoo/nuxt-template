const path = require('path')
const i18n = require('./i18n.config')

module.exports = {
  mode: 'universal',
  // Doc: https://git.io/nuxt-telemetry
  telemetry: false,
  /*
   ** Pages directory path from project-root-path
   */
  srcDir: 'client/',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: process.env.NODE_ENV !== 'production' ? '/favicon/favicon_dev_152x152.png' : '/favicon/favicon_32x32.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~/static/styles/essentials.scss'],
  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/http.plugin.ts',
    '~/plugins/slug-translation.plugin.ts',
    // Doc: https://vuelidate.js.org/#getting-started
    '~/plugins/vuelidate.plugin.ts',
    // Doc: https://www.npmjs.com/package/v-click-outside
    { src: '~/plugins/click-outside.plugin.ts', ssr: true },
    '~/plugins/aria-element.directive.ts'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://typescript.nuxtjs.org/
    '@nuxt/typescript-build',
    // Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // Doc: https://www.npmjs.com/package/cookie-universal-nuxt
    'cookie-universal-nuxt'
  ],
  styleResources: {
    scss: ['~/static/styles/basics.scss']
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://www.npmjs.com/package/@nuxtjs/moment
    '@nuxtjs/moment',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/options-reference.html
    ['nuxt-i18n', i18n],
    // Doc: https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    loaders: {
      vue: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    },
    extend (config) {
      // IDE path config
      config.resolve.alias['@'] = path.resolve(__dirname)
      config.resolve.alias['~~'] = path.resolve(__dirname)
      config.resolve.alias['~'] = `${path.resolve(__dirname)}/client/`
    }
  },
  env: {
    baseUrl: process.env.NODE_ENV !== 'production' ? 'https://api.services.dev.kitchenstories.io/api/v3/' : 'https://kitchenstories.com',
    publicToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZWFkMTA2MjYtYTVhNC00NzQzLWJiMmQtYjY5ZWJlN2QyOWY1IiwiaXNzIjoid2ViIn0.pQvBAmPnG1KOfFZiDr0iFsEk_t26odleSDQ-_2NiLi4'
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
