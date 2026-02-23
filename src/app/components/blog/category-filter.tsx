import { Badge } from '../ui/badge';
import type { PostCategory } from '../../lib/types';

const CATEGORIES: (PostCategory | 'All')[] = [
  'All',
  'Data Science',
  'Web Development',
  'IT Audit & COBIT',
  'Jurnal & Catatan',
  'Daily Log',
];

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-1.5 md:gap-2">
      {CATEGORIES.map(cat => (
        <button key={cat} onClick={() => onChange(cat)}>
          <Badge
            variant={active === cat ? 'default' : 'secondary'}
            className={`rounded-lg px-3 py-1 md:px-4 md:py-1.5 cursor-pointer transition-all text-xs md:text-sm ${
              active === cat
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'hover:bg-accent'
            }`}
          >
            {cat}
          </Badge>
        </button>
      ))}
    </div>
  );
}