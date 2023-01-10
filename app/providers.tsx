"use client";
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'
import MenuBar from './MenuBar';
import TopBar from './TopBar';

export function Providers({ session, children }: any) {

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