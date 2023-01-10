'use client'

import { signIn } from "next-auth/react"
import Lottie from 'lottie-react'

type Props = {
  provider:any
  icon: any
}

function SignUpComponent({provider, icon}: Props) {

  // TODO: Create new app and add facebook authentication. Try this igbuild-clone(meta.developers) app 
  return (
    <div>
      <div>
        <button 
          onClick={() => signIn(provider?.id , {
          callbackUrl: process.env.VERCEL_URL || "https://5th-build-clone.vercel.app/" })}
          className='text-blue-900 font-semibold flex items-center space-x-2'>
          <div className='h-10 w-10'>
            <Lottie animationData={icon} loop={true}/>
          </div>
          <p>Sign in with {provider?.name}</p>
        </button>
      </div>
    </div> 
  )
}

export default SignUpComponent