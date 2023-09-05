import { Controller, useFormContext } from 'react-hook-form'

import tw from 'twin.macro'

import RadioButton from '@ui/Radio'
import Typography from '@ui/Typography/Typography'

import { RadioGroup } from '@headlessui/react'
import { Likert } from 'types/survey.d'

const Multiple = ({ question, questionIndex }: { question: Likert; questionIndex: number }) => {
  const { control } = useFormContext()

  return (
    <div tw="table w-full mt-16">
      <div tw="table-row">
        <div tw="table-cell" />
        {question.columns?.map(column => (
          <div tw="table-cell pb-8" key={column}>
            <Typography>{column}</Typography>
          </div>
        ))}
      </div>

      {question.rows?.map(row => (
        <div tw="table-row" key={row}>
          <div tw="table-cell flex-1">
            <Typography>{row}</Typography>
          </div>

          {question.columns?.map(column => (
            <div tw="table-cell" key={column}>
              <Controller
                rules={{ required: true }}
                control={control}
                name={`questions.${questionIndex}.row.${row}.vote`}
                render={({ field }) => (
                  <RadioGroup {...field} id={`questions.${questionIndex}.row.${row}.vote`}>
                    <div tw="flex flex-col">
                      <RadioGroup.Option
                        value={column}
                        id={`questions.${questionIndex}.row.${row}.vote`}
                      >
                        {({ ...props }) => (
                          <RadioButton {...props} onChange={() => {}} css={tw`mr-14`} />
                        )}
                      </RadioGroup.Option>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Multiple
