import type { Metadata } from 'next';
import { getPost, getAllPostSlugs } from '@/content/blog';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'לא נמצא' };
  return {
    title: post.title.he,
    description: post.excerpt.he,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title.en,
      description: post.excerpt.en,
      type: 'article',
      publishedTime: post.date,
      url: `/blog/${slug}`,
    },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
