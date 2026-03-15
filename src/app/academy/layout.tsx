import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claude Academy | קורסים ללימוד Claude AI לרופאים',
  description: 'קורסים מקיפים ללימוד Claude AI - מהמתחילים ועד המתקדמים. שיעורים מפורטים, כלים, תוספים, ומדריכים מעשיים לרופאים.',
  keywords: ['Claude Academy', 'AI courses for doctors', 'Claude AI training', 'medical AI courses', 'קורסים AI לרופאים'],
  openGraph: {
    title: 'Claude Academy for Physicians',
    description: 'Comprehensive AI training courses for medical professionals',
    url: 'https://claude-academy-il.vercel.app/academy',
  },
};

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
