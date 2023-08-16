/// <reference types="styled-components/cssprop" />
import { lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import tw from 'twin.macro'

import { useInterpret } from '@xstate/react'
import Banner from 'components/Banner'
import Dialog from 'components/Dialog'
import Toast from 'components/Toast'
import { AuthProvider, useAuthState } from 'contexts/auth'
import { BannerProvider } from 'contexts/banner'
import { DialogProvider } from 'contexts/dialog'
import { ToastProvider } from 'contexts/toast'
import { toastMachine, authMachine, bannerMachine, dialogMachine } from 'machines'
import { Visibility } from 'machines/bannerMachine'
import { assign } from 'xstate'

const AuthenticatedApp = lazy(() => import('./AuthenticatedApp'))
const UnauthenticatedApp = lazy(() => import('./UnauthenticatedApp'))

const Fallback = () => <div>fallback</div>

const App = () => {
  const toastService = useInterpret(toastMachine)
  const dialogService = useInterpret(dialogMachine)
  const { user, isChecking } = useAuthState()

  if (isChecking) {
    return null
  }

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <ToastProvider value={toastService}>
        <DialogProvider value={dialogService}>
          <>
            <Banner />

            <div css={tw`overflow-y-auto h-full`}>
              {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
            </div>
            <Toast />
            <Dialog />
          </>
        </DialogProvider>
      </ToastProvider>
    </ErrorBoundary>
  )
}

const Wrapper = () => {
  const bannerService = useInterpret(bannerMachine)

  const authService = useInterpret(authMachine, {
    actions: {
      error: assign((ctx, event: any) => {
        const message = event.data?.message || 'Operation failed'
        bannerService.send({ type: 'SHOW_BANNER', text: message, visibility: Visibility.ERROR })
        return ctx
      }),

      resetPasswordSuccess: assign(ctx => {
        bannerService.send({
          type: 'SHOW_BANNER',
          text: 'Password reset email sent',
          visibility: Visibility.SUCCESS,
        })
        return ctx
      }),

      signInSuccess: assign(ctx => {
        bannerService.send({
          type: 'SHOW_BANNER',
          text: 'Please verify your email',
          visibility: Visibility.SUCCESS,
        })
        return ctx
      }),
    },
  })

  return (
    <BannerProvider value={bannerService}>
      <AuthProvider value={authService}>
        <App />
      </AuthProvider>
    </BannerProvider>
  )
}

export default Wrapper
