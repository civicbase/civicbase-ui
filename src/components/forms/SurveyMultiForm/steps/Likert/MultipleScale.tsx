import { useFieldArray } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'

import tw from 'twin.macro'

import { IconButton, TextButton } from '@ui/Button'
import Typography from '@ui/Typography/Typography'

import EditText from 'components/EditText'

const MultipleScale = ({ index, isPublished }: { index: number; isPublished: boolean }) => {
  const {
    fields: rows,
    append: appendRow,
    remove: removeRow,
  } = useFieldArray({
    name: `likert.${index}.rows`,
  })

  const {
    fields: columns,
    append: appendColumn,
    remove: removeColumn,
  } = useFieldArray({
    name: `likert.${index}.columns`,
  })

  return (
    <div tw="flex space-x-8 mt-8">
      <div tw="flex-1">
        <Typography tw="font-bold">Rows</Typography>
        {rows.map((attr, i) => (
          <div key={attr.id} css={tw`my-2 flex items-center`}>
            <Typography>{i + 1}.</Typography>
            <div css={tw`flex-1`}>
              <EditText
                name={`likert.${index}.rows.${i}.name`}
                placeholder={`Row ${i + 1}`}
                disabled={isPublished}
              />
            </div>

            {!isPublished && (
              <IconButton onClick={() => removeRow(i)} css={tw`hover:bg-red-50`}>
                <AiOutlineClose />
              </IconButton>
            )}
          </div>
        ))}
        <TextButton onClick={appendRow}>{rows.length + 1}. Add row</TextButton>
      </div>

      <div tw="flex-1">
        <Typography tw="font-bold">Columns</Typography>
        {columns.map((attr, i) => (
          <div key={attr.id} css={tw`my-2 flex items-center`}>
            <div tw="h-4 w-4 border border-gray-300 rounded-full mr-4" />
            <div css={tw`flex-1`}>
              <EditText
                name={`likert.${index}.columns.${i}.name`}
                placeholder={`Column ${i + 1}`}
                disabled={isPublished}
              />
            </div>

            {!isPublished && (
              <IconButton onClick={() => removeColumn(i)} css={tw`hover:bg-red-50`}>
                <AiOutlineClose />
              </IconButton>
            )}
          </div>
        ))}
        <TextButton onClick={appendColumn} tw="flex items-center">
          <div tw="h-4 w-4 border border-gray-300 rounded-full mr-6" /> Add item
        </TextButton>
      </div>
    </div>
  )
}

export default MultipleScale
