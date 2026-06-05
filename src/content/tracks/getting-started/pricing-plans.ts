import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'pricing-plans',
  track: 'getting-started',
  title: { he: 'תוכניות ומחירים - מה צריך רופא', en: 'Plans and Pricing - What a Physician Needs' },
  description: {
    he: 'איזו תוכנית פותחת את Desktop, Cowork ו-Code, וכמה זה עולה. המלצה פשוטה לרופא.',
    en: 'Which plan unlocks Desktop, Cowork, and Code, and what it costs. A simple recommendation for a physician.',
  },
  duration: 7,
  updated: '2026-06-05',
  content: {
    he: `# תוכניות ומחירים

הדבר החשוב להבין: **הטאבים Cowork ו-Code דורשים מנוי בתשלום** (Pro ומעלה). התוכנית החינמית נותנת רק שיחה בסיסית.

## התוכניות (נכון ליוני 2026)

| תוכנית | מחיר | מה מקבלים |
|--------|------|-----------|
| **חינם** | 0 | שיחה בסיסית עם Sonnet באתר. בלי Desktop/Cowork/Code |
| **Pro** | 20$ לחודש | אפליקציית Desktop מלאה, כל הדגמים כולל Opus 4.8, Cowork, Code (גישה מוגבלת), Projects |
| **Max 5x** | 100$ לחודש | פי 5 מ-Pro, חלון הקשר של מיליון טוקנים, Code בשימוש כבד, Routines |
| **Max 20x** | 200$ לחודש | פי 20 מ-Pro. למי ש-Claude הוא הכלי המרכזי שלו |
| **Team** | 30$ למשתמש | לצוותים, ניהול מרכזי, מינימום 2 משתמשים |

## ההמלצה לרופא

- **רופא במרפאה קטנה** - התחל ב-**Pro** (20$). מספיק לרוב: ניסוח, סיכומים, Cowork על תיקיות, ושימוש סביר ב-Code.
- **שימוש כבד / Code יומי** - שדרג ל-**Max 5x** (100$). פותח את חלון המיליון טוקנים ו-Routines.
- **צוות / מרפאה גדולה** - שקול **Team** (30$ למשתמש), או **Enterprise** עם דרישות פרטיות (BAA).

:::beginner
אפשר להתחיל מ-Pro ולשדרג רק אם מגיעים למגבלות. אין התחייבות ארוכת טווח - זה מנוי חודשי.
:::

:::advanced
Opus 4.8 כולל effort levels (ברירת מחדל high) ו-fast mode (פקודת /fast) להאצת קצב הפלט. למי שעובד מול ה-API ישירות (מסלול מתקדם), התמחור שונה ולפי שימוש. לבתי חולים עם דרישות HIPAA/פרטיות מחמירות - Claude for Enterprise עם BAA הוא המסלול הנכון.
:::

סיימת את מסלול ההתחלה. עכשיו אפשר לעבור ל-**Cowork** - העבודה ה-agentic הראשונה בלי קוד.`,
    en: `# Plans and Pricing

The key thing to understand: **the Cowork and Code tabs require a paid plan** (Pro and up). The free plan gives only basic chat.

## The plans (as of June 2026)

| Plan | Price | What you get |
|------|-------|--------------|
| **Free** | 0 | Basic chat with Sonnet on the web. No Desktop/Cowork/Code |
| **Pro** | $20/mo | Full Desktop app, all models including Opus 4.8, Cowork, Code (limited access), Projects |
| **Max 5x** | $100/mo | 5x Pro, one-million-token context, heavy Code use, Routines |
| **Max 20x** | $200/mo | 20x Pro. For when Claude is your primary tool |
| **Team** | $30/user | For teams, central management, minimum 2 users |

## The recommendation for a physician

- **Physician in a small clinic** - start with **Pro** ($20). Enough for most: drafting, summaries, Cowork over folders, and reasonable Code use.
- **Heavy use / daily Code** - upgrade to **Max 5x** ($100). Unlocks the million-token window and Routines.
- **Team / large clinic** - consider **Team** ($30/user), or **Enterprise** with privacy requirements (BAA).

:::beginner
You can start with Pro and upgrade only if you hit limits. There is no long-term commitment - it is a monthly subscription.
:::

:::advanced
Opus 4.8 includes effort levels (default high) and a fast mode (the /fast command) to speed up output. For those working directly against the API (advanced track), pricing differs and is usage-based. For hospitals with strict HIPAA/privacy requirements, Claude for Enterprise with a BAA is the right path.
:::

You have finished the Getting Started track. Now move to **Cowork** - your first agentic work with no code.`,
  },
};

export default lesson;
