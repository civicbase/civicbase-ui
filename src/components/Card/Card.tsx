import tw, { styled } from 'twin.macro'

const Card = styled.div(() => [
  tw`select-none`,
  tw`bg-white border border-gray-50 rounded-md p-5 h-full`,
  tw`shadow-lg`,
])

export default Card
