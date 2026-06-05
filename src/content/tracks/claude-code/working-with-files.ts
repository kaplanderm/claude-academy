import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'working-with-files',
  track: 'claude-code',
  title: { he: 'עבודה עם קבצים - עורך, diff חזותי ותצוגה מקדימה', en: 'Working With Files - Editor, Visual Diff, and Preview' },
  description: {
    he: 'איך לראות מה Claude עומד לשנות, לאשר או לדחות, ולראות תצוגה מקדימה של HTML ו-PDF.',
    en: 'How to see what Claude is about to change, approve or reject, and preview HTML and PDFs.',
  },
  duration: 8,
  updated: '2026-06-05',
  content: {
    he: `# עבודה עם קבצים

זה היתרון הגדול של הטאב Code על Cowork: אתה **רואה** מה קורה לקבצים, ושולט בכל שינוי.

## עורך הקבצים המובנה

אפשר לפתוח כל קובץ בפרויקט ולראות אותו בתוך האפליקציה. אם אתה רוצה תיקון קטן בעצמך - עורך אותו ישירות, בלי לצאת לתוכנה אחרת.

## diff חזותי - הביקורת לפני האישור

כש-Claude משנה קובץ, הוא מציג **diff**: ירוק למה שנוסף, אדום למה שהוסר. אתה רואה בדיוק מה עומד להשתנות, ומאשר או דוחה.

:::beginner
diff זו פשוט תצוגה של "לפני ואחרי". במקום לסמוך על Claude בעיניים עצומות, אתה רואה כל שינוי ומאשר אותו. זה הופך את העבודה לבטוחה.
:::

זה קריטי לרופא: לפני ש-Claude כותב קובץ סיכום או מעדכן טבלה, אתה מוודא שהתוכן נכון.

## תצוגה מקדימה (app preview)

הטאב Code מציג **תצוגה מקדימה** של:
- **HTML** - דף הסבר למטופל שביקשת, מעוצב, נראה מיד.
- **PDF** - לראות מסמך בלי לצאת מהאפליקציה.

דוגמה: "צור דף הסבר למטופל על טיפול לאחר כריתת Mohs, עברית, מעוצב ונקי" - ותראה את התוצאה בתצוגה מקדימה, תבקש תיקונים, ותוריד כשמרוצה.

## זרימת עבודה טיפוסית לרופא

1. פותח session על תיקיית הפרויקט.
2. מבקש משימה (טבלה / מסמך / דף הסבר).
3. Claude עובד, מציג diff / תצוגה מקדימה.
4. אתה בודק, מבקש תיקון אם צריך, מאשר.
5. הקובץ נשמר בתיקייה.

:::advanced
ה-diff viewer בנוי לטפל גם בשינויים גדולים (changesets). אפשר לבקש מ-Claude לעבוד עם git worktrees לבידוד שינויים, ולהשתמש ב-side chat (Cmd+;) כדי לשאול שאלה בלי לזהם את ההקשר של המשימה. כל אלה אופציונליים - העבודה הבסיסית לא דורשת אותם.
:::

בשיעור הבא: **Connectors** - לחבר את Claude ל-Drive ו-Gmail.`,
    en: `# Working With Files

This is the big advantage of the Code tab over Cowork: you **see** what happens to the files, and control every change.

## The built-in file editor

You can open any file in the project and view it inside the app. If you want a small fix yourself, edit it directly, without switching to another program.

## Visual diff - the review before approval

When Claude changes a file, it shows a **diff**: green for what was added, red for what was removed. You see exactly what is about to change, and approve or reject.

:::beginner
A diff is simply a "before and after" view. Instead of trusting Claude blindly, you see every change and approve it. This makes the work safe.
:::

This is critical for a physician: before Claude writes a summary file or updates a table, you confirm the content is correct.

## Preview (app preview)

The Code tab shows a **preview** of:
- **HTML** - a patient handout you asked for, styled, shown immediately.
- **PDF** - view a document without leaving the app.

Example: "Create a patient handout on post-Mohs care, Hebrew, styled and clean" - and you see the result in preview, ask for fixes, and download when satisfied.

## A typical physician workflow

1. Open a session on the project folder.
2. Ask for a task (table / document / handout).
3. Claude works, shows a diff / preview.
4. You review, ask for a fix if needed, approve.
5. The file is saved to the folder.

:::advanced
The diff viewer is built to handle large changesets too. You can ask Claude to work with git worktrees to isolate changes, and use side chat (Cmd+;) to ask a question without polluting the task context. All of these are optional - basic work does not require them.
:::

Next: **Connectors** - linking Claude to Drive and Gmail.`,
  },
};

export default lesson;
