import { connectToDatabase } from '../util/mongodb'
import { Providers } from './providers'
import { unstable_getServerSession } from 'next-auth/next'
import SideBar from './Sidebar'
import Posts from './Posts'

async function Home() {

  // Get all posts from DB
  const { db } = await connectToDatabase();
  const posts = await db.collection("posts").find().sort({ timestamp: -1 }).toArray();

  const session = await unstable_getServerSession();

  return (
    <Providers session={session}>
      <div className='flex items-center justify-center pt-[26px] pb-16 bg-gray-50'>
        <SideBar session={session}/>
        <Posts posts={posts}/>
      </div>
    </Providers>
  )
}

export default Home