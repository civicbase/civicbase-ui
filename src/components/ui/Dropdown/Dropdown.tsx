import { BsCheck } from 'react-icons/bs'
import { HiOutlineSelector } from 'react-icons/hi'

import tw, { theme } from 'twin.macro'

import { Listbox } from '@headlessui/react'
import Transition from 'components/Transition'

const optionsTransitionProps = {
  leave: tw`transition ease-in duration-100`,
  leaveFrom: tw`opacity-100`,
  leaveTo: tw`opacity-0`,
}

const Dropdown = ({
  error,
  modified,
  options,
  onChange,
  value,
  placeholder,
  disabled = false,
}: {
  error?: boolean
  modified?: boolean
  options: string[] | number[]
  value: string
  placeholder?: string
  disabled?: boolean
  onChange: (value: string) => void
}) => {
  return (
    <Listbox onChange={onChange} value={value} disabled={disabled}>
      <div css={tw`relative mt-1`}>
        <Listbox.Button
          css={[
            tw`h-10 w-full px-2 text-sm `,
            tw`border-2 rounded-md border-gray-300 placeholder-gray-400`,
            tw`focus:outline-none focus:(ring-2 ring-brand border-brand)`,
            tw`dark:(border-gray-600 placeholder-gray-300 bg-gray-700)`,
            modified && tw`border-indigo-600 border-opacity-60`,
            error &&
              tw`border-error-300 border-opacity-60 focus:(ring-2 ring-red-300 border-red-300)`,
          ]}
        >
          <span
            css={[
              tw`block text-left truncate`,
              (!value && placeholder) || (disabled && tw`text-gray-400`),
            ]}
          >
            {value || placeholder}
          </span>
          <span css={tw`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none`}>
            <HiOutlineSelector
              color={error ? theme`colors.bgColor10` : undefined}
              size={20}
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>

        <Transition {...optionsTransitionProps}>
          <Listbox.Options
            css={[
              tw`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10`,
              tw`dark:(bg-secondary)`,
            ]}
          >
            {options.map(option => (
              <Listbox.Option
                key={option}
                css={tw`cursor-default select-none relative`}
                value={option}
              >
                {({ selected, active }) => (
                  <div
                    css={[tw`py-2 pl-10 pr-4`, active && tw`bg-brand! text-white cursor-pointer`]}
                  >
                    <span css={[selected ? tw`font-medium` : tw`font-normal`, tw`block truncate`]}>
                      {option}
                    </span>
                    {selected ? (
                      <span
                        css={[
                          tw`absolute inset-y-0 left-0 flex items-center pl-3 text-brand`,
                          active && tw`text-white`,
                        ]}
                      >
                        <BsCheck size={20} aria-hidden="true" />
                      </span>
                    ) : null}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default Dropdown
