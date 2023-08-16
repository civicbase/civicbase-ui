import tw from 'twin.macro'

import Button from '@ui/Button'

const Tab = ({ ...props }) => (
  <Button
    type="button"
    variant={props.active ? 'primary' : 'secondary'}
    css={[tw`w-full space-x-2`, props.css]}
    {...props}
  >
    {props.children}
  </Button>
)

export default Tab
