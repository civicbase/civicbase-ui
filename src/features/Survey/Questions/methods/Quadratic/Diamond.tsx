import CountUp from 'react-countup'
import { useFormContext } from 'react-hook-form'

import Button from '@ui/Button'
import Typography from '@ui/Typography'

import TextEditor from 'components/TextEditor'
import { useDialog } from 'contexts/dialog'
import { useSurvey, useSurveyState } from 'contexts/survey'
import { EditorState, convertFromRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
import usePrevious from 'hooks/use-previos'
import { Visibility } from 'machines/dialogMachine'
import QuadraticVote, { useQuadraticVote } from 'quadratic-vote'
import { Survey } from 'types/survey.d'

export const DiamondWithoutSubmit = ({ survey }: { survey: Survey }) => {
  const { credits, availableCredits, questions, vote, reset } = useQuadraticVote()
  const previousAvailableCredits = usePrevious(availableCredits)

  const { token, thumbsDown, thumbsUp } = survey.language!

  return (
    <div tw="flex relative">
      <div id="pool" tw="sticky p-2 h-fit top-[70px]">
        <div tw="mb-3">
          <Typography>{token}</Typography>
          <Typography tw="font-bold text-lg">
            <CountUp
              start={previousAvailableCredits || credits}
              end={availableCredits}
              duration={0.5}
            />
          </Typography>
        </div>
        <QuadraticVote.Pool circleColor="#e1dfd0" />

        <Button
          type="button"
          variant="secondary"
          tw="mt-8"
          onClick={reset}
          disabled={availableCredits === credits}
        >
          Reset
        </Button>
      </div>

      <div id="container" tw="w-full flex flex-col justify-center items-center mb-32">
        {questions.map((q, i) => (
          <div
            key={q.id}
            tw="pt-5 mt-5 flex flex-col justify-center items-center [&:not(:first-child)]:border-t max-w-[600px] w-full"
          >
            <div tw="text-center my-6" style={{ maxWidth: 600 }}>
              <div>
                <Typography tw="mb-2">
                  {i + 1} / {questions.length}
                </Typography>
              </div>
              <TextEditor
                value={EditorState.createWithContent(convertFromRaw(JSON.parse(q.statement)))}
                onChange={() => {}}
                readOnly
                enableImage
              />
            </div>

            <QuadraticVote.Diamond
              id={q.id}
              neutralColor="#e1dfd0"
              positiveColor="#23C050"
              negativeColor="red"
            />
            <div tw="flex mt-6">
              <Button
                type="button"
                variant="secondary"
                style={{ marginRight: 10 }}
                onClick={() => vote(q.id, 1)}
                disabled={q.isDisabledUp}
              >
                {thumbsUp}
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => vote(q.id, -1)}
                disabled={q.isDisabledDown}
              >
                {thumbsDown}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Wrapper = ({ survey }: { survey: any }) => {
  const { availableCredits, questions } = useQuadraticVote()
  const surveyService = useSurvey()
  const { getValues } = useFormContext()
  const dialogService = useDialog()

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
              questions: questions.map(
                q =>
                  ({
                    credits: q.credits,
                    id: q.id,
                    order: q.order,
                    vote: q.vote,
                  } as any),
              ),
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
          questions: questions.map(
            q =>
              ({
                credits: q.credits,
                id: q.id,
                order: q.order,
                vote: q.vote,
              } as any),
          ),
          feedback: feedback?.map((f: { answer: string }, i: number) => ({ ...f, id: `F${i}` })),
        },
      })
    }
  }

  return (
    <>
      <DiamondWithoutSubmit survey={survey} />

      <div tw="flex justify-center mt-32">
        <Button onClick={handleSubmit} variant="primary">
          Submit
        </Button>
      </div>
    </>
  )
}

const WrapperProvider = () => {
  const { survey } = useSurveyState()

  if (!survey) {
    return null
  }

  const questions = survey.quadratic?.map((question, index) => ({
    ...question,
    id: index,
    questionId: question.id,
    vote: 0,
  }))

  return (
    <QuadraticVote.Provider credits={survey.setup.credits!} questions={questions!}>
      <Wrapper survey={survey} />
    </QuadraticVote.Provider>
  )
}

export default WrapperProvider
