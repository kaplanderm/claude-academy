'use client';
import { useLang } from '@/lib/LangContext';
import { bonusLessons } from '@/data/courses';
import { Clock, Star, Lock } from 'lucide-react';

export default function BonusSection() {
  const { t, dir, lang } = useLang();

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
          {bonusLessons.map(lesson => (
            <div key={lesson.id} className="glass-card p-6 group cursor-pointer hover:border-claude-orange/30 border border-transparent transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{lesson.icon}</span>
                <span className={`badge ${levelBadgeClass[lesson.level]}`}>
                  {levelLabels[lesson.level][lang]}
                </span>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-claude-orange transition-colors">
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
          ))}
        </div>
      </div>
    </section>
  );
}
