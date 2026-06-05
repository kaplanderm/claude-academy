import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'install-desktop',
  track: 'getting-started',
  title: { he: 'התקנת Claude Desktop צעד אחר צעד', en: 'Installing Claude Desktop Step by Step' },
  description: {
    he: 'הורדה, התקנה והתחברות לאפליקציה במק או בחלונות. בלי שום שלב טכני.',
    en: 'Download, install, and sign in to the app on Mac or Windows. With no technical step.',
  },
  duration: 6,
  updated: '2026-06-05',
  content: {
    he: `# התקנת Claude Desktop

האפליקציה זמינה ל-**macOS** (כולל Intel ו-Apple Silicon) ול-**Windows** (x64 ו-ARM64). אין גרסה ל-Linux.

## הצעדים

1. **הורדה** - היכנס ל-\`claude.ai/download\` ובחר את הגרסה למערכת שלך (Mac או Windows). ההורדה מתחילה אוטומטית.
2. **התקנה** - פתח את הקובץ שירד ולחץ "התקן" / גרור את האייקון לתיקיית Applications. בדיוק כמו כל תוכנה.
3. **התחברות** - פתח את האפליקציה והתחבר עם חשבון Claude שלך (אותו חשבון של האתר).
4. **בדיקה** - אתה אמור לראות בראש המסך שלושה טאבים: Chat, Cowork, Code.

:::beginner
אם עוד אין לך חשבון - תיצור אחד בחינם תוך דקה ב-claude.ai. כדי להשתמש באפליקציית Desktop וביכולות Cowork ו-Code צריך מנוי בתשלום (Pro ומעלה). על המנויים נדבר בשיעור התמחור.
:::

## אחרי ההתקנה

- האפליקציה נשארת זמינה ברקע. אפשר לפתוח אותה בכל רגע.
- בפעם הראשונה שתפתח את הטאב **Code** בחלונות, האפליקציה תבקש להתקין \`Git for Windows\` - לחץ על הקישור שהיא נותנת, התקן, ואתחל את האפליקציה. זה חד-פעמי.
- אין צורך להגדיר שום דבר טכני נוסף כדי להתחיל.

:::advanced
האפליקציה מתעדכנת אוטומטית. אם אתה מנהל מספר מחשבים במרפאה, אפשר לפרוס אותה מרכזית; פרטים ב-docs.claude.com. הגדרות Connectors ו-MCP מתקדמות נמצאות בתוך ההגדרות של האפליקציה, ונגיע אליהן במסלול Claude Code.
:::

בשיעור הבא נתחיל להשתמש - **הטאב Chat**.`,
    en: `# Installing Claude Desktop

The app is available for **macOS** (Intel and Apple Silicon) and **Windows** (x64 and ARM64). There is no Linux version.

## The steps

1. **Download** - go to \`claude.ai/download\` and pick the version for your system (Mac or Windows). The download starts automatically.
2. **Install** - open the downloaded file and click "Install" / drag the icon to the Applications folder. Just like any software.
3. **Sign in** - open the app and sign in with your Claude account (the same one as the website).
4. **Check** - you should see three tabs at the top: Chat, Cowork, Code.

:::beginner
If you do not have an account yet, create one for free in a minute at claude.ai. To use the Desktop app and the Cowork and Code capabilities you need a paid plan (Pro and up). We cover plans in the pricing lesson.
:::

## After installing

- The app stays available in the background. You can open it any time.
- The first time you open the **Code** tab on Windows, the app will ask you to install \`Git for Windows\` - click the link it gives you, install, and restart the app. This is a one-time step.
- No further technical setup is needed to get started.

:::advanced
The app updates automatically. If you manage several clinic computers, it can be deployed centrally; details at docs.claude.com. Advanced Connectors and MCP settings live inside the app's settings, and we reach them in the Claude Code track.
:::

Next we start using it - the **Chat tab**.`,
  },
};

export default lesson;
