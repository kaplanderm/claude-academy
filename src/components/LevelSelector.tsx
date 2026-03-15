'use client';
import { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { Sparkles, Zap, Rocket } from 'lucide-react';

interface LevelSelectorProps {
  onLevelChange?: (level: string) => void;
}

export default function LevelSelector({ onLevelChange }: LevelSelectorProps) {
  const { t, dir } = useLang();
  const [selected, setSelected] = useState('beginner');

  const levels = [
    {
      id: 'beginner',
      icon: Sparkles,
      color: 'from-green-400 to-green-500',
      borderColor: 'border-green-300',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
    },
    {
      id: 'intermediate',
      icon: Zap,
      color: 'from-claude-orange to-claude-orange-light',
      borderColor: 'border-orange-300',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
    },
    {
      id: 'advanced',
      icon: Rocket,
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-300',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
    },
  ];

  return (
    <section className="py-16 bg-white" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t('levels.title')}</h2>
          <p className="text-text-secondary text-lg">{t('levels.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((level) => {
            const isSelected = selected === level.id;
            return (
              <button
                key={level.id}
                onClick={() => {
                  setSelected(level.id);
                  onLevelChange?.(level.id);
                }}
                className={`relative p-6 rounded-2xl border-2 transition-all text-start ${
                  isSelected
                    ? `${level.borderColor} ${level.bgColor} shadow-lg scale-[1.02]`
                    : 'border-border-color hover:border-gray-300 bg-white'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-4`}>
                  <level.icon className="text-white" size={24} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isSelected ? level.textColor : 'text-text-primary'}`}>
                  {t(`levels.${level.id}`)}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t(`levels.${level.id}Desc`)}
                </p>
                {isSelected && (
                  <div className={`absolute top-3 ${dir === 'rtl' ? 'left-3' : 'right-3'} w-6 h-6 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center`}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
