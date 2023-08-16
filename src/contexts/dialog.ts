import { createContext, useContext } from 'react'

import { useSelector } from '@xstate/react'
import { dialogMachine } from 'machines'
import { InterpreterFrom } from 'xstate'

const dialogContext = createContext<InterpreterFrom<typeof dialogMachine> | null>(null)

export function useDialog() {
  const context = useContext(dialogContext)
  if (!context) {
    throw new Error(`useDialog must be called inside a DialogProvider`)
  }
  return context
}
export const DialogProvider = dialogContext.Provider

export const useDialogState = () => {
  return useSelector(useDialog(), state => state.context)
}
