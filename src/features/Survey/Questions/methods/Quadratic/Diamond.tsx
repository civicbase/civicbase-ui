import tw from 'twin.macro'

import Container from 'components/Container'
import { Pool, Diamond } from 'components/Diamond'
import { useSurveyState } from 'contexts/survey'
import { Editor, EditorState, convertFromRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
import useQuadraticAnimated from 'hooks/use-quadratic-animated'
import { Survey } from 'types/survey.d'

export const DiamondWithoutSubmit = ({ survey }: { survey: Survey }) => {
  const { canVote, vote, reset, questions, availableCredits } = useQuadraticAnimated(survey)

  return (
    <div css={tw`relative overflow-y-hidden`}>
      <Container css={tw`pt-20 flex`}>
        <Pool availableCredits={availableCredits} reset={reset} />

        <div css={tw`flex flex-col flex-1 items-center space-y-16`}>
          {questions.map((question, index) => {
            return (
              <div key={question.id}>
                <Editor
                  editorState={EditorState.createWithContent(
                    convertFromRaw(JSON.parse(question.statement)),
                  )}
                  onChange={() => {}}
                  readOnly
                />

                <Diamond
                  index={question.id}
                  vote={v => vote(index, v)}
                  canVote={v => canVote(index, v)}
                  array={[]}
                />
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

const Wrapper = () => {
  const { survey } = useSurveyState()

  if (!survey) {
    return null
  }

  return <DiamondWithoutSubmit survey={survey} />
}

export default Wrapper
