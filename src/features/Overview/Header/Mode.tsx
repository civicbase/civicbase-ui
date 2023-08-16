import tw from 'twin.macro'

import Tooltip from 'components/Tooltip'
import { useDashboard } from 'contexts/dashboard'
import { Mode, Status, Survey } from 'types/survey.d'

const ModeToggler = ({ survey }: { survey: Survey }) => {
  const dashboardService = useDashboard()

  const handleMode = (mode: Mode) => {
    dashboardService.send({ type: 'TOGGLE_MODE', surveyId: survey.id, mode })
  }

  return (
    <Tooltip label="Mode based on survey's status" popperProps={{ delayShow: 2000 }}>
      <div css={tw`rounded-md shadow-sm`} style={{ height: 'fit-content' }} role="group">
        <button
          type="button"
          css={[
            tw`py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100  focus:(outline-none ring-2 ring-red-300 border-red-300 z-10)`,
            survey.mode === Mode.PILOT && tw`bg-brand2! text-white hover:(opacity-90 bg-brand2!)`,
          ]}
          onClick={() => handleMode(Mode.PILOT)}
        >
          Pilot
        </button>

        <button
          type="button"
          css={[
            tw`py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100  focus:(outline-none ring-2 ring-red-300 border-red-300 z-10)`,
            survey.mode === Mode.PUBLISHED &&
              tw`bg-brand2! text-white hover:(opacity-90 bg-brand2!)`,
            survey.status === Status.PILOT &&
              tw`disabled:(bg-gray-200 hover:bg-gray-200 focus:bg-gray-200)`,
          ]}
          disabled={survey.status === Status.PILOT}
          onClick={() => handleMode(Mode.PUBLISHED)}
        >
          Published
        </button>
      </div>
    </Tooltip>
  )
}

export default ModeToggler
