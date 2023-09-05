import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs'

import tw, { theme } from 'twin.macro'

import { IconButton } from '@ui/Button'
import Input from '@ui/Input'

import Filter from './Filter'

type BarProps = {
  onSearch: (term: string) => void
}

const Bar = ({ onSearch }: BarProps) => {
  return (
    <div css={tw`flex p-1 rounded-lg bg-gradient-to-b from-gray-200 to-gray-300`}>
      <div css={tw`flex items-center mx-2 sm:mx-4`}>
        <BsSearch color={theme('colors.gray[600]')} />
      </div>

      <Input onChange={e => onSearch(e.target.value)} />

      <div tw="flex items-center sm:hidden">
        <IconButton>
          <BsThreeDotsVertical color={theme('colors.gray[800]')} />
        </IconButton>
      </div>

      {false && (
        <div tw="items-center hidden sm:flex">
          <Filter />
        </div>
      )}
    </div>
  )
}

export default Bar
