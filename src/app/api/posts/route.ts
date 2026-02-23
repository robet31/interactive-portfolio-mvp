import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const slug = searchParams.get('slug');
    
    if (slug) {
      const result = await sql('SELECT * FROM posts WHERE slug = $1', [slug]);
      if (result.length === 0) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
      return NextResponse.json(result[0]);
    }
    
    if (status === 'published') {
      const result = await sql("SELECT * FROM posts WHERE status = 'published' ORDER BY created_at DESC");
      return NextResponse.json(result);
    }
    
    const result = await sql('SELECT * FROM posts ORDER BY created_at DESC');
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const id = crypto.randomUUID();
    const slug = data.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || id;
    const readingTime = Math.max(1, Math.ceil((data.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0) / 200));
    
    await sql(
      `INSERT INTO posts (id, title, slug, excerpt, content, cover_image_url, category, status, reading_time)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        id,
        data.title || 'Untitled',
        slug,
        data.excerpt || '',
        data.content || '',
        data.cover_image_url || '',
        data.category || 'Jurnal & Catatan',
        data.status || 'draft',
        readingTime,
      ]
    );
    
    return NextResponse.json({ id, slug, ...data, readingTime });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updates } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }
    
    const fields: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;
    
    if (updates.title) {
      fields.push(`title = $${paramIndex++}`);
      values.push(updates.title);
    }
    if (updates.excerpt !== undefined) {
      fields.push(`excerpt = $${paramIndex++}`);
      values.push(updates.excerpt);
    }
    if (updates.content !== undefined) {
      fields.push(`content = $${paramIndex++}`);
      values.push(updates.content);
    }
    if (updates.cover_image_url !== undefined) {
      fields.push(`cover_image_url = $${paramIndex++}`);
      values.push(updates.cover_image_url);
    }
    if (updates.category) {
      fields.push(`category = $${paramIndex++}`);
      values.push(updates.category);
    }
    if (updates.status) {
      fields.push(`status = $${paramIndex++}`);
      values.push(updates.status);
    }
    
    fields.push('updated_at = CURRENT_TIMESTAMP');
    values.push(id);
    
    await sql(`UPDATE posts SET ${fields.join(', ')} WHERE id = $${paramIndex}`, values);
    
    return NextResponse.json({ id, ...updates });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }
    
    await sql('DELETE FROM posts WHERE id = $1', [id]);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
