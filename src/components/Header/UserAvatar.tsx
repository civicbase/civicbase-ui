import React from 'react'

import tw, { styled } from 'twin.macro'

import Koala from 'assets/cute-koala.webp'

const RotatingDiv = styled.div`
  ${tw`absolute`}
  animation: rotate 40s linear infinite;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const UserAvatar: React.FC = () => {
  return (
    <div css={tw`relative flex justify-center items-center`}>
      <RotatingDiv>
        <svg height="56" width="56" viewBox="0 0 56 56">
          <path
            d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z"
            fill="#facc15"
          />
          <path
            d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z"
            fill="#3b82f6"
          />
          <path
            d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z"
            fill="#ef4444"
          />
        </svg>
      </RotatingDiv>
      <img css={tw`inline w-12 h-12 select-none rounded-full`} src={Koala} alt="Koala profile" />
    </div>
  )
}

export default UserAvatar
