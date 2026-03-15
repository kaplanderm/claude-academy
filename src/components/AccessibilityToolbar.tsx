'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useLang } from '@/lib/LangContext';
import { X, Minus, Plus } from 'lucide-react';

const STORAGE_KEY = 'a11y-settings';

interface Settings {
  font: number;
  contrast: boolean;
  invert: boolean;
  grayscale: boolean;
  bw: boolean;
  links: boolean;
  noMotion: boolean;
  readable: boolean;
  hideImages: boolean;
  cursorDark: boolean;
  cursorLight: boolean;
  headings: boolean;
  focus: boolean;
  wordSpacing: number;
  letterSpacing: number;
}

const defaults: Settings = {
  font: 100,
  contrast: false,
  invert: false,
  grayscale: false,
  bw: false,
  links: false,
  noMotion: false,
  readable: false,
  hideImages: false,
  cursorDark: false,
  cursorLight: false,
  headings: false,
  focus: false,
  wordSpacing: 0,
  letterSpacing: 0,
};

const labels = {
  he: {
    title: 'כלי נגישות',
    contrast: 'ניגודיות גבוהה',
    invert: 'ניגודיות הפוכה',
    grayscale: 'גווני אפור',
    bw: 'שחור לבן',
    links: 'הדגשת קישורים',
    noMotion: 'ביטול אנימציות',
    readable: 'גופן קריא',
    hideImages: 'הסתרת תמונות',
    cursorDark: 'סמן גדול כהה',
    cursorLight: 'סמן גדול בהיר',
    headings: 'הדגשת כותרות',
    focus: 'הדגשת פוקוס',
    reset: 'איפוס הגדרות',
    fontSize: 'גודל גופן',
    wordSpacing: 'ריווח מילים',
    letterSpacing: 'ריווח אותיות',
  },
  en: {
    title: 'Accessibility Tools',
    contrast: 'High Contrast',
    invert: 'Inverted Contrast',
    grayscale: 'Grayscale',
    bw: 'Black & White',
    links: 'Highlight Links',
    noMotion: 'Stop Animations',
    readable: 'Readable Font',
    hideImages: 'Hide Images',
    cursorDark: 'Big Cursor Dark',
    cursorLight: 'Big Cursor Light',
    headings: 'Highlight Headings',
    focus: 'Focus Highlight',
    reset: 'Reset Settings',
    fontSize: 'Font Size',
    wordSpacing: 'Word Spacing',
    letterSpacing: 'Letter Spacing',
  },
};

type FeatureKey = keyof Omit<Settings, 'font' | 'wordSpacing' | 'letterSpacing'>;

interface Feature {
  key: FeatureKey;
  label: string;
  exclusive?: 'visual' | 'cursor';
}

