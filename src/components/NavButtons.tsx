import type { LucideIcon } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavButtonProps {
   icon: LucideIcon;
   label: string;
   href?: string;
}

export default function NavButtons({ icon: Icon, label, href }: NavButtonProps) {
   const baseClasses = cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'rounded-full');

   if (href) {
      return (
         <Link href={href} aria-label={label} title={label} className={baseClasses}>
            <Icon className='h-4 w-4' />
         </Link>
      );
   }

   return (
      <button type='button' aria-label={label} title={label} className={baseClasses}>
         <Icon className='h-4 w-4' />
      </button>
   );
}
