import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { init } from '~/utils/session.service'

export const strict = false

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  // name: state => state.name,
}

export const mutations: MutationTree<RootState> = {
  // CHANGE_NAME: (state, newName: string) => (state.name = newName),
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit ({ commit }, { app }) {
    init(commit, app)
  }
}
