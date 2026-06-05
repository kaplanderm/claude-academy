'use client';
import { useParams } from 'next/navigation';
import { useLang } from '@/lib/LangContext';
import { getTrack } from '@/content';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Clock, AlertTriangle } from 'lucide-react';
import Icon from '@/components/ui/Icon';

export default function TrackPage() {
  const params = useParams();
  const { dir, lang } = useLang();
  const he = lang === 'he';
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const slug = params.track as string;
  const track = getTrack(slug);

  if (!track) {
    return (
      <div className="min-h-screen pt-28 text-center" dir={dir}>
        <h1 className="text-2xl font-bold text-text-primary mb-3">{he ? 'מסלול לא נמצא' : 'Track not found'}</h1>
        <Link href="/academy" className="link-accent">{he ? 'חזרה לאקדמיה' : 'Back to the academy'}</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20" dir={dir}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/academy" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-interactive transition-colors mb-6">
          <Icon icon={dir === 'rtl' ? ArrowRight : ArrowLeft} size={14} />
          {he ? 'כל המסלולים' : 'All tracks'}
        </Link>

        <div className="flex items-center gap-3 mb-3">
          <span className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ backgroundColor: `${track.color}1A` }} aria-hidden="true">{track.icon}</span>
          <h1 className="text-3xl font-bold text-text-primary">{track.title[lang]}</h1>
        </div>
        <p className="text-text-secondary text-lg mb-6">{track.description[lang]}</p>

        {track.gated && (
          <div className="bg-purple-50 border-s-4 border-purple-400 rounded-e-lg px-4 py-3 mb-6 flex items-start gap-3">
            <Icon icon={AlertTriangle} size={20} className="text-purple-700 mt-0.5 shrink-0" />
            <p className="text-sm text-text-secondary">
              {he
                ? 'המסלול הזה אופציונלי ומיועד למי שרוצה לעבוד מטרמינל או לבנות אוטומציות. אם אתה רופא בלי רקע טכני - מסלולים 1 עד 3 מספיקים לחלוטין, והכול שם בממשק גרפי.'
                : 'This track is optional and meant for those who want to work from a terminal or build automations. If you are a physician with no technical background, tracks 1 to 3 are entirely enough, and all of it is in a graphical interface.'}
            </p>
          </div>
        )}

        <ol className="space-y-3">
          {track.lessons.map((l, i) => (
            <li key={l.id}>
              <Link
                href={`/academy/${track.slug}/${l.id}`}
                className="glass-card p-5 flex items-center gap-4 group transition-all hover:shadow-md"
              >
                <span className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0" style={{ backgroundColor: `${track.color}1A`, color: track.color }}>
                  {i + 1}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-bold text-text-primary group-hover:text-interactive transition-colors">{l.title[lang]}</span>
                  <span className="block text-sm text-text-secondary truncate">{l.description[lang]}</span>
                </span>
                <span className="hidden sm:flex items-center gap-1 text-xs text-text-muted shrink-0">
                  <Icon icon={Clock} size={13} /> {l.duration} {he ? 'דק׳' : 'min'}
                </span>
                <Icon icon={Arrow} size={16} className="text-text-muted group-hover:text-interactive transition-colors shrink-0" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
