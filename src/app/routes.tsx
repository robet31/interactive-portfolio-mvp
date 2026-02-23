import { createBrowserRouter } from 'react-router';
import { PublicLayout } from './components/layout/public-layout';
import { DashboardLayout } from './components/dashboard/dashboard-layout';
import { HomePage } from './pages/home-page';
import { BlogPage } from './pages/blog-page';
import { ArticlePage } from './pages/article-page';
import { LoginPage } from './pages/login-page';
import { DashboardPage } from './pages/dashboard-page';
import { PostsPage } from './pages/posts-page';
import { EditorPage } from './pages/editor-page';
import { LogGeneratorPage } from './pages/log-generator-page';
import { ExperiencesPage } from './pages/experiences-page';
import { ProjectsManagementPage } from './pages/projects-management-page';
import { CertificationsPage } from './pages/certifications-page';
import { DailyLogsPage } from './pages/daily-logs-page';
import { NotFoundPage, RouteErrorPage } from './pages/not-found-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <ArticlePage /> },
      { path: 'daily-logs', element: <DailyLogsPage /> },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <RouteErrorPage />,
  },
  {
    path: '/rapi',
    element: <DashboardLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'posts', element: <PostsPage /> },
      { path: 'editor', element: <EditorPage /> },
      { path: 'editor/:id', element: <EditorPage /> },
      { path: 'log-generator', element: <LogGeneratorPage /> },
      { path: 'experiences', element: <ExperiencesPage /> },
      { path: 'certifications', element: <CertificationsPage /> },
      { path: 'projects', element: <ProjectsManagementPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);