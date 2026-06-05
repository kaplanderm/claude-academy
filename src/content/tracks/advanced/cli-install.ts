import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'cli-install',
  track: 'advanced',
  title: { he: 'התקנת ה-CLI (שורת פקודה)', en: 'Installing the CLI (Command Line)' },
  description: {
    he: 'למסלול המתקדם בלבד: התקנת Claude Code כ-CLI. רופא מתחיל לא צריך את זה - הכול זמין בטאב Code.',
    en: 'Advanced track only: installing Claude Code as a CLI. A beginner physician does not need this - it is all in the Code tab.',
  },
  duration: 7,
  updated: '2026-06-05',
  content: {
    he: `# התקנת ה-CLI

:::beginner
שים לב: השיעור הזה אופציונלי ולמתקדמים. אם אתה רופא בלי רקע טכני - אתה לא צריך טרמינל. כל מה שכאן זמין בממשק גרפי דרך הטאב Code. המשך הלאה רק אם אתה סקרן או עובד על Linux.
:::

## מתי כן צריך CLI

- אתה על **Linux** (אין אפליקציית Desktop).
- אתה רוצה לשלב את Claude Code בסקריפטים ובאוטומציה ברמת מערכת.
- אתה מפתח ומעדיף לעבוד מהטרמינל.

## ההתקנה

צריך Node.js מותקן. ואז:

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

ולהפעלה, נכנסים לתיקיית הפרויקט ומריצים:

\`\`\`bash
cd my-project
claude
\`\`\`

בפעם הראשונה תתבקש להתחבר עם חשבון Claude שלך (או עם API key).

## מה ההבדל מהטאב Code

ה-CLI וה-Code tab מריצים את אותו Claude Code. ההבדל הוא רק הממשק:
- **Code tab** - גרפי, עם sidebar, עורך, diff חזותי ותצוגה מקדימה.
- **CLI** - טקסטואלי בטרמינל, מהיר למי שרגיל, וזמין על Linux ובשרתים.

:::advanced
ב-CLI אפשר לשלב hooks, להריץ ב-headless mode לאוטומציה, ולחבר ל-CI. רוב היכולות זהות לטאב Code. הפקודות הפנימיות (slash commands כמו /init, /review) זהות בשני הממשקים.
:::

בשיעור הבא: **פקודות בסיסיות בטרמינל**.`,
    en: `# Installing the CLI

:::beginner
Note: this lesson is optional and for advanced users. If you are a physician with no technical background, you do not need a terminal. Everything here is available in a graphical interface through the Code tab. Continue only if you are curious or work on Linux.
:::

## When you do need the CLI

- You are on **Linux** (no Desktop app).
- You want to integrate Claude Code into scripts and system-level automation.
- You are a developer and prefer working from the terminal.

## The installation

You need Node.js installed. Then:

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

And to run, enter the project folder and run:

\`\`\`bash
cd my-project
claude
\`\`\`

The first time you will be asked to sign in with your Claude account (or with an API key).

## How it differs from the Code tab

The CLI and the Code tab run the same Claude Code. The only difference is the interface:
- **Code tab** - graphical, with a sidebar, editor, visual diff, and preview.
- **CLI** - text-based in the terminal, fast for the experienced, and available on Linux and servers.

:::advanced
In the CLI you can integrate hooks, run in headless mode for automation, and connect to CI. Most capabilities are identical to the Code tab. The internal commands (slash commands like /init, /review) are the same in both interfaces.
:::

Next: **basic terminal commands**.`,
  },
};

export default lesson;
