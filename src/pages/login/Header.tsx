import { ReactNode } from 'react'
import { BsArrowLeft } from 'react-icons/bs'

import tw from 'twin.macro'

import { IconButton } from '@ui/Button'
import { Title } from '@ui/Typography'

import { useActor } from '@xstate/react'
import { useLogin } from 'contexts/login'

const Header = ({ isActive, children }: { isActive: boolean; children: string | ReactNode }) => {
  const loginService = useLogin()
  const [state] = useActor(loginService)

  const handleLogin = () => {
    loginService.send('LOGIN')
  }

  return (
    <div
      css={[
        tw`flex justify-between items-center opacity-0 relative h-20`,
        isActive && tw`transition-all ease-in-out duration-700 opacity-100`,
        !isActive && tw`hidden`,
      ]}
    >
      {!state.matches('login') && (
        <div css={tw`absolute`}>
          <IconButton
            onClick={handleLogin}
            css={tw`hover:(bg-gray-300 text-black) text-white ml-4`}
          >
            <BsArrowLeft size={20} />
          </IconButton>
        </div>
      )}
      <div css={tw`w-full`}>
        <Title css={tw`text-white m-0`}>{children}</Title>
      </div>
    </div>
  )
}

export default Header
