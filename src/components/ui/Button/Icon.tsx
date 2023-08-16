/* eslint-disable @typescript-eslint/no-unused-vars */
import tw, { styled } from 'twin.macro'

import { IconProps } from './button.d'

const IconButton = styled.button.attrs<IconProps>(
  ({ type = 'button', variant, tabIndex = -1 }) => ({
    type,
    variant,
  }),
)<IconProps>(() => [
  tw`rounded-lg p-2.5 flex items-center justify-center text-gray-500 outline-none w-fit`,
  ({ disabled }) => !disabled && tw`hover:(opacity-80 text-white)`,
  ({ disabled }) => !disabled && tw`focus:(ring-4 outline-none)`,
  ({ variant }) => !variant && tw`hover:(bg-gray-100 text-gray-700)`,
  ({ variant }) => variant === 'primary' && tw`bg-brand text-white`,
  ({ variant }) => variant === 'danger' && tw`bg-brand2 text-white focus:(ring-[#ffaca0])`,
  ({ disabled }) => disabled && tw`opacity-50 cursor-not-allowed`,
])

export default IconButton
