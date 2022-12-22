'use client'

import React, { useEffect } from 'react'
import PostCard from './PostCard'
import useSWR from 'swr'
import fetcher from '../util/fetchData'

type Posts = {
  initialPosts: Post[]
}

function PostList({initialPosts}: Posts) {
  const { data: posts } = useSWR("/api/getPosts", fetcher)

  return (
    <>
      {(posts || initialPosts).map((post: Post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </>
  )
}

export default PostList