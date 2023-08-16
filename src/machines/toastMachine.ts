import { assign, createMachine } from 'xstate'

interface Context {
  text: string
  isVisible: boolean
}

type Events = { type: 'TOAST'; text: string }

const toastMachine = createMachine(
  {
    predictableActionArguments: true,
    schema: {
      context: {} as Context,
      events: {} as Events,
      services: {} as {},
    },
    context: {
      text: '',
      isVisible: false,
    },
    tsTypes: {} as import('./toastMachine.typegen').Typegen0,
    id: 'toast',
    initial: 'idle',
    states: {
      idle: {
        id: 'idle',
        on: {
          TOAST: {
            target: 'toasting',
            actions: 'toast',
          },
        },
      },
      toasting: {
        after: {
          2500: { target: 'idle', actions: 'clear' },
        },
      },
    },
  },
  {
    actions: {
      toast: assign((ctx, event) => {
        return { ...ctx, isVisible: true, text: event.text }
      }),
      clear: assign(ctx => {
        return { ...ctx, isVisible: false, text: '' }
      }),
    },
    services: {},
  },
)

export default toastMachine
