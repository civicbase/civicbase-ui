import { createMachine } from 'xstate'

interface Context {
  text: string
  isVisible: boolean
}

type Events =
  | { type: 'FORGOT_PASSWORD' }
  | { type: 'SIGNUP' }
  | { type: 'LOGIN' }
  | { type: 'CONFIRM_PASSWORD' }
  | { type: 'CONFIRM_SIGNUP' }

const loginMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBsD2UCWA7AxAGQHkBxASQDkBtABgF1FQAHVWDAFw1S3pAA9EAWAEwAaEAE9EARiEA6AJwA2AMwBWSUoUB2dVoAcggL4HRaTFhmnsOAGIEASkQIAVAPoAFAIIBlLwHV7ACLUdEggTCzsnNx8CIKagjKC-JpKcvwquur8yaISCNJyMgqCulSCSppUVCoqSkpGJujYFk24XiREZACqbsHc4WwcXKExcQlJKWkZWTniiLqFCvySVOpUSvwbCrr1xiCW5gBmqABOUKisbgCGsLAA7qcQOF5dAMKvAKI+faEDkcOgGIKDIyHYqOSqYo7ERzfL8RYlMoVKo1OpGPZYVAQODcA79ZiDKIjRAAWgUuVJChkVSqE00cm08PUDX2rRaZnxESG0Sk+lBVHichUggySn0Kk0FLhCUqkk0Cio-G2y10LIOMhYUCwAFcGJzCQDeAIFok5JIFMDBIJiordFKTRUIVQIfx1usVGq2QA3MAnDCHDAAYyu-31oeJCCE9oSDOBwrUrq09M9ZhkxzOF2utweJwgYe5Ef4JsEZotwutgltUoKMg0xUq8Pl7o9e3V6fOrFenADJwAtiGC4wCeHAYh6UoZNlamUJdJVPxq-DaxalJWqsDJOiDEA */
  createMachine(
    {
      predictableActionArguments: true,
      context: { text: '', isVisible: false },
      tsTypes: {} as import('./loginMachine.typegen').Typegen0,
      schema: { context: {} as Context, events: {} as Events, services: {} as {} },
      id: 'login',
      initial: 'login',
      states: {
        login: {
          on: {
            FORGOT_PASSWORD: {
              target: 'forgotPassword',
            },
            SIGNUP: {
              target: 'signup',
            },
          },
        },
        signup: {
          on: {
            CONFIRM_SIGNUP: {
              target: 'verification',
            },
          },
        },
        verification: {},
        forgotPassword: {
          on: {
            CONFIRM_PASSWORD: {
              target: 'confirm',
            },
          },
        },
        confirm: {},
      },
      on: {
        LOGIN: {
          target: '.login',
          internal: false,
        },
      },
    },
    {
      actions: {},
      services: {},
    },
  )

export default loginMachine
