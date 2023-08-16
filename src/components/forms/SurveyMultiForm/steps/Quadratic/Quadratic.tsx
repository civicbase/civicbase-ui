import { useFormContext, useFieldArray, Controller } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'

import tw from 'twin.macro'

import { IconButton } from '@ui/Button'
import FieldErrorMessage from '@ui/FieldErrorMessage'
import Label from '@ui/Label'

import AddButton from 'components/AddButton'
import TextEditor from 'components/TextEditor'
import { EditorState } from 'draft-js'

const Quadratic = ({ isPublished }: { isPublished: boolean }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    name: 'quadratic',
  })

  return (
    <>
      <FieldErrorMessage name="quadratic" errors={errors} />

      <div css={tw`grid grid-cols-1 gap-4`}>
        {fields.map((field, index) => {
          return (
            <div key={field.id} css={tw`my-4`}>
              <div css={tw`flex justify-between`}>
                <Label>Question {index + 1} *</Label>
                {!isPublished && (
                  <IconButton onClick={() => remove(index)}>
                    <AiOutlineClose />
                  </IconButton>
                )}
              </div>
              <Controller
                name={`quadratic.${index}.statement`}
                control={control}
                render={({ field: statementField }) => {
                  return (
                    <TextEditor
                      onChange={statementField.onChange}
                      value={statementField.value}
                      readOnly={isPublished}
                      error={errors.quadratic && !!(errors as any).quadratic[index]}
                      enableImage
                    />
                  )
                }}
              />
              <FieldErrorMessage name={`quadratic.${index}`} errors={errors} />
            </div>
          )
        })}
        <AddButton
          css={tw`h-12`}
          onClick={() => append({ statement: EditorState.createEmpty() })}
          disabled={isPublished}
        >
          + Add Question
        </AddButton>
      </div>
    </>
  )
}

export default Quadratic
