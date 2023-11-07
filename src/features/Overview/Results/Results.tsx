import { useParams } from 'react-router-dom'

import tw from 'twin.macro'

import { useSurveyState } from 'contexts/dashboard'
import { Method } from 'types/survey.d'

import { Results as ConjointResultTable } from '../Conjoint'
import Feedback from '../Feedback'
import { Results as LikertResultTable } from '../Likert'
import { Results as QuadraticResultTable } from '../Quadratic'

const Results = () => {
  const { surveyId } = useParams()
  const survey = useSurveyState(surveyId!!)

  if (!survey || !surveyId) return null // type checking

  return (
    <>
      {survey.setup.method === Method.QUADRATIC && <QuadraticResultTable id={surveyId} />}
      {survey.setup.method === Method.LIKERT && <LikertResultTable id={surveyId} />}
      {survey.setup.method === Method.CONJOINT && <ConjointResultTable />}

      {survey.setup.feedback?.active && (
        <div css={tw`mt-10`}>
          <Feedback id={surveyId} />
        </div>
      )}
    </>
  )
}

export default Results
