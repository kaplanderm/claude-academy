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

        {/* Image prompt cards */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            {lang === 'he' ? '🎨 פרומפטים ליצירת תמונות' : '🎨 Image Generation Prompts'}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: { he: 'Claude בסביבת עבודה', en: 'Claude in Workspace' },
                prompt: 'A warm, minimalist illustration in the style of Anthropic\'s Claude branding. An AI assistant represented as a glowing orange orb sitting on a clean desk next to a laptop and coffee cup. Soft beige/cream background with subtle geometric patterns. Professional, friendly, and approachable aesthetic. No text.',
                color: '#E07A2F',
              },
              {
                title: { he: 'MCP - חיבור לעולם', en: 'MCP - Connected World' },
                prompt: 'A beautiful infographic-style illustration showing a central orange glowing node (representing Claude) connected to multiple service icons (GitHub, Slack, databases, filesystems) via elegant orange-gradient lines. Light cream background with subtle grid. Clean, modern, Anthropic brand style. No text.',
                color: '#4A90D9',
              },
              {
                title: { he: 'קורס הכשרה', en: 'Training Course' },
                prompt: 'An illustration of a learning journey path going from beginner (green) to intermediate (orange) to advanced (purple), with milestone markers and small icons representing AI concepts. The path curves elegantly through a warm cream-toned landscape. Anthropic/Claude brand colors. Modern, clean design. No text.',
                color: '#27AE60',
              },
            ].map(item => (
              <div key={item.prompt} className="glass-card p-5">
                <div className="aspect-video bg-gradient-to-br from-claude-cream to-claude-warm rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl opacity-50">🖼️</span>
                </div>
                <h4 className="font-bold text-text-primary mb-2" style={{ color: item.color }}>
                  {item.title[lang]}
                </h4>
                <details className="text-sm text-text-secondary">
                  <summary className="cursor-pointer font-medium text-claude-orange">
                    {lang === 'he' ? 'הצג פרומפט' : 'Show Prompt'}
                  </summary>
                  <code className="block mt-2 p-3 rounded-lg bg-gray-50 text-xs font-mono leading-relaxed">
                    {item.prompt}
                  </code>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
