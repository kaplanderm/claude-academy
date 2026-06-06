import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'usage-paths',
  track: 'getting-started',
  title: { he: 'איפה מריצים את Claude - דרכי השימוש', en: 'Ways to Use Claude - Where You Run It' },
  description: {
    he: 'אתר, Desktop, מובייל - מה מתאים לרופא, והיכרות עם שלושת הטאבים.',
    en: 'Web, Desktop, mobile - what fits a physician, and an intro to the three tabs.',
  },
  duration: 8,
  updated: '2026-06-06',
  content: {
    he: `בסוף השיעור תוכל לבחור נכון בין הדפדפן, אפליקציית ה-Desktop והמובייל לכל משימה במרפאה, ולמצוא את שלושת הטאבים שבהם עובדים.

## מה תלמד כאן

- תוכל לבחור את המשטח הנכון (אתר, Desktop, מובייל) לפי סוג המשימה שלפניך.
- תוכל לזהות איפה נמצאים שלושת הטאבים: צ'אט (Chat), עבודה משותפת (Cowork) וקוד (Code).
- תוכל להסביר למה משימה כבדה דורשת את ה-Desktop ולא את הדפדפן.

## למה זה חשוב לך במרפאה

כשמגיע אליך אחר צהריים שלם של דוחות פתולוגיה לסיכום, או תיקייה של 30 קבצי PDF להשוואה, חשוב לדעת מראש שזה לא עובד מתוך הדפדפן הרגיל. אם תתחיל את המשימה במקום הלא נכון, תגלה באמצע שחסרות לך היכולות, ותצטרך להתחיל מחדש. לעומת זאת שאלה קצרה בין שני מטופלים, למשל ניסוח שורה למכתב הפניה או בדיקה מהירה של מינון, יושבת מצוין על המובייל או על הצ'אט. גם תמונה דרמוסקופית שצילמת בטלפון נוחה לשאלה זריזה ישירות מהמובייל, בלי להעביר אותה קודם למחשב. בחירת המשטח הנכון מראש חוסכת לך זמן יקר באמצע יום עמוס, ומונעת את התסכול של עבודה שמתחילה ולא מסתיימת.

## ההסבר בפשטות

הכלי Claude זמין בכמה מקומות, וכל מקום מתאים למשהו אחר. יש את האתר בדפדפן (\`claude.ai\`), יש את אפליקציית ה-Desktop שמתקינים על המחשב, ויש את המובייל בטלפון. תחשוב על זה כמו על מרפאה: המובייל הוא הסטטוסקופ בכיס, מהיר וזמין לשאלה קצרה. האתר בדפדפן הוא חדר בדיקה רגיל, מספיק לרוב המקרים. אפליקציית ה-Desktop היא חדר הניתוח המלא, שם נמצאים כל הכלים למשימות הכבדות. כמו שלא תפתח ניתוח בחדר בדיקה, כך לא תפתח עיבוד של תיקייה שלמה מהדפדפן או מהטלפון.

באפליקציית ה-Desktop יש שלושה טאבים, ושניים מהם קיימים רק שם. הטאב צ'אט (Chat) הוא לשאלה ותשובה רגילה, כשאתה מעתיק ומדביק את הטקסט בעצמך. הטאב עבודה משותפת (Cowork) הוא לעבודה ארוכה על תיקיות וקבצים בלי לכתוב שורת קוד אחת, והוא מחזיר לך קובץ מוכן בסוף. הטאב קוד (Code) הוא לעבודה מתקדמת עם פרויקטים. שים לב: הטאב עבודה משותפת והטאב קוד אינם קיימים בדפדפן כלל, ולכן מי שעובד רק מהאתר לא יראה אותם בכלל.

| משטח | מתאים בעיקר ל | שלושת הטאבים |
|---|---|---|
| אתר בדפדפן (\`claude.ai\`) | שאלות ותשובות רגילות, הדבקת טקסט | רק צ'אט (Chat) |
| אפליקציית Desktop | עיבוד תיקיות, משימות ארוכות, פרויקטים | צ'אט, עבודה משותפת, קוד |
| מובייל בטלפון | שאלה מהירה, צילום נגע בין מטופלים | רק צ'אט (Chat) |

## דוגמה מהמרפאה, צעד אחר צעד

נניח שיש לך תיקייה עם 30 דוחות פתולוגיה מאונימים (בלי שם ובלי תעודת זהות), ואתה רוצה סיכום מרוכז של כל הממצאים. זו משימה כבדה, ולכן צריך את אפליקציית ה-Desktop.

1. פתח את אפליקציית ה-Desktop על המחשב.
2. לחץ על הטאב עבודה משותפת (Cowork) למעלה.
3. בחר באפשרות \`Work in a Folder\` והצבע על התיקייה עם הדוחות.
4. הדבק את הבקשה הבאה בשורת ההודעה ולחץ שליחה.

\`\`\`
עבור על כל קבצי ה-PDF בתיקייה הזו. לכל קובץ הוצא: סוג הנגע, האבחנה ההיסטולוגית, ומצב השוליים. סכם הכל בטבלה אחת מרוכזת, שורה לכל קובץ.
\`\`\`

לאחר השליחה תראה את הכלי פותח את הקבצים אחד אחרי השני, ובסוף מפיק קובץ טבלה מסודר עם שורה לכל דוח.

## נסה בעצמך

קח שלושה קבצי PDF לא רגישים מהמחשב שלך, למשל הנחיות קליניות פומביות או מאמר, ובקש בטאב עבודה משותפת (Cowork) סיכום של שלוש נקודות עיקריות מכל קובץ. זה ייקח פחות משלוש דקות וייתן לך תחושה איך עובד משטח התיקיות.

## טעויות נפוצות

- **פותחים את האתר בדפדפן ומחפשים את הטאב עבודה משותפת.** הטאב עבודה משותפת והטאב קוד קיימים רק באפליקציית ה-Desktop. הפתרון: התקן את ה-Desktop והרץ משם.
- **מתחילים משימה כבדה של עשרות קבצים בצ'אט.** הצ'אט מצוין לשאלה קצרה, לא לעיבוד תיקיות. הפתרון: עבור לטאב עבודה משותפת לפני שתתחיל.
- **מנסים לעבוד עם תיקיות מהמובייל.** המובייל נועד לשאלה מהירה ולתמונה, לא לעבודה כבדה. הפתרון: שמור משימות תיקיות לאפליקציית ה-Desktop.

## נקודות לזכירה

- האתר בדפדפן והמובייל טובים לשאלות קצרות ולתמונה מהירה, ואפליקציית ה-Desktop היא הבסיס למשימות הכבדות עם קבצים ותיקיות.
- הטאב עבודה משותפת והטאב קוד קיימים רק באפליקציית ה-Desktop, ולא בדפדפן.
- בחירת המשטח הנכון מראש חוסכת לך התחלה מחדש באמצע משימה ביום עמוס.

## מה הלאה

בשיעור הבא [התקנת Claude Desktop](/academy/getting-started/install-desktop) תתקין את אפליקציית ה-Desktop ותפתח את הגישה לטאב עבודה משותפת ולטאב קוד.`,
    en: `By the end of this lesson you will be able to pick the right place to run Claude for each clinic task, and find the three tabs where the work happens.

## What You Will Learn

- You will be able to choose the right surface (web, Desktop, mobile) for the task in front of you.
- You will be able to find the three tabs: Chat, Cowork, and Code.
- You will be able to explain why a heavy task needs the Desktop app and not the browser.

## Why This Matters In Your Clinic

When a full afternoon of pathology reports lands on you for summary, or a folder of 30 PDF files needs comparing, it helps to know up front that this does not run from an ordinary browser. Start the task in the wrong place and you will discover halfway through that the capabilities are missing, and have to begin again. A short question between two patients, such as phrasing a line for a referral letter or a quick dosing check, sits perfectly on mobile or in Chat. A dermoscopy photo you took on your phone is also easy to ask about straight from mobile, without moving it to the computer first. Picking the right surface in advance saves real time during a busy day, and spares you the frustration of work that starts but never finishes.

## The Explanation, Simply

The tool Claude is available in a few places, and each one fits something different. There is the website in a browser (\`claude.ai\`), there is the Desktop app you install on your computer, and there is mobile on your phone. Think of it like a clinic: mobile is the stethoscope in your pocket, fast and ready for a quick question. The website in a browser is a regular exam room, enough for most cases. The Desktop app is the full operating room, where every tool for the heavy tasks lives. Just as you would not start an operation in an exam room, you would not start processing a whole folder from the browser or the phone.

The Desktop app has three tabs, and two of them exist only there. The Chat tab is for regular question and answer, where you copy and paste the text yourself. The Cowork tab is for longer work on folders and files without writing a single line of code, and it hands you a finished file at the end. The Code tab is for advanced project work. Note: the Cowork tab and the Code tab do not exist in the browser at all, so anyone working only from the website will never see them.

| Surface | Best for | Tabs available |
|---|---|---|
| Website in a browser (\`claude.ai\`) | Regular questions and answers, pasting text | Chat only |
| Desktop app | Folder processing, long tasks, projects | Chat, Cowork, Code |
| Mobile on your phone | A quick question, photographing a lesion between patients | Chat only |

## A Clinic Example, Step By Step

Suppose you have a folder with 30 de-identified pathology reports (no name and no ID number), and you want one consolidated summary of all the findings. This is a heavy task, so it needs the Desktop app.

1. Open the Desktop app on your computer.
2. Click the Cowork tab at the top.
3. Choose \`Work in a Folder\` and point it at the folder with the reports.
4. Paste the request below into the message line and click send.

\`\`\`
עבור על כל קבצי ה-PDF בתיקייה הזו. לכל קובץ הוצא: סוג הנגע, האבחנה ההיסטולוגית, ומצב השוליים. סכם הכל בטבלה אחת מרוכזת, שורה לכל קובץ.
\`\`\`

After you send it you will see the tool open the files one by one, and at the end produce a tidy table file with a row for each report.

## Try It Yourself

Take three non-sensitive PDF files from your computer, such as public clinical guidelines or an article, and in the Cowork tab ask for a three-point summary of each file. It takes under three minutes and gives you a feel for how the folder surface works.

## Common Mistakes

- **Opening the website in a browser and looking for the Cowork tab.** The Cowork tab and the Code tab exist only in the Desktop app. The fix: install the Desktop app and run it from there.
- **Starting a heavy job of dozens of files in Chat.** Chat is great for a short question, not for processing folders. The fix: switch to the Cowork tab before you begin.
- **Trying to work with folders from mobile.** Mobile is built for a quick question and a photo, not for heavy work. The fix: keep folder tasks for the Desktop app.

## Points To Remember

- The website in a browser and mobile are good for short questions and a quick photo, and the Desktop app is the base for heavy tasks with files and folders.
- The Cowork tab and the Code tab exist only in the Desktop app, not in the browser.
- Choosing the right surface in advance saves you from restarting mid-task on a busy day.

## What Is Next

In the next lesson, [Installing Claude Desktop](/academy/getting-started/install-desktop), you will install the Desktop app and open access to the Cowork tab and the Code tab.`,
  },
};

export default lesson;
