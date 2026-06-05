'use client';
import { ReactNode } from 'react';
import { useLang } from '@/lib/LangContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyBanner from '@/components/PrivacyBanner';
import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import CookieConsent from '@/components/CookieConsent';

// lang/dir on <html> are set during SSR from the cookie (see app/layout.tsx),
// and updated imperatively by setLang on toggle. No effect needed here.
export default function LayoutShell({ children }: { children: ReactNode }) {
  const { dir, lang } = useLang();

  return (
    <div dir={dir}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:z-[10000] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-interactive focus:font-semibold"
        style={{ insetInlineStart: '1rem' }}
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
