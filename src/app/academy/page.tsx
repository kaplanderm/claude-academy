'use client';
import { useState, useEffect } from 'react';
import { useLang } from '@/lib/LangContext';
import { ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import LevelSelector from '@/components/LevelSelector';
import CourseSection from '@/components/CourseSection';
import ToolsComparison from '@/components/ToolsComparison';
import PluginsSection from '@/components/PluginsSection';
import UseCasesSection from '@/components/UseCasesSection';
import BlogSection from '@/components/BlogSection';
import BonusSection from '@/components/BonusSection';

export default function AcademyPage() {
  const { dir, lang } = useLang();
  const [selectedLevel, setSelectedLevel] = useState<string>('beginner');

  // Handle anchor scrolling on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

  return (
    <>
      {/* Academy Hero Banner */}
      <section className="pt-24 pb-12 gradient-bg" dir={dir}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-claude-orange transition-colors"
            >
              {dir === 'rtl' ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
              {lang === 'he' ? 'חזרה לדף הראשי' : 'Back to Home'}
            </Link>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-claude-warm border border-claude-peach/50 mb-6">
            <BookOpen size={16} className="text-claude-orange" />
            <span className="text-sm font-medium text-claude-brown">
              {lang === 'he' ? 'פרויקט מחקר DermUnbound' : 'DermUnbound Research Project'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Claude <span className="gradient-text">Academy</span>
            <span className="block text-xl md:text-2xl font-medium text-text-secondary mt-2">
              {lang === 'he' ? 'לרופאים' : 'for Physicians'}
            </span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {lang === 'he'
              ? 'קורסים מלאים, שיעורי בונוס, השוואת כלים ומדריכים מפורטים - מסלול למידה שלם מההתחלה ועד רמת מומחה'
              : 'Full courses, bonus lessons, tool comparisons and detailed guides - a complete learning path from beginner to expert'}
          </p>
        </div>
      </section>

      <LevelSelector onLevelChange={setSelectedLevel} />
      <CourseSection selectedLevel={selectedLevel} />
      <ToolsComparison />
      <PluginsSection />
      <UseCasesSection />
      <BlogSection />
      <BonusSection />
    </>
  );
}
