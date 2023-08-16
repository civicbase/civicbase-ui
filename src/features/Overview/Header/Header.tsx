import { useParams } from 'react-router-dom'

import tw from 'twin.macro'

import Typography, { Headline, Title } from '@ui/Typography'

import { useSurveyState } from 'contexts/dashboard'
import { Method, Status } from 'types/survey.d'

import Mode from './Mode'

const Header = () => {
  const { surveyId } = useParams()
  const survey = useSurveyState(surveyId!!)

  if (!survey) return null

  const {
    setup: { method, topic, credits },
    language,
  } = survey

  return (
    <div css={tw`relative`}>
      <div css={tw`flex flex-col justify-center items-center flex-1`}>
        <Headline css={tw`text-blue-500 mb-8`}>SURVEY OVERVIEW</Headline>
        <Title css={tw`text-3xl text-center line-clamp-1`}>{topic}</Title>

        <div css={tw`text-center max-w-2xl`}>
          <Typography css={tw`text-gray-500 inline-block`}>This survey is setup with</Typography>{' '}
          <Typography css={tw`text-brand2 inline-block`}>{method}</Typography>{' '}
          <Typography css={tw`text-gray-500 inline-block`}>as it&apos;s methodology.</Typography>{' '}
          {method === Method.QUADRATIC && (
            <>
              <Typography css={tw`text-gray-500 inline-block`}>
                Each respondent will have
              </Typography>{' '}
              <Typography css={tw`text-brand2 inline-block`}>
                {credits} {language?.token === 'Custom' ? language?.customToken : language?.token},
              </Typography>
            </>
          )}{' '}
          {method === Method.QUADRATIC && (
            <>
              <Typography css={tw`text-gray-500 inline-block`}>
                the language designated is
              </Typography>{' '}
              <Typography css={tw`text-brand2 inline-block`}>
                {language?.thumbsUp}/{language?.thumbsDown}
              </Typography>
            </>
          )}
        </div>
      </div>

      {survey.status !== Status.PILOT && (
        <div css={tw`flex justify-center mt-4`}>
          <Mode survey={survey} />
        </div>
      )}
    </div>
  )
}

export default Header
