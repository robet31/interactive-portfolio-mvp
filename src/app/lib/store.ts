import type { Post, AuthState, Experience, Project, Certification } from './types';
import { SEED_POSTS, EXPERIENCES as SEED_EXPERIENCES, PROJECTS as SEED_PROJECTS, CERTIFICATIONS as SEED_CERTIFICATIONS } from './mock-data';

const POSTS_KEY = 'api_portfolio_posts';
const AUTH_KEY = 'api_portfolio_auth';
const SEED_VERSION_KEY = 'api_portfolio_seed_v';
const CURRENT_SEED_VERSION = '4'; // Bump this to re-seed
const EXPERIENCES_KEY = 'api_portfolio_experiences';
const EXP_SEED_VERSION_KEY = 'api_portfolio_exp_seed_v';
const CURRENT_EXP_SEED_VERSION = '3';
const PROJECTS_KEY = 'api_portfolio_projects';
const PROJ_SEED_VERSION_KEY = 'api_portfolio_proj_seed_v';
const CURRENT_PROJ_SEED_VERSION = '1';
const CERTIFICATIONS_KEY = 'api_portfolio_certifications';
const CERT_SEED_VERSION_KEY = 'api_portfolio_cert_seed_v';
const CURRENT_CERT_SEED_VERSION = '1';

// Admin credentials (mock)
const ADMIN_EMAIL = 'api@portfolio.dev';
const ADMIN_PASSWORD = 'admin123';

function generateId(): string {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function sanitizeHtml(html: string): string {
  if (!html) return '';
  
  let sanitized = html;
  
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  sanitized = sanitized.replace(/javascript:/gi, '');
  sanitized = sanitized.replace(/on\w+\s*=/gi, '');
  
  return sanitized;
}

function sanitizeText(text: string): string {
  if (!text) return '';
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim()
    .slice(0, 10000);
}

function sanitizeUrl(url: string): string {
  if (!url) return '';
  return url
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim()
    .slice(0, 10000000);
}

function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

// Initialize with seed data if empty or version mismatch
function initializeStore(): void {
  const existing = localStorage.getItem(POSTS_KEY);
  const seedVersion = localStorage.getItem(SEED_VERSION_KEY);
  if (!existing || seedVersion !== CURRENT_SEED_VERSION) {
    localStorage.setItem(POSTS_KEY, JSON.stringify(SEED_POSTS));
    localStorage.setItem(SEED_VERSION_KEY, CURRENT_SEED_VERSION);
  }
}

function initializeExperienceStore(): void {
  const existing = localStorage.getItem(EXPERIENCES_KEY);
  const seedVersion = localStorage.getItem(EXP_SEED_VERSION_KEY);
  if (!existing || seedVersion !== CURRENT_EXP_SEED_VERSION) {
    localStorage.setItem(EXPERIENCES_KEY, JSON.stringify(SEED_EXPERIENCES));
    localStorage.setItem(EXP_SEED_VERSION_KEY, CURRENT_EXP_SEED_VERSION);
  }
}

function initializeProjectStore(): void {
  const existing = localStorage.getItem(PROJECTS_KEY);
  const seedVersion = localStorage.getItem(PROJ_SEED_VERSION_KEY);
  if (!existing || seedVersion !== CURRENT_PROJ_SEED_VERSION) {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(SEED_PROJECTS));
    localStorage.setItem(PROJ_SEED_VERSION_KEY, CURRENT_PROJ_SEED_VERSION);
  }
}

function initializeCertificationStore(): void {
  const existing = localStorage.getItem(CERTIFICATIONS_KEY);
  const seedVersion = localStorage.getItem(CERT_SEED_VERSION_KEY);
  if (!existing || seedVersion !== CURRENT_CERT_SEED_VERSION) {
    localStorage.setItem(CERTIFICATIONS_KEY, JSON.stringify(SEED_CERTIFICATIONS));
    localStorage.setItem(CERT_SEED_VERSION_KEY, CURRENT_CERT_SEED_VERSION);
  }
}

export function getAllPosts(): Post[] {
  initializeStore();
  const data = localStorage.getItem(POSTS_KEY);
  return data ? JSON.parse(data) : [];
}

export function getPublishedPosts(): Post[] {
  return getAllPosts().filter(p => p.status === 'published');
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find(p => p.slug === slug);
}

export function getPostById(id: string): Post | undefined {
  return getAllPosts().find(p => p.id === id);
}

export function createPost(data: Partial<Post>): Post {
  const posts = getAllPosts();
  const now = new Date().toISOString();
  const newPost: Post = {
    id: generateId(),
    title: sanitizeText(data.title || 'Untitled Post'),
    slug: data.slug || generateSlug(data.title || 'untitled-post'),
    content: sanitizeHtml(data.content || ''),
    cover_image_url: sanitizeUrl(data.cover_image_url || ''),
    category: sanitizeText(data.category || 'Jurnal & Catatan'),
    status: data.status || 'draft',
    excerpt: sanitizeText(data.excerpt || ''),
    created_at: now,
    updated_at: now,
    reading_time: estimateReadingTime(data.content || ''),
  };
  posts.unshift(newPost);
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  return newPost;
}

