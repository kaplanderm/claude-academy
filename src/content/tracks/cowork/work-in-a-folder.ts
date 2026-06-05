import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'work-in-a-folder',
  track: 'cowork',
  title: { he: '"Work in a Folder" - להצביע על תיקייה', en: '"Work in a Folder" - Pointing at a Folder' },
  description: {
    he: 'הפעולה הבסיסית של Cowork: לבחור תיקייה, לתת משימה, ולקבל קובץ פלט. עם דוגמה מלאה.',
    en: 'The basic Cowork action: pick a folder, give a task, get an output file. With a full example.',
  },
  duration: 9,
  updated: '2026-06-05',
  content: {
    he: `# "Work in a Folder"

זו הפעולה שהופכת את Cowork לכלי עבודה אמיתי. בתחתית חלון Cowork יש תיבת סימון **"Work in a Folder"**. מסמנים אותה, בוחרים תיקייה, ומאשרים ל-Claude לקרוא ולכתוב בה.

## שלושה צעדים

1. **סמן "Work in a Folder"** ובחר את התיקייה (למשל תיקיית הדוחות של החודש).
2. **תן את ההרשאה** - Claude יבקש אישור לקרוא, לשנות ולמחוק קבצים בתיקייה. אשר רק לתיקייה שאתה מתכוון אליה.
3. **כתוב את המשימה** בעברית רגילה.

## דוגמה מלאה - דוחות פתולוגיה לטבלה

נניח שבתיקייה יש 30 דוחות פתולוגיה (PDF). המשימה:

\`\`\`
קרא את כל קובצי ה-PDF בתיקייה הזו.
לכל דוח הוצא: תאריך, שם החומר (specimen), אבחנה סופית, שוליים.
סמן ירוק אם השוליים נקיים, אדום אם מעורבים.
שמור טבלה כקובץ Excel בשם pathology-summary.xlsx באותה תיקייה.
בסוף, ספור כמה מקרים ממאירים, כמה לא-ודאיים, וכמה שפירים.
\`\`\`

Claude יקרא את הקבצים, יוציא את השדות, וישמור קובץ Excel מוכן. שלוש דקות במקום שעה.

:::beginner
שים לב: ב-Chat היית צריך להעלות 30 קבצים אחד-אחד. ב-Cowork אתה רק מצביע על התיקייה. זה כל ההבדל.
:::

## כללי בטיחות חשובים

- **אל תצביע על תיקייה עם פרטים מזהים** של מטופלים (שם מלא, ת"ז) בחשבון רגיל. בקש מ-Claude קודם להסיר מזהים, או עבוד על נתונים מעומעמים.
- **Claude מבקש אישור** לפני שמירה או מחיקה. קרא מה הוא עומד לעשות לפני שאתה מאשר.
- **בקש פלט ב-UTF-8** אם אתה עובד בעברית, כדי שלא יישבר הקידוד.

:::advanced
מאחורי הקלעים זה אותו loop agentic של Claude Code: תכנון, ביצוע, בדיקה, תיקון. אתה לא רואה את הצעדים אלא אם תרצה. הקבצים נקראים מקומית, אבל התוכן נשלח לעיבוד בענן של Anthropic - ולכן הכלל על מזהים. נרחיב בשיעור הפרטיות במסלול Claude Code.
:::

בשיעור הבא: **Dispatch ו-Routines** - להריץ ברקע ובאופן מתוזמן.`,
    en: `# "Work in a Folder"

This is the action that turns Cowork into a real work tool. At the bottom of the Cowork window there is a **"Work in a Folder"** checkbox. Tick it, pick a folder, and grant Claude permission to read and write in it.

## Three steps

1. **Tick "Work in a Folder"** and pick the folder (for example this month's reports folder).
2. **Grant permission** - Claude will ask to read, modify, and delete files in the folder. Grant it only for the folder you intend.
3. **Write the task** in plain language.

## A full example - pathology reports into a table

Suppose the folder has 30 pathology reports (PDF). The task:

\`\`\`
Read all the PDF files in this folder.
For each report extract: date, specimen, final diagnosis, margins.
Mark green if margins are clear, red if involved.
Save a table as an Excel file named pathology-summary.xlsx in the same folder.
At the end, count how many cases are malignant, uncertain, and benign.
\`\`\`

Claude will read the files, extract the fields, and save a finished Excel file. Three minutes instead of an hour.

:::beginner
Note: in Chat you would have to upload 30 files one by one. In Cowork you just point at the folder. That is the whole difference.
:::

## Important safety rules

- **Do not point at a folder with identifying patient details** (full name, ID) on a regular account. Ask Claude to remove identifiers first, or work on de-identified data.
- **Claude asks for approval** before saving or deleting. Read what it is about to do before you approve.
- **Ask for UTF-8 output** if you work in Hebrew, so the encoding does not break.

:::advanced
Behind the scenes this is the same agentic loop as Claude Code: plan, act, check, correct. You do not see the steps unless you want to. Files are read locally, but their content is sent to Anthropic's cloud for processing - hence the rule about identifiers. We expand on this in the privacy lesson in the Claude Code track.
:::

Next: **Dispatch and Routines** - running in the background and on a schedule.`,
  },
};

export default lesson;
