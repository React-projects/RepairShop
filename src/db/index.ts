import { drizzle } from 'drizzle-orm/neon-http';
import { config } from 'dotenv';

config({ path: '.env.local' });

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
   throw new Error('DATABASE_URL is not set in .env.local');
}

// Pass the string directly; no need to manually call neon()
const db = drizzle(databaseUrl);

export default db;
