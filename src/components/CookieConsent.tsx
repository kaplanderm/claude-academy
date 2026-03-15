'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLang } from '@/lib/LangContext';
import Link from 'next/link';

const STORAGE_KEY = 'cookie-consent';

const text = {
  he: {
    message:
      'אנו אוספים פרטי קשר ומידע סטטיסטי המהווים "מידע אישי" על פי חוק (כגון סוג מכשיר, כתובת IP, אפיוני גלישה, מיקום), וכן פרטי קשר כגון טלפון ומייל. אינך חייב/ת על פי דין למסור לנו מידע, ומסירת מידע תלויה ברצונך והסכמתך, אך ככל שלא תסכימ/י למסור אותו ייתכן שלא נוכל להעניק לך שירותים מסויימים ושירותים אחרים יוענקו בצורה חלקית. להרחבה, ראה את',
    accept: 'מסכימ/ה',
    decline: 'דחייה',
    privacy: 'מדיניות הפרטיות המלאה שלנו',
  },
  en: {
    message:
      'We collect contact details and statistical information that constitutes "personal information" under law (such as device type, IP address, browsing characteristics, location), as well as contact details such as phone and email. You are not required by law to provide us with information, and providing information depends on your will and consent, but if you do not agree to provide it, we may not be able to provide you with certain services and other services will be provided partially. For more details, see our',
    accept: 'I Agree',
    decline: 'Decline',
    privacy: 'full Privacy Policy',
  },
};

export default function CookieConsent() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);
  const t = text[lang];

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  }, []);

  const handleDecline = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleDecline();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible, handleDecline]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={lang === 'he' ? 'הסכמה לעוגיות' : 'Cookie consent'}
      aria-modal="false"
      className="fixed inset-x-0 bottom-4 z-[9998] mx-auto max-w-2xl px-4"
    >
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg sm:p-5">
        <p className="mb-3 text-sm leading-relaxed text-gray-800">
          {t.message}{' '}
          <Link
            href="/privacy"
            className="font-medium text-claude-orange underline underline-offset-2 hover:text-claude-orange-dark"
          >
            {t.privacy}
          </Link>
          .
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="rounded-xl bg-claude-orange px-6 py-2 text-sm font-semibold text-white hover:opacity-90 cursor-pointer"
          >
            {t.accept}
          </button>
          <button
            onClick={handleDecline}
            className="rounded-xl border border-gray-200 bg-transparent px-6 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 cursor-pointer"
          >
            {t.decline}
          </button>
        </div>
      </div>
    </div>
  );
}
