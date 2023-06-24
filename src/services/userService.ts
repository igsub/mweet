import { IUser } from "@/types/user";
import axios from "axios";

const createUser = async (user: IUser) => {
  const res = await axios.post('/api/db/user', user)
  console.log(res)
  return res
}

export {
  createUser
}