import { ReactElement } from 'react'

import tw from 'twin.macro'

import { IconButton } from '@ui/Button'

import Tooltip from 'components/Tooltip'

const MenuItem = ({
  children,
  label,
  disabled,
  handleClick,
}: {
  children: ReactElement
  label: string
  disabled?: boolean
  handleClick?: () => void
}) => {
  return (
    <Tooltip label={disabled ? null : label} popperProps={{ delayShow: 500 }}>
      <IconButton
        css={[
          tw`hover:(bg-brand! bg-opacity-10 text-black)`,
          disabled && tw`text-gray-300 hover:(bg-transparent text-gray-300)`,
        ]}
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </IconButton>
    </Tooltip>
  )
}

export default MenuItem
