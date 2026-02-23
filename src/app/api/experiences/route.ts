import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    const result = await sql(`
      SELECT id, title, organization, period, description, type, image, tags, start_date, sort_order 
      FROM experiences 
      ORDER BY sort_order DESC, start_date DESC
    `);
    const experiences = result.map((row: any) => ({
      ...row,
      tags: row.tags || [],
      startDate: row.start_date,
    }));
    return NextResponse.json(experiences);
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return NextResponse.json({ error: 'Failed to fetch experiences' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const id = crypto.randomUUID();
    
    await sql(
      `INSERT INTO experiences (id, title, organization, period, description, type, image, tags, start_date, sort_order)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
      [
        id,
        data.title || 'Untitled',
        data.organization || '',
        data.period || '',
        data.description || '',
        data.type || 'work',
        data.image || '',
        data.tags || [],
        data.startDate || '',
        data.sortOrder || 0,
      ]
    );
    
    return NextResponse.json({ id, ...data });
  } catch (error) {
    console.error('Error creating experience:', error);
    return NextResponse.json({ error: 'Failed to create experience' }, { status: 500 });
  }
}
