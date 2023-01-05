'use client'

import { signIn } from "next-auth/react"
import Lottie from 'lottie-react'

type Props = {
  provider:any
  icon:any
}

function SignUpComponent({provider, icon}: Props) {

  return (
    <div>
      <div>
        <button 
          onClick={() => signIn(provider.id , {
          callbackUrl: process.env.VERCEL_URL || "http://localhost:3000" })}
          className='text-blue-900 font-semibold flex items-center space-x-2'>
          <div className='h-10 w-10'>
            <Lottie animationData={icon} loop={true}/>
          </div>
          <p>Sign in with {provider.name}</p>
        </button>
      </div>
    </div> 
  )
}

export default SignUpComponent