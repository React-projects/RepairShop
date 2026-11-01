import { pgTable, serial, varchar, boolean, integer, timestamp, text } from 'drizzle-orm/pg-core';
import { defineRelations } from 'drizzle-orm';

export const customers = pgTable('customers', {
   id: serial('id').primaryKey(),
   firstName: varchar('first_name').notNull(),
   lastName: varchar('last_name').notNull(),
   email: varchar('email').unique().notNull(),
   phone: varchar('phone').unique().notNull(),
   address1: text('address1').notNull(),
   address2: text('address2').notNull(),
   city: varchar('city').notNull(),
   state: varchar('state', { length: 2 }).notNull(),
   zip: varchar('zip', { length: 10 }).notNull(),
   notes: text('notes'),
   active: boolean('active').default(true).notNull(),
   createdAt: timestamp('created_at').defaultNow().notNull(),
   updatedAt: timestamp('updated_at')
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
});

export const tickets = pgTable('tickets', {
   id: serial('id').primaryKey(),
   customerId: integer('customer_id')
      .notNull()
      .references(() => customers.id),
   title: varchar('title').notNull(),
   description: text('description'),
   completed: boolean('completed').default(false).notNull(),
   tech: varchar('tech').notNull().default('Unassigned'),
   createdAt: timestamp('created_at').defaultNow().notNull(),
   updatedAt: timestamp('updated_at')
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
});

// Define relations between tables
export const relations = defineRelations({ customers, tickets }, (r) => ({
   customers: {
      tickets: r.many.tickets(),
   },
   tickets: {
      customer: r.one.customers({
         from: r.tickets.customerId,
         to: r.customers.id,
      }),
   },
}));
