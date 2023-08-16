import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { AiOutlineMail } from 'react-icons/ai'
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { RiLockPasswordLine } from 'react-icons/ri'

import tw, { theme } from 'twin.macro'

import Button, { ButtonSize, IconButton, TextButton } from '@ui/Button'
import FieldErrorMessage from '@ui/FieldErrorMessage'
import { FormInput } from '@ui/Input'
import Label from '@ui/Label'
import Spinner from '@ui/Spinner'
import Typography from '@ui/Typography'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth, useAuthState } from 'contexts/auth'
import { useLogin } from 'contexts/login'

import { validationSchema } from './validation'

interface LoginFormValues {
  email: string
  password: string
}

const Login = () => {
  const authService = useAuth()
  const loginService = useLogin()
  const { isLoggin } = useAuthState()
  const [showPassword, setShowPassword] = useState(false)
  const methods = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(validationSchema),
  })

  const password = methods.watch('password')

  const handleSignup = () => {
    loginService.send('SIGNUP')
  }

  const handleForgotPassword = () => {
    loginService.send('FORGOT_PASSWORD')
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(values => {
          authService.send({ type: 'LOGIN', values })
        })}
        css={tw`h-full`}
      >
        <div css={tw`flex flex-col justify-between pb-6 h-full`}>
          <div css={tw`grid grid-cols-1 gap-4 mobile:gap-1`}>
            <div>
              <Label htmlFor="email">Email</Label>

              <FormInput
                name="email"
                error={!!methods.formState.errors.email}
                disabled={isLoggin}
                adornedStart={<AiOutlineMail color={theme`colors.gray.400`} />}
                autoComplete="username"
              />

              <FieldErrorMessage name="email" errors={methods.formState.errors} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>

              <FormInput
                name="password"
                error={!!methods.formState.errors.password}
                disabled={isLoggin}
                type={showPassword ? 'text' : 'password'}
                adornedStart={<RiLockPasswordLine color={theme`colors.gray.400`} />}
                autoComplete="current-password"
                adornedEnd={
                  password.length > 0 && (
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      css={tw`hover:bg-transparent`}
                    >
                      {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </IconButton>
                  )
                }
              />

              <FieldErrorMessage name="password" errors={methods.formState.errors} />

              <TextButton css={tw`mt-2`} onClick={handleForgotPassword}>
                Forgot password?
              </TextButton>
            </div>

            <Button type="submit" disabled={isLoggin} css={tw`space-x-4`} size={ButtonSize.LARGE}>
              {isLoggin && <Spinner variant="light" />}
              <span>login</span>
            </Button>
          </div>
          <Typography
            css={tw`text-center text-sm hover:(cursor-pointer) mt-6`}
            onClick={handleSignup}
          >
            Do not have account yet? <span css={tw` text-blue-600  hover:underline`}>SIGN UP</span>
          </Typography>
        </div>
      </form>
    </FormProvider>
  )
}

export default Login
