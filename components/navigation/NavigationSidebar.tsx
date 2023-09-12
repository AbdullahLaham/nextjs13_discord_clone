import { currentProfile } from '@/lib/currentProfile'
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import React from 'react'
import NavigationAction from './NavigationAction';
import {Separator} from '@/components/ui/separator';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Profile, Server } from '@prisma/client';
import NavigationItem from './NavigationItem';
import { ModeToggle } from '../mode-toggle';
import { UserButton } from '@clerk/nextjs';

interface NavigationSidebarProps {
  profile: Profile,
  servers: Server[],
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = async ({profile, servers}) => {
  
  
  return (
    <div className='space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3 '>
        <NavigationAction />
        <Separator className='h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 ' />
        <ScrollArea className=" w-full flex-1 rounded-md border">
          {servers?.map((server) => {
            return(
              <div key={server.id} className='mb-4'>
                <NavigationItem id={server.id} imageUrl={server.imageUrl} name={server.name} />
              </div>
            )
          })}
        </ScrollArea>
        <div className='pb-3 mt-auto flex items-center flex-col gap-y-4 '>
          <ModeToggle />
          <UserButton afterSignOutUrl='/' appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]"
            }
          }} />
        </div>
    </div>
  )
}

export default NavigationSidebar