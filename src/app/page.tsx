'use client';
import React from 'react';
import { useLang } from '@/lib/LangContext';
import { medicalUseCases } from '@/data/medicalUseCases';
import { ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import MedicalHero from '@/components/MedicalHero';

export default function Home() {
  const { dir, lang } = useLang();

  return (
    <>
      <MedicalHero />

      {/* Medical Use Cases Grid */}
      <section id="medical-uses" className="py-20 bg-white" dir={dir}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {lang === 'he' ? 'תחומי שימוש רפואיים' : 'Medical Use Cases'}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {lang === 'he'
                ? 'לחצו על כל תחום כדי לקרוא מדריך מפורט עם דוגמאות מעשיות, פרומפטים מוכנים, והמלצות פלטפורמה'
                : 'Click each area for a detailed guide with practical examples, ready-to-use prompts, and platform recommendations'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {medicalUseCases.map(useCase => (
              <Link
                key={useCase.id}
                href={`/medical/${useCase.id}`}
                className="glass-card p-6 group cursor-pointer transition-all border border-transparent hover:border-claude-orange/30 hover:shadow-lg block"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{useCase.icon}</span>
                  <div className="flex items-center gap-1 text-claude-orange opacity-0 group-hover:opacity-100 transition-opacity">
                    {dir === 'rtl' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-text-primary group-hover:text-claude-orange transition-colors">
                  {useCase.title[lang]}
                </h3>
                <p className="text-sm text-text-secondary">
                  {useCase.description[lang]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Academy */}
      <section className="py-16 bg-claude-cream/30" dir={dir}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-card p-8 md:p-12">
            <BookOpen className="mx-auto mb-4 text-claude-orange" size={40} />
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {lang === 'he' ? 'רוצים ללמוד לעומק?' : 'Want to Learn In-Depth?'}
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              {lang === 'he'
                ? 'ב-Claude Academy תמצאו קורסים מלאים, שיעורי בונוס, השוואת כלים, ומדריכים מפורטים — מותאמים לרמה שלכם'
                : 'In Claude Academy you\'ll find full courses, bonus lessons, tool comparisons, and detailed guides — adapted to your level'}
            </p>
            <Link
              href="/academy"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-claude-orange to-claude-orange-light text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
            >
              {lang === 'he' ? 'כנסו ל-Claude Academy' : 'Enter Claude Academy'}
              {dir === 'rtl' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
