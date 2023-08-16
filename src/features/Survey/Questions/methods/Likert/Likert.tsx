import { Controller, FormProvider, useForm, useFormContext } from 'react-hook-form'

import tw from 'twin.macro'

import Button from '@ui/Button'
import RadioButton from '@ui/Radio'
import Typography, { Headline } from '@ui/Typography'

import { RadioGroup } from '@headlessui/react'
import TextEditor from 'components/TextEditor'
import { useSurvey, useSurveyState } from 'contexts/survey'
import { convertFromRaw, EditorState } from 'draft-js'
import { Likert, Survey } from 'types/survey.d'
import shuffle from 'utilities/shuffle'

import FeedbackQuestions from '../../../FeedbackQuestions'

export const LikertWithoutSubmit = ({ survey }: { survey: Survey }) => {
  const { control } = useFormContext()

  const {
    setup: { feedback },
  } = survey

  if (!survey.likert) return null

  const questions: Likert[] = survey.features?.randomQuestions
    ? shuffle(survey.likert)
    : survey.likert

  return (
    <>
      {questions.map((question, questionIndex) => (
        <div key={question.id} css={tw`mb-32`}>
          <Headline css={tw`mb-4 flex`}>
            {questionIndex + 1}.&nbsp;
            <TextEditor
              value={EditorState.createWithContent(convertFromRaw(JSON.parse(question.statement)))}
              onChange={() => {}}
              readOnly
              enableImage
            />
          </Headline>

          <div css={tw`grid grid-cols-2 gap-4 border-b-2`}>
            <div css={tw`col-span-1`} />
            <div css={tw`flex space-x-16 mb-2`}>
              {[1, 2, 3, 4, 5].map(item => (
                <Typography key={item}>{item}</Typography>
              ))}
            </div>
          </div>

          {question.items.map((item, itemIndex) => (
            <div css={tw`grid grid-cols-2 gap-4 mt-2 mb-6`} key={item.description}>
              <div>
                <Typography>{item.description}</Typography>
              </div>
              <Controller
                rules={{ required: true }}
                control={control}
                name={`questions.${questionIndex}.item.${itemIndex}.vote` as any}
                render={({ field }) => (
                  <RadioGroup {...field} id={`questions.${questionIndex}.item.${itemIndex}.vote`}>
                    <RadioGroup.Option value={1}>
                      {({ ...props }) => (
                        <RadioButton {...props} onChange={() => {}} css={tw`mr-14`} />
                      )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value={2}>
                      {({ ...props }) => (
                        <RadioButton {...props} onChange={() => {}} css={tw`mr-14`} />
                      )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value={3}>
                      {({ ...props }) => (
                        <RadioButton {...props} onChange={() => {}} css={tw`mr-14`} />
                      )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value={4}>
                      {({ ...props }) => (
                        <RadioButton {...props} onChange={() => {}} css={tw`mr-14`} />
                      )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value={5}>
                      {({ ...props }) => (
                        <RadioButton {...props} onChange={() => {}} css={tw`mr-14`} />
                      )}
                    </RadioGroup.Option>
                  </RadioGroup>
                )}
              />
            </div>
          ))}
        </div>
      ))}

      {feedback?.active && <FeedbackQuestions questions={feedback.questions} />}
    </>
  )
}

const LikertPage = () => {
  const methods = useForm<any>()
  const { survey } = useSurveyState()
  const surveyService = useSurvey()

  const handleSubmit = ({ questions, feedback }: { questions: any; feedback: any }) => {
    surveyService.send({
      type: 'SUBMIT',
      values: {
        questions,
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
        <LikertWithoutSubmit survey={survey} />

        <div css={tw`flex justify-center`}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default LikertPage
