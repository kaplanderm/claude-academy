'use client';
import { useLang } from '@/lib/LangContext';
import { Heart, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { t, dir, lang } = useLang();

  const researchUrl = lang === 'he'
    ? 'https://kaplanclinic.co.il/he/derm-ai'
    : 'https://kaplanclinic.co.il/en/derm-ai';

  return (
    <footer className="bg-claude-dark text-white py-16" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-claude-orange to-claude-orange-light flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <span className="font-bold text-xl">Claude Academy</span>
                <span className="block text-xs text-gray-400 -mt-0.5">
                  {lang === 'he' ? 'לרופאים' : 'for Physicians'}
                </span>
              </div>
            </div>
            <p className="text-sm text-claude-orange font-medium mb-2">
              {t('footer.dermUnbound')}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-claude-orange">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#medical-uses" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {lang === 'he' ? 'שימושים רפואיים' : 'Medical Use Cases'}
                </Link>
              </li>
              <li>
                <Link href="/academy#courses" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t('nav.courses')}
                </Link>
              </li>
              <li>
                <Link href="/academy#tools" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t('nav.tools')}
                </Link>
              </li>
              <li>
                <Link href="/academy#blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link href="/academy#bonus" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t('nav.bonus')}
                </Link>
              </li>
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

          {/* SEO Links & Research */}
          <div>
            <h4 className="font-bold mb-4 text-claude-orange">{t('footer.research')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://kaplanclinic.co.il" target="_blank" rel="dofollow" className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  Kaplan Clinic
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href={researchUrl} target="_blank" rel="dofollow" className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  {t('hero.researchLink')}
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://mohspedia.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  MohsPedia
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://dermai.co.il" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  DermAI
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>

            <h4 className="font-bold mt-6 mb-4 text-claude-orange">{t('footer.community')}</h4>
            <ul className="space-y-2">
              <li><a href="https://discord.gg/anthropic" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">{t('footer.discord')}</a></li>
              <li><a href="https://github.com/anthropics" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">{t('footer.github')}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500 text-center md:text-start">
            <p>
              {t('footer.license')}.{' '}
              {lang === 'he'
                ? 'כל הזכויות שמורות ל-Kaplan Clinic'
                : 'All rights reserved to Kaplan Clinic'}
            </p>
            <p className="mt-1">
              © 2026 Claude Academy. {t('footer.rights')}.
            </p>
          </div>
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
