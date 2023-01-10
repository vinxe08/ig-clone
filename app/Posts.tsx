"use client"

import StorySection from './StorySection'
import PostList from './PostList'
import Modal from '../app/Modal/Modal'

type IProps = {
  posts: Post[]
}

function Posts({posts}:IProps) {

  return (
    <div className='space-y-6'>
      <StorySection />
      <PostList initialPosts={posts}/>
      <Modal />
    </div>
  )
}

export default Posts