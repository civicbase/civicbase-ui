import tw from 'twin.macro'

import * as Table from '@ui/Table'
import Typography from '@ui/Typography'

import { useSurveyOverview } from 'contexts/Overview'
import { useSurveyState } from 'contexts/dashboard'

const FeedbackTable = ({ id }: { id: string }) => {
  const survey = useSurveyState(id)

  const overview = useSurveyOverview()

  if (!overview || !overview.feedback || !survey) return null

  const feedback = overview.feedback[survey.mode]
  const hasFeedback = feedback?.length > 0

  return (
    <div css={tw`m-2`}>
      <Table.Main>
        <Table.Head>
          <Table.Row>
            <Table.Header>ID</Table.Header>
            <Table.Header>Feedback</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {hasFeedback &&
            feedback?.map(feed => (
              <Table.Row key={feed.id}>
                <Table.Data>{feed.id}</Table.Data>
                <Table.Data>{feed.answer}</Table.Data>
              </Table.Row>
            ))}

          {!hasFeedback && (
            <Table.Row>
              <Table.Data colSpan={2}>
                <Typography>No feedback so far</Typography>
              </Table.Data>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Main>
    </div>
  )
}

export default FeedbackTable
