'use client';
import { useParams } from 'next/navigation';
import { useLang } from '@/lib/LangContext';
import { getPost } from '@/content/blog';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Clock, Calendar } from 'lucide-react';
import Icon from '@/components/ui/Icon';
import MarkdownRenderer from '@/components/content/MarkdownRenderer';
import JsonLd from '@/components/seo/JsonLd';

export default function BlogPostPage() {
  const params = useParams();
  const { dir, lang } = useLang();
  const he = lang === 'he';
  const post = getPost(params.slug as string);

  if (!post) {
    return (
      <div className="min-h-screen pt-28 text-center" dir={dir}>
        <h1 className="text-2xl font-bold text-text-primary mb-3">{he ? 'הפוסט לא נמצא' : 'Post not found'}</h1>
        <Link href="/blog" className="link-accent">{he ? 'חזרה לבלוג' : 'Back to the blog'}</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20" dir={dir}>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title[lang],
        description: post.excerpt[lang],
        datePublished: post.date,
        inLanguage: lang,
        author: { '@type': 'Person', name: 'Dr. Yehonatan Kaplan' },
        publisher: { '@type': 'Organization', name: 'DermUnbound' },
      }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-interactive transition-colors mb-6">
          <Icon icon={dir === 'rtl' ? ArrowRight : ArrowLeft} size={14} />
          {he ? 'כל הפוסטים' : 'All posts'}
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">{post.title[lang]}</h1>
        <div className="flex items-center gap-4 text-sm text-text-muted mb-8">
          <span className="flex items-center gap-1"><Icon icon={Calendar} size={14} /> {post.date}</span>
          <span className="flex items-center gap-1"><Icon icon={Clock} size={14} /> {post.readTime} {he ? 'דק׳' : 'min'}</span>
        </div>

        {post.videoId && (
          <div className="video-container mb-8">
            <iframe
              src={`https://www.youtube.com/embed/${post.videoId}`}
              title={post.title[lang]}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <article className="glass-card p-6 md:p-8 max-w-none">
          <MarkdownRenderer content={post.content[lang]} />
        </article>
      </div>
    </div>
  );
}
