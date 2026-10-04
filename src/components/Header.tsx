import { HomeIcon, File as FileIcon, UserRound, LogOut } from 'lucide-react';
import Link from 'next/link';
import NavButtons from '@/components/NavButtons';
import { ModeToggle } from '@/components/ModeToggel';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Button } from '@/components/ui/button';
export default function Header() {
   return (
      <header className='animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20 flex items-center justify-between'>
         <div className='flex h-8 items-center gap-2 justify-between w-full'>
            <div className='flex items-center gap-2'>
               <NavButtons href='/home' label='Home' icon={HomeIcon} />
               <Link href='/home' className='flex items-center  item-center gap-2 ml-0' title='home'>
                  <h1 className='hidden sm:block text-xl font-bold m-0 mt-1'> Computer Repair Shop</h1>
               </Link>
            </div>
            <div className='flex items-center'>
               <NavButtons href='/tickets' label='tickets' icon={FileIcon} />
               <NavButtons href='/customer' label='Customer' icon={UserRound} />
               <ModeToggle />
               <Button
                  variant='ghost'
                  size='icon'
                  aria-label='logout'
                  title='logout'
                  className='rounded-full'
                  render={
                     <LogoutLink>
                        {' '}
                        <LogOut />{' '}
                     </LogoutLink>
                  }
               />
            </div>
         </div>
      </header>
   );
}