function applySettings(s: Settings) {
  const html = document.documentElement;

  // Font
  if (s.font > 100) html.setAttribute('data-a11y-font', String(s.font));
  else html.removeAttribute('data-a11y-font');

  // Visual filters (exclusive)
  (['contrast', 'invert', 'grayscale', 'bw'] as const).forEach((k) =>
    html.removeAttribute(`data-a11y-${k}`)
  );
  if (s.contrast) html.setAttribute('data-a11y-contrast', '');
  else if (s.invert) html.setAttribute('data-a11y-invert', '');
  else if (s.grayscale) html.setAttribute('data-a11y-grayscale', '');
  else if (s.bw) html.setAttribute('data-a11y-bw', '');

  // Cursor (exclusive)
  html.removeAttribute('data-a11y-cursor-dark');
  html.removeAttribute('data-a11y-cursor-light');
  if (s.cursorDark) html.setAttribute('data-a11y-cursor-dark', '');
  else if (s.cursorLight) html.setAttribute('data-a11y-cursor-light', '');

  // Booleans
  const booleanKeys = ['links', 'noMotion', 'readable', 'hideImages', 'headings', 'focus'] as const;
  booleanKeys.forEach((k) => {
    const attr = `data-a11y-${k.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    if (s[k]) html.setAttribute(attr, '');
    else html.removeAttribute(attr);
  });

  // Spacing
  if (s.wordSpacing > 0) html.setAttribute('data-a11y-word-spacing', String(s.wordSpacing));
  else html.removeAttribute('data-a11y-word-spacing');
  if (s.letterSpacing > 0) html.setAttribute('data-a11y-letter-spacing', String(s.letterSpacing));
  else html.removeAttribute('data-a11y-letter-spacing');

  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

export default function AccessibilityToolbar() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(defaults);
  const panelRef = useRef<HTMLDivElement>(null);
  const t = labels[lang];

  // Load saved settings on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = { ...defaults, ...JSON.parse(stored) };
        setSettings(parsed);
        applySettings(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  const update = useCallback((newSettings: Settings) => {
    setSettings(newSettings);
    applySettings(newSettings);
  }, []);

  const toggleFeature = useCallback(
    (key: FeatureKey, exclusive?: 'visual' | 'cursor') => {
      const next = { ...settings };
      if (exclusive === 'visual') {
        next.contrast = next.invert = next.grayscale = next.bw = false;
      } else if (exclusive === 'cursor') {
        next.cursorDark = next.cursorLight = false;
      }
      next[key] = !settings[key];
      update(next);
    },
    [settings, update]
  );

  const reset = useCallback(() => {
    update({ ...defaults });
  }, [update]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const features: Feature[] = [
    { key: 'contrast', label: t.contrast, exclusive: 'visual' },
    { key: 'invert', label: t.invert, exclusive: 'visual' },
    { key: 'grayscale', label: t.grayscale, exclusive: 'visual' },
    { key: 'bw', label: t.bw, exclusive: 'visual' },
    { key: 'links', label: t.links },
    { key: 'focus', label: t.focus },
    { key: 'readable', label: t.readable },
    { key: 'hideImages', label: t.hideImages },
    { key: 'noMotion', label: t.noMotion },
    { key: 'cursorDark', label: t.cursorDark, exclusive: 'cursor' },
    { key: 'cursorLight', label: t.cursorLight, exclusive: 'cursor' },
    { key: 'headings', label: t.headings },
  ];

  const Slider = ({
    label,
    value,
    min,
    max,
    step,
    suffix,
    onChange,
  }: {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    suffix?: string;
    onChange: (v: number) => void;
  }) => (
    <div className="mt-2 text-center">
      <p className="text-xs text-gray-400 mb-1.5">{label}</p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onChange(Math.max(min, value - step))}
          className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50"
          aria-label={`${label} -`}
        >
          <Minus size={14} />
        </button>
        <span className="flex-1 text-xs font-semibold">
          {value}
          {suffix}
        </span>
        <button
          onClick={() => onChange(Math.min(max, value + step))}
          className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50"
          aria-label={`${label} +`}
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={lang === 'he' ? 'כלי נגישות' : 'Accessibility tools'}
        aria-expanded={open}
        className="fixed bottom-6 left-6 z-[9997] w-12 h-12 rounded-full border-2 border-white bg-[#1B2A4A] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="4.5" r="2.5" />
          <path d="M12 7v5m0 0l-3 5m3-5l3 5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 12h10" strokeLinecap="round" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label={t.title}
          className="fixed bottom-20 left-6 z-[9997] w-80 max-h-[85vh] overflow-y-auto bg-white border border-gray-200 rounded-2xl p-4 shadow-xl"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-gray-900">{t.title}</h2>
            <button
              onClick={() => setOpen(false)}
              aria-label={lang === 'he' ? 'סגור' : 'Close'}
              className="p-1 rounded-lg hover:bg-gray-100 text-gray-400"
            >
              <X size={18} />
            </button>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-3 gap-2">
            {features.map((f) => (
              <button
                key={f.key}
                onClick={() => toggleFeature(f.key, f.exclusive)}
                aria-pressed={settings[f.key]}
                className={`p-2.5 border rounded-xl text-[11px] leading-tight cursor-pointer transition-colors ${
                  settings[f.key]
                    ? 'bg-indigo-50 text-indigo-800 border-indigo-200'
                    : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Sliders */}
          <Slider
            label={t.fontSize}
            value={settings.font}
            min={100}
            max={150}
            step={10}
            suffix="%"
            onChange={(v) => update({ ...settings, font: v })}
          />
          <Slider
            label={t.wordSpacing}
            value={settings.wordSpacing}
            min={0}
            max={3}
            step={1}
            onChange={(v) => update({ ...settings, wordSpacing: v })}
          />
          <Slider
            label={t.letterSpacing}
            value={settings.letterSpacing}
            min={0}
            max={3}
            step={1}
            onChange={(v) => update({ ...settings, letterSpacing: v })}
          />

          {/* Reset */}
          <button
            onClick={reset}
            className="mt-3 w-full py-2.5 border border-gray-200 rounded-xl bg-transparent text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer"
          >
            {t.reset}
          </button>
        </div>
      )}
    </>
  );
}
