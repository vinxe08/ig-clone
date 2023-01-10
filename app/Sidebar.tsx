'use client'
import Image from 'next/image'
import Icons from './Icons'
import { signOut } from "next-auth/react"
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/postAtom'

import { useRouter } from 'next/navigation';

function Sidebar({session}: any) {
  const [isOpen, setIsOpen] = useRecoilState(modalState) // For Modal
  const router = useRouter()

  const openModal = (e:any) => {
    if(session) {
      setIsOpen(true)
    } else {
      router.push("/auth/signin")
    }
  }

  const logButton = () => {
    if(session) {
      signOut()
    } else {
      router.push("/auth/signin")
    }
  }

  return (
    <div className='hidden fixed top-0 left-0 md:flex flex-col items-center w-[73px] min-h-screen border-r py-[33px] xl:items-start xl:w-[245px] xl:px-6'>
      <div className=' flex flex-col xl:hidden mt-3 min-h-[80px] '>
        <Icons src="/instagramIcon.png" />
      </div>
      <div className='relative h-[105px] w-[104px] hidden xl:flex overflow-hidden -mt-[31px] cursor-pointer'>
        <Image
          src='/instagram.png'
          height={105}
          width={104}
          alt='Inta Icon'
        />
      </div>
      <div className='flex flex-col items-center xl:items-start justify-between flex-shrink-0 min-h-[22rem] xl:w-[207px] xl:mt-4'>
        <Icons src="/home.png" title='Home' />
        <Icons src="/search.png" title='Explore'  />
        <Icons src="/direction.png" title='Messages'  />
        <Icons src="/heart.png" title='Notifications'  />
        <div 
          onClick={openModal}
          className='w-full flex-shrink-0 flex justify-center xl:justify-start p-2 hover:bg-gray-200 rounded-full transition cursor-pointer hover:transform hover:scale-105 space-x-5 -ml-2 -mt-3'>
            <Image 
              src="/plus.png"
              height={25}
              width={25}
              alt='Icons'
            />
            <div className='hidden xl:inline-block'>
              Create
            </div>
        </div>
        <div 
          onClick={logButton}
          className='flex-shrink-0 flex justify-center xl:justify-start p-2 hover:bg-gray-200 rounded-full transition cursor-pointer hover:transform hover:scale-105 space-x-5 -ml-2 -mt-3 w-full'>
          <div 
            className='cursor-pointer flex-shrink-0 relative h-[23px] w-[25px] bg-gray-300 rounded-full'>
              <Image 
                src='/avatar.png'
                height={23}
                width={25}
                alt='Avatar'
              />
          </div>
          <h1 className='hidden xl:inline-block'>
            Profile
          </h1>
        </div>
      </div>
      <div className='flex-grow flex flex-col justify-end mt-5'>
        <div className='flex-shrink-0 flex hover:bg-slate-200 rounded-full transition ease-in cursor-pointer hover:transform hover:scale-105 items-center space-x-3 -ml-3 p-1 xl:w-[213px]'>
          <Image 
            src="/menu.png"
            height={38}
            width={38}
            alt='Menu'
          /> 
          <h1 className='hidden xl:inline-block'>More</h1>
        </div>
      </div>
    </div>
  )
}

export default Sidebar