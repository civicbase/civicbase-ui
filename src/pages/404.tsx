import { useNavigate } from 'react-router-dom'

import tw from 'twin.macro'

import Button from '@ui/Button'
import Typography, { Title } from '@ui/Typography'

const NotFound = () => {
  const navigate = useNavigate()

  const handlleGotBackHome = () => {
    navigate('/')
  }

  return (
    <div css={tw`container mx-auto h-full flex justify-center items-center pb-44 flex-col`}>
      <div css={tw`flex divide-x-2 divide-gray-100`}>
        <Title css={tw`mr-4`}> 404 </Title>

        <div css={tw`flex flex-col pl-4`}>
          <Title css={tw`leading-6 mt-1.5`}> Page not Found</Title>
          <Typography css={tw`text-gray-500`}>
            Please check the URL in the address bar and try again
          </Typography>
        </div>
      </div>
      <div css={tw`mt-10`}>
        <Button onClick={handlleGotBackHome}>Go back home</Button>
      </div>
    </div>
  )
}

export default NotFound
