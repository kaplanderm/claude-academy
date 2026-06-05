import type { Metadata } from 'next';
import { getLessonMeta, getAllLessonParams } from '@/content';

type Props = { params: Promise<{ track: string; lesson: string }> };

export async function generateStaticParams() {
  return getAllLessonParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { track, lesson } = await params;
  const meta = getLessonMeta(track, lesson);
  if (!meta) return { title: 'לא נמצא' };
  return {
    title: meta.title.he,
    description: meta.description.he,
    alternates: { canonical: `/academy/${track}/${lesson}` },
    openGraph: { title: meta.title.en, description: meta.description.en, url: `/academy/${track}/${lesson}` },
  };
}

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
