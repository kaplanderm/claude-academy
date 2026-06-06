// Shared content types for the new track/lesson/blog model.
// Lesson bodies live in per-lesson files and load on demand; the index holds
// metadata only, so the homepage and hubs never pull lesson bodies into the bundle.

export type Level = 'beginner' | 'advanced';

export type TrackSlug = 'getting-started' | 'cowork' | 'claude-code' | 'advanced';

export interface Bilingual {
  he: string;
  en: string;
}

export interface Lesson {
  id: string;
  track: TrackSlug;
  title: Bilingual;
  description: Bilingual;
  duration: number; // minutes
  content: Bilingual; // mini-markdown with :::beginner / :::advanced callouts
  videoId?: string;
  updated?: string; // ISO date, drives "current as of" + JSON-LD
}

// Metadata only (no content); content is fetched via load().
export interface LessonMeta {
  id: string;
  track: TrackSlug;
  title: Bilingual;
  description: Bilingual;
  duration: number;
  load: () => Promise<Lesson>;
}

export interface Track {
  slug: TrackSlug;
  title: Bilingual;
  description: Bilingual;
  icon: string;
  recommendedLevel: Level;
  color: string;
  gated?: boolean; // advanced / terminal track - shown but clearly optional
  lessons: LessonMeta[];
}

export type BlogCategory = 'updates' | 'tips' | 'guides';

export interface BlogPost {
  id: string;
  title: Bilingual;
  excerpt: Bilingual;
  content: Bilingual;
  category: BlogCategory;
  date: string; // ISO
  readTime: number;
  videoId?: string;
}

export interface BlogPostMeta {
  id: string;
  title: Bilingual;
  excerpt: Bilingual;
  category: BlogCategory;
  date: string;
  readTime: number;
  load: () => Promise<BlogPost>;
}
