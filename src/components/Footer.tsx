'use client';
import { useLang } from '@/lib/LangContext';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { t, dir, lang } = useLang();

  return (
    <footer className="bg-claude-dark text-white py-16" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-claude-orange to-claude-orange-light flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl">Claude Academy</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-claude-orange">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {['courses', 'tools', 'plugins', 'useCases', 'blog', 'bonus'].map(key => (
                <li key={key}>
                  <a href={`#${key === 'useCases' ? 'use-cases' : key}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-claude-orange">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              <li><a href="https://docs.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">{t('footer.officialDocs')}</a></li>
              <li><a href="https://docs.anthropic.com/en/api" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">{t('footer.apiReference')}</a></li>
              <li><a href="https://github.com/anthropics/claude-code" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">Claude Code GitHub</a></li>
              <li><a href="https://github.com/modelcontextprotocol" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">MCP GitHub</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold mb-4 text-claude-orange">{t('footer.community')}</h4>
            <ul className="space-y-2">
              <li><a href="https://discord.gg/anthropic" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">{t('footer.discord')}</a></li>
              <li><a href="https://github.com/anthropics" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">{t('footer.github')}</a></li>
              <li><a href="https://www.anthropic.com/research" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">{lang === 'he' ? 'מחקר' : 'Research'}</a></li>
              <li><a href="https://www.anthropic.com/news" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">{lang === 'he' ? 'חדשות' : 'News'}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Claude Academy. {t('footer.rights')}.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            {t('footer.madeWith')} <Heart size={14} className="text-red-500" /> {lang === 'he' ? 'ו-Claude AI' : 'and Claude AI'}
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-600 max-w-2xl mx-auto">
            {lang === 'he'
              ? 'אתר זה הוא פרויקט חינוכי עצמאי ואינו מסונף רשמית ל-Anthropic. Claude ו-Anthropic הם סימנים מסחריים של Anthropic, PBC.'
              : 'This is an independent educational project and is not officially affiliated with Anthropic. Claude and Anthropic are trademarks of Anthropic, PBC.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
