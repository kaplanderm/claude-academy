'use client';
import { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { Menu, X, Globe, Search } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const { lang, setLang, t, dir } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { label: { he: 'שימושים רפואיים', en: 'Medical Use Cases' }, href: '/#medical-uses' },
    { label: { he: 'קורסים', en: 'Courses' }, href: '/academy#courses' },
    { label: { he: 'כלים וממשקים', en: 'Tools & Interfaces' }, href: '/academy#tools' },
    { label: { he: 'תוספים', en: 'Plugins' }, href: '/academy#plugins' },
    { label: { he: 'בלוג', en: 'Blog' }, href: '/academy#blog' },
    { label: { he: 'בונוס', en: 'Bonus' }, href: '/academy#bonus' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-claude-orange to-claude-orange-light flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-text-primary">
                Claude <span className="gradient-text">AI</span>
              </span>
              <span className="block text-xs text-text-muted -mt-0.5">
                {lang === 'he' ? 'לרופאים' : 'for Physicians'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-claude-orange transition-colors rounded-lg hover:bg-claude-cream"
              >
                {item.label[lang]}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg hover:bg-claude-cream text-text-secondary hover:text-claude-orange transition-colors"
            >
              <Search size={18} />
            </button>

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'he' ? 'en' : 'he')}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border-color hover:border-claude-orange text-sm font-medium text-text-secondary hover:text-claude-orange transition-all"
            >
              <Globe size={14} />
              {t('common.language')}
            </button>

            {/* CTA */}
            <Link
              href="/#medical-uses"
              className="hidden sm:flex items-center gap-1 px-4 py-2 rounded-xl bg-gradient-to-r from-claude-orange to-claude-orange-light text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              {lang === 'he' ? 'שימושים רפואיים' : 'Medical Uses'}
            </Link>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-claude-cream text-text-secondary"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-3">
            <input
              type="text"
              placeholder={t('common.searchPlaceholder')}
              className="w-full px-4 py-2.5 rounded-xl border border-border-color focus:border-claude-orange focus:ring-2 focus:ring-claude-orange/20 outline-none text-sm bg-white"
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-orange-100 shadow-xl">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-xl text-text-secondary hover:text-claude-orange hover:bg-claude-cream transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label[lang]}
              </Link>
            ))}
            <Link
              href="/academy"
              className="block px-4 py-3 rounded-xl bg-gradient-to-r from-claude-orange to-claude-orange-light text-white text-center font-semibold mt-2"
              onClick={() => setMenuOpen(false)}
            >
              {lang === 'he' ? 'Claude Academy' : 'Claude Academy'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
