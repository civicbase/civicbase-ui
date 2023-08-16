import tw from 'twin.macro'

import { useToastState } from 'contexts/toast'

const Toast = () => {
  const { isVisible, text } = useToastState()

  if (!isVisible) {
    return null
  }

  return (
    <div css={tw`bg-black bg-opacity-70 text-white p-3 rounded-xl absolute bottom-4 left-2/4`}>
      <div>{text}</div>
    </div>
  )
}

export default Toast
