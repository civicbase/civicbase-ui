import tw from 'twin.macro'

import { useAuthState } from 'contexts/auth'

import GeneralInformation from './GeneralInformation'
import PasswordInformation from './PasswordInformation'
import UserProfileCard from './UserProfileCard'

const Profile = () => {
  const { user } = useAuthState()

  if (!user) return null

  return (
    <div css={tw`grid grid-cols-12 gap-8 mobile:pt-16 p-2`}>
      <div css={tw`col-span-4 mobile:col-span-12 tablet:col-span-12`}>
        <UserProfileCard name={user.name} email={user.email} />
      </div>

      <div css={tw`flex flex-col col-span-8 mobile:col-span-12 tablet:col-span-12 space-y-8`}>
        <GeneralInformation />

        <PasswordInformation />
      </div>
    </div>
  )
}

export default Profile
