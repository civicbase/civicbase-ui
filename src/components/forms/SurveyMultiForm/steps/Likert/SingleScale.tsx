import { useFormContext, Controller } from 'react-hook-form'

import tw from 'twin.macro'

import Dropdown from '@ui/Dropdown'
import Input from '@ui/Input'
import Typography from '@ui/Typography/Typography'

const SingleScale = ({ index, isEditing }: { index: number; isEditing: boolean }) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext()

  const to = watch(`likert.${index}.to`)

  return (
    <>
      <div css={tw`flex items-center space-x-8 my-8`}>
        <Controller
          name={`likert.${index}.from`}
          control={control}
          render={({ field, fieldState }) => {
            return (
              <div css={tw`w-24`}>
                <Dropdown
                  disabled={isEditing}
                  options={[1]}
                  error={!!(errors?.setup as any)?.method}
                  modified={isEditing && fieldState.isDirty}
                  value={field.value}
                  onChange={field.onChange}
                />
              </div>
            )
          }}
        />
        <Typography>To</Typography>

        <Controller
          name={`likert.${index}.to`}
          control={control}
          render={({ field, fieldState }) => {
            return (
              <div css={tw`w-24`}>
                <Dropdown
                  disabled={isEditing}
                  options={[5, 6, 7, 8, 9, 10]}
                  error={!!(errors?.setup as any)?.method}
                  modified={isEditing && fieldState.isDirty}
                  value={field.value}
                  onChange={field.onChange}
                />
              </div>
            )
          }}
        />
      </div>

      <div css={tw`flex flex-col space-y-4`}>
        <Controller
          name={`likert.${index}.label1`}
          control={control}
          render={({ field }) => (
            <Input {...field} css={tw`w-1/2`} placeholder="1 Label (optional)" />
          )}
        />

        <Controller
          name={`likert.${index}.label2`}
          control={control}
          render={({ field }) => (
            <Input {...field} css={tw`w-1/2`} placeholder={`${to} Label (optional)`} />
          )}
        />
      </div>
    </>
  )
}

export default SingleScale
