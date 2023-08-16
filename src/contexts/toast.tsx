import { createContext, useContext } from 'react'

import { useSelector } from '@xstate/react'
import { toastMachine } from 'machines'
import { InterpreterFrom } from 'xstate'

const toastContext = createContext<InterpreterFrom<typeof toastMachine> | null>(null)

export function useToast() {
  const context = useContext(toastContext)
  if (!context) {
    throw new Error(`useToast must be called inside a ToastProvider`)
  }
  return context
}
export const ToastProvider = toastContext.Provider

export const useToastState = () => {
  return useSelector(useToast(), state => state.context)
}
