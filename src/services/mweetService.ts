import axios from "axios";
import type { User } from '@prisma/client'

interface IPostMweetProps {
  user: User | undefined
  text: string
}

const postMweet = async ({ user, text }: IPostMweetProps) => {
  const res = await axios.post('/api/db/mweet', { user , text })
  return res
}

const getFeedByUser = async (userId: string) => {
  const res = await axios.get(`/api/db/mweet/${userId}`)
  return res
}

export {
  postMweet,
  getFeedByUser
}