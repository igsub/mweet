import { Avatar, ListItem, ListItemPrefix, ListItemSuffix, Typography } from '@material-tailwind/react'
import { User } from '@prisma/client'
import { useState } from 'react'

const FollowOthersListItem = ({ user, handleFollowUser, disabled = false }: { user: User, handleFollowUser: (userId: string) => void, disabled?: boolean }) => {
  const [disableFollow, setDisableFollow] = useState(disabled)

  const onClickFollow = (userId: string) => {
    setDisableFollow(true)
    handleFollowUser(userId)
  }

  return (
		<ListItem key={`follow-user-item-${user.userId}`} className='hover:bg-transparent hover:cursor-default border-t-2 rounded-none'>
			<ListItemPrefix>
				<Avatar variant='circular' className="h-auto" src={user.picture} />
			</ListItemPrefix>
			<div className='w-full'>
				<Typography variant='h6' color='blue-gray'>
					{user.name}
				</Typography>
				<Typography variant='small' color='gray' className='font-normal'>
					{`@${user.tag}`}
				</Typography>
			</div>
			<ListItemSuffix>
				{!disableFollow ? (
					<button className='m-1 border-2 rounded-2xl border-spacing-2 transition-all hover:border-blue-500' onClick={() => onClickFollow(user.userId)}>
						<Typography className='mx-2'>Follow</Typography>
					</button>
				) : (
					<span className='rounded-2xl text-blue-500'>Following</span>
				)}
			</ListItemSuffix>
		</ListItem>
	)
}

export default FollowOthersListItem