// import { navigate } from '@reach/router'
import { getUser, login, logout, reset, signup } from 'services/auth'
import { updateInformation, updatePassword } from 'services/user'
import { LoginRequest, ResetRequest, SignupRequest } from 'types/request'
import { LoginReponse } from 'types/response'
import { CivicbaseUser } from 'types/user'
import { assign, createMachine } from 'xstate'

interface Context {
  user?: CivicbaseUser
  isLoggin: boolean
  isSignup: boolean
  isLogginOut: boolean
  isChecking: boolean
  isResetingPassword: boolean
  isUpdatingPassword: boolean
  isUpdatingInformation: boolean
}

type Events =
  | { type: 'LOGIN'; values: LoginRequest }
  | { type: 'SIGNUP'; values: SignupRequest }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_PASSWORD'; password: string }
  | { type: 'UPDATE_INFORMATION'; name: string }
  | { type: 'RESET_PASSWORD'; values: ResetRequest }

const authMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QEMCuAXAFgOgMabFwGsBLAOygEkAzAGQHsoYJKyBiCessbcgN3pEeaLHgLFyVOo2asE-ermToSXANoAGALqatiUAAd6sEiq76QAD0QAmAOwA2bAEYAnPY0BmGwBY7G-08AGhAAT0QADhtsV0cAVgcbOIBfZJCRHHxCUgoaBiZIVjYwACcS+hLsAwAbZWoKgFtsDLFsyTyZQrJ5MgElMzJdXQsjEwGLawR7JzcPbz8ArxDwqYCXOOcvV2cbTzi95wdU9Iwcas6WdloAeQBxa4BVABVhpBBR01UyCcRNhwjsEkNBpnHEkhE7BFXMtEJ47K5sBoEjZ7NtNhEHHtjiAWucChBrhg2DdbpQAHKvQzGT7mN6TTwRTyImwYzyeZzORx2OIRGEIOw+Jz-FF2BkOPyC5zY3EXQnoNgAZUotzJDwACpT3tTxnTEA5XHFsHEfIc7Jywe5YnzRXZsBCwZ4NPrGTyUmkcadsHjmHK2AAlACiCoDTwA+mqAIIKhUAdWufoAIpqPjrQPTOXbBZ4fJ5XK4TT4nXy9rb8yCQYk9gcju6ZVByBwuDwFEJmp68eQen1lF8htoRtqvj8po4XO5Ar5-IE+RFjYic258z4XbPpe3GA3SuVKjU6o026IO90FP1e9pk4PaWnbKPZhOFtOwnqfAidrtGRyuTy16ITFAyKgBiNtwvC9IIwien+AEGF2ig9uo579m8KZDrqCCbD4hoaIKUIaOCkLQk+-K7NggqOBEHI8qCDh2D+OBQYBxRlBUVS1Og9QlE0LQMTBJ7wYMiF6Mhl7fGh+qGsaprmjYlp2Hy4oaNg7L7LmBo7BEFF0V6G5kL6nAgS2EGHjpcqwaeCE6EhVJjKh17odhWE4a4eE8gRfJ+IaHIQqiHIaKybonMZ9a6USW4sbu7H7nW5CmXxAx9kJ1k0qJdkYY5-zOfhULyUkMQBPC2G+RiPhaSUcBgOgarILAsAAO4VBAwHNmBrYtGVsAVVVNX1SUEBmfxCUDjZV5WDeMzjl4k6LMERGYT4iJ4Q4Fa7PsGw1oFODtZ11V1Q1THbqxe6cQem3lZVO09X1cVnpZiVasNKWjSO41zFNj4rHEGxGokL67P4S2fVpYUlGwliwOgyjCNQ6ClAAFHEwIaAAlGwLTAxeD3DhofIaKk7pkPQEBwBYGRDclw4ALTLnyFMaTE8QYvm4o8n4WkkBA1RgGTqZPZ+gKijmn3uA4GxwsW2xKW4wKQqKq2HFpWQSLk0j4qw3O2U9Pg2HyNhuIi5E2F4svVlp3pdOrI2TDsDgzPsNHW4Ky4+DOdNxNs3IBFWLKeKbsoYBbj2TELMQUfEApTksRHctEfnOFErgOIcwLy7W67BQHw6+S4HIJ1C+bOIWiTWph2CivqieeOKAqJ1pPEZ2hrLYPq-hxP4Gm60XUckfYfyFuy+px77wVyvXdmzk4diQiLS1IrO+buXmiKV+XNvopiAUeqIW3nd1DWj5rAJx8u3LLlEFFJO5X2Om7EQ+C+Ec+6nojA-vkzY0R6KKW75qe-s3t48kIAA */
  createMachine(
    {
      context: {
        user: undefined,
        isLoggin: false,
        isSignup: false,
        isLogginOut: false,
        isChecking: true,
        isResetingPassword: false,
        isUpdatingPassword: false,
        isUpdatingInformation: false,
      },
      tsTypes: {} as import('./authMachine.typegen').Typegen0,
      schema: {
        context: {} as Context,
        events: {} as Events,
        services: {} as {
          checkIfLoggedIn: {
            data: {
              user: CivicbaseUser | undefined
            }
          }
          login: {
            data: LoginReponse
          }
          updatePassword: {
            data: LoginReponse
          }
          updateInformation: {
            data: {
              name: string
            }
          }
        },
      },
      predictableActionArguments: true,
      id: 'auth',
      initial: 'checkingIfLoggedIn',
      states: {
        idle: {},
        checkingIfLoggedIn: {
          invoke: {
            src: 'checkIfLoggedIn',
            onDone: [
              {
                target: 'loggedIn',
                actions: ['checkingDone', 'setUser'],
              },
            ],
            onError: [
              {
                target: 'loggedOut',
                actions: ['checkingDone', 'clearUser'],
              },
            ],
          },
        },
        loggedIn: {
          on: {
            LOGOUT: {
              target: 'loginOut',
              actions: 'loginOutBusy',
            },
            UPDATE_PASSWORD: {
              target: 'updatePassword',
              actions: 'updatePasswordBusy',
            },
            UPDATE_INFORMATION: {
              target: 'updateInformation',
              actions: 'updateInformationBusy',
            },
          },
        },
        updateInformation: {
          invoke: {
            src: 'updateInformation',
            onDone: [
              {
                target: 'loggedIn',
                actions: ['updateInformationQuiet', 'updateName'],
              },
            ],
            onError: [
              // TODO: handle error
              {
                target: 'loggedIn',
                actions: ['updateInformationQuiet', 'error'],
              },
            ],
          },
        },
        updatePassword: {
          invoke: {
            src: 'updatePassword',
            onDone: [
              {
                target: 'loggedIn',
                actions: ['updatePasswordQuiet', 'setUser'],
              },
            ],
            onError: [
              // TODO: handle error
              {
                target: 'loggedIn',
                actions: ['updatePasswordQuiet', 'error'],
              },
            ],
          },
        },
        loggedOut: {
          on: {
            LOGIN: {
              target: 'login',
              actions: 'loginBusy',
            },
            SIGNUP: {
              target: 'signup',
              actions: 'signupBusy',
            },
            RESET_PASSWORD: {
              target: 'resetPassword',
              actions: 'resetPasswordBusy',
            },
          },
        },
        login: {
          invoke: {
            src: 'login',
            onDone: [
              {
                target: 'loggedIn',
                actions: ['loginQuiet', 'setUserLogin'],
              },
            ],
            onError: [
              {
                target: 'loggedOut',
                actions: ['loginQuiet', 'error'],
              },
            ],
          },
        },
        signup: {
          invoke: {
            src: 'signup',
            onDone: [
              {
                target: 'loggedOut',
                actions: ['signupQuiet', 'signInSuccess'],
              },
            ],
            onError: [
              {
                target: 'loggedOut',
                actions: ['signupQuiet', 'error'],
              },
            ],
          },
        },
        loginOut: {
          invoke: {
            src: 'loginOut',
            onDone: [
              {
                target: 'loggedOut',
                actions: ['loginOutQuiet', 'clearUser', 'goToLoginPage'],
              },
            ],
            onError: [
              {
                target: 'loggedOut',
                actions: ['loginOutQuiet', 'clearUser', 'goToLoginPage', 'error'],
              },
            ],
          },
        },
        resetPassword: {
          invoke: {
            src: 'resetPassword',
            onDone: [
              {
                target: 'loggedOut',
                actions: ['resetPasswordQuiet', 'resetPasswordSuccess'],
              },
            ],
            onError: [
              {
                target: 'loggedOut',
                actions: ['resetPasswordQuiet', 'error'],
              },
            ],
          },
        },
      },
    },
    {
      actions: {
        setUser: assign((ctx, event) => ({ ...ctx, user: event.data.user })),
        setUserLogin: assign((ctx, event) => ({ ...ctx, user: event.data.user })),
        clearUser: assign(ctx => ({ ...ctx, user: undefined })),
        loginBusy: assign(ctx => ({ ...ctx, isLoggin: true })),
        loginQuiet: assign(ctx => ({ ...ctx, isLoggin: false })),
        loginOutBusy: assign(ctx => ({ ...ctx, isLogginOut: true })),
        loginOutQuiet: assign(ctx => ({ ...ctx, isLogginOut: false })),
        signupBusy: assign(ctx => ({ ...ctx, isSignup: true })),
        signupQuiet: assign(ctx => ({ ...ctx, isSignup: false })),
        resetPasswordBusy: assign(ctx => ({ ...ctx, isResetingPassword: true })),
        resetPasswordQuiet: assign(ctx => ({ ...ctx, isResetingPassword: false })),
        checkingDone: assign(ctx => ({ ...ctx, isChecking: false })),
        updateName: assign((ctx, event) => ({
          ...ctx,
          user: { ...(ctx.user as CivicbaseUser), name: event.data.name },
        })),
        updatePasswordBusy: assign(ctx => ({ ...ctx, isUpdatingPassword: true })),
        updatePasswordQuiet: assign(ctx => ({ ...ctx, isUpdatingPassword: false })),
        updateInformationBusy: assign(ctx => ({ ...ctx, isUpdatingInformation: true })),
        updateInformationQuiet: assign(ctx => ({ ...ctx, isUpdatingInformation: false })),
        goToLoginPage: () => {
          // navigate('/')
          // TODO:
        },
      },
      services: {
        checkIfLoggedIn: async () => getUser(),
        login: async (_ctx, event) => login(event.values),
        loginOut: async () => logout(),
        signup: async (_ctx, event) => signup(event.values),
        resetPassword: async (_ctx, event) => reset(event.values),
        updatePassword: async (_ctx, event) => updatePassword(event.password),
        updateInformation: async (_ctx, event) => updateInformation(event.name),
      },
    },
  )

export default authMachine
