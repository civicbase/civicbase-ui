import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiMessageDetail } from 'react-icons/bi'
import { BsQuestionLg } from 'react-icons/bs'
import { MdOutlineDashboardCustomize, MdOutlineLanguage } from 'react-icons/md'

import tw from 'twin.macro'

import Spinner from '@ui/Spinner'
import Typography from '@ui/Typography'

import { Steps } from 'machines/surveyMultiFormMachine'
import { Method, Survey } from 'types/survey.d'

import Tab from './Tab'
import * as Forms from './steps'

const SurveyMultiForm = ({ survey, isLoading }: { survey: Survey; isLoading: boolean }) => {
  const [selected, setSelected] = useState(Steps.SETUP)
  const {
    trigger,
    watch,
    formState: { errors, isDirty },
  } = useFormContext()
  const method = watch('setup.method')

  const handleSelection = (step: Steps) => {
    trigger(step.toLowerCase())
    setSelected(step.toLowerCase() as Steps)
  }

  const isEnabled = isDirty && Object.keys(errors).length === 0

  return (
    <div css={tw`w-full flex p-4 rounded`}>
      <div css={tw`w-72 mr-4 space-y-4`}>
        <Tab active={selected === Steps.SETUP} onClick={() => handleSelection(Steps.SETUP)}>
          <AiOutlineSetting size={20} />
          <Typography tw="normal-case">Setup</Typography>
        </Tab>

        {method === Method.QUADRATIC && (
          <Tab active={selected === Steps.LANGUAGE} onClick={() => handleSelection(Steps.LANGUAGE)}>
            <MdOutlineLanguage size={20} />
            <Typography tw="normal-case">Language</Typography>
          </Tab>
        )}
        <Tab
          active={
            selected === Steps.QUADRATIC || selected === Steps.CONJOINT || selected === Steps.LIKERT
          }
          onClick={() => handleSelection(method)}
        >
          <BsQuestionLg size={16} />
          <Typography tw="normal-case">Questions</Typography>
        </Tab>

        <Tab active={selected === Steps.MESSAGE} onClick={() => handleSelection(Steps.MESSAGE)}>
          <BiMessageDetail size={20} />
          <Typography tw="normal-case">Messages</Typography>
        </Tab>

        <Tab active={selected === Steps.CUSTOMIZE} onClick={() => handleSelection(Steps.CUSTOMIZE)}>
          <MdOutlineDashboardCustomize size={20} />
          <Typography tw="normal-case">Customize</Typography>
        </Tab>

        <button
          type="submit"
          css={[
            tw`flex justify-center items-center rounded-md w-full px-2 py-2 text-sm outline-none bg-gray-100 space-x-2`,
            tw`focus:(ring ring-brand ring-opacity-50)`,
            isEnabled && tw`!bg-gradient-to-b from-green-200 to-green-300 text-gray-800`,
            !isEnabled && tw`!bg-gray-200 text-gray-500 cursor-not-allowed`,
          ]}
          disabled={!isEnabled}
        >
          {isLoading && <Spinner variant="primary" />}
          <Typography>{survey?.id ? 'Update' : 'Create'}</Typography>
        </button>
      </div>

      <div css={tw`w-full rounded-md p-4 pt-0`}>
        {selected === Steps.SETUP && <Forms.Setup />}

        {selected === Steps.LANGUAGE && <Forms.Language />}

        {selected === Steps.QUADRATIC && (
          <Forms.Quadratic isPublished={survey?.status === 'published'} />
        )}

        {selected === Steps.CONJOINT && (
          <Forms.Conjoint isPublished={survey?.status === 'published'} />
        )}

        {selected === Steps.LIKERT && <Forms.Likert isPublished={survey?.status === 'published'} />}

        {selected === Steps.MESSAGE && <Forms.Messages />}

        {selected === Steps.CUSTOMIZE && <Forms.Features />}
      </div>
    </div>
  )
}

export default SurveyMultiForm
