import Image from 'next/image'
import React from 'react'

type Icon = {
  src: string
  title?: string
}

const Icons:React.FC<Icon> = ({ src, title }) => {
  return (
    <div className='w-full flex-shrink-0 flex justify-center xl:justify-start p-2 hover:bg-gray-200 rounded-full transition cursor-pointer hover:transform hover:scale-105 space-x-5 -ml-2 -mt-3'>
      <Image 
        src={src}
        height={25}
        width={25}
        alt='Icons'
      />
      <div className='hidden xl:inline-block'>
        {title}
      </div>
    </div>
  )
}

export default Icons