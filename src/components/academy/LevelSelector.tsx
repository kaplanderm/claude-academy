'use client';
import { useLang } from '@/lib/LangContext';
import { useLevel } from '@/lib/LevelContext';
import type { Level } from '@/content/types';
import { GraduationCap, Activity, Wrench } from 'lucide-react';
import Icon from '@/components/ui/Icon';

const OPTIONS: { id: Level; icon: typeof GraduationCap; color: string; label: { he: string; en: string }; desc: { he: string; en: string } }[] = [
  {
    id: 'beginner', icon: GraduationCap, color: '#1E874B',
    label: { he: 'מתחיל', en: 'Beginner' },
    desc: { he: 'בלי רקע טכני. הסברים מלאים ופשוטים.', en: 'No technical background. Full, simple explanations.' },
  },
  {
    id: 'intermediate', icon: Activity, color: '#B5560E',
    label: { he: 'בינוני', en: 'Intermediate' },
    desc: { he: 'כבר מכיר את הבסיס. פחות הסברי יסוד.', en: 'Already know the basics. Fewer foundational notes.' },
  },
  {
    id: 'advanced', icon: Wrench, color: '#7A3C9E',
    label: { he: 'מתקדם', en: 'Advanced' },
    desc: { he: 'מציג גם הערות טכניות מעמיקות.', en: 'Shows deeper technical notes too.' },
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
            ? 'משנה רק את עומק ההסברים, לא את התוכן עצמו. אפשר לשנות בכל רגע.'
            : 'Changes only how detailed the explanations are, not the content itself. Change it any time.'}
        </p>
      </div>
      <div role="radiogroup" aria-label={lang === 'he' ? 'רמת ההסבר' : 'Explanation depth'} className="grid sm:grid-cols-3 gap-3">
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
