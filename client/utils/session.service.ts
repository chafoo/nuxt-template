import { getUser } from '~/utils/user.api'
const jwt = require('jsonwebtoken')

export async function init (commit: any, app: any): Promise<void> {
  const token = app.$cookies.get('token', { fromRes: true })

  if (!token) {
    return commit('session/resetSession')
  }

  const payload = jwt.decode(token)
  if (app.$moment().diff(payload.expiredAt, 'minutes') > 0) {
    return commit('session/resetSession')
  }

  if (app.store.getters['session/token'] !== token) {
    commit('session/setSessionToken', token) // Set token for request authorisation

    const session = {
      user: await getUser(),
      token
    }

    commit('session/setSession', session)
  }
}
