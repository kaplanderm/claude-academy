import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'הצהרת נגישות | Claude Academy for Physicians | DermUnbound',
  description: 'Accessibility statement for Claude Academy for Physicians. WCAG 2.2 AA compliance, accessibility features, and contact information.',
  openGraph: {
    title: 'Accessibility Statement | Claude Academy for Physicians',
    description: 'Accessibility compliance and features.',
    url: 'https://academy.dermunbound.com/accessibility',
  },
};

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
