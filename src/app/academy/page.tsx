'use client';
import { useLang } from '@/lib/LangContext';
import { tracks } from '@/content';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Clock, BookOpen, Lock } from 'lucide-react';
import Icon from '@/components/ui/Icon';
import LevelSelector from '@/components/academy/LevelSelector';

export default function AcademyPage() {
  const { dir, lang } = useLang();
  const he = lang === 'he';
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen pt-24 pb-20" dir={dir}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            {he ? 'האקדמיה' : 'The Academy'}
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {he
              ? 'ארבעה מסלולים, מהבסיס ועד המתקדם. התחל מ"התחלה" וזרום קדימה לפי הסדר.'
              : 'Four tracks, from the basics to advanced. Start with "Getting Started" and flow forward in order.'}
          </p>
        </div>

        <div className="mb-10">
          <LevelSelector />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {tracks.map((track, i) => {
            const totalMin = track.lessons.reduce((s, l) => s + l.duration, 0);
            return (
              <Link
                key={track.slug}
                href={`/academy/${track.slug}`}
                className={`glass-card p-6 group transition-all border-2 hover:shadow-lg block ${track.gated ? 'border-dashed' : 'border-transparent'}`}
                style={{ borderColor: track.gated ? 'var(--border-color)' : 'transparent' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ backgroundColor: `${track.color}1A` }} aria-hidden="true">
                      {track.icon}
                    </span>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: `${track.color}1A`, color: track.color }}>
                      {he ? `מסלול ${i + 1}` : `Track ${i + 1}`}
                    </span>
                  </span>
                  {track.gated && (
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <Icon icon={Lock} size={12} />
                      {he ? 'אופציונלי' : 'optional'}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-text-primary mb-2 group-hover:text-interactive transition-colors">
                  {track.title[lang]}
                </h2>
                <p className="text-sm text-text-secondary mb-4">{track.description[lang]}</p>
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1"><Icon icon={BookOpen} size={14} /> {track.lessons.length} {he ? 'שיעורים' : 'lessons'}</span>
                  <span className="flex items-center gap-1"><Icon icon={Clock} size={14} /> {totalMin} {he ? 'דק׳' : 'min'}</span>
                  <span className="ms-auto text-interactive opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon icon={Arrow} size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="text-center text-text-muted mt-10 max-w-2xl mx-auto text-sm">
          {he
            ? 'מסלול 4 (מתקדם) הוא אופציונלי ומיועד למי שרוצה לעבוד מטרמינל. רופא מתחיל לא צריך אותו - מסלולים 1 עד 3 מכסים את הכול בממשק גרפי.'
            : 'Track 4 (advanced) is optional and meant for those who want to work from a terminal. A beginner physician does not need it - tracks 1 to 3 cover everything in a graphical interface.'}
        </p>
      </div>
    </div>
  );
}
