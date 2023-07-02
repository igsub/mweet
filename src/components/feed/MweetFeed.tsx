import React, { useEffect, useState } from 'react'
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { useMweetUserContext } from '@/contexts/MweetUserContext';
import { getFeedByUser } from '@/services/mweetService';
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export interface FeedMweet {
  user:      FeedMweetUser
  text:      string
  createdAt: Date
}

export interface FeedMweetUser {
  name: string
  tag:  string
  picture: string
}

const MweetFeed = () => {
  const [mweets, setMweets] = useState<FeedMweet[]>([])
  const user = useMweetUserContext()

  useEffect(() => {
    if (user) 
      getFeedByUser(user?.userId || "")
      .then(res =>  setMweets(res.data))
      .catch(error => console.log(error))
  }, [])
  
  const updateMweets = () => {
    getFeedByUser(user?.userId || "")
      .then(res =>  setMweets(res.data))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <div className='flex justify-center p-4'>
        <ArrowPathIcon className='h-8 w-8 text-gray-900 hover:cursor-pointer hover:scale-110 transition-all hover:rotate-180' onClick={updateMweets} />  
      </div>
      <List>
        {mweets.map(mweet => (
          <ListItem key={`mweet-${mweet.user}-${mweet.createdAt}`}>
            <ListItemPrefix>
              <Avatar variant="circular" src={mweet.user.picture} />
            </ListItemPrefix>
            <div>
            <Typography variant="h6" color="blue-gray">
              {`${mweet.user.name} @${mweet.user.tag} ${mweet.createdAt}`}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {mweet.text}
            </Typography>
          </div>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default MweetFeed