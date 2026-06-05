import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'connectors',
  track: 'claude-code',
  title: { he: 'Connectors - לחבר את Claude ל-Drive ו-Gmail', en: 'Connectors - Linking Claude to Drive and Gmail' },
  description: {
    he: 'חיבורים מוכנים לשירותים חיצוניים, בלחיצה - בלי הגדרות טכניות. ומה הזהירות הנדרשת.',
    en: 'Ready-made links to external services, in one click - with no technical setup. And the caution required.',
  },
  duration: 7,
  updated: '2026-06-05',
  content: {
    he: `# Connectors

**Connector** הוא חיבור מוכן לשירות חיצוני - Google Drive, Gmail, Slack, Notion ועוד - שמפעילים בלחיצה מתוך ההגדרות של האפליקציה. בלי קבצי הגדרה ובלי טרמינל.

## מה זה נותן לרופא

- **Google Drive** - לבקש מ-Claude למשוך מסמך מ-Drive בלי להוריד אותו קודם. למשל תיקיית מקרים ללימוד.
- **Gmail** - לסרוק מיילים נכנסים (למשל דוחות ממעבדה) ולסכם, או לנסח תשובה.
- שירותים נוספים זמינים ומתעדכנים; בדוק את הרשימה בהגדרות האפליקציה.

## דוגמה

\`\`\`
חבר את התיקייה teaching-cases/dermoscopy מ-Google Drive.
מצא את כל התמונות שתויגו 'atypical' ב-3 החודשים האחרונים,
וסדר אותן בטבלה: תאריך, תיאור, אבחנה סופית, מה היה ייחודי.
\`\`\`

חצי שעה של סריקה ידנית הופכת לתוצאה תוך 2 דקות.

:::beginner
"לחבר connector" זה כמו לחבר אפליקציה לחשבון Google שלך: לוחצים, מתחברים, מאשרים הרשאה. פעם אחת, ואז Claude יכול לגשת לשירות.
:::

## זהירות - פרטיות

- **אל תחבר תיקיות עם נתוני מטופלים מזהים** בחשבון רגיל. Connectors נותנים ל-Claude גישה לתוכן, והוא נשלח לעיבוד בענן.
- חבר רק תיקיות לימוד / כלליות, או נתונים מעומעמים.
- בדוק שההרשאה שאתה נותן מצומצמת לתיקייה הספציפית, לא לכל ה-Drive.

:::advanced
מעבר ל-Connectors המוכנים, אפשר לחבר שרתי MCP מותאמים (כל שירות עם API). זה כבר תחום מתקדם - יש לו שיעור במסלול המתקדם. עבור רופא, ה-Connectors המובנים מכסים את רוב הצרכים בלי שום הגדרה.
:::

בשיעור הבא: **תרחישים רפואיים מלאים** בטאב Code.`,
    en: `# Connectors

A **Connector** is a ready-made link to an external service - Google Drive, Gmail, Slack, Notion, and more - that you enable with one click from the app's settings. No config files and no terminal.

## What it gives a physician

- **Google Drive** - ask Claude to pull a document from Drive without downloading it first. For example a teaching-cases folder.
- **Gmail** - scan incoming email (for example lab reports) and summarize, or draft a reply.
- More services are available and updated; check the list in the app settings.

## Example

\`\`\`
Connect the teaching-cases/dermoscopy folder from Google Drive.
Find all images tagged 'atypical' in the last 3 months,
and organize them in a table: date, description, final diagnosis, what was unique.
\`\`\`

Half an hour of manual scanning becomes a result in 2 minutes.

:::beginner
"Connecting a connector" is like linking an app to your Google account: click, sign in, approve permission. Once, and then Claude can access the service.
:::

## Caution - privacy

- **Do not connect folders with identifying patient data** on a regular account. Connectors give Claude access to content, which is sent to the cloud for processing.
- Connect only teaching / general folders, or de-identified data.
- Check that the permission you grant is scoped to the specific folder, not your whole Drive.

:::advanced
Beyond the ready-made Connectors, you can connect custom MCP servers (any service with an API). That is an advanced area - it has a lesson in the advanced track. For a physician, the built-in Connectors cover most needs with no setup.
:::

Next: full **dermatology scenarios** in the Code tab.`,
  },
};

export default lesson;
