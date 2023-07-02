import MweetBox from '@/components/feed/MweetBox'
import MweetFeed from '@/components/feed/MweetFeed'
import FollowOthers from '@/components/follow-others/FollowOthers'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import { Typography } from '@material-tailwind/react'

export default withPageAuthRequired(function Home() {

  return (
      <div className='flex flex-col w-full'>
        <Typography className="text-3xl mb-4 w-full" variant='h1'>
          Your feed
        </Typography>
        <div className='flex gap-6'>
          <div className='flex flex-col w-2/3'>
            <MweetBox />
            <MweetFeed />
          </div>
          <div className='justify-end w-1/4'>
            <Typography variant='h2' className="text-xl">Follow Others</Typography>
            <FollowOthers />
          </div>
        </div>
      </div>
  )
})
