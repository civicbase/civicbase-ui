import { FormProvider, useFormContext } from 'react-hook-form'

import { ConjointWithoutSubmit } from 'features/Survey/Questions/methods/Conjoint'
import { LikertWithoutSubmit } from 'features/Survey/Questions/methods/Likert'
import {
  RadiusWithoutSubmit,
  DiamondWithoutSubmit,
} from 'features/Survey/Questions/methods/Quadratic'
import QuadraticVote from 'quadratic-vote'
import { QuadraticPreference } from 'types/survey.d'

import transform from '../../transform'

function Review() {
  const methods = useFormContext()

  const method = methods.watch('setup.method')
  const methodPreference = methods.watch('setup.methodPreference')
  const rawSurvey: any = methods.watch()
  const survey: any = transform(rawSurvey)
  survey.mode = 'pilot'

  //   TODO: should verify if the survey is valid and display a message in case the survey is not valid to indicate to the user that he needs to have some fields filled in

  if (method === 'Quadratic') {
    if (methodPreference === QuadraticPreference.DIAMOND) {
      const questions = survey.quadratic?.map((question: any, index: any) => ({
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
        <RadiusWithoutSubmit survey={survey} />
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

  return (
    <div>
      <h2>Review</h2>
    </div>
  )
}

export default Review