export function updatePost(id: string, data: Partial<Post>): Post | undefined {
  const posts = getAllPosts();
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return undefined;

  const sanitizedData: Partial<Post> = {};
  if (data.title !== undefined) sanitizedData.title = sanitizeText(data.title);
  if (data.content !== undefined) sanitizedData.content = sanitizeHtml(data.content);
  if (data.cover_image_url !== undefined) sanitizedData.cover_image_url = sanitizeUrl(data.cover_image_url);
  if (data.category !== undefined) sanitizedData.category = sanitizeText(data.category);
  if (data.excerpt !== undefined) sanitizedData.excerpt = sanitizeText(data.excerpt);
  if (data.status !== undefined) sanitizedData.status = data.status;
  if (data.slug !== undefined) sanitizedData.slug = generateSlug(data.slug);

  posts[index] = {
    ...posts[index],
    ...sanitizedData,
    updated_at: new Date().toISOString(),
    reading_time: data.content ? estimateReadingTime(data.content) : posts[index].reading_time,
    slug: data.title ? generateSlug(data.title) : (data.slug || posts[index].slug),
  };
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  return posts[index];
}

export function deletePost(id: string): boolean {
  const posts = getAllPosts();
  const filtered = posts.filter(p => p.id !== id);
  if (filtered.length === posts.length) return false;
  localStorage.setItem(POSTS_KEY, JSON.stringify(filtered));
  return true;
}

// Auth - using sessionStorage for session-based auth (clears when browser is closed)
export function login(email: string, password: string): boolean {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const auth: AuthState = { isAuthenticated: true, email };
    sessionStorage.setItem(AUTH_KEY, JSON.stringify(auth));
    return true;
  }
  return false;
}

export function logout(): void {
  sessionStorage.removeItem(AUTH_KEY);
}

export function getAuthState(): AuthState {
  const data = sessionStorage.getItem(AUTH_KEY);
  if (data) return JSON.parse(data);
  return { isAuthenticated: false, email: null };
}

export { generateSlug, estimateReadingTime };

// ─── Experience CRUD ───────────────────────────────────────────

export function getAllExperiences(): Experience[] {
  initializeExperienceStore();
  const data = localStorage.getItem(EXPERIENCES_KEY);
  return data ? JSON.parse(data) : [];
}

export function getExperienceById(id: string): Experience | undefined {
  return getAllExperiences().find(e => e.id === id);
}

export function createExperience(data: Partial<Experience>): Experience {
  const experiences = getAllExperiences();
  const sanitizedTags = (data.tags || []).map(tag => sanitizeText(tag)).slice(0, 20);
  const newExp: Experience = {
    id: generateId(),
    title: sanitizeText(data.title || 'Untitled Experience'),
    organization: sanitizeText(data.organization || ''),
    period: sanitizeText(data.period || ''),
    description: sanitizeHtml(data.description || ''),
    tags: sanitizedTags,
    type: sanitizeText(data.type || 'work'),
    image: sanitizeUrl(data.image || ''),
    startDate: sanitizeText(data.startDate || ''),
  };
  experiences.unshift(newExp);
  localStorage.setItem(EXPERIENCES_KEY, JSON.stringify(experiences));
  return newExp;
}

export function updateExperience(id: string, data: Partial<Experience>): Experience | undefined {
  const experiences = getAllExperiences();
  const index = experiences.findIndex(e => e.id === id);
  if (index === -1) return undefined;
  
  const sanitizedData: Partial<Experience> = {};
  if (data.title !== undefined) sanitizedData.title = sanitizeText(data.title);
  if (data.organization !== undefined) sanitizedData.organization = sanitizeText(data.organization);
  if (data.period !== undefined) sanitizedData.period = sanitizeText(data.period);
  if (data.description !== undefined) sanitizedData.description = sanitizeHtml(data.description);
  if (data.tags !== undefined) sanitizedData.tags = data.tags.map(tag => sanitizeText(tag)).slice(0, 20);
  if (data.type !== undefined) sanitizedData.type = sanitizeText(data.type);
  if (data.image !== undefined) sanitizedData.image = sanitizeUrl(data.image);
  if (data.startDate !== undefined) sanitizedData.startDate = sanitizeText(data.startDate);
  
  experiences[index] = { ...experiences[index], ...sanitizedData };
  localStorage.setItem(EXPERIENCES_KEY, JSON.stringify(experiences));
  return experiences[index];
}

export function deleteExperience(id: string): boolean {
  const experiences = getAllExperiences();
  const filtered = experiences.filter(e => e.id !== id);
  if (filtered.length === experiences.length) return false;
  localStorage.setItem(EXPERIENCES_KEY, JSON.stringify(filtered));
  return true;
}

