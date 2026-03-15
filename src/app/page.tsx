'use client';
import React from 'react';
import { useLang } from '@/lib/LangContext';
import { medicalUseCases } from '@/data/medicalUseCases';
import { ArrowRight, ArrowLeft, BookOpen, ExternalLink, Shield, Brain, Users } from 'lucide-react';
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
              {lang === 'he' ? 'Claude AI בפרקטיקה הרפואית' : 'Claude AI in Medical Practice'}
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

      {/* About DermUnbound Research */}
      <section className="py-16 bg-gradient-to-b from-white to-claude-cream/20" dir={dir}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
              {lang === 'he' ? 'שיטת DermUnbound' : 'The DermUnbound Method'}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {lang === 'he'
                ? 'מחקר וזיקוק של שיטות עבודה בטוחות ויעילות עם AI בפרקטיקה הרפואית'
                : 'Researching and refining safe, effective AI workflows for medical practice'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                {lang === 'he' ? 'פרטיות קודמת לכל' : 'Privacy First'}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {lang === 'he'
                  ? 'פרוטוקולים מוגדרים לאנונימיזציה ולשימוש בטוח ב-AI עם מידע רפואי, בהתאם לחוק הגנת הפרטיות הישראלי'
                  : 'Defined protocols for anonymization and safe AI use with medical data, compliant with Israeli privacy law'}
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <Brain className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                {lang === 'he' ? 'מבוסס מחקר' : 'Research-Based'}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {lang === 'he'
                  ? 'כל השיטות מבוססות על ניסיון קליני מעשי ומחקר שוטף בתחום ה-AI הרפואי'
                  : 'All methods are based on practical clinical experience and ongoing medical AI research'}
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                {lang === 'he' ? 'מותאם לרופאים' : 'Built for Physicians'}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {lang === 'he'
                  ? 'תוכן מותאם לרופאים - ללא צורך בידע טכני מוקדם. כל מושגי הטכנולוגיה מוסברים בשפה פשוטה'
                  : 'Content tailored for physicians - no prior tech knowledge needed. All tech concepts explained in plain language'}
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href={`https://kaplanclinic.co.il/${lang === 'he' ? 'he' : 'en'}/derm-ai`}
              target="_blank"
              rel="dofollow"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-claude-orange text-claude-orange hover:bg-claude-orange hover:text-white transition-all font-semibold"
            >
              {lang === 'he' ? 'קראו עוד על מחקר DermUnbound' : 'Read More About DermUnbound Research'}
              <ExternalLink size={16} />
            </a>
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
                ? 'ב-Claude Academy תמצאו קורסים מלאים, שיעורי בונוס, השוואת כלים, ומדריכים מפורטים - מותאמים לרמה שלכם'
                : 'In Claude Academy you\'ll find full courses, bonus lessons, tool comparisons, and detailed guides - adapted to your level'}
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
