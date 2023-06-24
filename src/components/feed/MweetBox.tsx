import React, { useEffect, useRef, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Avatar, Button, Textarea } from '@material-tailwind/react'
import { createUser } from '@/services/userService'
import { postMweet } from '@/services/mweetService'
import type { User } from '@prisma/client'

const MweetBox = () => {
  const { user, isLoading, error} = useUser()
  const mweetText = useRef<string | null>(null)
  const [currentUser, setCurrentUser] = useState<User>()

  useEffect(() => {
    if (!isLoading && !error) {
      createUser({ name: user?.name || "", email: user?.email || "", userId: user?.sub || "", tag: (Math.random() + 1).toString() })
        .then(res => setCurrentUser(res.data))
        .catch(error => console.error(error))
    }
  }, [])

  const submitMweet = () => {
    postMweet(
      { 
        user: currentUser, 
        text: mweetText.current || "" 
      })
      .then(res => console.log(res))
      .catch(e => console.error(e))
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <Avatar src={user?.picture || undefined} />
        <Textarea onChange={(e) => mweetText.current = e.target.value} className="w-full rounded-md" placeholder="What's on your mind..." maxLength={280}/>
      </div>
      <div className='self-end'>
        <Button onClick={submitMweet}>Send mweet</Button>
      </div>
    </div>
  )
}

export default MweetBox