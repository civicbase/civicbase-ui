import { useForm } from 'react-hook-form'

import tw from 'twin.macro'

import Button from '@ui/Button'
import FieldErrorMessage from '@ui/FieldErrorMessage'
import Input from '@ui/Input'
import Label from '@ui/Label'
import Spinner from '@ui/Spinner'
import Typography from '@ui/Typography'

import { useActor } from '@xstate/react'
import Card from 'components/Card'
import { useAuth, useAuthState } from 'contexts/auth'

const GeneralInformation = () => {
  const { user } = useAuthState()
  const authService = useAuth()
  const [state] = useActor(authService)

  const {
    getValues,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name,
    },
  })

  const handleUpdateInformation = () => {
    const name = getValues('name')

    if (name && name.length >= 3 && name.length <= 20) {
      reset({ name: undefined })
      authService.send({ type: 'UPDATE_INFORMATION', name })
    } else {
      setError('name', {
        type: 'manual',
        message: 'Name must be more than 3 and less than 20 characters',
      })
    }
  }

  return (
    <Card css={tw`flex-1 z-10 relative`}>
      <Typography css={tw`text-xl font-semibold mb-4`}>General information</Typography>
      <div css={tw`mb-6`}>
        <Label>Name</Label>
        <Input {...register('name')} error={!!errors.name} />
        <FieldErrorMessage name="name" errors={errors} />
      </div>

      <div css={tw`flex justify-end`}>
        <Button
          css={tw`mt-8 space-x-4 h-12 mobile:mt-2`}
          onClick={handleUpdateInformation}
          disabled={state.context.isUpdatingInformation}
        >
          {state.context.isUpdatingInformation && <Spinner variant="light" />}
          <div>Save</div>
        </Button>
      </div>
    </Card>
  )
}

export default GeneralInformation
