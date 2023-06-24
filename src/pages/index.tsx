import MweetBox from '@/components/feed/MweetBox'
import MweetFeed from '@/components/feed/MweetFeed'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'

export default withPageAuthRequired(function Home() {

  return (
      <div className='flex flex-col p-10'>
          <MweetBox />
          <MweetFeed />
      </div>
  )
})

// export const getServerSideProps = async () => {


// }
