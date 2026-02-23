import { Component, type ReactNode } from 'react';
import { Home, RefreshCw } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// ─── Mini Retro TV for ErrorBoundary ───
function MiniRetroTV() {
  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-40 h-auto mx-auto"
    >
      {/* TV Body */}
      <rect x="30" y="35" width="140" height="115" rx="10" className="fill-muted/80 stroke-border" strokeWidth="1.5" />

      {/* Screen bezel */}
      <rect x="42" y="45" width="95" height="72" rx="5" fill="#1a1a2e" />

      {/* Color bars */}
      <g clipPath="url(#ebScreenClip)">
        <rect x="42" y="45" width="14" height="72" fill="#c0c0c0" />
        <rect x="56" y="45" width="14" height="72" fill="#c4c422" />
        <rect x="70" y="45" width="14" height="72" fill="#22c4c4" />
        <rect x="84" y="45" width="13" height="72" fill="#22c422" />
        <rect x="97" y="45" width="13" height="72" fill="#c422c4" />
        <rect x="110" y="45" width="14" height="72" fill="#c42222" />
        <rect x="124" y="45" width="13" height="72" fill="#2222c4" />
      </g>

      <defs>
        <clipPath id="ebScreenClip">
          <rect x="42" y="45" width="95" height="72" rx="3" />
        </clipPath>
      </defs>

      {/* Error icon on screen */}
      <text
        x="89"
        y="90"
        textAnchor="middle"
        fill="white"
        fontSize="22"
        fontWeight="800"
        fontFamily="var(--font-mono)"
        style={{ filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.5))' }}
      >
        ERR
      </text>

      {/* TV controls */}
      <circle cx="150" cy="65" r="5" className="fill-destructive/50" />
      <circle cx="150" cy="85" r="7" className="fill-muted-foreground/20 stroke-border" strokeWidth="0.8" />
      <circle cx="150" cy="105" r="5" className="fill-muted-foreground/20" />

      {/* Legs */}
      <rect x="60" y="150" width="6" height="14" rx="2" className="fill-muted-foreground/30" />
      <rect x="134" y="150" width="6" height="14" rx="2" className="fill-muted-foreground/30" />

      {/* Antenna */}
      <line x1="75" y1="35" x2="60" y2="12" className="stroke-muted-foreground/40" strokeWidth="2" strokeLinecap="round" />
      <line x1="120" y1="35" x2="135" y2="12" className="stroke-muted-foreground/40" strokeWidth="2" strokeLinecap="round" />
      <circle cx="60" cy="11" r="2.5" className="fill-primary/60" />
      <circle cx="135" cy="11" r="2.5" className="fill-primary/60" />
    </svg>
  );
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[ErrorBoundary] Caught error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-lg w-full">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-sm">
              {/* Logo */}
              <div className="mb-8">
                <a href="/" className="inline-block">
                  <span
                    className="text-foreground tracking-tight"
                    style={{ fontSize: '1.2rem', fontWeight: 700 }}
                  >
                    Ravnx<span style={{ color: 'var(--primary)' }}>.</span>
                  </span>
                </a>
              </div>

              {/* TV Illustration */}
              <div className="mb-6">
                <MiniRetroTV />
              </div>

              {/* Text */}
              <div className="text-center">
                <h2
                  className="text-foreground mb-2"
                  style={{ fontSize: '1.5rem', fontWeight: 700 }}
                >
                  Something went wrong
                </h2>
                <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto leading-relaxed">
                  {this.state.error?.message || 'An unexpected error occurred. Don\'t worry, you can try again.'}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={this.handleGoHome}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm transition-all hover:opacity-90"
                    style={{ fontWeight: 500 }}
                  >
                    <Home className="w-4 h-4" />
                    Go home
                  </button>
                  <button
                    onClick={this.handleReload}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-full text-sm transition-all hover:bg-muted"
                    style={{ fontWeight: 500 }}
                  >
                    <RefreshCw className="w-4 h-4" />
                    Retry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}