import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    const result = await sql(`
      SELECT id, title, description, image, tags, link, category 
      FROM projects 
      ORDER BY created_at DESC
    `);
    const projects = result.map((row: any) => ({
      ...row,
      tags: row.tags || [],
    }));
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const id = crypto.randomUUID();
    
    await sql(
      `INSERT INTO projects (id, title, description, image, tags, link, category)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        id,
        data.title || 'Untitled',
        data.description || '',
        data.image || '',
        data.tags || [],
        data.link || '',
        data.category || 'Web Development',
      ]
    );
    
    return NextResponse.json({ id, ...data });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
