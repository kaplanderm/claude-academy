import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'work-in-a-folder',
  track: 'cowork',
  title: { he: '"Work in a Folder" - להצביע על תיקייה', en: '"Work in a Folder" - Pointing at a Folder' },
  description: {
    he: 'הפעולה הבסיסית: לבחור תיקייה, לתת משימה, לקבל קובץ פלט.',
    en: 'The basic action: pick a folder, give a task, get an output file.',
  },
  duration: 9,
  updated: '2026-06-06',
  content: {
    he: `# "Work in a Folder"

בסוף השיעור תוכל להצביע על תיקייה במחשב, לתת ל-Claude משימה אחת בעברית, ולקבל בחזרה קובץ פלט מסודר בלי להעלות שום קובץ ידנית.

## מה תלמד כאן

- תוכל להפעיל את האפשרות **"Work in a Folder"** בטאב Cowork ולבחור תיקייה לעבודה.
- תוכל לכתוב משימה אחת שמעבדת עשרות קבצים בבת אחת ומחזירה טבלה.
- תוכל להגן על עצמך משלוש טעויות נפוצות: מזהים, מחיקה בטעות, וקידוד עברית שבור.

## למה זה חשוב לך במרפאה

נניח שהצטברו אצלך 30 דוחות פתולוגיה בתיקייה אחת, וצריך להוציא מכל אחד תאריך, סוג הדגימה, אבחנה סופית ושוליים - ואז לרכז הכל בגיליון אחד. ידנית זו עבודה של שעה, פתיחה וסגירה של קובץ אחרי קובץ, עם הסיכון שמקרה ממאיר אחד ייפול בין הכיסאות. עם הפעולה הזו אתה מצביע על התיקייה פעם אחת ומקבל את הגיליון מוכן, וכל מקרה שדורש מעקב מסומן בנפרד. אותו עיקרון עובד גם על תיקיית מכתבי הפניה שצריך לסכם, על סיכומי יום שצריך לאחד לשבוע, או על תיקיית תיאורי נגעים שצריך לארגן לטבלה. בכל מקום שבו יש לך הרבה קבצים דומים ופעולה אחת חוזרת על כולם, זו הדרך.

## ההסבר בפשטות

הטאב Cowork באפליקציית Claude Desktop יכול לקבל הרשאה לתיקייה מסוימת במחשב שלך, ואז לקרוא את כל הקבצים שבה ולכתוב קובץ תוצאה חזרה לאותה תיקייה. דמיין שאתה מוסר לעוזר מסור מפתח לארון תיקים אחד בלבד: הוא יכול לעבוד על כל מה שבארון הזה, אבל לא ייגע בשום ארון אחר.

המילה האנגלית **"folder"** היא פשוט תיקייה - אוסף קבצים במחשב. אתה לא צריך לדעת שום דבר טכני ולא להעלות אף קובץ: אתה רק מסמן תיבה, מצביע על תיקייה אחת, וכותב מה לעשות בעברית רגילה. ההבדל מ-Chat הוא בדיוק כאן - ב-Chat היית צריך לגרור קובץ אחרי קובץ לתוך החלון, וכאן אתה מוסר מפתח אחד לתיקייה ונותן ל-Claude לעבוד.

## דוגמה מהמרפאה, צעד אחר צעד

המשימה: תיקייה עם 30 דוחות פתולוגיה בפורמט PDF, **שכבר עברו הסרת פרטים מזהים** (ללא שם, ללא תעודת זהות). המטרה - גיליון מרוכז.

1. פתח את אפליקציית Claude Desktop ולחץ על הטאב **Cowork** למעלה.
2. בתחתית חלון השיחה, סמן את התיבה **"Work in a Folder"**.
3. בחלון שנפתח, בחר את התיקייה עם הדוחות ולחץ אישור.
4. כש-Claude מבקש הרשאה לקרוא ולכתוב בתיקייה, אשר - אך ורק לתיקייה הזו.
5. הדבק את הבקשה הבאה בתיבת ההודעה ושלח:

\`\`\`
קרא את כל קובצי ה-PDF בתיקייה הזו.
לכל דוח הוצא: תאריך, סוג הדגימה (specimen), אבחנה סופית, ומצב השוליים.
צור עמודה שמסמנת "לבדיקה" לכל מקרה ממאיר או לא-טיפוסי.
שמור את התוצאה כקובץ CSV בשם pathology-summary.csv באותה תיקייה.
אל תמחק ואל תשנה את קובצי המקור - רק קרא אותם.
שמור את הקובץ בקידוד UTF-8 כדי שהעברית תיקרא נכון.
\`\`\`

מה תראה: Claude עובר על הקבצים אחד-אחד, מוציא מכל דוח את השדות שביקשת, ואז יוצר קובץ טבלה אחד בשם \`pathology-summary.csv\` שאפשר לפתוח ב-Excel. הסיומת \`csv\` היא פורמט טבלה פשוט שכל גיליון אלקטרוני יודע לקרוא. בקובץ יש שורה לכל דוח ועמודות לתאריך, סוג דגימה, אבחנה, שוליים, וסימון "לבדיקה" למקרים שדורשים תשומת לב. המספרים כאן בהמחשה בלבד, אבל עבודה שלוקחת אצלך כשעה הופכת לכמה דקות, וקובצי המקור נשארים בדיוק כפי שהיו.

:::beginner
אם אתה לא בטוח מה Claude עומד לעשות לפני שאתה מאשר, אפשר פשוט לכתוב לו "תאר לי את התוכנית לפני שאתה מתחיל". הוא יסביר בעברית את הצעדים, ורק אחרי שתאשר הוא יתחיל לעבוד.
:::

## נסה בעצמך

קח קובץ PDF אחד שאינו רגיש (מאמר, עלון תרופה, נוהל), שים אותו בתיקייה ריקה, סמן **"Work in a Folder"** עליה ובקש: "סכם את הקובץ הזה בשלוש נקודות". פחות משלוש דקות, ואתה כבר מכיר את כל המעגל.

## טעויות נפוצות

- **הצבעה על תיקייה שעוד מכילה מזהי מטופלים** (שם, תעודת זהות). הפתרון: הסר מזהים מהקבצים לפני, ועבוד רק על נתונים מעומעמים.
- **שכחת לכתוב "אל תמחק את קובצי המקור".** הפתרון: כתוב את המשפט הזה בכל משימה, כדי שהמקור יישאר שלם.
- **העברית יוצאת ג'יבריש בקובץ הפלט.** הסיבה: קידוד לא נכון. הפתרון: בקש במפורש לשמור ב-UTF-8 (תקן שמירת אותיות שגורם לעברית להיקרא נכון בכל תוכנה).
- **אישור הרשאה לתיקייה רחבה מדי** (כל שולחן העבודה). הפתרון: בחר תיקייה אחת וצרה, רק זו שצריך.

## נקודות לזכירה

- במקום להעלות קבצים אחד-אחד, אתה מצביע על תיקייה אחת ו-Claude עובד על כולם.
- שלושה משפטי הגנה בכל משימה: בלי מזהים, אל תמחק את המקור, שמור ב-UTF-8.
- הפלט הוא קובץ אמיתי שנשמר בתיקייה שלך, מוכן לפתיחה ב-Excel.

## מה הלאה

בשיעור הבא, [Dispatch ו-Routines](/academy/cowork/dispatch-and-routines), תלמד לשלוח משימה כזו לרקע ולתזמן אותה שתרוץ לבד.`,
    en: `# "Work in a Folder"

By the end of this lesson you will be able to point at a folder on your computer, give Claude one task in plain language, and get back a tidy output file without uploading any file by hand.

## What you will learn here

- You will be able to turn on **"Work in a Folder"** in the Cowork tab and pick a folder to work on.
- You will be able to write one task that processes dozens of files at once and returns a table.
- You will be able to protect yourself from three common mistakes: identifiers, accidental deletion, and broken Hebrew encoding.

## Why this matters in your clinic

Suppose 30 pathology reports have piled up in one folder, and each needs its date, specimen type, final diagnosis, and margins pulled out and gathered into a single sheet. By hand that is an hour of opening and closing one file after another. With this action you point at the folder once and get the sheet ready. The same works on a folder of referral letters, daily summaries, or lesion descriptions.

## The plain explanation

The Cowork tab in the Claude Desktop app can be granted permission to one folder on your computer, and then read every file in it and write a result file back to that same folder. Picture handing a trusted assistant the key to one filing cabinet only: the assistant can work on everything in that cabinet, but will not touch any other one.

A **folder** is simply a collection of files on your computer. You do not need anything technical: you tick a box, point at one folder, and write what to do in plain language.

## A clinic example, step by step

The task: a folder with 30 pathology reports in PDF format, **already de-identified** (no name, no ID number). The goal is one combined sheet.

1. Open the Claude Desktop app and click the **Cowork** tab at the top.
2. At the bottom of the conversation window, tick the **"Work in a Folder"** box.
3. In the window that opens, choose the folder with the reports and click confirm.
4. When Claude asks for permission to read and write in the folder, grant it - for this folder only.
5. Paste the following request into the message box and send:

\`\`\`
Read all the PDF files in this folder.
For each report extract: date, specimen type, final diagnosis, and margin status.
Add a column that marks "review" for any malignant or atypical case.
Save the result as a CSV file named pathology-summary.csv in the same folder.
Do not delete or change the source files - only read them.
Save the file in UTF-8 encoding so the Hebrew reads correctly.
\`\`\`

What you will see: Claude goes through the files one by one and then creates a single table file named \`pathology-summary.csv\` (a \`csv\` is a simple table format that every spreadsheet program can open) with columns for date, specimen type, diagnosis, margins, and a "review" flag, ready to open in Excel. The numbers are illustrative, but work that takes you about an hour becomes a few minutes.

## Try it yourself

Take one non-sensitive PDF (a paper, a drug leaflet, a protocol), put it in an empty folder, tick **"Work in a Folder"** on it, and ask: "Summarize this file in three points." Under three minutes, and you already know the whole loop.

## Common mistakes

- **Pointing at a folder that still holds patient identifiers** (name, ID number). Fix: strip identifiers from the files first, and work on de-identified data only.
- **Forgetting to write "do not delete the source files".** Fix: include that sentence in every task, so the originals stay intact.
- **Hebrew comes out as gibberish in the output file.** Cause: wrong encoding. Fix: ask explicitly to save in UTF-8 (a standard for storing letters that makes Hebrew read correctly in any program).
- **Granting permission to too wide a folder** (the whole desktop). Fix: pick one narrow folder, only the one you need.

## Points to remember

- Instead of uploading files one by one, you point at one folder and Claude works on all of them.
- Three protective sentences in every task: no identifiers, do not delete the source, save in UTF-8.
- The output is a real file saved in your folder, ready to open in Excel.

## What is next

In the next lesson, [Dispatch and Routines](/academy/cowork/dispatch-and-routines), you will learn to send a task like this to the background and schedule it to run on its own.`,
  },
};

export default lesson;
