import { createContext, useContext } from 'react'

import { useSelector } from '@xstate/react'
import { authMachine } from 'machines'
import { InterpreterFrom } from 'xstate'

const authContext = createContext<InterpreterFrom<typeof authMachine> | null>(null)

export function useAuth() {
  const context = useContext(authContext)
  if (!context) {
    throw new Error(`useAuth must be called inside a AuthProvider`)
  }
  return context
}
export const AuthProvider = authContext.Provider

export const useAuthState = () => {
  return useSelector(useAuth(), state => state.context)
}

export const useIsLogingOut = () => {
  return useSelector(useAuth(), state => state.context.isLogginOut)
}
