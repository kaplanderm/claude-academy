import type { Track, TrackSlug, LessonMeta, Lesson } from './types';

// The index holds lesson METADATA only (title/description/duration). Lesson bodies
// load on demand through the load() thunks, so hub and list pages never pull lesson
// content into their bundle.

function lesson(
  track: TrackSlug,
  id: string,
  title: { he: string; en: string },
  description: { he: string; en: string },
  duration: number,
  load: () => Promise<Lesson>,
): LessonMeta {
  return { id, track, title, description, duration, load };
}

export const tracks: Track[] = [
  {
    slug: 'getting-started',
    icon: '🚀',
    color: '#1E874B',
    recommendedLevel: 'beginner',
    title: { he: 'התחלה - בלי קוד', en: 'Getting Started - No Code' },
    description: {
      he: 'מה זה Claude, דרכי השימוש, התקנת Claude Desktop, הטאב Chat, ותוכניות.',
      en: 'What Claude is, the ways to use it, installing Claude Desktop, the Chat tab, and plans.',
    },
    lessons: [
      lesson('getting-started', 'what-is-claude',
        { he: 'מה זה Claude ואיך הוא עוזר לרופא', en: 'What Claude Is and How It Helps a Physician' },
        { he: 'היכרות קצרה: מה Claude יודע לעשות, ולמה הוא שימושי בעבודה הקלינית.', en: 'A short intro: what Claude can do and why it is useful in clinical work.' },
        7, () => import('./tracks/getting-started/what-is-claude').then(m => m.default)),
      lesson('getting-started', 'usage-paths',
        { he: 'דרכי השימוש - איפה מריצים את Claude', en: 'Ways to Use Claude - Where You Run It' },
        { he: 'אתר, Desktop, מובייל - מה מתאים לרופא, והיכרות עם שלושת הטאבים.', en: 'Web, Desktop, mobile - what fits a physician, and an intro to the three tabs.' },
        8, () => import('./tracks/getting-started/usage-paths').then(m => m.default)),
      lesson('getting-started', 'install-desktop',
        { he: 'התקנת Claude Desktop צעד אחר צעד', en: 'Installing Claude Desktop Step by Step' },
        { he: 'הורדה, התקנה והתחברות במק או בחלונות. בלי שום שלב טכני.', en: 'Download, install, and sign in on Mac or Windows. With no technical step.' },
        6, () => import('./tracks/getting-started/install-desktop').then(m => m.default)),
      lesson('getting-started', 'chat-tab',
        { he: 'הטאב Chat - שיחה, קבצים, Artifacts ו-Projects', en: 'The Chat Tab - Conversation, Files, Artifacts, and Projects' },
        { he: 'לשאול, להעלות קובץ או תמונה, ולשמור סדר עם Projects.', en: 'Ask, upload a file or image, and stay organized with Projects.' },
        9, () => import('./tracks/getting-started/chat-tab').then(m => m.default)),
      lesson('getting-started', 'pricing-plans',
        { he: 'תוכניות ומחירים - מה צריך רופא', en: 'Plans and Pricing - What a Physician Needs' },
        { he: 'איזו תוכנית פותחת Desktop, Cowork ו-Code, וכמה זה עולה.', en: 'Which plan unlocks Desktop, Cowork, and Code, and what it costs.' },
        7, () => import('./tracks/getting-started/pricing-plans').then(m => m.default)),
    ],
  },
  {
    slug: 'cowork',
    icon: '🤝',
    color: '#2F6FB0',
    recommendedLevel: 'beginner',
    title: { he: 'Cowork - עבודה agentic בלי קוד', en: 'Cowork - Agentic Work With No Code' },
    description: {
      he: 'להצביע על תיקייה, לתת משימה, ולקבל פלט מוכן. Dispatch, Routines ותרחישים.',
      en: 'Point at a folder, give a task, get a finished output. Dispatch, Routines, and scenarios.',
    },
    lessons: [
      lesson('cowork', 'what-is-cowork',
        { he: 'מה זה Cowork ומתי להשתמש', en: 'What Cowork Is and When to Use It' },
        { he: 'עבודה agentic בלי קוד. ההבדל מ-Chat, ומתי זה הכלי הנכון.', en: 'Agentic work with no code. The difference from Chat, and when it is the right tool.' },
        7, () => import('./tracks/cowork/what-is-cowork').then(m => m.default)),
      lesson('cowork', 'work-in-a-folder',
        { he: '"Work in a Folder" - להצביע על תיקייה', en: '"Work in a Folder" - Pointing at a Folder' },
        { he: 'הפעולה הבסיסית: לבחור תיקייה, לתת משימה, לקבל קובץ פלט.', en: 'The basic action: pick a folder, give a task, get an output file.' },
        9, () => import('./tracks/cowork/work-in-a-folder').then(m => m.default)),
      lesson('cowork', 'dispatch-and-routines',
        { he: 'Dispatch ו-Routines - רקע ואוטומציה מתוזמנת', en: 'Dispatch and Routines - Background and Scheduled Automation' },
        { he: 'לשלוח משימה לרקע, ולהריץ משימות חוזרות לפי לוח זמנים.', en: 'Send a task to the background, and run recurring tasks on a schedule.' },
        8, () => import('./tracks/cowork/dispatch-and-routines').then(m => m.default)),
      lesson('cowork', 'derm-scenarios',
        { he: 'תרחישים רפואיים ל-Cowork', en: 'Dermatology Scenarios for Cowork' },
        { he: 'ארבעה תרחישים מעשיים מהמרפאה, בלי קוד.', en: 'Four practical clinic scenarios, with no code.' },
        9, () => import('./tracks/cowork/derm-scenarios').then(m => m.default)),
    ],
  },
  {
    slug: 'claude-code',
    icon: '🧩',
    color: '#B5560E',
    recommendedLevel: 'beginner',
    title: { he: 'Claude Code דרך הטאב Code', en: 'Claude Code via the Code Tab' },
    description: {
      he: 'הלב של האתר: Claude Code בממשק גרפי מלא, בלי טרמינל. sessions, קבצים, diff, ופרטיות.',
      en: 'The heart of the site: Claude Code in a full GUI, no terminal. Sessions, files, diff, and privacy.',
    },
    lessons: [
      lesson('claude-code', 'code-vs-chat',
        { he: 'Claude Code מול Chat - מה היכולת השונה', en: 'Claude Code vs Chat - What the Difference Really Is' },
        { he: 'ההסבר המרכזי: מה Claude Code יודע שה-Chat לא.', en: 'The central explanation: what Claude Code can do that Chat cannot.' },
        8, () => import('./tracks/claude-code/code-vs-chat').then(m => m.default)),
      lesson('claude-code', 'the-code-tab',
        { he: 'הטאב Code - sessions, תיקיית פרויקט וה-sidebar', en: 'The Code Tab - Sessions, Project Folder, and the Sidebar' },
        { he: 'סיור בממשק הגרפי: לפתוח session, לבחור תיקייה, ולעבוד במקביל.', en: 'A tour of the GUI: open a session, pick a folder, and work in parallel.' },
        9, () => import('./tracks/claude-code/the-code-tab').then(m => m.default)),
      lesson('claude-code', 'working-with-files',
        { he: 'עבודה עם קבצים - עורך, diff חזותי ותצוגה מקדימה', en: 'Working With Files - Editor, Visual Diff, and Preview' },
        { he: 'לראות מה Claude עומד לשנות, לאשר, ולראות תצוגה מקדימה.', en: 'See what Claude is about to change, approve, and preview.' },
        8, () => import('./tracks/claude-code/working-with-files').then(m => m.default)),
      lesson('claude-code', 'connectors',
        { he: 'Connectors - לחבר את Claude ל-Drive ו-Gmail', en: 'Connectors - Linking Claude to Drive and Gmail' },
        { he: 'חיבורים מוכנים בלחיצה, בלי הגדרות. והזהירות הנדרשת.', en: 'Ready-made links in one click, no setup. And the caution required.' },
        7, () => import('./tracks/claude-code/connectors').then(m => m.default)),
      lesson('claude-code', 'derm-scenarios',
        { he: 'תרחישים רפואיים מלאים בטאב Code', en: 'Full Dermatology Scenarios in the Code Tab' },
        { he: 'שלוש משימות מלאות מהמרפאה, מתחילתן ועד הפלט.', en: 'Three complete clinic tasks, start to output.' },
        10, () => import('./tracks/claude-code/derm-scenarios').then(m => m.default)),
      lesson('claude-code', 'privacy-pii-safety',
        { he: 'פרטיות והגנה על נתוני מטופלים', en: 'Privacy and Protecting Patient Data' },
        { he: 'הכללים שחובה להכיר: מה מותר, מה אסור, ואיך לעמעם.', en: 'The rules you must know: what is allowed, what is not, and how to de-identify.' },
        9, () => import('./tracks/claude-code/privacy-pii-safety').then(m => m.default)),
    ],
  },
  {
    slug: 'advanced',
    icon: '⚙️',
    color: '#7A3C9E',
    recommendedLevel: 'advanced',
    gated: true,
    title: { he: 'מתקדם - למי שרוצה טרמינל', en: 'Advanced - For Those Who Want the Terminal' },
    description: {
      he: 'אופציונלי ולא לרופא מתחיל: CLI, פקודות טרמינל, MCP, hooks, API ו-SDK.',
      en: 'Optional and not for a beginner physician: CLI, terminal commands, MCP, hooks, API, and SDK.',
    },
    lessons: [
      lesson('advanced', 'cli-install',
        { he: 'התקנת ה-CLI (שורת פקודה)', en: 'Installing the CLI (Command Line)' },
        { he: 'למתקדמים בלבד: התקנת Claude Code כ-CLI. רופא מתחיל לא צריך.', en: 'Advanced only: installing Claude Code as a CLI. A beginner does not need it.' },
        7, () => import('./tracks/advanced/cli-install').then(m => m.default)),
      lesson('advanced', 'terminal-basics',
        { he: 'פקודות ומקשי קיצור בטרמינל', en: 'Terminal Commands and Shortcuts' },
        { he: 'הפקודות, הקיצורים וה-slash commands ב-Claude Code מהטרמינל.', en: 'The commands, shortcuts, and slash commands in Claude Code from the terminal.' },
        8, () => import('./tracks/advanced/terminal-basics').then(m => m.default)),
      lesson('advanced', 'power-tools',
        { he: 'כלי עוצמה - MCP, Hooks, API ו-SDK', en: 'Power Tools - MCP, Hooks, API, and SDK' },
        { he: 'להרחיב את Claude עם MCP, hooks, ולבנות מול ה-API.', en: 'Extend Claude with MCP, hooks, and build against the API.' },
        9, () => import('./tracks/advanced/power-tools').then(m => m.default)),
    ],
  },
];

export function getTrack(slug: string): Track | undefined {
  return tracks.find(t => t.slug === slug);
}

export function getLessonMeta(trackSlug: string, lessonId: string): LessonMeta | undefined {
  return getTrack(trackSlug)?.lessons.find(l => l.id === lessonId);
}

export function getAllTrackSlugs(): TrackSlug[] {
  return tracks.map(t => t.slug);
}

// For generateStaticParams on academy/[track]/[lesson]
export function getAllLessonParams(): { track: string; lesson: string }[] {
  return tracks.flatMap(t => t.lessons.map(l => ({ track: t.slug, lesson: l.id })));
}
