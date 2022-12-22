'use client'

import Lottie from 'lottie-react'
import instagramIcon from '../../../public/insta-likes.json'
import instagramText from '../../../public/instagram-text.json'

function Wallpaper() {
  return (
    <div className='hidden lg:flex flex-col -ml-4'>
        <div className='max-w-[25rem]'>
          <Lottie animationData={instagramIcon} loop={true}/>
        </div>
        <div className='max-w-[22rem] max-h-20'>
          <Lottie animationData={instagramText} loop={true}/>
        </div>
      </div>
  )
}

export default Wallpaper