import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Store } from 'vuex'

export interface Resoure {
  http?: NuxtAxiosInstance
}

export interface AxiosInstance {
  $axios: NuxtAxiosInstance,
  store: Store<any>,
  app: any
}
