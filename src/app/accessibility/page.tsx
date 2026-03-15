'use client';
import { useLang } from '@/lib/LangContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AccessibilityPage() {
  const { dir, lang } = useLang();

  return (
    <section className="pt-24 pb-16 bg-white" dir={dir}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-claude-orange transition-colors"
          >
            {dir === 'rtl' ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
            {lang === 'he' ? 'חזרה לדף הראשי' : 'Back to Home'}
          </Link>
        </div>

        {lang === 'he' ? (
          <article className="prose prose-gray max-w-none [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pr-6 [&_ul]:mb-4 [&_li]:text-text-secondary [&_li]:mb-1">
            <h1>הצהרת נגישות</h1>
            <p>תאריך עדכון: 2026-03-15</p>

            <p>
              ד&quot;ר יהונתן קפלן אחראי על הקמת והפעלת אתר academy.dermunbound.com. אנו רואים חשיבות רבה במתן שירות שוויוני לכלל האזרחים ובשיפור השירות הניתן לאזרחים עם מוגבלות. אנו משקיעים משאבים רבים בהנגשת האתר והנכסים הדיגיטליים שלנו על מנת להפוך את שירותי החברה לזמינים יותר עבור אנשים עם מוגבלות.
            </p>
            <p>
              במדינת ישראל כ-20 אחוזים מקרב האוכלוסייה הינם אנשים עם מוגבלות הזקוקים לנגישות דיגיטלית, על מנת לצרוך מידע ושירותים כלליים. הנגשת האתר נועדה להפוך אותו לזמין, ידידותי ונוח יותר לשימוש עבור אוכלוסיות עם צרכים מיוחדים, הנובעים בין היתר ממוגבלויות מוטוריות שונות, לקויות קוגניטיביות, קוצר רואי, עיוורון או עיוורון צבעים, לקויות שמיעה וכן אוכלוסייה הנמנית על בני הגיל השלישי.
            </p>

            <h2>רמת הנגישות באתר - AA</h2>
            <p>
              האתר מותאם בהתאם לדרישות תקנות שוויון זכויות לאנשים עם מוגבלות 5568 התשע&quot;ג 2013 ברמת AA, ומיישם את המלצות מסמך WCAG 2.2 מאת ארגון W3C.
            </p>

            <h2>כיצד עוברים למצב נגיש?</h2>
            <p>
              באתר מוצב אייקון נגישות (בדפנות האתר). לחיצה על האייקון מאפשרת פתיחת תפריט הנגישות. התוכנה פועלת בדפדפנים Chrome, Firefox, Safari, Opera.
            </p>

            <h2>תיקונים והתאמות שבוצעו באתר</h2>
            <ul>
              <li>התאמה לקורא מסך (NVDA, JAWS)</li>
              <li>אמצעי ניווט פשוטים וברורים</li>
              <li>תכני האתר כתובים באופן ברור ומסודר</li>
              <li>התאמה לדפדפנים מודרניים</li>
              <li>תצוגה תואמת מגוון מסכים ורזולוציות</li>
              <li>מבנה כותרות היררכי (H1/H2/H3)</li>
              <li>הסבר טקסטואלי חלופי (alt) לכל תמונה</li>
            </ul>

            <h2>פונקציונליות כלי נגישות</h2>
            <ul>
              <li>תמיכה בקורא מסך</li>
              <li>עצירת אנימציות</li>
              <li>דילוג ישיר לתוכן</li>
              <li>ניווט מקלדת</li>
              <li>הגדלה/הקטנה של טקסט</li>
              <li>ריווח בין אותיות/מילים</li>
              <li>ניגודיות וצבע (גבוהה, הפוכה, שחור-לבן)</li>
              <li>גופן קריא</li>
              <li>הדגשת קישורים</li>
              <li>שינוי סמן עכבר</li>
              <li>תיאור לתמונות</li>
            </ul>

            <h2>החרגות</h2>
            <p>
              למרות מאמצינו להנגיש את כלל הדפים והאלמנטים, ייתכן שיתגלו חלקים שטרם הונגשו כראוי. אנו פועלים לשפר את הנגישות באופן שוטף.
            </p>

            <h2>יצירת קשר בנושא נגישות</h2>
            <p>
              במידה ונתקלתם בבעיה, נשמח לקבל הערות באמצעות פנייה לרכז הנגישות:
            </p>
            <ul>
              <li>אימייל: dr@kaplanderm.com</li>
            </ul>
            <p>
              פרטים לצרף: תיאור הבעיה, הפעולה שניסיתם, קישור לדף, דפדפן וגרסה, מערכת הפעלה, טכנולוגיה מסייעת.
            </p>
          </article>
        ) : (
          <article className="prose prose-gray max-w-none [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:text-text-secondary [&_li]:mb-1">
            <h1>Accessibility Statement</h1>
            <p>Last updated: 2026-03-15</p>

            <p>
              Dr. Yehonatan Kaplan is responsible for establishing and operating the website academy.dermunbound.com. We attach great importance to providing equal service to all citizens and improving service for citizens with disabilities. We invest significant resources in making our website and digital assets accessible.
            </p>

            <h2>Accessibility Level - AA</h2>
            <p>
              This site complies with the Israeli Equal Rights for People with Disabilities Regulations 5568, at AA level, and implements WCAG 2.2 recommendations by W3C.
            </p>

            <h2>How to Access Accessibility Mode?</h2>
            <p>
              An accessibility icon is located on the edge of the site. Clicking opens the accessibility menu. Works with Chrome, Firefox, Safari, Opera.
            </p>

            <h2>Fixes and Adjustments</h2>
            <ul>
              <li>Screen reader compatibility (NVDA, JAWS)</li>
              <li>Simple and clear navigation</li>
              <li>Clear, organized content structure</li>
              <li>Modern browser compatibility</li>
              <li>Responsive design for all screen sizes</li>
              <li>Hierarchical heading structure (H1/H2/H3)</li>
              <li>Alternative text (alt) for all images</li>
            </ul>

            <h2>Accessibility Features</h2>
            <ul>
              <li>Screen reader support</li>
              <li>Animation stopping</li>
              <li>Skip to content</li>
              <li>Keyboard navigation</li>
              <li>Text size adjustment</li>
              <li>Letter/word spacing adjustment</li>
              <li>Contrast options (high, inverted, B&W)</li>
              <li>Readable font</li>
              <li>Link highlighting</li>
              <li>Cursor customization</li>
              <li>Image descriptions</li>
            </ul>

            <h2>Exclusions</h2>
            <p>
              Despite our efforts, some parts may not yet be fully accessible. We continually work to improve accessibility.
            </p>

            <h2>Contact for Accessibility Issues</h2>
            <p>For accessibility-related issues, please contact:</p>
            <ul>
              <li>Email: dr@kaplanderm.com</li>
            </ul>
            <p>
              Please include: problem description, action attempted, page URL, browser type/version, OS, assistive technology used.
            </p>
          </article>
        )}
      </div>
    </section>
  );
}
