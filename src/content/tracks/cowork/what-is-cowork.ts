import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'what-is-cowork',
  track: 'cowork',
  title: { he: 'מה זה Cowork ומתי להשתמש', en: 'What Cowork Is and When to Use It' },
  description: {
    he: 'הטאב שמריץ עבודה agentic בלי קוד ובלי טרמינל. ההבדל מ-Chat, ומתי הוא הכלי הנכון.',
    en: 'The tab that runs agentic work with no code and no terminal. The difference from Chat, and when it is the right tool.',
  },
  duration: 7,
  updated: '2026-06-05',
  content: {
    he: `# מה זה Cowork?

**Cowork** הוא הטאב האמצעי באפליקציית Claude Desktop. הוא מריץ את אותו מנוע agentic של Claude Code - היכולת לקרוא קבצים, לעבוד עליהם בכמה צעדים ולשמור תוצאה - אבל **בלי טרמינל ובלי קוד**. זו נקודת הכניסה המושלמת לרופא.

## ההבדל מ-Chat

ב-**Chat** אתה שואל ומקבל תשובה, ואז מעתיק ומדביק בעצמך. ב-**Cowork** אתה נותן משימה שלמה, Claude מבצע אותה בכמה צעדים ומחזיר **פלט מוכן**: טבלה, מסמך, סיכום.

| | Chat | Cowork |
|---|------|--------|
| מי מזיז את הקבצים | אתה | Claude |
| מספר צעדים | תשובה אחת | משימה רב-שלבית |
| מתאים ל | שאלה, ניסוח | עיבוד תיקייה, משימה ארוכה |

## מתי Cowork הוא הכלי הנכון

- יש לך **תיקייה** של מסמכים לעבד (דוחות, מאמרים, תמונות).
- המשימה לוקחת כמה דקות ואתה לא רוצה לשבת ולחכות.
- אתה רוצה **פלט מסודר**: טבלת Excel, מסמך Word, סיכום.

:::beginner
"agentic" פירושו ש-Claude לא רק עונה - הוא פועל: פותח קבצים, קורא, מסכם, כותב קובץ חדש. אתה מאשר לו גישה לתיקייה, והוא עושה את העבודה בשבילך.
:::

## הדברים שתפגוש ב-Cowork

- **Work in a Folder** - תיבת סימון שבה אתה מצביע על תיקייה לעבוד עליה (השיעור הבא).
- **Dispatch** - לשלוח משימה ארוכה לרקע ולהמשיך לעבוד.
- **Routines** - משימות שחוזרות לפי לוח זמנים.

:::advanced
Cowork הוא ה-GUI של אותו מנוע שמפעיל את Claude Code. ההבדל מהטאב Code: ב-Cowork הדגש על "מסור משימה וקבל תוצאה", בלי לראות את מבנה הפרויקט והקבצים. בטאב Code יש שליטה מלאה (עורך, diff, sessions). רופא יתחיל מ-Cowork ויעבור ל-Code כשירצה יותר שליטה.
:::`,
    en: `# What Is Cowork?

**Cowork** is the middle tab in the Claude Desktop app. It runs the same agentic engine as Claude Code - the ability to read files, work through several steps, and save a result - but **with no terminal and no code**. It is the perfect entry point for a physician.

## The difference from Chat

In **Chat** you ask and get an answer, then copy and paste yourself. In **Cowork** you give a whole task, Claude carries it out over several steps, and returns a **finished output**: a table, a document, a summary.

| | Chat | Cowork |
|---|------|--------|
| Who moves the files | You | Claude |
| Number of steps | One answer | A multi-step task |
| Good for | A question, drafting | Processing a folder, a long task |

## When Cowork is the right tool

- You have a **folder** of documents to process (reports, papers, images).
- The task takes a few minutes and you do not want to sit and wait.
- You want **organized output**: an Excel table, a Word document, a summary.

:::beginner
"agentic" means Claude does not just answer - it acts: it opens files, reads, summarizes, writes a new file. You grant it access to a folder, and it does the work for you.
:::

## What you will meet in Cowork

- **Work in a Folder** - a checkbox where you point at a folder to work on (the next lesson).
- **Dispatch** - send a long task to the background and keep working.
- **Routines** - tasks that recur on a schedule.

:::advanced
Cowork is the GUI of the same engine that powers Claude Code. The difference from the Code tab: Cowork emphasizes "hand off a task and get a result", without seeing the project structure and files. The Code tab gives full control (editor, diff, sessions). A physician starts with Cowork and moves to Code when they want more control.
:::`,
  },
};

export default lesson;
