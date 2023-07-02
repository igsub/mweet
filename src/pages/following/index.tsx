import FollowOthersListItem from '@/components/follow-others/FollowOthersListItem'
import { useMweetUserContext } from '@/contexts/MweetUserContext'
import { getFollowedUsers } from '@/services/userService'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import { Typography } from '@material-tailwind/react'
import { User } from '@prisma/client'
import React, { useEffect, useState } from 'react'

const Following = () => {
  const [followedUsers, setFollowedUsers] = useState<User[]>([])
  const currentUser = useMweetUserContext()

  useEffect(() => {
    getFollowedUsers(currentUser?.userId)
      .then(users => setFollowedUsers(users?.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
       <Typography className="text-3xl mb-4 w-full" variant='h1'>
          People you follow
        </Typography>
        <div className='grid grid-cols-2 gap-12 w-3/4'>
          {followedUsers?.map(user => <FollowOthersListItem key={`following-item-${user.userId}`} user={user} disabled={true} handleFollowUser={() => null} />)}
        </div>
    </div>
  )
}

export default withPageAuthRequired(Following)