import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const  result = await prisma.follows.create({
      data: {
        followerId: req.body.followerId,
        followingId: req.body.followingId
      },
    })
  
  return res.status(201).json(result)
}