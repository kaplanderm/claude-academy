'use client';
import { useState, useRef, useEffect } from 'react';
import { useLang } from '@/lib/LangContext';
import { Menu, X, Globe, Search, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { medicalUseCases } from '@/data/medicalUseCases';

export default function Header() {
  const { lang, setLang, t, dir } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [medicalDropdown, setMedicalDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on route change
  useEffect(() => {
    setMedicalDropdown(false);
    setMenuOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMedicalDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const academyItems = [
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
            {/* Medical Use Cases dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setMedicalDropdown(!medicalDropdown)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-claude-cream ${
                  pathname === '/' || pathname.startsWith('/medical')
                    ? 'text-claude-orange'
                    : 'text-text-secondary hover:text-claude-orange'
                }`}
              >
                {lang === 'he' ? 'שימושים רפואיים' : 'Medical Uses'}
                <ChevronDown size={14} className={`transition-transform ${medicalDropdown ? 'rotate-180' : ''}`} />
              </button>
              {medicalDropdown && (
                <div className={`absolute top-full mt-1 ${dir === 'rtl' ? 'right-0' : 'left-0'} w-72 bg-white rounded-xl shadow-xl border border-orange-100 py-2 z-50`}>
                  <Link
                    href="/#medical-uses"
                    className="block px-4 py-2 text-sm font-semibold text-claude-orange hover:bg-claude-cream/60 transition-colors"
                  >
                    {lang === 'he' ? '📋 כל השימושים הרפואיים' : '📋 All Medical Use Cases'}
                  </Link>
                  <div className="border-t border-orange-50 my-1" />
                  {medicalUseCases.map(uc => (
                    <Link
                      key={uc.id}
                      href={`/medical/${uc.id}`}
                      className={`block px-4 py-2.5 text-sm transition-colors hover:bg-claude-cream/60 ${
                        pathname === `/medical/${uc.id}`
                          ? 'text-claude-orange font-medium bg-claude-cream/40'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      <span className="inline-block w-6">{uc.icon}</span>
                      {uc.title[lang]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Academy link */}
            <Link
              href="/academy"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-claude-cream ${
                pathname === '/academy' ? 'text-claude-orange' : 'text-text-secondary hover:text-claude-orange'
              }`}
            >
              {lang === 'he' ? 'Claude Academy' : 'Claude Academy'}
            </Link>

            {/* Academy sub-items */}
            {academyItems.slice(0, 3).map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-claude-orange transition-colors rounded-lg hover:bg-claude-cream"
              >
                {item.label[lang]}
              </Link>
            ))}

            {/* About link */}
            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-claude-cream ${
                pathname === '/about' ? 'text-claude-orange' : 'text-text-secondary hover:text-claude-orange'
              }`}
            >
              {t('nav.about')}
            </Link>
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
              {lang === 'he' ? 'התחילו כאן' : 'Get Started'}
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
        <div className="lg:hidden bg-white border-t border-orange-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {/* Medical Use Cases section */}
            <div className="px-4 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
              {lang === 'he' ? 'שימושים רפואיים' : 'Medical Use Cases'}
            </div>
            {medicalUseCases.map(uc => (
              <Link
                key={uc.id}
                href={`/medical/${uc.id}`}
                className="block px-4 py-2.5 rounded-xl text-text-secondary hover:text-claude-orange hover:bg-claude-cream transition-colors text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <span className="inline-block w-7">{uc.icon}</span>
                {uc.title[lang]}
              </Link>
            ))}

            <div className="border-t border-orange-50 my-2" />

            {/* Academy section */}
            <div className="px-4 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
              Claude Academy
            </div>
            {academyItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 rounded-xl text-text-secondary hover:text-claude-orange hover:bg-claude-cream transition-colors text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label[lang]}
              </Link>
            ))}

            <div className="border-t border-orange-50 my-2" />

            <Link
              href="/about"
              className="block px-4 py-2.5 rounded-xl text-text-secondary hover:text-claude-orange hover:bg-claude-cream transition-colors text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>

            <Link
              href="/academy"
              className="block px-4 py-3 rounded-xl bg-gradient-to-r from-claude-orange to-claude-orange-light text-white text-center font-semibold mt-2"
              onClick={() => setMenuOpen(false)}
            >
              {lang === 'he' ? 'כנסו ל-Claude Academy' : 'Enter Claude Academy'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
