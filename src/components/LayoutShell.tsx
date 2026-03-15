'use client';
import { ReactNode, useEffect } from 'react';
import { useLang } from '@/lib/LangContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyBanner from '@/components/PrivacyBanner';

export default function LayoutShell({ children }: { children: ReactNode }) {
  const { dir } = useLang();

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = dir === 'rtl' ? 'he' : 'en';
  }, [dir]);

  return (
    <div dir={dir}>
      <Header />
      <main>{children}</main>
      <PrivacyBanner />
      <Footer />
    </div>
  );
}
