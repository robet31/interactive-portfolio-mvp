import { neon } from '@neondatabase/serverless';

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_UEO9PQLoANd7@ep-jolly-king-aj803ozy-pooler.c-3.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require';

export const sql = neon(DATABASE_URL);
