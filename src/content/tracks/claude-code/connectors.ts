import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'connectors',
  track: 'claude-code',
  title: { he: 'Connectors - לחבר את Claude ל-Drive ו-Gmail', en: 'Connectors - Linking Claude to Drive and Gmail' },
  description: {
    he: 'חיבורים מוכנים בלחיצה, בלי הגדרות. והזהירות הנדרשת.',
    en: 'Ready-made links in one click, no setup. And the caution required.',
  },
  duration: 7,
  updated: '2026-06-06',
  content: {
    he: `אחרי השיעור הזה תדע לחבר תיקייה אחת מ-Google Drive ל-Claude, להגביל את ההרשאה לאותה תיקייה בלבד, ולקבל ממנה טבלה מסודרת תוך דקות.

## מה תלמד כאן

- תוכל לחבר שירות חיצוני כמו Google Drive או Gmail ל-Claude בלחיצה אחת, בלי שום הגדרה טכנית.
- תוכל להגביל את ההרשאה לתיקייה ספציפית אחת ולא לכל החשבון שלך.
- תוכל לבקש מ-Claude לקרוא תיקיית מקרים ולבנות ממנה טבלה מאורגנת.

## למה זה חשוב לך במרפאה

יש לך תיקיית הוראה ב-Google Drive עם עשרות תמונות דרמוסקופיה, חלקן מתויגות "atypical" כחומר ללימוד. בלי חיבור, כדי לבנות מהן טבלה לשיעור או למצגת אתה פותח כל קובץ ידנית, מסתכל, מעתיק שורה ומדביק - וזה נמשך חצי שעה ונוטה לטעויות. החיבור (connector) נותן ל-Claude לקרוא את התיקייה ישירות, כך שהמיון לטבלה לוקח דקות. אותו רעיון עובד גם על תיבת Gmail ייעודית: למשל לסכם דוחות שהגיעו אליה, או לאתר מייל מסוים בלי לפתוח עשרות הודעות. הרווח הוא לא "יעילות" מעורפלת, אלא משימה קונקרטית שהיתה גוזלת חצי שעה והופכת לדקות. וכל זה בלי להוריד אף קובץ למחשב ובלי לפתוח כל תמונה בנפרד.

## ההסבר בפשטות

**Connector** הוא חיבור מוכן בין Claude לשירות חיצוני - Google Drive, Gmail ועוד - שמפעילים בלחיצה מתוך ההגדרות של האפליקציה. אין קבצי הגדרה, אין כתובת שרת ואין טרמינל. לוחצים, מתחברים לחשבון, מאשרים הרשאה, וזהו. פעם אחת בלבד, ומאז Claude יכול לפנות לאותו שירות בכל שיחה.

חשוב על זה כמו מסירת מפתח לעובד חדש במרפאה: לא תיתן לו צרור מפתחות לכל המשרד, אלא מפתח אחד לחדר שהוא באמת צריך. בדיוק כך תגביל את החיבור לתיקייה אחת, ולא לכל ה-Drive שלך. ככל שהמפתח מצומצם יותר, כך פחות חשוף אם משהו משתבש, ואתה יודע בדיוק מה Claude יכול לראות ומה לא. את ההרשאה הזו אפשר תמיד לבדוק, להרחיב או לבטל מאוחר יותר באותו מסך **Connectors** בהגדרות.

## דוגמה מהמרפאה, צעד אחר צעד

המטרה: לחבר תיקיית הוראה אחת ב-Drive ולבנות טבלה של התמונות המתויגות "atypical". כל החומר בתיקייה מעומעם ומיועד ללימוד, לא קבצי מטופלים.

1. פתח את הטאב **Code** ובחר תיקיית עבודה כרגיל.
2. פתח את **ההגדרות** של האפליקציה ולחץ על **Connectors**.
3. ברשימה בחר **Google Drive** ולחץ **Connect**.
4. התחבר לחשבון Google שבו נמצאת תיקיית ההוראה ואשר את ההרשאה.
5. בשלב בחירת ההיקף, סמן את התיקייה **הספציפית** \`teaching-cases\` בלבד, ולא את כל ה-Drive. זה הצעד החשוב ביותר בכל השיעור.
6. חזור לשיחה והדבק את הפרומפט הבא:

\`\`\`
חבר את התיקייה teaching-cases מ-Google Drive.
מצא את כל התמונות שתויגו 'atypical' בשלושת החודשים האחרונים,
וסדר אותן בטבלה עם העמודות: תאריך, תיאור קצר, אבחנה סופית, מה היה ייחודי.
זה חומר לימוד מעומעם, לא קבצי מטופלים.
\`\`\`

מה שתראה: טבלה מסודרת עם שורה לכל תמונה מתויגת ועמודות תאריך, תיאור, אבחנה ומה היה ייחודי, מוכנה להעתקה לשקופית או למסמך הוראה. אם תרצה, תוכל לבקש בהמשך השיחה לסדר את הטבלה לפי אבחנה או להוסיף עמודה - בלי לפתוח שוב את הקבצים.

:::beginner
לחבר חיבור (connector) זה שלושה צעדים בלבד: לוחצים, מתחברים לחשבון, מאשרים הרשאה. ההרשאה שתסמן בשלב 5 קובעת מה Claude יכול לראות, לכן בחר תיקייה אחת ולא את כל החשבון.
:::

## נסה בעצמך

- [ ] צור תיקייה חדשה ב-Drive בשם \`claude-test\`, שים בה שני קבצים לא רגישים, חבר רק אותה דרך **Connectors**, ובקש מ-Claude: "מה שמות הקבצים בתיקייה \`claude-test\`?"

## טעויות נפוצות

- **חיבור כל ה-Drive במקום תיקייה אחת.** בשלב ההרשאה קל ללחוץ "אשר הכל" ולתת ל-Claude גישה לכל הקבצים שלך. התיקון: בשלב 5 בחר תמיד תיקייה ספציפית, ואם כבר נתת הרשאה רחבה - צמצם אותה דרך **Connectors** בהגדרות.
- **חיבור חשבון עם נתוני מטופלים מזהים.** בחשבון רגיל התוכן שנקרא נשלח לעיבוד בענן. התיקון: חבר רק תיקיות לימוד מעומעמות, או חשבון Google נפרד שאין בו שמות, תעודות זהות או קבצי מטופלים.
- **הנחה ש-Claude קורא הכל אוטומטית.** החיבור פותח את הדלת, אבל Claude ניגש רק למה שביקשת בשיחה. התיקון: ציין בפרומפט בדיוק איזו תיקייה ואילו קבצים, כמו בדוגמה למעלה.

## נקודות לזכירה

- חיבור (connector) נותן ל-Claude גישה לשירות חיצוני בלחיצה, בלי שום הגדרה טכנית.
- הצעד החשוב ביותר הוא להגביל את ההרשאה לתיקייה אחת, לא לכל החשבון.
- חבר רק חומר מעומעם או כללי, אף פעם לא קבצים שמזהים מטופל.

## מה הלאה

בשיעור הבא, [תרחישים רפואיים מלאים](/academy/claude-code/derm-scenarios), תלמד להריץ משימה מרפאתית שלמה מתחילתה ועד הפלט הסופי.`,
    en: `# Connectors

After this lesson you will be able to connect one Google Drive folder to Claude, limit the permission to that folder only, and get an organized table out of it in minutes.

## What you will learn

- You will be able to connect an external service such as Google Drive or Gmail to Claude in one click, with no technical setup.
- You will be able to limit the permission to one specific folder rather than your whole account.
- You will be able to ask Claude to read a teaching-cases folder and build an organized table from it.

## Why this matters in your clinic

You keep a teaching folder in Google Drive with dozens of dermoscopy images, some tagged "atypical" as study material. Without a connection, building a table from them for a lecture or a slide deck means opening each file by hand, looking, copying a row, and pasting - half an hour of work that invites mistakes. A connector lets Claude read the folder directly, so sorting it into a table takes minutes. The same idea works on a dedicated Gmail inbox: summarizing reports that landed there, or finding one specific email without opening dozens. The gain is not vague "efficiency" - it is one concrete task that used to cost half an hour and now costs a few minutes, with no file downloaded to your computer.

## The plain explanation

A **connector** is a ready-made link between Claude and an external service - Google Drive, Gmail, and more - that you enable with one click from the app's settings. There are no config files, no server address, and no terminal. You click, sign in to the account, approve a permission, and that is it. Once only, and from then on Claude can reach that service in any conversation.

Think of it like handing a key to a new employee in the clinic: you would not give them a key ring to the whole office, only the one key to the room they actually need. In exactly the same way you will limit the connection to one folder, not your entire Drive. The narrower the key, the less is exposed if something goes wrong, and you know exactly what Claude can and cannot see. You can always review, widen, or revoke that permission later on the same **Connectors** screen in settings.

## A clinic example, step by step

The goal: connect one teaching folder in Drive and build a table of the images tagged "atypical". Everything in the folder is de-identified study material, not patient files.

1. Open the **Code** tab and pick a working folder as usual.
2. Open the app's **Settings** and click **Connectors**.
3. In the list, pick **Google Drive** and click **Connect**.
4. Sign in to the Google account that holds the teaching folder and approve the permission.
5. At the scope step, select the **specific** folder \`teaching-cases\` only, not your whole Drive. This is the single most important step in the lesson.
6. Go back to the conversation and paste the prompt below:

\`\`\`
חבר את התיקייה teaching-cases מ-Google Drive.
מצא את כל התמונות שתויגו 'atypical' בשלושת החודשים האחרונים,
וסדר אותן בטבלה עם העמודות: תאריך, תיאור קצר, אבחנה סופית, מה היה ייחודי.
זה חומר לימוד מעומעם, לא קבצי מטופלים.
\`\`\`

What you will see: a tidy table with one row per tagged image and columns for date, description, diagnosis, and what was unique, ready to copy into a slide or a teaching document. If you like, you can ask in the same conversation to sort the table by diagnosis or add a column - without reopening the files.

:::beginner
Connecting a connector is just three steps: click, sign in to the account, approve a permission. The permission you select in step 5 decides what Claude can see, so pick one folder and not your whole account.
:::

## Try it yourself

- [ ] Create a new folder in Drive named \`claude-test\`, put two non-sensitive files in it, connect only that folder through **Connectors**, and ask Claude: "What are the file names in the \`claude-test\` folder?"

## Common mistakes

- **Connecting your whole Drive instead of one folder.** At the permission step it is easy to click "approve all" and give Claude access to every file you own. The fix: in step 5 always pick a specific folder, and if you already granted a broad permission, narrow it through **Connectors** in settings.
- **Connecting an account with identifying patient data.** On a regular account the content that gets read is sent to the cloud for processing. The fix: connect only de-identified teaching folders, or a separate Google account that holds no names, ID numbers, or patient files.
- **Assuming Claude reads everything automatically.** The connector opens the door, but Claude only reaches what you ask for in the conversation. The fix: state in the prompt exactly which folder and which files, as in the example above.

## Key takeaways

- A connector gives Claude access to an external service in one click, with no technical setup.
- The single most important step is to limit the permission to one folder, not the whole account.
- Connect only de-identified or general material, never files that identify a patient.

## What is next

In the next lesson, [Full dermatology scenarios](/academy/claude-code/derm-scenarios), you will learn to run a complete clinic task from start to its final output.`,
  },
};

export default lesson;
