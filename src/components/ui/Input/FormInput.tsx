import { ReactElement, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

import tw from 'twin.macro'

import Input from '.'
import { InputProps } from './input.d'

const FormInput = ({
  name,
  adornedStart,
  adornedEnd,
  ...props
}: { adornedEnd?: ReactNode; adornedStart?: string | ReactElement; name: string } & InputProps) => {
  const { register } = useFormContext()

  if (!adornedEnd && !adornedStart) {
    return <Input {...register(name)} {...props} />
  }

  return (
    <div css={tw`mt-1 relative rounded-md shadow-sm`}>
      {adornedStart && (
        <div css={tw`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none`}>
          <span css={tw`text-brand2 sm:text-sm`}> {adornedStart} </span>
        </div>
      )}

      <Input {...register(name)} css={[tw`pl-10`, adornedEnd && tw`pr-9`]} {...props} />

      {adornedEnd && (
        <div css={tw`absolute inset-y-0 right-0 flex items-center mr-1`}>{adornedEnd}</div>
      )}
    </div>
  )
}

export default FormInput
