"use client"

import StorySection from './StorySection'
import PostList from './PostList'
import Modal from '../app/Modal/Modal'
import { useRouter } from 'next/router'
import { unstable_getServerSession } from 'next-auth'

type IProps = {
  posts: Post[]
  session: any
}

function Posts({posts, session}:IProps) {
  const router = useRouter()

  if(!session) {
    router.push("auth/signin")
  }

  return (
    <div className='space-y-6'>
      <StorySection />
      <PostList initialPosts={posts}/>
      <Modal />
    </div>
  )
}

export default Posts