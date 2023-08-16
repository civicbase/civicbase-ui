import tw from 'twin.macro'

import { Title } from '@ui/Typography'

import Logo from 'assets/civicbase_gradient_logo.svg'
import CompletedSurvey from 'assets/survey_completed.svg'

const AlreadyTaken = () => {
  return (
    <div css={tw`h-full flex flex-col justify-center items-center`}>
      <img src={Logo} width={450} alt="logo" />
      <img src={CompletedSurvey} alt="completed survey" />
      <Title css={tw`text-gray-600 text-center`}>You have already taken this survey.</Title>
    </div>
  )
}

export default AlreadyTaken
