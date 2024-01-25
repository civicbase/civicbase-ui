import tw, { TwStyle } from 'twin.macro'

interface SpinnerProps {
  variant?: 'primary' | 'light'
  css?: TwStyle
}

const Spinner = ({ variant = 'primary', ...props }: SpinnerProps) => {
  return (
    <div css={tw`flex justify-center items-center`} {...props}>
      <div
        css={[
          tw`animate-spin rounded-full h-6 w-6 border-t-2 border-b-2`,
          variant === 'primary' && tw`border-brand`,
          variant === 'light' && tw`border-white`,
        ]}
      />
    </div>
  )
}

export default Spinner
