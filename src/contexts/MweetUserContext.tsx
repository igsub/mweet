import { createUser } from '@/services/userService';
import { useUser } from '@auth0/nextjs-auth0/client';
import { User } from '@prisma/client';
import { createContext, useContext, useEffect, useState } from 'react'

const MweetUserContext = createContext<User | undefined>(undefined)

export const MweetUserProvider = (props: { children: any; }) => {
	const { children } = props
  const [currentUser, setCurrentUser] = useState<User>()
  const { user, isLoading, error } = useUser()
  
  useEffect(() => {
    if (!isLoading && !error) {
      createUser({ name: user?.name || "", email: user?.email || "", userId: user?.sub || "", tag: user?.nickname || (Math.random() + 1).toString(), picture: user?.picture || "/default_picture.svg" })
        .then(res => setCurrentUser(res.data))
        .catch(error => console.error(error))
    }
  }, [user])
  
	return (
	   <MweetUserContext.Provider value={currentUser}>
		  {children}
	   </MweetUserContext.Provider>
	)
}

export function useMweetUserContext() {
	return useContext(MweetUserContext);
}