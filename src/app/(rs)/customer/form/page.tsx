import { getCustomerById } from '@/lib/quieres/getCustomer';
import BackButton from '@/components/BackButton';
import * as Sentry from '@sentry/nextjs';

export default async function CustomerFormPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }>; params: any }) {
   try {
      const { customerId } = await searchParams;
      // Edit  customer form
      if (!customerId) {
         const customer = await getCustomerById(Number(customerId));
         if (!customer) {
            return (
               <div>
                  <h2 className='text-2xl mb-2'>Customer ID #{customerId} not found</h2>
                  <BackButton title='Go Back' variant='outline' />
               </div>
            );
         }
         console.log('Customer:', customer);
         //   Put Customer form Component here
         //  else {
         //  }
      }
   } catch (error) {
      if (error instanceof Error) {
         Sentry.captureException(error);
         throw error;
      }
   }
}
