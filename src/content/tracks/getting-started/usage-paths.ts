import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'usage-paths',
  track: 'getting-started',
  title: { he: 'דרכי השימוש - איפה מריצים את Claude', en: 'Ways to Use Claude - Where You Run It' },
  description: {
    he: 'אתר, אפליקציית Desktop, מובייל - מה ההבדל ומה מתאים לרופא. והיכרות עם שלושת הטאבים.',
    en: 'Web, Desktop app, mobile - the differences and what fits a physician. Plus an intro to the three tabs.',
  },
  duration: 8,
  updated: '2026-06-05',
  content: {
    he: `# איפה אפשר להשתמש ב-Claude?

יש כמה דרכים. לרופא, המומלצת היא **אפליקציית Claude Desktop**, ועליה נשען כל האתר הזה.

## הדרכים העיקריות

- **אתר (claude.ai)** - נפתח בדפדפן, בלי התקנה. מצוין לשיחה מהירה. מוגבל: אין גישה לקבצים במחשב.
- **אפליקציית Desktop (Mac/Windows)** - תוכנה שמתקינים על המחשב. כאן נמצא הכוח האמיתי לרופא: שלושת הטאבים (Chat, Cowork, Code). דורשת מנוי בתשלום (Pro ומעלה).
- **מובייל (iOS/Android)** - לשאלות בדרכים ולצילום תמונה לניתוח. מסך קטן, פחות מתאים לעבודה מסודרת.

:::beginner
"להתקין אפליקציה" זה בדיוק כמו להתקין כל תוכנה אחרת: מורידים מ-claude.ai/download, לוחצים התקנה, ומתחברים עם החשבון. אין שום שלב טכני.
:::

## הלב: שלושת הטאבים של Claude Desktop

אפליקציית Desktop היא אפליקציה אחת עם שלושה טאבים בראש המסך:

| טאב | בשביל מה | דוגמה |
|------|----------|-------|
| **Chat** | שיחה רגילה - שאלה ותשובה | "נסח מכתב הפניה" |
| **Cowork** | עבודה agentic בלי קוד, על תיקייה שלמה | "סכם את כל הדוחות בתיקייה לטבלה" |
| **Code** | Claude Code בממשק גרפי | פרויקטים, קבצים, תצוגה מקדימה |

ההבדל המרכזי: ב-**Chat** אתה מעתיק ומדביק בעצמך. ב-**Cowork** וב-**Code**, Claude עובד ישירות על הקבצים שלך ומחזיר תוצאה מוכנה.

:::advanced
הטרמינל / CLI (שורת פקודה) הוא דרך שימוש נוספת, אבל היא מיועדת למפתחים ולמשתמשי Linux. רופא מתחיל לא צריך אותה - כל מה שהיא עושה זמין דרך הטאב Code בממשק גרפי. הקדשנו לה מסלול "מתקדם" נפרד.
:::

בשיעור הבא: **התקנת Claude Desktop** צעד אחר צעד.`,
    en: `# Where Can You Use Claude?

There are several ways. For a physician, the recommended one is the **Claude Desktop app**, and this whole site is built around it.

## The main options

- **Web (claude.ai)** - opens in a browser, no install. Great for a quick chat. Limited: no access to files on your computer.
- **Desktop app (Mac/Windows)** - software installed on your computer. This is where the real power for a physician lives: the three tabs (Chat, Cowork, Code). Requires a paid plan (Pro and up).
- **Mobile (iOS/Android)** - for questions on the go and photographing something for analysis. Small screen, less suited to organized work.

:::beginner
"Installing an app" is exactly like installing any other software: download from claude.ai/download, click install, and sign in with your account. There is no technical step.
:::

## The heart: Claude Desktop's three tabs

The Desktop app is one app with three tabs at the top of the screen:

| Tab | What it is for | Example |
|------|----------------|---------|
| **Chat** | A normal conversation - ask and answer | "Draft a referral letter" |
| **Cowork** | Agentic work with no code, over a whole folder | "Summarize all the reports in this folder into a table" |
| **Code** | Claude Code in a graphical interface | Projects, files, preview |

The key difference: in **Chat** you copy and paste yourself. In **Cowork** and **Code**, Claude works directly on your files and returns a finished result.

:::advanced
The terminal / CLI is another way to use Claude, but it is meant for developers and Linux users. A beginner physician does not need it - everything it does is available through the Code tab in a graphical interface. We gave it a separate "advanced" track.
:::

Next: **installing Claude Desktop** step by step.`,
  },
};

export default lesson;
