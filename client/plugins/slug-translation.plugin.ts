import { log as DevLog } from '~~/client/utils/dev.service'
import { slugs } from '~~/client/static/constants/slugs.constants'
import { LanguageShort } from '~~/client/utils/language.interface'

declare module 'vue/types/vue' {
  interface Vue {
    $slugT(slug: string): string
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $slugT(slug: string): string
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $slugT(slug: string): string
  }
}

// Initialising slug translation
// in context object
const slugTranslation = ({ app }: any, inject: Function): void => {
  let translatedSlugs = slugs[app.i18n.locale as LanguageShort]

  if (!translatedSlugs) {
    translatedSlugs = slugs.en
  }

  if (!translatedSlugs) {
    // @ts-ignore
    translatedSlugs = {}
  }

  const translation = (slug: string): string => {
    // @ts-ignore
    const translatedSlug = translatedSlugs[slug]

    if (!translatedSlug) {
      DevLog('Slug translation failed', slug)
    }

    return translatedSlug
  }

  inject('slugT', translation)
}

export default slugTranslation
