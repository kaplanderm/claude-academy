'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useLang } from '@/lib/LangContext';
import { bonusLessons } from '@/data/courses';
import { Clock, Star, X, ChevronDown, ChevronUp } from 'lucide-react';

// Simple markdown-like rendering (reuses the same pattern as LessonViewer)
const formatInline = (text: string): string => {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-text-primary">$1</strong>')
    .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-claude-cream text-claude-brown text-sm font-mono">$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-claude-orange hover:underline" target="_blank">$1</a>')
    .replace(/❌/g, '<span class="text-red-500">❌</span>')
    .replace(/✅/g, '<span class="text-green-500">✅</span>');
};

const filterContentByLevel = (content: string, lang: string): string => {
  let result = content;
  const beginnerLabel = lang === 'he' ? '💡 הסבר למתחילים' : '💡 Beginner Tip';
  const advancedLabel = lang === 'he' ? '🔧 למתקדמים' : '🔧 Advanced';
  // Show both beginner and advanced blocks for bonus content
  result = result.replace(/:::beginner\n([\s\S]*?):::/g, `\n> **${beginnerLabel}:** $1\n`);
  result = result.replace(/:::advanced\n([\s\S]*?):::/g, `\n> **${advancedLabel}:** $1\n`);
  return result;
};

const renderContent = (content: string): React.ReactElement[] => {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let inCodeBlock = false;
  let codeContent = '';

  lines.forEach((line, i) => {
    // Code blocks
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

    // Blockquote
    if (line.trim().startsWith('> ')) {
      const text = line.trim().slice(2);
      elements.push(
        <blockquote key={i} className="border-l-4 border-claude-orange/40 bg-claude-cream/50 px-4 py-2 my-3 rounded-r-lg text-text-secondary">
          <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        </blockquote>
      );
    }
    // Headings
    else if (line.startsWith('# ')) {
      elements.push(<h1 key={i} className="text-3xl font-bold text-text-primary mt-8 mb-4">{line.slice(2)}</h1>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-bold text-text-primary mt-6 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-semibold text-text-primary mt-5 mb-2">{line.slice(4)}</h3>);
    }
    // List items
    else if (line.trim().startsWith('- ')) {
      const text = line.trim().slice(2);
      elements.push(
        <li key={i} className="text-text-secondary ml-4 my-1 list-disc">
          <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        </li>
      );
    }
    // Numbered list
    else if (line.trim().match(/^\d+\.\s/)) {
      const text = line.trim().replace(/^\d+\.\s/, '');
      elements.push(
        <li key={i} className="text-text-secondary ml-4 my-1 list-decimal">
          <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        </li>
      );
    }
    // Paragraph
    else if (line.trim()) {
      elements.push(
        <p key={i} className="text-text-secondary my-2 leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
        </p>
      );
    }
    // Empty line
    else {
      elements.push(<div key={i} className="h-2" />);
    }
  });

  return elements;
};

export default function BonusSection() {
  const { t, dir, lang } = useLang();
  const [activeLesson, setActiveLesson] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const levelBadgeClass: Record<string, string> = {
    beginner: 'badge-beginner',
    intermediate: 'badge-intermediate',
    advanced: 'badge-advanced',
  };

  const levelLabels: Record<string, { he: string; en: string }> = {
    beginner: { he: 'מתחילים', en: 'Beginner' },
    intermediate: { he: 'בינוניים', en: 'Intermediate' },
    advanced: { he: 'מתקדמים', en: 'Advanced' },
  };

  // Scroll to content when a lesson is selected
  useEffect(() => {
    if (activeLesson && contentRef.current) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [activeLesson]);

  const activeLessonData = bonusLessons.find(l => l.id === activeLesson);

  return (
    <section id="bonus" className="py-20 bg-white" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            🎁 {t('bonus.title')}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('bonus.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonusLessons.map(lesson => {
            const isActive = activeLesson === lesson.id;
            return (
              <div
                key={lesson.id}
                onClick={() => setActiveLesson(isActive ? null : lesson.id)}
                className={`glass-card p-6 group cursor-pointer transition-all border ${
                  isActive
                    ? 'border-claude-orange ring-2 ring-claude-orange/20 shadow-lg'
                    : 'border-transparent hover:border-claude-orange/30'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{lesson.icon}</span>
                  <div className="flex items-center gap-2">
                    <span className={`badge ${levelBadgeClass[lesson.level]}`}>
                      {levelLabels[lesson.level][lang]}
                    </span>
                    {isActive ? (
                      <ChevronUp size={18} className="text-claude-orange" />
                    ) : (
                      <ChevronDown size={18} className="text-text-muted" />
                    )}
                  </div>
                </div>
                <h3 className={`text-lg font-bold mb-2 transition-colors ${
                  isActive ? 'text-claude-orange' : 'text-text-primary group-hover:text-claude-orange'
                }`}>
                  {lesson.title[lang]}
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  {lesson.description[lang]}
                </p>
                <div className="flex items-center justify-between text-sm text-text-muted">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {lesson.duration} {t('common.minutes')}
                  </span>
                  <span className="flex items-center gap-1 text-claude-orange font-medium">
                    <Star size={14} /> {t('common.free')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inline content viewer */}
        {activeLessonData && 'content' in activeLessonData && (activeLessonData as typeof activeLessonData & { content: { he: string; en: string } }).content && (
          <div ref={contentRef} className="mt-10">
            <div className="glass-card p-6 md:p-10 relative">
              {/* Close button */}
              <button
                onClick={() => setActiveLesson(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-claude-cream text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Lesson header */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="text-3xl">{activeLessonData.icon}</span>
                <h2 className="text-2xl font-bold text-text-primary">{activeLessonData.title[lang]}</h2>
                <span className={`badge ${levelBadgeClass[activeLessonData.level]}`}>
                  {levelLabels[activeLessonData.level][lang]}
                </span>
                <span className="text-sm text-text-muted flex items-center gap-1">
                  <Clock size={14} /> {activeLessonData.duration} {t('common.minutes')}
                </span>
              </div>

              {/* Content */}
              <article className="prose prose-lg max-w-none">
                {renderContent(
                  filterContentByLevel(
                    (activeLessonData as typeof activeLessonData & { content: { he: string; en: string } }).content[lang],
                    lang
                  )
                )}
              </article>

              {/* Bottom close button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setActiveLesson(null)}
                  className="px-6 py-2.5 rounded-xl bg-claude-orange text-white hover:bg-claude-orange-dark transition-colors font-medium"
                >
                  {lang === 'he' ? 'סגור' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
