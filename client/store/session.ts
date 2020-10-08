import { GetterTree, MutationTree } from 'vuex'
import { RootState } from './index'

const defaultSession = () => {
  return {
    user: {
      name: null,
      first: null,
      last: null,
      image: null,
      role: null
    } as any,
    token: null as null | string
  }
}

export const state = defaultSession

export type Session = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setSession: (state: any, session: Session) => {
    state.user = session.user
    state.token = session.token
  },
  setSessionToken: (state: any, token: string) => state.token = token,
  resetSession: (state: any) => Object.assign(state, defaultSession)
}

export const getters: GetterTree<Session, RootState> = {
  token: (state: any) => state.token
}
