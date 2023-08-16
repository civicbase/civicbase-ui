import { useForm, FormProvider } from 'react-hook-form'
import { AiOutlineMail } from 'react-icons/ai'

import tw, { theme } from 'twin.macro'

import Button, { ButtonSize } from '@ui/Button'
import FieldErrorMessage from '@ui/FieldErrorMessage'
import { FormInput } from '@ui/Input'
import Label from '@ui/Label'
import Spinner from '@ui/Spinner'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAuthState, useAuth } from 'contexts/auth'

import { validationSchema } from './validation'

interface LoginFormValues {
  email: string
}

const ForgotPassword = () => {
  const authService = useAuth()
  const { isResetingPassword } = useAuthState()

  const methods = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(validationSchema),
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(values => {
          authService.send({
            type: 'RESET_PASSWORD',
            values,
          })
        })}
        css={tw`h-full`}
      >
        <div css={tw`flex flex-col justify-between pb-6 h-full`}>
          <div css={tw`grid grid-cols-1 gap-4 mobile:gap-1`}>
            <div>
              <Label htmlFor="email">Email *</Label>

              <FormInput
                name="email"
                error={!!methods.formState.errors.email}
                disabled={isResetingPassword}
                adornedStart={<AiOutlineMail color={theme`colors.gray.400`} />}
              />

              <FieldErrorMessage name="email" errors={methods.formState.errors} />
            </div>

            <Button
              css={tw` mt-8 space-x-4 h-12 mobile:mt-2`}
              type="submit"
              disabled={isResetingPassword}
              size={ButtonSize.LARGE}
            >
              {isResetingPassword && <Spinner variant="light" />}
              <div>RESET PASSWORD</div>
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default ForgotPassword
