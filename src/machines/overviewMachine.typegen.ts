// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  internalEvents: {
    'done.invoke.fetching:invocation[0]': {
      type: 'done.invoke.fetching:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'xstate.init': { type: 'xstate.init' }
  }
  invokeSrcNameMap: {
    fetchOverview: 'done.invoke.fetching:invocation[0]'
  }
  missingImplementations: {
    actions: never
    delays: never
    guards: never
    services: never
  }
  eventsCausingActions: {
    fetchDone: 'done.invoke.fetching:invocation[0]'
    quiet: 'done.invoke.fetching:invocation[0]'
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {}
  eventsCausingServices: {
    fetchOverview: 'xstate.init'
  }
  matchesStates: 'error' | 'fetching' | 'success'
  tags: never
}
