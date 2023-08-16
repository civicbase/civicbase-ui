import { useState } from 'react'
import { BiPyramid } from 'react-icons/bi'
import { FaRegCopy, FaRegPaperPlane } from 'react-icons/fa'
import { FiEdit2, FiEye, FiPower, FiCheck } from 'react-icons/fi'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { VscSymbolMethod, VscSymbolField } from 'react-icons/vsc'
import { Link, useNavigate } from 'react-router-dom'

import tw, { theme } from 'twin.macro'

import { IconButton } from '@ui/Button'
import Typography, { Subtitle } from '@ui/Typography'

import Tooltip from 'components/Tooltip'
import { useDashboard, useSurveyState } from 'contexts/dashboard'
import { useDialog } from 'contexts/dialog'
import { useToast } from 'contexts/toast'
import copy from 'copy-to-clipboard'
import { Visibility } from 'machines/dialogMachine'
import { Method } from 'types/survey.d'

import CloneIcon from './CloneIcon'
import MenuItem from './MenuItem'

const CompactedCard = ({ id }: { id: string }) => {
  const [copied, setCopied] = useState(false)
  const navigate = useNavigate()
  const dashboardService = useDashboard()
  const toastService = useToast()
  const dialogService = useDialog()
  const survey = useSurveyState(id)

  const handleCopy = () => {
    if (!copied) {
      copy(`${window.location.href}survey/${survey?.id}`)
      toastService.send({ type: 'TOAST', text: 'Copied to clipboard!' })
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const handleEdit = () => {
    if (survey) {
      navigate('/surveyForm', { state: survey })
    }
  }

  const handlePreview = () => {
    navigate(`/preview/${survey?.id}`)
  }
  const handleClone = () => dashboardService.send({ type: 'CLONE', surveyId: id })

  const handlePublish = () => {
    dialogService.send({
      type: 'OPEN',
      title: 'Publish survey',
      content: `Would you like to publish "${survey?.setup.topic}" survey? This action cannot be undone.`,
      visibility: Visibility.CONFIRMATION,
      callback: () => dashboardService.send({ type: 'PUBLISH', surveyId: id }),
    })
  }

  const handleFinish = () => {
    dialogService.send({
      type: 'OPEN',
      title: 'Finish survey',
      content: `Would you like to finish "${survey?.setup.topic}" survey? This action cannot be undone.`,
      visibility: Visibility.CONFIRMATION,
      callback: () => dashboardService.send({ type: 'FINISH', surveyId: id }),
    })
  }

  return (
    <div
      css={[
        tw`flex flex-1 flex-col justify-between !static`,
        tw`h-36 rounded-lg p-4 relative shadow-md border-l-4 hover:(shadow-lg)`,
        tw`transition-shadow ease-in-out duration-300`,
        tw`bg-gradient-to-b from-gray-50 to-gray-200`,
        survey?.status === 'published' && tw`border-published`,
        survey?.status === 'pilot' && tw`border-pilot`,
        survey?.status === 'finished' && tw`border-finished`,
        survey?.isBusy && tw`animate-pulse`,
      ]}
    >
      <div>
        <div css={tw`flex justify-between items-end`}>
          <Subtitle css={tw`line-clamp-1 mr-12 mb-1 text-lg`}>{survey?.setup.topic}</Subtitle>
          <Tooltip label={survey?.isBusy ? null : 'Overview'} popperProps={{ delayShow: 500 }}>
            <IconButton
              css={tw`hover:(bg-brand bg-opacity-10 text-black)`}
              as={Link as any}
              to={`/overview/${survey?.id}`}
              disabled={survey?.isBusy}
            >
              <TbBrandGoogleAnalytics size={20} />
            </IconButton>
          </Tooltip>
        </div>

        <div css={tw`flex items-center text-gray-600`}>
          {survey?.setup.method === Method.QUADRATIC && (
            <VscSymbolMethod size={20} css={tw`mr-2`} />
          )}

          {survey?.setup.method === Method.CONJOINT && <VscSymbolField size={20} css={tw`mr-2`} />}

          {survey?.setup.method === Method.LIKERT && <BiPyramid size={20} css={tw`mr-2`} />}

          <Typography css={tw``}>{survey?.setup.method}</Typography>
        </div>
      </div>

      <div css={tw`flex justify-evenly`}>
        {survey?.status !== 'finished' && (
          <MenuItem label="Edit" handleClick={handleEdit} disabled={survey?.isBusy}>
            <FiEdit2 size={20} />
          </MenuItem>
        )}

        <MenuItem label="Preview" handleClick={handlePreview} disabled={survey?.isBusy}>
          <FiEye size={20} />
        </MenuItem>

        {survey?.status !== 'finished' && (
          <MenuItem label="Finish" handleClick={handleFinish} disabled={survey?.isBusy}>
            <FiPower size={20} />
          </MenuItem>
        )}

        {survey?.status === 'pilot' && (
          <MenuItem label="Publish" handleClick={handlePublish} disabled={survey?.isBusy}>
            <FaRegPaperPlane size={20} />
          </MenuItem>
        )}

        <MenuItem label={copied ? 'Copied Link' : 'Copy link'} handleClick={handleCopy}>
          {copied ? <FiCheck size={20} color={theme`colors.bgColor1`} /> : <FaRegCopy size={20} />}
        </MenuItem>

        <MenuItem label="Clone" handleClick={handleClone} disabled={survey?.isBusy}>
          <CloneIcon />
        </MenuItem>
      </div>
    </div>
  )
}

export default CompactedCard
