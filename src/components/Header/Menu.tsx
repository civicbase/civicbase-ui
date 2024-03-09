import { useState } from 'react'
import { CiUser, CiLogout } from 'react-icons/ci'
import { SiAboutdotme } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

import tw from 'twin.macro'

import { Popover } from '@headlessui/react'
import Transition from 'components/Transition'
import { useAuth, useIsLogingOut } from 'contexts/auth'
import { CivicbaseUser } from 'types/user'

import UserAvatar from './UserAvatar'

const popperTransitionProps = {
  enter: tw`transition ease-out duration-200`,
  enterFrom: tw`opacity-0 translate-y-1`,
  enterTo: tw`opacity-100 translate-y-0`,
  leave: tw`transition ease-in duration-150`,
  leaveFrom: tw`opacity-100 translate-y-0`,
  leaveTo: tw`opacity-0 translate-y-1`,
}

const Menu = ({ user }: { user: CivicbaseUser }) => {
  const [hovered, setHovered] = useState<string>('')
  const navigate = useNavigate()
  const authService = useAuth()
  const isLoggingOut = useIsLogingOut()

  const handleLogout = () => {
    authService.send({ type: 'LOGOUT' })
  }

  const handleGoToProfile = () => {
    navigate(`/profile`)
  }

  const handleGoToAbout = () => {
    navigate(`/about`)
  }

  const solutions = [
    {
      name: 'Profile',
      description: 'Manage your own profile',
      handleClick: handleGoToProfile,
      icon: CiUser,
    },
    {
      name: 'Logout',
      description: 'Sign out of your account',
      handleClick: handleLogout,
      icon: CiLogout,
    },
    {
      name: 'About',
      description: 'Learn more about Civicbase',
      handleClick: handleGoToAbout,
      icon: SiAboutdotme,
    },
  ]

  const handleMouseEnter = (name: string) => setHovered(name)
  const handleMouseLeave = () => setHovered('')

  return (
    <div className="fixed top-16 w-full max-w-sm px-4 z-50">
      <Popover className="relative">
        {() => (
          <>
            <Popover.Button
              css={[
                tw`hover:bg-gray-200 p-2 px-4 rounded-lg mr-4 text-gray-700`,
                tw`hover:(outline-none bg-gray-100 text-black)`,
                tw`focus:(outline-none ring-gray-200 ring-inset ring-4)`,
              ]}
            >
              <UserAvatar />
            </Popover.Button>
            <Transition {...popperTransitionProps}>
              <Popover.Panel
                css={tw`absolute z-10 mt-3 w-screen px-4 max-w-xs mobile:right-2 right-0`}
              >
                <div
                  css={tw`overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5`}
                >
                  <div css={tw`flex flex-col bg-white p-7 space-y-4`}>
                    {solutions.map(item => (
                      <Popover.Button
                        key={item.name}
                        onClick={item.handleClick}
                        css={[
                          tw`-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:(outline-none ring-0)`,
                          hovered === 'Logout' && tw`hover:bg-red-50`,
                        ]}
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div
                          css={[
                            tw`bg-brand2! bg-opacity-30 p-4 rounded-lg`,
                            hovered === item.name && tw`bg-opacity-50`,
                          ]}
                        >
                          <item.icon size={24} aria-hidden="true" />
                        </div>
                        <div css={tw`ml-4 text-left`}>
                          <p
                            css={[
                              tw`text-sm font-medium text-gray-700`,
                              hovered === item.name && tw`text-black`,
                            ]}
                          >
                            {item.name}
                          </p>
                          <p
                            css={[
                              tw`text-sm text-gray-400`,
                              hovered === item.name && tw`text-gray-500`,
                            ]}
                          >
                            {item.description}
                          </p>
                        </div>
                      </Popover.Button>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default Menu
