import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Spinner,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  HandThumbUpIcon,
  HomeIcon,
  ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/solid";
import React from 'react'
import {useRouter} from "next/router";
import { useUser } from '@auth0/nextjs-auth0/client';
import { Paths } from "@/types/display/paths";



const Sidebar = () => {
  const { user, error, isLoading } = useUser()
  const router = useRouter()

  const items = [
    {
      icon: <HomeIcon className='h-5 w-5' />,
      label: "Home",
      selected: router.pathname === Paths.Home,
      onClick: () => router.push(Paths.Home)
    },
    {
      icon: <HandThumbUpIcon className='h-5 w-5' />,
      label: "Following",
      selected: router.pathname === Paths.Following,
      onClick: () => router.push(Paths.Following)
    },
    {
      icon: <UserCircleIcon className='h-5 w-5' />,
      label: "Profile",
      selected: router.pathname === Paths.Profile,
      onClick: () => router.push(Paths.Profile)
    },
    {
      icon: <ArrowLeftOnRectangleIcon className='h-5 w-5' />,
      label: "Logout",
      selected: false,
      onClick: () => router.push("/api/auth/logout")
    },
  ]

  return (
		<Card className='flex top-0 left-0 bottom-0 bg-gray-100 rounded-none h-[calc(100vh)] w-[20rem] shadow-[rgba(0,0,0,0.1)_5px_0px_4px_0px]'>
			<div className='mb-2 p-4'>
				<Typography variant='h5' className='text-primary'>
					Mweeter
				</Typography>
			</div>
			<List>
        {items.map(item => (
          <ListItem key={`sidebar-${item.label}`} onClick={item.onClick} selected={item.selected}>
            <ListItemPrefix>
              {item.icon}
            </ListItemPrefix>
            {item.label}
				  </ListItem>
        ))}

				<div className='flex border-t rounded-none p-4 justify-left'>
					{isLoading ? (
						<Spinner />
					) : (
						<div className="flex gap-4">
							<Avatar src={user?.picture || undefined} alt='avatar' />
              <div className="flex flex-col justify-center">
                <span>{user?.name || "Unknown"}</span>
                <span>@Tag</span>
              </div>
						</div>
					)}
				</div>
			</List>
		</Card>
	)
}

export default Sidebar