import { Method } from 'types/survey.d'
import { assign, createMachine } from 'xstate'

export enum Steps {
  SETUP = 'setup',
  QUADRATIC = 'quadratic',
  CONJOINT = 'conjoint',
  LIKERT = 'likert',
  LANGUAGE = 'language',
  MESSAGE = 'message',
  CUSTOMIZE = 'customize',
}

interface Context {
  isSubmittable: boolean
  order: string[]
  step: Steps
  isEditing: boolean
}

type Events =
  | { type: 'NEXT'; method: Method }
  | { type: 'PREVIOUS'; method: Method }
  | { type: 'SELECTION'; step: string }

const isStepBeforeCurrent = (order: string[], step: string, currentStep: string) => {
  const currentStepIndex = order.findIndex(s => s === currentStep)
  const stepIndex = order.findIndex(s => s === step)

  return stepIndex <= currentStepIndex
}

const surveyMultiFormMachine = createMachine(
  {
    predictableActionArguments: true,
    schema: {
      context: {} as Context,
      events: {} as Events,
      services: {} as {},
    },
    context: {
      isSubmittable: false,
      order: ['setup', 'language', 'quadratic', 'conjoint', 'likert', 'message', 'customize'],
      step: Steps.SETUP,
      isEditing: false,
    },
    tsTypes: {} as import('./surveyMultiFormMachine.typegen').Typegen0,
    id: 'survey-multi-form',
    initial: 'setup',
    states: {
      setup: {
        on: {
          NEXT: [
            {
              target: 'language',
              actions: 'setLanguage',
              cond: (_ctx, event) => event.method === Method.QUADRATIC,
            },
            {
              target: 'conjoint',
              actions: 'setConjoint',
              cond: (_ctx, event) => event.method === Method.CONJOINT,
            },
            {
              target: 'likert',
              actions: 'setLikert',
              cond: (_ctx, event) => event.method === Method.LIKERT,
            },
          ],
        },
      },
      language: {
        on: {
          NEXT: {
            target: 'quadratic',
            actions: 'setQuadratic',
          },
          PREVIOUS: {
            target: 'setup',
          },
        },
      },
      quadratic: {
        on: {
          NEXT: {
            actions: ['submittable', 'setMessage'],
            target: 'message',
          },
          PREVIOUS: {
            target: 'language',
          },
        },
      },
      conjoint: {
        on: {
          NEXT: {
            actions: ['submittable', 'setMessage'],
            target: 'message',
          },
          PREVIOUS: {
            target: 'setup',
          },
        },
      },
      likert: {
        on: {
          NEXT: {
            actions: ['submittable', 'setMessage'],
            target: 'message',
          },
          PREVIOUS: {
            target: 'setup',
          },
        },
      },
      message: {
        on: {
          NEXT: {
            target: 'customize',
            actions: 'setCustomize',
          },
          PREVIOUS: [
            {
              target: 'quadratic',
              cond: (_ctx, event) => event.method === Method.QUADRATIC,
            },
            {
              target: 'conjoint',
              cond: (_ctx, event) => event.method === Method.CONJOINT,
            },
            {
              target: 'likert',
              cond: (_ctx, event) => event.method === Method.LIKERT,
            },
          ],
        },
      },
      customize: {
        on: {
          PREVIOUS: {
            target: 'message',
          },
        },
      },
    },
    on: {
      SELECTION: [
        {
          target: 'setup',
          cond: (ctx, event) =>
            event.step === Steps.SETUP &&
            (ctx.isEditing || isStepBeforeCurrent(ctx.order, event.step, ctx.step)),
        },
        {
          target: 'language',
          cond: (ctx, event) =>
            event.step === Steps.LANGUAGE &&
            (ctx.isEditing || isStepBeforeCurrent(ctx.order, event.step, ctx.step)),
        },
        {
          target: 'quadratic',
          cond: (ctx, event) =>
            event.step === Steps.QUADRATIC &&
            (ctx.isEditing || isStepBeforeCurrent(ctx.order, event.step, ctx.step)),
        },
        {
          target: 'conjoint',
          cond: (ctx, event) =>
            event.step === Steps.CONJOINT &&
            (ctx.isEditing || isStepBeforeCurrent(ctx.order, event.step, ctx.step)),
        },
        {
          target: 'likert',
          cond: (ctx, event) =>
            event.step === Steps.LIKERT &&
            (ctx.isEditing || isStepBeforeCurrent(ctx.order, event.step, ctx.step)),
        },
        {
          target: 'message',
          cond: (ctx, event) =>
            event.step === Steps.MESSAGE &&
            (ctx.isEditing || isStepBeforeCurrent(ctx.order, event.step, ctx.step)),
        },
        {
          target: 'customize',
          cond: (ctx, event) =>
            event.step === Steps.CUSTOMIZE &&
            (ctx.isEditing || isStepBeforeCurrent(ctx.order, event.step, ctx.step)),
        },
      ],
    },
  },
  {
    actions: {
      submittable: assign(ctx => ({ ...ctx, isSubmittable: true })),
      setLanguage: assign(ctx => ({ ...ctx, step: Steps.LANGUAGE })),
      setConjoint: assign(ctx => ({ ...ctx, step: Steps.CONJOINT })),
      setLikert: assign(ctx => ({ ...ctx, step: Steps.LIKERT })),
      setQuadratic: assign(ctx => ({ ...ctx, step: Steps.QUADRATIC })),
      setMessage: assign(ctx => ({ ...ctx, step: Steps.MESSAGE })),
      setCustomize: assign(ctx => ({ ...ctx, step: Steps.CUSTOMIZE })),
    },
  },
)

export default surveyMultiFormMachine
