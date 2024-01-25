import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import tw from 'twin.macro'

import { IconButton } from '@ui/Button'
import Typography from '@ui/Typography'

import { useActor, useInterpret } from '@xstate/react'
import Logo from 'assets/civicbase_logo_white.svg'
import Card from 'components/Card'
import ForgotPasswordForm from 'components/forms/ForgotPassword'
import LoginForm from 'components/forms/Login'
import SignupForm from 'components/forms/Signup'
import { LoginProvider, useLogin } from 'contexts/login'
import { loginMachine } from 'machines'

import Header from './Header'
import Step from './Step'

const Login = () => {
  const loginService = useLogin()
  const [state] = useActor(loginService)

  return (
    <div
      css={tw`flex flex-col justify-center h-full mobile:items-start items-center overflow-hidden`}
    >
      <Card
        css={[
          tw`rounded-3xl p-0 relative border-0 overflow-visible mobile:rounded-none `,
          tw`max-h-[650px] w-[528px] mobile:(h-full max-h-full)`,
          tw`bg-gradient-to-tr from-brand via-brand to-brand2`,
        ]}
      >
        <div css={tw`w-full flex justify-end absolute -top-8 right-4`}>
          <Link to="/about" css={tw`text-blue-500 hover:underline`}>
            About
          </Link>
        </div>

        <div css={tw`text-center mt-4`}>
          <Header isActive={state.matches('login')}>
            <div css={tw`flex justify-center`}>
              <img css={tw`w-[250px] mobile:w-[200px]`} src={Logo} alt="logo" />
            </div>
          </Header>

          <Header isActive={state.matches('signup')}>Sign Up</Header>

          {(state.matches('login') || state.matches('signup')) && (
            <Typography css={tw`text-white flex items-start mobile:mx-4`}>
              Civicbase is a survey platform that enables rapid deployment of Quadratic Voting for
              Survey Research (QVSR)
            </Typography>
          )}

          <Header isActive={state.matches('verification')}>Email Verification</Header>

          <Header isActive={state.matches('forgotPassword') || state.matches('confirm')}>
            Reset Password
          </Header>
        </div>

        <Step isActive={state.matches('login')} css={tw`top-56`}>
          <LoginForm />
        </Step>

        <Step isActive={state.matches('signup')} css={tw`top-44 mobile:top-52`}>
          <SignupForm />
        </Step>

        <Step isActive={state.matches('forgotPassword')}>
          <ForgotPasswordForm />
        </Step>

        <Step isActive={state.matches('confirm')}>
          <Typography>We sent you an email so you can reset your password.</Typography>
        </Step>

        <Step isActive={state.matches('verification')}>
          <Typography>
            Thank you for signing up to Civicbase! We have sent you a confirmation email, please
            verify your address.
          </Typography>
        </Step>
      </Card>

      <div css={tw`flex justify-center mt-16 z-50 mobile:hidden`}>
        <a
          href="https://github.com/civicbase/civicbase-ui"
          rel="noreferrer"
          target="_blank"
          aria-label="Visit Civicbase UI Repository"
        >
          <IconButton css={tw`z-50`}>
            <BsGithub size={24} />
          </IconButton>
        </a>

        <a
          href="https://www.linkedin.com/company/civicbase/"
          rel="noreferrer"
          target="_blank"
          aria-label="Visit Civicbase LinkedIn"
        >
          <IconButton onClick={() => {}}>
            <BsLinkedin size={24} />
          </IconButton>
        </a>
      </div>
    </div>
  )
}

const Wrapper = () => {
  const loginService = useInterpret(loginMachine)

  return (
    <LoginProvider value={loginService}>
      <Login />
    </LoginProvider>
  )
}

export default Wrapper
