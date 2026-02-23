import { RouterProvider } from 'react-router';
import { Toaster } from './components/ui/sonner';
import { router } from './routes';
import { ErrorBoundary } from './components/error-boundary';

// Force dark mode — always
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('dark');
}

export default function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </ErrorBoundary>
  );
}