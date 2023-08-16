import { useSurveyState } from 'contexts/survey'
import { Method, QuadraticPreference } from 'types/survey.d'

import * as Methods from './methods'

const Questions = () => {
  const { survey } = useSurveyState()

  if (!survey) return null

  switch (survey.setup.method) {
    case Method.QUADRATIC:
      if (survey.setup.methodPreference === QuadraticPreference.DIAMOND) {
        return <Methods.Quadratic.Diamond />
      }

      return <Methods.Quadratic.Radius survey={survey} />
    case Method.LIKERT:
      return <Methods.Likert />
    case Method.CONJOINT:
      return <Methods.Conjoint />
    default:
      return <div>Error</div>
  }
}

export default Questions
