'use client';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { ButtonHTMLAttributes } from 'react';

type props = {
   className?: string;
   title?: string;
   variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | null | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function BackButton({ className, title, variant, ...props }: props) {
   const router = useRouter();

   return (
      <Button className={className} variant={variant} onClick={() => router.back()} {...props}>
         {title}
      </Button>
   );
}
