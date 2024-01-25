import { useFormContext } from 'react-hook-form'
import { AiFillCheckCircle } from 'react-icons/ai'

import tw from 'twin.macro'

import Typography from '@ui/Typography'

import { Display } from 'components/Vote'

const RadiusMethod = () => {
  const { watch, setValue } = useFormContext()

  const methodPreference = watch('setup.methodPreference')

  return (
    <button
      type="button"
      css={[
        tw`rounded border-gray-100 border-2 h-full flex flex-col p-0 max-h-[260px]`,
        tw`hover:(ring-brand ring-2 cursor-pointer)`,
        methodPreference === 'radius' && tw`focus:(ring-brand ring-2) ring-brand ring-2`,
      ]}
      onClick={() => setValue('setup.methodPreference', 'radius', { shouldValidate: true })}
    >
      <div
        css={[
          tw`transition-all ease-in-out duration-500`,
          tw`flex relative bg-gray-100 rounded-t p-2 text-center w-full`,
          methodPreference === 'radius' && tw`bg-brand! text-white`,
        ]}
      >
        <Typography css={tw`flex-1 text-center`}>Radius</Typography>
        {methodPreference === 'radius' && (
          <div css={tw`absolute right-2`}>
            <AiFillCheckCircle size={20} />
          </div>
        )}
      </div>

      <div css={tw`flex justify-center items-center flex-1 w-full`}>
        <Display total={100} vote={5} creditSpent={25} token="Credits" />
      </div>
    </button>
  )
}

export default RadiusMethod
