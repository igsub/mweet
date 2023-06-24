import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

// POST /api/db/user
// Required fields in body: name, email
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) { 
  const user = await prisma.user.findUnique({
    where: { userId: req.body.userId }
  })
  
  let result = user

  if (!user) {
    result = await prisma.user.create({
      data: {
        ...req.body,
      },
    })
  }
  return res.status(201).json(result)
}