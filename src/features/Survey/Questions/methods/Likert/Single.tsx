import { Controller, useFormContext } from 'react-hook-form'

import tw from 'twin.macro'

import RadioButton from '@ui/Radio'
import Typography from '@ui/Typography/Typography'

import { RadioGroup } from '@headlessui/react'
import { Likert } from 'types/survey.d'

const Single = ({ question, questionIndex }: { question: Likert; questionIndex: number }) => {
  const { control } = useFormContext()

  return (
    <div tw="flex items-center justify-center mt-24">
      <Typography tw="mr-4">{question.label1 ?? 'Disagree'}</Typography>
      <Controller
        rules={{ required: true }}
        control={control}
        name={`questions.${questionIndex}.vote`}
        render={({ field }) => (
          <RadioGroup {...field} id={`questions.${questionIndex}.vote`} tw="flex ml-14 mr-6">
            {new Array(question.to)
              .fill(null)
              .map((_, i) => i)
              .map((item, index) => {
                return (
                  <div key={item} tw="flex flex-col">
                    <RadioGroup.Label tw="mb-4" htmlFor={`${item}`}>
                      {index + 1}
                    </RadioGroup.Label>
                    <RadioGroup.Option value={index + 1} id={`${item}`}>
                      {({ ...props }) => (
                        <RadioButton {...props} onChange={() => {}} css={tw`mr-14`} />
                      )}
                    </RadioGroup.Option>
                  </div>
                )
              })}
          </RadioGroup>
        )}
      />
      <Typography>{question.label2 ?? 'Agree'}</Typography>
    </div>
  )
}

export default Single
