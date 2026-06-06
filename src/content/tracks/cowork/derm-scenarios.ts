import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'derm-scenarios',
  track: 'cowork',
  title: { he: 'תרחישים רפואיים ל-Cowork', en: 'Dermatology Scenarios for Cowork' },
  description: {
    he: 'ארבעה תרחישים מעשיים מהמרפאה, בלי קוד.',
    en: 'Four practical clinic scenarios, with no code.',
  },
  duration: 9,
  updated: '2026-06-06',
  content: {
    he: `אחרי השיעור הזה תוכל להריץ ארבע משימות אמיתיות מהמרפאה בטאב \`Cowork\`, בלי שורת קוד אחת, על נתונים מעומעמים בלבד.

## מה תלמד כאן

- תוכל לקחת ערימת דוחות פתולוגיה ולקבל טבלת סיכום מסודרת בקובץ אחד.
- תוכל לזהות תבנית אחת שחוזרת בכל משימה ולהחיל אותה על כל תרחיש חדש.
- תוכל לנסח בקשה שמגינה על קובצי המקור ולא מוחקת כלום.

## למה זה חשוב לך במרפאה

בסוף שבוע מצטברים אצלך עשרות דוחות פתולוגיה בקובצי \`PDF\`, תיקיות עמוסות בתמונות דרמוסקופיה, ורשימות מטופלים שצריך לקרוא להם למעקב. במקום לפתוח כל קובץ ידנית ולהקליד לאקסל, אתה מצביע על התיקייה ומקבל קובץ מוכן. השיעור הזה מסיר בדיוק את העבודה הידנית הזו - קריאת דוחות, סידור תמונות, בניית רשימות מעקב, והכנת סיכום מאמרים למפגש כתב עת (journal club). אלה בדיוק המשימות שאוכלות לך שעות בסוף יום במרפאה, וכאן הן הופכות לדקות.

## ההסבר בפשטות

התבנית זהה בכל פעם: מצביעים על תיקייה, מתארים את המשימה במילים פשוטות, ומקבלים קובץ. זה כמו לתת לעוזר במרפאה תיק מלא ניירת ולומר לו "תסכם לי את זה לטבלה" - אתה לא מסביר לו איך לקרוא כל דף, רק מה אתה רוצה בסוף. הטאב \`Cowork\` הוא סביבת עבודה סוכנותית (agentic), כלומר Claude מבצע משימה ארוכה לבד ומחזיר קבצים מוכנים, והוא עובד בדיוק אותו דבר.

ברגע שהתבנית הזו ברורה לך, כל תרחיש חדש הוא רק וריאציה עליה: אותם שלושה צעדים, רק בקשה אחרת. אתה לא לומד ארבע משימות שונות, אלא משימה אחת עם ארבעה ניסוחים. זו בדיוק הסיבה שאפשר להתחיל כבר היום בלי שום רקע טכני.

## דוגמה מהמרפאה, צעד אחר צעד

נניח שבתיקייה אחת יש 30 דוחות פתולוגיה כקובצי PDF מעומעמים (בלי שם וללא תעודת זהות, רק קוד מטופל ותאריך). המטרה: טבלת סיכום אחת.

1. פתח את הטאב \`Cowork\` באפליקציית \`Claude Desktop\` שבמחשב.
2. סמן למטה את התיבה **"Work in a Folder"**.
3. בחר את התיקייה עם דוחות הפתולוגיה.
4. כש-Claude יבקש הרשאה לקרוא ולכתוב בתיקייה, אשר רק לתיקייה הזו.
5. הדבק את הבקשה הבאה ולחץ שליחה.

\`\`\`
קרא את כל קובצי ה-PDF בתיקייה הזו.
לכל דוח הוצא: קוד מטופל, תאריך, סוג החומר, אבחנה סופית, מצב השוליים.
סמן ירוק אם השוליים נקיים, אדום אם מעורבים.
שמור טבלה כקובץ Excel בשם pathology-summary.xlsx באותה תיקייה.
שמור את כל קובצי המקור כמו שהם, אל תמחק ואל תשנה אותם.
בסוף ספור כמה מקרים ממאירים, כמה לא-ודאיים וכמה שפירים.
\`\`\`

מה תראה: קובץ \`pathology-summary.xlsx\` חדש מופיע בתיקייה, עם שורה לכל דוח, צבע לכל שוליים, ושורת ספירה בסוף - כל קובצי ה-PDF המקוריים נשארים במקומם.

## נסה בעצמך

צור תיקייה עם שלושה קובצי טקסט קצרים שכתבת בעצמך (לא נתוני מטופלים), הצבע עליה ב-\`Cowork\`, ובקש "אחד את שלושת הקבצים לטבלה אחת לפי נושא ושמור כקובץ \`Excel\`". פחות משלוש דקות, ואתה רואה את התבנית עובדת.

## שלושה תרחישים נוספים, בקצרה

אותה תבנית, בקשות שונות. אלה התרחישים שתפגוש הכי הרבה:

\`\`\`
סדר את תמונות הדרמוסקופיה בתיקייה הזו לתיקיות לפי קוד מטופל,
ובתוך כל אחת לפי תאריך. אל תשתמש בשם מטופל בשום שלב.
שמור את כל הקבצים המקוריים, אל תמחק כלום.
\`\`\`

\`\`\`
מהקבצים בתיקייה הזו בנה רשימת מעקב: לכל קוד מטופל,
תאריך הביקור האחרון והפעולה הנדרשת. שמור כקובץ Excel ממוין לפי דחיפות.
\`\`\`

\`\`\`
בתיקייה הזו יש מאמרים אחרונים. הכן סיכום ל-journal club:
לכל מאמר שורה אחת עם מחבר, שנה, שאלת המחקר והמסקנה העיקרית.
שמור כקובץ Word מעוצב.
\`\`\`

## טעויות נפוצות

- **שכחת לבקש לשמור את המקור.** בלי המשפט "אל תמחק ואל תשנה את הקבצים המקוריים", פעולת סידור עלולה להזיז או לדרוס קבצים. הוסף אותו תמיד.
- **ביקשת לסדר לפי שם מטופל.** סדר תמיד לפי קוד מטופל ותאריך, לעולם לא לפי שם - כך הנתונים נשארים מעומעמים.
- **הצבעת על תיקייה עם מזהים מלאים.** עמעם קודם (קוד במקום שם ותעודת זהות), ורק אז הצבע על התיקייה.
- **אישרת הרשאה לתיקייה רחבה מדי.** אשר רק לתיקייה הספציפית של המשימה, לא לכל הדיסק.

## נקודות לזכירה

- התהליך זהה בכל פעם: הצבע על תיקייה, תאר את המשימה, קבל קובץ.
- כל תרחיש חדש הוא וריאציה על אותה תבנית, רק עם בקשה אחרת.
- שמור על המקור ועל העמעום בכל בקשה, בלי יוצא מן הכלל.

## מה הלאה

עכשיו שאתה שולט בתבנית בלי קוד, הצעד הבא נותן לך לראות ולאשר כל שינוי לפני שהוא קורה: [המסלול הבא: Claude Code](/academy/claude-code).`,
    en: `After this lesson you will be able to run four real clinic tasks in the Cowork tab, with no line of code, on de-identified data only.

## What you will learn here

- You will be able to take a stack of pathology reports and get one tidy summary table file.
- You will be able to spot the one pattern that repeats in every task and apply it to any new scenario.
- You will be able to phrase a request that protects the source files and deletes nothing.

## Why this matters in your clinic

By the end of a week you have dozens of pathology reports as PDF files, folders crammed with dermoscopy images, and patient lists you need to call for follow-up. Instead of opening each file by hand and typing into Excel, you point at the folder and get a finished file. This lesson removes exactly that manual work - reading reports, sorting images, building follow-up lists, and preparing a paper summary for journal club. These are the tasks that eat hours at the end of a clinic day, and here they become minutes.

## The plain explanation

The process is the same every time: point at a folder, describe the task in plain words, get a file. It is like handing an assistant in the clinic a binder full of paperwork and saying "summarize this into a table" - you do not explain how to read each page, only what you want at the end. The Cowork tab (an agentic workspace, meaning Claude performs a long task on its own and hands back finished files) works the same way.

Once that pattern is clear to you, every new scenario is just a variation on it: the same three steps, only a different request. You are not learning four different tasks, but one task with four phrasings. That is exactly why you can start today with no technical background.

## A clinic example, step by step

Suppose one folder holds 30 de-identified pathology reports as PDF files (no name, no ID, only a patient code and a date). The goal: one summary table.

1. Open the Cowork tab in the Claude Desktop app.
2. Tick the **"Work in a Folder"** box at the bottom.
3. Pick the folder with the pathology reports.
4. When Claude asks for permission to read and write in the folder, grant it for that folder only.
5. Paste the request below and send.

\`\`\`
Read all the PDF files in this folder.
For each report extract: patient code, date, specimen type, final diagnosis, margin status.
Mark green if margins are clear, red if involved.
Save a table as an Excel file named pathology-summary.xlsx in the same folder.
Keep every source file exactly as it is, do not delete or change them.
At the end count how many cases are malignant, uncertain, and benign.
\`\`\`

What you will see: a new \`pathology-summary.xlsx\` file appears in the folder, with one row per report, a color for each margin, and a count row at the end - all the original PDF files stay where they were.

## Try it yourself

Create a folder with three short text files you wrote yourself (not patient data), point at it in Cowork, and ask "merge the three files into one table by topic and save as an Excel file". Under three minutes, and you see the pattern work.

## Three more scenarios, briefly

Same pattern, different requests. These are the ones you will meet most:

\`\`\`
Sort the dermoscopy images in this folder into folders by patient code,
and within each by date. Do not use a patient name at any step.
Keep every original file, do not delete anything.
\`\`\`

\`\`\`
From the files in this folder build a follow-up list: for each patient code,
the last visit date and the action needed. Save as an Excel file sorted by urgency.
\`\`\`

\`\`\`
This folder has recent papers. Prepare a journal-club summary:
one row per paper with author, year, research question, and main conclusion.
Save as a formatted Word file.
\`\`\`

## Common mistakes

- **You forgot to ask to keep the originals.** Without the line "do not delete or change the original files", a sorting task may move or overwrite files. Always add it.
- **You asked to sort by patient name.** Always sort by patient code and date, never by name - that keeps the data de-identified.
- **You pointed at a folder with full identifiers.** De-identify first (a code instead of name and ID), and only then point at the folder.
- **You granted permission to too broad a folder.** Grant it only for the specific task folder, not the whole disk.

## Points to remember

- The process is the same every time: point at a folder, describe the task, get a file.
- Every new scenario is a variation on the same pattern, just with a different request.
- Protect the originals and keep the de-identification in every request, with no exception.

## What is next

Now that you have the no-code pattern, the next step lets you see and approve every change before it happens: [Next track: Claude Code](/academy/claude-code).`,
  },
};

export default lesson;
