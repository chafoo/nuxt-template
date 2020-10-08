import SlugTranslation from '~/plugins/slug-translation.plugin'

describe('slug-translation plugin', () => {
  test.each([
    ['profil', 'en', 'profil'],
    ['foo', 'en', undefined],
    [[], 'en', undefined],
    ['profil', 'oo', 'profil'],
    ['foo', 'oo', undefined]
  ])('translates string %s', (value, lang, expected) => {
    const app = { i18n: { locale: lang } }
    let slugT: any

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const inject = (name: string, callback: any) => {
      slugT = callback
    }
    // @ts-ignore
    SlugTranslation({ app }, inject)

    expect(slugT(value)).toBe(expected)
  })
})
