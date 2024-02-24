import { useFormContext } from 'react-hook-form'

import tw from 'twin.macro'

import Button from '@ui/Button'
import { Headline } from '@ui/Typography'

import Container from 'components/Container'
import DynamicBar from 'components/DynamicBar'
import TextEditor from 'components/TextEditor'
import Vote from 'components/Vote'
import { useDialog } from 'contexts/dialog'
import { useSurvey } from 'contexts/survey'
import { convertFromRaw, EditorState } from 'draft-js'
import useQuadratic from 'hooks/use-quadratic'
import { Visibility } from 'machines/dialogMachine'
import { Survey } from 'types/survey'

import FeedbackQuestions from '../../../FeedbackQuestions'

export const RadiusWithoutSubmit = ({ survey }: { survey: Survey }) => {
  const { questions, availableCredits, vote, canVote } = useQuadratic(survey)

  if (!survey.language) {
    return null // type checking
  }

  const {
    setup: { credits, feedback },
    language: { thumbsDown, thumbsUp, token, customToken = '' },
  } = survey

  return (
    <div>
      {credits && (
        <div css={tw`sticky z-50 top-4 bg-white mobile:px-3`}>
          <DynamicBar
            total={credits}
            availableCredits={availableCredits}
            language={token === 'Custom' ? customToken : token}
          />
        </div>
      )}

      <Container id="main">
        <div css={tw`flex flex-col items-center space-y-24 pt-20 pb-20 mobile:mx-3`}>
          {questions.map((question, index) => {
            return (
              <div key={question.id} css={tw`flex w-full flex-col`}>
                <Headline css={tw`mb-4 flex`}>
                  {index + 1}.&nbsp;
                  <TextEditor
                    value={EditorState.createWithContent(
                      convertFromRaw(JSON.parse(question.statement)),
                    )}
                    onChange={() => {}}
                    readOnly
                    enableImage
                  />
                </Headline>

                <div css={tw`flex justify-center mt-12`}>
                  <Vote
                    thumbsDown={thumbsDown}
                    thumbsUp={thumbsUp}
                    total={credits}
                    handleVote={(direction: number) => vote(index, direction)}
                    vote={question.vote}
                    creditSpent={question.credits}
                    canVoteUp={canVote(index, 1)}
                    canVoteDown={canVote(index, -1)}
                    token={token === 'Custom' ? customToken : token}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Container>

      {feedback?.active && (
        <Container id="feedback" css={tw`mobile:px-3`}>
          <FeedbackQuestions questions={feedback.questions} />
        </Container>
      )}
    </div>
  )
}

const Radius = ({ survey }: { survey: Survey }) => {
  const dialogService = useDialog()
  const { questions, availableCredits } = useQuadratic(survey)
  const { getValues } = useFormContext()
  const surveyService = useSurvey()

  if (!survey || !survey.language || !survey.setup?.credits) return null

  const {
    language: { token, customToken = '' },
  } = survey

  const handleSubmit = () => {
    const feedback = getValues('feedback')

    if (availableCredits !== 0) {
      dialogService.send({
        type: 'OPEN',
        title: 'Submit',
        content: `You have ${availableCredits} ${
          token === 'Custom' ? customToken : token
        } left, please confirm if you want to
          submit your answer anyway.`,
        visibility: Visibility.CONFIRMATION,
        callback: () =>
          surveyService.send({
            type: 'SUBMIT',
            values: {
              leftCredits: availableCredits,
              questions: questions.map(q => ({
                credits: q.credits,
                id: q.id,
                order: q.order,
                vote: q.vote,
              })),
              feedback: feedback?.map((f: { answer: string }, i: number) => ({
                ...f,
                id: `F${i}`,
              })),
            },
          }),
      })
    } else {
      surveyService.send({
        type: 'SUBMIT',
        values: {
          leftCredits: availableCredits,
          questions: questions.map(q => ({
            credits: q.credits,
            id: q.id,
            order: q.order,
            vote: q.vote,
          })),
          feedback: feedback?.map((f: { answer: string }, i: number) => ({ ...f, id: `F${i}` })),
        },
      })
    }
  }

  return (
    <div>
      <RadiusWithoutSubmit survey={survey} />

      <div css={tw`flex justify-center mt-32`}>
        <Button
          onClick={handleSubmit}
          disabled={false} // TODO: if available credits is equal the inital number of credits
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default Radius
