import { useFieldArray, useFormContext } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'

import tw from 'twin.macro'

import { IconButton } from '@ui/Button'
import FieldErrorMessage from '@ui/FieldErrorMessage'
import { FormInput } from '@ui/Input'
import Label from '@ui/Label'

import AddButton from 'components/AddButton'

const FeedbackQuestions = () => {
  const {
    getValues,
    formState: { errors, dirtyFields },
  } = useFormContext()

  const isEditing = getValues('isEditing')

  const { fields, append, remove } = useFieldArray({
    name: 'setup.feedback.questions',
  })

  return (
    <div css={tw`mt-8`}>
      {fields.map((item, index) => {
        const questionError = (errors.setup as any)?.feedback?.questions

        return (
          <div key={item.id} css={tw`my-2 flex`}>
            <div css={tw`flex-1`}>
              <Label>Short answer text question {index + 1} *</Label>

              <FormInput
                name={`setup.feedback.questions.${index}.question`}
                placeholder="Please input the question asking for the respondent's feedback"
                error={questionError && questionError[index]?.question}
                modified={isEditing && !!dirtyFields?.setup?.feedback?.questions[index]?.question}
                adornedStart={`F${index}`}
                adornedEnd={
                  <IconButton onClick={() => remove(index)} css={tw`hover:bg-red-50`}>
                    <AiOutlineClose />
                  </IconButton>
                }
              />

              <FieldErrorMessage
                name={`setup.feedback.questions.${index}.question`}
                errors={errors}
              />
            </div>
          </div>
        )
      })}
      <AddButton css={tw`h-12 mt-2`} onClick={() => append({ question: '' })}>
        + Add short answer question
      </AddButton>
    </div>
  )
}

export default FeedbackQuestions
