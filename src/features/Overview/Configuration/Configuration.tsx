import { useParams } from 'react-router-dom'

import tw from 'twin.macro'

import Button from '@ui/Button'
import { Headline } from '@ui/Typography'

import { useSurveyState } from 'contexts/dashboard'
import { useDialog } from 'contexts/dialog'
import { Visibility, Variant } from 'machines/dialogMachine'

const Configuration = () => {
  const { surveyId } = useParams()
  const survey = useSurveyState(surveyId!!)
  const dialogService = useDialog()

  const handleDelete = () => {
    dialogService.send({
      type: 'OPEN',
      title: 'Delete survey',
      content: `Are you sure you want to delete "${survey?.setup.topic}" survey? This action cannot be undone.`,
      visibility: Visibility.WARNING,
      variant: Variant.DANGER,
      callback: () => {
        // TODO: delete survey
      },
    })
  }

  return (
    <div css={tw`space-y-10`}>
      {/* TODO: {false && (
        <div>
          <Headline>General</Headline>
          <div css={tw`p-4`}>
            <Switch value={publishOverview} onChange={e => setPublish(e)}>
              Publish overview
            </Switch>
          </div>
        </div>
      )} */}

      <div>
        <Headline>Danger Zone</Headline>
        <div css={tw`p-4`}>
          <Button variant="danger" onClick={handleDelete}>
            Delete this survey
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Configuration
