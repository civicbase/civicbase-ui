import { useMemo } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { useActor } from '@xstate/react'
import SurveyMultiForm, { validationSchema, transform } from 'components/forms/SurveyMultiForm'
import { useDashboard } from 'contexts/dashboard'
import { SurveyForm as SurveyFormProps } from 'types/forms'
import { Survey } from 'types/survey.d'
import getSurveyFormDefaultValues from 'utilities/getSurveyFormDefaultValues'

const SurveyForm = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const survey = location.state as Survey
  const dashboardService = useDashboard()
  const [state, send] = useActor(dashboardService)

  const methods = useForm<SurveyFormProps>({
    defaultValues: useMemo(() => getSurveyFormDefaultValues(survey), [survey]),
    resolver: zodResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<SurveyFormProps> = values => {
    const transformedSurvey = transform(values as SurveyFormProps)
    navigate('/')

    if (survey?.id) {
      send({
        type: 'UPDATE',
        survey: { ...survey, ...transformedSurvey, id: survey.id },
        surveyId: survey.id,
      })
    } else {
      send({ type: 'CREATE', survey: transformedSurvey })
    }
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <SurveyMultiForm survey={survey} isLoading={state.context.isBusy} />
      </form>
    </FormProvider>
  )
}

export default SurveyForm
