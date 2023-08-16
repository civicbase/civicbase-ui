import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import tw from 'twin.macro'

import { useActor } from '@xstate/react'
import AddButton from 'components/AddButton'
import SurveyCard, { EmptyCard, Skeleton } from 'components/SurveyCard'
import { useDashboard, useSurveys } from 'contexts/dashboard'
import SurveyBar from 'features/SurveyBar'
import { Survey } from 'types/survey.d'

const Dashboard = () => {
  const dashboardService = useDashboard()
  const [search, setSearch] = useState('')
  const [state] = useActor(dashboardService)
  const surveys = useSurveys()
  const navigate = useNavigate()

  const handleGoToSurvryForm = () => {
    navigate(`/surveyForm`)
  }

  const handleSearch = (term: string) => {
    setSearch(term)
  }

  return (
    <>
      {surveys.length > 10 && (
        <div tw="mx-4">
          <SurveyBar onSearch={handleSearch} />
        </div>
      )}

      <div css={tw`grid mobile:grid-cols-1 tablet:grid-cols-2 grid-cols-3 gap-8 py-8 mx-4 pb-36`}>
        <AddButton onClick={handleGoToSurvryForm} disabled={state.context.isBusy}>
          + Create Survey
        </AddButton>

        {(state.context.isCloning || state.context.isCreating) && <EmptyCard key="empty" />}

        {surveys
          ?.filter(s => s.setup.topic.toLowerCase().includes(search.toLowerCase()))
          .map((survey: Survey) => (
            <SurveyCard id={survey.id} key={survey.id} />
          ))}

        {state.matches('fetching') && [1, 2, 3, 4, 5].map(k => <Skeleton key={k} />)}
      </div>
    </>
  )
}

export default Dashboard
