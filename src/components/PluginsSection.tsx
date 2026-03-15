'use client';
import { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { Star, ExternalLink, Filter } from 'lucide-react';

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
  { name: 'PostgreSQL', description: { he: 'שאילתות ישירות לבסיס נתונים', en: 'Direct database queries' }, category: 'data', rating: 4, difficulty: 'medium', icon: '🐘', setup: '@modelcontextprotocol/server-postgres' },
  { name: 'Puppeteer', description: { he: 'אוטומציית דפדפן וגירוד אתרים', en: 'Browser automation and web scraping' }, category: 'automation', rating: 4, difficulty: 'medium', icon: '🎭', setup: '@modelcontextprotocol/server-puppeteer' },
  { name: 'Slack', description: { he: 'שליחה וקריאת הודעות Slack', en: 'Send and read Slack messages' }, category: 'communication', rating: 4, difficulty: 'easy', icon: '💬', setup: '@modelcontextprotocol/server-slack' },
  { name: 'Google Drive', description: { he: 'גישה לקבצים ב-Google Drive', en: 'Access Google Drive files' }, category: 'productivity', rating: 4, difficulty: 'medium', icon: '📄', setup: '@modelcontextprotocol/server-gdrive' },
  { name: 'Brave Search', description: { he: 'חיפוש אינטרנט מתקדם', en: 'Advanced web search' }, category: 'search', rating: 3, difficulty: 'easy', icon: '🔍', setup: '@modelcontextprotocol/server-brave-search' },
  { name: 'Memory', description: { he: 'זיכרון persistent עם knowledge graph', en: 'Persistent memory with knowledge graph' }, category: 'productivity', rating: 3, difficulty: 'easy', icon: '🧠', setup: '@modelcontextprotocol/server-memory' },
  { name: 'Airtable', description: { he: 'ניהול טבלאות ובסיסי נתונים', en: 'Manage tables and databases' }, category: 'data', rating: 4, difficulty: 'easy', icon: '📊', setup: 'airtable MCP server' },
  { name: 'Make (Integromat)', description: { he: 'אוטומציות ו-workflows', en: 'Automations and workflows' }, category: 'automation', rating: 4, difficulty: 'medium', icon: '⚡', setup: 'Make MCP server' },
  { name: 'Vercel', description: { he: 'Deploy וניהול אתרים', en: 'Deploy and manage websites' }, category: 'dev', rating: 4, difficulty: 'easy', icon: '▲', setup: 'Vercel MCP server' },
  { name: 'Sentry', description: { he: 'מעקב שגיאות ו-monitoring', en: 'Error tracking and monitoring' }, category: 'dev', rating: 3, difficulty: 'medium', icon: '🔔', setup: '@sentry/mcp-server' },
  { name: 'Linear', description: { he: 'ניהול פרויקטים ו-issues', en: 'Project and issue management' }, category: 'productivity', rating: 4, difficulty: 'easy', icon: '📋', setup: 'Linear MCP server' },
  { name: 'Gmail', description: { he: 'קריאה ושליחת מיילים', en: 'Read and send emails' }, category: 'communication', rating: 4, difficulty: 'medium', icon: '📧', setup: 'Gmail MCP server' },
  { name: 'Playwright', description: { he: 'בדיקות אוטומטיות ושליטה בדפדפן', en: 'Automated testing and browser control' }, category: 'dev', rating: 5, difficulty: 'medium', icon: '🎪', setup: '@anthropic/mcp-playwright' },
];

const categories = [
  { id: 'all', label: { he: 'הכל', en: 'All' } },
  { id: 'dev', label: { he: 'פיתוח', en: 'Development' } },
  { id: 'data', label: { he: 'נתונים', en: 'Data' } },
  { id: 'automation', label: { he: 'אוטומציה', en: 'Automation' } },
  { id: 'communication', label: { he: 'תקשורת', en: 'Communication' } },
  { id: 'productivity', label: { he: 'פרודוקטיביות', en: 'Productivity' } },
  { id: 'search', label: { he: 'חיפוש', en: 'Search' } },
];

const difficultyLabels: Record<string, { he: string; en: string }> = {
  easy: { he: 'קל', en: 'Easy' },
  medium: { he: 'בינוני', en: 'Medium' },
  hard: { he: 'מתקדם', en: 'Advanced' },
};

const difficultyColors: Record<string, string> = {
  easy: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  hard: 'bg-red-100 text-red-700',
};

export default function PluginsSection() {
  const { t, dir, lang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = selectedCategory === 'all'
    ? plugins
    : plugins.filter(p => p.category === selectedCategory);

  return (
    <section id="plugins" className="py-20 bg-claude-cream/30" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t('plugins.title')}</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('plugins.subtitle')}</p>
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
                  <Star
                    key={i}
                    size={14}
                    fill={i < plugin.rating ? '#E07A2F' : 'none'}
                    stroke="#E07A2F"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <code className="text-xs bg-gray-100 text-gray-600 p-2 rounded-lg font-mono block mt-auto">
                {plugin.setup}
              </code>
            </div>
          ))}
        </div>

        {/* Skills section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            {lang === 'he' ? '⚡ Skills - כישורים מובנים' : '⚡ Built-in Skills'}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: '/commit', desc: { he: 'יצירת commit מסודר עם הודעה מתאימה', en: 'Create organized commit with proper message' }, icon: '📝' },
              { name: '/review', desc: { he: 'סקירת קוד מקצועית', en: 'Professional code review' }, icon: '🔍' },
              { name: '/simplify', desc: { he: 'פישוט ושיפור קוד קיים', en: 'Simplify and improve existing code' }, icon: '✨' },
              { name: '/init', desc: { he: 'יצירת CLAUDE.md לפרויקט', en: 'Create CLAUDE.md for project' }, icon: '🚀' },
              { name: '/deploy', desc: { he: 'העלאה ל-Vercel/production', en: 'Deploy to Vercel/production' }, icon: '▲' },
              { name: '/model', desc: { he: 'החלפת מודל AI', en: 'Switch AI model' }, icon: '🤖' },
              { name: '/memory', desc: { he: 'ניהול זיכרון persistent', en: 'Manage persistent memory' }, icon: '🧠' },
              { name: '/doctor', desc: { he: 'בדיקת תקינות המערכת', en: 'System health check' }, icon: '🩺' },
            ].map(skill => (
              <div key={skill.name} className="glass-card p-4 text-center">
                <span className="text-2xl">{skill.icon}</span>
                <div className="font-mono font-bold text-claude-orange mt-2">{skill.name}</div>
                <p className="text-xs text-text-secondary mt-1">{skill.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
