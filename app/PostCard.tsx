'use client'

import Image from 'next/image'
import TimeAgo from 'react-timeago'
import { useSession } from 'next-auth/react'

type IProps = {
  post: Post
}

function PostCard({post}: IProps ) {

  return (
    <div className='w-[28.40rem] h-max bg-white flex flex-col border rounded-md self-center'>

      <div className='flex items-center justify-start p-2 space-x-3'>
          <img src={post.userImg} alt="User Image" className='rounded-full w-10 h-10' />
        <h1 className='flex-grow'>{post.name}</h1>
        <h1 className='pr-2 font-semibold text-2xl'>⋯</h1>
      </div>

      <img 
        className='h-auto w-screen'
        src={post.photoUrl} 
        alt="Post Picture" />

      <div className='p-3 pl-4 space-y-3'>
        <div className='flex items-center space-x-4'> 
          <div className='cursor-pointer hover:opacity-30 transition ease-in'>
            <Image 
              src="/heart.png"
              height={30}
              width={30}
              className=''
              alt='Heart'
            />
          </div>
          <div className='cursor-pointer hover:opacity-30 transition ease-in'>
            <Image 
              src="/comment.png"
              height={35}
              width={35}
              className=''
              alt='Comment'
            />
          </div>
          <div className='cursor-pointer hover:opacity-30 transition ease-in'>
            <Image 
              src="/direction.png"
              height={30}
              width={30}
              className=''
              alt='Direction'
            />
          </div>
          <div className='flex-grow flex justify-end cursor-pointer hover:opacity-30 transition ease-in'>
            <Image 
              src="/bookmark.png"
              height={30}
              width={30}
              className=''
              alt='Bookmark'
            />
          </div>
            
        </div>
        <h1 className='text-gray-700 font-semibold text-sm'>0 like</h1>
        <div className='flex items-center space-x-2'>
          <h1 className='text-gray-700 font-semibold text-sm'>{post.name}</h1>
          <h1 className='text-gray-700 text-sm'>{post.post}</h1>
        </div>
        <h1 className='text-gray-500 text-[0.6rem]'>
          <TimeAgo date={post.createdAt} />
        </h1>
      </div>      
    </div>
  )
}

export default PostCard