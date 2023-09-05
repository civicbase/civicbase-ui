import { AiOutlineClose } from 'react-icons/ai'
import { BiPyramid } from 'react-icons/bi'
import { VscSymbolMethod, VscSymbolField, VscFilter } from 'react-icons/vsc'

import tw, { theme } from 'twin.macro'

import { IconButton } from '@ui/Button'

import { Popover } from '@headlessui/react'
import Transition from 'components/Transition'

const popperTransitionProps = {
  enter: tw`transition ease-out duration-200`,
  enterFrom: tw`opacity-0 translate-y-1`,
  enterTo: tw`opacity-100 translate-y-0`,
  leave: tw`transition ease-in duration-150`,
  leaveFrom: tw`opacity-100 translate-y-0`,
  leaveTo: tw`opacity-0 translate-y-1`,
}

const Filter = () => {
  const options = [
    {
      name: 'Quadratic',
      items: [
        {
          name: 'Radius',
          icon: null,
        },
        {
          name: 'Diamond',
          icon: null,
        },
      ],
      icon: VscSymbolMethod,
    },
    {
      name: 'Conjoint',
      icon: VscSymbolField,
    },
    {
      name: 'Likert',
      icon: BiPyramid,
    },
  ]

  const handleClick = () => {}

  return (
    <Popover>
      {() => (
        <>
          <Popover.Button tw="mx-2 focus:(outline-none ring-0)">
            <IconButton tw="hover:bg-brand/80">
              <VscFilter color={theme('colors.white')} />
            </IconButton>
          </Popover.Button>
          <Transition {...popperTransitionProps}>
            <Popover.Panel tw="absolute z-50 mt-3 px-4 w-72 right-0">
              <div tw="overflow-hidden rounded-lg shadow-lg bg-white">
                <div tw="mx-2 mt-2 flex justify-between items-center">
                  Filter by:
                  <Popover.Button as={IconButton}>
                    <AiOutlineClose />
                  </Popover.Button>
                </div>
                <div tw="flex flex-col p-7 space-y-4">
                  {options.map(item => (
                    <button
                      type="button"
                      key={item.name}
                      onClick={handleClick}
                      tw="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:(outline-none ring-0)"
                    >
                      <div css={[tw`bg-brand/40 p-2 rounded-lg`]}>
                        <item.icon size={24} aria-hidden="true" />
                      </div>
                      <div tw="ml-4 text-left">
                        <p tw="text-sm font-medium text-gray-700">{item.name}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Filter
