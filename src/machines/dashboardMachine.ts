import { overview } from 'services/overview'
import { createSurvey, editSurvey, finish, publish, clone, getSurveys } from 'services/survey'
import { Survey, SurveyBase, Mode, Status } from 'types/survey.d'
import { assign, createMachine } from 'xstate'

// TODO: refactor this whole machine

interface Context {
  surveys: Survey[]
  isBusy: boolean
  isCloning: boolean
  isCreating: boolean
}

type Events =
  | { type: 'FETCH' }
  | { type: 'RETRY' }
  | { type: 'CREATE'; survey: SurveyBase }
  | { type: 'UPDATE'; survey: SurveyBase; surveyId: string }
  | { type: 'FINISH'; surveyId: string }
  | { type: 'PUBLISH'; surveyId: string }
  | { type: 'CLONE'; surveyId: string }
  | { type: 'OVERVIEW'; surveyId: string }
  | { type: 'CONFIRM' }
  | { type: 'TOGGLE_MODE'; surveyId: string; mode: Mode }

const dashboardMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QFdZgE4DoCWEA2YAxAGICiAKgMIASA2gAwC6ioADgPazYAu27AdixAAPRAEYALADZM9AMxSJAVjkAmCQHZ6WuQBoQAT0Sq5EzGKVj5kgJwTJ9KaoC+z-agyY87AIYRs-FCEEAJgOPwAbuwA1mEeWN5+AVAIAVEAxj68AgyMuUIcXNmCSIbiUmKyEnYaqgAc9HV1cho2+qII0jJy2s2NVkrSNq7uaAm+-oGEGOjsWKx4WQBmcwC2mPFeE8mpkeyZxbn5pYU8fCWgHV2YPRp9dQND+kYIYmJyVTX1jc13w24gTZLHzYPDIdBEABKFEhAE1jmxOGcBEIOpIZPJFCp1FodM9xHVVJhVNYxBoWo56IMNK4Afx2BA4EJNrgCAUkcVUYglDIlEpanUbGITCpLDz8QgTGYpHIGlZ6KolAqJBIRoCxlskoF2UVzlyEHJ3jcbGoxIK7A4pBKxBVPppvk0Wv9Rp5YMh0uk4PAThy9aUOooZBJ6FZDdV7MGrWVXnUlOYbCGSVIbFpVJI6mqgSCwRCdciLiJEBJVNbhZgbIqWlJBSTBXVVQD4nnOf7EABaKMvEzlioPKxSHnkwkZ2lAA */
  createMachine(
    {
      predictableActionArguments: true,
      schema: {
        context: {} as Context,
        events: {} as Events,
        services: {} as {
          fetchSurveys: {
            data: SurveyBase[]
          }
          create: {
            data: SurveyBase
          }
          clone: {
            data: Survey
          }
          update: {
            data: Survey
          }
        },
      },
      context: {
        surveys: [],
        isBusy: false,
        isCloning: false,
        isCreating: false,
      },
      tsTypes: {} as import('./dashboardMachine.typegen').Typegen0,
      id: 'dashboard',
      initial: 'fetching',
      states: {
        idle: {
          id: 'idle',
          on: {
            CREATE: {
              target: 'create',
              actions: ['busy'],
            },
            FETCH: {
              target: 'fetching',
              actions: 'busy',
            },
          },
        },
        fetching: {
          entry: 'busy',
          invoke: {
            src: 'fetchSurveys',
            onDone: [
              {
                actions: ['fetchDone', 'sortSurveys', 'quiet'],
                target: 'idle',
              },
            ],
            onError: [
              {
                target: 'failure',
              },
            ],
          },
        },
        failure: {
          on: {
            RETRY: {
              target: 'fetching',
            },
          },
        },
        update: {
          invoke: {
            src: 'update',
            onDone: {
              target: 'idle',
              actions: ['updateDone', 'sortSurveys', 'quiet'],
            },
            onError: {
              target: 'idle',
              actions: ['updateError', 'quiet'],
            },
          },
        },
        create: {
          entry: 'creating',
          invoke: {
            src: 'create',
            onDone: {
              target: 'idle',
              actions: ['createDone', 'sortSurveys', 'quiet'],
            },
            onError: {
              target: 'idle',
              actions: ['createError', 'quiet'],
            },
          },
        },
        finish: {
          invoke: {
            src: 'finish',
            onDone: {
              target: 'idle',
              actions: ['finishDone', 'quietSurvey'],
            },
            onError: {
              target: 'idle',
              actions: ['finishError', 'quietSurvey'],
            },
          },
        },
        publish: {
          invoke: {
            src: 'publish',
            onDone: {
              target: 'idle',
              actions: ['publishDone', 'quietSurvey'],
            },
            onError: {
              target: 'idle',
              actions: ['publishError', 'quietSurvey'],
            },
          },
        },
        clone: {
          entry: 'cloning',
          invoke: {
            src: 'clone',
            onDone: {
              target: 'idle',
              actions: ['cloneDone', 'sortSurveys'],
            },
            onError: {
              target: 'idle',
              actions: ['cloneError'],
            },
          },
        },
        overview: {
          invoke: {
            src: 'fetchOverview',
            onDone: {
              target: 'idle',
              actions: ['overviewDone', 'quietSurvey'],
            },
            onError: {
              target: 'idle',
              actions: ['overviewError', 'quietSurvey'],
            },
          },
        },
      },
      on: {
        FINISH: {
          target: 'finish',
          actions: ['busySurvey'],
        },
        PUBLISH: {
          target: 'publish',
          actions: ['busySurvey'],
        },
        CLONE: {
          target: 'clone',
        },
        UPDATE: {
          target: 'update',
          actions: ['busySurvey'],
        },
        OVERVIEW: {
          target: 'overview',
          actions: ['busySurvey'],
        },
        TOGGLE_MODE: {
          target: 'idle',
          actions: 'toggleMode',
        },
      },
    },
    {
      actions: {
        quiet: assign(ctx => ({ ...ctx, isBusy: false })),
        cloning: assign(ctx => ({ ...ctx, isCloning: true })),
        creating: assign(ctx => ({ ...ctx, isCreating: true })),
        busy: assign(ctx => ({ ...ctx, isBusy: true })),
        createDone: assign((ctx, event) => ({
          ...ctx,
          isCreating: false,
          surveys: [...ctx.surveys, { ...event.data, mode: Mode.PILOT }],
        })),

        createError: assign(ctx => ({ ...ctx, isCreating: false })),
        updateDone: assign((ctx, event) => {
          const survey = event.data

          const newSurveys = ctx.surveys.map(s => {
            if (s.id === survey.id) {
              return survey
            }
            return s
          })

          return {
            ...ctx,
            surveys: [...newSurveys],
          }
        }),
        updateError: () => {},
        sortSurveys: assign(_ctx => {
          const surveys = _ctx.surveys.sort(
            (a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf(),
          )

          return { surveys }
        }),
        fetchDone: assign((ctx, event) => {
          return { ...ctx, surveys: event.data.map(survey => ({ ...survey, mode: Mode.PILOT })) }
        }),
        busySurvey: assign((ctx, event) => {
          const surveys = ctx.surveys.map(s => {
            if (s.id === event.surveyId) {
              // TODO: fix
              // eslint-disable-next-line no-param-reassign
              s.isBusy = true
            }
            return s
          })

          return { ...ctx, surveys }
        }),
        quietSurvey: assign((ctx, event) => {
          const survey = event.data as Survey

          const surveys = ctx.surveys.map(s => {
            if (s.id === survey?.id) {
              // TODO: fix
              // eslint-disable-next-line no-param-reassign
              s.isBusy = false
            }
            return s
          })

          return { ...ctx, surveys }
        }),
        finishDone: assign((ctx, event) => {
          const data = event.data as any

          const surveys = ctx.surveys.map(s => {
            if (s.id === data.id) {
              // TODO: fix
              // eslint-disable-next-line no-param-reassign
              s.status = Status.FINISHED
            }
            return s
          })

          return { ...ctx, surveys }
        }),
        finishError: () => {},
        publishDone: assign((ctx, event) => {
          const data = event.data as any

          const surveys = ctx.surveys.map(s => {
            if (s.id === data.id) {
              // TODO: fix
              // eslint-disable-next-line no-param-reassign
              s.status = Status.PUBLISHED
            }
            return s
          })

          return { ...ctx, surveys }
        }),
        publishError: () => {},
        cloneDone: assign((ctx, event) => {
          const { data } = event

          ctx.surveys.unshift(data)

          return { ...ctx, isCloning: false }
        }),
        cloneError: assign(ctx => ({ ...ctx, isCloning: false })),
        overviewDone: assign((ctx, event) => {
          const data = event.data as any

          const newSurveys = ctx.surveys.map(survey => {
            if (survey.id === data.id) {
              // TODO: fix
              // eslint-disable-next-line no-param-reassign
              survey.overview = data

              if (survey.status === Status.FINISHED || Status.PUBLISHED) {
                // TODO: fix
                // eslint-disable-next-line no-param-reassign
                survey.mode = Mode.PUBLISHED
              }
            }

            return survey
          })

          return { ...ctx, surveys: newSurveys }
        }),
        overviewError: () => {},
        toggleMode: assign((ctx, event) => {
          const newSurveys = ctx.surveys.map(s => {
            if (s.id === event.surveyId) {
              return { ...s, mode: event.mode }
            }
            return s
          })

          return {
            ...ctx,
            surveys: newSurveys,
          }
        }),
      },
      services: {
        create: async (_ctx, event) => createSurvey(event.survey),
        update: async (_ctx, event) => editSurvey(event.survey),
        fetchSurveys: async () => getSurveys(),
        finish: async (_ctx, event) => finish(event.surveyId),
        publish: async (_ctx, event) => publish(event.surveyId),
        clone: async (_ctx, event) => clone(event.surveyId),
        fetchOverview: async (_ctx, event) => overview(event.surveyId),
      },
    },
  )

export default dashboardMachine
