import { SharedPaths } from "../interfaces/shared"



export const getSharedPaths = (): SharedPaths => {
  return {
    state: '/states',
    role: '/roles',
  }
}