'use client';
import { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { Star, Filter, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface Plugin {
  name: string;
  description: { he: string; en: string };
  category: string;
  rating: number;
  difficulty: 'easy' | 'medium' | 'hard';
  icon: string;
  setup: string;
}

const plugins: Plugin[] = [
  { name: 'GitHub', description: { he: 'ניהול repositories, PRs, issues', en: 'Manage repositories, PRs, issues' }, category: 'dev', rating: 5, difficulty: 'easy', icon: '🐙', setup: '@modelcontextprotocol/server-github' },
  { name: 'Filesystem', description: { he: 'גישה מורחבת למערכת הקבצים', en: 'Extended filesystem access' }, category: 'dev', rating: 5, difficulty: 'easy', icon: '📁', setup: '@modelcontextprotocol/server-filesystem' },
  { name: 'PostgreSQL', description: { he: 'שאילתות ישירות לבסיס נתונים (Database)', en: 'Direct database queries' }, category: 'data', rating: 4, difficulty: 'medium', icon: '🐘', setup: '@modelcontextprotocol/server-postgres' },
  { name: 'Puppeteer', description: { he: 'אוטומציית דפדפן (Browser Automation)', en: 'Browser automation and web scraping' }, category: 'automation', rating: 4, difficulty: 'medium', icon: '🎭', setup: '@modelcontextprotocol/server-puppeteer' },
  { name: 'Slack', description: { he: 'שליחה וקריאת הודעות Slack', en: 'Send and read Slack messages' }, category: 'communication', rating: 4, difficulty: 'easy', icon: '💬', setup: '@modelcontextprotocol/server-slack' },
  { name: 'Google Drive', description: { he: 'גישה לקבצים ב-Google Drive', en: 'Access Google Drive files' }, category: 'productivity', rating: 4, difficulty: 'medium', icon: '📄', setup: '@modelcontextprotocol/server-gdrive' },
  { name: 'Brave Search', description: { he: 'חיפוש אינטרנט מתקדם (Web Search)', en: 'Advanced web search' }, category: 'search', rating: 3, difficulty: 'easy', icon: '🔍', setup: '@modelcontextprotocol/server-brave-search' },
  { name: 'Memory', description: { he: 'זיכרון קבוע (Persistent Memory)', en: 'Persistent memory with knowledge graph' }, category: 'productivity', rating: 3, difficulty: 'easy', icon: '🧠', setup: '@modelcontextprotocol/server-memory' },
  { name: 'Airtable', description: { he: 'ניהול טבלאות ובסיסי נתונים', en: 'Manage tables and databases' }, category: 'data', rating: 4, difficulty: 'easy', icon: '📊', setup: 'airtable MCP server' },
  { name: 'Make (Integromat)', description: { he: 'אוטומציות ותהליכי עבודה (Workflows)', en: 'Automations and workflows' }, category: 'automation', rating: 4, difficulty: 'medium', icon: '⚡', setup: 'Make MCP server' },
  { name: 'Vercel', description: { he: 'העלאה וניהול אתרים (Deploy)', en: 'Deploy and manage websites' }, category: 'dev', rating: 4, difficulty: 'easy', icon: '▲', setup: 'Vercel MCP server' },
  { name: 'Sentry', description: { he: 'מעקב שגיאות (Error Tracking)', en: 'Error tracking and monitoring' }, category: 'dev', rating: 3, difficulty: 'medium', icon: '🔔', setup: '@sentry/mcp-server' },
  { name: 'Linear', description: { he: 'ניהול פרויקטים ומשימות (Project Management)', en: 'Project and issue management' }, category: 'productivity', rating: 4, difficulty: 'easy', icon: '📋', setup: 'Linear MCP server' },
  { name: 'Gmail', description: { he: 'קריאה ושליחת מיילים (Email)', en: 'Read and send emails' }, category: 'communication', rating: 4, difficulty: 'medium', icon: '📧', setup: 'Gmail MCP server' },
  { name: 'Playwright', description: { he: 'בדיקות אוטומטיות ושליטה בדפדפן (Testing)', en: 'Automated testing and browser control' }, category: 'dev', rating: 5, difficulty: 'medium', icon: '🎪', setup: '@anthropic/mcp-playwright' },
];

const connectors = [
  { name: 'GitHub', icon: '🐙', desc: { he: 'גישה מלאה ל-repositories, יצירת PRs, ניהול issues', en: 'Full access to repositories, creating PRs, managing issues' } },
  { name: 'Slack', icon: '💬', desc: { he: 'קריאת הודעות, שליחת הודעות, ניהול ערוצים', en: 'Read messages, send messages, manage channels' } },
  { name: 'Gmail', icon: '📧', desc: { he: 'קריאת מיילים, שליחת מיילים, ניהול תיוגים', en: 'Read emails, send emails, manage labels' } },
  { name: 'Google Drive', icon: '📁', desc: { he: 'גישה לקבצים, יצירה ועריכה של מסמכים', en: 'Access files, create and edit documents' } },
  { name: 'Airtable', icon: '📊', desc: { he: 'קריאה ועדכון של טבלאות ורשומות', en: 'Read and update tables and records' } },
  { name: 'Vercel', icon: '▲', desc: { he: 'העלאת אתרים, צפייה בלוגים, ניהול פרויקטים', en: 'Deploy sites, view logs, manage projects' } },
  { name: 'Linear', icon: '📋', desc: { he: 'ניהול משימות, יצירת issues, מעקב סטטוס', en: 'Manage tasks, create issues, track status' } },
  { name: 'Notion', icon: '📝', desc: { he: 'קריאה ועריכה של דפים ובסיסי נתונים', en: 'Read and edit pages and databases' } },
];

const categories = [
  { id: 'all', label: { he: 'הכל', en: 'All' } },
  { id: 'dev', label: { he: 'פיתוח (Development)', en: 'Development' } },
  { id: 'data', label: { he: 'נתונים (Data)', en: 'Data' } },
  { id: 'automation', label: { he: 'אוטומציה (Automation)', en: 'Automation' } },
  { id: 'communication', label: { he: 'תקשורת (Communication)', en: 'Communication' } },
  { id: 'productivity', label: { he: 'פרודוקטיביות (Productivity)', en: 'Productivity' } },
  { id: 'search', label: { he: 'חיפוש (Search)', en: 'Search' } },
];

const difficultyLabels: Record<string, { he: string; en: string }> = {
  easy: { he: 'קל (Easy)', en: 'Easy' },
  medium: { he: 'בינוני (Medium)', en: 'Medium' },
  hard: { he: 'מתקדם (Advanced)', en: 'Advanced' },
};

const difficultyColors: Record<string, string> = {
  easy: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  hard: 'bg-red-100 text-red-700',
};

export default function PluginsSection() {
  const { t, dir, lang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState<'mcp' | 'connectors' | 'skills'>('mcp');

  const filtered = selectedCategory === 'all'
    ? plugins
    : plugins.filter(p => p.category === selectedCategory);

  return (
    <section id="plugins" className="py-20 bg-claude-cream/30" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {lang === 'he' ? 'הרחבות ל-Claude' : 'Claude Extensions'}
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            {lang === 'he'
              ? 'Claude יכול להתחבר לכלים ושירותים חיצוניים כדי לעשות הרבה יותר. הנה שלושת הדרכים העיקריות להרחיב את היכולות שלו:'
              : 'Claude can connect to external tools and services to do much more. Here are the three main ways to extend its capabilities:'}
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center gap-2 mb-10">
          {[
            { id: 'mcp' as const, label: { he: '🔌 שרתי MCP (MCP Servers)', en: '🔌 MCP Servers' }, color: 'from-claude-orange to-claude-orange-light' },
            { id: 'connectors' as const, label: { he: '🔗 מחברים (Connectors)', en: '🔗 Connectors' }, color: 'from-accent-blue to-blue-400' },
            { id: 'skills' as const, label: { he: '⚡ כישורים (Skills)', en: '⚡ Skills' }, color: 'from-accent-green to-green-400' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-[1.02]`
                  : 'bg-white text-text-secondary hover:bg-gray-50 border border-border-color'
              }`}
            >
              {tab.label[lang]}
            </button>
          ))}
        </div>

        {/* ===== MCP TAB ===== */}
        {activeTab === 'mcp' && (
          <div>
            {/* MCP Explanation */}
            <div className="glass-card p-6 md:p-8 mb-8 border-r-4 border-r-claude-orange">
              <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <Info size={20} className="text-claude-orange" />
                {lang === 'he' ? 'מה זה MCP (Model Context Protocol)?' : 'What is MCP (Model Context Protocol)?'}
              </h3>
              <div className="text-text-secondary leading-relaxed space-y-3">
                <p>
                  {lang === 'he'
                    ? '🔌 דמיינו ש-Claude הוא מחשב חדש. בלי שום חיבור, הוא יכול רק לדבר איתכם. אבל מה אם תחברו אליו "כבלים" לשירותים שונים?'
                    : '🔌 Imagine Claude is a new computer. Without any connection, it can only talk to you. But what if you connected "cables" to various services?'}
                </p>
                <p>
                  {lang === 'he'
                    ? 'זה בדיוק מה ש-MCP עושה! הוא פרוטוקול (Protocol = שפה משותפת) שמאפשר ל-Claude להתחבר לכלים חיצוניים. אחרי שמחברים שרת MCP, Claude יכול לגשת ישירות לשירות הזה - לקרוא מידע, לשנות דברים, ולבצע פעולות.'
                    : 'That\'s exactly what MCP does! It\'s a protocol (a common language) that lets Claude connect to external tools. After connecting an MCP server, Claude can directly access that service - read data, make changes, and perform actions.'}
                </p>
                <p className="font-medium text-text-primary">
                  {lang === 'he'
                    ? '📍 דוגמה: חיברתם את GitHub דרך MCP → עכשיו Claude יכול ליצור Pull Request, לקרוא Issues, ולבדוק קוד - הכל בלי שתעזבו את הצ\'אט!'
                    : '📍 Example: You connected GitHub via MCP → Now Claude can create Pull Requests, read Issues, and review code - all without leaving the chat!'}
                </p>
              </div>
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-2 mb-8 flex-wrap justify-center">
              <Filter size={16} className="text-text-muted" />
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-claude-orange text-white shadow-md'
                      : 'bg-white text-text-secondary hover:bg-claude-cream border border-border-color'
                  }`}
                >
                  {cat.label[lang]}
                </button>
              ))}
            </div>

            {/* Plugin grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map(plugin => (
                <div key={plugin.name} className="glass-card p-5 flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{plugin.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-text-primary">{plugin.name}</h3>
                        <span className={`badge text-xs ${difficultyColors[plugin.difficulty]}`}>
                          {difficultyLabels[plugin.difficulty][lang]}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary mt-1">{plugin.description[lang]}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill={i < plugin.rating ? '#E07A2F' : 'none'} stroke="#E07A2F" strokeWidth={1.5} />
                    ))}
                  </div>
                  <code className="text-xs bg-gray-100 text-gray-600 p-2 rounded-lg font-mono block mt-auto">
                    {plugin.setup}
                  </code>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== CONNECTORS TAB ===== */}
        {activeTab === 'connectors' && (
          <div>
            {/* Connectors Explanation */}
            <div className="glass-card p-6 md:p-8 mb-8 border-r-4 border-r-accent-blue">
              <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <Info size={20} className="text-accent-blue" />
                {lang === 'he' ? 'מה זה מחברים (Connectors)?' : 'What are Connectors?'}
              </h3>
              <div className="text-text-secondary leading-relaxed space-y-3">
                <p>
                  {lang === 'he'
                    ? '🔗 מחברים (Connectors) הם חיבורים מוכנים מראש לשירותים פופולריים. הם כמו "תקעים" שכבר מותאמים לשקע הנכון - אתם רק צריכים לחבר אותם.'
                    : '🔗 Connectors are pre-built connections to popular services. They\'re like "plugs" already adapted to the right socket - you just need to connect them.'}
                </p>
                <p>
                  {lang === 'he'
                    ? 'ההבדל מ-MCP: בעוד שרת MCP הוא הטכנולוגיה מאחורי הקלעים, "מחבר" הוא שרת MCP מוכן ומוגדר שרק צריך להפעיל. חלק מהמחברים מגיעים מובנים ב-Claude Desktop או ב-Claude Code.'
                    : 'The difference from MCP: While an MCP server is the technology behind the scenes, a "connector" is a ready-made, pre-configured MCP server that just needs to be activated. Some connectors come built-in with Claude Desktop or Claude Code.'}
                </p>
                <p className="font-medium text-text-primary">
                  {lang === 'he'
                    ? '💡 טיפ: בממשק Claude Desktop, ניתן להוסיף מחברים דרך קובץ ההגדרות (Settings) בלחיצה אחת.'
                    : '💡 Tip: In Claude Desktop, you can add connectors through the Settings file with one click.'}
                </p>
              </div>
            </div>

            {/* Connectors grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {connectors.map(conn => (
                <div key={conn.name} className="glass-card p-5 text-center hover:border-accent-blue/30 border border-transparent transition-all">
                  <span className="text-3xl block mb-3">{conn.icon}</span>
                  <h4 className="font-bold text-text-primary mb-2">{conn.name}</h4>
                  <p className="text-xs text-text-secondary">{conn.desc[lang]}</p>
                </div>
              ))}
            </div>

            {/* How to connect */}
            <div className="glass-card p-6 mt-8">
              <h4 className="font-bold text-text-primary mb-4">
                {lang === 'he' ? '🛠️ איך מחברים מחבר (Connector)?' : '🛠️ How to Connect a Connector?'}
              </h4>
              <div className="code-block text-sm">
                <code>{`// ${lang === 'he' ? 'בקובץ ההגדרות' : 'In the settings file'}:
// Claude Desktop: claude_desktop_config.json
// Claude Code: ~/.claude/settings.json

{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_your_token_here"
      }
    }
  }
}`}</code>
              </div>
            </div>
          </div>
        )}

        {/* ===== SKILLS TAB ===== */}
        {activeTab === 'skills' && (
          <div>
            {/* Skills Explanation */}
            <div className="glass-card p-6 md:p-8 mb-8 border-r-4 border-r-accent-green">
              <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <Info size={20} className="text-accent-green" />
                {lang === 'he' ? 'מה זה כישורים (Skills)?' : 'What are Skills?'}
              </h3>
              <div className="text-text-secondary leading-relaxed space-y-3">
                <p>
                  {lang === 'he'
                    ? '⚡ כישורים (Skills) הם "מתכונים" מוכנים מראש ב-Claude Code. כל Skill הוא סט של הוראות שClaude Code יודע לבצע כשאתם מפעילים אותו עם פקודת / (סלאש).'
                    : '⚡ Skills are pre-built "recipes" in Claude Code. Each Skill is a set of instructions that Claude Code knows to execute when you activate it with a / (slash) command.'}
                </p>
                <p>
                  {lang === 'he'
                    ? 'למשל: במקום להסביר לClaude "תבדוק את כל השינויים ב-git, תכתוב הודעת commit מסודרת, ותבצע commit" - פשוט כותבים /commit והוא יודע מה לעשות!'
                    : 'For example: Instead of explaining to Claude "check all git changes, write a proper commit message, and commit" - you just type /commit and it knows what to do!'}
                </p>
                <p className="font-medium text-text-primary">
                  {lang === 'he'
                    ? '🎯 אפשר גם ליצור כישורים מותאמים אישית (Custom Skills) למשימות שחוזרות על עצמן בפרויקט שלכם.'
                    : '🎯 You can also create Custom Skills for recurring tasks in your project.'}
                </p>
              </div>
            </div>

            {/* Built-in skills */}
            <h3 className="text-xl font-bold text-text-primary mb-6">
              {lang === 'he' ? '📦 כישורים מובנים (Built-in Skills)' : '📦 Built-in Skills'}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { name: '/commit', desc: { he: 'יצירת commit מסודר עם הודעה מתאימה אוטומטית', en: 'Create organized commit with auto-generated message' }, icon: '📝', detail: { he: 'בודק git status, מנתח שינויים, כותב הודעה, ומבצע commit', en: 'Checks git status, analyzes changes, writes message, and commits' } },
                { name: '/review', desc: { he: 'סקירת קוד מקצועית (Code Review)', en: 'Professional code review' }, icon: '🔍', detail: { he: 'סורק את הקוד, מזהה בעיות, ומציע שיפורים', en: 'Scans code, identifies issues, and suggests improvements' } },
                { name: '/simplify', desc: { he: 'פישוט ושיפור קוד קיים (Refactoring)', en: 'Simplify and improve existing code' }, icon: '✨', detail: { he: 'מזהה קוד מסורבל ומפשט אותו', en: 'Identifies complex code and simplifies it' } },
                { name: '/init', desc: { he: 'יצירת CLAUDE.md לפרויקט (Project Setup)', en: 'Create CLAUDE.md for project' }, icon: '🚀', detail: { he: 'סורק את הפרויקט ויוצר קובץ הנחיות מותאם', en: 'Scans project and creates customized instructions file' } },
                { name: '/deploy', desc: { he: 'העלאה ל-Vercel/production (Deployment)', en: 'Deploy to Vercel/production' }, icon: '▲', detail: { he: 'בונה, בודק, ומעלה את הפרויקט', en: 'Builds, tests, and deploys the project' } },
                { name: '/model', desc: { he: 'החלפת מודל AI (Model Switching)', en: 'Switch AI model' }, icon: '🤖', detail: { he: 'מאפשר לעבור בין Sonnet, Opus, Haiku', en: 'Switch between Sonnet, Opus, Haiku' } },
                { name: '/memory', desc: { he: 'ניהול זיכרון קבוע (Persistent Memory)', en: 'Manage persistent memory' }, icon: '🧠', detail: { he: 'צפייה, עריכה ומחיקה של זכרונות', en: 'View, edit, and delete memories' } },
                { name: '/doctor', desc: { he: 'בדיקת תקינות המערכת (Health Check)', en: 'System health check' }, icon: '🩺', detail: { he: 'בודק שכל ההגדרות והחיבורים תקינים', en: 'Checks all settings and connections are working' } },
              ].map(skill => (
                <div key={skill.name} className="glass-card p-5 hover:border-accent-green/30 border border-transparent transition-all">
                  <div className="text-center mb-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div className="font-mono font-bold text-claude-orange mt-2 text-lg">{skill.name}</div>
                  </div>
                  <p className="text-sm text-text-primary font-medium mb-1">{skill.desc[lang]}</p>
                  <p className="text-xs text-text-muted">{skill.detail[lang]}</p>
                </div>
              ))}
            </div>

            {/* Custom skills */}
            <div className="glass-card p-6">
              <h4 className="font-bold text-text-primary mb-4">
                {lang === 'he' ? '🎨 יצירת כישור מותאם אישית (Custom Skill)' : '🎨 Creating a Custom Skill'}
              </h4>
              <p className="text-sm text-text-secondary mb-4">
                {lang === 'he'
                  ? 'אפשר ליצור כישורים משלכם! פשוט צרו קובץ Markdown עם frontmatter בתיקיית .claude/skills/:'
                  : 'You can create your own skills! Simply create a Markdown file with frontmatter in the .claude/skills/ directory:'}
              </p>
              <div className="code-block text-sm">
                <code>{`---
name: translate-to-hebrew
description: Translate project files to Hebrew
trigger: when user asks to translate
---

# Instructions
1. Read the specified file
2. Translate all user-facing text to Hebrew
3. Keep code, variable names, and comments in English
4. Save the translated version`}</code>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
