import type { Metadata } from 'next';
import { medicalUseCases } from '@/data/medicalUseCases';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const useCase = medicalUseCases.find(uc => uc.id === slug);

  if (!useCase) {
    return { title: 'Page Not Found' };
  }

  return {
    title: `${useCase.title.he} | ${useCase.title.en} — Claude AI לרופאים`,
    description: `${useCase.description.he} — ${useCase.description.en}`,
    keywords: [useCase.title.en, useCase.title.he, 'Claude AI', 'medical AI', 'DermUnbound', 'AI for physicians'],
    openGraph: {
      title: `${useCase.title.en} — Claude AI for Physicians`,
      description: useCase.description.en,
      url: `https://claude-academy-il.vercel.app/medical/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return medicalUseCases.map(uc => ({ slug: uc.id }));
}

export default function MedicalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
