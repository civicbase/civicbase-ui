import tw, { styled } from 'twin.macro'

import { ButtonProps, ButtonSize } from './button.d'

const Button = styled.button.attrs<ButtonProps>(
  ({ type = 'button', variant = 'primary', size = ButtonSize.MEDIUM }) => ({
    type,
    variant,
    size,
  }),
)<ButtonProps>(() => [
  tw`uppercase rounded-md flex justify-center items-center font-medium`,
  ({ disabled }) => !disabled && tw`hover:opacity-90`,
  ({ disabled }) => !disabled && tw`focus:(ring-4 outline-none)`,
  ({ variant }) => variant === 'primary' && tw`!bg-gradient-to-b from-brand/80 to-brand text-white`,
  ({ variant }) =>
    variant === 'secondary' &&
    tw`!bg-gradient-to-b from-gray-200 to-gray-300 text-brand hover:opacity-80`,
  ({ variant }) =>
    variant === 'danger' &&
    tw`!bg-gradient-to-b from-red-500 to-red-500 text-white focus:(ring-red-400)`,
  ({ disabled }) => disabled && tw`opacity-50 !cursor-not-allowed hover:(opacity-50)`,
  ({ size }) => size === ButtonSize.SMALL && tw`px-3 py-2 text-xs`,
  ({ size }) => size === ButtonSize.MEDIUM && tw`px-3 py-2 text-sm`,
  ({ size }) => size === ButtonSize.LARGE && tw`px-5 py-2.5 text-base`,
])

export default Button
