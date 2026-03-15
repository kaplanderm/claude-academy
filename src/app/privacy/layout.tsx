import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | Claude Academy for Physicians | DermUnbound',
  description: 'Privacy policy for Claude Academy for Physicians. Information about data collection, cookies, AI usage, and your rights.',
  openGraph: {
    title: 'Privacy Policy | Claude Academy for Physicians',
    description: 'Privacy policy and data handling practices.',
    url: 'https://academy.dermunbound.com/privacy',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
