'use client';
import { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { useCasesData } from '@/data/courses';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function UseCasesSection() {
  const { t, dir, lang } = useLang();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="use-cases" className="py-20 bg-white" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t('useCases.title')}</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('useCases.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {useCasesData.map(uc => {
            const isSelected = selected === uc.id;
            return (
              <div key={uc.id} className="relative">
                <button
                  onClick={() => setSelected(isSelected ? null : uc.id)}
                  className={`w-full p-5 rounded-2xl border-2 transition-all text-center ${
                    isSelected
                      ? 'border-claude-orange bg-claude-cream shadow-lg'
                      : 'border-border-color hover:border-gray-300 bg-white hover:shadow-md'
                  }`}
                >
                  <span className="text-3xl block mb-3">{uc.icon}</span>
                  <h3 className="font-bold text-text-primary text-sm">{uc.title[lang]}</h3>
                  <p className="text-xs text-text-muted mt-1">{uc.description[lang]}</p>
                </button>

                {isSelected && (
                  <div className="absolute z-10 top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-2xl border border-border-color p-4 min-w-[250px]">
                    <h4 className="font-bold text-sm text-text-primary mb-3"
                      style={{ color: uc.color }}>
                      {lang === 'he' ? 'דוגמאות שימוש:' : 'Usage examples:'}
                    </h4>
                    <ul className="space-y-2">
                      {uc.examples.map((ex, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span style={{ color: uc.color }}>•</span>
                          {ex[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
