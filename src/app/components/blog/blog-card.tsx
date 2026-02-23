import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Clock, ArrowUpRight, ArrowRight, CalendarDays } from 'lucide-react';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { Post } from '../../lib/types';
import { format } from 'date-fns';

interface BlogCardProps {
  post: Post;
  index?: number;
  featured?: boolean;
}

export function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  const date = format(new Date(post.created_at), 'dd MMM yyyy');
  const isLog = post.category === 'Daily Log';

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Link
          to={`/blog/${post.slug}`}
          className="group block rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
        >
          {/* Mobile: compact featured */}
          <div className="md:hidden p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className={`rounded-lg text-xs ${
                isLog ? 'bg-violet-500/10 text-violet-500 border-violet-500/20' : ''
              }`}>
                {post.category}
              </Badge>
              <span className="text-muted-foreground text-xs">{date}</span>
            </div>
            <h2 className="!text-lg text-foreground mb-2 group-hover:text-primary transition-colors leading-tight line-clamp-2">
              {post.title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.reading_time} min read
              </span>
              <span className="flex items-center gap-1 text-xs text-primary">
                Read more
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Desktop: full featured with image */}
          <div className="hidden md:grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-full overflow-hidden">
              {post.cover_image_url ? (
                <ImageWithFallback
                  src={post.cover_image_url}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className={`w-full h-full flex items-center justify-center ${
                  isLog
                    ? 'bg-gradient-to-br from-violet-500/20 via-blue-500/20 to-cyan-500/20'
                    : 'bg-gradient-to-br from-muted to-muted/50'
                }`}>
                  <CalendarDays className={`w-16 h-16 ${isLog ? 'text-violet-400/40' : 'text-muted-foreground/20'}`} />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className={`rounded-lg ${
                  isLog ? 'bg-violet-500/10 text-violet-500 border-violet-500/20' : ''
                }`}>
                  {post.category}
                </Badge>
                <span className="text-muted-foreground text-sm">{date}</span>
              </div>
              <h2 className="!text-2xl text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.reading_time} min read
                </span>
                <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 h-full"
      >
        {/* Mobile: compact — no image */}
        <div className="md:hidden p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className={`rounded-lg text-[10px] ${
              isLog ? 'bg-violet-500/10 text-violet-500 border-violet-500/20' : ''
            }`}>
              {post.category}
            </Badge>
            <span className="text-muted-foreground text-[10px]">{date}</span>
          </div>
          <h3 className="text-foreground text-sm mb-1 group-hover:text-primary transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-2">
            {post.excerpt}
          </p>
          <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Clock className="w-3 h-3" />
            {post.reading_time} min
          </span>
        </div>

        {/* Desktop: full card with image */}
        <div className="hidden md:block">
          <div className="relative h-48 overflow-hidden">
            {post.cover_image_url ? (
              <ImageWithFallback
                src={post.cover_image_url}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className={`w-full h-full flex items-center justify-center ${
                isLog
                  ? 'bg-gradient-to-br from-violet-500/20 via-blue-500/20 to-cyan-500/20'
                  : 'bg-gradient-to-br from-muted to-muted/50'
              }`}>
                <CalendarDays className={`w-12 h-12 ${isLog ? 'text-violet-400/40' : 'text-muted-foreground/20'}`} />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="secondary" className={`rounded-lg text-xs ${
                isLog ? 'bg-violet-500/10 text-violet-500 border-violet-500/20' : ''
              }`}>
                {post.category}
              </Badge>
              <span className="text-muted-foreground text-xs">{date}</span>
            </div>
            <h3 className="text-foreground mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              {post.reading_time} min read
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
