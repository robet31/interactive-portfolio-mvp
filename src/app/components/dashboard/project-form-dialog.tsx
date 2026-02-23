import { useState, useEffect } from 'react';
import { X, Plus, Link2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import type { Project } from '../../lib/types';
import { ImageUploadField } from './image-upload-field';

interface ProjectFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: Project | null;
  onSave: (data: Partial<Project>) => void;
}

const categoryOptions = [
  'Web Development',
  'AI & IoT',
  'Data Science',
  'Data Analytics',
  'Mobile Development',
  'DevOps',
  'Other',
];

export function ProjectFormDialog({
  open,
  onOpenChange,
  project,
  onSave,
}: ProjectFormDialogProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');

  const isEditing = !!project;

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDescription(project.description);
      setCategory(project.category);
      setImage(project.image || '');
      setLink(project.link || '');
      setTags(project.tags);
    } else {
      setTitle('');
      setDescription('');
      setCategory('Web Development');
      setImage('');
      setLink('');
      setTags([]);
      setTagInput('');
    }
  }, [project, open]);

  const handleAddTag = () => {
    const t = tagInput.trim();
    if (t && !tags.includes(t)) {
      setTags([...tags, t]);
      setTagInput('');
    }
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSave({
      title: title.trim(),
      description: description.trim(),
      category,
      image: image.trim(),
      link: link.trim(),
      tags,
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? 'Edit Project' : 'Add New Project'}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? 'Update the details of this project.'
              : 'Add a new project to your portfolio.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="proj-title">Title *</Label>
            <Input
              id="proj-title"
              placeholder="e.g. Smart Agriculture IoT Dashboard"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Category & Link */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map(cat => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="proj-link">
                <span className="flex items-center gap-1.5">
                  <Link2 className="w-3.5 h-3.5" />
                  Project Link
                </span>
              </Label>
              <Input
                id="proj-link"
                placeholder="https://github.com/..."
                value={link}
                onChange={e => setLink(e.target.value)}
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="proj-desc">Description</Label>
            <textarea
              id="proj-desc"
              rows={3}
              placeholder="Describe the project, what it does, and technologies used..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="flex w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          {/* Cover Image */}
          <ImageUploadField
            label="Cover Image"
            id="proj-image"
            value={image}
            onChange={setImage}
          />

          {/* Tags */}
          <div className="space-y-2">
            <Label>Tags / Tech Stack</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Add a tag..."
                value={tagInput}
                onChange={e => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                className="flex-1"
              />
              <Button type="button" variant="outline" size="sm" onClick={handleAddTag} className="shrink-0">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {tags.map(tag => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-md text-xs px-2 py-1 gap-1 cursor-pointer hover:bg-destructive/10"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    {tag}
                    <X className="w-3 h-3" />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!title.trim()}>
              {isEditing ? 'Save Changes' : 'Add Project'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}