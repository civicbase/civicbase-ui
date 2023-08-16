export const AUTHENTICATED_ROUTES = {
  DASHBOARD: '/',
  SURVEY_STEP_FORM: '/surveyForm',
  OVERVIEW: '/overview/:surveyId',
  SURVEY: '/survey/:surveyId',
  FAQ: '/FAQ',
  PREVIEW: '/preview/:surveyId',
  PROFILE: '/profile',
}

export const UNAUTHENTICATED_ROUTES = {
  LOGIN: '/',
  SURVEY: '/survey/:surveyId',
  FAQ: '/FAQ',
}

export const COMMON_ROUTES = {
  TERMS_CONDITIONS: '/terms-conditions',
  PRIVACY_POLICY: '/privacy-policy',
  ABOUT: '/about',
}
