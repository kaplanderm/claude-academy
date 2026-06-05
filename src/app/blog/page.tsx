'use client';
import { useLang } from '@/lib/LangContext';
import { posts } from '@/content/blog';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Clock, Calendar } from 'lucide-react';
import Icon from '@/components/ui/Icon';

export default function BlogIndexPage() {
  const { dir, lang } = useLang();
  const he = lang === 'he';
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen pt-24 pb-20" dir={dir}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            {he ? 'בלוג ועדכונים' : 'Blog and Updates'}
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {he
              ? 'עדכונים, מדריכים וטיפים מעשיים לשימוש ב-Claude ברפואת עור.'
              : 'Updates, guides, and practical tips for using Claude in dermatology.'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map(post => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="glass-card p-6 group transition-all hover:shadow-lg flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                <span className="flex items-center gap-1"><Icon icon={Calendar} size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><Icon icon={Clock} size={12} /> {post.readTime} {he ? 'דק׳' : 'min'}</span>
              </div>
              <h2 className="text-lg font-bold text-text-primary mb-2 group-hover:text-interactive transition-colors">
                {post.title[lang]}
              </h2>
              <p className="text-sm text-text-secondary flex-1">{post.excerpt[lang]}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-interactive">
                {he ? 'קרא עוד' : 'Read more'}
                <Icon icon={Arrow} size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
