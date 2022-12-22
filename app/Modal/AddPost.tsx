import React, { useRef, useState } from 'react'
import TitleField from './PostField/TitleField';
import UploadField from './PostField/UploadField';
import UploadPost from './PostField/UploadPost';
import { Ring } from '@uiball/loaders'
import Image from 'next/image';
import { emojiState, modalState } from '../../atoms/postAtom';
import { useRecoilState } from 'recoil'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import fetcher from '../../util/fetchData'

function AddPhoto() {
  const { data: session } = useSession()
  const { data: posts, mutate, error } = useSWR("/api/getPosts", fetcher)

  const [title, setTitle] = useState<string>("Create new post")
  const [lastPart, setLastPart] = useState<boolean>(false)

  const [input, setInput] = useState<string>("")
  const [showEmoji, setShowEmoji] = useRecoilState(emojiState)

  const [displayImage, setDisplayImage] = useState(null)
  const [imgFile, setImgFile] = useState(null || '')
  const filePicker = useRef<any>(null)

  const [loading, setLoading] = useState<boolean>(false)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)

  const [isOpen, setIsOpen] = useRecoilState(modalState)
  
  // Create a file reader for image that will send later in cloudinary
  const addImage = (event: any) => {
    const reader = new FileReader();
    if(event.target.files[0]){
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent:any) => {
      setDisplayImage(readerEvent.target.result);
      setTitle("Crop");
    } 
    setImgFile(event.target.files[0])   
  }

  // Add Emoji in input
  const addEmoji = (e:any) => {
    let sym = e.unified.split("-");
    let codesArray: any[] = [];
    sym.forEach((el:any) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray)
    setInput(input + emoji)
  }

  // Function for typing
  const whenTyping = (e:any) => {
    setInput(e.target.value);
    setShowEmoji(false)
  }

  // For custom next function
  const nextFunction = () => {
    setLastPart(true)
    setTitle("Create new post");
  }

  // For custom prev function
  const prevFunction = () => {
    setDisplayImage(null)
    setTitle("Create new post");
    setLastPart(false)
  }

  // Upload function
  const uploadPost = async (e:any) => {
      e.preventDefault();
      setLoading(true);

      //  Creating FormData that contains data about the photo selected
      const formData = new FormData();
      formData.append('file', imgFile);
      formData.append('upload_preset', 'insta-clone') 

      // Uploads the FormData in cloudinary
      const photo = await fetch('https://api.cloudinary.com/v1_1/insta-clone/image/upload', {
        method: 'POST',
        body: formData,
      })
      .then(res => res.json())
      .catch((error) => console.log("ERROR IN CLOUDINARY: ", error))

      // Holds user inputted data & info
      const post:Post = {
        post: input,
        name: session?.user?.name!,
        photoUrl: photo?.url!,
        email: session?.user?.email!,
        userImg:  session?.user?.image!,
        createdAt: new Date().toString(),
      }
      
      // Upload data/post into MongoDB
      let response;
      const uploadToMongoDB = async () => {
        if(photo){
          response = await fetch('/api/posts', {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
              "Content-Type": "application/json",
            }, 
      }).then(res => res.json());
      return [response.posts, ...posts!]
      } }

      // For SWR/Realtime data fetching
      await mutate(uploadToMongoDB, {
        optimisticData: [post, ...posts!],
        rollbackOnError: true
      })
      
      // Succes Response
      if(response){
        setSuccessMsg("Your post has been shared")
        setTimeout(() => {
           setIsOpen(false);
           setLoading(false); 
          }, 3000)
      } 
  }

  return (
    <div className='flex flex-col h-[24.4rem]'>

      <TitleField displayImage={displayImage} title={title} prevFunction={prevFunction} nextFunction={nextFunction} lastPart={lastPart} uploadPost={uploadPost} loading={loading} />
      { loading 
        ?  <div className='flex items-center justify-center flex-grow'>
            {!successMsg 
              ? <Ring size={100} color="#ff00bc"/>
              : <div className='flex flex-col items-center justify-center'>
                  <Image 
                    src="/check-circle.png"
                    height={95}
                    width={95}
                    alt='Check Circle'
                  />
                  <h1>{successMsg}</h1>
                </div>
            }
          </div>
        : <>
            {!displayImage ? 
              <UploadField filePicker={filePicker} addImage={addImage} />
            : 
              <UploadPost lastPart={lastPart} displayImage={displayImage} input={input} whenTyping={whenTyping} addEmoji={addEmoji} />
            }
          </>
      }
    </div>
  )
}

export default AddPhoto