'use client';
import React from 'react';
import { useLang } from '@/lib/LangContext';
import { Course, Lesson } from '@/data/courses';
import { ArrowLeft, ArrowRight, Clock, BookOpen } from 'lucide-react';

interface LessonViewerProps {
  course: Course;
  lesson: Lesson;
  onBack: () => void;
}

export default function LessonViewer({ course, lesson, onBack }: LessonViewerProps) {
  const { lang, dir, t } = useLang();
  const currentIdx = course.lessons.findIndex(l => l.id === lesson.id);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactElement[] = [];
    let inCodeBlock = false;
    let codeContent = '';
    let inTable = false;
    let tableRows: string[][] = [];

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

      // Table
      if (line.trim().startsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableRows = [];
        }
        const cells = line.split('|').filter(c => c.trim() !== '').map(c => c.trim());
        if (!cells.every(c => c.match(/^[-:]+$/))) {
          tableRows.push(cells);
        }
        return;
      } else if (inTable) {
        inTable = false;
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-4">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-claude-warm">
                  {tableRows[0]?.map((cell, ci) => (
                    <th key={ci} className="p-3 text-sm font-bold text-text-primary border-b border-claude-peach">{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-claude-cream/30'}>
                    {row.map((cell, ci) => (
                      <td key={ci} className="p-3 text-sm text-text-secondary border-b border-border-color/30">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }

      // Headings
      if (line.startsWith('# ')) {
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
      // Checkbox
      else if (line.trim().startsWith('- [ ]') || line.trim().startsWith('- [x]')) {
        const checked = line.includes('[x]');
        const text = line.replace(/- \[.\]\s*/, '');
        elements.push(
          <label key={i} className="flex items-center gap-2 text-text-secondary my-1 ml-4">
            <input type="checkbox" checked={checked} readOnly className="accent-claude-orange" />
            {text}
          </label>
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

    // Handle remaining table
    if (inTable && tableRows.length > 0) {
      elements.push(
        <div key="table-end" className="overflow-x-auto my-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-claude-warm">
                {tableRows[0]?.map((cell, ci) => (
                  <th key={ci} className="p-3 text-sm font-bold text-text-primary border-b border-claude-peach">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-claude-cream/30'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="p-3 text-sm text-text-secondary border-b border-border-color/30">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return elements;
  };

  const formatInline = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-text-primary">$1</strong>')
      .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-claude-cream text-claude-brown text-sm font-mono">$1</code>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-claude-orange hover:underline" target="_blank">$1</a>')
      .replace(/❌/g, '<span class="text-red-500">❌</span>')
      .replace(/✅/g, '<span class="text-green-500">✅</span>');
  };

  return (
    <section id="courses" className="py-20 bg-white" dir={dir}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-claude-orange hover:text-claude-orange-dark mb-6 font-medium transition-colors"
        >
          {dir === 'rtl' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
          {t('common.back')}
        </button>

        {/* Lesson header */}
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{course.icon}</span>
            <span className="text-sm text-text-muted">{course.title[lang]}</span>
            <span className="text-text-muted">•</span>
            <span className="text-sm text-text-muted flex items-center gap-1">
              <Clock size={14} /> {lesson.duration} {t('common.minutes')}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary">{lesson.title[lang]}</h1>
          <p className="text-text-secondary mt-2">{lesson.description[lang]}</p>

          {/* Progress */}
          <div className="mt-4 flex items-center gap-2 text-sm text-text-muted">
            <BookOpen size={14} />
            {lang === 'he' ? `שיעור ${currentIdx + 1} מתוך ${course.lessons.length}` : `Lesson ${currentIdx + 1} of ${course.lessons.length}`}
          </div>
          <div className="mt-2 w-full bg-claude-cream rounded-full h-2">
            <div
              className="progress-bar"
              style={{ width: `${((currentIdx + 1) / course.lessons.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Video embed */}
        {lesson.videoId && (
          <div className="video-container mb-8">
            <iframe
              src={`https://www.youtube.com/embed/${lesson.videoId}`}
              title={lesson.title[lang]}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Content */}
        <div className="glass-card p-6 md:p-8">
          <article className="prose prose-lg max-w-none">
            {renderContent(lesson.content[lang])}
          </article>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {currentIdx > 0 ? (
            <button
              onClick={() => {
                const prev = course.lessons[currentIdx - 1];
                // Force re-render by using window.scrollTo
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border-color hover:border-claude-orange text-text-secondary hover:text-claude-orange transition-all"
            >
              {dir === 'rtl' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              {t('common.previous')}
            </button>
          ) : <div />}
          {currentIdx < course.lessons.length - 1 ? (
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-claude-orange text-white hover:bg-claude-orange-dark transition-colors"
            >
              {t('common.next')}
              {dir === 'rtl' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </button>
          ) : <div />}
        </div>
      </div>
    </section>
  );
}
