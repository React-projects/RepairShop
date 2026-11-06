import db from '@/db/index';
import { customers } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getCustomerById(id: number) {
   const customer = await db.select().from(customers).where(eq(customers.id, id));
   return customer[0] || null;
}
