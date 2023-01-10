"use client";
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil'
import MenuBar from './MenuBar';
import TopBar from './TopBar';

export function Providers({ session, children }: any) {
  const router = useRouter()

  if(!session) {
    router.push("auth/signin")
  }
  return <RecoilRoot>
    <SessionProvider session={session}>
      <div className='flex flex-col'>
        <TopBar />
        {children}
        <MenuBar />
      </div>
    </SessionProvider> 
  </RecoilRoot>
}