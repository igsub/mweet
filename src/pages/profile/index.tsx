import { useMweetUserContext } from '@/contexts/MweetUserContext'
import { updateUser } from '@/services/userService'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import { Button, Input, Menu, MenuHandler, Typography } from '@material-tailwind/react'
import React, { useRef } from 'react'

const Profile = () => {
  const currentUser = useMweetUserContext()
  const userName = useRef<HTMLInputElement>(null)
  const userTag = useRef<HTMLInputElement>(null)
  
  const handleUpdateInfo = () => {
    updateUser(currentUser?.userId, {
      name: userName.current?.value || "",
      tag: userTag.current?.value || ""
    })
  }

  return (
    <div>
      <Typography className="text-3xl mb-4 w-full" variant='h1'>
        Your Profile
      </Typography>
      <form className="mt-8 mb-2 w-1/2 max-w-screen-lg">
        <div className="mb-4 flex flex-col gap-6">
          <div>
            <Typography variant="h6">Name</Typography>
            <Input
                type="text"
                placeholder="Name"
                className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                labelProps={{
                  className: "hidden" 
                }}
                containerProps={{ className: "min-w-[100px]" }}
                defaultValue={currentUser?.name}
                inputRef={userName}
                />
          </div>
          
          <div>
            <Typography variant="h6">Your handle (username)</Typography>
            <div className="relative flex w-full">
              <Menu placement="bottom-start">
                <MenuHandler>
                  <Button
                    ripple={false}
                    variant="text"
                    color="blue-gray"
                    className="flex h-10 items-center rounded-r-none border border-blue-gray-200 bg-blue-gray-500/10"
                    disabled={true}
                  >
                    @
                  </Button>
                </MenuHandler>
              </Menu>
              <Input
                type="text"
                placeholder="Username"
                className="focus:!border-t-blue-500 rounded-l-none focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                labelProps={{
                  className: "hidden" 
                }}
                containerProps={{ className: "min-w-[100px]" }}
                defaultValue={currentUser?.tag}
                inputRef={userTag}
                />
            </div>
          </div>

          <div>
            <Typography variant="h6">Email address</Typography>
            <Input
              type="email"
              placeholder="Email Address"
              className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
              labelProps={{
                className: "hidden" 
              }}
              disabled={true}
              containerProps={{ className: "min-w-[100px]" }}
              defaultValue={currentUser?.email}
              />
            </div>
        </div>
        <Button className="mt-6" onClick={handleUpdateInfo}>
          Update info
        </Button>
      </form>
    </div>
  )
}

export default withPageAuthRequired(Profile)