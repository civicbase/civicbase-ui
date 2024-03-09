import { FormProvider, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { useSurveyState } from 'contexts/dashboard'
import { ConjointWithoutSubmit } from 'features/Survey/Questions/methods/Conjoint'
import { LikertWithoutSubmit } from 'features/Survey/Questions/methods/Likert'
import {
  RadiusWithoutSubmit,
  DiamondWithoutSubmit,
} from 'features/Survey/Questions/methods/Quadratic'
import useQuadratic from 'hooks/use-quadratic'
import QuadraticVote from 'quadratic-vote'
import { QuadraticPreference } from 'types/survey.d'

const Preview = () => {
  const { surveyId } = useParams()
  const survey = useSurveyState(surveyId!!)
  const methods = useForm()
  const { questions, availableCredits, vote, canVote } = useQuadratic(survey!)

  if (!survey) {
    return null
  }

  const { method, methodPreference } = survey.setup

  if (method === 'Quadratic') {
    if (methodPreference === QuadraticPreference.DIAMOND) {
      const questions = survey.quadratic?.map((question, index) => ({
        ...question,
        id: index,
        questionId: question.id,
        vote: 0,
      }))

      return (
        <QuadraticVote.Provider credits={survey.setup.credits!} questions={questions!}>
          <DiamondWithoutSubmit survey={survey} />
        </QuadraticVote.Provider>
      )
    }

    return (
      <FormProvider {...methods}>
        <RadiusWithoutSubmit
          survey={survey}
          questions={questions as any}
          availableCredits={availableCredits}
          vote={vote}
          canVote={canVote}
        />
      </FormProvider>
    )
  }

  if (method === 'Conjoint') {
    return (
      <FormProvider {...methods}>
        <ConjointWithoutSubmit survey={survey} />
      </FormProvider>
    )
  }

  if (method === 'Likert') {
    return (
      <FormProvider {...methods}>
        <LikertWithoutSubmit survey={survey} />
      </FormProvider>
    )
  }

  return <div>preview</div>
}

export default Preview
