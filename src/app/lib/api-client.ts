// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

async function apiRequest<T>(endpoint: string, options?: RequestInit): Promise<T | null> {
  if (!API_BASE_URL) return null;
  
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });
    
    if (!response.ok) {
      console.error(`API error: ${response.status}`);
      return null;
    }
    
    return response.json();
  } catch (error) {
    console.error('API request failed:', error);
    return null;
  }
}

// Experiences API
export const experiencesApi = {
  getAll: () => apiRequest<any[]>('/api/experiences'),
  create: (data: any) => apiRequest<any>('/api/experiences', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: any) => apiRequest<any>(`/api/experiences/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  delete: (id: string) => apiRequest<any>(`/api/experiences/${id}`, { method: 'DELETE' }),
};

// Projects API
export const projectsApi = {
  getAll: () => apiRequest<any[]>('/api/projects'),
  create: (data: any) => apiRequest<any>('/api/projects', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: any) => apiRequest<any>(`/api/projects/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  delete: (id: string) => apiRequest<any>(`/api/projects/${id}`, { method: 'DELETE' }),
};

// Certifications API
export const certificationsApi = {
  getAll: () => apiRequest<any[]>('/api/certifications'),
  create: (data: any) => apiRequest<any>('/api/certifications', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: any) => apiRequest<any>(`/api/certifications/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  delete: (id: string) => apiRequest<any>(`/api/certifications/${id}`, { method: 'DELETE' }),
};

// Posts API
export const postsApi = {
  getAll: () => apiRequest<any[]>('/api/posts'),
  getPublished: () => apiRequest<any[]>('/api/posts?status=published'),
  getBySlug: (slug: string) => apiRequest<any>(`/api/posts?slug=${slug}`),
  create: (data: any) => apiRequest<any>('/api/posts', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: any) => apiRequest<any>(`/api/posts`, { method: 'PATCH', body: JSON.stringify({ id, ...data }) }),
  delete: (id: string) => apiRequest<any>(`/api/posts?id=${id}`, { method: 'DELETE' }),
};
