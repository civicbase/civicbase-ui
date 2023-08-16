import tw from 'twin.macro'

import Button from '@ui/Button'

import TextEditor from 'components/TextEditor'
import { useSurvey, useSurveyState } from 'contexts/survey'
import { convertFromRaw, EditorState } from 'draft-js'

const WelcomeMessage = () => {
  const surveyService = useSurvey()
  const { survey } = useSurveyState()

  if (!survey?.message?.welcome) {
    return null
  }

  const handleStart = () => {
    surveyService.send({ type: 'NEXT' })
  }

  const welcomeMessage = convertFromRaw(JSON.parse(survey.message.welcome))
  return (
    <div css={tw`py-16`}>
      <TextEditor
        value={EditorState.createWithContent(welcomeMessage)}
        onChange={() => {}}
        readOnly
        enableImage
      />
      <div css={tw`w-full flex justify-center mt-8`}>
        <Button onClick={handleStart}>Start</Button>
      </div>
    </div>
  )
}

export default WelcomeMessage
