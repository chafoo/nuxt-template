import HttpPlugin from '~/plugins/http.plugin'
import * as GlobalHttpService from '~/utils/http.service'

describe('http plugin', () => {
  let $axios: any
  let sentry: any
  let store: any
  let app: any
  let inject: any

  beforeEach(() => {
    $axios = {
      create: () => ({ test: 'test', setBaseURL: jest.fn, onError: jest.fn })
    }
    sentry = { captureException: jest.fn() }
    store = { getters: { 'session/token': 'test' } }
    app = { i18n: { locale: 'en' } }
    inject = jest.fn()
  })

  test('set global http service', () => {
    // @ts-ignore
    HttpPlugin({ $axios, store, app, sentry }, inject)

    // @ts-ignore
    expect(GlobalHttpService.$http.test).toBe('test')
  })

  test('axios has been called correctly', () => {
    const setBaseURL = jest.fn()
    const onError = jest.fn()
    const $axios = {
      create: () => {
        return {
          setBaseURL,
          onError
        }
      }
    }
    const axiosCreateSpy = jest.spyOn($axios, 'create')
    const firstExpect = { headers: { common: { 'Accept-Language': 'en', 'X-Ultron-User': 'test' } } }
    // @ts-ignore
    HttpPlugin({ $axios, store, app, sentry }, inject)
    expect(axiosCreateSpy).toBeCalledWith(firstExpect)
    expect(setBaseURL).toBeCalledWith(undefined)
    expect(onError).toBeCalled()
  })
})
