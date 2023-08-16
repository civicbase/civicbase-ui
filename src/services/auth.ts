import { LoginRequest, SignupRequest, ResetRequest } from 'types/request.d'
import { LoginReponse, SignupResponse } from 'types/response.d'
import { CivicbaseUser } from 'types/user'
import storage from 'utilities/storage'

import client from './api'

export const signup = ({ name, email, password }: SignupRequest): Promise<SignupResponse> =>
  client('signup', { body: { name, email, password } })

export const getUser = (): Promise<{ user: undefined | CivicbaseUser }> => {
  if (storage.hasToken()) {
    return client('userProfile')
  }

  return Promise.reject()
}

export const login = ({ email, password }: LoginRequest): Promise<LoginReponse> =>
  client('login', { body: { email, password } })

export const logout = () => client('logout')

export const reset = ({ email }: ResetRequest) => client('resetPassword', { body: { email } })
