// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  internalEvents: {
    'done.invoke.survey.fetchingSurvey:invocation[0]': {
      type: 'done.invoke.survey.fetchingSurvey:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.survey.submitting:invocation[0]': {
      type: 'done.invoke.survey.submitting:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'error.platform.survey.fetchingSurvey:invocation[0]': {
      type: 'error.platform.survey.fetchingSurvey:invocation[0]'
      data: unknown
    }
    'xstate.init': { type: 'xstate.init' }
  }
  invokeSrcNameMap: {
    fetchSurvey: 'done.invoke.survey.fetchingSurvey:invocation[0]'
    submit: 'done.invoke.survey.submitting:invocation[0]'
  }
  missingImplementations: {
    actions: never
    delays: never
    guards: never
    services: never
  }
  eventsCausingActions: {
    loading: 'xstate.init'
    questionsLoadedAt: 'NEXT' | 'TRIAGE'
    quiet:
      | 'done.invoke.survey.fetchingSurvey:invocation[0]'
      | 'error.platform.survey.fetchingSurvey:invocation[0]'
    register: 'done.invoke.survey.submitting:invocation[0]'
    setSurvey: 'done.invoke.survey.fetchingSurvey:invocation[0]'
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {
    hasCompletionMessage: 'FINISH'
    hasWelcomeMessage: 'TRIAGE'
    isAlreadyTaken: 'CHECK'
    isFinished: 'CHECK'
  }
  eventsCausingServices: {
    fetchSurvey: 'xstate.init'
    submit: 'SUBMIT'
  }
  matchesStates:
    | 'alreadyTaken'
    | 'checking'
    | 'completion'
    | 'error'
    | 'fetchingSurvey'
    | 'final'
    | 'finalWithMessage'
    | 'notAvailable'
    | 'questions'
    | 'submitting'
    | 'triaging'
    | 'welcome'
  tags: never
}
