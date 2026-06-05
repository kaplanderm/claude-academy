import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'the-code-tab',
  track: 'claude-code',
  title: { he: 'הטאב Code - sessions, תיקיית פרויקט וה-sidebar', en: 'The Code Tab - Sessions, Project Folder, and the Sidebar' },
  description: {
    he: 'סיור בממשק הגרפי של Claude Code: איך פותחים session, בוחרים תיקייה, ועובדים בכמה שיחות במקביל.',
    en: 'A tour of the Claude Code GUI: how to open a session, pick a folder, and work in several conversations in parallel.',
  },
  duration: 9,
  updated: '2026-06-05',
  content: {
    he: `# הטאב Code

הטאב השלישי באפליקציה. כאן Claude Code חי בממשק גרפי מלא - בלי שתצטרך טרמינל.

## המושג המרכזי: session

כל שיחה בטאב Code היא **session** עם:
- **תיקיית פרויקט משלה** - התיקייה ש-Claude עובד עליה.
- **היסטוריית שיחה משלה** - נפרדת מ-sessions אחרים.
- **שינויים משלה** - מה ש-Claude ערך בתוך הפרויקט הזה.

ב-**sidebar** (סרגל הצד) רואים את כל ה-sessions ואפשר להריץ כמה במקביל. למשל: session אחד לסקירת דוחות, אחר לכתיבת חומרי הסבר - בלי שיתערבבו.

## איך מתחילים session

1. בטאב Code, לחץ "session חדש".
2. בחר את **תיקיית הפרויקט** (התיקייה שתרצה ש-Claude יעבוד בה).
3. כתוב את הבקשה בעברית. זהו.

:::beginner
"פרויקט" נשמע טכני, אבל זו פשוט תיקייה במחשב שלך: תיקיית הדוחות, תיקיית המאמרים, תיקיית התמונות. אתה בוחר אותה, ו-Claude עובד רק בתוכה.
:::

## מה יש במסך

- **sidebar** - רשימת ה-sessions, מקובצים לפי פרויקט. אפשר לסנן לפי סטטוס.
- **אזור השיחה** - שם אתה כותב ו-Claude עונה ופועל.
- **פאנלים** - עורך קבצים, diff, ותצוגה מקדימה (בשיעור הבא).
- **side chat** (קיצור Cmd+;) - לשאלה צדדית בלי להעמיס הקשר על השיחה הראשית.

## מצבי תצוגה

אפשר לבחור כמה מהפעילות של Claude לראות: Verbose (הכול), Normal, או Summary (רק עיקרי). מתחילים? Normal או Summary נוחים יותר.

:::advanced
sessions במקביל מבודדים זה מזה (כל אחד עם תיקייה והקשר משלו), כך שאפשר להריץ כמה משימות כבדות בלי בלבול. ב-Opus 4.8 sessions ארוכים נשארים על המסלול עם פחות "כיווצי הקשר". בטאב Code יש גם terminal מובנה ו-PR monitoring - אבל אלה למתקדמים ואופציונליים לחלוטין.
:::

בשיעור הבא: **עבודה עם קבצים** - עורך, diff חזותי ותצוגה מקדימה.`,
    en: `# The Code Tab

The third tab in the app. Here Claude Code lives in a full graphical interface - with no terminal required.

## The key concept: a session

Every conversation in the Code tab is a **session** with:
- **Its own project folder** - the folder Claude works on.
- **Its own chat history** - separate from other sessions.
- **Its own changes** - what Claude edited inside this project.

In the **sidebar** you see all your sessions and can run several in parallel. For example: one session for reviewing reports, another for writing handouts - without them mixing.

## How to start a session

1. In the Code tab, click "new session".
2. Pick the **project folder** (the folder you want Claude to work in).
3. Write the request in plain language. That is it.

:::beginner
"Project" sounds technical, but it is simply a folder on your computer: the reports folder, the papers folder, the images folder. You pick it, and Claude works only inside it.
:::

## What is on the screen

- **sidebar** - the list of sessions, grouped by project. You can filter by status.
- **conversation area** - where you write and Claude answers and acts.
- **panels** - file editor, diff, and preview (next lesson).
- **side chat** (shortcut Cmd+;) - for a side question without loading context onto the main conversation.

## View modes

You can choose how much of Claude's activity to see: Verbose (everything), Normal, or Summary (just the essentials). Just starting? Normal or Summary are more comfortable.

:::advanced
Parallel sessions are isolated from each other (each with its own folder and context), so you can run several heavy tasks without confusion. On Opus 4.8 long sessions stay on track with fewer "compactions". The Code tab also has a built-in terminal and PR monitoring - but those are advanced and entirely optional.
:::

Next: **working with files** - editor, visual diff, and preview.`,
  },
};

export default lesson;
