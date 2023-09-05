import { useEffect } from 'react'
import { Controller, useFormContext, useWatch } from 'react-hook-form'

import tw from 'twin.macro'

import Dropdown from '@ui/Dropdown'
import FieldErrorMessage from '@ui/FieldErrorMessage'
import Input from '@ui/Input'
import Label from '@ui/Label'
import Switch from '@ui/Switch'
import Typography from '@ui/Typography'

import { Diamond, Radius } from 'components/Methods'
import { Methods } from 'types/survey-base'
import { Method } from 'types/survey.d'

import FeedbackQuestions from './FeedbackQuestions'

const Setup = () => {
  const {
    setValue,
    getValues,
    register,
    control,
    formState: { errors, dirtyFields },
  } = useFormContext()

  const isEditing = getValues('isEditing')
  const isActive = useWatch({ name: 'setup.feedback.active' })
  const method = useWatch({ name: 'setup.method' })
  const credits = useWatch({ name: 'setup.credits' })
  const methods: Methods[] = ['Quadratic', 'Likert'] // conjoint is not supported yet

  useEffect(() => {
    if (method !== Method.QUADRATIC) {
      setValue('language', null)
    }
  }, [method, setValue])

  return (
    <>
      <Label>Topic *</Label>
      <Input
        {...register('setup.topic', { required: true })}
        error={!!(errors.setup as any)?.topic}
        modified={isEditing && !!dirtyFields?.setup?.topic}
      />
      <FieldErrorMessage name="setup.topic" errors={errors} />

      <div css={tw`grid grid-cols-2 gap-8 my-4`}>
        <div>
          <Label>Survey Method *</Label>
          <Controller
            name="setup.method"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <Dropdown
                  disabled={isEditing}
                  placeholder="Select a survey method"
                  options={methods}
                  error={!!(errors?.setup as any)?.method}
                  modified={isEditing && fieldState.isDirty}
                  value={field.value}
                  onChange={field.onChange}
                />
              )
            }}
          />
          <FieldErrorMessage name="setup.method" errors={errors} />
        </div>

        <div>
          {method === Method.QUADRATIC && (
            <>
              <Label>Total number of credits *</Label>
              <Input
                {...register('setup.credits', { valueAsNumber: true })}
                type="number"
                step={1}
                error={!!(errors.setup as any)?.credits}
                modified={isEditing && !!dirtyFields?.setup?.credits}
              />
              <FieldErrorMessage name="setup.credits" errors={errors} />
            </>
          )}
        </div>

        {method === Method.QUADRATIC && credits === 100 && (
          <div css={tw`col-span-2`}>
            <Label>Select survey style *</Label>
            <div css={tw`grid grid-cols-2 gap-8 my-4`}>
              <Diamond />
              <Radius />
            </div>
          </div>
        )}

        <div css={tw`col-span-2`}>
          <Controller
            name="setup.feedback.active"
            control={control}
            render={({ field }) => (
              <Switch value={field.value} onChange={field.onChange}>
                <div css={tw`flex flex-col h-11`}>
                  <Typography>Enable respondent feedback</Typography>
                  <FieldErrorMessage name="setup.feedback" errors={errors} css={tw`ml-0`} />
                </div>
              </Switch>
            )}
          />
        </div>
      </div>

      {isActive && <FeedbackQuestions />}
    </>
  )
}

export default Setup
