'use client';
import { useLang } from '@/lib/LangContext';
import { MessageCircle, FolderCog, Copy, FolderOpen } from 'lucide-react';
import Icon from '@/components/ui/Icon';

export default function ChatVsCode() {
  const { dir, lang } = useLang();
  const he = lang === 'he';

  return (
    <section className="py-20 bg-claude-cream/30" dir={dir}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {he ? 'ההבדל בין Chat ל-Code' : 'The difference between Chat and Code'}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {he
              ? 'זה ההבדל המרכזי שכדאי להבין. שניהם באותה אפליקציה, אבל הם עושים דברים שונים.'
              : 'This is the key difference to understand. Both live in the same app, but they do different things.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Chat */}
          <div className="glass-card p-6 md:p-8 border-t-4" style={{ borderTopColor: '#2F6FB0' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#2F6FB01A' }}>
                <Icon icon={MessageCircle} size={22} />
              </span>
              <h3 className="text-xl font-bold text-text-primary">{he ? 'Chat - שאלה ותשובה' : 'Chat - ask and answer'}</h3>
            </div>
            <p className="text-text-secondary mb-4 leading-relaxed">
              {he
                ? 'אתה כותב שאלה, Claude עונה. אם רוצים לשמור את התוצאה, מעתיקים ומדביקים. מצוין לשאלה נקודתית או לניסוח.'
                : 'You type a question, Claude answers. To keep the result you copy and paste. Great for a one-off question or for drafting.'}
            </p>
            <div className="rounded-xl bg-white border border-border-color p-4">
              <div className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-wide">
                {he ? 'דוגמה רפואית' : 'Medical example'}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {he
                  ? '"נסח לי מכתב הפניה לאונקולוג על מטופל עם מלנומה, Breslow 1.2 מ"מ, שוליים נקיים." מדביק את הסיכום, מקבל מכתב, מעתיק ל-EMR.'
                  : '"Draft a referral letter to oncology for a melanoma patient, Breslow 1.2 mm, clear margins." You paste the summary, get a letter, copy it into the EMR.'}
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-text-muted">
              <Icon icon={Copy} size={16} />
              {he ? 'אתה מזיז את המידע בעצמך' : 'You move the information yourself'}
            </div>
          </div>

          {/* Code / Cowork */}
          <div className="glass-card p-6 md:p-8 border-t-4" style={{ borderTopColor: '#B5560E' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#B5560E1A' }}>
                <Icon icon={FolderCog} size={22} />
              </span>
              <h3 className="text-xl font-bold text-text-primary">{he ? 'Code / Cowork - עובד על הקבצים שלך' : 'Code / Cowork - works on your files'}</h3>
            </div>
            <p className="text-text-secondary mb-4 leading-relaxed">
              {he
                ? 'אתה מצביע על תיקייה ומבקש משימה. Claude קורא את הקבצים, עובד עליהם בכמה צעדים, ושומר תוצאה - בלי שתעתיק כלום.'
                : 'You point at a folder and ask for a task. Claude reads the files, works through several steps, and saves a result - without you copying anything.'}
            </p>
            <div className="rounded-xl bg-white border border-border-color p-4">
              <div className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-wide">
                {he ? 'דוגמה רפואית' : 'Medical example'}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {he
                  ? '"קח את כל 30 דוחות הפתולוגיה בתיקייה הזאת והוצא טבלה: תאריך, חומר, אבחנה, שוליים." מקבל קובץ Excel מוכן. 3 דקות.'
                  : '"Take all 30 pathology reports in this folder and make a table: date, specimen, diagnosis, margins." You get a finished Excel file. 3 minutes.'}
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-text-muted">
              <Icon icon={FolderOpen} size={16} />
              {he ? 'Claude עובד על תיקייה שלמה בשבילך' : 'Claude works on a whole folder for you'}
            </div>
          </div>
        </div>

        <p className="text-center text-text-muted mt-8 max-w-2xl mx-auto">
          {he
            ? 'אצל רופא מתחיל: מתחילים מ-Chat, ועוברים ל-Cowork ול-Code כשרוצים לעבד תיקיות שלמות. בלי טרמינל בכלל.'
            : 'For a beginner: start with Chat, then move to Cowork and Code when you want to process whole folders. No terminal at all.'}
        </p>
      </div>
    </section>
  );
}
