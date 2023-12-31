import { useFormContext, useFieldArray, Controller } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'

import tw from 'twin.macro'

import { IconButton } from '@ui/Button'
import FieldErrorMessage from '@ui/FieldErrorMessage'
import Label from '@ui/Label'

import AddButton from 'components/AddButton'
import TextEditor from 'components/TextEditor'
import { EditorState } from 'draft-js'

import QuestionContent from './QuestionContent'

const Conjoint = ({ isPublished }: { isPublished: boolean }) => {
  const methods = useFormContext()
  const {
    control,
    formState: { errors },
  } = methods

  const { fields, append, remove } = useFieldArray({
    name: 'conjoint',
  })

  return (
    <>
      <div css={tw`grid grid-cols-1 gap-4`}>
        {fields.map((_, index) => (
          <>
            <div css={tw`flex justify-between`}>
              <Label>Question {index + 1}</Label>
              {!isPublished && (
                <IconButton onClick={() => remove(index)} css={tw`hover:bg-red-50`}>
                  <AiOutlineClose />
                </IconButton>
              )}
            </div>
            <Controller
              name={`conjoint.${index}.statement`}
              control={control}
              render={({ field }) => (
                <TextEditor
                  onChange={field.onChange}
                  value={field.value}
                  readOnly={isPublished}
                  error={errors.conjoint && !!(errors as any).conjoint[index]}
                  enableImage
                />
              )}
            />
            <FieldErrorMessage name={`conjoint.${index}`} errors={errors} />

            <div css={tw`mt-8`}>
              <QuestionContent questionIndex={index} isPublished={isPublished} />
            </div>
          </>
        ))}
      </div>
      <AddButton
        css={[tw`h-12`, fields.length > 0 && tw`mt-16`]}
        onClick={() => append({ statement: EditorState.createEmpty() })}
        disabled={isPublished}
      >
        + Add Question
      </AddButton>
    </>
  )
}

export default Conjoint
