'use client';
import { useLang } from '@/lib/LangContext';
import {
  ArrowRight,
  ArrowLeft,
  UserCircle,
  ExternalLink,
  MapPin,
  FlaskConical,
  Cloud,
  Server,
  Code2,
  Globe,
  BookOpen,
  Stethoscope,
  Microscope,
  FileText,
  GraduationCap,
  Activity,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const { dir, lang } = useLang();

  const ecosystemCards = [
    {
      icon: <Stethoscope size={28} className="text-claude-orange" />,
      title: { he: 'KaplanClinic.co.il', en: 'KaplanClinic.co.il' },
      subtitle: { he: 'אתר המרפאה', en: 'Clinic Website' },
      description: {
        he: 'ניתוחי מוז מיקרוגרפיים ורפואת עור',
        en: 'Mohs micrographic surgery and dermatology',
      },
      href: 'https://kaplanclinic.co.il',
    },
    {
      icon: <Microscope size={28} className="text-blue-600" />,
      title: { he: 'MohsPedia.com', en: 'MohsPedia.com' },
      subtitle: { he: 'אנציקלופדיית מוז', en: 'Mohs Encyclopedia' },
      description: {
        he: 'אנציקלופדיה קלינית אינטראקטיבית לכירורגיה מיקרוגרפית',
        en: 'Interactive clinical encyclopedia for micrographic surgery',
      },
      href: 'https://mohspedia.com',
    },
    {
      icon: <FileText size={28} className="text-green-600" />,
      title: { he: 'DermAI.co.il', en: 'DermAI.co.il' },
      subtitle: { he: 'DermTemplates', en: 'DermTemplates' },
      description: {
        he: 'מערכת תיעוד דרמטולוגי קוד פתוח',
        en: 'Open-source dermatology documentation system',
      },
      href: 'https://dermai.co.il',
    },
    {
      icon: <GraduationCap size={28} className="text-purple-600" />,
      title: { he: 'Claude Academy', en: 'Claude Academy' },
      subtitle: { he: 'האתר הזה', en: 'This Site' },
      description: {
        he: 'הכשרת AI לרופאים',
        en: 'AI training for physicians',
      },
      href: '/academy',
      internal: true,
    },
    {
      icon: <Activity size={28} className="text-red-500" />,
      title: { he: 'PathCorrelate', en: 'PathCorrelate' },
      subtitle: { he: 'עיבוד דוחות פתולוגיה', en: 'Pathology Report Processing' },
      description: {
        he: 'עיבוד אוטומטי של דוחות פתולוגיה עם מתאם תמונות',
        en: 'Automated pathology report processing with image correlation',
      },
      href: 'https://kaplanclinic.co.il',
    },
  ];

  const researchTiers = [
    {
      icon: <Cloud size={24} className="text-blue-500" />,
      title: { he: 'Enterprise Cloud AI', en: 'Enterprise Cloud AI' },
      description: {
        he: 'פלטפורמות ענן תואמות HIPAA - Google Gemini, Azure, AWS, Claude',
        en: 'HIPAA-compliant cloud platforms - Google Gemini, Azure, AWS, Claude',
      },
    },
    {
      icon: <Server size={24} className="text-green-600" />,
      title: { he: 'Sovereign AI', en: 'Sovereign AI' },
      description: {
        he: 'הרצה מקומית על חומרה צרכנית, אפס דליפת מידע',
        en: 'Local deployment on consumer hardware, zero data leakage',
      },
    },
    {
      icon: <Code2 size={24} className="text-purple-600" />,
      title: { he: 'Vibe Coding', en: 'Vibe Coding' },
      description: {
        he: 'פיתוח תוכנה בסיוע AI על ידי רופאים',
        en: 'AI-assisted software development by physicians',
      },
    },
  ];

  return (
    <>
      {/* Hero Banner */}
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
            {lang === 'he' ? 'אודות' : 'About'}
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {lang === 'he'
              ? 'הצוות, המחקר והאקוסיסטם מאחורי Claude Academy לרופאים'
              : 'The team, research, and ecosystem behind Claude Academy for Physicians'}
          </p>
        </div>
      </section>

      {/* Dr. Yehonatan Kaplan */}
      <section className="py-16 bg-white" dir={dir}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-claude-orange to-claude-orange-light flex items-center justify-center shadow-lg">
                <UserCircle size={80} className="text-white" strokeWidth={1.2} />
              </div>
            </div>
            <div className="flex-1 text-center md:text-start">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                {lang === 'he' ? 'ד"ר יהונתן קפלן' : 'Dr. Yehonatan Kaplan'}
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-text-muted text-sm mb-4">
                <MapPin size={14} />
                <span>{lang === 'he' ? 'פתח תקווה, ישראל' : 'Petach Tikva, Israel'}</span>
              </div>
              <p className="text-text-secondary leading-relaxed mb-6">
                {lang === 'he'
                  ? 'ד"ר יהונתן קפלן הוא מומחה ברפואת עור, כירורגיית עור וניתוחי מוז מיקרוגרפיים. ד"ר קפלן מאמין שרופא שמבין את הכלים הדיגיטליים שלו יכול לספק למטופליו טיפול טוב, מהיר ואישי יותר. הוא חוקר את השילוב בין בינה מלאכותית לרפואת עור, ומפתח כלים קליניים מבוססי AI לשיפור הטיפול הרפואי.'
                  : 'Dr. Yehonatan Kaplan is a specialist in dermatology, dermatologic surgery, and Mohs micrographic surgery. Dr. Kaplan believes that a clinician who understands his digital tools can provide patients better, faster, and more personalized care. He researches the integration of artificial intelligence in dermatology and develops AI-based clinical tools to improve medical care.'}
              </p>
              <a
                href="https://kaplanclinic.co.il"
                target="_blank"
                rel="dofollow"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-claude-orange text-claude-orange hover:bg-claude-orange hover:text-white transition-all font-semibold text-sm"
              >
                KaplanClinic.co.il
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DermUnbound Research Project */}
      <section className="py-16 bg-gradient-to-b from-white to-claude-cream/20" dir={dir}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-claude-warm border border-claude-peach/50 mb-6">
              <FlaskConical size={16} className="text-claude-orange" />
              <span className="text-sm font-medium text-claude-brown">
                {lang === 'he' ? 'פרויקט מחקר' : 'Research Project'}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {lang === 'he' ? 'פרויקט מחקר DermUnbound' : 'DermUnbound Research Project'}
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
              {lang === 'he'
                ? 'DermUnbound מייצג פרדיגמה חדשה: הרופא-מתכנת. מחקר החוקר כיצד כלי AI יכולים להעצים רופאי עור עצמאיים לבנות, לפרוס ולתחזק מערכות AI קליניות באופן אוטונומי.'
                : 'DermUnbound represents a new paradigm: the clinician-coder. Research exploring how AI tools can empower independent dermatologists to build, deploy, and maintain clinical AI systems autonomously.'}
            </p>
          </div>

          {/* Research Tiers */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {researchTiers.map((tier, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-claude-cream flex items-center justify-center mx-auto mb-4">
                  {tier.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{tier.title[lang]}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{tier.description[lang]}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`https://kaplanclinic.co.il/${lang === 'he' ? 'he' : 'en'}/derm-ai`}
              target="_blank"
              rel="dofollow"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-claude-orange text-claude-orange hover:bg-claude-orange hover:text-white transition-all font-semibold"
            >
              {lang === 'he' ? 'קראו עוד על המחקר' : 'Read More About the Research'}
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-16 bg-white" dir={dir}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {lang === 'he' ? 'האקוסיסטם שלנו' : 'Our Ecosystem'}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {lang === 'he'
                ? 'כלים קליניים מבוססי AI שנבנו על ידי רופאים, עבור רופאים'
                : 'AI-based clinical tools built by physicians, for physicians'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemCards.map((card, i) => {
              const content = (
                <div className="glass-card p-6 group cursor-pointer transition-all border border-transparent hover:border-claude-orange/30 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    {card.icon}
                    <ExternalLink
                      size={16}
                      className="text-text-muted group-hover:text-claude-orange transition-colors"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-claude-orange transition-colors mb-1">
                    {card.title[lang]}
                  </h3>
                  <p className="text-sm font-medium text-claude-orange mb-2">{card.subtitle[lang]}</p>
                  <p className="text-sm text-text-secondary flex-1">{card.description[lang]}</p>
                </div>
              );

              if (card.internal) {
                return (
                  <Link key={i} href={card.href!} className="block">
                    {content}
                  </Link>
                );
              }

              return (
                <a key={i} href={card.href} target="_blank" rel="dofollow" className="block">
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy & Ethics */}
      <section className="py-16 bg-gradient-to-b from-white to-claude-cream/20" dir={dir}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-card p-8 md:p-12">
            <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {lang === 'he' ? 'אתיקה ופרטיות' : 'Ethics & Privacy'}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              {lang === 'he'
                ? 'אנו מחויבים לאתיקה רפואית ולפרטיות המטופל. כל הכלים והפרוטוקולים שלנו מתוכננים עם פרטיות כברירת מחדל, בהתאם לחוק הגנת הפרטיות הישראלי ולעקרונות HIPAA. מידע רפואי מזהה לעולם אינו משותף עם מערכות AI ללא אנונימיזציה מלאה.'
                : 'We are committed to medical ethics and patient privacy. All our tools and protocols are designed with privacy by default, in compliance with Israeli privacy law and HIPAA principles. Identifiable medical information is never shared with AI systems without full anonymization.'}
            </p>
            <a
              href={`https://kaplanclinic.co.il/${lang === 'he' ? 'he' : 'en'}/derm-ai`}
              target="_blank"
              rel="dofollow"
              className="inline-flex items-center gap-2 text-claude-orange hover:underline font-medium"
            >
              {lang === 'he' ? 'למדו עוד על המדיניות שלנו' : 'Learn more about our policy'}
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
