import React, { useState } from 'react'
import Image from 'next/image'

type Props = {
  displayImage : any;
  title: string;
  prevFunction: () => void;
  nextFunction: () => void;
  lastPart: boolean;
  uploadPost: (e:any) => void;
  loading: boolean
}

const TitleField:React.FC<Props> = ({ displayImage, title, prevFunction, nextFunction, lastPart, uploadPost, loading }) => {

  return (
    <div className={`py-[0.57rem] px-4 border-b flex ${!displayImage ? "justify-center" : "justify-between"}`}>
        { displayImage && 
          <div 
            onClick={prevFunction}
            className='flex items-center justify-center rounded-full cursor-pointer'>
            <Image 
              src="/prev.png"
              height={20}
              width={20}
              className="transform rotate-180"
              alt='Prev'
            />
          </div> 
        }
        <h1 className='font-semibold justify-self-center'>{title}</h1>
        {displayImage && 
          <>
            {!lastPart 
              ? <button 
                  onClick={nextFunction}
                  className='font-semibold text-blue-600 outline-none active:text-blue-400'>Next
                </button>
              : <button 
                  onClick={uploadPost}
                  disabled={loading}
                  className='font-semibold text-blue-600 outline-none active:text-blue-400'>Share
                </button>
            }
          </>
        }
      </div>
  )
}

export default TitleField