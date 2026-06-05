import { blogPosts } from '@/data/courses';

export interface BlogPostData {
  id: string;
  title: { he: string; en: string };
  excerpt: { he: string; en: string };
  content: { he: string; en: string };
  category: string;
  date: string;
  readTime: number;
  videoId?: string;
}

// Curated, ordered set of physician-relevant posts. Dev-leaning posts from the old
// site (mcp-revolution, five-min-*, tip-system-prompts, tip-context-management) are
// intentionally left out of the blog index.
const ORDER = [
  'opus-4-8-release',
  'desktop-for-physicians',
  'cowork-for-clinics',
  'claude-code-for-non-developers',
  'frontend-design-patient-education',
  'tip-differential-diagnosis-60s',
  'tip-pathology-to-table',
  'tip-prompt-library-dermatology',
];

const byId = new Map((blogPosts as BlogPostData[]).map(p => [p.id, p]));

export const posts: BlogPostData[] = ORDER
  .map(id => byId.get(id))
  .filter((p): p is BlogPostData => Boolean(p));

export function getPost(id: string): BlogPostData | undefined {
  return byId.get(id);
}

export function getAllPostSlugs(): { slug: string }[] {
  return posts.map(p => ({ slug: p.id }));
}
