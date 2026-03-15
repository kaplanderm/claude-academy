'use client';
import { useLang } from '@/lib/LangContext';
import {
  ArrowRight,
  ArrowLeft,
  UserCircle,
  ExternalLink,
  FlaskConical,
  Cloud,
  Server,
  Code2,
  Microscope,
  FileText,
  GraduationCap,
  Activity,
  ShieldCheck,
  Compass,
  LayoutDashboard,
  BookOpen,
  Mail,
  Globe,
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const { dir, lang } = useLang();

  const researchProjects = [
    {
      icon: <Microscope size={24} className="text-blue-600" />,
      name: 'MohsPedia',
      description: {
        he: 'אנציקלופדיה קלינית אינטראקטיבית לניתוחי מוז. טכניקות כירורגיות, מחשבון דפיציט, הערכת סיכונים ותכנון שחזור.',
        en: 'Interactive clinical encyclopedia for Mohs surgery. Surgical techniques, defect calculator, risk assessment, and reconstruction planning.',
      },
      href: 'https://mohspedia.com',
      status: 'live' as const,
    },
    {
      icon: <FileText size={24} className="text-green-600" />,
      name: 'DermTemplates',
      description: {
        he: 'מערכת תיעוד דרמטולוגי קוד פתוח. תבניות מרפאה, תיעוד פרוצדורות ותקשורת עם מטופלים. עיבוד מקומי בלבד.',
        en: 'Open-source dermatology documentation system. Clinical templates, procedure documentation, and patient communication. Client-side processing only.',
      },
      href: 'https://www.dermai.co.il',
      status: 'live' as const,
    },
    {
      icon: <Compass size={24} className="text-teal-600" />,
      name: 'OptiMohs',
      description: {
        he: 'אשף תמיכה בהחלטות קליניות לניתוחי מוז. ניתוח מקרה, הערכת סיכונים ותכנון שחזור.',
        en: 'Clinical decision support wizard for Mohs procedures. Case analysis, risk assessment, and reconstruction planning.',
      },
      href: 'https://mohspedia.com/wizard/',
      status: 'live' as const,
    },
    {
      icon: <GraduationCap size={24} className="text-claude-orange" />,
      name: 'Claude Academy',
      description: {
        he: 'תוכנית הכשרה מקיפה לרופאים לשימוש ב-Claude AI בפרקטיקה הרפואית. אבחון, תיעוד, מחקר ועוד.',
        en: 'Comprehensive training program for physicians using Claude AI in medical practice. Diagnosis, documentation, research, and more.',
      },
      href: '/',
      status: 'live' as const,
      internal: true,
    },
    {
      icon: <Activity size={24} className="text-red-500" />,
      name: 'PathCorrelate',
      description: {
        he: 'עיבוד אוטומטי של דוחות פתולוגיה עם מתאם תמונה להיסטופתולוגיה ותקשורת ישירה עם המטופל.',
        en: 'Automated pathology report processing with image-to-histopathological correlation and direct patient communication.',
      },
      href: 'https://pathcorrelate.dermunbound.com',
      status: 'live' as const,
    },
    {
      icon: <LayoutDashboard size={24} className="text-indigo-600" />,
      name: 'MohsBoard',
      description: {
        he: 'לוח ניהול יום ניתוחי בזמן אמת. מעקב פרוצדורות מהגעה ועד שחרור, ניהול נגעים מרובים ומעקב דגימות.',
        en: 'Real-time surgical day management dashboard. Procedure tracking from arrival through discharge, multiple lesion management, and specimen tracking.',
      },
      href: 'https://www.kaplanclinic.co.il/he/derm-ai',
      status: 'development' as const,
    },
  ];

  const researchTiers = [
    {
      icon: <Cloud size={24} className="text-blue-500" />,
      title: { he: 'Enterprise Cloud AI', en: 'Enterprise Cloud AI' },
      description: {
        he: 'סקירה מעשית של פלטפורמות AI בענן תואמות HIPAA לרופאי עור עצמאיים',
        en: 'Practical review of HIPAA-compliant cloud AI platforms for independent dermatologists',
      },
    },
    {
      icon: <Server size={24} className="text-green-600" />,
      title: { he: 'Sovereign AI', en: 'Sovereign AI' },
      description: {
        he: 'הפעלה מקומית של מודלי שפה בקוד פתוח על חומרה צרכנית, כולל כוונון עדין לדרמוסקופיה',
        en: 'Local deployment of open-source language models on consumer hardware, including fine-tuning for dermoscopy',
      },
    },
    {
      icon: <Code2 size={24} className="text-purple-600" />,
      title: { he: 'Vibe Coding', en: 'Vibe Coding' },
      description: {
        he: 'פיתוח תוכנה בסיוע AI על ידי רופאים, נסקר דרך מימוש DermTemplates',
        en: 'AI-assisted software development by physicians, reviewed through DermTemplates implementation',
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
              ? 'ד"ר יהונתן קפלן ופרויקט המחקר DermUnbound'
              : 'Dr. Yehonatan Kaplan and the DermUnbound Research Project'}
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
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
                {lang === 'he' ? 'ד"ר יהונתן קפלן' : 'Dr. Yehonatan Kaplan'}
              </h2>
              <p className="text-claude-orange font-medium mb-4">
                {lang === 'he'
                  ? 'מומחה ברפואת עור, בכירורגיה דרמטולוגית וניתוחי מוז (Mohs)'
                  : 'Dermatologist, Dermatologic Surgeon & Mohs Surgeon'}
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                {lang === 'he'
                  ? 'ד"ר יהונתן קפלן הוא בוגר הפקולטה לרפואה באוניברסיטת תל אביב, התמחה ברפואת עור במרכז הרפואי איכילוב והשלים התמחות-על בניתוחי מוז ובדרמטולוגיה קוסמטית בארצות הברית. חבר ב-American College of Mohs Surgery עם למעלה מ-1,000 ניתוחי מוז כמנתח ראשי.'
                  : 'Dr. Yehonatan Kaplan graduated from Tel Aviv University Faculty of Medicine, completed his dermatology residency at Ichilov Medical Center, and trained in Mohs surgery and cosmetic dermatology in the United States. Fellow of the American College of Mohs Surgery with over 1,000 Mohs procedures as lead surgeon.'}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                {lang === 'he'
                  ? 'כשרופאים בונים את הכלים שלהם, הם לא מתאימים טכנולוגיה לרפואה אלא מעצבים רפואה טובה יותר מלכתחילה. מתוך אמונה זו נולד פרויקט המחקר DermUnbound, שבו ד"ר קפלן חוקר ומפתח כלים קליניים מבוססי AI שנבנים מתוך ההבנה העמוקה של מי שעומד מול המטופל.'
                  : 'When physicians build their own tools, they don\'t adapt technology to medicine - they shape better medicine from the ground up. This conviction led to the DermUnbound research project, where Dr. Kaplan develops AI-powered clinical tools born from the deep understanding of someone who stands in front of the patient every day.'}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://kaplanclinic.co.il"
                  target="_blank"
                  rel="dofollow"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-claude-orange text-claude-orange hover:bg-claude-orange hover:text-white transition-all text-sm font-semibold"
                >
                  <Globe size={14} />
                  KaplanClinic.co.il
                  <ExternalLink size={12} />
                </a>
                <a
                  href="mailto:dr@kaplanderm.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gray-200 text-text-secondary hover:text-claude-orange hover:border-claude-orange/30 transition-all text-sm font-semibold"
                >
                  <Mail size={14} />
                  dr@kaplanderm.com
                </a>
              </div>
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
                {lang === 'he' ? 'פרויקט המחקר' : 'Research Project'}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {lang === 'he' ? 'פרויקט המחקר DermUnbound' : 'DermUnbound Research Project'}
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
              {lang === 'he'
                ? 'DermUnbound מייצג פרדיגמה חדשה: הרופא-מתכנת. פרויקט מחקר החוקר כיצד כלי AI יכולים להעצים רופאי עור עצמאיים לבנות, לפרוס ולתחזק מערכות AI קליניות באופן אוטונומי.'
                : 'DermUnbound represents a new paradigm: the clinician-coder. A research project exploring how AI tools can empower independent dermatologists to build, deploy, and maintain clinical AI systems autonomously.'}
            </p>
          </div>

          {/* Research Papers */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-text-primary mb-4 text-center">
              {lang === 'he' ? 'מאמרי מחקר (בהכנה)' : 'Research Papers (In Preparation)'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {researchTiers.map((tier, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-claude-cream flex items-center justify-center mx-auto mb-4">
                    {tier.icon}
                  </div>
                  <h4 className="text-base font-bold text-text-primary mb-2">{tier.title[lang]}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{tier.description[lang]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={`https://kaplanclinic.co.il/${lang === 'he' ? 'he' : 'en'}/derm-ai`}
              target="_blank"
              rel="dofollow"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-claude-orange text-claude-orange hover:bg-claude-orange hover:text-white transition-all font-semibold"
            >
              {lang === 'he' ? 'קראו עוד על המחקר שלנו' : 'Read More About Our Research'}
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="py-16 bg-white" dir={dir}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {lang === 'he' ? 'כלים קליניים פעילים' : 'Active Clinical Tools'}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {lang === 'he'
                ? 'כלים שנבנו על ידי רופא, עבור רופאים'
                : 'Tools built by a physician, for physicians'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchProjects.map((project, i) => {
              const statusLabel = project.status === 'live'
                ? { he: 'פעיל', en: 'Live' }
                : { he: 'בפיתוח', en: 'In Development' };
              const statusColor = project.status === 'live'
                ? 'bg-green-50 text-green-700 border-green-200'
                : 'bg-amber-50 text-amber-700 border-amber-200';

              const content = (
                <div className="glass-card p-6 group cursor-pointer transition-all border border-transparent hover:border-claude-orange/30 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-claude-cream flex items-center justify-center">
                      {project.icon}
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColor}`}>
                      {statusLabel[lang]}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-claude-orange transition-colors mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-text-secondary flex-1 leading-relaxed">
                    {project.description[lang]}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-xs text-text-muted group-hover:text-claude-orange transition-colors">
                    {project.internal
                      ? <BookOpen size={12} />
                      : <ExternalLink size={12} />
                    }
                    <span>{project.internal ? (lang === 'he' ? 'האתר הזה' : 'This site') : project.href.replace('https://', '').replace('http://', '')}</span>
                  </div>
                </div>
              );

              if (project.internal) {
                return (
                  <Link key={i} href={project.href} className="block">
                    {content}
                  </Link>
                );
              }

              return (
                <a key={i} href={project.href} target="_blank" rel="dofollow" className="block">
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
                ? 'כל הכלים והפרוטוקולים שלנו מתוכננים עם פרטיות כברירת מחדל, בהתאם לחוק הגנת הפרטיות הישראלי ולעקרונות HIPAA. מידע רפואי מזהה לעולם אינו משותף עם מערכות AI ללא אנונימיזציה מלאה.'
                : 'All our tools and protocols are designed with privacy by default, in compliance with Israeli privacy law and HIPAA principles. Identifiable medical information is never shared with AI systems without full anonymization.'}
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
