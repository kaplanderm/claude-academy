'use client';
import { useLang } from '@/lib/LangContext';
import { MessageCircle, Bot, FolderCog, Globe, Smartphone, Terminal, Check, X } from 'lucide-react';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

interface PathDef {
  id: string;
  icon: typeof MessageCircle;
  color: string;
  name: { he: string; en: string };
  what: { he: string; en: string };
  bestFor: { he: string; en: string };
  noCode: boolean;
  files: boolean;
  advanced?: boolean;
}

const PATHS: PathDef[] = [
  { id: 'chat', icon: MessageCircle, color: '#2F6FB0',
    name: { he: 'טאב Chat', en: 'Chat tab' },
    what: { he: 'שיחה רגילה: שאלה, תשובה, העלאת קובץ בודד.', en: 'A normal chat: ask, answer, upload a single file.' },
    bestFor: { he: 'שאלות, ניסוח, סיכום מהיר', en: 'Questions, drafting, quick summaries' },
    noCode: true, files: false },
  { id: 'cowork', icon: Bot, color: '#1E874B',
    name: { he: 'טאב Cowork', en: 'Cowork tab' },
    what: { he: 'עבודה agentic בלי קוד על תיקייה שלמה. Dispatch ו-Routines.', en: 'Agentic work with no code over a whole folder. Dispatch and Routines.' },
    bestFor: { he: 'עיבוד תיקיות, משימות רקע, אוטומציה', en: 'Processing folders, background tasks, automation' },
    noCode: true, files: true },
  { id: 'code', icon: FolderCog, color: '#B5560E',
    name: { he: 'טאב Code', en: 'Code tab' },
    what: { he: 'Claude Code בממשק גרפי: sessions, עורך, diff, תצוגה מקדימה. בלי טרמינל.', en: 'Claude Code in a GUI: sessions, editor, diff, preview. No terminal.' },
    bestFor: { he: 'עבודה מורכבת עם שליטה מלאה ובקרה', en: 'Complex work with full control and review' },
    noCode: true, files: true },
  { id: 'web', icon: Globe, color: '#7A3C9E',
    name: { he: 'אתר (claude.ai)', en: 'Web (claude.ai)' },
    what: { he: 'בדפדפן בלי התקנה. שיחה בלבד, אין גישה לקבצים במחשב.', en: 'In a browser, no install. Chat only, no access to local files.' },
    bestFor: { he: 'שיחה מהירה מכל מחשב', en: 'A quick chat from any computer' },
    noCode: true, files: false },
  { id: 'mobile', icon: Smartphone, color: '#0E7C86',
    name: { he: 'מובייל', en: 'Mobile' },
    what: { he: 'iOS/Android. לשאלות בדרכים ולצילום תמונה לניתוח.', en: 'iOS/Android. For questions on the go and photographing for analysis.' },
    bestFor: { he: 'שאלות בדרכים, צילום נגע', en: 'Questions on the go, photographing a lesion' },
    noCode: true, files: false },
  { id: 'cli', icon: Terminal, color: '#555555',
    name: { he: 'CLI / API (מתקדם)', en: 'CLI / API (advanced)' },
    what: { he: 'שורת פקודה ל-Linux/מפתחים, ו-API לבניית אפליקציות. לא לרופא מתחיל.', en: 'Command line for Linux/developers, and an API for building apps. Not for a beginner physician.' },
    bestFor: { he: 'מפתחים, Linux, אוטומציה ברמת מערכת', en: 'Developers, Linux, system-level automation' },
    noCode: false, files: true, advanced: true },
];

export default function ToolsPage() {
  const { dir, lang } = useLang();
  const he = lang === 'he';

  return (
    <div className="min-h-screen pt-24 pb-20" dir={dir}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            {he ? 'דרכי השימוש ב-Claude' : 'Ways to Use Claude'}
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {he
              ? 'הציר המרכזי לרופא הוא Claude Desktop ושלושת הטאבים שלו. הנה כל הדרכים, ומתי כל אחת מתאימה.'
              : 'The central axis for a physician is Claude Desktop and its three tabs. Here are all the ways, and when each fits.'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {PATHS.map(p => (
            <div key={p.id} className={`glass-card p-5 border-t-4 ${p.advanced ? 'opacity-90' : ''}`} style={{ borderTopColor: p.color }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${p.color}1A` }}>
                  <Icon icon={p.icon} size={22} />
                </span>
                <h2 className="font-bold text-text-primary">{p.name[lang]}</h2>
              </div>
              <p className="text-sm text-text-secondary mb-3">{p.what[lang]}</p>
              <div className="text-xs text-text-muted mb-3">
                <span className="font-semibold">{he ? 'מתאים ל: ' : 'Best for: '}</span>{p.bestFor[lang]}
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${p.noCode ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                  <Icon icon={p.noCode ? Check : X} size={12} /> {he ? 'בלי קוד' : 'No code'}
                </span>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${p.files ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                  <Icon icon={p.files ? Check : X} size={12} /> {he ? 'גישה לקבצים' : 'File access'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-6 text-center">
          <p className="text-text-secondary mb-4">
            {he
              ? 'לא בטוח איפה להתחיל? המסלולים באקדמיה לוקחים אותך צעד אחר צעד.'
              : 'Not sure where to start? The academy tracks take you step by step.'}
          </p>
          <Link href="/academy" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold">
            {he ? 'לאקדמיה' : 'To the academy'}
          </Link>
        </div>
      </div>
    </div>
  );
}
