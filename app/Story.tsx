import React from 'react'

type Props = {
  imageUrl: string
  name: string
}

type Truncate = {
  string: string
  n: number
}

function Story({ imageUrl, name }: Props) {

  // Use to truncate long strings
  const truncate = (string:string, n:number) => {
    return string?.length > n ? string.substring(0, n-1) + "..." : string;
  }

  return (
    <div className='h-full w-[55px] flex flex-col justify-center space-y-1 flex-shrink-0'>
      <div className={`rounded-full p-2 bg-gray-500 overflow-hidden cursor-pointer`}>
        <img src={imageUrl} alt="User Image" className='h-10 w-10'  />
      </div>
      <h1 className='text-xs text-gray-800'>{truncate(name, 8)}</h1>
    </div>
  )
}

export default Story