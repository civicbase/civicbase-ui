import tw from 'twin.macro'

import { Subtitle, Hint } from '@ui/Typography'

import Koala from 'assets/cute-koala.webp'
import Card from 'components/Card'

const HeaderDivider = () => {
  return (
    <div
      css={tw`absolute bottom-[-60px] left-0 w-full overflow-hidden [transform:rotate(180deg)] `}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        css={tw`relative block h-16 [transform:rotateY(180deg)] w-[calc(159% + 1.3px)] `}
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          css={tw`fill-[#27284B]`}
        />
      </svg>
    </div>
  )
}

const UserProfileCard = ({ email, name }: { email: string; name: string }) => {
  return (
    <Card css={tw`bg-white w-full relative p-0 rounded-lg overflow-hidden h-auto`}>
      <div
        id="header"
        css={tw`relative h-48 bg-brand! rounded-t-lg flex justify-center items-center`}
      >
        <HeaderDivider />

        <div
          css={[
            tw`bg-white rounded-full inline-block p-4`,
            tw`border-brand border-4 border-opacity-70`,
          ]}
          style={{ height: 'fit-content' }}
        >
          {/* <CiUser size={80} /> */}
          <img
            css={tw`inline w-28 h-28 select-none rounded-full`}
            src={Koala}
            alt="Koala profile"
          />
        </div>
      </div>
      <div css={tw`relative z-50 py-20 flex flex-col items-center justify-center`}>
        <Subtitle>{name}</Subtitle>
        <Hint>{email}</Hint>
      </div>
    </Card>
  )
}

export default UserProfileCard
