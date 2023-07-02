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
  console.log("follow others", res.data)
  return res
}

const followUser = async (followerId: string, followingId: string) => {
  const res = await axios.post('/api/db/follow-user', {
    followerId,
    followingId
  })
  console.log("follow user ", res.data)
  return res
}

const getFollowedUsers = async (userId: string | undefined) => {
  if (!userId) throw new Error("userId is undefined")
  const res = await axios.get(`/api/db/followed-users/${userId}`)
  console.log("followed users ", res.data)
  return res
}

const updateUser = async (userId: string | undefined, userData: { name: string, tag: string }) => { 
  if (!userId || !userData || !userData.name || !userData.tag) throw new Error("Missing fileds")
  const res = await axios.put(`/api/db/user`, {
    userId,
    userData
  })
  console.log("updated user ", res.data)
  return res
}

export {
  createUser,
  getFollowOthers,
  followUser,
  getFollowedUsers,
  updateUser
}