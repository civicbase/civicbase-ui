import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { RiLockPasswordLine } from 'react-icons/ri'

import tw, { theme } from 'twin.macro'

import Button, { ButtonSize, IconButton } from '@ui/Button'
import FieldErrorMessage from '@ui/FieldErrorMessage'
import { FormInput } from '@ui/Input'
import Label from '@ui/Label'
import Spinner from '@ui/Spinner'
import Typography, { Hint } from '@ui/Typography'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth, useAuthState } from 'contexts/auth'
import { useLogin } from 'contexts/login'

import { validationSchema } from './validation'

interface SignupFormValues {
  name: string
  email: string
  password: string
  TC: boolean
}

const Signup = () => {
  const loginService = useLogin()
  const authService = useAuth()
  const { isSignup } = useAuthState()
  const [showPassword, setShowPassword] = useState(false)
  const methods = useForm<SignupFormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      TC: true,
    },
    resolver: zodResolver(validationSchema),
  })

  const password = methods.watch('password')

  const handleLogin = () => {
    loginService.send('LOGIN')
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(values => {
          authService.send({ type: 'SIGNUP', values })
        })}
        css={tw`h-full`}
      >
        <div css={tw`flex flex-col justify-between h-full pb-6`}>
          <div css={tw`grid grid-cols-1 gap-4 mobile:gap-1`}>
            <div>
              <Label htmlFor="name">Name *</Label>

              <FormInput
                name="name"
                error={!!methods.formState.errors.name}
                disabled={isSignup}
                adornedStart={<AiOutlineUser color={theme`colors.gray.400`} />}
              />

              <FieldErrorMessage name="name" errors={methods.formState.errors} />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>

              <FormInput
                name="email"
                error={!!methods.formState.errors.email}
                disabled={isSignup}
                adornedStart={<AiOutlineMail color={theme`colors.gray.400`} />}
                autoComplete="username"
              />

              <FieldErrorMessage name="email" errors={methods.formState.errors} />
            </div>

            <div>
              <Label htmlFor="password">Password *</Label>

              <FormInput
                name="password"
                error={!!methods.formState.errors.password}
                disabled={isSignup}
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                adornedStart={<RiLockPasswordLine color={theme`colors.gray.400`} />}
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
            </div>

            <Button
              css={tw` mt-4 space-x-4 h-12 mobile:mt-2 `}
              type="submit"
              disabled={isSignup}
              size={ButtonSize.LARGE}
            >
              {isSignup && <Spinner variant="light" />}
              <div>SIGN UP</div>
            </Button>
          </div>

          <Hint css={tw`text-center my-4`}>
            By signing up, you agree to our{' '}
            <a href="/terms-conditions" target="_blank" css={tw`text-blue-600  hover:underline`}>
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="/privacy-policy" target="_blank" css={tw`text-blue-600  hover:underline`}>
              Privacy Policy
            </a>
          </Hint>

          <Typography css={tw`text-center text-sm hover:(cursor-pointer)`} onClick={handleLogin}>
            Already have an account? <span css={tw`text-blue-600  hover:underline`}>LOGIN</span>
          </Typography>
        </div>
      </form>
    </FormProvider>
  )
}

export default Signup
