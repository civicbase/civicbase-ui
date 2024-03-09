import tw, { styled } from 'twin.macro'

// Define a type for your component's props
type BadgeProps = {
  variant?: 'default' | 'dark'
}

// Use the defined type for props
const Badge = styled.span<BadgeProps>(({ variant = 'default' }) => [
  tw`font-bold px-2 py-0.5 rounded-md text-sm`,
  variant === 'default' && tw`bg-gray-100 text-black`,
  variant === 'dark' && tw`bg-gray-900 text-white`,
])

export default Badge
