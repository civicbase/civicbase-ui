import tw from 'twin.macro'

import { Subtitle, Title } from '@ui/Typography'
import Typography from '@ui/Typography/Typography'

import Logo from 'assets/civicbase_logo.svg'

const About = () => {
  return (
    <div css={tw`h-full flex flex-col justify-center items-center`}>
      <img css={tw`w-[350px] mobile:w-[200px]`} src={Logo} alt="logo" />

      <div>
        <Typography css={tw`mb-4`}>
          Civicbase is an open-source online platform for deploying surveys that aims to use
          decision-making mechanisms and analytical techniques at the forefront of civic engagement.
          The web application currently supports researchers in implementing surveys that involve
          the novel method of Quadratic Voting Survey for Research (QVSR).
        </Typography>

        <Typography>
          We are a group of technologists; developers, designers and economists who are interested
          in the cutting edge of civic engagement and survey techniques that can help better uncover
          preferences.
        </Typography>

        <Title css={tw`mt-8 mb-12`}>FAQ</Title>

        <Subtitle css={tw`mb-6`}>What is QVSR?</Subtitle>

        <Typography css={tw`mb-4`}>
          Quadratic Voting for Survey Research (QVSR) is a new survey tool inspired by the work of
          Glen Weyl and Eric A. Posner on quadratic voting.
        </Typography>

        <Typography css={tw`mb-4`}>
          QVSR gives respondents a fixed budget to ‘buy’ votes in favor of (against) a set of policy
          proposals. Because the price for each vote is quadratic, expressing support for
          (opposition to) a given proposal becomes increasingly costly.
        </Typography>

        <Typography css={tw`mb-4`}>
          If you want more information on QVSR, please check out these two papers, which give you
          some background on how QVSR works in practice and in theory:
        </Typography>

        <Typography css={tw`mb-4`}>
          Quadratic Voting In the Wild: Real People, Real Votes Available{' '}
          <a
            href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2755844"
            target="_blank"
            rel="noreferrer"
            css={tw`text-blue-500 hover:underline`}
          >
            here
          </a>
        </Typography>

        <Typography css={tw`mb-4`}>
          Who Cares? Measuring Preferences Intensity in a Polarized Context Available{' '}
          <a
            href="https://charlottecavaille.wordpress.com/working-papers/"
            target="_blank"
            rel="noreferrer"
            css={tw`text-blue-500 hover:underline`}
          >
            here
          </a>
        </Typography>

        <Typography css={tw`mb-12`}>
          If you want more information on quadratic voting and the ideas developed by Weyl and
          Posner, you can find it{' '}
          <a
            href="https://www.radicalxchange.org/concepts/"
            target="_blank"
            rel="noreferrer"
            css={tw`text-blue-500 hover:underline`}
          >
            here
          </a>
        </Typography>

        <Subtitle css={tw`mb-6`}>Tips on how to best design a survey using QVSR</Subtitle>

        <Typography css={tw` mb-4`}>
          Based on our experience, here are some tips on how to make the most of QVSR:
        </Typography>
        <ul css={tw`list-disc pl-8 space-y-2 mb-12`}>
          <li>Limit yourself to 10 items maximum</li>
          <li>
            If you use less than 10 items, make sure to adjust the number of credits (N) accordingly
            (credits = N^2). For example: for 5 items we recommend 25 credits, 6 items - 36 credits,
            etc...
          </li>
          <li>
            Use QVSR creatively: policy issues (minimum wage, gay rights, abortion...), candidate
            features (age, gender, electability), reform dimensions (costs, benefits, time horizon.)
          </li>
          <li>Most topics studies using conjoint analysis can be studied using QVSR</li>
          <li>
            Keep in mind that you can also use a linear pricing function instead of a quadratic
            pricing function
          </li>
        </ul>

        <Subtitle css={tw`mb-6`}>I want to help improve Civicbase: what next?</Subtitle>

        <Typography css={tw`mb-4`}>
          This project is open source and we encourage further development and experimentation.
        </Typography>

        <ul css={tw`list-disc pl-8 space-y-2 mb-12`}>
          <li>
            We welcome feedback and ideas: please email Madeline Bassetti (madelineb@protonmail.com)
            for suggestions, opportunities and questions.
          </li>
          <li>
            If you would like to access the source code, please check the Civicbase{' '}
            <a
              href="https://github.com/civicbase"
              target="_blank"
              rel="noreferrer"
              css={tw`text-blue-500 hover:underline`}
            >
              Github
            </a>{' '}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
