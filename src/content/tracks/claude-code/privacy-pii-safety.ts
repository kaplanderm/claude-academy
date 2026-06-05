import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'privacy-pii-safety',
  track: 'claude-code',
  title: { he: 'פרטיות והגנה על נתוני מטופלים', en: 'Privacy and Protecting Patient Data' },
  description: {
    he: 'הכללים שחובה להכיר לפני שעובדים עם Claude על חומר קליני: מה מותר, מה אסור, ואיך לעמעם.',
    en: 'The rules you must know before working with Claude on clinical material: what is allowed, what is not, and how to de-identify.',
  },
  duration: 9,
  updated: '2026-06-05',
  content: {
    he: `# פרטיות והגנה על נתוני מטופלים

זה השיעור החשוב ביותר במסלול. Claude Code רץ במחשב שלך, אבל **תוכן הקבצים שהוא קורא נשלח לעיבוד בענן של Anthropic**. לכן יש כללים ברורים.

## הכלל המרכזי

בחשבון רגיל (Pro/Max) **אין הסכם DPA/BAA** בין Anthropic למרפאה שלך. לכן:

- **אל תזין פרטים מזהים** של מטופלים: שם מלא, ת"ז, תאריך לידה מדויק, כתובת, טלפון, מספרי מעבדה מזהים.
- עבוד על **נתונים מעומעמים** (deidentified) או על מקרים כלליים ללא זיהוי.

:::beginner
"מזהה" (PII) הוא כל פרט שמאפשר לדעת מי המטופל. "מעומעם" הוא אותו מקרה בלי הפרטים האלה - למשל "גבר בן 60" במקום שם ות"ז.
:::

## איך לעמעם לפני העלאה

- בקש מ-Claude עצמו: "לפני שאתה מעבד כל קובץ, הסר שם, ת"ז ותאריך לידה; השתמש רק בקוד מטופל".
- או עמעם ידנית את הקבצים לפני שמצביעים על התיקייה.
- העדף **scheduled tasks מקומיים** על Routines בענן לנתונים רגישים, כי העיבוד מקומי יותר.

## כללי בטיחות נוספים

- **Claude יכול למחוק וליצור קבצים.** הוא תמיד מבקש אישור - אל תאשר אוטומטית, קרא מה הוא עומד לעשות.
- **היסטוריית שיחות נשמרת.** אם נכנס בטעות מידע רגיש, מחק את ההיסטוריה או השתמש ב-Incognito.
- **גיבוי.** עבוד על עותק של התיקייה כשמתנסים, לא על המקור היחיד.

## הצד החוקי בישראל

חוק הגנת הפרטיות (תשמ"א-1981, תיקון 13 משנת 2024) מחייב שמירה מוקפדת על מידע רפואי מזהה. כל עיבוד של מידע בריאות מזהה דורש רישום בפנקס פעילות העיבוד של המרפאה. לפרטיות מלאה - Claude for Enterprise עם BAA, או המתנה למסלול תואם-ישראל.

:::advanced
ההבחנה: הקבצים נקראים מקומית, אבל הפרומפט והתוכן הרלוונטי עוברים דרך שרתי Anthropic. גם scheduled task מקומי שולח מידע לענן כשהוא פונה לדגם. לכן עמעום מקדים הוא שכבת ההגנה האמיתית, לא "מקומיות" העיבוד. למרפאות עם נפח גדול - שקול Enterprise עם BAA ו-zero-retention.
:::

---

**הערת עזר קלינית:** Claude הוא כלי עזר ואינו מחליף את השיפוט הקליני שלך. אמת כל המלצה מול מקור מהימן לפני החלטה לגבי מטופל.

סיימת את מסלול Claude Code - הלב של האתר. למי שרוצה להעמיק בטרמינל ובכלים למפתחים, יש את **המסלול המתקדם**.`,
    en: `# Privacy and Protecting Patient Data

This is the most important lesson in the track. Claude Code runs on your computer, but **the content of the files it reads is sent to Anthropic's cloud for processing**. So there are clear rules.

## The central rule

On a regular account (Pro/Max) there is **no DPA/BAA** between Anthropic and your clinic. Therefore:

- **Do not enter identifying patient details**: full name, ID, precise date of birth, address, phone, identifying lab numbers.
- Work on **de-identified data** or on general cases with no identification.

:::beginner
"identifying" (PII) is any detail that reveals who the patient is. "de-identified" is the same case without those details - for example "a 60-year-old man" instead of a name and ID.
:::

## How to de-identify before uploading

- Ask Claude itself: "Before you process each file, remove the name, ID, and date of birth; use only a patient code".
- Or de-identify the files manually before pointing at the folder.
- Prefer **local scheduled tasks** over cloud Routines for sensitive data, because processing is more local.

## Additional safety rules

- **Claude can delete and create files.** It always asks for approval - do not auto-approve, read what it is about to do.
- **Conversation history is saved.** If sensitive information enters by mistake, delete the history or use Incognito.
- **Backup.** Work on a copy of the folder when experimenting, not on the single original.

## The legal side in Israel

The Privacy Protection Law (5741-1981, Amendment 13 of 2024) requires careful handling of identifying medical information. Any processing of identifying health data requires registration in the clinic's processing-activity registry. For full compliance - Claude for Enterprise with a BAA, or wait for an Israel-compliant track.

:::advanced
The distinction: files are read locally, but the prompt and the relevant content pass through Anthropic's servers. Even a local scheduled task sends information to the cloud when it queries the model. So upfront de-identification is the real layer of protection, not the "locality" of processing. For high-volume clinics - consider Enterprise with a BAA and zero-retention.
:::

---

**Clinical note:** Claude is a helper tool and does not replace your clinical judgment. Verify every recommendation against a trusted source before deciding on patient care.

You have finished the Claude Code track - the heart of the site. For those who want to go deeper into the terminal and developer tools, there is the **advanced track**.`,
  },
};

export default lesson;
