'use client';
import { ReactNode } from 'react';
import { LangProvider } from '@/lib/LangContext';
import type { Lang } from '@/lib/i18n';

export default function Providers({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang: Lang;
}) {
  return <LangProvider initialLang={initialLang}>{children}</LangProvider>;
}
