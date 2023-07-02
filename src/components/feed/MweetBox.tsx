import React, { useRef } from 'react'
import { Avatar, Button, Textarea } from '@material-tailwind/react'
import { postMweet } from '@/services/mweetService'
import { useMweetUserContext } from '@/contexts/MweetUserContext'

const MweetBox = () => {
  const currentUser = useMweetUserContext()
  const mweetText = useRef<string | null>(null)

  const submitMweet = () => {
    postMweet(
      { 
        user: currentUser, 
        text: mweetText.current || "" 
      })
      .then(res => {
        console.log(res)
      })
      .catch(e => console.error(e))
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <Avatar src={currentUser?.picture || undefined} />
        <Textarea onChange={(e) => mweetText.current = e.target.value} className="w-full rounded-md" placeholder="What's on your mind..." maxLength={280}/>
      </div>
      <div className='self-end'>
        <Button onClick={submitMweet}>Send mweet</Button>
      </div>
    </div>
  )
}

export default MweetBox