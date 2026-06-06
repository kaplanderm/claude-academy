import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'what-is-cowork',
  track: 'cowork',
  title: { he: 'מה זה Cowork ומתי להשתמש', en: 'What Cowork Is and When to Use It' },
  description: {
    he: 'עבודה סוכנותית בלי קוד, ההבדל מהטאב Chat, ומתי זה הכלי הנכון.',
    en: 'Agentic work with no code. The difference from Chat, and when it is the right tool.',
  },
  duration: 7,
  updated: '2026-06-06',
  content: {
    he: `# מה זה Cowork ומתי להשתמש

בסוף השיעור תדע מתי לשלוח משימה לטאב \`Cowork\` במקום לשאול בטאב \`Chat\`, ולמה ההבדל חוסך לך זמן.

## מה תלמד כאן

- תוכל להבחין בין שאלה רגילה בטאב \`Chat\` לבין משימה רב-שלבית שמתאימה לטאב \`Cowork\`.
- תוכל לזהות מתי אתה מצפה לקובץ פלט מוכן, ולא רק לתשובה על המסך.
- תוכל להימנע מהטעות הנפוצה של שליחת שאלה קצרה לכלי שנבנה למשימות ארוכות.

## למה זה חשוב לך במרפאה

נניח שיש לך תיקייה עם עשרות דוחות פתולוגיה, או ערימת מכתבי הפניה, או סיכומי יום שצריך לאחד לטבלה אחת. בטאב \`Chat\` היית מעלה כל קובץ בנפרד ומבקש סיכום אחד-אחד. הטאב \`Cowork\` מתוכנן בדיוק למצב הזה: אתה נותן משימה אחת על תיקייה שלמה, ומקבל קובץ מסודר בחזרה. במקום שעה של העתקה והדבקה, אתה מקבל תוצר מוכן בזמן שאתה בודק מטופלים.

## ההסבר בפשטות

המילה המרכזית כאן היא סוכנותית (agentic), כלומר Claude לא רק עונה לך אלא מבצע משימה רב-שלבית ומחזיר תוצר. הוא קורא קבצים, מוציא נתונים, מסדר אותם, ושומר קובץ, כלומר שורה של פעולות ולא תשובה אחת בלבד.

חשוב על זה כמו על הבדל בין שתי בקשות לעוזר. בטאב \`Chat\` אתה שואל שאלה ומקבל תשובה מיד, כמו לשאול עמית בפרוזדור. בטאב \`Cowork\` אתה מוסר משימה לעוזר שעובד עליה ברקע בזמן שאתה ממשיך לקבל מטופלים, ומניח על שולחנך תיקייה גמורה כשהוא מסיים.

## ההבדל בטבלה

| מאפיין | Chat | Cowork |
|---|---|---|
| מה הוא עושה | עונה על שאלה | מבצע משימה רב-שלבית |
| התוצר | טקסט על המסך שאתה מעתיק | קובץ פלט מוכן, טבלה או מסמך |
| העבודה שלך | להעתיק ולהדביק בעצמך | להצביע על תיקייה ולחכות |
| מתאים ל | שאלה קצרה, ניסוח, הסבר | קבצים רבים, משימה ארוכה |
| משך | מיידי | שניות עד דקות, גם ברקע |

## דוגמה מהמרפאה, צעד אחר צעד

נניח שיש לך תיקיית דמו עם כמה דוחות פתולוגיה ללא פרטים מזהים, ואתה רוצה טבלה אחת מסכמת.

1. פתח את האפליקציה \`Claude Desktop\` ועבור לטאב \`Cowork\`.
2. סמן בתחתית את התיבה \`Work in a Folder\` ובחר את תיקיית הדמו.
3. אשר לכלי לקרוא את התיקייה.
4. הדבק את הבקשה הבאה בעברית רגילה ושלח אותה:

\`\`\`
קרא את כל דוחות הפתולוגיה בתיקייה הזו.
לכל דוח הוצא: תאריך, סוג הנגע, אבחנה, מצב שוליים.
שמור טבלה מסכמת כקובץ Excel באותה תיקייה.
\`\`\`

מה שתראה: הכלי עובר על הקבצים בזה אחר זה, ובסוף מניח בתיקייה קובץ אקסל (Excel) מסודר, בלי שהעתקת אפילו שורה אחת. הדוגמה המלאה, עם כל השדות וכללי הבטיחות, נמצאת בשיעור הבא.

## נסה בעצמך

קח שלושה קבצי טקסט לא רגישים, למשל הערות על נושא לימודי, הצבע עליהם בטאב \`Cowork\`, ובקש: "אחד את שלושת הקבצים לסיכום אחד ושמור אותו כקובץ נפרד". זה לוקח פחות משלוש דקות ומראה לך את כל ההבדל מהטאב \`Chat\`.

## טעויות נפוצות

- **שולחים שאלה של שורה אחת לטאב \`Cowork\`.** אם השאלה היא מה המינון של תרופה מסוימת, הטאב \`Chat\` עונה מהר יותר. הפתרון: שמור את הטאב \`Cowork\` למשימות עם קבצים או צעדים רבים.
- **מצפים לתשובה על המסך במקום לקובץ.** בטאב \`Cowork\` התוצר הוא קובץ בתיקייה, ולא טקסט להעתקה. הפתרון: ציין בבקשה במפורש "שמור כקובץ".
- **מצביעים על תיקייה עם פרטים מזהים.** הפתרון: עבוד תמיד על נתוני דמו או נתונים מעומעמים, ונרחיב על כך בהמשך.

## נקודות לזכירה

- בטאב \`Chat\` שואלים ומעתיקים, ובטאב \`Cowork\` נותנים משימה ומקבלים קובץ מוכן.
- עבודה סוכנותית פירושה שהכלי מבצע שורת פעולות ומחזיר תוצר, ולא תשובה בודדת.
- שאלה קצרה עדיף לשאול בטאב \`Chat\`, ומשימה ארוכה על קבצים שייכת לטאב \`Cowork\`.

## מה הלאה

בשיעור הבא, ["Work in a Folder"](/academy/cowork/work-in-a-folder), תלמד את הפעולה המדויקת שמצביעה על תיקייה ומחזירה קובץ פלט.`,
    en: `# What Cowork Is and When to Use It

By the end of this lesson you will know when to send a task to Cowork instead of asking in Chat, and why the difference saves you time.

## What You Will Learn Here

- You will be able to tell a regular Chat question apart from a multi-step task that fits Cowork.
- You will be able to recognize when you expect a finished output file, not just an answer on the screen.
- You will be able to avoid the common mistake of sending a short question to a tool built for long tasks.

## Why It Matters in Your Clinic

Suppose you have a folder with dozens of pathology reports, or a stack of referral letters, or daily summaries that need to be merged into one table. In Chat you would upload each file separately and ask for a summary one at a time. The Cowork tab is designed for exactly this: you give one task over a whole folder, and you get an organized file back. Instead of an hour of copy-paste, you get a finished output while you see patients.

## The Plain Explanation

The key word here is agentic. In plain language: Claude does not just answer you, it carries out a multi-step task and hands back an output. It reads files, extracts data, organizes it, and saves a file - a series of actions, not a single answer.

Think of it as the difference between two requests to an assistant. In Chat you ask a question and get an answer right away, like asking a colleague in the hallway. In Cowork you hand a task to an assistant who works on it in the background while you keep seeing patients, and places a finished folder on your desk when done.

## The Difference in a Table

| Aspect | Chat | Cowork |
|---|---|---|
| What it does | answers a question | carries out a multi-step task |
| The output | text on screen you copy | a finished output file, table or document |
| Your work | copy and paste yourself | point at a folder and wait |
| Best for | a short question, phrasing, explanation | many files, a long task |
| Duration | immediate | seconds to minutes, even in the background |

## A Clinic Example, Step by Step

Suppose you have a demo folder with a few pathology reports that hold no identifying details, and you want one summary table.

1. Open the Claude Desktop app and click the Cowork tab.
2. At the bottom, tick the **"Work in a Folder"** box and pick the demo folder.
3. Grant Claude permission to read in the folder.
4. Paste the request below in plain language and send:

\`\`\`
Read all the pathology reports in this folder.
For each report extract: date, lesion type, diagnosis, margin status.
Save a summary table as an Excel file in the same folder.
\`\`\`

What you will see: Claude goes through the files one after another, and at the end places an organized Excel file in the folder, without you copying a single line. The full example, with all the fields and safety rules, is in the next lesson.

## Try It Yourself

Take three non-sensitive text files, for example notes on a study topic, point at them in Cowork, and ask: "Merge the three files into one summary and save it as a separate file." It takes under three minutes and shows you the whole difference from Chat.

## Common Mistakes

- **Sending a one-line question to Cowork.** If the question is about the dose of a given drug, Chat answers faster. The fix: save Cowork for tasks with many files or steps.
- **Expecting an answer on screen instead of a file.** In Cowork the output is a file in the folder, not text to copy. The fix: state explicitly in your request "save as a file".
- **Pointing at a folder with identifying details.** The fix: always work on demo data or de-identified data, we expand on this later.

## Points to Remember

- In Chat you ask and copy, in Cowork you give a task and get a finished file.
- agentic means Claude carries out a series of actions and returns an output, not a single answer.
- A short question is better asked in Chat, a long task over files belongs in Cowork.

## What Is Next

In the next lesson, ["Work in a Folder"](/academy/cowork/work-in-a-folder), you will learn the exact action that points at a folder and returns an output file.`,
  },
};

export default lesson;
