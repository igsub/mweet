import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) { 
  const  result = await prisma.mweet.create({
      data: {
        userId: req.body.user.userId,
        createdAt: new Date(),
        text: req.body.text,
        userTag: req.body.user.tag
      },
    })
  
  return res.status(201).json(result)
}