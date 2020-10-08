import { $http } from './http.service'
import { User } from './user.interface'

export async function getUser (): Promise<User> {
  return await $http.get('user/me')
}
