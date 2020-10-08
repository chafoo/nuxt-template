import { NuxtAxiosInstance } from '@nuxtjs/axios'
import * as GlobalHttpService from '~/utils/http.service'
import { log as DevLog } from '~/utils/dev.service'
import { AxiosInstance } from '~/utils/http.interface'

// TODO:test mock daten holen und testen

// Initialising custom preset axios instance
// in context object
// and globally to http.service.ts
// @ts-ignore
export default function ({ $axios, store, app, $sentry }: AxiosInstance, inject: Function) {
  const http = <NuxtAxiosInstance> $axios.create({
    headers: {
      common: {
        'X-Ultron-User': store.getters['session/token'],
        'Accept-Language': app.i18n.locale
      }
    }
  })

  http.setBaseURL(process.env.baseUrl as string)

  http.onError((error) => {
    DevLog('HTTP INTERCEPTOR ERROR', error)
    if (process.env.NODE_ENV === 'production') {
      $sentry.captureException(error)
      return Promise.reject(error)
    }
    return Promise.resolve(error)
  })

  // Set global resource
  GlobalHttpService.setHttp(http)

  // Inject to context as $http
  inject('http', http)
}
