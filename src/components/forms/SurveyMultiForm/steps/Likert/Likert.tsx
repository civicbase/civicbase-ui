import { useFormContext, useFieldArray, Controller } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'

import tw from 'twin.macro'

import { IconButton } from '@ui/Button'
import Dropdown from '@ui/Dropdown'
import FieldErrorMessage from '@ui/FieldErrorMessage'

import AddButton from 'components/AddButton'
import TextEditor from 'components/TextEditor'
import { EditorState } from 'draft-js'
import { LikertMethod } from 'types/forms.d'

import MultipleScale from './MultipleScale'
import SingleScale from './SingleScale'

const Likert = ({ isPublished }: { isPublished: boolean }) => {
  const location = useLocation()

  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    name: 'likert',
  })
  const survey = location.state
  const isEditing = !!survey?.id

  const defaultValue = {
    statement: EditorState.createEmpty(),
    method: LikertMethod.SINGLE,
    from: 1,
    to: 5,
  }

  return (
    <>
      <FieldErrorMessage name="likert" errors={errors} />
      <div css={tw`grid grid-cols-1 gap-4`}>
        {fields.map((field, index) => {
          const method = watch(`likert.${index}.method`)

          return (
            <div key={field.id} css={tw`mb-12`}>
              {/* Likert method */}
              <Controller
                name={`likert.${index}.method`}
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <div css={tw`flex items-center w-full`}>
                      <div css={tw`w-full md:w-1/3 mr-4`}>
                        <Dropdown
                          disabled={isEditing}
                          options={[LikertMethod.SINGLE, LikertMethod.MULTIPLE]}
                          error={!!(errors?.setup as any)?.method}
                          modified={isEditing && fieldState.isDirty}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </div>

                      {!isPublished && (
                        <IconButton onClick={() => remove(index)} css={tw`hover:bg-red-50`}>
                          <AiOutlineClose />
                        </IconButton>
                      )}
                    </div>
                  )
                }}
              />

              {/* Likert question */}
              <div css={tw`mt-8`}>
                <Controller
                  name={`likert.${index}.statement`}
                  control={control}
                  render={({ field: statementField }) => (
                    <TextEditor
                      onChange={statementField.onChange}
                      value={statementField.value}
                      readOnly={isPublished}
                      placeholder="Question"
                      enableImage
                    />
                  )}
                />
              </div>

              {method === LikertMethod.SINGLE && (
                <SingleScale isEditing={isEditing} index={index} />
              )}

              {method === LikertMethod.MULTIPLE && (
                <MultipleScale index={index} isPublished={isPublished} />
              )}
            </div>
          )
        })}

        <AddButton css={tw`h-12`} onClick={() => append(defaultValue)} disabled={isPublished}>
          + Add Question
        </AddButton>
      </div>
    </>
  )
}

export default Likert
