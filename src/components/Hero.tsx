'use client';
import { useLang } from '@/lib/LangContext';
import { ArrowRight, Play, BookOpen, Clock, Layers, Calendar } from 'lucide-react';

export default function Hero() {
  const { t, dir, lang } = useLang();

  return (
    <section className="relative min-h-screen gradient-bg pt-20 overflow-hidden" dir={dir}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-claude-orange/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-claude-orange-light/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-claude-peach/20 rounded-full blur-3xl" />
        {/* Floating shapes */}
        <div className="absolute top-32 right-[15%] w-4 h-4 bg-claude-orange/20 rounded-full animate-float" />
        <div className="absolute top-52 left-[10%] w-3 h-3 bg-claude-orange-light/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-[30%] w-5 h-5 bg-claude-peach/40 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-claude-warm border border-claude-peach/50 mb-8">
            <span className="text-sm font-medium text-claude-brown">{t('hero.badge')}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-6">
            {t('hero.title1')}
            <span className="gradient-text">{t('hero.titleHighlight')}</span>
            <br />
            {t('hero.title2')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#courses"
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-claude-orange to-claude-orange-light text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] pulse-glow"
            >
              {t('hero.startLearning')}
              <ArrowRight size={20} className={`transition-transform group-hover:translate-x-1 ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </a>
            <a
              href="#tools"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-claude-orange/30 text-claude-orange font-semibold text-lg hover:bg-claude-cream transition-all hover:border-claude-orange"
            >
              <Play size={20} />
              {t('hero.exploreCourses')}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
            {[
              { icon: BookOpen, value: '40+', label: t('hero.stat1Label') },
              { icon: Clock, value: '12+', label: t('hero.stat2Label') },
              { icon: Layers, value: '10+', label: t('hero.stat3Label') },
              { icon: Calendar, value: '2025', label: t('hero.stat4Label') },
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
