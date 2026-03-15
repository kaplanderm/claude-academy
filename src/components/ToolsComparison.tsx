'use client';
import { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { Globe, Monitor, Terminal, Code2, Smartphone, Cloud, Star, Check, X } from 'lucide-react';

interface ToolInfo {
  id: string;
  icon: typeof Globe;
  title: { he: string; en: string };
  description: { he: string; en: string };
  rating: number;
  color: string;
  pros: { he: string[]; en: string[] };
  cons: { he: string[]; en: string[] };
  setup: { he: string[]; en: string[] };
  bestFor: { he: string; en: string };
  features: Record<string, boolean>;
}

const tools: ToolInfo[] = [
  {
    id: 'web',
    icon: Globe,
    title: { he: 'ממשק Web', en: 'Web Interface' },
    description: { he: 'claude.ai - הממשק הפשוט ביותר', en: 'claude.ai - The simplest interface' },
    rating: 4,
    color: '#4A90D9',
    pros: {
      he: ['נגיש מכל מקום', 'ממשק אינטואיטיבי', 'Artifacts ו-Projects', 'אין צורך בהתקנה'],
      en: ['Accessible from anywhere', 'Intuitive interface', 'Artifacts & Projects', 'No installation needed']
    },
    cons: {
      he: ['אין גישה לקבצים מקומיים', 'אין MCP', 'תלוי באינטרנט'],
      en: ['No local file access', 'No MCP', 'Internet dependent']
    },
    setup: {
      he: ['הירשמו ב-claude.ai', 'בחרו תוכנית (חינמי/Pro)', 'התחילו לשוחח'],
      en: ['Sign up at claude.ai', 'Choose a plan (Free/Pro)', 'Start chatting']
    },
    bestFor: { he: 'שיחות יומיומיות, כתיבה, Artifacts', en: 'Daily chats, writing, Artifacts' },
    features: { artifacts: true, projects: true, mcp: false, code_exec: false, file_access: false, vision: true }
  },
  {
    id: 'desktop',
    icon: Monitor,
    title: { he: 'אפליקציית Desktop', en: 'Desktop App' },
    description: { he: 'אפליקציה native ל-Windows ו-Mac', en: 'Native app for Windows and Mac' },
    rating: 4.5,
    color: '#27AE60',
    pros: {
      he: ['MCP support', 'Computer Use', 'קיצורי מקלדת', 'Always available'],
      en: ['MCP support', 'Computer Use', 'Keyboard shortcuts', 'Always available']
    },
    cons: {
      he: ['לא זמין ל-Linux', 'צורך משאבים', 'MCP דורש הגדרה'],
      en: ['Not available for Linux', 'Resource intensive', 'MCP requires setup']
    },
    setup: {
      he: ['הורידו מ-claude.ai/download', 'התקינו', 'הגדירו MCP (אופציונלי)'],
      en: ['Download from claude.ai/download', 'Install', 'Configure MCP (optional)']
    },
    bestFor: { he: 'עבודה עם MCP, Computer Use', en: 'Working with MCP, Computer Use' },
    features: { artifacts: false, projects: true, mcp: true, code_exec: false, file_access: true, vision: true }
  },
  {
    id: 'claude-code',
    icon: Terminal,
    title: { he: 'Claude Code (CLI)', en: 'Claude Code (CLI)' },
    description: { he: 'הכלי החזק ביותר - ישירות מהטרמינל', en: 'The most powerful tool - directly from terminal' },
    rating: 5,
    color: '#E07A2F',
    pros: {
      he: ['גישה מלאה לפרויקט', 'MCP + Skills + Hooks', 'אוטומציה מלאה', 'Git integration', 'זיכרון persistent'],
      en: ['Full project access', 'MCP + Skills + Hooks', 'Full automation', 'Git integration', 'Persistent memory']
    },
    cons: {
      he: ['דורש ידע בטרמינל', 'API credits / Pro subscription', 'עקומת למידה'],
      en: ['Requires terminal knowledge', 'API credits / Pro subscription', 'Learning curve']
    },
    setup: {
      he: ['npm install -g @anthropic-ai/claude-code', 'cd my-project', 'claude'],
      en: ['npm install -g @anthropic-ai/claude-code', 'cd my-project', 'claude']
    },
    bestFor: { he: 'פיתוח תוכנה, אוטומציה, DevOps', en: 'Software development, automation, DevOps' },
    features: { artifacts: false, projects: false, mcp: true, code_exec: true, file_access: true, vision: true }
  },
  {
    id: 'ide',
    icon: Code2,
    title: { he: 'IDE Extensions', en: 'IDE Extensions' },
    description: { he: 'VS Code, JetBrains, ועוד', en: 'VS Code, JetBrains, and more' },
    rating: 4,
    color: '#8E44AD',
    pros: {
      he: ['עבודה בלי לעזוב IDE', 'הקשר אוטומטי', 'Inline editing', 'שילוב Git'],
      en: ['Work without leaving IDE', 'Auto context', 'Inline editing', 'Git integration']
    },
    cons: {
      he: ['חלקם בבטא', 'פחות מ-Claude Code CLI', 'תלוי בעדכוני IDE'],
      en: ['Some in beta', 'Less than Claude Code CLI', 'Depends on IDE updates']
    },
    setup: {
      he: ['Extensions → חפשו Claude', 'התקינו', 'התחברו עם API key'],
      en: ['Extensions → Search Claude', 'Install', 'Connect with API key']
    },
    bestFor: { he: 'מפתחים שעובדים ב-IDE', en: 'Developers working in IDE' },
    features: { artifacts: false, projects: false, mcp: false, code_exec: true, file_access: true, vision: false }
  },
  {
    id: 'api',
    icon: Cloud,
    title: { he: 'API', en: 'API' },
    description: { he: 'בנו אפליקציות משלכם', en: 'Build your own applications' },
    rating: 5,
    color: '#E74C3C',
    pros: {
      he: ['שליטה מלאה', 'Streaming', 'Tool Use', 'Batch Processing', 'Agent SDK'],
      en: ['Full control', 'Streaming', 'Tool Use', 'Batch Processing', 'Agent SDK']
    },
    cons: {
      he: ['דורש ידע תכנותי', 'תשלום per-use', 'Rate limits'],
      en: ['Requires coding skills', 'Pay per use', 'Rate limits']
    },
    setup: {
      he: ['הירשמו ב-console.anthropic.com', 'צרו API key', 'pip install anthropic'],
      en: ['Sign up at console.anthropic.com', 'Create API key', 'pip install anthropic']
    },
    bestFor: { he: 'בניית מוצרים ואפליקציות', en: 'Building products and applications' },
    features: { artifacts: false, projects: false, mcp: false, code_exec: false, file_access: false, vision: true }
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: { he: 'מובייל', en: 'Mobile' },
    description: { he: 'iOS ו-Android', en: 'iOS and Android' },
    rating: 3.5,
    color: '#1ABC9C',
    pros: {
      he: ['זמין תמיד', 'מצלמה לניתוח תמונות', 'סנכרון חוצה מכשירים'],
      en: ['Always available', 'Camera for image analysis', 'Cross-device sync']
    },
    cons: {
      he: ['מסך קטן', 'אין Artifacts', 'אין MCP'],
      en: ['Small screen', 'No Artifacts', 'No MCP']
    },
    setup: {
      he: ['הורידו מ-App Store / Google Play', 'התחברו', 'שוחחו'],
      en: ['Download from App Store / Google Play', 'Sign in', 'Chat']
    },
    bestFor: { he: 'שאלות בדרך, ניתוח תמונות', en: 'Questions on the go, image analysis' },
    features: { artifacts: false, projects: false, mcp: false, code_exec: false, file_access: false, vision: true }
  },
];

const featureLabels: Record<string, { he: string; en: string }> = {
  artifacts: { he: 'Artifacts', en: 'Artifacts' },
  projects: { he: 'Projects', en: 'Projects' },
  mcp: { he: 'MCP', en: 'MCP' },
  code_exec: { he: 'הרצת קוד', en: 'Code Exec' },
  file_access: { he: 'גישה לקבצים', en: 'File Access' },
  vision: { he: 'ראייה', en: 'Vision' },
};

export default function ToolsComparison() {
  const { t, dir, lang } = useLang();
  const [selectedTool, setSelectedTool] = useState<string>('claude-code');

  const activeTool = tools.find(t => t.id === selectedTool)!;

  return (
    <section id="tools" className="py-20 bg-white" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t('tools.title')}</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('tools.subtitle')}</p>
        </div>

        {/* Tool selector cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`p-4 rounded-xl border-2 transition-all text-center ${
                selectedTool === tool.id
                  ? 'border-claude-orange bg-claude-cream shadow-md scale-[1.02]'
                  : 'border-border-color hover:border-gray-300 bg-white'
              }`}
            >
              <tool.icon
                size={28}
                className="mx-auto mb-2"
                style={{ color: selectedTool === tool.id ? tool.color : '#8a8aa0' }}
              />
              <div className="text-sm font-semibold text-text-primary">{tool.title[lang]}</div>
              <div className="flex items-center justify-center gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < Math.floor(tool.rating) ? tool.color : 'none'}
                    stroke={tool.color}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Selected tool details */}
        <div className="glass-card p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${activeTool.color}15` }}
            >
              <activeTool.icon size={28} style={{ color: activeTool.color }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-primary">{activeTool.title[lang]}</h3>
              <p className="text-text-secondary">{activeTool.description[lang]}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="p-4 rounded-xl bg-green-50 border border-green-100">
              <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <Check size={18} /> {t('tools.pros')}
              </h4>
              <ul className="space-y-2">
                {activeTool.pros[lang].map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                    <span className="text-green-500 mt-1">✓</span> {pro}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="p-4 rounded-xl bg-red-50 border border-red-100">
              <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <X size={18} /> {t('tools.cons')}
              </h4>
              <ul className="space-y-2">
                {activeTool.cons[lang].map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                    <span className="text-red-500 mt-1">✗</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Setup */}
          <div className="mt-6 p-4 rounded-xl bg-claude-cream border border-claude-peach/30">
            <h4 className="font-bold text-claude-brown mb-3">{t('tools.setup')}</h4>
            <ol className="space-y-2">
              {activeTool.setup[lang].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-claude-brown">
                  <span className="w-6 h-6 rounded-full bg-claude-orange text-white flex items-center justify-center shrink-0 text-xs font-bold">{i + 1}</span>
                  <code className="text-sm">{step}</code>
                </li>
              ))}
            </ol>
          </div>

          {/* Best for */}
          <div className="mt-4 p-3 rounded-xl bg-blue-50 border border-blue-100">
            <span className="font-semibold text-blue-700">{t('tools.bestFor')}: </span>
            <span className="text-blue-800">{activeTool.bestFor[lang]}</span>
          </div>
        </div>

        {/* Feature comparison table */}
        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-claude-warm">
                <th className="p-3 text-sm font-bold text-text-primary border-b border-claude-peach text-start">{lang === 'he' ? 'תכונה' : 'Feature'}</th>
                {tools.map(tool => (
                  <th key={tool.id} className="p-3 text-sm font-bold text-text-primary border-b border-claude-peach text-center">
                    {tool.title[lang]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(featureLabels).map(([key, label], i) => (
                <tr key={key} className={i % 2 === 0 ? 'bg-white' : 'bg-claude-cream/30'}>
                  <td className="p-3 text-sm font-medium text-text-primary border-b border-border-color/30">
                    {label[lang]}
                  </td>
                  {tools.map(tool => (
                    <td key={tool.id} className="p-3 text-center border-b border-border-color/30">
                      {tool.features[key] ? (
                        <Check size={18} className="mx-auto text-green-500" />
                      ) : (
                        <X size={18} className="mx-auto text-red-300" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
