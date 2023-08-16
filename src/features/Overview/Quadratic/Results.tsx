import tw from 'twin.macro'

import * as Table from '@ui/Table'

import { useSurveyOverview } from 'contexts/Overview'
import { useSurveyState } from 'contexts/dashboard'

import DownloadResults from '../DownloadResults'

enum Mode {
  PILOT = 'pilot',
  PUBLISHED = 'published',
}

const ResultTable = ({ id }: { id: string }) => {
  const survey = useSurveyState(id)
  const overview = useSurveyOverview()

  if (!overview || !survey) return null

  const { results } = overview

  return (
    <div css={tw`m-2`}>
      <div css={tw`flex justify-end items-center mb-4`}>
        {Object.keys(results[survey.mode]).length !== 0 && <DownloadResults id={id} />}
      </div>

      <Table.Main>
        <Table.Head>
          <Table.Row>
            <Table.Header>Question Id</Table.Header>
            <Table.Header>Result</Table.Header>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {survey.mode === Mode.PILOT &&
            Object.keys(results.pilot)
              .sort()
              .map(row => (
                <Table.Row key={row}>
                  <Table.Data>{row}</Table.Data>
                  <Table.Data>{results.pilot[row]}</Table.Data>
                </Table.Row>
              ))}

          {survey.mode === Mode.PUBLISHED &&
            Object.keys(results.published)
              .sort()
              .map(row => (
                <Table.Row key={row}>
                  <Table.Data>{row}</Table.Data>
                  <Table.Data>{results.published[row]}</Table.Data>
                </Table.Row>
              ))}

          {survey.mode === Mode.PILOT && Object.keys(results.pilot).length === 0 && (
            <Table.Row>
              <Table.Data colSpan={2}>No answers captured in pilot phase</Table.Data>
            </Table.Row>
          )}

          {survey.mode === Mode.PUBLISHED && Object.keys(results.published).length === 0 && (
            <Table.Row>
              <Table.Data colSpan={2}>No answers captured in published phase</Table.Data>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Main>
    </div>
  )
}

export default ResultTable
