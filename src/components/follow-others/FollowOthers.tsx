import { useMweetUserContext } from '@/contexts/MweetUserContext'
import { getFollowOthers } from '@/services/userService'
import { Avatar, IconButton, List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from '@material-tailwind/react'
import { User } from '@prisma/client'
import React, { useEffect, useState } from 'react'

const FollowOthers = () => {
  const [usersToFollow, setUsersToFollow] = useState<User[]>([])
  const user = useMweetUserContext()

  useEffect(() => {
    getFollowOthers(user?.userId)
      .then(response => setUsersToFollow(response?.data))
      .catch(error => console.error(error))
  },[])

  const followUser = (userId: string) => {

  }

  return usersToFollow ? <List>
      {usersToFollow?.map(user => (
        <ListItem key={`follow-user=${user.userId}`} className='hover:bg-transparent hover:cursor-default gap-4 border-t-2 rounded-none'>
           <ListItemPrefix>
            <Avatar variant="circular" alt="candice" src={user.picture} />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              {user.name}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {`@${user.tag}`}
            </Typography>
          </div>
          <ListItemSuffix>
            <button className='m-1 border-2 rounded-2xl border-spacing-2 transition-all hover:border-blue-500' onClick={() => followUser(user.userId)}><Typography className="mx-2">Follow</Typography></button>
          </ListItemSuffix>
        </ListItem>
      ))}
    </List> : null
  
}

export default FollowOthers