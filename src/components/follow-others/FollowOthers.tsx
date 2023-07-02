import { useMweetUserContext } from '@/contexts/MweetUserContext'
import { followUser, getFollowOthers } from '@/services/userService'
import { List } from '@material-tailwind/react'
import { User } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import FollowOthersListItem from './FollowOthersListItem'



const FollowOthers = () => {
  const [usersToFollow, setUsersToFollow] = useState<User[]>([])
  const currentUser = useMweetUserContext()

  useEffect(() => {
    getFollowOthers(currentUser?.userId)
      .then(response => setUsersToFollow(response?.data))
      .catch(error => console.error(error))
  },[])

  const handleFollowUser = (followingId: string) => {
    followUser(currentUser?.userId || "", followingId)
  }

  return usersToFollow ? 
    <List>
      {usersToFollow?.map(user => (
        <FollowOthersListItem user={user} handleFollowUser={handleFollowUser} key={`follow-user-${user.userId}`}/>
      ))}
    </List> : null 

}

export default FollowOthers