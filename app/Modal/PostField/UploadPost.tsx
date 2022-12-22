import React from 'react'
import Image from 'next/image'
// import EmojiPicker from 'emoji-picker-react';
import dynamic from 'next/dynamic'
import { useRecoilState } from 'recoil'
import { emojiState } from '../../../atoms/postAtom';
import { useSession } from 'next-auth/react'

const Picker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false }
);

type Props = {
  lastPart: boolean;
  displayImage: any;
  input: string;
  whenTyping: (e: any) => void;
  addEmoji: (e:any) => void;
}

function UploadPost({lastPart, displayImage, input, whenTyping, addEmoji}: Props) {
  const [showEmoji, setShowEmoji] = useRecoilState(emojiState)
  const { data: session } = useSession()

  return (
    <div className='flex'>
        {!lastPart 
          ? <img src={displayImage} alt="Display Image" className='object-contain p-2' />
          : <div className='flex flex-col flex-grow space-y-4'>
              <div className='flex space-x-3 p-4'>
                <div className='bg-gray-400 rounded-full flex items-center'>
                  <img src={session?.user?.image!} alt="User Image" className='h-10 w-10 rounded-full' />
                </div>
                <h1 className='font-semibold'>{session?.user?.name}</h1>
              </div>
              <textarea 
                value={input}
                onChange={whenTyping}
                className='outline-none px-4'
                rows={3} 
                placeholder='Write a caption...' 
              />
              <div 
                onClick={() => setShowEmoji(!showEmoji)}
                className='flex cursor-pointer px-4'>
                <Image 
                  src="/emoji.png"
                  height={30}
                  width={30}
                  alt='Emoji'
                />
              </div>
              <div className='flex flex-col divide-y border rounded-b-xl text-left'>
                <div className='p-2 flex w-full cursor-pointer '>
                  <h1 className='flex-grow'>Add location</h1>
                </div>
                <div className='p-2 flex w-full cursor-pointer '>
                  <h1 className='flex-grow'>Accessibility</h1>
                </div>
                <div className='p-2 flex w-full cursor-pointer '>
                  <h1 className='flex-grow'>Advanced settings</h1>
                </div>
              </div>

              <div className='absolute top-56'>
                {showEmoji && <Picker
                  onEmojiClick={addEmoji}
                  height={350}
                  width={300}
                />}
              </div>
          </div>
        }
      </div> 
  )
}

export default UploadPost