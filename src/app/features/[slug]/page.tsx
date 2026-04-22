'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useLang } from '@/lib/LangContext';
import { featureGuides, getFeatureGuideBySlug } from '@/data/featureGuides';
import { ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { renderContent } from '@/app/medical/[slug]/page';

export default function FeatureGuidePage() {
  const params = useParams();
  const { dir, lang } = useLang();
  const slug = params.slug as string;

  const guide = getFeatureGuideBySlug(slug);

  const currentIndex = featureGuides.findIndex(g => g.id === slug);
  const prevGuide = currentIndex > 0 ? featureGuides[currentIndex - 1] : null;
  const nextGuide = currentIndex < featureGuides.length - 1 ? featureGuides[currentIndex + 1] : null;

  if (!guide) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center" dir={dir}>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">
            {lang === 'he' ? 'עמוד לא נמצא' : 'Page Not Found'}
          </h1>
          <Link href="/" className="text-claude-orange hover:underline">
            {lang === 'he' ? 'חזרה לדף הראשי' : 'Back to Home'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20" dir={dir}>
      <div className="bg-claude-cream/30 border-b border-border-color py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/#feature-guides"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-claude-orange transition-colors mb-4"
          >
            {dir === 'rtl' ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
            {lang === 'he' ? 'חזרה לכל המדריכים' : 'Back to All Guides'}
          </Link>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-4xl">{guide.icon}</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary">
                {guide.title[lang]}
              </h1>
              <p className="text-text-secondary mt-1">{guide.description[lang]}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-orange-50 sticky top-16 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-thin">
            {featureGuides.map(g => (
              <Link
                key={g.id}
                href={`/features/${g.id}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  g.id === slug
                    ? 'bg-claude-orange text-white shadow-sm'
                    : 'bg-claude-cream/50 text-text-secondary hover:bg-claude-cream hover:text-claude-orange'
                }`}
              >
                <span>{g.icon}</span>
                <span className="hidden sm:inline">{g.title[lang]}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <article className="prose prose-lg max-w-none">
          {renderContent(guide.content[lang])}
        </article>

        <div className="mt-12 pt-8 border-t border-border-color">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {prevGuide ? (
              <Link
                href={`/features/${prevGuide.id}`}
                className="flex items-center gap-2 text-claude-orange hover:underline font-medium"
              >
                {dir === 'rtl' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                <span>{prevGuide.icon} {prevGuide.title[lang]}</span>
              </Link>
            ) : <div />}
            {nextGuide ? (
              <Link
                href={`/features/${nextGuide.id}`}
                className="flex items-center gap-2 text-claude-orange hover:underline font-medium"
              >
                <span>{nextGuide.icon} {nextGuide.title[lang]}</span>
                {dir === 'rtl' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </Link>
            ) : <div />}
          </div>
        </div>

        <div className="mt-10 glass-card p-6 text-center">
          <BookOpen className="mx-auto mb-3 text-claude-orange" size={28} />
          <h3 className="text-lg font-bold text-text-primary mb-2">
            {lang === 'he' ? 'רוצים ללמוד לעומק?' : 'Want to Learn More?'}
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            {lang === 'he'
              ? 'ב-Claude Academy תמצאו קורסים מלאים עם שיעורים מפורטים'
              : 'In Claude Academy you\'ll find full courses with detailed lessons'}
          </p>
          <Link
            href="/academy"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-claude-orange text-white hover:bg-claude-orange-dark transition-colors font-medium"
          >
            {lang === 'he' ? 'כנסו לאקדמיה' : 'Enter Academy'}
            {dir === 'rtl' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </Link>
        </div>
      </div>
    </div>
  );
}
