import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'בלוג ועדכונים',
  description: 'עדכונים, מדריכים וטיפים לשימוש ב-Claude ברפואת עור: Opus 4.8, Claude Desktop, Cowork ועוד.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog and Updates - Claude for Physicians',
    description: 'Updates, guides, and tips for using Claude in dermatology.',
    url: '/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
