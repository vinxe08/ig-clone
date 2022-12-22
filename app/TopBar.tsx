"use client"
import Image from 'next/legacy/image'
import React from 'react'

function TopBar() {

  return (
    <div className='bg-white border-b sticky top-0 left-0 md:hidden'>
      <div className='flex flex-grow items-center h-[62px] py-4 px-5 z-50 max-w-4xl mx-auto'>
        <div className='flex items-center space-x-1 flex-shrink-0 mr-auto'>
          <div className='mt-2 relative h-[100px] w-[103px] overflow-hidden'>
            <Image
              src='/instagram.png'
              height={100}
              width={103}
              alt='Instagram'
            />
          </div>
        </div>
        <div className='flex space-x-[1.25rem] items-center justify-center min-w-[100px] '>
          <div 
            className='bg-gray-200 flex items-center rounded-md py-1 px-4 space-x-4 min-w-[20px] mr-1'>
              <div className='flex-shrink-0 flex'>
                <Image 
                  src="/search.png"  
                  height={17}
                  width={17}
                  className="opacity-40"
                  alt='Search'
                />
              </div>
              <input 
                className='outline-none bg-transparent w-full p-[2px]'
                type="text" 
                placeholder='Search'
                />
          </div>
          <div className='flex-shrink-0 relative h-[28px] w-[28px]'>
            <Image 
              src='/heart.png'
              height={28}
              width={28}
              alt='Heart'
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default TopBar