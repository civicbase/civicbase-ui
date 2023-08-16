import tw, { styled } from 'twin.macro'

const Radio = styled.input.attrs({ type: 'radio' })(() => [
  tw`rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer`,
])

export default Radio
