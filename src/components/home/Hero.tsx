'use client';
import { useLang } from '@/lib/LangContext';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, GraduationCap, MonitorPlay } from 'lucide-react';
import Icon from '@/components/ui/Icon';

export default function Hero() {
  const { dir, lang } = useLang();
  const he = lang === 'he';
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[88vh] gradient-bg pt-24 overflow-hidden" dir={dir}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-claude-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-claude-peach/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-claude-warm border border-claude-peach/60 mb-6">
          <span className="text-sm font-medium text-claude-brown">
            {he ? 'מאת DermUnbound · לרופאי עור' : 'By DermUnbound · For dermatologists'}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
          {he ? (
            <>Claude לרופאים, <span className="gradient-text">בלי קוד ובלי טרמינל</span></>
          ) : (
            <>Claude for physicians, <span className="gradient-text">no code, no terminal</span></>
          )}
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-4 leading-relaxed">
          {he
            ? 'מדריך מעשי שמלמד אותך להשתמש ב-Claude בעבודה הקלינית דרך אפליקציית Claude Desktop. הכול בממשק גרפי פשוט, צעד אחר צעד.'
            : 'A practical guide to using Claude in clinical work through the Claude Desktop app. All in a simple graphical interface, step by step.'}
        </p>
        <p className="text-base text-text-muted max-w-2xl mx-auto mb-10">
          {he
            ? 'סיכום דוחות פתולוגיה, מכתבי הפניה, סקירות ספרות, חומרי הסבר למטופל - בעברית.'
            : 'Pathology summaries, referral letters, literature reviews, patient handouts - in plain language.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/academy"
            className="btn-primary group inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            <Icon icon={GraduationCap} size={20} />
            {he ? 'התחל ללמוד' : 'Start learning'}
            <Icon icon={Arrow} size={20} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#three-tabs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-interactive/40 text-interactive font-semibold text-lg hover:bg-claude-cream transition-colors"
          >
            <Icon icon={MonitorPlay} size={20} />
            {he ? 'איך זה עובד?' : 'How it works'}
          </a>
        </div>
      </div>
    </section>
  );
}
