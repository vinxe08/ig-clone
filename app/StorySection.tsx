import React from 'react'
import Story from './Story'
import { data } from './StoryData'

function StorySection() {
  return (
    <div className='h-[119px] w-[28.40rem] flex border rounded-md  px-4 space-x-4 overflow-hidden'>
      {data.map(user => (
        <Story imageUrl={`https://avatars.dicebear.com/api/open-peeps/${user.imageUrl}.svg`} name={user.name} key={user.imageUrl} />
      ))}
    </div>
  )
}

export default StorySection