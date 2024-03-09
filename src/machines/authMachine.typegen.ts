// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  internalEvents: {
    'done.invoke.auth.checkingIfLoggedIn:invocation[0]': {
      type: 'done.invoke.auth.checkingIfLoggedIn:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.auth.login:invocation[0]': {
      type: 'done.invoke.auth.login:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.auth.loginOut:invocation[0]': {
      type: 'done.invoke.auth.loginOut:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.auth.resetPassword:invocation[0]': {
      type: 'done.invoke.auth.resetPassword:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.auth.signup:invocation[0]': {
      type: 'done.invoke.auth.signup:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.auth.updateInformation:invocation[0]': {
      type: 'done.invoke.auth.updateInformation:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.auth.updatePassword:invocation[0]': {
      type: 'done.invoke.auth.updatePassword:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'error.platform.auth.checkingIfLoggedIn:invocation[0]': {
      type: 'error.platform.auth.checkingIfLoggedIn:invocation[0]'
      data: unknown
    }
    'error.platform.auth.login:invocation[0]': {
      type: 'error.platform.auth.login:invocation[0]'
      data: unknown
    }
    'error.platform.auth.loginOut:invocation[0]': {
      type: 'error.platform.auth.loginOut:invocation[0]'
      data: unknown
    }
    'error.platform.auth.resetPassword:invocation[0]': {
      type: 'error.platform.auth.resetPassword:invocation[0]'
      data: unknown
    }
    'error.platform.auth.signup:invocation[0]': {
      type: 'error.platform.auth.signup:invocation[0]'
      data: unknown
    }
    'error.platform.auth.updateInformation:invocation[0]': {
      type: 'error.platform.auth.updateInformation:invocation[0]'
      data: unknown
    }
    'error.platform.auth.updatePassword:invocation[0]': {
      type: 'error.platform.auth.updatePassword:invocation[0]'
      data: unknown
    }
    'xstate.init': { type: 'xstate.init' }
  }
  invokeSrcNameMap: {
    checkIfLoggedIn: 'done.invoke.auth.checkingIfLoggedIn:invocation[0]'
    login: 'done.invoke.auth.login:invocation[0]'
    loginOut: 'done.invoke.auth.loginOut:invocation[0]'
    resetPassword: 'done.invoke.auth.resetPassword:invocation[0]'
    signup: 'done.invoke.auth.signup:invocation[0]'
    updateInformation: 'done.invoke.auth.updateInformation:invocation[0]'
    updatePassword: 'done.invoke.auth.updatePassword:invocation[0]'
  }
  missingImplementations: {
    actions: 'error' | 'resetPasswordSuccess' | 'signInSuccess'
    delays: never
    guards: never
    services: never
  }
  eventsCausingActions: {
    checkingDone:
      | 'done.invoke.auth.checkingIfLoggedIn:invocation[0]'
      | 'error.platform.auth.checkingIfLoggedIn:invocation[0]'
    clearUser:
      | 'done.invoke.auth.loginOut:invocation[0]'
      | 'error.platform.auth.checkingIfLoggedIn:invocation[0]'
      | 'error.platform.auth.loginOut:invocation[0]'
    error:
      | 'error.platform.auth.login:invocation[0]'
      | 'error.platform.auth.loginOut:invocation[0]'
      | 'error.platform.auth.resetPassword:invocation[0]'
      | 'error.platform.auth.signup:invocation[0]'
      | 'error.platform.auth.updateInformation:invocation[0]'
      | 'error.platform.auth.updatePassword:invocation[0]'
    goToLoginPage:
      | 'done.invoke.auth.loginOut:invocation[0]'
      | 'error.platform.auth.loginOut:invocation[0]'
    loginBusy: 'LOGIN'
    loginOutBusy: 'LOGOUT'
    loginOutQuiet:
      | 'done.invoke.auth.loginOut:invocation[0]'
      | 'error.platform.auth.loginOut:invocation[0]'
    loginQuiet: 'done.invoke.auth.login:invocation[0]' | 'error.platform.auth.login:invocation[0]'
    resetPasswordBusy: 'RESET_PASSWORD'
    resetPasswordQuiet:
      | 'done.invoke.auth.resetPassword:invocation[0]'
      | 'error.platform.auth.resetPassword:invocation[0]'
    resetPasswordSuccess: 'done.invoke.auth.resetPassword:invocation[0]'
    setUser:
      | 'done.invoke.auth.checkingIfLoggedIn:invocation[0]'
      | 'done.invoke.auth.updatePassword:invocation[0]'
    setUserLogin: 'done.invoke.auth.login:invocation[0]'
    signInSuccess: 'done.invoke.auth.signup:invocation[0]'
    signupBusy: 'SIGNUP'
    signupQuiet:
      | 'done.invoke.auth.signup:invocation[0]'
      | 'error.platform.auth.signup:invocation[0]'
    updateInformationBusy: 'UPDATE_INFORMATION'
    updateInformationQuiet:
      | 'done.invoke.auth.updateInformation:invocation[0]'
      | 'error.platform.auth.updateInformation:invocation[0]'
    updateName: 'done.invoke.auth.updateInformation:invocation[0]'
    updatePasswordBusy: 'UPDATE_PASSWORD'
    updatePasswordQuiet:
      | 'done.invoke.auth.updatePassword:invocation[0]'
      | 'error.platform.auth.updatePassword:invocation[0]'
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {}
  eventsCausingServices: {
    checkIfLoggedIn: 'xstate.init'
    login: 'LOGIN'
    loginOut: 'LOGOUT'
    resetPassword: 'RESET_PASSWORD'
    signup: 'SIGNUP'
    updateInformation: 'UPDATE_INFORMATION'
    updatePassword: 'UPDATE_PASSWORD'
  }
  matchesStates:
    | 'checkingIfLoggedIn'
    | 'idle'
    | 'loggedIn'
    | 'loggedOut'
    | 'login'
    | 'loginOut'
    | 'resetPassword'
    | 'signup'
    | 'updateInformation'
    | 'updatePassword'
  tags: never
}
