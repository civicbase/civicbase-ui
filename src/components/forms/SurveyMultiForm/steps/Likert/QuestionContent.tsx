import { useFieldArray, useFormContext } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'

import tw from 'twin.macro'

import { IconButton } from '@ui/Button'
import FieldErrorMessage from '@ui/FieldErrorMessage'
import { FormInput } from '@ui/Input'
import Label from '@ui/Label'

import AddButton from 'components/AddButton'

const QuestionContent = ({
  questionIndex,
  isPublished,
}: {
  questionIndex: number
  isPublished: boolean
}) => {
  const {
    formState: { errors },
  } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    name: `likert.${questionIndex}.items`,
  })

  return (
    <div css={tw`grid grid-cols-1 gap-4`}>
      <div>
        {fields.map((item, index) => (
          <div key={item.id} css={tw`my-2 flex`}>
            <div css={tw`flex-1`}>
              <Label>Item {index + 1} *</Label>

              <FormInput
                name={`likert.${questionIndex}.items.${index}.description`}
                placeholder="Please input the question asking for the respondent's feedback"
                error={
                  errors.likert &&
                  (errors as any).likert[questionIndex] &&
                  (errors as any).likert[questionIndex].items[index] &&
                  !!(errors as any).likert[questionIndex].items[index].description
                }
                adornedStart={`I${index}`}
                adornedEnd={
                  !isPublished && (
                    <IconButton onClick={() => remove(index)} css={tw`hover:bg-red-50`}>
                      <AiOutlineClose />
                    </IconButton>
                  )
                }
              />

              <FieldErrorMessage
                name={`likert.${questionIndex}.items.${index}.description`}
                errors={errors}
              />
            </div>
          </div>
        ))}

        <AddButton
          css={tw`h-10 text-base`}
          onClick={() => append({ description: '' })}
          disabled={isPublished}
        >
          + Add Item
        </AddButton>
      </div>
    </div>
  )
}

export default QuestionContent
