import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) { 
  const { query } = req
  const userId = query.userId as string

  const following = await prisma.follows.findMany({
      where: {
        followerId: userId
      },
      select: {
        following: { select : { userId: true } }
      }
    })
    
  const mweets = await prisma.mweet.findMany({
    where: {
      userId: {
        in: [...following.map(user => user.following.userId), userId]
      }
    },
    orderBy: {
      createdAt: 'desc'
    },
    select: {
      user: {
        select: {
          name: true,
          tag: true,
          picture: true
        }
      },
      text: true,
      createdAt: true,
    } 
  })
  
  return res.status(201).json(mweets)
}
