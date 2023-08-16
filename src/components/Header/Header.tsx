import { Link } from 'react-router-dom'

import tw from 'twin.macro'

import Logo from 'assets/civicbase_gradient_logo.svg'
import { useAuthState } from 'contexts/auth'

import Menu from './Menu'

const Header = () => {
  const { user } = useAuthState()

  return (
    <div
      css={tw`sticky top-0 z-50 backdrop-blur flex-none transition-colors duration-500 lg:border-b lg:border-[rgba(15,23,42,.1)] border-opacity-10 bg-opacity-95 bg-[hsla(0,0%,100%,.6)]`}
    >
      <div css={[tw`container mx-auto`, tw`flex items-center justify-between`]}>
        <Link to="/" css={tw`focus:(outline-none ring-0)`}>
          <img src={Logo} width={250} alt="logo" />
        </Link>

        <div css={tw`relative`}>{user && <Menu user={user} />}</div>
      </div>
    </div>
  )
}

export default Header
