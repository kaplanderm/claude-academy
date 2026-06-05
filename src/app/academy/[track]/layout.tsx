import type { Metadata } from 'next';
import { getTrack, getAllTrackSlugs } from '@/content';

type Props = { params: Promise<{ track: string }> };

export async function generateStaticParams() {
  return getAllTrackSlugs().map(track => ({ track }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { track } = await params;
  const t = getTrack(track);
  if (!t) return { title: 'לא נמצא' };
  return {
    title: t.title.he,
    description: t.description.he,
    alternates: { canonical: `/academy/${track}` },
    openGraph: { title: t.title.en, description: t.description.en, url: `/academy/${track}` },
  };
}

export default function TrackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
