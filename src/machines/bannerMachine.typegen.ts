// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  internalEvents: {
    'xstate.after(5000)#banner.showing': { type: 'xstate.after(5000)#banner.showing' }
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
    resetBanner: 'CLOSE_BANNER' | 'SHOW_BANNER' | 'xstate.after(5000)#banner.showing'
    show: 'SHOW_BANNER'
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {}
  eventsCausingServices: {}
  matchesStates: 'idle' | 'showing'
  tags: never
}
