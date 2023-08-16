import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import tw from 'twin.macro'

import About from 'pages/about'

import { UNAUTHENTICATED_ROUTES, COMMON_ROUTES } from './routes'

const NotFound = lazy(() => import('pages/404'))
const Login = lazy(() => import('pages/login'))
const PrivacyPolicy = lazy(() => import('pages/privacy-policy'))
const Survey = lazy(() => import('pages/survey'))
const TermsConditions = lazy(() => import('pages/terms-conditions'))

const UnauthenticatedApp = () => {
  const router = createBrowserRouter([
    {
      path: UNAUTHENTICATED_ROUTES.LOGIN,
      element: <Login />,
    },
    {
      path: UNAUTHENTICATED_ROUTES.SURVEY,
      element: <Survey />,
    },
    {
      path: COMMON_ROUTES.TERMS_CONDITIONS,
      element: <TermsConditions />,
    },
    {
      path: COMMON_ROUTES.PRIVACY_POLICY,
      element: <PrivacyPolicy />,
    },
    {
      path: COMMON_ROUTES.ABOUT,
      element: <About />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])

  return (
    <div css={tw`container mx-auto h-full`}>
      <RouterProvider router={router} />
    </div>
  )
}

export default UnauthenticatedApp
