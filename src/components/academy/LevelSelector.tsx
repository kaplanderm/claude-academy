'use client';
import { useLang } from '@/lib/LangContext';
import { useLevel } from '@/lib/LevelContext';
import type { Level } from '@/content/types';
import { GraduationCap, Wrench } from 'lucide-react';
import Icon from '@/components/ui/Icon';

const OPTIONS: { id: Level; icon: typeof GraduationCap; color: string; label: { he: string; en: string }; desc: { he: string; en: string } }[] = [
  {
    id: 'beginner', icon: GraduationCap, color: '#1E874B',
    label: { he: 'מתחיל', en: 'Beginner' },
    desc: {
      he: 'השיעור המלא עם הערות עזר בסיסיות. בלי הערות טכניות מעמיקות.',
      en: 'The full lesson with basic helper notes. No deep technical notes.',
    },
  },
  {
    id: 'advanced', icon: Wrench, color: '#7A3C9E',
    label: { he: 'מתקדם', en: 'Advanced' },
    desc: {
      he: 'אותו שיעור, בלי הערות הבסיס, עם הערות טכניות וקליניות מעמיקות.',
      en: 'The same lesson, without the basics, with deeper technical and clinical notes.',
    },
  },
];

// Explanation depth only. Never gates access to tracks or lessons.
export default function LevelSelector() {
  const { lang } = useLang();
  const { level, setLevel } = useLevel();

  return (
    <div className="glass-card p-5">
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold text-text-primary">
          {lang === 'he' ? 'רמת ההסבר' : 'Explanation depth'}
        </h2>
        <p className="text-sm text-text-muted">
          {lang === 'he'
            ? 'משנה אילו הערות נוספות מוצגות בשיעור, לא את גוף השיעור. אפשר לשנות בכל רגע.'
            : 'Changes which extra notes appear in a lesson, not the lesson body. Change it any time.'}
        </p>
      </div>
      <div role="radiogroup" aria-label={lang === 'he' ? 'רמת ההסבר' : 'Explanation depth'} className="grid sm:grid-cols-2 gap-3">
        {OPTIONS.map(opt => {
          const selected = level === opt.id;
          return (
            <button
              key={opt.id}
              role="radio"
              aria-checked={selected}
              onClick={() => setLevel(opt.id)}
              className={`p-4 rounded-xl border-2 text-start transition-all ${selected ? 'bg-claude-cream shadow-sm' : 'bg-white hover:border-gray-300'}`}
              style={{ borderColor: selected ? opt.color : 'var(--border-color)' }}
            >
              <span className="flex items-center gap-2 mb-1">
                <Icon icon={opt.icon} size={18} />
                <span className="font-bold text-text-primary">{opt.label[lang]}</span>
              </span>
              <span className="block text-xs text-text-secondary">{opt.desc[lang]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
