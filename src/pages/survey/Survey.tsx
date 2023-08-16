import { FormProvider, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { useActor, useInterpret } from '@xstate/react'
import { SurveyProvider, useSurvey } from 'contexts/survey'
import * as Survey from 'features/Survey'
import { surveyMachine } from 'machines'

// TODO:
type Form = {
  feedback?: {
    answer: string
    id: string
  }[]
}

const SurveyPage = () => {
  const surveyService = useSurvey()
  const [state] = useActor(surveyService)
  const methods = useForm<Form>()

  if (state.context.isLoading) {
    return <Survey.Loading />
  }

  return (
    <FormProvider {...methods}>
      {state.matches('notAvailable') && <Survey.NotAvailable />}
      {state.matches('alreadyTaken') && <Survey.AlreadyTaken />}
      {state.matches('welcome') && <Survey.WelcomeMessage />}
      {state.matches('questions') && <Survey.Questions />}
      {state.matches('finalWithMessage') && <Survey.CompletionMessage />}
      {state.matches('final') && <Survey.Final />}
      {state.matches('error') && <Survey.Error />}
    </FormProvider>
  )
}

const Wrapper = () => {
  const { surveyId } = useParams()
  const surveyService = useInterpret(surveyMachine, { context: { surveyId: surveyId!! } })

  return (
    <SurveyProvider value={surveyService}>
      <SurveyPage />
    </SurveyProvider>
  )
}

export default Wrapper
