// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  internalEvents: {
    'xstate.init': { type: 'xstate.init' }
  }
  invokeSrcNameMap: {}
  missingImplementations: {
    actions: never
    delays: never
    guards: never
    services: never
  }
  eventsCausingActions: {
    setConjoint: 'NEXT'
    setCustomize: 'NEXT'
    setLanguage: 'NEXT'
    setLikert: 'NEXT'
    setMessage: 'NEXT'
    setQuadratic: 'NEXT'
    submittable: 'NEXT'
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {}
  eventsCausingServices: {}
  matchesStates:
    | 'conjoint'
    | 'customize'
    | 'language'
    | 'likert'
    | 'message'
    | 'quadratic'
    | 'setup'
  tags: never
}
