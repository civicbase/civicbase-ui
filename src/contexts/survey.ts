import { createContext, useContext } from 'react'

import { useSelector } from '@xstate/react'
import { surveyMachine } from 'machines'
import { Context } from 'machines/surveyMachine'
import { InterpreterFrom } from 'xstate'

const surveyContext = createContext<InterpreterFrom<typeof surveyMachine> | null>(null)

export function useSurvey() {
  const context = useContext(surveyContext)
  if (!context) {
    throw new Error(`useSurvey must be called inside a SurveyProvider`)
  }
  return context
}
export const SurveyProvider = surveyContext.Provider

export const useSurveyState = (): Context => {
  return useSelector(useSurvey(), state => state.context)
}
