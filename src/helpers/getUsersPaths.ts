import { UserPath } from "../interfaces/users"



export const getUsersPaths = (): UserPath => {
  return {
    user: '/users',
    role: '/roles',
  }
}