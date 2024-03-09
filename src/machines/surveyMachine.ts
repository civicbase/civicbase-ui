import { createAnswer, getSurvey } from 'services/survey'
import { Survey, Status } from 'types/survey.d'
import { TAKEN_SURVEY_TOKEN } from 'utilities/constants'
import { setSurveyTaken } from 'utilities/survey'
import { assign, createMachine } from 'xstate'
import { send } from 'xstate/lib/actions'

type Meta = {
  startAt: string
  questionsLoadedAt?: string
}

type Questions = {
  credits: number
  id: string
  order: number
  vote: number
}

type Feedback = {
  answer: string
  id: string
}

type Answer = {
  leftCredits?: number
  questions: Questions[]
  status: Status
  surveyId: string
  time: Meta
  feedback?: Feedback[]
}

export interface Context {
  isTaken: boolean
  isLoading: boolean
  surveyId: string
  survey: Survey | null
  meta: Meta
}

type Events =
  | { type: 'NEXT' }
  | { type: 'CHECK' }
  | { type: 'TRIAGE' }
  | { type: 'SUBMIT'; values: { leftCredits?: number; questions: Questions[]; feedback?: any } }
  | { type: 'FINISH' }

type Services = {
  fetchSurvey: { data: Survey }
}

const isAlreadyTaken = (ctx: Context) => {
  if (ctx.survey?.status === Status.PILOT || ctx.survey?.features?.multipleAnswerFromSameSource)
    return false

  const item = window.localStorage.getItem(TAKEN_SURVEY_TOKEN)

  if (item) {
    const takenSurveys: string[] = JSON.parse(item) || []
    const found = takenSurveys.find(id => id === ctx.surveyId)

    if (found) {
      return true
    }
  }
  return false
}

const surveyMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5SwK4CcBuYCeA6AZmAC4DGAFgJYB2UAyultgMQQD2VYu1GrA1p6kw4CxctToMcCbqxIBDIhXYBtAAwBdNesSgADq1gVF7HSAAeiAEwAWAOy4AbA+uqHq1S4AcLgMwBWABoQbEQARk9VXD8fZzsATjjbJLjLSwBfNKDBRhFSShp6IWYwNDRWNFxdABsFfHKAW1xs4UI88ULGaSoeeWMqLS1TfUM+0wsEG3snFzcPVW9VfyCQhE9LXESHPz9PCMt3PwcfDKzJPHIwEl5xJgBhAAkAUVuAaUGkEGGjJSoxxAdLH5cJYHGtrH5LJ5nKo-HFlmFtrhQlsfJYfKFwbZErZrCcQM1zmRLtcaHcnq9lKFtB8vqMPuMAUCQWCIVCXLD4Qg4tYkbtbG4drYYRj0pl8WdcBcrjcHs83pZqXoDN8TPT-oDgaCbKzoRzglYfHEkT5VKE4j4fFidtyHHiCbgiGgKHIoDcACoAJQAkgBBADij3eSpGPz+CFCMKNIMODhSoVCPi8nIT608cVc2whOLNGLtEsdztdpM9voDlMVn2VdNA4wjsM1MbjCaT+om0UcqWsoVSPk8oVsJtxYvtAHcwFUSKx6mAmAA5R4ADTdQcrIdVNbCLiNa0Olls4XCW1sydRuDTGe2e67cVzw4lAEcUHA+rAmLQAKoAIQAsl7lxohirUM1XDI5PA2Jwe1BTx-EWTkbAcJFtW2M03ESPw8yKJoUAAI3qIxFFJNgOC4bo+AECVUDwgjxC6HoFB+AYAJpID13MMJzR8XATUsM04kOCJDXgtxcCFBM9g8NZIUwnIqPwohCKgJgSjKCpqlqBpsKwuSaJoOjZAYlQNBXWlgI3cN+SBIVrDsUI-F8cEHGTCJRJsxMIns6w1ljGThEnepqmIH4mAAMS9WcvVoe4TNY34QNSAdgUtfsd2RHZ4Ls41XDsgdTXjNFfPOKdAr6ULwsi6KqUAtc4vMhKuLRfdbFSrZPHg-kkVUfc022dMsWcDIxSoVgIDgUwCWqlVavYhAAFonNbebcHcdwTX8dEtxiQrcjEAozkm6sZusSxkwcUIz0hQ47HiXjjjvLCpRJKADrMo7Dm4-xzUvAF3GPVszS45x917dDEhiO7TiwgsXXEF62PGXYjRiezQVjAcoR8DKgV7aIb3COJPD8VRpPunIxwnKcwDh6ba0sdMogiWwdn7OnVAJk91gBNMMRiGC01tUnhEfZ8fngFiarDOyE01E0nGcXicvg8Ezy53twR2MFtp0hTYfFqbJf5SJxK63ZboxNrW0a0SYTpmCIxvAcIfFB7iqqIK2NM+GrAjc7Ei7Zq5YtC2Vit3iYTZkEAWRJxtvwag5CqAB1IwyG-OBYBdKm9cO8YbASZaNr8btbF41JAktjFuOzNnuSL-ibNj+OqmpsM86NRYMSLvdS8BdrsaJ0FLWzI4km2hO0DAOQIGwN05H4abPZpxBPBL3BjsSFnrF7FNOXNNfURsdac38WxtuGogfQwOQKBqHC3ZbkCV-WdemsPvtUWTey1-mPsBzcXYAbbRUuUB+5lHIfVhP4CEP0urJhhKJLUdMjguHcEcQaaQgA */
  createMachine(
    {
      context: {
        isTaken: false,
        isLoading: false,
        surveyId: '',
        survey: null,
        meta: {
          startAt: new Date().toISOString(),
        },
      },
      tsTypes: {} as import('./surveyMachine.typegen').Typegen0,
      schema: { context: {} as Context, events: {} as Events, services: {} as Services },
      predictableActionArguments: true,
      id: 'survey',
      initial: 'fetchingSurvey',
      states: {
        fetchingSurvey: {
          entry: 'loading',
          invoke: {
            src: 'fetchSurvey',
            onDone: [
              {
                target: 'checking',
                actions: ['setSurvey', 'quiet'],
              },
            ],
            onError: [
              {
                target: 'error',
                actions: 'quiet',
              },
            ],
          },
        },
        checking: {
          entry: send({ type: 'CHECK' }),
          on: {
            CHECK: [
              {
                target: 'notAvailable',
                cond: 'isFinished',
              },
              {
                target: 'alreadyTaken',
                cond: 'isAlreadyTaken',
              },
              {
                target: 'triaging',
              },
            ],
          },
        },
        triaging: {
          entry: send({ type: 'TRIAGE' }),
          on: {
            TRIAGE: [
              {
                target: 'welcome',
                cond: 'hasWelcomeMessage',
              },
              {
                target: 'questions',
              },
            ],
          },
        },
        welcome: {
          on: {
            NEXT: {
              target: 'questions',
            },
          },
        },
        questions: {
          entry: 'questionsLoadedAt',
          on: {
            SUBMIT: {
              target: 'submitting',
            },
          },
        },
        submitting: {
          invoke: {
            src: 'submit',
            onDone: [
              {
                target: 'completion',
                actions: 'register',
              },
            ],
            onError: [
              {
                target: 'error',
              },
            ],
          },
        },
        completion: {
          entry: send({ type: 'FINISH' }),
          on: {
            FINISH: [
              {
                target: 'finalWithMessage',
                cond: 'hasCompletionMessage',
              },
              {
                target: 'final',
              },
            ],
          },
        },
        finalWithMessage: {
          type: 'final',
        },
        final: {
          type: 'final',
        },
        alreadyTaken: {
          type: 'final',
        },
        notAvailable: {
          type: 'final',
        },
        error: {
          type: 'final',
        },
      },
    },
    {
      guards: {
        hasCompletionMessage: ctx => !!ctx.survey?.message?.completion,
        hasWelcomeMessage: ctx => !!ctx.survey?.message?.welcome,
        isAlreadyTaken: ctx => isAlreadyTaken(ctx),
        isFinished: ctx => ctx.survey?.status === Status.FINISHED,
      },
      actions: {
        loading: assign(ctx => ({ ...ctx, isLoading: true })),
        quiet: assign(ctx => ({ ...ctx, isLoading: false })),
        setSurvey: assign((ctx, event) => ({ ...ctx, survey: event.data })),
        questionsLoadedAt: assign(ctx => ({ ...ctx, questionsLoadedAt: new Date().toISOString() })),
        register: ctx => {
          if (ctx.survey?.status === Status.PUBLISHED) {
            setSurveyTaken(ctx.surveyId)
          }
        },
      },
      services: {
        fetchSurvey: async ctx => getSurvey(ctx.surveyId),
        submit: async (ctx, event) => {
          if (!ctx.survey) return Promise.reject()

          const answer: Answer = {
            questions: event.values.questions,
            status: ctx.survey.status,
            surveyId: ctx.surveyId,
            time: ctx.meta,
          }

          answer.leftCredits = event.values.leftCredits

          if (ctx.survey.setup.feedback?.active) {
            answer.feedback = event.values.feedback?.filter((f: any) => f.answer !== '')
          }

          return createAnswer(answer)
        },
      },
    },
  )

export default surveyMachine
