'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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
  const [lang, setLangState] = useState<Lang>('he');

  // Restore language from localStorage on mount
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('claude-academy-lang') : null;
    if (saved === 'en' || saved === 'he') {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('claude-academy-lang', newLang);
    }
  };

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
