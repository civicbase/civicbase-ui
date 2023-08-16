import { useFormContext, Controller } from 'react-hook-form'

import tw from 'twin.macro'

import Switch from '@ui/Switch'

const Features = () => {
  const { control } = useFormContext()

  return (
    <div>
      <div css={tw`grid grid-cols-1 gap-4`}>
        <Controller
          name="features.randomQuestions"
          control={control}
          render={({ field }) => (
            <Switch value={field.value} onChange={field.onChange}>
              Enable question randomization
            </Switch>
          )}
        />
        <Controller
          name="features.multipleAnswerFromSameSource"
          control={control}
          render={({ field }) => (
            <Switch value={field.value} onChange={field.onChange}>
              Respondents can answer survey more than once
            </Switch>
          )}
        />
      </div>
    </div>
  )
}

export default Features
