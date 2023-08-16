import { useParams } from 'react-router-dom'

import Container from 'components/Container'
import { useSurveyOverview } from 'contexts/Overview'
import { useSurveyState } from 'contexts/dashboard'

import Status from '../Status'

const Analytics = () => {
  const { surveyId } = useParams()
  const survey = useSurveyState(surveyId!!)
  const overview = useSurveyOverview()

  if (!survey || !overview) return null // type checking

  const getRate = (totalRespondent?: number, totalAccess?: number) => {
    if (!totalRespondent || !totalAccess || totalAccess === 0) {
      return 0
    }

    return Math.trunc((totalRespondent * 100) / totalAccess)
  }

  const totalRespondent = overview.respondent && overview.respondent[survey.mode]
  const totalAccess = overview.access && overview.access[survey.mode]
  const rate = getRate(totalRespondent, totalAccess)

  return (
    <Container>
      <Status
        totalRespondent={totalRespondent}
        status={survey.mode}
        totalAccess={totalAccess}
        rate={rate}
      />
    </Container>
  )
}

export default Analytics
