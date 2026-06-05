import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'dispatch-and-routines',
  track: 'cowork',
  title: { he: 'Dispatch ו-Routines - רקע ואוטומציה מתוזמנת', en: 'Dispatch and Routines - Background and Scheduled Automation' },
  description: {
    he: 'לשלוח משימה ארוכה לרקע ולהמשיך לעבוד, ולהריץ משימות שחוזרות לבד לפי לוח זמנים.',
    en: 'Send a long task to the background and keep working, and run recurring tasks automatically on a schedule.',
  },
  duration: 8,
  updated: '2026-06-05',
  content: {
    he: `# Dispatch ו-Routines

שתי יכולות שהופכות את Cowork מ"עוזר שמחכים לו" ל"עוזר שעובד בשבילך ברקע".

## Dispatch - משימה ארוכה ברקע

נניח שצריך לסכם 40 מאמרים. זה יכול לקחת 15-20 דקות. במקום לשבת מול המסך, **Dispatch** שולח את המשימה לסוכן שעובד ברקע, ואתה ממשיך לעבוד בשיחה אחרת. כשהוא מסיים, התוצאה מחכה לך.

\`\`\`
Dispatch:
קרא את 40 המאמרים שבתיקייה, סנן למחקרים מבוקרים (RCT) על dupilumab
באטופיק דרמטיטיס מעל גיל 65, והוצא טבלה: מחבר, שנה, N, תוצא ראשי, זמן מעקב.
בסוף כתוב פסקה של 5 שורות על המגמה הכללית.
\`\`\`

:::beginner
תחשוב על Dispatch כמו לתת משימה לעוזר ולצאת לסבב מטופלים. כשתחזור, העבודה מוכנה.
:::

## Routines - משימות שחוזרות לבד

**Routine** היא משימה שרצה לפי לוח זמנים (יומי, שבועי) או טריגר, בלי שתפעיל אותה ידנית. מצוין לשגרות מרפאה.

דוגמה - **סקירת בוקר** של דוחות שהגיעו בלילה:

\`\`\`
כל בוקר ב-7:30:
סרוק את תיבת הדוא"ל לכל דוח פתולוגיה שהגיע מ-18:00 אתמול עד 6:00 היום.
לכל דוח: שם חומר, אבחנה, ודחיפות (דחוף / בינוני / שגרתי).
שלח לי טבלה מסודרת לפי דחיפות במייל עם הכותרת "סקירת בוקר".
\`\`\`

אתה פותח את המייל ב-8:00 והכול כבר מסודר.

## הבחנה חשובה

- **Routines** רצות בענן של Anthropic.
- **Scheduled tasks מקומיים** (בטאב Code / Desktop) רצים על המחשב שלך - עדיף לנתונים רגישים, כי העיבוד מקומי יותר.

:::advanced
Routines בונות חבילה של פרומפט + הקשר + connectors (כמו Gmail) ומריצות אותה בלי session פעיל. אפשר לשרשר כמה Dispatch במקביל באותה שיחת Cowork. ודא שהשימוש מתועד ברישום פעילות העיבוד של המרפאה לפי חוק הגנת הפרטיות.
:::

בשיעור הבא: **תרחישים רפואיים** מלאים ל-Cowork.`,
    en: `# Dispatch and Routines

Two capabilities that turn Cowork from "an assistant you wait for" into "an assistant that works for you in the background".

## Dispatch - a long task in the background

Suppose you need to summarize 40 papers. That can take 15-20 minutes. Instead of sitting at the screen, **Dispatch** sends the task to an agent running in the background, and you keep working in another conversation. When it finishes, the result is waiting for you.

\`\`\`
Dispatch:
Read the 40 papers in the folder, filter to randomized trials (RCTs) on dupilumab
in atopic dermatitis over age 65, and output a table: author, year, N, primary outcome,
follow-up time. At the end write a 5-line paragraph on the overall trend.
\`\`\`

:::beginner
Think of Dispatch like handing a task to an assistant and going to see patients. When you return, the work is done.
:::

## Routines - tasks that recur by themselves

A **Routine** is a task that runs on a schedule (daily, weekly) or a trigger, without you starting it manually. Great for clinic routines.

Example - a **morning review** of reports that arrived overnight:

\`\`\`
Every morning at 7:30:
Scan the inbox for any pathology report that arrived from 18:00 yesterday to 6:00 today.
For each report: specimen, diagnosis, and urgency (urgent / medium / routine).
Email me a table sorted by urgency with the subject "Morning review".
\`\`\`

You open the email at 8:00 and everything is already organized.

## An important distinction

- **Routines** run in Anthropic's cloud.
- **Local scheduled tasks** (in the Code / Desktop tab) run on your computer - better for sensitive data, because processing is more local.

:::advanced
Routines bundle a prompt + context + connectors (like Gmail) and run it with no active session. You can chain several Dispatches in parallel in one Cowork conversation. Make sure the usage is recorded in the clinic's processing registry under privacy law.
:::

Next: full **dermatology scenarios** for Cowork.`,
  },
};

export default lesson;
