import { Context } from '@nuxt/types'

export default ({ params, app }: Context, slugs: any[], slugName = 'slug'): boolean => {
  slugs.map((slug: string) => {
    const _slug = app.i18n.t(slug) as string
    return _slug.toLowerCase()
  })

  return slugs.includes(params[slugName])
}
