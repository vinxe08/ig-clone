import React from 'react'
import Lottie from 'lottie-react'
import instagramLogo from '../../public/instagram-icon-animate.json'
import facebookIcon from '../../public/facebook-icon.json'

function LoginModal() {
  return (
    <div className='flex flex-col p-4'>
      <h1 className='p-4 font-semibold text-lg'>You need to login first.</h1>
      <div className='flex justify-center items-center space-x-7'>
        <div className='h-14 w-14'>
          <Lottie animationData={facebookIcon} loop={true}/>
        </div>
        
        <h1></h1>

        <div className='h-14 w-14'>
          <Lottie animationData={instagramLogo} loop={true}/>
        </div>
      </div>
    </div>
  )
}

export default LoginModal