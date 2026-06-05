'use client';
import { useLang } from '@/lib/LangContext';
import { medicalUseCases } from '@/data/medicalUseCases';
import { ArrowRight, ArrowLeft, BookOpen, ExternalLink, Shield, Brain, Users } from 'lucide-react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Hero from '@/components/home/Hero';
import ThreeTabsDiagram from '@/components/home/ThreeTabsDiagram';
import ChatVsCode from '@/components/home/ChatVsCode';

export default function Home() {
  const { dir, lang } = useLang();
  const he = lang === 'he';
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <>
      <Hero />
      <ThreeTabsDiagram />
      <ChatVsCode />

      {/* Medical use cases */}
      <section id="medical-uses" className="py-20 bg-white" dir={dir}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {he ? 'מה אפשר לעשות עם זה במרפאה' : 'What you can do with it in the clinic'}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {he
                ? 'לחץ על כל תחום למדריך מפורט עם דוגמאות מעשיות ופרומפטים מוכנים.'
                : 'Click each area for a detailed guide with practical examples and ready-to-use prompts.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {medicalUseCases.map(useCase => (
              <Link
                key={useCase.id}
                href={`/medical/${useCase.id}`}
                className="glass-card p-6 group transition-all border border-transparent hover:border-interactive/30 hover:shadow-lg block"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl" aria-hidden="true">{useCase.icon}</span>
                  <span className="text-interactive opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon icon={Arrow} size={16} />
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-text-primary group-hover:text-interactive transition-colors">
                  {useCase.title[lang]}
                </h3>
                <p className="text-sm text-text-secondary">{useCase.description[lang]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DermUnbound method pillars */}
      <section className="py-16 bg-gradient-to-b from-white to-claude-cream/20" dir={dir}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
              {he ? 'שיטת DermUnbound' : 'The DermUnbound Method'}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {he
                ? 'מחקר וזיקוק של שיטות עבודה בטוחות ויעילות עם AI בפרקטיקה הרפואית'
                : 'Researching and refining safe, effective AI workflows for medical practice'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              { icon: Shield, bg: 'bg-green-50', fg: 'text-green-700',
                t: { he: 'פרטיות קודמת לכל', en: 'Privacy First' },
                d: { he: 'פרוטוקולים לאנונימיזציה ולשימוש בטוח ב-AI עם מידע רפואי, בהתאם לחוק הגנת הפרטיות הישראלי', en: 'Protocols for anonymization and safe AI use with medical data, compliant with Israeli privacy law' } },
              { icon: Brain, bg: 'bg-blue-50', fg: 'text-blue-700',
                t: { he: 'מבוסס מחקר', en: 'Research-Based' },
                d: { he: 'כל השיטות מבוססות על ניסיון קליני מעשי ומחקר שוטף בתחום ה-AI הרפואי', en: 'All methods are based on practical clinical experience and ongoing medical AI research' } },
              { icon: Users, bg: 'bg-purple-50', fg: 'text-purple-700',
                t: { he: 'מותאם לרופאים', en: 'Built for Physicians' },
                d: { he: 'תוכן ללא צורך בידע טכני מוקדם. כל מושג טכני מוסבר בשפה פשוטה', en: 'No prior tech knowledge needed. Every technical concept is explained in plain language' } },
            ].map((p, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div className={`w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center mx-auto mb-4`}>
                  <Icon icon={p.icon} size={24} className={p.fg} />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{p.t[lang]}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{p.d[lang]}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`https://kaplanclinic.co.il/${he ? 'he' : 'en'}/derm-ai`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-interactive text-interactive hover:bg-interactive hover:text-white transition-colors font-semibold"
            >
              {he ? 'קרא עוד על מחקר DermUnbound' : 'Read more about DermUnbound research'}
              <Icon icon={ExternalLink} size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA to academy */}
      <section className="py-16 bg-claude-cream/30" dir={dir}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-card p-8 md:p-12">
            <Icon icon={BookOpen} size={40} className="mx-auto mb-4 text-interactive" />
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {he ? 'מוכן להתחיל ללמוד צעד אחר צעד?' : 'Ready to start learning step by step?'}
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              {he
                ? 'באקדמיה תמצא מסלולים מסודרים: התחלה בלי קוד, Cowork, Claude Code דרך הטאב Code, ומסלול מתקדם למי שרוצה טרמינל.'
                : 'The academy has structured tracks: a no-code start, Cowork, Claude Code through the Code tab, and an advanced track for those who want the terminal.'}
            </p>
            <Link
              href="/academy"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              {he ? 'כנס לאקדמיה' : 'Enter the academy'}
              <Icon icon={Arrow} size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
