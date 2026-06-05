import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'code-vs-chat',
  track: 'claude-code',
  title: { he: 'Claude Code מול Chat - מה היכולת השונה', en: 'Claude Code vs Chat - What the Difference Really Is' },
  description: {
    he: 'ההסבר המרכזי של כל האתר: מה Claude Code יודע שה-Chat לא, ולמה זה משנה לרופא.',
    en: 'The central explanation of the whole site: what Claude Code can do that Chat cannot, and why it matters to a physician.',
  },
  duration: 8,
  updated: '2026-06-05',
  content: {
    he: `# Claude Code מול Chat

זה ההבדל הכי חשוב להבין באתר הזה. שניהם Claude, באותה אפליקציה - אבל הם עושים דברים שונים מהותית.

## Chat = שואל ועונה. Code = עושה.

ב-**Chat** אתה מנהל שיחה. Claude עונה בטקסט. אם אתה רוצה לשנות קובץ, אתה מעתיק את התשובה, פותח את הקובץ, ומדביק.

ב-**Code** (הטאב Code = Claude Code בממשק גרפי), Claude **פועל ישירות על הקבצים שלך**: קורא, עורך, יוצר, מריץ, ובודק את עצמו. אתה רק מאשר.

## דוגמה שממחישה את ההבדל

המשימה: "סדר את כל דוחות הפתולוגיה מהחודש לטבלה אחת".

- **ב-Chat:** תעלה כל PDF בנפרד, תבקש סיכום, תעתיק לטבלה ידנית. 30 קבצים = שעה.
- **ב-Code:** תצביע על התיקייה ותכתוב את הבקשה. Claude קורא את כל הקבצים, מוציא את השדות, יוצר קובץ Excel, ומראה לך diff לפני ששומר. 3 דקות.

## מה Code יודע לעשות שה-Chat לא

- **לקרוא ולערוך קבצים** בתיקייה שבחרת, וליצור חדשים.
- **לעבוד על פרויקט שלם** - הוא מבין את מבנה התיקייה והקשרים בין הקבצים.
- **להריץ פעולות ולבדוק תוצאות** - ולתקן אם משהו לא יצא נכון.
- **לזכור הקשר** בין שיחות (sessions) על אותו פרויקט.

:::beginner
זה לא "תכנות". אתה לא כותב קוד - אתה מבקש בעברית, ו-Claude עושה. ה"קוד" בשם הוא רק כי הכלי נולד למפתחים. רופא משתמש בו לקבצים, מסמכים ותמונות.
:::

## ומה לגבי Cowork?

Cowork ו-Code מריצים את אותו מנוע. ההבדל:
- **Cowork** - "מסור משימה, קבל תוצאה". פשוט יותר, פחות שליטה.
- **Code** - אתה רואה את הפרויקט, הקבצים, ה-diff, התצוגה המקדימה. יותר שליטה, מתאים למשימות מורכבות.

:::advanced
מתחת לשניהם רץ אותו agentic loop של Claude Code עם Opus 4.8: תכנון, ביצוע כלים (קריאת/כתיבת קבצים, הרצת פקודות), בדיקה, תיקון. הטרמינל זמין בטאב Code אבל אופציונלי לחלוטין - אפשר לעבוד שעות בלי לפתוח אותו.
:::

בשיעור הבא: סיור ב**טאב Code** עצמו.`,
    en: `# Claude Code vs Chat

This is the most important difference to understand on this site. Both are Claude, in the same app - but they do fundamentally different things.

## Chat = asks and answers. Code = does.

In **Chat** you hold a conversation. Claude answers in text. If you want to change a file, you copy the answer, open the file, and paste.

In **Code** (the Code tab = Claude Code in a GUI), Claude **acts directly on your files**: reads, edits, creates, runs, and checks itself. You just approve.

## An example that shows the difference

The task: "Organize all of this month's pathology reports into one table".

- **In Chat:** upload each PDF separately, ask for a summary, copy into a table by hand. 30 files = an hour.
- **In Code:** point at the folder and write the request. Claude reads all the files, extracts the fields, creates an Excel file, and shows you a diff before saving. 3 minutes.

## What Code can do that Chat cannot

- **Read and edit files** in the folder you chose, and create new ones.
- **Work on a whole project** - it understands the folder structure and relationships between files.
- **Run actions and check results** - and fix them if something came out wrong.
- **Remember context** across conversations (sessions) on the same project.

:::beginner
This is not "programming". You do not write code - you ask in plain language, and Claude does it. The "code" in the name is only because the tool was born for developers. A physician uses it for files, documents, and images.
:::

## And what about Cowork?

Cowork and Code run the same engine. The difference:
- **Cowork** - "hand off a task, get a result". Simpler, less control.
- **Code** - you see the project, the files, the diff, the preview. More control, suited to complex tasks.

:::advanced
Under both runs the same Claude Code agentic loop with Opus 4.8: plan, run tools (read/write files, run commands), check, correct. The terminal is available in the Code tab but entirely optional - you can work for hours without opening it.
:::

Next: a tour of the **Code tab** itself.`,
  },
};

export default lesson;
