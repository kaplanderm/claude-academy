import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'derm-scenarios',
  track: 'cowork',
  title: { he: 'תרחישים רפואיים ל-Cowork', en: 'Dermatology Scenarios for Cowork' },
  description: {
    he: 'ארבעה תרחישים מעשיים מהמרפאה שאפשר להריץ ב-Cowork כבר היום, בלי קוד.',
    en: 'Four practical clinic scenarios you can run in Cowork today, with no code.',
  },
  duration: 9,
  updated: '2026-06-05',
  content: {
    he: `# תרחישים רפואיים ל-Cowork

כל אלה רצים בטאב Cowork עם "Work in a Folder", בלי שורת קוד אחת. זכור את כללי הפרטיות - עבוד על נתונים מעומעמים.

## 1. סידור תמונות דרמוסקופיה

500 תמונות מעורבבות בתיקייה, חלקן עם שם מטופל בקובץ:

\`\`\`
התיקייה מכילה תמונות דרמוסקופיה. סדר אותן לתיקיות לפי מטופל, ובתוך כל אחת לפי שנה.
קבצים בפורמט לא מזוהה - שים בתיקיית UNSORTED. אל תמחק את המקור.
בסוף הוצא דוח: כמה מטופלים, כמה תמונות לכל אחד, כמה הלכו ל-UNSORTED.
\`\`\`

## 2. סקירת ספרות מתיקיית מאמרים

\`\`\`
בתיקייה 50 מאמרים על Mohs מול excision ל-BCC בפנים.
חלק אותם ל-buckets נושאיים, הוצא טבלה (מחבר, שנה, סוג מחקר, מסקנה עיקרית),
וציין אילו שאלות עדיין לא נענו בספרות.
\`\`\`

## 3. סיכום שבועי של פעילות המרפאה

\`\`\`
בתיקייה קובצי סיכום יומי של השבוע. אחד את כולם לדוח שבועי:
מספר ביקורים, התפלגות אבחנות, מקרים שדורשים מעקב.
שמור כקובץ Word מעוצב.
\`\`\`

## 4. הכנת חומרי הסבר למטופלים

\`\`\`
צור 5 דפי הסבר למטופל (כל אחד עמוד אחד, שפה פשוטה, עברית):
מלנומה, BCC, SCC, קרטוזיס אקטינית, והגנה מהשמש.
שמור כל אחד כקובץ נפרד בתיקייה.
\`\`\`

:::beginner
בכל תרחיש, התהליך זהה: סמן "Work in a Folder", בחר תיקייה, הדבק את הבקשה, ואשר את הפעולות. אתה לא צריך לדעת איך Claude עושה את זה.
:::

:::advanced
לתרחישים חוזרים (סידור תמונות שבועי, סיכום מרפאה), הפוך אותם ל-Routine כדי שירוצו לבד. למשימות עם נתונים רגישים, העדף scheduled task מקומי בטאב Code על פני Routine בענן.
:::

סיימת את מסלול Cowork. עכשיו אל **הלב של האתר: Claude Code דרך הטאב Code**.`,
    en: `# Dermatology Scenarios for Cowork

All of these run in the Cowork tab with "Work in a Folder", with no line of code. Remember the privacy rules - work on de-identified data.

## 1. Organizing dermoscopy images

500 mixed images in a folder, some with a patient name in the filename:

\`\`\`
This folder contains dermoscopy images. Sort them into folders by patient, and within each by year.
Files in an unrecognized format - put in an UNSORTED folder. Do not delete the originals.
At the end output a report: how many patients, how many images each, how many went to UNSORTED.
\`\`\`

## 2. Literature review from a folder of papers

\`\`\`
The folder has 50 papers on Mohs vs excision for facial BCC.
Group them into thematic buckets, output a table (author, year, study type, main conclusion),
and note which questions the literature has not yet answered.
\`\`\`

## 3. Weekly clinic activity summary

\`\`\`
The folder has daily summary files for the week. Merge them into a weekly report:
number of visits, diagnosis distribution, cases needing follow-up.
Save as a formatted Word file.
\`\`\`

## 4. Preparing patient handouts

\`\`\`
Create 5 patient handouts (each one page, plain language, Hebrew):
melanoma, BCC, SCC, actinic keratosis, and sun protection.
Save each as a separate file in the folder.
\`\`\`

:::beginner
In every scenario the process is the same: tick "Work in a Folder", pick a folder, paste the request, and approve the actions. You do not need to know how Claude does it.
:::

:::advanced
For recurring scenarios (weekly image sorting, clinic summary), turn them into a Routine so they run by themselves. For tasks with sensitive data, prefer a local scheduled task in the Code tab over a cloud Routine.
:::

You have finished the Cowork track. Now to the **heart of the site: Claude Code through the Code tab**.`,
  },
};

export default lesson;
