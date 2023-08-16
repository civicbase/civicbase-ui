import { createContext, useContext } from 'react'

import { loginMachine } from 'machines'
import { InterpreterFrom } from 'xstate'

const loginContext = createContext<InterpreterFrom<typeof loginMachine> | null>(null)

export function useLogin() {
  const context = useContext(loginContext)
  if (!context) {
    throw new Error(`useLogin must be called inside a LoginProvider`)
  }
  return context
}
export const LoginProvider = loginContext.Provider
