'use client';

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Toaster } from 'sonner';
import { HomePage } from './pages/home-page';
import { BlogPage } from './pages/blog-page';
import { ArticlePage } from './pages/article-page';
import { DashboardPage } from './pages/dashboard-page';
import { EditorPage } from './pages/editor-page';
import { ExperiencesPage } from './pages/experiences-page';
import { ProjectsManagementPage } from './pages/projects-management-page';
import { CertificationsPage } from './pages/certifications-page';
import { LoginPage } from './pages/login-page';
import { DailyLogsPage } from './pages/daily-logs-page';
import { LogGeneratorPage } from './pages/log-generator-page';
import { NotFoundPage } from './pages/not-found-page';
import { PublicLayout } from './components/layout/public-layout';
import { DashboardLayout } from './components/dashboard/dashboard-layout';

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
            <Route path="/daily-logs" element={<DailyLogsPage />} />
          </Route>
          
          <Route path="/login" element={<LoginPage />} />
          
          <Route element={<DashboardLayout />}>
            <Route path="/rapi" element={<Navigate to="/rapi/dashboard" replace />} />
            <Route path="/rapi/dashboard" element={<DashboardPage />} />
            <Route path="/rapi/posts" element={<BlogPage />} />
            <Route path="/rapi/editor" element={<EditorPage />} />
            <Route path="/rapi/editor/:id" element={<EditorPage />} />
            <Route path="/rapi/experiences" element={<ExperiencesPage />} />
            <Route path="/rapi/projects" element={<ProjectsManagementPage />} />
            <Route path="/rapi/certifications" element={<CertificationsPage />} />
            <Route path="/rapi/log-generator" element={<LogGeneratorPage />} />
          </Route>
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  
  return <App />;
}
