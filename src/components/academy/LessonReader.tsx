'use client';
import { useEffect, useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { useLevel } from '@/lib/LevelContext';
import { getTrack } from '@/content';
import type { Lesson } from '@/content/types';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Clock, BookOpen } from 'lucide-react';
import Icon from '@/components/ui/Icon';
import MarkdownRenderer from '@/components/content/MarkdownRenderer';

export default function LessonReader({ trackSlug, lessonId }: { trackSlug: string; lessonId: string }) {
  const { dir, lang } = useLang();
  const { level } = useLevel();
  const he = lang === 'he';

  const track = getTrack(trackSlug);
  const idx = track ? track.lessons.findIndex(l => l.id === lessonId) : -1;
  const meta = track && idx >= 0 ? track.lessons[idx] : undefined;

  const [lesson, setLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    let alive = true;
    setLesson(null);
    if (meta) meta.load().then(l => { if (alive) setLesson(l); });
    return () => { alive = false; };
  }, [meta]);

  if (!track || !meta) {
    return (
      <div className="min-h-screen pt-28 text-center" dir={dir}>
        <h1 className="text-2xl font-bold text-text-primary mb-3">{he ? 'שיעור לא נמצא' : 'Lesson not found'}</h1>
        <Link href="/academy" className="link-accent">{he ? 'חזרה לאקדמיה' : 'Back to the academy'}</Link>
      </div>
    );
  }

  const prev = idx > 0 ? track.lessons[idx - 1] : null;
  const next = idx < track.lessons.length - 1 ? track.lessons[idx + 1] : null;
  const progress = ((idx + 1) / track.lessons.length) * 100;

  return (
    <div className="min-h-screen pt-24 pb-20" dir={dir}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href={`/academy/${track.slug}`} className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-interactive transition-colors mb-6">
          <Icon icon={dir === 'rtl' ? ArrowRight : ArrowLeft} size={14} />
          {track.title[lang]}
        </Link>

        <div className="glass-card p-6 mb-6">
          <div className="flex items-center gap-2 mb-3 text-sm text-text-muted flex-wrap">
            <span aria-hidden="true">{track.icon}</span>
            <span>{track.title[lang]}</span>
            <span aria-hidden="true">•</span>
            <span className="flex items-center gap-1"><Icon icon={Clock} size={13} /> {meta.duration} {he ? 'דק׳' : 'min'}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary">{meta.title[lang]}</h1>
          <p className="text-text-secondary mt-2">{meta.description[lang]}</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-text-muted">
            <Icon icon={BookOpen} size={14} />
            {he ? `שיעור ${idx + 1} מתוך ${track.lessons.length}` : `Lesson ${idx + 1} of ${track.lessons.length}`}
          </div>
          <div className="mt-2 w-full bg-claude-cream rounded-full h-2" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="glass-card p-6 md:p-8">
          <article className="max-w-none">
            {lesson
              ? <MarkdownRenderer content={lesson.content[lang]} level={level} />
              : <p className="text-text-muted">{he ? 'טוען...' : 'Loading...'}</p>}
          </article>
        </div>

        <nav className="flex justify-between gap-4 mt-8" aria-label={he ? 'ניווט בין שיעורים' : 'Lesson navigation'}>
          {prev ? (
            <Link href={`/academy/${track.slug}/${prev.id}`} className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-color hover:border-interactive text-text-secondary hover:text-interactive transition-all">
              <Icon icon={dir === 'rtl' ? ArrowRight : ArrowLeft} size={16} />
              <span className="flex flex-col items-start">
                <span className="text-xs text-text-muted">{he ? 'הקודם' : 'Previous'}</span>
                <span className="text-sm font-medium">{prev.title[lang]}</span>
              </span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/academy/${track.slug}/${next.id}`} className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-xl">
              <span className="flex flex-col items-end">
                <span className="text-xs text-white/80">{he ? 'הבא' : 'Next'}</span>
                <span className="text-sm font-medium">{next.title[lang]}</span>
              </span>
              <Icon icon={dir === 'rtl' ? ArrowLeft : ArrowRight} size={16} />
            </Link>
          ) : (
            <Link href="/academy" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors">
              {he ? 'סיימת את המסלול! לאקדמיה' : 'Track complete! To the academy'}
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
