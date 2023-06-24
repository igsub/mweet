import { getFeedByUser } from '@/services/mweetService'
import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useEffect, useState } from 'react'

const MweetFeed = () => {
  const { user, isLoading, error } = useUser()
  const [mweets, setMweets] = useState([])
  useEffect(() => {
    if (!isLoading && !error) 
      getFeedByUser(user?.sub || "")
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>MweetFeed</div>
  )
}

export default MweetFeed