'use client';
import { useLang } from '@/lib/LangContext';
import { ArrowRight, Stethoscope, BookOpen, Shield, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function MedicalHero() {
  const { t, dir, lang } = useLang();

  const researchUrl = lang === 'he'
    ? 'https://kaplanclinic.co.il/he/derm-ai'
    : 'https://kaplanclinic.co.il/en/derm-ai';

  return (
    <section className="relative min-h-[85vh] gradient-bg pt-20 overflow-hidden" dir={dir}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-claude-orange/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-claude-orange-light/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-claude-peach/20 rounded-full blur-3xl" />
        <div className="absolute top-32 right-[15%] w-4 h-4 bg-claude-orange/20 rounded-full animate-float" />
        <div className="absolute top-52 left-[10%] w-3 h-3 bg-claude-orange-light/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-[30%] w-5 h-5 bg-claude-peach/40 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* DermUnbound subtitle */}
          <div className="mb-4">
            <span className="text-sm font-medium text-claude-brown/70">{t('hero.byDermUnbound')}</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-claude-warm border border-claude-peach/50 mb-8">
            <Stethoscope size={16} className="text-claude-orange" />
            <span className="text-sm font-medium text-claude-brown">
              {lang === 'he' ? 'מדריך מעשי לרופאים' : 'Practical Guide for Physicians'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-6">
            <span className="gradient-text">Claude AI</span>
            <br />
            {lang === 'he' ? 'בפרקטיקה הרפואית' : 'in Medical Practice'}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            {lang === 'he'
              ? 'גלו כיצד Claude AI יכול לשפר את העבודה הרפואית שלכם — מאבחון וטיפול, דרך תיעוד ומחקר, ועד תקשורת עם מטופלים וניהול מרפאה. כולל דוגמאות מעשיות, פרומפטים מוכנים, והנחיות פרטיות.'
              : 'Discover how Claude AI can enhance your medical practice — from diagnosis and treatment, through documentation and research, to patient communication and practice management. Includes practical examples, ready-to-use prompts, and privacy guidelines.'}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#medical-uses"
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-claude-orange to-claude-orange-light text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] pulse-glow"
            >
              {lang === 'he' ? 'גלו את השימושים' : 'Explore Use Cases'}
              <ArrowRight size={20} className={`transition-transform group-hover:translate-x-1 ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </a>
            <Link
              href="/academy"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-claude-orange/30 text-claude-orange font-semibold text-lg hover:bg-claude-cream transition-all hover:border-claude-orange"
            >
              <BookOpen size={20} />
              {lang === 'he' ? 'Claude Academy — קורסים' : 'Claude Academy — Courses'}
            </Link>
          </div>

          {/* Research link */}
          <div className="mb-16">
            <a
              href={researchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-claude-orange transition-colors"
            >
              {t('hero.researchLink')}
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            {[
              { icon: Stethoscope, value: '7', label: lang === 'he' ? 'תחומי שימוש רפואיים' : 'Medical Use Areas' },
              { icon: BookOpen, value: '40+', label: lang === 'he' ? 'שיעורים באקדמיה' : 'Academy Lessons' },
              { icon: Shield, value: '🔒', label: lang === 'he' ? 'דגש על פרטיות' : 'Privacy Focus' },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 md:p-6 text-center">
                <stat.icon className="mx-auto mb-2 text-claude-orange" size={24} />
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-claude-orange/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-claude-orange/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
