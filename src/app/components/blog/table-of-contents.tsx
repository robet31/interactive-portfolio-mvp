import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { List, X } from 'lucide-react';

interface TocHeading {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string, index: number): string {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim() || `heading-${index}`
  );
}

/* ── Inject IDs into headings inside a container ── */
export function injectHeadingIds(container: HTMLElement): TocHeading[] {
  const headings: TocHeading[] = [];
  container.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((el, i) => {
    const level = parseInt(el.tagName[1], 10);
    const text = el.textContent?.trim() || '';
    if (!text) return;
    const id = slugify(text, i);
    el.id = id;
    headings.push({ id, text, level });
  });
  return headings;
}

/* ── Desktop Sidebar TOC ── */
function DesktopToc({
  headings,
  activeId,
  onHeadingClick,
}: {
  headings: TocHeading[];
  activeId: string;
  onHeadingClick: (id: string) => void;
}) {
  if (headings.length === 0) return null;

  const minLevel = Math.min(...headings.map(h => h.level));

  return (
    <nav className="hidden xl:block sticky top-24 w-56 shrink-0 self-start">
      <div className="border-l border-border pl-4 space-y-0.5 py-2">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5">
          <List className="w-3 h-3" />
          On this page
        </p>
        {headings.map(h => {
          const indent = (h.level - minLevel) * 12;
          const isActive = h.id === activeId;

          return (
            <button
              key={h.id}
              onClick={() => onHeadingClick(h.id)}
              className={`block w-full text-left text-xs py-1 transition-all duration-200 truncate ${
                isActive
                  ? 'text-primary translate-x-0.5'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ paddingLeft: `${indent}px` }}
              title={h.text}
            >
              <span className="flex items-center gap-1.5">
                {isActive && (
                  <motion.div
                    layoutId="toc-active"
                    className="w-1 h-1 rounded-full bg-primary shrink-0"
                  />
                )}
                <span className="truncate">{h.text}</span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/* ── Mobile Floating TOC ── */
function MobileToc({
  headings,
  activeId,
  onHeadingClick,
}: {
  headings: TocHeading[];
  activeId: string;
  onHeadingClick: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);

  if (headings.length === 0) return null;

  const minLevel = Math.min(...headings.map(h => h.level));
  const activeHeading = headings.find(h => h.id === activeId);
  const progress = activeHeading
    ? ((headings.indexOf(activeHeading) + 1) / headings.length) * 100
    : 0;

  return (
    <div className="xl:hidden fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-14 right-0 w-72 max-h-80 overflow-y-auto bg-card border border-border rounded-xl shadow-xl p-4"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <List className="w-3 h-3" />
              On this page
            </p>
            <div className="space-y-0.5">
              {headings.map(h => {
                const indent = (h.level - minLevel) * 12;
                const isActive = h.id === activeId;

                return (
                  <button
                    key={h.id}
                    onClick={() => {
                      onHeadingClick(h.id);
                      setOpen(false);
                    }}
                    className={`block w-full text-left text-xs py-1.5 transition-colors truncate ${
                      isActive
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    style={{ paddingLeft: `${indent}px` }}
                  >
                    {h.text}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(prev => !prev)}
        className="relative w-11 h-11 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
      >
        {/* Progress ring */}
        <svg className="absolute inset-0 w-11 h-11 -rotate-90" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r="19"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="opacity-10"
          />
          <circle
            cx="22"
            cy="22"
            r="19"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray={`${(progress / 100) * 119.38} 119.38`}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        {open ? <X className="w-4 h-4" /> : <List className="w-4 h-4" />}
      </button>
    </div>
  );
}

/* ── Main TOC Component ── */
export function TableOfContents({
  contentRef,
}: {
  contentRef: React.RefObject<HTMLElement | null>;
}) {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Parse headings and inject IDs
  useEffect(() => {
    if (!contentRef.current) return;

    const parsed = injectHeadingIds(contentRef.current);
    setHeadings(parsed);

    if (parsed.length > 0) {
      setActiveId(parsed[0].id);
    }
  }, [contentRef]);

  // Observe headings for active state
  useEffect(() => {
    if (headings.length === 0 || !contentRef.current) return;

    // Disconnect previous observer
    observerRef.current?.disconnect();

    const visibleHeadings = new Map<string, IntersectionObserverEntry>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          visibleHeadings.set(entry.target.id, entry);
        });

        // Find the first visible heading from top
        const sortedVisible = headings
          .filter(h => {
            const entry = visibleHeadings.get(h.id);
            return entry?.isIntersecting;
          });

        if (sortedVisible.length > 0) {
          setActiveId(sortedVisible[0].id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    // Observe each heading element
    headings.forEach(h => {
      const el = document.getElementById(h.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [headings, contentRef]);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveId(id);
    }
  }, []);

  if (headings.length < 2) return null;

  return (
    <>
      <DesktopToc headings={headings} activeId={activeId} onHeadingClick={handleClick} />
      <MobileToc headings={headings} activeId={activeId} onHeadingClick={handleClick} />
    </>
  );
}