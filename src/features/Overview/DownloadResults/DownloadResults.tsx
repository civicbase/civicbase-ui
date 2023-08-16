import { useState } from 'react'
import { BsDownload } from 'react-icons/bs'

import tw, { theme } from 'twin.macro'

import Button from '@ui/Button'
import Spinner from '@ui/Spinner'

import Tooltip from 'components/Tooltip'
import { useSurveyState } from 'contexts/dashboard'
import { csv } from 'services/overview'

const DownloadResults = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false)
  const survey = useSurveyState(id)

  if (!survey) {
    return null
  }

  const handleDownload = () => {
    setLoading(true)

    csv(id, survey.mode)
      .then((response: any) => response.blob())
      .then(blob => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `${survey.setup.topic}-${survey.mode}.csv`)

        // Append to html link element page
        document.body.appendChild(link)

        // Start download
        link.click()

        // Clean up and remove the link
        link.parentNode?.removeChild(link)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <Tooltip
      label="Download Answers in CSV format"
      popperProps={{ delayShow: 1000, placement: 'top' }}
    >
      <Button onClick={handleDownload}>
        {loading ? (
          <Spinner variant="light" css={tw`mr-2`} />
        ) : (
          <BsDownload size={24} color={theme`colors.white`} css={tw`mr-2`} />
        )}
        Download
      </Button>
    </Tooltip>
  )
}

export default DownloadResults
