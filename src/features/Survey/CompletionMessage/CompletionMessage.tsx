import tw from 'twin.macro'

import TextEditor from 'components/TextEditor'
import { useSurveyState } from 'contexts/survey'
import { convertFromRaw, EditorState } from 'draft-js'

const CompletionMessage = () => {
  const { survey } = useSurveyState()

  if (!survey?.message?.completion) {
    return null
  }

  const completionMessage = convertFromRaw(JSON.parse(survey.message.completion))
  return (
    <div css={tw`py-16`}>
      <TextEditor
        value={EditorState.createWithContent(completionMessage)}
        onChange={() => {}}
        readOnly
        enableImage
      />
    </div>
  )
}

export default CompletionMessage
