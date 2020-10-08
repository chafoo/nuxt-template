const routes = require('./routes.config')

module.exports = {
  // Set this to a path to which you want to redirect users accessing root URL (/)
  // Accepts either string or object with statusCode and path properties. E.g
  // {
  //   statusCode: 301,
  //   path: 'about-us'
  // }
  rootRedirect: 'en',

  // Routes generation strategy, can be set to one of the following:
  // - 'no_prefix': routes won't be prefixed
  // - 'prefix_except_default': add locale prefix for every locale except default
  // - 'prefix': add locale prefix for every locale
  // - 'prefix_and_default': add locale prefix for every locale and default
  strategy: 'prefix',

  // The app's default locale.
  // When using 'prefix_except_default' strategy, URLs for this locale won't have a prefix.
  // It's recommended to set this to some locale regardless of chosen strategy, as it will be
  // used as a locale fallback to use when navigating to a non-existent route.
  defaultLocale: 'en',

  // Fallback base URL to use as prefix for alternate URLs in hreflang tags.
  // By default VueRouter's base URL will be used and only if that is not available,
  // fallback URL will be used.
  // Can also be a function that will be passed a Nuxt context as a parameter and
  // should return a string. Useful to make base url dynamic based on request headers.
  baseUrl: process.env.baseUrl,

  // If true, SEO metadata is generated for routes that have i18n enabled.
  // Note that performance can suffer with this enabled and there might be compatibility
  // issues with some plugins. Recommended way is to set up SEO as described in:
  // https://nuxt-community.github.io/nuxt-i18n/seo.html#improving-performance
  seo: true,

  // List of locales supported by your app
  // This can either be an array of codes: ['en', 'fr', 'es']
  // Or an array of objects for more complex configurations:
  // [
  //   { code: 'en', iso: 'en-US', file: 'en.js' },
  //   { code: 'fr', iso: 'fr-FR', file: 'fr.js' },
  //   { code: 'es', iso: 'es-ES', file: 'es.js' }
  // ]
  //   `iso` value should have either:
  //   - code of ISO 639-1 (e.g. 'en')
  //   - code of ISO 639-1 and code of ISO 3166-1 alpha-2, with a hyphen (e.g. 'en-US')
  locales: [{
    code: 'de',
    iso: 'de-DE',
    name: 'German'
  }, {
    code: 'en',
    iso: 'en-US',
    name: 'English'
  }],

  // By default a store module is registered and kept in sync with the
  // app's i18n current state
  // Set to false to disable
  vuex: {
    moduleName: 'i18n',
    mutations: {
      setLocale: true
    },
    syncLocale: true
  },

  // vue-i18n configuration.
  // See documentation: http://kazupon.github.io/vue-i18n/api/#constructor-options
  // To be able to pass more complex configuration options that can't be stringified, it's also
  // supported to set this property to a path to a local configuration file. File needs to export
  // a function (that will be passed a Nuxt context as a parameter) or plain object.
  // Example path: '~/plugins/vue-i18n.js'
  // Example file content:
  // export default context => {
  //   return {
  //     modifiers: {
  //       snakeCase: (str) => str.split(' ').join('-')
  //     }
  //   }
  // }
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      de: require('./client/static/locales/de.json'),
      en: require('./client/static/locales/en.json')
    }
  },

  // By default, custom routes are extracted from page files using babel parser,
  // set this to false to disable this
  parsePages: false,

  // If parsePages option is disabled, the module will look for custom routes in
  // the pages option, refer to the "Routing" section for usage
  pages: routes
}
