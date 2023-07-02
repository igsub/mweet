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
  
    const usersNotFollowed = await prisma.user.findMany({
      where: {
        userId: {
          notIn: [...following.map(user => user.following.userId), userId]
        }
      }
    })

  return res.status(201).json(usersNotFollowed)
}
