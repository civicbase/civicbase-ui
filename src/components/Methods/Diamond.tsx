import { useFormContext } from 'react-hook-form'
import { AiFillCheckCircle } from 'react-icons/ai'

import tw from 'twin.macro'

import Typography from '@ui/Typography'

import { DiamondSVG } from 'components/Diamond/Diamond'

const DiamondMethod = () => {
  const { watch, setValue } = useFormContext()

  const methodPreference = watch('setup.methodPreference')

  return (
    <div css={tw`w-full`}>
      <button
        type="button"
        css={[
          tw`rounded border-gray-100 border-2 p-0 w-full max-h-[260px]`,
          tw`hover:(ring-brand ring-2 cursor-pointer)`,
          methodPreference === 'diamond' && tw`focus:(ring-brand ring-2) ring-brand ring-2`,
        ]}
        onClick={() => setValue('setup.methodPreference', 'diamond')}
      >
        <div
          css={[
            tw`transition-all ease-in-out duration-500`,
            tw`flex relative bg-gray-100 rounded-t p-2 text-center w-full`,
            methodPreference === 'diamond' && tw`bg-brand! text-white`,
          ]}
        >
          <Typography css={tw`flex-1 text-center`}>Diamond</Typography>
          {methodPreference === 'diamond' && (
            <div css={tw`absolute right-2`}>
              <AiFillCheckCircle size={20} />
            </div>
          )}
        </div>
        <div css={tw`flex justify-center w-full`}>
          <DiamondSVG index="#" />
        </div>
      </button>
    </div>
  )
}

export default DiamondMethod
