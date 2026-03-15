'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { Lang, t as translate } from './i18n';

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const LangContext = createContext<LangContextType>({
  lang: 'he',
  setLang: () => {},
  t: (key) => key,
  dir: 'rtl',
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('he');

  const value: LangContextType = {
    lang,
    setLang,
    t: (key: string) => translate(key, lang),
    dir: lang === 'he' ? 'rtl' : 'ltr',
  };

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
