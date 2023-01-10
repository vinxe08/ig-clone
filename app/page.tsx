import Post from './PostCard'
import Modal from '../app/Modal/Modal'
import { connectToDatabase } from '../util/mongodb'
import { Providers } from './providers'
import { unstable_getServerSession } from 'next-auth/next'
import SideBar from './Sidebar'
import StorySection from './StorySection'
import PostList from './PostList'

async function Home() {

  // Get all posts from DB
  const { db } = await connectToDatabase();
  const posts = await db.collection("posts").find().sort({ timestamp: -1 }).toArray();

  const session = await unstable_getServerSession();

  return (
    <Providers session={session}>
      <div className='flex items-center justify-center pt-[26px] pb-16 bg-gray-50'>
        <SideBar />
        <div className='space-y-6'>
          <StorySection />
          <PostList initialPosts={posts}/>
          <Modal />
        </div>
      </div>
    </Providers>
  )
}

export default Home