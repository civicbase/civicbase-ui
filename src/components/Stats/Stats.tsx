import { ReactNode } from 'react'

import tw from 'twin.macro'

const Stats = ({ children }: { children: ReactNode[] }) => {
  return (
    <div
      css={tw`bg-gray-100 grid grid-flow-col divide-x shadow rounded-md mx-2 hover:shadow-md m-2`}
    >
      {children}
    </div>
  )
}

export default Stats
