import tw, { styled } from 'twin.macro'

import { ButtonProps } from './button.d'

const OutlineButton = styled.button.attrs<ButtonProps>(
  ({ type = 'button', variant = 'primary' }) => ({
    type,
    variant,
  }),
)<ButtonProps>(() => [
  tw`px-4 py-3 uppercase rounded-md bg-transparent border border-brand border-2`,
  ({ disabled }) => !disabled && tw`hover:opacity-90`,
  ({ disabled }) => !disabled && tw`focus:(ring-4 outline-none)`,
  ({ variant }) => variant === 'primary' && tw`hover:(bg-brand text-white) text-brand`,
  ({ variant }) => variant === 'secondary' && tw`hover:(bg-gray-100 opacity-80) text-brand`,
  ({ variant }) =>
    variant === 'danger' &&
    tw`hover:(bg-brand2 text-white) border-brand2 text-brand2 focus:(ring-[#ffaca0])`,
  ({ disabled }) => disabled && tw`opacity-50 cursor-not-allowed`,
])

export default OutlineButton
