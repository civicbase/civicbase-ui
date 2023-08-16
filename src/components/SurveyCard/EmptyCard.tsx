import { FaRegCopy, FaRegPaperPlane } from 'react-icons/fa'
import { FiEdit2, FiEye, FiPower } from 'react-icons/fi'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { VscSymbolMethod } from 'react-icons/vsc'

import tw, { styled } from 'twin.macro'

import { IconButton } from '@ui/Button'

import CloneIcon from './CloneIcon'
import MenuItem from './MenuItem'

const TextLine = styled.div(() => tw`bg-gray-200 rounded-full animate-pulse`)

const EmptyCard = () => {
  return (
    <div
      css={[
        tw`flex flex-1 flex-col justify-between`,
        tw`h-36 rounded-lg p-4 relative shadow-md border-l-4 hover:(shadow-lg)`,
        tw`transition-shadow ease-in-out duration-300`,
        tw` bg-gradient-to-tr from-gray-50 to-gray-100`,
        tw`border-gray-400 animate-pulse`,
      ]}
    >
      <div>
        <div css={tw`flex justify-between items-center`}>
          <TextLine css={tw`w-60 h-6`} />
          <IconButton css={tw`text-gray-300 hover:(bg-transparent text-gray-300)`}>
            <TbBrandGoogleAnalytics size={20} />
          </IconButton>
        </div>

        <div css={tw`flex items-center text-gray-600`}>
          <VscSymbolMethod size={20} css={tw`mr-2`} />

          <TextLine css={tw`w-40 h-5`} />
        </div>
      </div>

      <div css={tw`flex justify-evenly`}>
        <MenuItem label="Edit" handleClick={() => {}} disabled>
          <FiEdit2 size={20} />
        </MenuItem>

        <MenuItem label="Preview" handleClick={() => {}} disabled>
          <FiEye size={20} />
        </MenuItem>

        <MenuItem label="Finish" handleClick={() => {}} disabled>
          <FiPower size={20} />
        </MenuItem>

        <MenuItem label="Publish" handleClick={() => {}} disabled>
          <FaRegPaperPlane size={20} />
        </MenuItem>

        <MenuItem label="Copy link" handleClick={() => {}} disabled>
          <FaRegCopy size={20} />
        </MenuItem>

        <MenuItem label="Clone" handleClick={() => {}} disabled>
          <CloneIcon />
        </MenuItem>
      </div>
    </div>
  )
}

export default EmptyCard
