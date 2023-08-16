import { IoIosThumbsDown, IoIosThumbsUp } from 'react-icons/io'

import tw, { theme } from 'twin.macro'

import { IconButton } from '@ui/Button'
import Typography, { Caption } from '@ui/Typography'

import { useDialog } from 'contexts/dialog'
import { Visibility } from 'machines/dialogMachine'

export const Display = ({
  total,
  vote,
  creditSpent,
  token,
}: {
  total?: number
  vote: number
  creditSpent: number
  token: string
}) => {
  if (!total) {
    return null
  }

  const getSize = () => {
    const size = (creditSpent / total) * 75
    const r = size < 0 ? size * -1 : size

    return r === 0 ? r : r + 25
  }

  return (
    <div css={tw`flex flex-col items-center`}>
      <div
        css={tw`h-28 w-28 border rounded-full flex justify-center items-center overflow-hidden relative`}
      >
        <div
          css={[tw`h-8 w-8 flex justify-center items-center z-10`, vote !== 0 && tw`text-black`]}
        >
          {vote}
        </div>
        <div
          style={{ width: `${getSize()}%`, height: `${getSize()}%` }}
          css={[
            tw`bg-red-200 absolute rounded-full`,
            tw`transition-all ease-in-out duration-700`,
            vote > 0 && tw`bg-green-200`,
          ]}
        />
      </div>

      <Caption css={tw`mt-2 dark:(text-white)`}>
        {creditSpent} {token}
      </Caption>
    </div>
  )
}

const Vote = ({
  handleVote,
  canVoteDown,
  thumbsDown,
  vote,
  total,
  creditSpent,
  token,
  canVoteUp,
  thumbsUp,
}: {
  handleVote: (arg: number) => void
  canVoteDown: boolean
  thumbsDown?: string
  vote: number
  total?: number
  creditSpent: number
  token: string
  canVoteUp: boolean
  thumbsUp?: string
}) => {
  const dialogService = useDialog()

  const handleDialog = () => {
    dialogService.send({
      type: 'OPEN',
      title: `Out of ${token}`,
      content: `You don't have enough ${token} to cast this vote.`,
      visibility: Visibility.CONFIRMATION,
      callback: () => {},
    })
  }

  const handleVoteUp = () => {
    if (canVoteUp) {
      handleVote(1)
    } else {
      handleDialog()
    }
  }

  const handleVoteDown = () => {
    if (canVoteDown) {
      handleVote(-1)
    } else {
      handleDialog()
    }
  }

  return (
    <>
      <div css={tw`mx-6`}>
        <IconButton onClick={handleVoteDown}>
          <IoIosThumbsDown
            size={28}
            color={canVoteDown ? theme`colors.bgColor0` : theme`colors.bgColor8`}
          />
        </IconButton>
        <Typography>{thumbsDown}</Typography>
      </div>

      <Display vote={vote} total={total} creditSpent={creditSpent} token={token} />

      <div css={tw`mx-6`}>
        <IconButton onClick={handleVoteUp}>
          <IoIosThumbsUp
            size={28}
            color={canVoteUp ? theme`colors.bgColor1` : theme`colors.bgColor8`}
          />
        </IconButton>
        <Typography>{thumbsUp}</Typography>
      </div>
    </>
  )
}

export default Vote
