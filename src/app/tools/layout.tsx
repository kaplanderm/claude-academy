import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'דרכי השימוש - Chat, Cowork, Code ועוד',
  description: 'השוואה בין דרכי השימוש ב-Claude: שלושת הטאבים של Claude Desktop (Chat, Cowork, Code), אתר, מובייל, ומסלול מתקדם (CLI/API).',
  alternates: { canonical: '/tools' },
  openGraph: {
    title: 'Ways to Use Claude - Chat, Cowork, Code and More',
    description: 'A comparison of the ways to use Claude for physicians.',
    url: '/tools',
  },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
