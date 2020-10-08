import _cloneDeep from 'lodash/cloneDeep'
import { Imports } from '~~/tests/mocks/nuxt-store.interface'

// mimics .nuxt/store.js
// optionally nest to build { modules: { a: { namespaced: true, state, ... } } }
export function buildVuexFromNuxt (imports: Imports, name?: string, rootOptions?: any) {
  const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']

  //  cloneDeep is because Vuex mutates the options object used to create the store.
  const options = _cloneDeep(VUEX_PROPERTIES.reduce((accumulator: any, key: string) => {
    if (imports[key]) {
      accumulator[key] = imports[key]
    }
    return accumulator
  }, {}))

  if (!name) {
    return options
  }

  options.namespaced = true

  if (!rootOptions) {
    rootOptions = buildVuexFromNuxt({ state: () => ({}) })
  }

  if (!rootOptions.modules) {
    rootOptions.modules = {}
  }
  rootOptions.modules[name] = options

  return rootOptions
}
