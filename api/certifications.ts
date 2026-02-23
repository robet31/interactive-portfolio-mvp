import { NextRequest, NextResponse } from 'next/server';
import { sql } from './db';

export async function GET() {
  try {
    const result = await sql(`
      SELECT id, name, organization, issue_date, expiry_date, credential_id, credential_url, image, skills 
      FROM certifications 
      ORDER BY issue_date DESC
    `);
    const certifications = result.map((row: any) => ({
      ...row,
      skills: row.skills || [],
      issueDate: row.issue_date,
      expiryDate: row.expiry_date,
      credentialId: row.credential_id,
      credentialUrl: row.credential_url,
    }));
    return NextResponse.json(certifications);
  } catch (error) {
    console.error('Error fetching certifications:', error);
    return NextResponse.json({ error: 'Failed to fetch certifications' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const id = crypto.randomUUID();
    
    await sql(
      `INSERT INTO certifications (id, name, organization, issue_date, expiry_date, credential_id, credential_url, image, skills)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        id,
        data.name || 'Untitled',
        data.organization || '',
        data.issueDate || '',
        data.expiryDate || '',
        data.credentialId || '',
        data.credentialUrl || '',
        data.image || '',
        data.skills || [],
      ]
    );
    
    return NextResponse.json({ id, ...data });
  } catch (error) {
    console.error('Error creating certification:', error);
    return NextResponse.json({ error: 'Failed to create certification' }, { status: 500 });
  }
}
