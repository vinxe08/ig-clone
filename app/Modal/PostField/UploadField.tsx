import React, { useRef } from 'react'
import Image from 'next/image'

type Props = {
  filePicker: any;
  addImage: any
}

function UploadPost({filePicker, addImage}: Props) {

  return (
    <div className='flex-grow flex flex-col items-center justify-center relative'>
        <div className='flex'>
          <div className='absolute top-20 left-32 transform -rotate-6'>
            <Image 
              src="/photo.png"
              height={70}
              width={70}
              alt='Photo'
            />
          </div>
          <div className='absolute top-[6.4rem] left-[10.5rem] transform rotate-6 bg-white border-[3px] border-black rounded-lg flex'>
            <Image 
              src="/play.png"
              height={50}
              width={50}
              alt='Play'
            />
          </div>
        </div>
        <h1 className='text-[1.38rem] font-thin mt-[5.2rem]'>Drag photos and videos here</h1>
        <div
          className='cursor-pointer border rounded-md mt-[1.10rem] p-[0.31rem] px-[0.61rem] bg-blue-500 active:bg-blue-400'
          onClick={() => filePicker?.current?.click()}
        >
          <h1 className='text-sm font-semibold text-white'>Select from computer</h1>
          <input 
            type="file" 
            accept='image/png, image/jpeg'
            hidden
            onChange={addImage}
            ref={filePicker}
            />
        </div>
      </div>
  )
}

export default UploadPost