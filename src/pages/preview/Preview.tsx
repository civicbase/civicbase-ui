import { FormProvider, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { useSurveyState } from 'contexts/dashboard'
import { ConjointWithoutSubmit } from 'features/Survey/Questions/methods/Conjoint'
import { LikertWithoutSubmit } from 'features/Survey/Questions/methods/Likert'
import {
  RadiusWithoutSubmit,
  DiamondWithoutSubmit,
} from 'features/Survey/Questions/methods/Quadratic'
import { QuadraticPreference } from 'types/survey.d'

const Preview = () => {
  const { surveyId } = useParams()
  const survey = useSurveyState(surveyId!!)
  const methods = useForm()

  if (!survey) {
    return null
  }

  const { method, methodPreference } = survey.setup

  if (method === 'Quadratic') {
    return methodPreference === QuadraticPreference.DIAMOND ? (
      <DiamondWithoutSubmit survey={survey} />
    ) : (
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

  return <div>preview</div>
}

export default Preview
