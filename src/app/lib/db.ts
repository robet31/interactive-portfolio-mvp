import type { Post, Experience, Project, Certification } from './types';

const NEON_CONNECTION_STRING = 'postgresql://neondb_owner:npg_UEO9PQLoANd7@ep-jolly-king-aj803ozy-pooler.c-3.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require';

interface NeonRow {
  [key: string]: unknown;
}

async function queryNeon<T>(sql: string, params: unknown[] = []): Promise<T[]> {
  try {
    const response = await fetch('https://neon-proxy.opencode.workers.dev/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        connectionString: NEON_CONNECTION_STRING,
        sql,
        params
      })
    });

    if (!response.ok) {
      throw new Error(`Query failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data as T[];
  } catch (error) {
    console.error('Neon query error:', error);
    return [];
  }
}

export async function getAllPostsFromDb(): Promise<Post[]> {
  const rows = await queryNeon<NeonRow>(
    'SELECT id, title, slug, content, cover_image_url, category, status, excerpt, created_at, updated_at, reading_time FROM posts ORDER BY created_at DESC'
  );
  
  return rows.map(row => ({
    id: row.id as string,
    title: row.title as string,
    slug: row.slug as string,
    content: row.content as string || '',
    cover_image_url: row.cover_image_url as string || '',
    category: row.category as Post['category'],
    status: row.status as 'draft' | 'published',
    excerpt: row.excerpt as string || '',
    created_at: row.created_at as string,
    updated_at: row.updated_at as string,
    reading_time: row.reading_time as number || 0,
  }));
}

export async function getPublishedPostsFromDb(): Promise<Post[]> {
  const posts = await getAllPostsFromDb();
  return posts.filter(p => p.status === 'published');
}

export async function getPostBySlugFromDb(slug: string): Promise<Post | undefined> {
  const rows = await queryNeon<NeonRow>(
    'SELECT * FROM posts WHERE slug = $1',
    [slug]
  );
  
  if (rows.length === 0) return undefined;
  
  const row = rows[0];
  return {
    id: row.id as string,
    title: row.title as string,
    slug: row.slug as string,
    content: row.content as string || '',
    cover_image_url: row.cover_image_url as string || '',
    category: row.category as Post['category'],
    status: row.status as 'draft' | 'published',
    excerpt: row.excerpt as string || '',
    created_at: row.created_at as string,
    updated_at: row.updated_at as string,
    reading_time: row.reading_time as number || 0,
  };
}

export async function getAllExperiencesFromDb(): Promise<Experience[]> {
  const rows = await queryNeon<NeonRow>(
    'SELECT id, title, organization, period, description, type, image, start_date FROM experiences ORDER BY start_date DESC'
  );
  
  return rows.map(row => ({
    id: row.id as string,
    title: row.title as string,
    organization: row.organization as string,
    period: row.period as string,
    description: row.description as string || '',
    tags: (row.tags as string[]) || [],
    type: row.type as Experience['type'],
    image: row.image as string || '',
    startDate: row.start_date as string || '',
  }));
}

export async function getAllProjectsFromDb(): Promise<Project[]> {
  const rows = await queryNeon<NeonRow>(
    'SELECT id, title, description, image, tags, link, category FROM projects'
  );
  
  return rows.map(row => ({
    id: row.id as string,
    title: row.title as string,
    description: row.description as string || '',
    image: row.image as string || '',
    tags: (row.tags as string[]) || [],
    link: row.link as string || '',
    category: row.category as string || '',
  }));
}

export async function getAllCertificationsFromDb(): Promise<Certification[]> {
  const rows = await queryNeon<NeonRow>(
    'SELECT id, name, organization, issue_date, expiry_date, credential_id, credential_url, image, skills FROM certifications'
  );
  
  return rows.map(row => ({
    id: row.id as string,
    name: row.name as string,
    organization: row.organization as string,
    issueDate: row.issue_date as string,
    expiryDate: row.expiry_date as string || '',
    credentialId: row.credential_id as string || '',
    credentialUrl: row.credential_url as string || '',
    image: row.image as string || '',
    skills: (row.skills as string[]) || [],
  }));
}
