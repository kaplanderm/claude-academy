import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { LevelProvider } from '@/lib/LevelContext';
import type { Level } from '@/content/types';

export const metadata: Metadata = {
  title: 'האקדמיה - מסלולי לימוד Claude לרופאים',
  description:
    'מסלולי לימוד מסודרים: התחלה בלי קוד, Cowork, Claude Code דרך הטאב Code, ומסלול מתקדם לטרמינל. מותאם לרופאים ללא רקע טכני.',
  alternates: { canonical: '/academy' },
  openGraph: {
    title: 'Claude Academy for Physicians',
    description: 'Structured learning tracks for using Claude in clinical work, no technical background required.',
    url: '/academy',
  },
};

export default async function AcademyLayout({ children }: { children: React.ReactNode }) {
  const c = await cookies();
  const v = c.get('academy-level')?.value;
  const initialLevel: Level = v === 'intermediate' || v === 'advanced' ? v : 'beginner';
  return <LevelProvider initialLevel={initialLevel}>{children}</LevelProvider>;
}
