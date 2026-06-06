'use client';
import { useState, useRef } from 'react';
import { useLang } from '@/lib/LangContext';
import { MessageCircle, Bot, FolderCog, Check } from 'lucide-react';
import Icon from '@/components/ui/Icon';

type TabId = 'chat' | 'cowork' | 'code';

interface TabDef {
  id: TabId;
  icon: typeof MessageCircle;
  color: string;
  title: { he: string; en: string };
  tagline: { he: string; en: string };
  points: { he: string; en: string }[];
}

const TABS: TabDef[] = [
  {
    id: 'chat',
    icon: MessageCircle,
    color: '#2F6FB0',
    title: { he: 'Chat', en: 'Chat' },
    tagline: { he: 'שיחה רגילה - שואלים, מקבלים תשובה', en: 'A normal conversation - ask, get an answer' },
    points: [
      { he: 'שאלות קליניות, ניסוח, תרגום, סיכום טקסט שאתה מדביק', en: 'Clinical questions, drafting, translation, summarizing text you paste' },
      { he: 'העלאת קובץ או תמונה בודדים לניתוח', en: 'Upload a single file or image for analysis' },
      { he: 'Artifacts ו-Projects לארגון העבודה', en: 'Artifacts and Projects to organize your work' },
      { he: 'אתה מעתיק ומדביק את התוצאה בעצמך', en: 'You copy and paste the result yourself' },
    ],
  },
  {
    id: 'cowork',
    icon: Bot,
    color: '#1E874B',
    title: { he: 'Cowork', en: 'Cowork' },
    tagline: { he: 'עבודה agentic בלי קוד ובלי טרמינל', en: 'Agentic work, no code and no terminal' },
    points: [
      { he: 'מסמנים "Work in a Folder" ובוחרים תיקייה', en: 'Tick "Work in a Folder" and pick a folder' },
      { he: 'משימות ארוכות שרצות ברקע (Dispatch) בזמן שאתה ממשיך', en: 'Long tasks that run in the background (Dispatch) while you continue' },
      { he: 'פלט מוכן: טבלאות, מסמכים, סיכומים', en: 'Finished output: tables, documents, summaries' },
      { he: 'Routines - משימות שחוזרות לפי לוח זמנים', en: 'Routines - recurring tasks on a schedule' },
    ],
  },
  {
    id: 'code',
    icon: FolderCog,
    color: '#B5560E',
    title: { he: 'Code', en: 'Code' },
    tagline: { he: 'Claude Code בממשק גרפי מלא, והטרמינל אופציונלי', en: 'Claude Code in a full GUI, and the terminal is optional' },
    points: [
      { he: 'כל שיחה היא "session" עם תיקיית פרויקט משלה', en: 'Each conversation is a "session" with its own project folder' },
      { he: 'עורך קבצים מובנה ו-diff חזותי לראות מה השתנה', en: 'Built-in file editor and a visual diff to see what changed' },
      { he: 'תצוגה מקדימה של HTML ו-PDF בתוך האפליקציה', en: 'Preview HTML and PDFs inside the app' },
      { he: 'חיבור Connectors (Drive, Gmail) בלי הגדרות', en: 'Connectors (Drive, Gmail) with no configuration' },
    ],
  },
];

export default function ThreeTabsDiagram() {
  const { dir, lang } = useLang();
  const he = lang === 'he';
  const [active, setActive] = useState<TabId>('code');
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const onKeyDown = (e: React.KeyboardEvent) => {
    const idx = TABS.findIndex(t => t.id === active);
    // In RTL the visual order is mirrored, so swap the arrow meaning.
    const fwd = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
    const back = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';
    let next = idx;
    if (e.key === fwd) next = (idx + 1) % TABS.length;
    else if (e.key === back) next = (idx - 1 + TABS.length) % TABS.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = TABS.length - 1;
    else return;
    e.preventDefault();
    const nextId = TABS[next].id;
    setActive(nextId);
    tabRefs.current[nextId]?.focus();
  };

  const activeTab = TABS.find(t => t.id === active)!;

  return (
    <section id="three-tabs" className="py-20 bg-white" dir={dir}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {he ? 'הרעיון הגדול: אפליקציה אחת, שלושה טאבים' : 'The big idea: one app, three tabs'}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {he
              ? 'כל מה שתעשה עם Claude קורה באפליקציית Claude Desktop (למק ולחלונות). שלושת הטאבים מכסים מהשיחה הפשוטה ועד עבודה agentic על תיקיות שלמות.'
              : 'Everything you do with Claude happens in Claude Desktop (Mac/Windows). The three tabs cover everything from a simple chat to agentic work on whole folders.'}
          </p>
        </div>

        <div
          role="tablist"
          aria-label={he ? 'הטאבים של Claude Desktop' : 'Claude Desktop tabs'}
          className="flex flex-col sm:flex-row gap-3 mb-8"
          onKeyDown={onKeyDown}
        >
          {TABS.map(tab => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                ref={el => { tabRefs.current[tab.id] = el; }}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                className={`flex-1 flex items-center gap-3 p-4 rounded-2xl border-2 text-start transition-all ${
                  selected ? 'bg-claude-cream shadow-md' : 'bg-white hover:border-gray-300'
                }`}
                style={{ borderColor: selected ? tab.color : 'var(--border-color)' }}
              >
                <span
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${tab.color}1A` }}
                >
                  <Icon icon={tab.icon} size={22} className="" />
                </span>
                <span>
                  <span className="block font-bold text-text-primary">{tab.title[lang]}</span>
                  <span className="block text-xs text-text-secondary mt-0.5">{tab.tagline[lang]}</span>
                </span>
              </button>
            );
          })}
        </div>

        {TABS.map(tab => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={tab.id !== active}
            tabIndex={0}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${tab.color}1A` }}>
                <Icon icon={tab.icon} size={24} />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-text-primary">{tab.title[lang]}</h3>
                <p className="text-text-secondary text-sm">{tab.tagline[lang]}</p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {tab.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Icon icon={Check} size={18} className="mt-0.5 shrink-0 text-green-700" />
                  <span className="text-text-secondary leading-relaxed">{p[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* show the active panel content even though we map all (others are hidden) */}
        <span className="sr-only">{activeTab.title[lang]}</span>
      </div>
    </section>
  );
}
