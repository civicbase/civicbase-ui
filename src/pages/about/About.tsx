import tw from 'twin.macro'

import { Subtitle, Title } from '@ui/Typography'
import Typography from '@ui/Typography/Typography'

import Logo from 'assets/civicbase_logo.svg'

const About = () => {
  return (
    <div css={tw`h-full flex flex-col justify-center items-center`}>
      <img css={tw`w-[350px] mobile:w-[200px]`} src={Logo} alt="logo" />

      <div tw="mobile:p-4">
        <Title css={tw`mt-24 mb-12`}>FAQs</Title>

        <Subtitle css={tw`mb-6`}>What is QVSR?</Subtitle>

        <Typography css={tw`mb-4`}>
          Quadratic Voting for Survey Research (QVSR) is a new survey technique introduced by
          Charlotte Cavaille, Daniel L. Chen and Karine Van der Straeten in their paper, A Decision
          Theoretic Approach to Understanding Survey Response: Likert vs. Quadratic Voting for
          Attitudinal Research. Available{' '}
          <a
            href="https://lawreview.uchicago.edu/print-archive/decision-theoretic-approach-understanding-survey-response-likert-vs-quadratic-voting"
            target="_blank"
            rel="noreferrer"
            css={tw`text-blue-500 hover:underline`}
          >
            here
          </a>
          . QVSR is inspired by the work of Glen Weyl and Eric A. Posner on Quadratic Voting.
        </Typography>

        <Typography css={tw`mb-4`}>
          QVSR gives respondents a fixed budget to ‘buy’ votes in favor of (against) a set of policy
          proposals. Because the price for each vote is quadratic, expressing support for
          (opposition to) a given proposal becomes increasingly costly.
        </Typography>

        <Typography css={tw`mb-4`}>
          If you want more information on quadratic voting, please check out these two papers, which
          give you some background on how QV works in practice and in theory:
        </Typography>

        <Typography css={tw`mb-4`}>
          Quadratic Voting: How Mechanism Design Can Radicalize Democracy. Available{' '}
          <a
            href="https://www.aeaweb.org/articles?id=10.1257/pandp.20181002"
            target="_blank"
            rel="noreferrer"
            css={tw`text-blue-500 hover:underline`}
          >
            here
          </a>
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

        <Typography css={tw`mb-12`}>
          Additionally Radical Exchange has provisioned a great resource on QV, which they call
          Plural Voting. Available{' '}
          <a
            href="https://www.radicalxchange.org/concepts/plural-voting/"
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
            etc.
          </li>
          <li>
            Use QVSR creatively: policy issues (minimum wage, gay rights, abortion...), candidate
            features (age, gender, electability), reform dimensions (costs, benefits, time horizon.)
          </li>
          <li>Most topics studied using conjoint analysis can be studied using QVSR.</li>
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

        <Title css={tw`mt-8 mb-12`}>About</Title>

        <Typography css={tw`mb-4`}>
          Civicbase is an open-source, online platform for deploying Quadratic Voting Survey for
          Research (QVSR) and other survey techniques at the forefront of civic engagement. More
          information about the project is available in a recently published paper in AI magazine,
          which details the functionality and scope of the project. Available{' '}
          <a
            href="https://onlinelibrary.wiley.com/doi/10.1002/aaai.12103"
            target="_blank"
            rel="noreferrer"
            css={tw`text-blue-500 hover:underline`}
          >
            here
          </a>
        </Typography>

        <Typography css={tw`mb-4`}>
          We are a group of technologists; developers, designers and economists who are interested
          in digital democracy, civic engagement and survey techniques that can help better uncover
          preferences.
        </Typography>
      </div>
    </div>
  )
}

export default About
