'use client';
import { useLang } from '@/lib/LangContext';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { dir, lang } = useLang();

  return (
    <footer className="bg-claude-dark text-white py-10" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main line */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-400">
            {lang === 'he'
              ? 'נבנה כחלק מ-'
              : 'Built as part of the '}
            <a
              href={`https://kaplanclinic.co.il/${lang === 'he' ? 'he' : 'en'}/derm-ai`}
              target="_blank"
              rel="dofollow"
              className="text-claude-orange hover:underline"
            >
              {lang === 'he' ? 'תוכנית המחקר DermUnbound' : 'DermUnbound Research Program'}
            </a>
          </p>
        </div>

        {/* Links row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6 text-sm">
          <a
            href="https://kaplanclinic.co.il"
            target="_blank"
            rel="dofollow"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            Kaplan Clinic
            <ExternalLink size={12} />
          </a>
          <a
            href="https://mohspedia.com"
            target="_blank"
            rel="dofollow"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            MohsPedia
            <ExternalLink size={12} />
          </a>
          <a
            href="https://dermai.co.il"
            target="_blank"
            rel="dofollow"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            DermAI
            <ExternalLink size={12} />
          </a>
          <Link
            href="/about"
            className="text-gray-400 hover:text-white transition-colors"
          >
            {lang === 'he' ? 'אודות' : 'About'}
          </Link>
          <Link
            href="/medical/privacy"
            className="text-gray-400 hover:text-white transition-colors"
          >
            {lang === 'he' ? 'פרטיות' : 'Privacy'}
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>&copy; 2026 Dr. Yehonatan Kaplan &middot; CC BY-NC-SA 4.0</p>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-600 max-w-2xl mx-auto">
            {lang === 'he'
              ? 'אתר זה הוא פרויקט חינוכי עצמאי ואינו מסונף ל-Anthropic. Claude ו-Anthropic הם סימנים מסחריים של Anthropic, PBC.'
              : 'This is an independent educational project and is not affiliated with Anthropic. Claude and Anthropic are trademarks of Anthropic, PBC.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
