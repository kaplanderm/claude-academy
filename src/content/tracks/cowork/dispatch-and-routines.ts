import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'dispatch-and-routines',
  track: 'cowork',
  title: { he: 'שליחה לרקע (Dispatch) ושגרות (Routines)', en: 'Dispatch and Routines - Background and Scheduled Automation' },
  description: {
    he: 'לשלוח משימה לרקע, ולהריץ משימות חוזרות לפי לוח זמנים.',
    en: 'Send a task to the background, and run recurring tasks on a schedule.',
  },
  duration: 8,
  updated: '2026-06-06',
  content: {
    he: `אחרי השיעור הזה תדע לשלוח משימה ארוכה לרקע ולהמשיך לעבוד, וגם להגדיר משימה שחוזרת לבד לפי לוח זמנים.

## מה תלמד כאן

- תוכל לשלוח משימה ארוכה לרקע (Dispatch) ולהמשיך לעבוד בשיחה אחרת בזמן שהיא רצה.
- תוכל להגדיר משימה חוזרת (Routine) שתרוץ לבד כל בוקר, בלי שתפעיל אותה ידנית.
- תוכל להחליט נכון מתי לתת למשימה לרוץ בענן ומתי על המחשב שלך, מטעמי פרטיות.

## למה זה חשוב לך במרפאה

יש משימות שלוקחות הרבה דקות - לסכם עשרות מאמרים לפני כתיבת סקירת ספרות, או לעבור על תיקיית דוחות פתולוגיה שלמה ולהוציא ממנה טבלה. אתה לא רוצה לשבת מול המסך ולחכות בזמן שזה רץ. במקום זה אתה שולח את המשימה לרקע וחוזר לעבוד על מכתבי הפניה, על תמונות דרמוסקופיה או על כל דבר אחר, והתוצאה מחכה לך מוכנה כשתתפנה. ויש משימות שחוזרות בדיוק אותו דבר כל יום, כמו סקירת בוקר של דוחות שהגיעו בלילה. אותן כדאי שירוצו לבד, בלי שתצטרך לזכור להפעיל אותן בכל בוקר מחדש.

## ההסבר בפשטות

שתי המילים החדשות פשוטות. המונח **Dispatch** (שליחה לרקע) משמעו לתת משימה אחת ארוכה ולשחרר אותה - היא רצה ברקע ואתה ממשיך לעבוד בשיחה אחרת. אתה לא נשאר תקוע מול חלון אחד עד שהמשימה תסתיים. המונח **Routine** (שגרה מתוזמנת) הוא משימה שחוזרת לבד לפי שעון, למשל כל בוקר ב-7:30, בלי שתפעיל אותה ידנית בכל פעם.

חשוב לדעת איפה המשימה רצה, כי זה משנה מה מותר להזין לה. שגרה מסוג Routine רצה בענן של Anthropic, גם כשהמחשב שלך כבוי או סגור. לעומתה, משימה מתוזמנת מקומית (scheduled task) רצה על המחשב שלך בלבד. ההבדל הזה הוא הידית שלך לפרטיות: לנתונים רגישים תעדיף מקומי, ולחומר ציבורי או מעומעם הענן בסדר גמור. תחשוב על זה כמו על שני סוגי עוזרים - אחד שיושב פיזית במשרד שלך ורואה רק מה שאתה מראה לו בחדר, ואחד שעובד מרחוק ומקבל ממך את החומר דרך הרשת.

## דוגמה מהמרפאה, צעד אחר צעד

נניח שיש בתיקייה 40 מאמרים מעומעמים (בלי שמות מטופלים), ואתה רוצה טבלת סיכום בזמן שאתה ממשיך לעבוד ב-Chat.

1. פתח את הטאב **Cowork** ב-Claude Desktop.
2. סמן **"Work in a Folder"** ובחר את התיקייה עם 40 המאמרים.
3. בתחילת ההודעה כתוב **Dispatch** כדי לשלוח את המשימה לרקע.
4. הדבק את הפרומפט הבא ושלח.
5. עבור לשיחה חדשה ב-**Chat** והמשך לעבוד. כשהמשימה תסתיים, התוצאה תחכה לך.

\`\`\`
Dispatch:
קרא את כל המאמרים בתיקייה הזו (כולם מעומעמים, ללא פרטים מזהים).
סנן רק למחקרים מבוקרים על dupilumab באטופיק דרמטיטיס מעל גיל 65.
הוצא טבלה עם העמודות: מחבר, שנה, N, תוצא ראשי, זמן מעקב.
בסוף כתוב פסקה של חמש שורות על המגמה הכללית.
שמור כקובץ Excel בשם dupilumab-summary.xlsx באותה תיקייה.
\`\`\`

תראה הודעה שהמשימה רצה ברקע, ותוכל לחזור אליה בכל רגע כדי לראות את הטבלה המוכנה.

:::beginner
תחשוב על Dispatch כמו לתת תיק עבודה לעוזר ולצאת לסבב מטופלים. אתה לא עומד מעליו, ואתה לא מחכה ליד הדלת. כשתחזור מהסבב, העבודה כבר על השולחן.
:::

אם תרצה להפוך את אותה משימה לשגרה קבועה, אפשר לבקש **Routine** שתרוץ לבד - למשל סקירת בוקר של דוחות שהגיעו בלילה. שים לב לסייג חשוב בדוגמה הזו: שגרה רצה לבד ובלי עין אנושית בכל הרצה, אז כוון אותה רק לחומר מעומעם, ולא לשמות מטופלים או למספרי תעודת זהות. אפשר לנסח אותה כך: "כל בוקר ב-7:30 עבור על הדוחות המעומעמים בתיקייה, ושלח לי טבלה לפי דחיפות".

## נסה בעצמך

הורד שניים-שלושה מאמרים פתוחים (open access) לתיקייה, סמן **"Work in a Folder"**, וכתוב **Dispatch** עם בקשה קצרה: "סכם כל מאמר במשפט אחד ושמור קובץ טקסט". עבור לשיחה אחרת ובדוק שהמשימה אכן רצה ברקע.

## טעויות נפוצות

- **לצפות לתשובה מיידית ממשימת רקע.** משימת Dispatch לא עונה בו במקום, היא לוקחת זמן. אל תשב ותחכה - עבור למשהו אחר וחזור כשהיא מסתיימת.
- **לתזמן Routine על חומר מזהה.** שגרה רצה בענן ובלי עין אנושית בכל הרצה, אז אל תכוון אותה לנתוני מטופלים מזהים. הרץ אותה רק על חומר מעומעם, או העבר אותה למשימה מקומית.
- **לשכוח איפה זה רץ.** לפני שמגדירים שגרה, ודא שאתה יודע אם היא בענן או מקומית - זה קובע מה מותר להזין לה.

## נקודות לזכירה

- שליחה לרקע (Dispatch) דוחפת משימה ארוכה אחת לרקע כדי שתמשיך לעבוד; שגרה (Routine) מריצה משימה חוזרת לפי שעון.
- שגרה רצה בענן, משימה מתוזמנת מקומית רצה על המחשב שלך - זו ידית הפרטיות שלך.
- כל הערכת זמן כאן היא להמחשה בלבד; משך אמיתי תלוי בגודל החומר ובעומס.

:::advanced
שגרה (Routine) רצה לפי לוח זמנים בענן של Anthropic, בעוד משימה מתוזמנת מקומית רצה על המחשב שלך. האפשרות המקומית שומרת את העיבוד על המחשב שלך, אבל ברגע שנשלח פרומפט התוכן עדיין נוסע לענן. בחר לפי מידת הרגישות של הנתונים.
:::

## מה הלאה

בשיעור הבא, [תרחישים רפואיים](/academy/cowork/derm-scenarios), תראה ארבעה תרחישי מרפאה מלאים שמחברים את כל מה שלמדת ל-Cowork לכדי עבודה אחת רציפה.`,
    en: `After this lesson you will be able to send a long task to the background and keep working, and also set up a task that repeats by itself on a schedule.

## What you will learn

- You will be able to send a long task to the background (Dispatch) and keep working in another conversation while it runs.
- You will be able to set up a recurring task (Routine) that runs by itself every morning, without launching it manually.
- You will be able to decide correctly when to let a task run in the cloud and when on your own computer, for privacy reasons.

## Why this matters in the clinic

Some tasks take many minutes, like summarizing dozens of papers before writing a literature review, or going over a whole folder of pathology reports to pull out a table. You do not want to sit at the screen and wait while it runs. Instead you send the task to the background and go back to writing referral letters, reviewing dermoscopy images, or anything else, and the result is waiting for you when you are free. Other tasks repeat in exactly the same way every day, like a morning review of reports that arrived overnight, and those are best left to run by themselves so you do not have to remember to start them each morning.

## The plain explanation

The two new words are simple. The term **Dispatch** (sending to the background) means handing over one long task and letting go of it, so it runs in the background while you keep working in another conversation. You are not stuck in front of one window until the task finishes. The term **Routine** (scheduled routine) is a task that repeats by itself on a clock, for example every morning at 7:30, without you launching it manually each time.

It matters where the task runs, because that changes what you may feed it. A Routine runs in Anthropic's cloud, even when your computer is off or closed. A local scheduled task runs only on your own computer. That difference is your privacy lever: for sensitive data prefer local, and for public or de-identified material the cloud is fine. Think of it like two kinds of assistant, one who sits physically in your office and sees only what you show him in the room, and one who works remotely and receives the material from you over the network.

## A clinic example, step by step

Suppose a folder holds 40 de-identified papers (no patient names), and you want a summary table while you keep working in Chat.

1. Open the **Cowork** tab in Claude Desktop.
2. Tick **"Work in a Folder"** and choose the folder with the 40 papers.
3. At the start of the message write **Dispatch** to send the task to the background.
4. Paste the following prompt and send.
5. Move to a new conversation in **Chat** and keep working. When the task finishes, the result will be waiting for you.

\`\`\`
Dispatch:
Read all the papers in this folder (all de-identified, no identifying details).
Filter to controlled studies on dupilumab in atopic dermatitis over age 65.
Produce a table with the columns: author, year, N, primary outcome, follow-up.
At the end write a five-line paragraph on the overall trend.
Save as an Excel file named dupilumab-summary.xlsx in the same folder.
\`\`\`

You will see a note that the task is running in the background, and you can return to it any time to view the finished table.

:::beginner
Think of Dispatch like handing a work file to an assistant and heading out to see patients. You are not standing over him, and you are not waiting at the door. When you return from the round, the work is already on the desk.
:::

If you want to turn the same task into a fixed routine, you can ask for a **Routine** that runs by itself, for example a morning review of reports that arrived overnight. Note an important caveat here: a routine runs by itself with no human eye on each run, so point it only at de-identified material, never at patient names or ID numbers. You can phrase it like this: "every morning at 7:30 go over the de-identified reports in the folder, and send me a table ordered by urgency".

## Try it yourself

Download two or three open-access papers into a folder, tick **"Work in a Folder"**, and write **Dispatch** with a short request: "summarize each paper in one sentence and save a text file". Switch to another conversation and confirm the task is really running in the background.

## Common mistakes

- **Expecting an instant answer from a background task.** A Dispatch task does not reply on the spot, it takes time. Do not sit and wait, move to something else and come back when it finishes.
- **Scheduling a Routine over identifiable material.** A Routine runs in the cloud with no human eye on each run, so do not point it at identifiable patient data. Run it only on de-identified material, or move it to a local task.
- **Forgetting where it runs.** Before setting up a Routine, make sure you know whether it is in the cloud or local, because that decides what you may feed it.

## Points to remember

- Dispatch sends one long task to the background so you keep working; a Routine runs a recurring task on a clock.
- A Routine runs in the cloud, a local scheduled task runs on your computer, that is your privacy lever.
- Every time estimate here is illustrative only; real duration depends on the size of the material and the load.

:::advanced
A Routine runs on a schedule in Anthropic's cloud, while a local scheduled task runs on your own machine. The local option keeps the processing on your computer, but the moment a prompt is sent the content still travels to the cloud. Choose based on how sensitive the data is.
:::

## What is next

In the next lesson, [Dermatology Scenarios](/academy/cowork/derm-scenarios), you will see four complete clinic scenarios that bring everything you learned about Cowork into one continuous piece of work.`,
  },
};

export default lesson;
