import { getProviders } from 'next-auth/react'
import SignUpComponent from './SignUpComponent'
import Image from 'next/image';
import Wallpaper from './Wallpaper';

async function getAllProviders() {
  const providers = await getProviders();

  return providers
}

async function SignInPage() {
  const providers = await getAllProviders();

  return (
    <div className='h-screen w-screen flex flex-row-reverse justify-center p-[43px] pb-16 bg-gray-50'>
      <div className='flex flex-col space-y-4'>
        <div className='bg-white flex flex-col items-center h-[60vh] w-[330px] border flex-shrink-0'>
          <div className='flex h-44 w-44 relative'>
            <Image
              src="/instagram.png"
              height={50}
              width={200}
              className=''
              alt='instagram'
              priority
            />
          </div>
          <div className='flex flex-col '>

            {/* Facebook Provider */}
            {/* <SignUpComponent provider={providers?.facebook} icon={facebookIcon} /> */}

            {/* <div className='border-t-[1.5px] relative my-7'>
              <h1 className='absolute left-20 top-[-30px] bg-white p-4'>or</h1>
            </div> */}

            {/* Instagram Provider (TODO: Add this functionality) */}
            {/* <SignUpComponent provider={providers?.instagram} icon={instagramLogo} /> */}

            {/* TODO: Error in provider. Provider is null when in deployment */}
            {Object.values(providers!).map(provider => (
              <>
              <SignUpComponent provider={provider} />
              {provider.name === 'Facebook' ? 
                <div className='border-t-[1.5px] relative my-7'>
                  <h1 className='absolute left-20 top-[-30px] bg-white p-4'>or</h1>
                </div> : null}
              </>
            ))}
          </div>
        </div>
        <div className='flex items-center justify-center bg-white border py-5'>
          <div className='text-sm text-gray-600'>Don&apos;t have an account? 
            <span className='text-blue-500 font-semibold'> Sign up</span> 
          </div>
        </div>
      </div>
       {/* Left Part */}
       <Wallpaper />
      
    </div>

  )
}

export default SignInPage