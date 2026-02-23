import { useState, useCallback } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { PenSquare } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ArticleTable } from '../components/dashboard/article-table';
import { getAllPosts } from '../lib/store';

export function PostsPage() {
  const [posts, setPosts] = useState(getAllPosts);

  const refresh = useCallback(() => {
    setPosts(getAllPosts());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="!text-2xl text-foreground">Articles</h1>
          <p className="text-muted-foreground mt-1">
            Manage all your blog posts and documentation.
          </p>
        </div>
        <Link to="/rapi/editor">
          <Button className="gap-2 rounded-xl w-full sm:w-auto">
            <PenSquare className="w-4 h-4" />
            New Post
          </Button>
        </Link>
      </div>

      <ArticleTable posts={posts} onRefresh={refresh} />
    </motion.div>
  );
}