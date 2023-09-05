import { lazy } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import tw from 'twin.macro'

import { useInterpret } from '@xstate/react'
import Background from 'assets/background.png'
import Header from 'components/Header'
import Loader from 'components/Loader'
import { DashboardProvider } from 'contexts/dashboard'
import { dashboardMachine } from 'machines'

import { AUTHENTICATED_ROUTES, COMMON_ROUTES } from './routes'

const Dashboard = lazy(() => import('pages/dashboard'))
const NotFound = lazy(() => import('pages/404'))
const Overview = lazy(() => import('pages/overview'))
const Preview = lazy(() => import('pages/preview'))
const Survey = lazy(() => import('pages/survey'))
const PrivacyPolicy = lazy(() => import('pages/privacy-policy'))
const Profile = lazy(() => import('pages/profile'))
const SurveyForm = lazy(() => import('pages/surveyForm'))
const TermsConditions = lazy(() => import('pages/terms-conditions'))
const About = lazy(() => import('pages/about'))

const Root = () => {
  return (
    <>
      <Header />
      <div css={tw`container mx-auto pt-20 mobile:pt-2 h-full`}>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: AUTHENTICATED_ROUTES.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: AUTHENTICATED_ROUTES.OVERVIEW,
        element: <Overview />,
      },
      {
        path: AUTHENTICATED_ROUTES.SURVEY_STEP_FORM,
        element: <SurveyForm />,
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
        path: AUTHENTICATED_ROUTES.PREVIEW,
        element: <Preview />,
      },
      {
        path: AUTHENTICATED_ROUTES.PROFILE,
        element: <Profile />,
      },
      {
        path: COMMON_ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: AUTHENTICATED_ROUTES.SURVEY,
        element: <Survey />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

const AuthenticatedApp = () => {
  return (
    <div>
      <div css={tw`absolute top-0 inset-x-0 flex justify-center  pointer-events-none`}>
        <div css={tw`w-[108rem] flex-none flex justify-end`}>
          <img css={tw`w-[71.75rem] flex-none max-w-none`} src={Background} alt="" />
        </div>
      </div>

      <RouterProvider router={router} fallbackElement={<Loader />} />
    </div>
  )
}

const Wrapper = () => {
  const dashboardService = useInterpret(dashboardMachine)

  return (
    <DashboardProvider value={dashboardService}>
      <AuthenticatedApp />
    </DashboardProvider>
  )
}

export default Wrapper
