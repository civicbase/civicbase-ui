import { overview } from 'services/overview'
import { Overview } from 'types/survey'
import { assign, createMachine } from 'xstate'

interface Context {
  overview?: Overview
  isBusy: boolean
  surveyId?: string
}

type Events = any

const overviewMachine = createMachine(
  {
    predictableActionArguments: true,
    schema: {
      context: {} as Context,
      events: {} as Events,
      services: {} as {
        fetchOverview: {
          data: Overview
        }
      },
    },
    context: {
      isBusy: true,
    },
    tsTypes: {} as import('./overviewMachine.typegen').Typegen0,
    id: 'overview',
    initial: 'fetching',
    states: {
      fetching: {
        id: 'fetching',
        invoke: {
          src: 'fetchOverview',
          onDone: {
            actions: ['fetchDone', 'quiet'],
            target: 'success',
          },
          onError: {
            target: 'error',
          },
        },
      },
      error: {
        type: 'final',
      },
      success: {
        type: 'final',
      },
    },
  },
  {
    actions: {
      fetchDone: assign((ctx, event) => {
        return { ...ctx, overview: event.data }
      }),
      quiet: assign(ctx => {
        return { ...ctx, isBusy: false }
      }),
    },
    services: {
      fetchOverview: async ctx => overview(ctx.surveyId!),
    },
  },
)

export default overviewMachine
