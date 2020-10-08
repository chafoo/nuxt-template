import { NuxtAxiosInstance } from '@nuxtjs/axios'

// @ts-ignore
// eslint-disable-next-line import/no-mutable-exports
export let $http: NuxtAxiosInstance

export function setHttp (http: NuxtAxiosInstance): void {
  $http = http
}
