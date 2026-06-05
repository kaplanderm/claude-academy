import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'derm-scenarios',
  track: 'claude-code',
  title: { he: 'תרחישים רפואיים מלאים בטאב Code', en: 'Full Dermatology Scenarios in the Code Tab' },
  description: {
    he: 'שלוש משימות מלאות מהמרפאה, מתחילתן ועד הפלט - בטאב Code, בלי טרמינל.',
    en: 'Three complete clinic tasks, start to output - in the Code tab, with no terminal.',
  },
  duration: 10,
  updated: '2026-06-05',
  content: {
    he: `# תרחישים רפואיים מלאים בטאב Code

הטאב Code מתאים כשרוצים שליטה ותצוגה מקדימה. כל אלה בלי טרמינל. זכור: נתונים מעומעמים בלבד בחשבון רגיל.

## תרחיש 1 - דוחות פתולוגיה לטבלת Excel עם בקרה

1. session חדש על תיקיית הדוחות.
2. הבקשה:

\`\`\`
קרא את כל ה-PDF בתיקייה. לכל דוח: תאריך, חומר, אבחנה, שוליים, וצורך במעקב.
צור קובץ Excel pathology.xlsx. הראה לי diff לפני שמירה.
בסוף סכם: כמה ממאיר, כמה לא-ודאי, כמה שפיר.
\`\`\`

3. בדוק את ה-diff, אשר, הורד את הקובץ.

## תרחיש 2 - דף הסבר מעוצב למטופל

\`\`\`
צור דף הסבר למטופל על קרטוזיס אקטינית: מה זה, למה מטפלים, אפשרויות טיפול,
ומתי לחזור. עברית, שפה פשוטה, עמוד אחד, מעוצב נקי כ-HTML.
\`\`\`

ראה בתצוגה המקדימה, בקש תיקונים ("הגדל כותרות", "הוסף סעיף הגנה מהשמש"), הורד כ-PDF.

## תרחיש 3 - סקירת ספרות מובנית

\`\`\`
בתיקייה 40 מאמרים. צור מסמך סקירה: מבנה מוצע, חלוקה ל-buckets נושאיים,
טבלת מאמרים (מחבר, שנה, N, תוצא, מסקנה), ו-5 פערים שדורשים מחקר.
שמור כ-Word. הראה לי טיוטה לפני סופי.
\`\`\`

:::beginner
שים לב לדפוס החוזר: פותחים session על תיקייה, מבקשים בעברית, בודקים diff/תצוגה מקדימה, מאשרים. אותו דבר בכל פעם - רק הבקשה משתנה.
:::

## אזהרות מעשיות

- **Claude מבקש אישור** לפני כתיבה/מחיקה. קרא לפני שאתה מאשר.
- **בקש UTF-8** לפלט בעברית.
- **בדוק את התוכן** - אמת כל סיכום קליני מול המקור לפני שימוש במטופל.

:::advanced
למשימות חוזרות אפשר להפוך את הזרימה ל-Routine או scheduled task מקומי. ב-Opus 4.8 אפשר לבקש "effort high" למשימות מורכבות (זו ברירת המחדל) או "/fast" כשרוצים מהירות. Dynamic Workflows מאפשרת לפצל משימת-ענק למאות תת-סוכנים - שימושי למיגרציה של מאות קבצים.
:::

בשיעור האחרון של המסלול: **פרטיות והגנה על נתוני מטופלים** - חובה לקרוא.`,
    en: `# Full Dermatology Scenarios in the Code Tab

The Code tab fits when you want control and a preview. All of these with no terminal. Remember: de-identified data only on a regular account.

## Scenario 1 - pathology reports into an Excel table, with review

1. New session on the reports folder.
2. The request:

\`\`\`
Read all the PDFs in the folder. For each report: date, specimen, diagnosis, margins, and follow-up need.
Create an Excel file pathology.xlsx. Show me a diff before saving.
At the end summarize: how many malignant, uncertain, benign.
\`\`\`

3. Review the diff, approve, download the file.

## Scenario 2 - a styled patient handout

\`\`\`
Create a patient handout on actinic keratosis: what it is, why we treat, treatment options,
and when to return. Hebrew, plain language, one page, clean styled HTML.
\`\`\`

See it in preview, ask for fixes ("enlarge the headings", "add a sun-protection section"), download as PDF.

## Scenario 3 - a structured literature review

\`\`\`
The folder has 40 papers. Create a review document: proposed structure, thematic buckets,
a paper table (author, year, N, outcome, conclusion), and 5 gaps that need research.
Save as Word. Show me a draft before the final.
\`\`\`

:::beginner
Notice the repeating pattern: open a session on a folder, ask in plain language, review the diff/preview, approve. The same every time - only the request changes.
:::

## Practical warnings

- **Claude asks for approval** before writing/deleting. Read before you approve.
- **Ask for UTF-8** for Hebrew output.
- **Check the content** - verify every clinical summary against the source before using it with a patient.

:::advanced
For recurring tasks you can turn the flow into a Routine or a local scheduled task. On Opus 4.8 you can ask for "effort high" for complex tasks (this is the default) or "/fast" when you want speed. Dynamic Workflows lets you split a huge task into hundreds of subagents - useful for migrating hundreds of files.
:::

In the last lesson of the track: **privacy and protecting patient data** - required reading.`,
  },
};

export default lesson;
