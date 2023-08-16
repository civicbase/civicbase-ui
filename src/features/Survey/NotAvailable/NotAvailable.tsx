import tw from 'twin.macro'

import { Title } from '@ui/Typography'

import Logo from 'assets/civicbase_gradient_logo.svg'
import ErrorSurvey from 'assets/survey_error.svg'

const NotAvailable = () => {
  return (
    <div css={tw`h-full flex flex-col justify-center items-center`}>
      <img src={Logo} width={450} alt="logo" />
      <img src={ErrorSurvey} alt="error survey" />
      <Title css={tw`text-gray-600 text-center`}>The survey is not available at this time.</Title>
    </div>
  )
}

export default NotAvailable
