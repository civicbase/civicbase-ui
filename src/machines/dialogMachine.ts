import { assign, createMachine } from 'xstate'

export enum Visibility {
  CONFIRMATION = 'confirmation',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export enum Variant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
}

interface Context {
  isOpen: boolean
  title?: string
  content?: string
  visibility?: Visibility
  callback?: () => void
  actionText?: string
  variant?: Variant
}

type Events =
  | {
      type: 'OPEN'
      title: string
      content: string
      visibility: Visibility
      variant?: Variant
      callback: () => void
    }
  | { type: 'CLOSE' }
  | { type: 'CANCEL' }
  | { type: 'CONFIRMED' }

const dialogMachine = createMachine(
  {
    predictableActionArguments: true,
    schema: {
      context: {} as Context,
      events: {} as Events,
      services: {} as {},
    },
    context: {
      isOpen: false,
      actionText: 'Confirm',
      variant: Variant.PRIMARY,
    },
    tsTypes: {} as import('./dialogMachine.typegen').Typegen0,
    id: 'banner',
    initial: 'idle',
    states: {
      idle: {
        id: 'idle',
        on: {
          OPEN: {
            target: 'busy',
            actions: 'set',
          },
        },
      },
      busy: {
        on: {
          CONFIRMED: {
            target: 'idle',
            actions: 'reset',
          },
          CLOSE: {
            target: 'idle',
            actions: 'reset',
          },
          CANCEL: {
            target: 'idle',
            actions: 'reset',
          },
        },
      },
    },
  },
  {
    actions: {
      set: assign((_ctx, event) => {
        return {
          isOpen: true,
          title: event.title,
          content: event.content,
          visibility: event.visibility,
          variant: event.variant || Variant.PRIMARY,
          callback: event.callback,
        }
      }),
      reset: assign(() => {
        return { isOpen: false, title: undefined, content: undefined, visibility: undefined }
      }),
    },
    services: {},
  },
)

export default dialogMachine
