import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'the-code-tab',
  track: 'claude-code',
  title: { he: 'הטאב Code - sessions, תיקיית פרויקט וה-sidebar', en: 'The Code Tab - Sessions, Project Folder, and the Sidebar' },
  description: {
    he: 'סיור בממשק הגרפי: לפתוח session, לבחור תיקייה, ולעבוד במקביל.',
    en: 'A tour of the GUI: open a session, pick a folder, and work in parallel.',
  },
  duration: 9,
  updated: '2026-06-06',
  content: {
    he: `אחרי השיעור הזה תדע לפתוח שיחת עבודה חדשה בטאב Code, להצמיד לה תיקייה, ולמצוא אותה ברשימה שבצד.

## מה תלמד כאן

- תוכל לפתוח שיחת עבודה (session) חדשה ולחבר אותה לתיקייה אחת במחשב.
- תוכל למצוא את כל השיחות הפתוחות שלך ברשימה שבצד (sidebar) ולעבור ביניהן.
- תוכל להריץ כמה שיחות במקביל, כל אחת על תיקייה משלה.

## למה זה חשוב לך במרפאה

נניח שאתה רוצה לארגן את דוחות הפתולוגיה של החודש בתיקייה אחת, ובמקביל לנסח מכתב הפניה בתיקייה אחרת. בלי שיחות נפרדות הכול מתערבב, וקשה לזכור איפה עצרת. בטאב Code כל משימה יושבת בשיחה משלה, עם התיקייה שלה וההיסטוריה שלה, כך שתוכל לחזור אליה מחר בדיוק במקום שעזבת. כך אפשר להחזיק במקביל שיחה אחת לסיכום היומי של המרפאה, שיחה נוספת לסידור תמונות דרמוסקופיה, ושיחה שלישית לטיוטת מכתב למטופל, בלי שאחת תדרוס את השנייה.

## ההסבר בפשטות

שיחת עבודה (session) היא פשוט סביבת עבודה אחת: תיקייה אחת במחשב, ושיחה אחת מתמשכת מול הכלי \`Claude\` שזוכרת מה כבר נעשה בה. כל שיחה עומדת בפני עצמה ולא רואה את התיקיות של השיחות האחרות, כך שמה שעשית בשיחה אחת לא דולף לאחרת. בכל פעם שאתה פותח שיחה חדשה אתה בעצם פותח שולחן עבודה נקי, מצמיד אליו תיקייה אחת, ומתחיל לעבוד.

תחשוב על זה כמו על שולחנות עבודה בחדר הרופאים. על כל שולחן יושב תיק מטופל אחד עם כל הניירת שלו. אתה יכול לעבור משולחן לשולחן, אבל הניירת לא מתערבבת, וכל שולחן זוכר היכן עצרת בו. הרשימה שבצד (sidebar) היא בעצם מפת השולחנות - היא מראה לך אילו שיחות פתוחות, מה שם התיקייה של כל אחת, ובלחיצה אחת אתה קופץ לכל אחת מהן. מכיוון שכל שיחה שמורה, אתה לא חייב לסיים משימה בישיבה אחת: אפשר לעזוב באמצע, לטפל במטופל, ולחזור.

:::beginner
בתוך הטאב Code יש גם חלון טרמינל (חלון פקודות טקסט). הוא אופציונלי לחלוטין. מתחיל יכול להתעלם ממנו ולעבוד שעות בלי לפתוח אותו - הכול נעשה בעברית בתיבת השיחה.
:::

## דוגמה מהמרפאה, צעד אחר צעד

המשימה: לפתוח שיחה חדשה על תיקייה לא רגישה ולקבל רשימה של מה שיש בה.

1. פתח את אפליקציית \`Claude\` ולחץ על הטאב **Code** למעלה.
2. לחץ על כפתור **New session** (שיחה חדשה) בראש הרשימה שבצד.
3. לחץ על **Choose folder** (בחר תיקייה) ובחר תיקייה לא רגישה, למשל תיקיית הדגמה ריקה שיצרת לעצמך.
4. בתיבת השיחה למטה הקלד את הבקשה והקש על מקש \`Enter\`.

\`\`\`
תעבור על התיקייה הזאת ותראה לי רשימה של כל הקבצים שיש בה, מסודרים לפי סוג.
\`\`\`

לאחר כמה שניות תראה בתוך השיחה רשימה מסודרת של הקבצים, והשיחה תופיע ברשימה שבצד עם שם התיקייה. מעכשיו כל בקשה שתכתוב בשיחה הזאת תעבוד על אותה תיקייה, בלי שתצטרך לבחור אותה שוב.

> טיפ: כדי לפתוח שיחה חדשה במקלדת, השתמש בצירוף \`Ctrl+N\` ב-Windows או בצירוף \`Cmd+N\` במחשב מסוג Mac. רוצה לפתוח שיחה שנייה במקביל בלי לסגור את הראשונה? פשוט פתח עוד שיחה חדשה והצמד לה תיקייה אחרת.

## נסה בעצמך

- [ ] פתח שיחה חדשה על תיקיית ההורדות שלך או על תיקיית הדגמה ריקה, ובקש: "תראה לי כמה קבצים יש כאן ומאיזה סוג." זה לוקח פחות משלוש דקות ואינו נוגע בנתוני מטופלים. אחרי שתקבל את הרשימה, הסתכל ברשימה שבצד וודא שהשיחה החדשה מופיעה שם עם שם התיקייה שבחרת.

## טעויות נפוצות

- **פתיחת שיחה על תיקייה רגישה.** אל תצביע על תיקייה עם מסמכי מטופלים אמיתיים. הפתרון: צור תיקייה נפרדת להתנסות, או הצבע על תיקייה ללא נתונים מזהים.
- **לחשוב שחובה להשתמש בטרמינל.** חלון הפקודות אופציונלי. הפתרון: התעלם ממנו ופשוט כתוב את הבקשה בעברית בתיבת השיחה.
- **לבלבל בין שיחות.** אם פתחת כמה שיחות, קל לכתוב בקשה בשיחה הלא נכונה. הפתרון: לפני שאתה כותב, ודא ברשימה שבצד שאתה עומד על השיחה הנכונה.

## נקודות לזכירה

- שיחה (session) היא סביבת עבודה אחת עם תיקייה אחת והיסטוריה משלה, והיא נשמרת כדי שתוכל לחזור אליה.
- הרשימה שבצד (sidebar) מרכזת את כל השיחות, ואפשר להריץ כמה במקביל בלי שיתערבבו.
- הטרמינל בטאב Code הוא אופציונלי, ומתחיל יכול להתעלם ממנו לגמרי ולעבוד רק בעברית.

:::advanced
כל שיחה מבודדת לחלוטין, עם תיקייה והיסטוריה נפרדות משלה, כך שאפשר להריץ כמה שיחות במקביל בלי שיתערבבו זו בזו. מצבי התצוגה (Verbose, Normal, Summary) קובעים כמה מהפעילות צעד-אחר-צעד תראה על המסך. בנוסף, שיחת צד מאפשרת לך לשאול שאלה קצרה בלי להפריע למשימה המרכזית שרצה.
:::

## מה הלאה

בשיעור הבא, [עבודה עם קבצים](/academy/claude-code/working-with-files), תלמד לראות בדיוק מה Claude עומד לשנות לפני שזה נשמר, ולאשר או לדחות כל שינוי.`,
    en: `After this lesson you will be able to open a new work conversation in the Code tab, attach a folder to it, and find it again in the list on the side.

## What you will learn

- You will be able to open a new work conversation (session) and connect it to one folder on your computer.
- You will be able to find all your open conversations in the list on the side (sidebar) and switch between them.
- You will be able to run several conversations in parallel, each on its own folder.

## Why this matters in your clinic

Suppose you want to organize this month's pathology reports in one folder, and at the same time draft a referral letter in another folder. Without separate conversations everything blends together, and it is hard to remember where you stopped. In the Code tab each task sits in its own conversation, with its own folder and its own history, so you can come back to it tomorrow exactly where you left off. This way you can hold, in parallel, one conversation for the clinic's daily summary, another for sorting dermoscopy images, and a third for a draft letter to a patient, without one overrunning the other.

## The plain explanation

A work conversation (session) is simply one workspace: one folder on your computer, and one ongoing conversation with the \`Claude\` tool that remembers what has already been done in it. Each conversation stands on its own and does not see the folders of the other conversations, so what you did in one conversation does not leak into another. Each time you open a new conversation you are opening a clean desk, attaching one folder to it, and getting to work.

Think of it like the desks in the doctors' room. On each desk sits one patient file with all of its paperwork. You can move from desk to desk, but the paperwork does not get mixed up, and each desk remembers where you left it. The list on the side (sidebar) is the map of the desks - it shows you which conversations are open, the folder name of each, and with one click you jump to each of them. Because every conversation is saved, you do not have to finish a task in one sitting: you can leave in the middle, see a patient, and come back.

:::beginner
Inside the Code tab there is also a terminal window (a text-command window). It is entirely optional. A beginner can ignore it and work for hours without opening it - everything is done in plain language in the conversation box.
:::

## A clinic example, step by step

The task: open a new conversation on a non-sensitive folder and get a list of what is inside it.

1. Open the \`Claude\` app and click the **Code** tab at the top.
2. Click the **New session** button at the top of the list on the side.
3. Click **Choose folder** and pick a non-sensitive folder, for example an empty demo folder you made for yourself.
4. In the conversation box at the bottom type the request and press Enter.

\`\`\`
Go over this folder and show me a list of all the files in it, grouped by type.
\`\`\`

After a few seconds you will see an organized list of the files inside the conversation, and the conversation will appear in the list on the side with the folder name. From now on every request you write in this conversation works on that same folder, without your having to choose it again.

> Tip: to open a new conversation from the keyboard, use Ctrl+N on Windows or Cmd+N on Mac. Want a second conversation in parallel without closing the first? Just open another new conversation and attach a different folder to it.

## Try it yourself

- [ ] Open a new conversation on your Downloads folder or on an empty demo folder, and ask: "Show me how many files are here and of what type." This takes under three minutes and touches no patient data. After you get the list, look at the list on the side and confirm the new conversation appears there with the folder name you chose.

## Common mistakes

- **Opening a conversation on a sensitive folder.** Do not point at a folder with real patient documents. The fix: create a separate folder to experiment in, or point at a folder with no identifying data.
- **Thinking you must use the terminal.** The command window is optional. The fix: ignore it and simply type your request in plain language in the conversation box.
- **Mixing up conversations.** If you have several conversations open, it is easy to type a request into the wrong one. The fix: before you type, confirm in the list on the side that you are on the right conversation.

## Points to remember

- A conversation (session) is one workspace with one folder and its own history, and it is saved so you can return to it.
- The list on the side (sidebar) holds all your conversations, and you can run several in parallel without mixing them.
- The terminal in the Code tab is optional, and a beginner can ignore it entirely and work only in plain language.

:::advanced
Each conversation is fully isolated, with its own folder and history, so you can run several in parallel without them mixing into one another. The view modes (Verbose, Normal, Summary) control how much of the step-by-step activity you see on screen. A side chat also lets you ask a quick question without disturbing the main task that is running.
:::

## What is next

In the next lesson, [Working with files](/academy/claude-code/working-with-files), you will learn to see exactly what Claude is about to change before it is saved, and to approve or reject each change.`,
  },
};

export default lesson;
