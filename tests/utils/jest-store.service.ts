import Vuex from 'vuex'
import { buildVuexFromNuxt } from '~~/tests/mocks/nuxt-store.mock'
import * as indexStoreModule from '~/store/index'
// import * as i18nStoreModule from '../../client/store/'
import * as sessionStoreModule from '~/store/session'
import { jestStore } from '~~/tests/utils/jest-store.interface'
import { Index } from '~~/tests/utils/common.interface'

export function getStore (name: string) {
  // @ts-ignore
  if (!jestStore[name]) {
    console.error('NOT FOUND -> jestStore: ', name)
  }

  const store: Index = {
    index: indexStoreModule,
    session: sessionStoreModule
    // i18n: i18nStoreModule
  }

  return new Vuex.Store(buildVuexFromNuxt(store[name], name))
}
