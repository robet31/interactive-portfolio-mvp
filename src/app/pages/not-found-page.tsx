import { Link, useRouteError, isRouteErrorResponse } from 'react-router';
import { ArrowLeft, Home, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

// ─── Retro TV SVG Illustration ───
function RetroTV({ code = '404' }: { code?: string }) {
  return (
    <motion.svg
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[280px] sm:max-w-[320px]"
    >
      <g>
        {/* Shadow */}
        <ellipse cx="160" cy="268" rx="100" ry="10" className="fill-foreground/5" />

        {/* TV Back (3D depth - left side) */}
        <path d="M60 60 L40 45 L40 220 L60 235 Z" className="fill-muted-foreground/20" />
        {/* TV Back (3D depth - bottom) */}
        <path d="M60 235 L40 220 L280 220 L260 235 Z" className="fill-muted-foreground/15" />

        {/* TV Main body */}
        <rect x="60" y="60" width="200" height="175" rx="12" className="fill-muted/80 stroke-border" strokeWidth="2" />

        {/* Screen bezel */}
        <rect x="75" y="72" width="145" height="110" rx="6" fill="#1a1a2e" />

        {/* Color bars */}
        <g clipPath="url(#screenClip404)">
          <rect x="75" y="72" width="21" height="110" fill="#c0c0c0" />
          <rect x="96" y="72" width="21" height="110" fill="#c4c422" />
          <rect x="117" y="72" width="21" height="110" fill="#22c4c4" />
          <rect x="138" y="72" width="21" height="110" fill="#22c422" />
          <rect x="159" y="72" width="21" height="110" fill="#c422c4" />
          <rect x="180" y="72" width="20" height="110" fill="#c42222" />
          <rect x="200" y="72" width="20" height="110" fill="#2222c4" />

          {/* Scanlines overlay */}
          {Array.from({ length: 22 }).map((_, i) => (
            <rect
              key={`scan-${i}`}
              x="75"
              y={72 + i * 5}
              width="145"
              height="1"
              fill="rgba(0,0,0,0.08)"
            />
          ))}
        </g>

        <defs>
          <clipPath id="screenClip404">
            <rect x="75" y="72" width="145" height="110" rx="4" />
          </clipPath>
        </defs>

        {/* Error code on screen */}
        <text
          x="147"
          y="138"
          textAnchor="middle"
          fill="white"
          fontSize="36"
          fontWeight="800"
          fontFamily="var(--font-mono)"
          style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }}
        >
          {code}
        </text>

        {/* Screen reflection */}
        <rect x="78" y="74" width="60" height="30" rx="3" fill="white" opacity="0.06" />

        {/* TV controls panel */}
        <rect x="228" y="80" width="24" height="95" rx="4" className="fill-muted-foreground/10" />

        {/* Power button */}
        <circle cx="240" cy="96" r="6" className="fill-destructive/40 stroke-destructive/30" strokeWidth="1.5" />
        <motion.circle
          cx="240"
          cy="96"
          r="2"
          className="fill-destructive"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Channel knob */}
        <circle cx="240" cy="120" r="8" className="fill-muted-foreground/20 stroke-border" strokeWidth="1" />
        <line x1="240" y1="114" x2="240" y2="120" className="stroke-muted-foreground/40" strokeWidth="1.5" />

        {/* Volume knob */}
        <circle cx="240" cy="148" r="6" className="fill-muted-foreground/20 stroke-border" strokeWidth="1" />

        {/* Speaker grilles */}
        {[195, 200, 205, 210, 215, 220].map((y) => (
          <line key={`spk-${y}`} x1="232" y1={y} x2="248" y2={y} className="stroke-muted-foreground/15" strokeWidth="1" />
        ))}

        {/* TV Stand / legs */}
        <rect x="100" y="235" width="8" height="20" rx="2" className="fill-muted-foreground/30" />
        <rect x="212" y="235" width="8" height="20" rx="2" className="fill-muted-foreground/30" />
        <rect x="90" y="252" width="28" height="4" rx="2" className="fill-muted-foreground/20" />
        <rect x="202" y="252" width="28" height="4" rx="2" className="fill-muted-foreground/20" />

        {/* Antenna */}
        <line x1="130" y1="60" x2="110" y2="25" className="stroke-muted-foreground/40" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="180" y1="60" x2="200" y2="25" className="stroke-muted-foreground/40" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="110" cy="23" r="3" className="fill-primary/60" />
        <circle cx="200" cy="23" r="3" className="fill-primary/60" />
      </g>
    </motion.svg>
  );
}

// ─── 404 Not Found Page ───
export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 py-8">
      <div className="max-w-2xl w-full">
        <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-sm">
          {/* Top bar - logo & avatar */}
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <Link to="/" className="group">
              <span
                className="text-foreground tracking-tight transition-transform group-hover:scale-105 inline-block"
                style={{ fontSize: '1.2rem', fontWeight: 700 }}
              >
                Ravnx<span className="text-primary">.</span>
              </span>
            </Link>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-xs" style={{ fontWeight: 600 }}>A</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
            {/* TV Illustration */}
            <div className="flex-shrink-0">
              <RetroTV code="404" />
            </div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h1 className="!text-3xl sm:!text-4xl text-foreground mb-2" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                Oops!
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-xs">
                We couldn't find the page you were looking for
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={{ fontWeight: 500 }}
              >
                <ArrowLeft className="w-4 h-4" />
                Go home
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Route Error Page (for errorElement) ───
export function RouteErrorPage() {
  const error = useRouteError();

  let title = 'Oops!';
  let message = 'Something unexpected happened';
  let code = '500';

  if (isRouteErrorResponse(error)) {
    code = String(error.status);
    if (error.status === 404) {
      message = "We couldn't find the page you were looking for";
    } else if (error.status === 403) {
      title = 'Forbidden';
      message = "You don't have permission to access this page";
    } else {
      message = error.statusText || 'An error occurred while loading this page';
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 py-8">
      <div className="max-w-2xl w-full">
        <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-sm">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <Link to="/" className="group">
              <span
                className="text-foreground tracking-tight transition-transform group-hover:scale-105 inline-block"
                style={{ fontSize: '1.2rem', fontWeight: 700 }}
              >
                Ravnx<span className="text-primary">.</span>
              </span>
            </Link>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <RetroTV code={code} />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h1 className="!text-3xl sm:!text-4xl text-foreground mb-2" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                {title}
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-xs">
                {message}
              </p>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ fontWeight: 500 }}
                >
                  <Home className="w-4 h-4" />
                  Go home
                </Link>
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-full text-sm transition-all hover:bg-muted hover:scale-[1.02] active:scale-[0.98]"
                  style={{ fontWeight: 500 }}
                >
                  <RefreshCw className="w-4 h-4" />
                  Retry
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}