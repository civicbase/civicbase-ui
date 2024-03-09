import { useFormContext, Controller } from 'react-hook-form'

import tw from 'twin.macro'

import Dropdown from '@ui/Dropdown'
import FieldErrorMessage from '@ui/FieldErrorMessage'
import Input from '@ui/Input'
import Label from '@ui/Label'

const Language = () => {
  const languages = ['Agree/Disagree', 'Favor/Oppose', 'Approve/Reject', 'Aye/Nay', 'Custom']
  const tokens = ['Credits', 'Coins', 'Tokens', 'Custom']

  const {
    register,
    getValues,
    control,
    formState: { errors },
    watch,
  } = useFormContext()

  const isCustomJargon = watch('language.jargon') === 'Custom'
  const isCustomToken = watch('language.token') === 'Custom'
  const isEditing = getValues('isEditing')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label>Preferred Language *</Label>
        <Controller
          name="language.jargon"
          control={control}
          render={({ field, fieldState }) => (
            <Dropdown
              options={languages}
              value={field.value}
              onChange={(e: any) => field.onChange(e)}
              placeholder="Select preferred language"
              modified={isEditing && fieldState.isDirty}
              error={(errors?.language as any)?.jargon}
            />
          )}
        />
        <FieldErrorMessage name="language.jargon" errors={errors} />
      </div>

      {isCustomJargon && (
        <div css={tw`grid grid-cols-2 gap-8`}>
          <div>
            <Label>Agree *</Label>
            <Input
              {...register('language.thumbsUp', { required: isCustomJargon })}
              error={!!(errors.language as any)?.thumbsUp}
            />
            <FieldErrorMessage name="language.thumbsUp" errors={errors} />
          </div>

          <div>
            <Label>Disagree *</Label>
            <Input
              {...register('language.thumbsDown', { required: isCustomJargon })}
              error={!!(errors.language as any)?.thumbsDown}
            />
            <FieldErrorMessage name="language.thumbsDown" errors={errors} />
          </div>
        </div>
      )}

      <div>
        <Label>Preferred Token *</Label>
        <Controller
          name="language.token"
          control={control}
          render={({ field, fieldState }) => (
            <Dropdown
              options={tokens}
              value={field.value}
              onChange={field.onChange}
              placeholder="Select preferred token"
              error={(errors?.language as any)?.token}
              modified={isEditing && fieldState.isDirty}
            />
          )}
        />
        <FieldErrorMessage name="language.token" errors={errors} />
      </div>

      {isCustomToken && (
        <div>
          <Label>Custom Token Language *</Label>
          <Input
            {...register('language.customToken', { required: isCustomToken })}
            error={!!(errors.language as any as any)?.customToken}
          />
          <FieldErrorMessage name="language.customToken" errors={errors} />
        </div>
      )}
    </div>
  )
}

export default Language
