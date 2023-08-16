import { AiOutlineClose } from 'react-icons/ai'

import tw from 'twin.macro'

import { IconButton } from '@ui/Button'
import Typography from '@ui/Typography'

import { useActor } from '@xstate/react'
import { useBanner } from 'contexts/banner'
import { Visibility } from 'machines/bannerMachine'

const Banner = () => {
  const bannerService = useBanner()
  const [state] = useActor(bannerService)
  const { visibility, text } = state.context

  if (visibility === Visibility.HIDDEN) {
    return null
  }

  const handleClose = () => {
    bannerService.send({ type: 'CLOSE_BANNER' })
  }

  return (
    <div
      id="banner"
      tabIndex={-1}
      css={[
        tw`flex fixed z-50 gap-8 justify-between items-start py-2 px-4 w-full  sm:items-center text-white`,
        visibility === Visibility.DEFAULT && tw`border-gray-700 lg:py-4 bg-brand!`,
        visibility === Visibility.ERROR && tw`border-error-400 lg:py-4 bg-error-400`,
        visibility === Visibility.WARNING && tw`border-warn-300 lg:py-4 bg-warn-300`,
        visibility === Visibility.SUCCESS &&
          tw`border-success-300 lg:py-4 bg-success-300 text-black`,
      ]}
    >
      <div css={tw`flex-1 w-full text-center`}>
        <Typography>{text}</Typography>
      </div>

      <IconButton
        onClick={handleClose}
        css={[
          tw`hover:bg-opacity-30`,
          visibility === Visibility.DEFAULT && tw`text-gray-300`,
          visibility === Visibility.ERROR && tw`text-white`,
          visibility === Visibility.WARNING && tw`text-white`,
          visibility === Visibility.SUCCESS && tw`text-black`,
        ]}
      >
        <AiOutlineClose />
      </IconButton>
    </div>
  )
}

export default Banner
