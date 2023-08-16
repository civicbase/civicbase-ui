import { assign, createMachine } from 'xstate'

export enum Visibility {
  DEFAULT = 'default',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  HIDDEN = 'hidden',
}

interface Context {
  text: string
  visibility: Visibility
}

type Events =
  | { type: 'SHOW_BANNER'; text: string; visibility: Visibility }
  | { type: 'CLOSE_BANNER' }

const bannerMachine = createMachine(
  {
    predictableActionArguments: true,
    schema: {
      context: {} as Context,
      events: {} as Events,
      services: {} as {},
    },
    context: {
      text: '',
      visibility: Visibility.HIDDEN,
    },
    tsTypes: {} as import('./bannerMachine.typegen').Typegen0,
    id: 'banner',
    initial: 'idle',
    states: {
      idle: {
        id: 'idle',
        on: {
          SHOW_BANNER: {
            target: 'showing',
            actions: ['resetBanner', 'show'],
          },
        },
      },
      showing: {
        after: {
          5000: {
            target: 'idle',
            actions: 'resetBanner',
          },
        },
        on: {
          CLOSE_BANNER: {
            target: 'idle',
            actions: 'resetBanner',
          },
        },
      },
    },
  },
  {
    actions: {
      show: assign((ctx, event) => ({ ...ctx, visibility: event.visibility, text: event.text })),
      resetBanner: assign(ctx => ({ ...ctx, visibility: Visibility.HIDDEN, text: '' })),
    },
    services: {},
  },
)

export default bannerMachine
