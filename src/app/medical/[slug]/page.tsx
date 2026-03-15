'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useLang } from '@/lib/LangContext';
import { medicalUseCases, getMedicalUseCaseBySlug } from '@/data/medicalUseCases';
import { ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';

// Simple markdown-like rendering
const formatInline = (text: string): string => {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-text-primary">$1</strong>')
    .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-claude-cream text-claude-brown text-sm font-mono">$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-claude-orange hover:underline" target="_blank">$1</a>')
    .replace(/\u274C/g, '<span class="text-red-500">\u274C</span>')
    .replace(/\u2705/g, '<span class="text-green-500">\u2705</span>');
};

const renderContent = (content: string): React.ReactElement[] => {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let inCodeBlock = false;
  let codeContent = '';

  lines.forEach((line, i) => {
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${i}`} className="code-block my-4 overflow-x-auto">
            <code>{codeContent}</code>
          </pre>
        );
        codeContent = '';
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeContent += line + '\n';
      return;
    }

    if (line.trim().startsWith('> ')) {
      const text = line.trim().slice(2);
      elements.push(
        <blockquote key={i} className="border-l-4 border-claude-orange/40 bg-claude-cream/50 px-4 py-2 my-3 rounded-r-lg text-text-secondary">
          <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        </blockquote>
      );
    } else if (line.startsWith('# ')) {
      elements.push(<h1 key={i} className="text-3xl font-bold text-text-primary mt-8 mb-4">{line.slice(2)}</h1>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-bold text-text-primary mt-8 mb-3 pb-2 border-b border-orange-100">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-semibold text-text-primary mt-5 mb-2">{line.slice(4)}</h3>);
    } else if (line.trim().startsWith('- ')) {
      const text = line.trim().slice(2);
      elements.push(
        <li key={i} className="text-text-secondary ml-4 my-1.5 list-disc leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        </li>
      );
    } else if (line.trim().match(/^\d+\.\s/)) {
      const text = line.trim().replace(/^\d+\.\s/, '');
      elements.push(
        <li key={i} className="text-text-secondary ml-4 my-1.5 list-decimal leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        </li>
      );
    } else if (line.trim().startsWith('□ ') || line.trim().startsWith('☐ ')) {
      const text = line.trim().slice(2);
      elements.push(
        <div key={i} className="flex items-start gap-2 my-1.5 text-text-secondary">
          <span className="text-claude-orange mt-0.5">☐</span>
          <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        </div>
      );
    } else if (line.trim()) {
      elements.push(
        <p key={i} className="text-text-secondary my-2 leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
        </p>
      );
    } else {
      elements.push(<div key={i} className="h-2" />);
    }
  });

  return elements;
};

export default function MedicalUseCasePage() {
  const params = useParams();
  const { dir, lang } = useLang();
  const slug = params.slug as string;

  const useCase = getMedicalUseCaseBySlug(slug);

  // Find prev/next
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
          <Link href="/" className="text-claude-orange hover:underline">
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
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-claude-orange transition-colors mb-4"
          >
            {dir === 'rtl' ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
            {lang === 'he' ? 'חזרה לכל השימושים' : 'Back to All Use Cases'}
          </Link>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-4xl">{useCase.icon}</span>
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
      <div className="bg-white border-b border-orange-50 sticky top-16 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-thin">
            {medicalUseCases.map(uc => (
              <Link
                key={uc.id}
                href={`/medical/${uc.id}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  uc.id === slug
                    ? 'bg-claude-orange text-white shadow-sm'
                    : 'bg-claude-cream/50 text-text-secondary hover:bg-claude-cream hover:text-claude-orange'
                }`}
              >
                <span>{uc.icon}</span>
                <span className="hidden sm:inline">{uc.title[lang]}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <article className="prose prose-lg max-w-none">
          {renderContent(useCase.content[lang])}
        </article>

        {/* Navigation between use cases */}
        <div className="mt-12 pt-8 border-t border-border-color">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {prevCase ? (
              <Link
                href={`/medical/${prevCase.id}`}
                className="flex items-center gap-2 text-claude-orange hover:underline font-medium"
              >
                {dir === 'rtl' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                <span>{prevCase.icon} {prevCase.title[lang]}</span>
              </Link>
            ) : <div />}
            {nextCase ? (
              <Link
                href={`/medical/${nextCase.id}`}
                className="flex items-center gap-2 text-claude-orange hover:underline font-medium"
              >
                <span>{nextCase.icon} {nextCase.title[lang]}</span>
                {dir === 'rtl' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </Link>
            ) : <div />}
          </div>
        </div>

        {/* CTA to Academy */}
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
