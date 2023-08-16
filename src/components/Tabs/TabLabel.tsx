import { useContext } from 'react'

import tw from 'twin.macro'

import Typography from '@ui/Typography'

import TabContext from './TabContext'

const TabLabel = ({ id, children, ...props }: { id: string; children: string }) => {
  const { active } = useContext(TabContext)

  return (
    <Typography css={[active === id && tw`text-white`]} {...props}>
      {children}
    </Typography>
  )
}

export default TabLabel
