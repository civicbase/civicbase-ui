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
import { useAuth } from 'contexts/auth'

const PasswordInformation = () => {
  const authService = useAuth()
  const [state] = useActor(authService)

  const {
    setError,
    getValues,
    register,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      newPassword: null,
      confirmPassword: null,
    },
  })

  const handleUpdatePassword = () => {
    const newPassword = getValues('newPassword')
    const confirmPassword = getValues('confirmPassword')

    if (newPassword && newPassword === confirmPassword) {
      reset({ newPassword: null, confirmPassword: null })
      authService.send({ type: 'UPDATE_PASSWORD', password: newPassword })
    } else {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Passwords do not match',
      })
    }
  }

  return (
    <Card css={tw`flex-1 z-10 w-full`}>
      <Typography css={tw`text-xl font-semibold mb-4`}>Password information</Typography>

      <div css={tw`grid grid-cols-2 gap-8 mb-6`}>
        <div>
          <Label>New password</Label>
          <Input
            {...register('newPassword')}
            error={!!errors.newPassword}
            placeholder="••••••••"
            type="password"
          />
          <FieldErrorMessage name="newPassword" errors={errors} />
        </div>
        <div>
          <Label>Confirm password</Label>
          <Input
            {...register('confirmPassword')}
            error={!!errors.confirmPassword}
            placeholder="••••••••"
            type="password"
          />
          <FieldErrorMessage name="confirmPassword" errors={errors} />
        </div>
      </div>

      <div css={tw`flex justify-end`}>
        <Button
          css={tw`mt-8 space-x-4 h-12 mobile:mt-2`}
          onClick={handleUpdatePassword}
          disabled={!isDirty}
        >
          {state.context.isUpdatingPassword && <Spinner variant="light" />}
          <div>Save</div>
        </Button>
      </div>
    </Card>
  )
}

export default PasswordInformation
