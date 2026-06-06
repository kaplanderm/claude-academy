import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'pricing-plans',
  track: 'getting-started',
  title: { he: 'תוכניות ומחירים - מה צריך רופא', en: 'Plans and Pricing - What a Physician Needs' },
  description: {
    he: 'איזו תוכנית פותחת Desktop, Cowork ו-Code, וכמה זה עולה.',
    en: 'Which plan unlocks Desktop, Cowork, and Code, and what it costs.',
  },
  duration: 7,
  updated: '2026-06-06',
  content: {
    he: `אחרי השיעור הזה תדע לבחור את התוכנית הנכונה עבורך, ותבין איזו תוכנית פותחת את הטאבים החזקים של אפליקציית Desktop.

## מה תלמד כאן

- תוכל להשוות בין ארבע התוכניות ולזהות מה כל אחת נותנת.
- תוכל לבחור תוכנית שמתאימה לרופא יחיד או למרפאה עם כמה משתמשים.
- תוכל לבדוק תוך דקה על איזו תוכנית אתה נמצא כרגע.

## למה זה חשוב לך במרפאה

הטאבים שעושים את העבודה הכבדה, כלומר הטאב **Cowork** (עבודה אוטונומית בלי קוד) והטאב **Code**, פשוט לא נפתחים בתוכנית החינמית. אם רצית ש-Claude יעבור על תיקייה שלמה של דוחות פתולוגיה ויסכם אותם לטבלה, או שינסח עשרות מכתבי הפניה ברצף, אתה צריך תוכנית בתשלום. אותו דבר נכון לסיכום יומי של פעילות המרפאה, או למיון של תמונות דרמוסקופיה לתיקיות לפי תאריך. בלי תוכנית בתשלום תראה רק שיחה בסיסית, ותתסכל למה ה"כוח" שהובטח לא מופיע על המסך. הבחירה בתוכנית היא לכן הצעד הראשון שפותח לך את כל מה שלמדת בשיעורים הקודמים.

## ההסבר בפשטות

חשוב על התוכניות כמו על מנויים לחדר כושר. במנוי החינמי תוכל להיכנס ולהשתמש במכשירים הבסיסיים, וזה מספיק לשאלה מזדמנת. במנוי בתשלום (Pro ומעלה) נפתחים כל החדרים, כל המכשירים, והמאמן האישי, כלומר אפליקציית Desktop המלאה על שלושת הטאבים שלה, עם Cowork ו-Code שעושים עבורך את העבודה מקצה לקצה.

:::beginner
"תוכנית" כאן היא פשוט סוג המנוי שלך, בדיוק כמו מסלול בחברת סלולר. החינמית מאפשרת לטעום, והתוכנית בתשלום פותחת את הכלים שעושים עבורך עבודה אמיתית. אם אתה מתלבט, התחל ב-Pro, ותמיד תוכל לשנות אחר כך.
:::

הדגם החזק ביותר כיום הוא **Opus 4.8** (זה שם של "מנוע" התשובות), והוא זמין בכל תוכנית בתשלום. קיים גם **מצב מהיר** (הפקודה \`/fast\`) שמאיץ את קצב הפלט עד פי 2.5, למקרים שבהם אתה רוצה תשובה במהירות ולא אכפת לך מעט פחות עומק. אין צורך לזכור את הפרטים האלה עכשיו, מספיק לדעת שהדגם החזק והמצב המהיר קיימים, ושניהם כלולים ברגע שיש לך מנוי בתשלום, בלי תוספת מחיר.

## דוגמה מהמרפאה, צעד אחר צעד

נניח שאתה רוצה להחליט אם להתחיל ב-Pro. במקום לנחש, בקש מ-Claude לסכם לך את ההבדל בשפה פשוטה.

1. פתח את אפליקציית Desktop ועבור לטאב Chat (צ'אט) לכתיבה.
2. לחץ על תיבת הכתיבה בתחתית המסך.
3. הדבק את הבקשה הבאה ולחץ על מקש Enter כדי לשלוח.

\`\`\`
אני רופא עור עם מרפאה קטנה, בלי רקע טכני.
הסבר לי בשתי שורות מה ההבדל המעשי ביני לבין הצוות
אם אבחר בתוכנית Pro לעומת תוכנית Team.
ענה בעברית פשוטה, בלי מונחים טכניים.
\`\`\`

אחרי כמה שניות תראה תשובה קצרה בעברית שמסבירה ש-Pro מתאימה למשתמש יחיד, ו-Team מתאימה כשיש כמה אנשים שצריכים גישה וניהול מרכזי. שים לב שלא הזנת שום פרט מזהה של מטופל בבקשה, השאלה היא כללית על בחירת תוכנית, וכך נכון לעבוד תמיד כשמתנסים. אם התשובה ארוכה מדי, תוכל לבקש "קצר את זה לשתי שורות" ולקבל גרסה מתומצתת.

## התוכניות (נכון ליוני 2026)

| תוכנית | מחיר | מה מקבלים |
|--------|------|-----------|
| תוכנית חינם (Free) | 0 | שיחה בסיסית באתר בלבד, בלי האפליקציה ובלי הטאבים המתקדמים |
| תוכנית Pro | כ-20$ לחודש | אפליקציית Desktop מלאה, שלושת הטאבים, וכל הדגמים כולל הדגם Opus 4.8 |
| תוכנית Max | מנוי גבוה יותר | כמו Pro אך עם נפח שימוש גדול בהרבה, מתאים לעבודה כבדה בטאב Code |
| תוכנית Team | מנוי לכל משתמש | מתאים לצוותים: ניהול מרכזי וגישה לכמה אנשים במרפאה |

## ההמלצה לרופא

- **רופא יחיד** מתחיל ב-**Pro**. מספיק לרוב הצרכים: ניסוח, סיכומים, ו-Cowork על תיקיות.
- **מרפאה עם כמה משתמשים פעילים** שוקלת **Team**, שמוסיף ניהול מרכזי וגישה לכל הצוות.

הדרך הנכונה היא להתחיל בקטן: בחר ב-Pro, עבוד איתו שבוע או שבועיים על משימות אמיתיות, ורק אם תרגיש שאתה נתקל במגבלות שקול לעלות לתוכנית גבוהה יותר. אין כאן התחייבות ארוכת טווח, וזה מנוי חודשי שאפשר לשנות בכל עת.

## נסה בעצמך

- [ ] פתח את הגדרות החשבון (לחץ על שם המשתמש או תמונת הפרופיל, ואז על Settings), ובדוק על איזו תוכנית אתה נמצא כרגע.

## טעויות נפוצות

- **חושב שההתקנה נכשלה כשאינך רואה את Cowork ו-Code.** בתוכנית החינמית הטאבים האלה פשוט לא מופיעים. הפתרון: שדרג ל-Pro ומעלה והם יופיעו מיד.
- **מנסה לבחור דגם חזק יותר בתוכנית החינמית.** הדגם Opus 4.8 זמין רק בתוכנית בתשלום. הפתרון: שדרג, או הסתפק בשיחה הבסיסית באתר.
- **מסתבך עם מצב מהיר לפני שצריך.** המצב המהיר (\`/fast\`) הוא תוספת נחמדה, לא חובה. הפתרון: התעלם ממנו עד שתרגיש שאתה ממהר לתשובה.

## נקודות לזכירה

- תוכנית בתשלום (Pro ומעלה) היא מה שפותח את אפליקציית Desktop עם Cowork ו-Code.
- רופא יחיד מתחיל ב-Pro, ומרפאה עם כמה משתמשים שוקלת Team.
- הדגם החזק הוא Opus 4.8, וקיים מצב מהיר (\`/fast\`) אם תרצה תשובה מהר יותר.

:::advanced
מעבר למנויים החודשיים אפשר לשלם לפי שימוש דרך ה-API, והדגם מציע רמות מאמץ (ברירת המחדל גבוהה) לצד אפשרות \`/fast\` (מהירה עד פי 2.5) בתמחור פרימיום. לתאימות מחייבת לעבודה עם נתוני מטופלים תזדקק להסכם ארגוני (BAA או DPA), ולא למנוי אישי.
:::

## מה הלאה

עכשיו, כשיש לך תוכנית שפותחת את הכלים, הצעד הבא הוא ללמוד לתת ל-Claude לעבוד על תיקייה שלמה לבד: [המסלול הבא: Cowork](/academy/cowork).`,
    en: `After this lesson you will know how to choose the right plan for you, and understand which plan unlocks the powerful tabs of the Desktop app.

## What you will learn here

- You will be able to compare the four plans and identify what each one gives.
- You will be able to choose a plan that fits a solo physician or a clinic with several users.
- You will be able to check, in under a minute, which plan you are on right now.

## Why this matters in your clinic

The tabs that do the heavy lifting, namely **Cowork** (autonomous work with no code) and **Code**, do not open on the free plan. If you wanted Claude to go over a whole folder of pathology reports and summarize them into a table, or draft dozens of referral letters in a row, you need a paid plan. The same is true for a daily summary of clinic activity, or sorting dermoscopy images into folders by date. Without a paid plan you see only basic chat, and you get frustrated that the promised "power" never shows up on screen. Choosing a plan is therefore the first step that unlocks everything you learned in the earlier lessons.

## The explanation, simply

Think of the plans like gym memberships. With the free membership you can come in and use the basic machines, and that is enough for an occasional question. With a paid membership (Pro and up) all the rooms, all the machines, and the personal trainer open up, that is, the full Desktop app with its three tabs, with Cowork and Code doing the work for you end to end.

:::beginner
A "plan" here is simply the kind of subscription you have, just like a phone carrier tier. The free one lets you taste it, and the paid plan unlocks the tools that do real work for you. If you are unsure, start with Pro, and you can always change later.
:::

The most capable model today is **Opus 4.8** (the name of the answer "engine"), and it is available on every paid plan. There is also a **fast mode** (the \`/fast\` command) that speeds up the output rate by up to 2.5x, for cases where you want an answer quickly and do not mind slightly less depth. No need to memorize these details now: it is enough to know that the strong model and the fast mode exist, and that both are included the moment you have a paid plan, at no extra cost.

## A clinic example, step by step

Say you want to decide whether to start with Pro. Instead of guessing, ask Claude to summarize the difference for you in plain language.

1. Open the Desktop app and go to the **Chat** tab.
2. Click the input box at the bottom of the screen.
3. Paste the following request and press Enter.

\`\`\`
אני רופא עור עם מרפאה קטנה, בלי רקע טכני.
הסבר לי בשתי שורות מה ההבדל המעשי ביני לבין הצוות
אם אבחר בתוכנית Pro לעומת תוכנית Team.
ענה בעברית פשוטה, בלי מונחים טכניים.
\`\`\`

After a few seconds you see a short answer in Hebrew explaining that Pro fits a single user, and Team fits when several people need access and central management. Notice that you entered no identifying patient detail in the request, the question is a general one about choosing a plan, which is the right way to work whenever you experiment. If the answer is too long, you can ask "shorten this to two lines" and get a condensed version.

## The plans (as of June 2026)

| Plan | Price | What you get |
|------|-------|--------------|
| Free | 0 | Basic chat on the web only. No Desktop, no Cowork, no Code |
| Pro | about $20/mo | Full Desktop app, all three tabs, all models including Opus 4.8 |
| Max | a higher tier | Like Pro with far more usage, for heavy Code users |
| Team | a per-user tier | For teams: central management and access for several people in the clinic |

## The recommendation for a physician

- **A solo physician** starts with **Pro**. Enough for most needs: drafting, summaries, and Cowork over folders.
- **A clinic with several active users** considers **Team**, which adds central management and access for the whole staff.

The right approach is to start small: choose Pro, work with it for a week or two on real tasks, and only if you feel you are hitting limits consider moving up to a higher plan. There is no long-term commitment here, and it is a monthly subscription you can change at any time.

## Try it yourself

- [ ] Open your account settings (click your username or profile picture, then Settings) and check which plan you are on right now.

## Common mistakes

- **Thinking the install failed when you do not see Cowork and Code.** On the free plan those tabs simply do not appear. The fix: upgrade to Pro and up and they show up immediately.
- **Trying to pick a stronger model on the free plan.** Opus 4.8 is available only on a paid plan. The fix: upgrade, or stay with the basic chat on the web.
- **Getting tangled up with fast mode before you need it.** Fast mode (\`/fast\`) is a nice extra, not a requirement. The fix: ignore it until you feel you are in a hurry for an answer.

## Points to remember

- A paid plan (Pro and up) is what unlocks the Desktop app with Cowork and Code.
- A solo physician starts with Pro, and a clinic with several users considers Team.
- The most capable model is Opus 4.8, and a fast mode (\`/fast\`) exists if you want an answer faster.

:::advanced
Beyond the monthly plans you can pay per use through the API, and the model offers effort levels (the default is high) alongside a \`/fast\` option (up to 2.5x faster) at premium pricing. For binding compliance when working with patient data you need an enterprise agreement (a BAA or DPA), not a personal plan.
:::

## What is next

Now that you have a plan that unlocks the tools, the next step is to learn to let Claude work on a whole folder on its own: [Next track: Cowork](/academy/cowork).`,
  },
};

export default lesson;
