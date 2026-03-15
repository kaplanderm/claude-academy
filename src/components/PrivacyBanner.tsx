'use client';
import { useState, useEffect } from 'react';
import { useLang } from '@/lib/LangContext';
import { Shield, X } from 'lucide-react';

const STORAGE_KEY = 'privacy-banner-dismissed';

export default function PrivacyBanner() {
  const { lang, dir } = useLang();
  const [dismissed, setDismissed] = useState(true); // start hidden to avoid flash

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== 'true') {
      setDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  if (dismissed) return null;

  const link =
    lang === 'he'
      ? 'https://kaplanclinic.co.il/he/derm-ai'
      : 'https://kaplanclinic.co.il/en/derm-ai';

  const text =
    lang === 'he'
      ? 'שימוש ב-AI ברפואה מחייב הקפדה על פרטיות המטופלים. למידע נוסף על שימוש בטוח ב-AI ברפואה\u00A0\u2192'
      : 'Using AI in medicine requires strict patient privacy. Learn more about safe AI use in medicine\u00A0\u2192';

  return (
    <div
      dir={dir}
      className="bg-amber-50 dark:bg-gray-800 border-t border-amber-200 dark:border-gray-700"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-center gap-3 text-sm text-amber-900 dark:text-amber-200">
        <Shield size={16} className="shrink-0" />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          🔒 {text}
        </a>
        <button
          onClick={handleDismiss}
          className="shrink-0 p-1 rounded hover:bg-amber-200/60 dark:hover:bg-gray-700 transition-colors"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
