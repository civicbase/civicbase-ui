import { useEffect } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { AiFillCheckCircle } from 'react-icons/ai'

import tw, { theme } from 'twin.macro'

import Button from '@ui/Button'
import Typography, { Headline } from '@ui/Typography'

import Card from 'components/Card'
import TextEditor from 'components/TextEditor'
import { useSurvey, useSurveyState } from 'contexts/survey'
import { EditorState, convertFromRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
import useConjoint from 'hooks/use-conjoint'
import { ConjointItems } from 'types/survey-base'
import { Survey } from 'types/survey.d'

import FeedbackQuestions from '../../../FeedbackQuestions'

export const ConjointWithoutSubmit = ({ survey }: { survey: Survey }) => {
  const { setValue } = useFormContext()

  const { questions, vote } = useConjoint(survey)

  const {
    setup: { feedback },
  } = survey

  const handleSelect = (questionIndex: number, id: string) => {
    vote(questionIndex, id)
  }

  useEffect(() => {
    if (questions) {
      setValue('questions', questions)
    }
  }, [questions, setValue])

  return (
    <>
      {questions.map((question, index) => (
        <div css={tw`grid grid-cols-5 gap-4 mb-24`} key={question.statement}>
          <div css={tw`mt-20`}>
            {question.attributes.map(attr => (
              <Typography css={tw`mb-6 text-right`} key={attr.key}>
                {attr.name}
              </Typography>
            ))}
          </div>

          <div css={tw`col-span-4`}>
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

            <div css={tw`grid grid-cols-3 gap-4`}>
              {question.items.map((item: ConjointItems) => (
                <Card
                  key={item.id}
                  css={[
                    tw`mt-4 hover:(ring-brand2 ring-inset ring-2 cursor-pointer) relative`,
                    question.selected === item.id && tw`ring-brand2 ring-inset ring-2 border-none`,
                  ]}
                  onClick={() => handleSelect(index, item.id)}
                >
                  {question.selected === item.id && (
                    <AiFillCheckCircle
                      size={24}
                      color={theme`colors.brand2`}
                      css={[
                        tw`absolute right-4 top-4 opacity-100`,
                        tw`transition-all ease-in-out duration-1000`,
                      ]}
                    />
                  )}

                  {Object.values(item).map((a, index: number) => (
                    <Typography
                      key={item[`attibute${index}`]}
                      css={[tw`mb-6 last:mb-0 text-center`, index === 0 && tw`font-bold`]}
                    >
                      {item[`attribute${index}`]}
                    </Typography>
                  ))}
                </Card>
              ))}
            </div>
          </div>
        </div>
      ))}

      {feedback?.active && <FeedbackQuestions questions={feedback.questions} />}
    </>
  )
}

const ConjointPage = () => {
  const methods = useForm<any>()
  const { survey } = useSurveyState()
  const surveyService = useSurvey()

  const handleSubmit = ({ questions, feedback }: { questions: any; feedback: any }) => {
    surveyService.send({
      type: 'SUBMIT',
      values: {
        questions: questions.map((q: any) => ({ selected: q.selected })),
        feedback: feedback?.map((f: { answer: string }, i: number) => ({ ...f, id: `F${i}` })),
      },
    })
  }

  if (!survey) {
    return null
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <ConjointWithoutSubmit survey={survey} />

        <div css={tw`flex justify-center`}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default ConjointPage
