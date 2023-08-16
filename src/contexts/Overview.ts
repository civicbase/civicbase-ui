import { createContext, useContext } from 'react'

import { useSelector } from '@xstate/react'
import { overviewMachine } from 'machines'
import { InterpreterFrom } from 'xstate'

const overviewContext = createContext<InterpreterFrom<typeof overviewMachine> | null>(null)

export function useOverview() {
  const context = useContext(overviewContext)
  if (!context) {
    throw new Error(`useOverview must be called inside a OverviewProvider`)
  }
  return context
}
export const OverviewProvider = overviewContext.Provider

export const useSurveyOverview = () => {
  return useSelector(useOverview(), state => state.context.overview)
}
