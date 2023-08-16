import { useParams } from 'react-router-dom'

import tw from 'twin.macro'

import { useActor, useInterpret } from '@xstate/react'
import Loader from 'components/Loader'
import { OverviewProvider, useOverview } from 'contexts/Overview'
import { Header, Tab } from 'features/Overview'
import overviewMachine from 'machines/overviewMachine'

const Overview = () => {
  const overviewService = useOverview()
  const [state] = useActor(overviewService)

  if (state.context.isBusy) {
    return <Loader />
  }

  return (
    <div css={tw`container mx-auto h-full w-full flex flex-col`}>
      <Header />
      <Tab />
    </div>
  )
}

const Wrapper = () => {
  const { surveyId } = useParams()

  const overviewService = useInterpret(overviewMachine, {
    context: { surveyId },
  })

  return (
    <OverviewProvider value={overviewService}>
      <Overview />
    </OverviewProvider>
  )
}

export default Wrapper
