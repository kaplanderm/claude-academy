import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'privacy-pii-safety',
  track: 'claude-code',
  title: { he: 'פרטיות והגנה על נתוני מטופלים', en: 'Privacy and Protecting Patient Data' },
  description: {
    he: 'הכללים שחובה להכיר: מה מותר, מה אסור, ואיך לעמעם.',
    en: 'The rules you must know: what is allowed, what is not, and how to de-identify.',
  },
  duration: 9,
  updated: '2026-06-06',
  content: {
    he: `# פרטיות והגנה על נתוני מטופלים

בסוף השיעור תוכל לעמעם דוח קליני בעצמך לפני שאתה מעלה אותו, כך שלא יישאר בו שום פרט שמזהה את המטופל.

## מה תלמד כאן

- תוכל לזהות אילו פרטים אסור להזין בחשבון רגיל ולמה.
- תוכל לקחת דוח אמיתי ולבקש מ-Claude לכתוב אותו מחדש בלי שם ובלי תעודת זהות.
- תוכל לוודא, בעין שלך, שהעמעום באמת הסיר את כל המזהים לפני ההעלאה.

## למה זה חשוב לך במרפאה

כל יום עוברים אצלך דוחות פתולוגיה, מכתבי הפניה ותמונות דרמוסקופיה שמלאים בשם מלא, תעודת זהות וטלפון. ברגע שאתה מצביע על תיקייה כזו, התוכן נשלח לעיבוד בענן. עמעום מקדים הוא מה שמרשה לך לקבל את עזרת Claude על החומר הקליני בלי לחשוף מטופל מזוהה. בלי הצעד הזה, גם סיכום יומי תמים של רשימת המטופלים הופך לחשיפה של מידע רפואי מזהה. זה ההבדל בין שימוש זהיר לבין דליפת מידע רפואי.

## ההסבר בפשטות

מידע מזהה (PII, מידע מזהה) הוא כל פרט שמאפשר להבין מי המטופל: שם מלא, מספר תעודת זהות, תאריך לידה מדויק, כתובת וטלפון. בחשבון רגיל (Pro או Max) אין הסכם עיבוד נתונים (BAA או DPA, הסכם עיבוד נתונים) בין Anthropic למרפאה, ולכן אסור להזין מזהים כאלה. דמיין שאתה שולח מקרה לעמית בקבוצת וואטסאפ: היית מטשטש את השם והתעודה לפני הצילום. אותו רעיון בדיוק - מעמעמים קודם, מעלים אחר כך.

:::beginner
"לעמעם" פירושו לקחת את אותו מקרה ולהשאיר רק את מה שרלוונטי רפואית - "גבר בן 60, נגע בלחי" - בלי שם ובלי תעודת זהות.
:::

## דוגמה מהמרפאה, צעד אחר צעד

נניח שיש לך קובץ דוח פתולוגיה אחד שאתה רוצה לסכם, אבל קודם צריך לנקות אותו ממזהים.

1. פתח את הכלי Claude, עבור לטאב Code ופתח שיחה (session) חדשה על תיקיית עבודה זמנית.
2. גרור לתיקייה עותק של הדוח, לא את המקור היחיד.
3. הדבק את הבקשה הבאה:

\`\`\`
קרא את הדוח שבתיקייה. כתוב אותו מחדש לקובץ חדש בשם report-clean.txt
והסר כל מזהה: שם מלא, מספר תעודת זהות, תאריך לידה מדויק, כתובת וטלפון.
במקום השם השתמש בקוד "מטופל 01", ובמקום תאריך הלידה כתוב גיל בלבד.
אל תשנה שום פרט קליני. בסוף, הצג לי רשימה של כל מה שהסרת.
\`\`\`

4. עבור על ה-diff (תצוגת לפני ואחרי) ועל הרשימה ש-Claude מחזיר, ואשר רק אם אין יותר מזהים.

אתה תראה קובץ חדש ונקי לצד הרשימה המפורטת של הפרטים שהוסרו, וכך תוכל לוודא בעצמך שהעמעום הצליח לפני שתמשיך לסכם.

## נסה בעצמך

קח פסקה ממאמר מקצועי או טקסט המצאה שלא קשור לאף מטופל אמיתי, והדבק ל-Claude: "שכתב את הפסקה הזו והחלף כל שם פרטי בקוד אות". בדוק שכל שם אכן הוחלף. תרגול קצר שמראה לך איך נראית בקשת עמעום.

## טעויות נפוצות

- **מעלים קובץ "רק כדי לבדוק" עם פרטים אמיתיים.** התיקון: עמעם קודם, תמיד, גם בבדיקה ראשונה.
- **סומכים על העמעום בלי לבדוק.** התיקון: קרא את הרשימה שהכלי מחזיר ועבור על ה-diff בעיניך.
- **חושבים ש"משימה מקומית" לא נשלחת לענן.** התיקון: גם משימה מקומית שולחת את הפרומפט והתוכן לדגם בענן, אז העמעום הוא ההגנה האמיתית.
- **מאשרים מחיקה או יצירת קובץ אוטומטית.** התיקון: קרא מה Claude עומד לעשות לפני שאתה מאשר.

## נקודות לזכירה

- עמעם לפני שאתה מעלה, בכל פעם, בלי יוצא מן הכלל.
- בחשבון רגיל אין הסכם עיבוד נתונים, ולכן מזהים אמיתיים אסורים.
- גם עיבוד מקומי שולח את התוכן לענן, אז ניקוי מקדים הוא שכבת ההגנה.

:::advanced
חוק הגנת הפרטיות בישראל, על תיקון 13, מחייב אותך לעבד מידע בריאות במצב מעומעם ולרשום את פעילות העיבוד במרפאה. לתאימות מלאה עם מידע מזהה דרושים Claude for Enterprise והסכם עיבוד נתונים חתום.
:::

> זהירות נוספת: שילוב של שליטה במחשב (Computer-use) עם תוכנת ניהול מטופלים פתוחה על המסך עלול לחשוף רשומות מזוהות. סגור את התוכנה הקלינית לפני הפעלת יכולת כזו.

## מה הלאה

המשך אל [המסלול הבא (אופציונלי): מתקדם](/academy/advanced), שפותח לך עבודה בטרמינל ובכלים למפתחים למי שרוצה להעמיק.`,
    en: `# Privacy and Protecting Patient Data

By the end of this lesson you will be able to de-identify a clinical report yourself before you upload it, so that no detail that identifies the patient is left in it.

## What you will learn

- You will be able to recognize which details must never be entered into a regular account, and why.
- You will be able to take a real report and ask Claude to rewrite it without a name and without an ID number.
- You will be able to confirm, with your own eyes, that the de-identification really removed every identifier before you upload.

## Why this matters in your clinic

Every day pathology reports, referral letters, and dermoscopy images pass through your hands, full of full names, ID numbers, and phone numbers. The moment you point at such a folder, the content is sent to the cloud for processing. De-identifying first is what lets you get Claude's help on the clinical material without exposing an identified patient. That is the difference between careful use and a leak of medical information.

## The plain explanation

Identifying information (PII, identifying information) is any detail that reveals who the patient is: full name, ID number, exact date of birth, address, and phone. On a regular account (Pro or Max) there is no data processing agreement (BAA or DPA, data processing agreement) between Anthropic and your clinic, so entering such identifiers is not allowed. Picture sending a case to a colleague in a WhatsApp group: you would blur out the name and ID before the photo. The same idea exactly - de-identify first, upload after.

:::beginner
"To de-identify" means taking the same case and keeping only what is medically relevant - "a 60-year-old man, a lesion on the cheek" - with no name and no ID number.
:::

## A clinic example, step by step

Say you have one pathology report file you want to summarize, but first it has to be cleaned of identifiers.

1. Open the tool Claude, go to the Code tab, and open a new conversation (session) on a temporary working folder.
2. Drag a copy of the report into the folder, not the single original.
3. Paste the following request:

\`\`\`
Read the report in the folder. Rewrite it into a new file called report-clean.txt
and remove every identifier: full name, ID number, exact date of birth, address, and phone.
Instead of the name use the code "Patient 01", and instead of the date of birth write age only.
Do not change any clinical detail. At the end, show me a list of everything you removed.
\`\`\`

4. Go over the diff (a before-and-after view) and the list Claude returns, and approve only if no identifiers remain.

You will see a new, clean file alongside the detailed list of removed details, so you can confirm for yourself that the de-identification succeeded before you go on to summarize.

## Try it yourself

Take a paragraph from a professional article or a made-up text not tied to any real patient, and paste to Claude: "Rewrite this paragraph and replace every first name with a letter code". Check that every name was indeed replaced. A short drill that shows you what a de-identification request looks like.

## Common mistakes

- **Uploading a file "just to test" with real details.** The fix: de-identify first, always, even on a first test.
- **Trusting the de-identification without checking.** The fix: read the list the tool returns and go over the diff with your own eyes.
- **Thinking a "local task" is not sent to the cloud.** The fix: even a local task sends the prompt and content to the model in the cloud, so de-identification is the real protection.
- **Approving file deletion or creation automatically.** The fix: read what Claude is about to do before you approve.

## Points to remember

- De-identify before you upload, every time, with no exceptions.
- A regular account has no data processing agreement, so real identifiers are not allowed.
- Even local processing sends the content to the cloud, so cleaning first is the layer of protection.

:::advanced
The Privacy Protection Law in Israel, with Amendment 13, requires you to process health information in a de-identified form and to register the processing activity at the clinic. Full compliance with identifying data needs Claude for Enterprise and a signed data processing agreement.
:::

> Extra caution: combining computer control (Computer-use) with patient-management software left open on screen can expose identified records. Close the clinical software before turning on such a capability.

## What is next

Continue to [the next track (optional): advanced](/academy/advanced), which opens up working in the terminal and developer tools for anyone who wants to go deeper.`,
  },
};

export default lesson;
