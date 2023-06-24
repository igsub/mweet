import { Avatar } from '@material-tailwind/react'
import React from 'react'

interface IMweetProps {
  src: string
  name: string
  tag: string
  date: Date
  text: string
}

const Mweet = ({ src, name, tag, date, text }: IMweetProps) => {
  return (
    <div className='flex gap-2'>
      <Avatar src={src} />
      <div className='flex flex-col gap-2'>
        <span>{`${name} - ${date}`}</span>
        <p className="w-full rounded-md">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Mweet