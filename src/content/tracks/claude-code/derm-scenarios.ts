import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'derm-scenarios',
  track: 'claude-code',
  title: { he: 'תרחישים רפואיים מלאים בטאב Code', en: 'Full Dermatology Scenarios in the Code Tab' },
  description: { he: 'שלוש משימות מלאות מהמרפאה, מתחילתן ועד הפלט.', en: 'Three complete clinic tasks, start to output.' },
  duration: 10,
  updated: '2026-06-06',
  content: {
    he: `בסוף השיעור תדע להריץ שלוש משימות מרפאה שלמות בטאב Code, ולבדוק כל פלט בעיניים שלך לפני שהוא יוצא החוצה.

## מה תלמד כאן

- תוכל להפוך דוחות פתולוגיה מעומעמים לטבלת Excel מסודרת, ולאשר את ה-diff לפני השמירה.
- תוכל ליצור דף הסבר למטופל כקובץ HTML ולראות אותו בתצוגה מקדימה לפני ההורדה.
- תוכל לבנות טבלת סקירת ספרות מתומצתת ממספר מקורות, בקובץ אחד.

## למה זה חשוב לך במרפאה

כל שבוע נערמים אצלך דוחות פתולוגיה, בקשות לדף הסבר אחרי כריתת Mohs, ומאמרים שצריך לרכז לפני הרצאה. בטאב Code אתה לא רק מקבל תוצאה - אתה **רואה** את השינוי לפני שהוא נשמר, ורואה את דף ההסבר לפני שהוא מגיע למטופל. ההבדל הזה הופך משימה מלחיצה למשימה בטוחה, כי שום דבר לא נשמר בלי שאישרת אותו.

## ההסבר בפשטות

בטאב Code כל שיחה (session) פתוחה על תיקיית פרויקט, וכל שינוי בקובץ מוצג כ-diff (תצוגת "לפני ואחרי", ירוק לנוסף, אדום למה שהוסר) שאתה מאשר או דוחה לפני שהוא נשמר.

תחשוב על זה כמו עוזר מחקר שמניח על השולחן את הטיוטה עם הסימונים בעיפרון, ואתה מסמן מה לאשר לפני שזה נכנס לתיק. שום מסמך לא יוצא בלי החתימה שלך.

:::beginner
diff זה פשוט תצוגה של "מה היה" מול "מה יהיה", ירוק לשורה שנוספה ואדום לשורה שהוסרה. אל תדאג: כלום לא נשמר עד שתלחץ אישור, ואם משהו לא נראה לך פשוט תדחה והכל נשאר כמו שהיה. זו רק הצעה שמחכה לך על השולחן.
:::

## דוגמה מהמרפאה, צעד אחר צעד

נתחיל במשימה המלאה הראשונה: שלושה דוחות פתולוגיה מעומעמים שהופכים לטבלת Excel.

1. פתח את הטאב Code, ולחץ על **שיחה חדשה** בסרגל הצד.
2. בחר תיקיית פרויקט ריקה ייעודית, למשל \`path-batch\`, ושים בה שלושה קובצי PDF מעומעמים (בלי שם, בלי תעודת זהות, רק ממצא פתולוגי ותאריך).
3. הקלד את הבקשה הבאה בתיבת הצ'אט:

\`\`\`
קרא את שלושת קובצי ה-PDF בתיקייה הזו. הם דוחות פתולוגיה מעומעמים, בלי שום פרט מזהה.
צור קובץ Excel בשם path-summary.xlsx עם העמודות: מספר דגימה, תאריך, אתר אנטומי, אבחנה, עומק חדירה, שולי כריתה.
שורה אחת לכל דוח. אל תמציא ערכים חסרים - השאר תא ריק.
\`\`\`

4. המתן עד ש-Claude מסיים, ואז עבור על ה-diff שהוא מציג לקובץ \`path-summary.xlsx\` - בדוק שכל שורה תואמת לדוח המקור.
5. אם שורה שגויה, כתוב למשל "בדגימה 2 עומק החדירה צריך להיות 1.2 מ\\"מ", ואז לחץ **אישור** לשמירה.

מה שתראה: טבלה מסודרת בתצוגה, עם הדגשה ירוקה על מה שנוסף, ואתה מאשר רק אחרי שווידאת שכל ערך נכון.

### משימה שנייה: דף הסבר למטופל בקובץ HTML

קובץ HTML הוא דף אינטרנט בודד שאפשר לפתוח בכל דפדפן. הנה הבקשה:

\`\`\`
צור קובץ handout.html: דף הסבר למטופל בעברית על טיפול בבית לאחר כריתת Mohs.
מעוצב, נקי, כותרות ברורות, בלי שום פרט מזהה. הצג לי תצוגה מקדימה.
\`\`\`

פלט צפוי: דף HTML מעוצב שמופיע בתצוגה המקדימה בתוך האפליקציה, מוכן להורדה אחרי שתאשר את הניסוח.

### משימה שלישית: טבלת סקירת ספרות

המשימה הזו מסכמת מאמרים על כריתת Mohs בקרצינומה בזלית (BCC). הנה הבקשה:

\`\`\`
מצורפים שלושה תקצירי מאמרים על Mohs ב-BCC. צור טבלת סקירה בקובץ lit-review.md
עם העמודות: מחבר ושנה, מערך מחקר, מספר נבדקים, שיעור הישנות, מסקנה עיקרית.
\`\`\`

פלט צפוי: קובץ אחד בפורמט Markdown (פורמט טקסט פשוט עם טבלאות), עם טבלת השוואה בת שורה אחת לכל מאמר, מוכן לתצוגה מקדימה ולאישור.

## נסה בעצמך

צור תיקייה ריקה, שים בה קובץ טקסט קצר עם שלוש שורות ממומצאות (אתר, אבחנה, תאריך - בלי שם), ובקש מ-Claude להפוך אותן לטבלת \`demo.md\`. עבור על ה-diff ואשר. פחות משלוש דקות.

## טעויות נפוצות

- **טעות:** אתה מאשר את ה-diff בלי לקרוא, ושומר ערך שגוי לטבלה. **תיקון:** קרא כל שורה ירוקה מול הדוח המקורי לפני שתלחץ אישור.
- **טעות:** העלית PDF עם שם מטופל או תעודת זהות גלויים. **תיקון:** עמעם את כל הפרטים המזהים בקובץ המקור עוד לפני ההעלאה.
- **טעות:** ביקשת דף HTML והורדת אותו בלי לפתוח תצוגה מקדימה. **תיקון:** בקש במפורש "הצג תצוגה מקדימה", וקרא את הדף לפני ההורדה.
- **טעות:** ערך חסר בדוח, ו-Claude השלים אותו בניחוש. **תיקון:** כתוב בבקשה "אל תמציא ערכים חסרים, השאר תא ריק".

## נקודות לזכירה

- בטאב Code שום קובץ לא נשמר לפני שאישרת את ה-diff בעצמך.
- תצוגה מקדימה ל-HTML נותנת לך לראות את דף ההסבר כפי שהמטופל יראה אותו, לפני ההורדה.
- עבוד תמיד על נתונים מעומעמים בלבד, כבר משלב יצירת הקובץ.

:::advanced
למשימות ענק אפשר להריץ את המודל ברמת מאמץ גבוהה או במצב /fast (מהיר עד פי 2.5 בפלט), ו-Dynamic Workflows יכולים לפצל משימה עצומה בין מספר עוזרים שעובדים במקביל. זה שימושי בהיקפים גדולים, אבל כמעט אף פעם לא נדרש למשימה בודדת של המרפאה. בכל מצב, ה-diff והתצוגה המקדימה נשארים נקודת הבדיקה שלך לפני אישור.
:::

## מה הלאה

השיעור הבא, [פרטיות והגנה על נתוני מטופלים](/academy/claude-code/privacy-pii-safety), ייתן לך את הכללים המדויקים לעמעום נכון לפני כל משימה כזו.`,
    en: `By the end of this lesson you will be able to run three complete clinic tasks in the Code tab, and check every output with your own eyes before it leaves the room.

## What you will learn

- You will be able to turn de-identified pathology reports into a tidy Excel sheet, approving the diff before saving.
- You will be able to create a patient handout as an HTML file and view it in a preview before downloading.
- You will be able to build a condensed literature-review table from several sources, in one file.

## Why this matters in your clinic

Every week pathology reports pile up, requests for a post-Mohs handout come in, and articles need collecting before a talk. In the Code tab you do not just get a result - you **see** the change before it is saved, and you see the handout before it reaches the patient. That difference turns a stressful task into a safe one, because nothing is saved without your approval.

## The explanation, simply

In the Code tab each session is open on a project folder, and every file change is shown as a diff (a "before and after" view, green for added, red for removed) that you approve or reject before it is saved.

Think of it like a research assistant who lays the marked-up draft on your desk in pencil, and you mark what to approve before it goes into the file. No document leaves without your sign-off.

:::beginner
A diff is simply a view of "what was there" next to "what would change", green for an added line and red for a removed line. Do not worry: nothing is saved until you click approve, and if something looks off you just reject and everything stays as it was. It is only a suggestion waiting for you on the desk.
:::

## A clinic example, step by step

We start with the first full task: three de-identified pathology reports turned into an Excel sheet.

1. Open the Code tab and click **New session** in the sidebar.
2. Choose a dedicated empty project folder, for example \`path-batch\`, and put three de-identified PDF files in it (no name, no ID number, only the pathology finding and a date).
3. Type the following request into the chat box:

\`\`\`
Read the three PDF files in this folder. They are de-identified pathology reports, with no identifying details.
Create an Excel file named path-summary.xlsx with the columns: sample number, date, anatomical site, diagnosis, depth of invasion, excision margins.
One row per report. Do not invent missing values - leave the cell empty.
\`\`\`

4. Wait until Claude finishes, then review the diff it shows for \`path-summary.xlsx\` - check that each row matches the source report.
5. If a row is wrong, write for example "for sample 2 the depth of invasion should be 1.2 mm", then click **Approve** to save.

What you will see: a tidy table in the view, with green highlighting on what was added, and you approve only after confirming every value is correct.

### Second task: a patient handout as an HTML file

An HTML file is a single web page you can open in any browser. Here is the request:

\`\`\`
Create a file handout.html: a patient handout in Hebrew on home care after Mohs excision.
Styled, clean, clear headings, no identifying details. Show me a preview.
\`\`\`

Expected output: a styled HTML page that appears in the preview inside the app, ready to download once you approve the wording.

### Third task: a literature-review table

This task summarizes articles on Mohs excision in basal cell carcinoma (BCC). Here is the request:

\`\`\`
Attached are three article abstracts on Mohs in BCC. Create a review table in a file lit-review.md
with the columns: author and year, study design, number of subjects, recurrence rate, main conclusion.
\`\`\`

Expected output: a single file in Markdown format (a plain-text format that supports tables) with a comparison table, one row per article, ready for preview and approval.

## Try it yourself

Create an empty folder, put in it a short text file with three made-up lines (site, diagnosis, date - no name), and ask Claude to turn them into a \`demo.md\` table. Review the diff and approve. Under three minutes.

## Common mistakes

- **Mistake:** you approve the diff without reading, and save a wrong value to the table. **Fix:** read each green line against the original report before clicking approve.
- **Mistake:** you uploaded a PDF with a visible patient name or ID number. **Fix:** de-identify every detail in the source file before uploading.
- **Mistake:** you asked for an HTML page and downloaded it without opening a preview. **Fix:** ask explicitly for "show a preview", and read the page before downloading.
- **Mistake:** a value is missing in the report, and Claude filled it in by guessing. **Fix:** write in the request "do not invent missing values, leave the cell empty".

## Points to remember

- In the Code tab no file is saved before you approve the diff yourself.
- A preview for HTML lets you see the handout as the patient will see it, before downloading.
- Always work on de-identified data only, from the moment the file is created.

:::advanced
For very large jobs you can run the model at high effort or in /fast mode (output up to 2.5x faster), and Dynamic Workflows can split a huge task across several helpers working in parallel. This is useful at scale, but it is rarely needed for a single clinic task. Either way, the diff and the preview stay your review checkpoint before you approve.
:::

## What is next

The next lesson, [Privacy and Protecting Patient Data](/academy/claude-code/privacy-pii-safety), gives you the exact rules for proper de-identification before every task like these.`,
  },
};

export default lesson;
