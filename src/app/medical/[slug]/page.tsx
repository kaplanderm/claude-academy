'use client';
import { useParams } from 'next/navigation';
import { useLang } from '@/lib/LangContext';
import { medicalUseCases, getMedicalUseCaseBySlug } from '@/data/medicalUseCases';
import { ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import MarkdownRenderer from '@/components/content/MarkdownRenderer';

export default function MedicalUseCasePage() {
  const params = useParams();
  const { dir, lang } = useLang();
  const slug = params.slug as string;

  const useCase = getMedicalUseCaseBySlug(slug);

  const currentIndex = medicalUseCases.findIndex(uc => uc.id === slug);
  const prevCase = currentIndex > 0 ? medicalUseCases[currentIndex - 1] : null;
  const nextCase = currentIndex < medicalUseCases.length - 1 ? medicalUseCases[currentIndex + 1] : null;

  if (!useCase) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center" dir={dir}>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">
            {lang === 'he' ? 'עמוד לא נמצא' : 'Page Not Found'}
          </h1>
          <Link href="/" className="link-accent">
            {lang === 'he' ? 'חזרה לדף הראשי' : 'Back to Home'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20" dir={dir}>
      {/* Header */}
      <div className="bg-claude-cream/30 border-b border-border-color py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/#medical-uses"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-interactive transition-colors mb-4"
          >
            {dir === 'rtl' ? <ArrowRight size={14} aria-hidden="true" /> : <ArrowLeft size={14} aria-hidden="true" />}
            {lang === 'he' ? 'חזרה לכל השימושים' : 'Back to All Use Cases'}
          </Link>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-4xl" aria-hidden="true">{useCase.icon}</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary">
                {useCase.title[lang]}
              </h1>
              <p className="text-text-secondary mt-1">{useCase.description[lang]}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal use-case nav bar */}
      <nav aria-label={lang === 'he' ? 'שימושים רפואיים' : 'Medical use cases'} className="bg-white border-b border-orange-50 sticky top-16 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-thin">
            {medicalUseCases.map(uc => (
              <Link
                key={uc.id}
                href={`/medical/${uc.id}`}
                aria-current={uc.id === slug ? 'page' : undefined}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  uc.id === slug
                    ? 'bg-interactive text-white shadow-sm'
                    : 'bg-claude-cream/50 text-text-secondary hover:bg-claude-cream hover:text-interactive'
                }`}
              >
                <span aria-hidden="true">{uc.icon}</span>
                <span className="hidden sm:inline">{uc.title[lang]}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <article className="prose prose-lg max-w-none">
          <MarkdownRenderer content={useCase.content[lang]} />
        </article>

        {/* Navigation between use cases */}
        <div className="mt-12 pt-8 border-t border-border-color">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {prevCase ? (
              <Link href={`/medical/${prevCase.id}`} className="flex items-center gap-2 link-accent font-medium">
                {dir === 'rtl' ? <ArrowRight size={16} aria-hidden="true" /> : <ArrowLeft size={16} aria-hidden="true" />}
                <span>{prevCase.icon} {prevCase.title[lang]}</span>
              </Link>
            ) : <div />}
            {nextCase ? (
              <Link href={`/medical/${nextCase.id}`} className="flex items-center gap-2 link-accent font-medium">
                <span>{nextCase.icon} {nextCase.title[lang]}</span>
                {dir === 'rtl' ? <ArrowLeft size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}
              </Link>
            ) : <div />}
          </div>
        </div>

        {/* CTA to Academy */}
        <div className="mt-10 glass-card p-6 text-center">
          <BookOpen className="mx-auto mb-3 text-interactive" size={28} aria-hidden="true" />
          <h3 className="text-lg font-bold text-text-primary mb-2">
            {lang === 'he' ? 'רוצים ללמוד לעומק?' : 'Want to Learn More?'}
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            {lang === 'he'
              ? 'באקדמיה תמצאו מסלולים מלאים עם שיעורים מפורטים'
              : 'In the academy you\'ll find full tracks with detailed lessons'}
          </p>
          <Link
            href="/academy"
            className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium"
          >
            {lang === 'he' ? 'כניסה לאקדמיה' : 'Enter Academy'}
            {dir === 'rtl' ? <ArrowLeft size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}
          </Link>
        </div>
      </div>
    </div>
  );
}
