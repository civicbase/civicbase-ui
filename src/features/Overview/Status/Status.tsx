import * as Stats from 'components/Stats'
import { toCamelCase } from 'utilities/util'

const Status = ({
  totalRespondent = 0,
  status,
  totalAccess = 0,
  rate = 0,
}: {
  totalRespondent: number
  status: string
  totalAccess: number
  rate: number
}) => {
  return (
    <Stats.List>
      <Stats.Item title="Total Respondents" metric={totalRespondent} />
      <Stats.Item title="Total Access" metric={totalAccess} />
      <Stats.Item title="Convertion Rate" metric={`${rate}%`} />
      <Stats.Item title="Current Status" metric={toCamelCase(status)} />
    </Stats.List>
  )
}

export default Status
