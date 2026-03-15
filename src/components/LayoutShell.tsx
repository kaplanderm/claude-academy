'use client';
import { ReactNode, useEffect } from 'react';
import { useLang } from '@/lib/LangContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyBanner from '@/components/PrivacyBanner';
import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import CookieConsent from '@/components/CookieConsent';

export default function LayoutShell({ children }: { children: ReactNode }) {
  const { dir, lang } = useLang();

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = dir === 'rtl' ? 'he' : 'en';
  }, [dir]);

  return (
    <div dir={dir}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-claude-orange"
      >
        {lang === 'he' ? 'דילוג לתוכן הראשי' : 'Skip to main content'}
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <PrivacyBanner />
      <Footer />
      <AccessibilityToolbar />
      <CookieConsent />
    </div>
  );
}
