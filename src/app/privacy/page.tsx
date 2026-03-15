'use client';
import { useLang } from '@/lib/LangContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
          <article className="prose prose-gray max-w-none [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pr-6 [&_ul]:mb-4 [&_li]:text-text-secondary [&_li]:mb-1">
            <h1>מדיניות פרטיות</h1>

            <h2>1. המידע הנאסף אודותיך</h2>
            <p>
              ברוך הבא למדיניות הפרטיות של האתר academy.dermunbound.com המופעל על-ידי ד&quot;ר יהונתן קפלן, אימייל dr@kaplanderm.com (&quot;המפעילים&quot;).
            </p>
            <p>
              הוראות מדיניות פרטיות אלה יחולו על כל שירות המופעל על-ידי המפעילים בכל מדיה, לרבות ומבלי לגרוע: באמצעות צ&apos;אט, בינה מלאכותית, או כל פלטפורמה או מדיה דיגיטלית.
            </p>

            <h2>2. מסירת מידע</h2>
            <p>
              אינך חייב למסור לנו את המידע המפורט במדיניות פרטיות זו. מסירת המידע תלויה ברצונך ובהסכמתך. עם זה, אם לא תמסור פרטי קשר עדכניים לא תוכל לבצע רישום לאתר או לשירותינו האחרים. בנוסף, מחיקה או שינוי מידע אודותיך אפשרי אך ורק בהתאם למגבלות ספקי השירותים השונים.
            </p>

            <h2>3. עדכון ומחיקת מידע</h2>
            <p>
              ייתכן שלא נהיה מסוגלים לכבד בקשות לעדכון או מחיקת מידע באופנים מסוימים, מבלי לחדול להעניק לך שירותים. בקרות מקרה כזה, נודיע לך.
            </p>

            <h2>4. בינה מלאכותית</h2>
            <p>
              יכול שהמפעילים יפעילו חלק משירותיהם באמצעות בינה מלאכותית. ידוע למשתמש כי בכל שימוש בכלי בינה מלאכותית ייאסף אודותיו מידע באמצעות הגוף המפעיל את הבינה המלאכותית, ויחולו הוראות מדיניות הפרטיות של אותו גוף.
            </p>

            <h2>שימוש באתר</h2>
            <ul>
              <li>השימוש באתר, לרבות גלישה, טעון מסירת מידע אישי</li>
              <li>חלק מהשירותים יחייבו למסור שם, כתובת, דרכי התקשרות, אימייל ו/או ת.ז.</li>
              <li>בעת גלישה נשמר: תוכן פניה, פעולות שלא הושלמו, כתובת IP, סוג דפדפן, נתוני מכשיר, מיקום, הרגלי שימוש</li>
              <li>חלק מהמידע ייאסף באמצעות עוגיות (Cookies)</li>
              <li>הנך מתחייב למסור מידע אמין ומדויק אודותיך בלבד</li>
            </ul>

            <h2>5. למי אנחנו עשויים להעביר את המידע</h2>
            <p>
              ספקים חיצוניים: אחסון בענן, ניהול רשימות תפוצה, ניתוח סטטיסטי, שירותי בינה מלאכותית, ספקים נוספים לתפעול העסק.
            </p>

            <h2>6. אופן השימוש במידע</h2>
            <p>
              שיפור חווית גלישה, שיפור הקשר עם משתמשים, שיווק ומסחר, ניתוח סטטיסטי, מניעת הונאות ואבטחה.
            </p>

            <h2>7. פיקסל (PIXEL)</h2>
            <p>
              האתר עשוי לעשות שימוש בטכנולוגיית &quot;פיקסל&quot; של META, המאפשרת הצגת פרסום מותאם.
            </p>

            <h2>8. עוגיות (Cookies)</h2>
            <p>
              האתר עושה שימוש ב-Cookies, קבצי טקסט המכילים מידע מוצפן על דפוסי גלישה. באפשרותך לחסום Cookies בדפדפן, אך חסימה עלולה למנוע גישה לחלקים מהאתר.
            </p>

            <h2>9. מסירת מידע לצד שלישי</h2>
            <p>
              ננקוט אמצעים סבירים למנוע העברת פרטים מזהים, למעט: בהסכמתך, להשלמת רכישה, שיתוף פעולה עם חברות קשורות, צו שיפוטי, מחלוקת משפטית, מניעת נזק חמור, העברת פעילות.
            </p>

            <h2>10. חשבונית דיגיטלית</h2>
            <p>שומרים לעצמנו את הזכות לשלוח חשבוניות דיגיטליות.</p>

            <h2>11. אבטחת מידע</h2>
            <p>ננקוט אמצעי הגנה והצפנה כנהוג בתחום הסחר האלקטרוני בישראל.</p>

            <h2>12. יצירת קשר בנושא פרטיות</h2>
            <p>
              הינך רשאי לעיין במידע ולבקש תיקון. לפניות: dr@kaplanderm.com.
            </p>
          </article>
        ) : (
          <article className="prose prose-gray max-w-none [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:text-text-secondary [&_li]:mb-1">
            <h1>Privacy Policy</h1>

            <h2>1. Information We Collect</h2>
            <p>
              Welcome to the Privacy Policy of academy.dermunbound.com operated by Dr. Yehonatan Kaplan, email dr@kaplanderm.com (&quot;the Operators&quot;).
            </p>
            <p>
              This privacy policy applies to all services operated by the Operators on any medium, including chat, artificial intelligence, or any digital platform.
            </p>

            <h2>2. Providing Information</h2>
            <p>
              You are not required to provide the information detailed in this policy. Providing information depends on your will and consent. However, if you do not provide current contact details, you will not be able to register or use certain services.
            </p>

            <h2>3. Updating and Deleting Information</h2>
            <p>
              We may not be able to honor requests for updating or deleting information in certain ways without ceasing to provide services.
            </p>

            <h2>4. Artificial Intelligence</h2>
            <p>
              The Operators may use AI in some services. Users acknowledge that information may be collected by the AI provider, subject to that provider&apos;s privacy policy.
            </p>

            <h2>General Website Usage</h2>
            <ul>
              <li>Website usage requires providing personal information</li>
              <li>Some services require name, address, contact details, email, and/or ID number</li>
              <li>Browsing data saved: inquiry content, incomplete actions, IP, browser type, device info, location, usage habits</li>
              <li>Some information collected via Cookies</li>
              <li>You commit to providing accurate information about yourself only</li>
            </ul>

            <h2>5. Who We May Share Information With</h2>
            <p>
              External providers: cloud storage, mailing lists, statistical analysis, AI services, and other business operations providers.
            </p>

            <h2>6. How We Use Information</h2>
            <p>
              Improving browsing experience, communication with users, marketing, statistical analysis, fraud prevention, and security.
            </p>

            <h2>7. Pixel (META)</h2>
            <p>
              The site may use META Pixel technology for targeted advertising.
            </p>

            <h2>8. Cookies</h2>
            <p>
              The site uses Cookies, encrypted text files containing browsing information. You may block Cookies in your browser, but this may prevent access to parts of the site.
            </p>

            <h2>9. Third-Party Information Sharing</h2>
            <p>
              We take reasonable measures to prevent sharing identifying information, except: by your consent, to complete purchases, with affiliated companies, by court order, legal dispute, to prevent serious harm, or upon business transfer.
            </p>

            <h2>10. Digital Invoices</h2>
            <p>We reserve the right to send digital invoices.</p>

            <h2>11. Information Security</h2>
            <p>We implement standard encryption and protection measures.</p>

            <h2>12. Contact for Privacy Issues</h2>
            <p>
              You may review and request correction of your information. Contact: dr@kaplanderm.com.
            </p>
          </article>
        )}
      </div>
    </section>
  );
}
