import { ButtonHTMLAttributes, ReactNode } from 'react'

import tw from 'twin.macro'

import { Title } from '@ui/Typography'

const AddButton = ({
  children,
  ...props
}: { children: string | ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      css={[
        tw`transition-all ease-in-out duration-300`,
        tw`w-full h-36 border-dashed border-2 border-gray-300 rounded-md text-gray-500`,
        tw`flex justify-center items-center`,
        tw`outline-none focus:outline-none`,
        !props?.disabled && tw`hover:border-gray-600 hover:text-gray-600 focus:outline-none`,
      ]}
      {...props}
      type="button"
    >
      <Title css={tw`text-current m-0`}>{children}</Title>
    </button>
  )
}

export default AddButton
