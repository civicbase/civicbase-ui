import tw, { styled } from 'twin.macro'

import { TextProps } from './button.d'

const TextButton = styled.button.attrs<TextProps>(({ type = 'button', variant = 'primary' }) => ({
  type,
  variant,
}))<TextProps>(() => [
  tw`appearance-none `,
  ({ disabled }) => !disabled && tw`hover:(opacity-70 underline)`,
  ({ variant }) => variant === 'primary' && tw`text-brand`,
  ({ variant }) => variant === 'secondary' && tw`text-brand2`,
  ({ disabled }) => disabled && tw`opacity-50 cursor-not-allowed`,
])

export default TextButton
