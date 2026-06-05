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

// initialLang comes from the server (cookie), so the first paint already matches
// the chosen language. No localStorage round-trip, no he-default flash.
export function LangProvider({
  children,
  initialLang = 'he',
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    if (typeof document !== 'undefined') {
      // one-year cookie drives SSR lang/dir on the next request
      document.cookie = `lang=${newLang};path=/;max-age=31536000;samesite=lax`;
      // keep the live document attributes in sync immediately
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === 'he' ? 'rtl' : 'ltr';
    }
  };

  const value: LangContextType = {
    lang,
    setLang,
    t: (key: string) => translate(key, lang),
    dir: lang === 'he' ? 'rtl' : 'ltr',
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
