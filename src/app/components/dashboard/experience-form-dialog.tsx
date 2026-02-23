import { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Award, X, Plus, Building2, Heart, Users, ArrowUpDown } from 'lucide-react';
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
import type { Experience, ExperienceType } from '../../lib/types';
import { ImageUploadField } from './image-upload-field';

interface ExperienceFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  experience?: Experience | null;
  onSave: (data: Partial<Experience>) => void;
}

const typeOptions = [
  { value: 'work', label: 'Work', icon: Briefcase },
  { value: 'internship', label: 'Magang', icon: Building2 },
  { value: 'education', label: 'Education', icon: GraduationCap },
  { value: 'program', label: 'Program', icon: Award },
  { value: 'organization', label: 'Organization', icon: Users },
  { value: 'volunteer', label: 'Volunteer', icon: Heart },
] as const;

export function ExperienceFormDialog({
  open,
  onOpenChange,
  experience,
  onSave,
}: ExperienceFormDialogProps) {
  const [title, setTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [period, setPeriod] = useState('');
  const [startDate, setStartDate] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<ExperienceType>('work');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [image, setImage] = useState('');
  const [sortOrder, setSortOrder] = useState('0');

  const isEditing = !!experience;

  useEffect(() => {
    if (experience) {
      setTitle(experience.title || '');
      setOrganization(experience.organization || '');
      setPeriod(experience.period || '');
      setStartDate(experience.startDate || '');
      setDescription(experience.description || '');
      setType(experience.type || 'work');
      setTags(experience.tags || []);
      setImage(experience.image || '');
      
      // Mengambil data sortOrder, pakai any sementara biar tidak error TS
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setSortOrder((experience as any).sortOrder?.toString() || '0');
    } else {
      setTitle('');
      setOrganization('');
      setPeriod('');
      setStartDate('');
      setDescription('');
      setType('work');
      setTags([]);
      setTagInput('');
      setImage('');
      setSortOrder('0');
    }
  }, [experience, open]);

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
      organization: organization.trim(),
      period: period.trim(),
      startDate: startDate.trim(),
      description: description.trim(),
      type,
      tags,
      image: image.trim(),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sortOrder: parseInt(sortOrder) || 0,
    } as any);

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <div className="p-6 pb-2">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {isEditing ? 'Edit Experience' : 'Add New Experience'}
            </DialogTitle>
            <DialogDescription>
              {isEditing
                ? 'Update detail perjalanan karir atau studimu.'
                : 'Tambahkan pengalaman baru ke dalam linimasamu.'}
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-6">
          
          {/* Section 1: Basic Info */}
          <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-border/50">
            <div className="space-y-2">
              <Label htmlFor="exp-title">Title <span className="text-destructive">*</span></Label>
              <Input
                id="exp-title"
                placeholder="e.g. Software Engineering Intern"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="exp-org">Organization</Label>
                <Input
                  id="exp-org"
                  placeholder="e.g. Google, Kampus Merdeka"
                  value={organization}
                  onChange={e => setOrganization(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Type</Label>
                <Select value={type} onValueChange={(v: ExperienceType) => setType(v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {typeOptions.map(opt => (
                      <SelectItem key={opt.value} value={opt.value}>
                        <div className="flex items-center gap-2">
                          <opt.icon className="w-3.5 h-3.5" />
                          {opt.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Section 2: Time & Sorting */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg border border-border/50">
            <div className="space-y-2">
              <Label htmlFor="exp-period">Display Period</Label>
              <Input
                id="exp-period"
                placeholder="e.g. Jun 2025 - Present"
                value={period}
                onChange={e => setPeriod(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="exp-start">Start Date (For Sorting)</Label>
              <Input
                id="exp-start"
                type="month"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="exp-order" className="flex items-center gap-1">
                Prioritas Urutan
              </Label>
              <Input
                id="exp-order"
                type="number"
                placeholder="0"
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}
              />
              <p className="text-[10px] text-muted-foreground leading-tight mt-1">
                Makin besar angka, makin di atas posisinya.
              </p>
            </div>
          </div>

          {/* Section 3: Details */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="exp-desc">Description</Label>
              
              {/* === FIX UTAMA ADA DI SINI === */}
              <textarea
                id="exp-desc"
                rows={5}
                placeholder="Ceritakan tanggung jawab, pencapaian, atau teknologinya..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                // FIX: Ubah 'flex' jadi 'block', tambah min-h lebih besar, dan 'relative z-10' agar tidak ketutupan elemen bawahnya
                className="block min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-y relative z-10"
              />
              {/* ============================= */}
              
            </div>

            <ImageUploadField
              label="Cover Image"
              id="exp-image"
              value={image}
              onChange={setImage}
            />

            <div className="space-y-2">
              <Label>Tags / Skills</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g. React, Node.js (tekan Enter)"
                  value={tagInput}
                  onChange={e => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  className="flex-1"
                />
                <Button type="button" variant="outline" size="sm" onClick={handleAddTag} className="shrink-0 px-4">
                  <Plus className="w-4 h-4 mr-1" /> Add
                </Button>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3 p-3 bg-muted/20 rounded-lg border border-border/50 min-h-[44px]">
                  {tags.map(tag => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-md text-xs px-2.5 py-1 gap-1.5 cursor-pointer hover:bg-destructive/10 hover:text-destructive transition-colors"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      {tag}
                      <X className="w-3 h-3" />
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>

          <DialogFooter className="pt-4 border-t border-border/50">
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!title.trim()} className="min-w-[120px]">
              {isEditing ? 'Save Changes' : 'Add Experience'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}