// ─── Project CRUD ───────────────────────────────────────────

export function getAllProjects(): Project[] {
  initializeProjectStore();
  const data = localStorage.getItem(PROJECTS_KEY);
  return data ? JSON.parse(data) : [];
}

export function getProjectById(id: string): Project | undefined {
  return getAllProjects().find(e => e.id === id);
}

export function createProject(data: Partial<Project>): Project {
  const projects = getAllProjects();
  const sanitizedTags = (data.tags || []).map(tag => sanitizeText(tag)).slice(0, 15);
  const newProj: Project = {
    id: generateId(),
    title: sanitizeText(data.title || 'Untitled Project'),
    description: sanitizeHtml(data.description || ''),
    image: sanitizeUrl(data.image || ''),
    tags: sanitizedTags,
    link: sanitizeText(data.link || ''),
    category: sanitizeText(data.category || 'Web Development'),
  };
  projects.unshift(newProj);
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  return newProj;
}

export function updateProject(id: string, data: Partial<Project>): Project | undefined {
  const projects = getAllProjects();
  const index = projects.findIndex(e => e.id === id);
  if (index === -1) return undefined;
  
  const sanitizedData: Partial<Project> = {};
  if (data.title !== undefined) sanitizedData.title = sanitizeText(data.title);
  if (data.description !== undefined) sanitizedData.description = sanitizeHtml(data.description);
  if (data.image !== undefined) sanitizedData.image = sanitizeUrl(data.image);
  if (data.tags !== undefined) sanitizedData.tags = data.tags.map(tag => sanitizeText(tag)).slice(0, 15);
  if (data.link !== undefined) sanitizedData.link = sanitizeText(data.link);
  if (data.category !== undefined) sanitizedData.category = sanitizeText(data.category);
  
  projects[index] = { ...projects[index], ...sanitizedData };
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  return projects[index];
}

export function deleteProject(id: string): boolean {
  const projects = getAllProjects();
  const filtered = projects.filter(e => e.id !== id);
  if (filtered.length === projects.length) return false;
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(filtered));
  return true;
}

// ─── Certification CRUD ───────────────────────────────────────────

export function getAllCertifications(): Certification[] {
  initializeCertificationStore();
  const data = localStorage.getItem(CERTIFICATIONS_KEY);
  return data ? JSON.parse(data) : [];
}

export function getCertificationById(id: string): Certification | undefined {
  return getAllCertifications().find(e => e.id === id);
}

export function createCertification(data: Partial<Certification>): Certification {
  const certifications = getAllCertifications();
  const sanitizedSkills = (data.skills || []).map(skill => sanitizeText(skill)).slice(0, 20);
  const newCert: Certification = {
    id: generateId(),
    name: sanitizeText(data.name || 'Untitled Certification'),
    organization: sanitizeText(data.organization || ''),
    issueDate: sanitizeText(data.issueDate || ''),
    expiryDate: sanitizeText(data.expiryDate || ''),
    credentialId: sanitizeText(data.credentialId || ''),
    credentialUrl: sanitizeText(data.credentialUrl || ''),
    image: sanitizeUrl(data.image || ''),
    skills: sanitizedSkills,
  };
  certifications.unshift(newCert);
  localStorage.setItem(CERTIFICATIONS_KEY, JSON.stringify(certifications));
  return newCert;
}

export function updateCertification(id: string, data: Partial<Certification>): Certification | undefined {
  const certifications = getAllCertifications();
  const index = certifications.findIndex(e => e.id === id);
  if (index === -1) return undefined;
  
  const sanitizedData: Partial<Certification> = {};
  if (data.name !== undefined) sanitizedData.name = sanitizeText(data.name);
  if (data.organization !== undefined) sanitizedData.organization = sanitizeText(data.organization);
  if (data.issueDate !== undefined) sanitizedData.issueDate = sanitizeText(data.issueDate);
  if (data.expiryDate !== undefined) sanitizedData.expiryDate = sanitizeText(data.expiryDate);
  if (data.credentialId !== undefined) sanitizedData.credentialId = sanitizeText(data.credentialId);
  if (data.credentialUrl !== undefined) sanitizedData.credentialUrl = sanitizeText(data.credentialUrl);
  if (data.image !== undefined) sanitizedData.image = sanitizeUrl(data.image);
  if (data.skills !== undefined) sanitizedData.skills = data.skills.map(skill => sanitizeText(skill)).slice(0, 20);
  
  certifications[index] = { ...certifications[index], ...sanitizedData };
  localStorage.setItem(CERTIFICATIONS_KEY, JSON.stringify(certifications));
  return certifications[index];
}

export function deleteCertification(id: string): boolean {
  const certifications = getAllCertifications();
  const filtered = certifications.filter(e => e.id !== id);
  if (filtered.length === certifications.length) return false;
  localStorage.setItem(CERTIFICATIONS_KEY, JSON.stringify(filtered));
  return true;
}