import Image from 'next/image'
import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/postAtom'
import { signOut } from "next-auth/react"

function MenuBar() {
const [isOpen, setIsOpen] = useRecoilState(modalState)

  return (
    <div className='flex justify-around sticky bottom-0 left-0 bg-white border-t-2 p-3 md:hidden '>
      <div className='flex-shrink-0 relative h-[23px] w-[23px]'>
        <Image 
          src='/home.png'
          height={30}
          width={30}
          alt='Home'
        />
      </div> 
      <div className='flex-shrink-0 relative h-[25px] w-[28px]'>
        <Image 
          src='/direction.png'
          height={30}
          width={30}
          alt='Direction'
        />
      </div>
      {/* USE TO ADD POST */}
      <div 
        onClick={() => setIsOpen(true)}
        className='flex-shrink-0 relative h-[25px] w-[25px] cursor-pointer'>
        <Image 
          src='/plus.png'
          height={30}
          width={30}
          alt='Plus'
        />
      </div>
      <div className='flex-shrink-0 relative h-[25px] w-[25px]'>
        <Image 
          src='/bookmark.png'
          height={30}
          width={30}
          alt='Bookmark'
        />
      </div>
      <div 
        onClick={() => signOut()}
        className='cursor-pointer flex-shrink-0 relative h-[23px] w-[25px] bg-gray-300 rounded-full'>
        <Image 
          src='/avatar.png'
          height={30}
          width={30}
          alt='Avatar'
        />
      </div>
    </div>
  )
}

export default MenuBar