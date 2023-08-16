// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  internalEvents: {
    'done.invoke.dashboard.clone:invocation[0]': {
      type: 'done.invoke.dashboard.clone:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.dashboard.create:invocation[0]': {
      type: 'done.invoke.dashboard.create:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.dashboard.fetching:invocation[0]': {
      type: 'done.invoke.dashboard.fetching:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.dashboard.finish:invocation[0]': {
      type: 'done.invoke.dashboard.finish:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.dashboard.overview:invocation[0]': {
      type: 'done.invoke.dashboard.overview:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.dashboard.publish:invocation[0]': {
      type: 'done.invoke.dashboard.publish:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.dashboard.update:invocation[0]': {
      type: 'done.invoke.dashboard.update:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'error.platform.dashboard.clone:invocation[0]': {
      type: 'error.platform.dashboard.clone:invocation[0]'
      data: unknown
    }
    'error.platform.dashboard.create:invocation[0]': {
      type: 'error.platform.dashboard.create:invocation[0]'
      data: unknown
    }
    'error.platform.dashboard.finish:invocation[0]': {
      type: 'error.platform.dashboard.finish:invocation[0]'
      data: unknown
    }
    'error.platform.dashboard.overview:invocation[0]': {
      type: 'error.platform.dashboard.overview:invocation[0]'
      data: unknown
    }
    'error.platform.dashboard.publish:invocation[0]': {
      type: 'error.platform.dashboard.publish:invocation[0]'
      data: unknown
    }
    'error.platform.dashboard.update:invocation[0]': {
      type: 'error.platform.dashboard.update:invocation[0]'
      data: unknown
    }
    'xstate.init': { type: 'xstate.init' }
  }
  invokeSrcNameMap: {
    clone: 'done.invoke.dashboard.clone:invocation[0]'
    create: 'done.invoke.dashboard.create:invocation[0]'
    fetchOverview: 'done.invoke.dashboard.overview:invocation[0]'
    fetchSurveys: 'done.invoke.dashboard.fetching:invocation[0]'
    finish: 'done.invoke.dashboard.finish:invocation[0]'
    publish: 'done.invoke.dashboard.publish:invocation[0]'
    update: 'done.invoke.dashboard.update:invocation[0]'
  }
  missingImplementations: {
    actions: never
    delays: never
    guards: never
    services: never
  }
  eventsCausingActions: {
    busy:
      | 'CLONE'
      | 'CREATE'
      | 'FETCH'
      | 'FINISH'
      | 'OVERVIEW'
      | 'PUBLISH'
      | 'RETRY'
      | 'TOGGLE_MODE'
      | 'UPDATE'
      | 'xstate.init'
    busySurvey: 'FINISH' | 'OVERVIEW' | 'PUBLISH' | 'UPDATE'
    cloneDone: 'done.invoke.dashboard.clone:invocation[0]'
    cloneError: 'error.platform.dashboard.clone:invocation[0]'
    cloning: 'CLONE'
    createDone: 'done.invoke.dashboard.create:invocation[0]'
    createError: 'error.platform.dashboard.create:invocation[0]'
    creating: 'CREATE'
    fetchDone: 'done.invoke.dashboard.fetching:invocation[0]'
    finishDone: 'done.invoke.dashboard.finish:invocation[0]'
    finishError: 'error.platform.dashboard.finish:invocation[0]'
    overviewDone: 'done.invoke.dashboard.overview:invocation[0]'
    overviewError: 'error.platform.dashboard.overview:invocation[0]'
    publishDone: 'done.invoke.dashboard.publish:invocation[0]'
    publishError: 'error.platform.dashboard.publish:invocation[0]'
    quiet:
      | 'done.invoke.dashboard.create:invocation[0]'
      | 'done.invoke.dashboard.fetching:invocation[0]'
      | 'done.invoke.dashboard.update:invocation[0]'
      | 'error.platform.dashboard.create:invocation[0]'
      | 'error.platform.dashboard.update:invocation[0]'
    quietSurvey:
      | 'done.invoke.dashboard.finish:invocation[0]'
      | 'done.invoke.dashboard.overview:invocation[0]'
      | 'done.invoke.dashboard.publish:invocation[0]'
      | 'error.platform.dashboard.finish:invocation[0]'
      | 'error.platform.dashboard.overview:invocation[0]'
      | 'error.platform.dashboard.publish:invocation[0]'
    sortSurveys:
      | 'done.invoke.dashboard.clone:invocation[0]'
      | 'done.invoke.dashboard.create:invocation[0]'
      | 'done.invoke.dashboard.fetching:invocation[0]'
      | 'done.invoke.dashboard.update:invocation[0]'
    toggleMode: 'TOGGLE_MODE'
    updateDone: 'done.invoke.dashboard.update:invocation[0]'
    updateError: 'error.platform.dashboard.update:invocation[0]'
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {}
  eventsCausingServices: {
    clone: 'CLONE'
    create: 'CREATE'
    fetchOverview: 'OVERVIEW'
    fetchSurveys:
      | 'CLONE'
      | 'FETCH'
      | 'FINISH'
      | 'OVERVIEW'
      | 'PUBLISH'
      | 'RETRY'
      | 'TOGGLE_MODE'
      | 'UPDATE'
      | 'xstate.init'
    finish: 'FINISH'
    publish: 'PUBLISH'
    update: 'UPDATE'
  }
  matchesStates:
    | 'clone'
    | 'create'
    | 'failure'
    | 'fetching'
    | 'finish'
    | 'idle'
    | 'overview'
    | 'publish'
    | 'update'
  tags: never
}
