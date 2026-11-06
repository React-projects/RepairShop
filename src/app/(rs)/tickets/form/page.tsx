import { getCustomerById } from '@/lib/quieres/getCustomer';
import { getTicketById } from '@/lib/quieres/getTicket';
import BackButton from '@/components/BackButton';
import * as Sentry from '@sentry/nextjs';
export default async function TicketFormPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }>; params: any }) {
   try {
      const { ticketId, customerId } = await searchParams;
      // Edit  ticket
      if (!customerId && !ticketId) {
         return (
            <div>
               <h2 className='text-2xl mb-2'> Ticket ID or customer Need to loading ticket form</h2>
               <BackButton title='Go Back' variant='outline' />
            </div>
         );
      }
      //   New Ticket form Component here
      if (customerId) {
         const customer = await getCustomerById(Number(customerId));
         if (!customer) {
            return (
               <div>
                  <h2 className='text-2xl mb-2'>Customer ID #{customerId} not found</h2>
                  <BackButton title='Go Back' variant='outline' />
               </div>
            );
         }
         if (customer.active) {
            return (
               <div>
                  <h2 className='text-2xl mb-2'>Customer ID #{customerId} Number is not active </h2>
                  <BackButton title='Go Back' variant='outline' />
               </div>
            );
         }

         // render new ticket form for the customer
         console.log('Customer:', customer);
      }
      //  Edit Ticket form Component here
      if (ticketId) {
         const ticket = await getTicketById(Number(ticketId));
         if (!ticket) {
            return (
               <div>
                  <h2 className='text-2xl mb-2'>Ticket ID #{ticketId} not found</h2>
                  <BackButton title='Go Back' variant='outline' />
               </div>
            );
         }
         const customer = await getCustomerById(ticket.customerId);
         // return ticket form
         console.log('Ticket:', ticket);
         console.log('Customer:', customer);
         //   Put Ticket form Component here
      }
   } catch (error) {
      if (error instanceof Error) {
         Sentry.captureException(error);
         throw error;
      }
   }
}
