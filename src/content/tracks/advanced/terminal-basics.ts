import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'terminal-basics',
  track: 'advanced',
  title: { he: 'פקודות ומקשי קיצור בטרמינל', en: 'Terminal Commands and Shortcuts' },
  description: {
    he: 'למתקדמים: הפקודות והקיצורים השימושיים ב-Claude Code מהטרמינל, וה-slash commands.',
    en: 'Advanced: the useful commands and shortcuts in Claude Code from the terminal, and the slash commands.',
  },
  duration: 8,
  updated: '2026-06-05',
  content: {
    he: `# פקודות ומקשי קיצור

:::beginner
שוב, תזכורת: זה למתקדמים. ה-slash commands כאן (/init, /review וכו') זמינים גם בטאב Code הגרפי - אתה לא חייב טרמינל בשבילם.
:::

## slash commands שימושיים

- **/init** - סורק את הפרויקט ויוצר קובץ הנחיות (CLAUDE.md) מותאם.
- **/review** - סקירת קוד / תוכן ומציאת בעיות.
- **/simplify** - מפשט ומשפר קובץ קיים.
- **/model** - החלפת הדגם (Opus / Sonnet / Haiku).
- **/memory** - ניהול הזיכרון הקבוע של הפרויקט.
- **/fast** - הפעלת fast mode להאצת קצב הפלט (Opus 4.8).

## פקודות ענן

- **/ultraplan** - מתכננת משימה מורכבת לפני שמתחילים.
- **/code-review ultra** - סקירה מעמיקה בענן של ענף או PR (שם ישן: /ultrareview).

## מקשי קיצור נפוצים

- **Esc** - לעצור את Claude באמצע פעולה.
- **Ctrl+C** - יציאה.
- חצים למעלה/למטה - היסטוריית פקודות.

## Permission modes

אפשר לשלוט ברמת האוטונומיה: לבקש אישור על כל פעולה, או לאשר אוטומטית פעולות בטוחות. למשימות עם נתונים רגישים - העדף מצב "ask before running".

:::advanced
ב-Opus 4.8 effort levels (low/medium/high) עם high כברירת מחדל. אפשר להגדיר ב-headless mode (claude -p "prompt") לאוטומציה. Dynamic Workflows מאפשרת לתכנן ולהריץ מאות תת-סוכנים במקביל ב-session אחד - שימושי למיגרציות גדולות.
:::

בשיעור הבא: **כלי עוצמה** - MCP, hooks, API ו-SDK.`,
    en: `# Commands and Shortcuts

:::beginner
Again, a reminder: this is for advanced users. The slash commands here (/init, /review, etc.) are also available in the graphical Code tab - you do not need a terminal for them.
:::

## Useful slash commands

- **/init** - scans the project and creates a tailored instructions file (CLAUDE.md).
- **/review** - reviews code / content and finds issues.
- **/simplify** - simplifies and improves an existing file.
- **/model** - switches the model (Opus / Sonnet / Haiku).
- **/memory** - manages the project's persistent memory.
- **/fast** - enables fast mode to speed up output (Opus 4.8).

## Cloud commands

- **/ultraplan** - plans a complex task before starting.
- **/code-review ultra** - a deep cloud review of a branch or PR (old name: /ultrareview).

## Common shortcuts

- **Esc** - stop Claude mid-action.
- **Ctrl+C** - exit.
- Up/Down arrows - command history.

## Permission modes

You can control the level of autonomy: ask for approval on every action, or auto-approve safe actions. For tasks with sensitive data, prefer "ask before running" mode.

:::advanced
On Opus 4.8, effort levels (low/medium/high) with high as the default. You can run in headless mode (claude -p "prompt") for automation. Dynamic Workflows lets you plan and run hundreds of subagents in parallel in a single session - useful for large migrations.
:::

Next: **power tools** - MCP, hooks, API, and SDK.`,
  },
};

export default lesson;
