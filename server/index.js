import express from 'express';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Security: Use environment variable for database connection
// Never hardcode credentials in source code!
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/experiences', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, title, organization, period, description, type, image, start_date FROM experiences ORDER BY start_date DESC'
    );
    const experiences = result.rows.map(row => ({
      ...row,
      tags: row.tags || [],
      startDate: row.start_date,
    }));
    res.json(experiences);
  } catch (error) {
    console.error('Error fetching experiences:', error);
    res.status(500).json({ error: 'Failed to fetch experiences' });
  }
});

app.get('/api/certifications', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, name, organization, issue_date, expiry_date, credential_id, credential_url, image, skills FROM certifications'
    );
    const certifications = result.rows.map(row => ({
      id: row.id,
      name: row.name,
      organization: row.organization,
      issueDate: row.issue_date,
      expiryDate: row.expiry_date,
      credentialId: row.credential_id,
      credentialUrl: row.credential_url,
      image: row.image,
      skills: row.skills || [],
    }));
    res.json(certifications);
  } catch (error) {
    console.error('Error fetching certifications:', error);
    res.status(500).json({ error: 'Failed to fetch certifications' });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, title, description, image, tags, link, category FROM projects'
    );
    const projects = result.rows.map(row => ({
      ...row,
      tags: row.tags || [],
    }));
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

app.get('/api/posts', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM posts ORDER BY created_at DESC'
    );
    const posts = result.rows.map(row => ({
      ...row,
      cover_image_url: row.cover_image_url,
      reading_time: row.reading_time,
    }));
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.get('/api/posts/published', async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM posts WHERE status = 'published' ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching published posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.get('/api/posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await pool.query('SELECT * FROM posts WHERE slug = $1', [slug]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Failed to fetch post' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
