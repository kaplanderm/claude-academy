import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'אודות | Claude Academy for Physicians | DermUnbound',
  description: 'Dr. Yehonatan Kaplan - dermatologist, Mohs surgeon, and AI researcher. Learn about the DermUnbound research project and the ecosystem of clinical AI tools for physicians.',
  keywords: ['Dr. Yehonatan Kaplan', 'DermUnbound', 'AI in dermatology', 'Mohs surgery', 'clinical AI tools', 'ד"ר יהונתן קפלן', 'בינה מלאכותית ברפואה', 'רפואת עור'],
  openGraph: {
    title: 'About | Claude Academy for Physicians | DermUnbound',
    description: 'Dr. Yehonatan Kaplan - dermatologist, Mohs surgeon, and AI researcher. The DermUnbound research project and ecosystem.',
    url: 'https://academy.dermunbound.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
