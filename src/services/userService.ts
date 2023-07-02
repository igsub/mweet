// import { IUser } from "@/types/user";
import axios from "axios";

interface UserCreationData {
    name: string,
    email: string,
    userId: string,
    tag: string,
    picture: string
  }

const createUser = async (user: UserCreationData) => {
  const res = await axios.post('/api/db/user', user)
  console.log("user", res)
  return res
}

const getFollowOthers = async (userId: string | undefined) => {
  if (!userId) return null
  const res = await axios.get(`/api/db/follow-others/${userId}`)
  console.log("users", res.data)
  return res
}

export {
  createUser,
  getFollowOthers
}