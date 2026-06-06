import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'code-vs-chat',
  track: 'claude-code',
  title: { he: 'Claude Code מול Chat - מה היכולת השונה', en: 'Claude Code vs Chat - What the Difference Really Is' },
  description: { he: 'ההסבר המרכזי: מה Claude Code יודע שה-Chat לא.', en: 'The central explanation: what Claude Code can do that Chat cannot.' },
  duration: 8,
  updated: '2026-06-06',
  content: {
    he: `אחרי השיעור הזה תדע בדיוק מתי לשבת ב-Chat ומתי לעבור לטאב Code, ולמה ההבדל הזה משנה לך את היום במרפאה.

קודם כול הרגעה: אין כאן תכנות. לא תכתוב שורת קוד אחת, לא תתקין כלום, ולא תיגע בטרמינל. הטאב Code הוא פשוט דרך נוחה לתת ל-Claude לעבוד על קבצים אצלך בתיקייה, צעד אחר צעד, כשאתה מאשר כל שינוי לפני שהוא נשמר.

## מה תלמד כאן

- תוכל להחליט בשנייה אם משימה מתאימה ל-Chat או לטאב Code.
- תוכל לקרוא **diff** (תצוגת השינוי - מה היה לפני ומה אחרי) ולאשר אותו בלחיצה אחת.
- תוכל לבקש מ-Claude שני פלטים שונים מאותו מקור, ולראות כל שינוי לפני שהוא נכנס לקובץ.

## למה זה חשוב לך במרפאה

נניח שיש לך תיקייה עם דוחות פתולוגיה מנוקי-מזהים בסוף שבוע ניתוחים. ב-Chat היית מדביק טקסט, מקבל תשובה, ומעתיק אותה ידנית חזרה לאקסל - בכל פעם מחדש, דוח אחרי דוח. בטאב Code אתה מצביע על התיקייה, ו-Claude קורא את הקבצים, בונה את האקסל, ומכין במקביל דף הסבר למטופל - והכול נשמר אצלך בתיקייה רק אחרי שאישרת. כך נחסכות לך ההעתקות הידניות שגוזלות זמן ומכניסות טעויות, ובמיוחד כשאתה עובד על עשרות דוחות בערב אחד.

ההבחנה הזו פשוטה לזכירה: כל עוד אתה רק שואל ומעתיק תשובות בעצמך, נשאר ב-Chat. ברגע שאתה רוצה ש-Claude יקרא קבצים מהתיקייה שלך, יערוך אותם, או יבנה קבצים חדשים, עבור לטאב Code.

## ההסבר בפשטות

ב-Chat אתה מנהל שיחה: שואל, מקבל תשובה, ומעתיק את מה שצריך. במצב הזה Claude לא נוגע בקבצים שלך - הוא רק מדבר. בטאב Code, לעומת זאת, אתה נותן ל-Claude תיקייה, והוא קורא ועורך בה קבצים בעצמו, בכמה צעדים, ומציג לך כל שינוי לאישור.

:::beginner
במילים הכי פשוטות: Chat הוא כמו שיחה - אתה שואל ומעתיק לבד את התשובה. Code הוא כמו לתת לעוזר מפתח לתיקייה, כדי שיעבוד על הקבצים בעצמו. אין מה לחשוש, כלום לא נשמר עד שתאשר.
:::

הדבר שהטאב Code מוסיף מעבר לטאב Cowork (הטאב שבו Claude עושה עבודה ארוכה על קבצים בלי קוד) הוא השליטה החזותית: אתה **רואה** כל שינוי כ-diff ומאשר אותו, ויכולה להיות לך תצוגה מקדימה (preview) של התוצאה. תחשוב על זה כמו על מסמך עם מעקב אחר שינויים: העוזר מסמן בצהוב מה הוא רוצה לשנות, ואתה מאשר או דוחה כל סימון לפני שהוא נכנס לקובץ.

## דוגמה מהמרפאה, צעד אחר צעד

המשימה: בתיקייה יושבים כמה דוחות פתולוגיה מנוקי-מזהים בקובצי PDF, ואתה רוצה משני דברים - טבלת אקסל מסכמת ודף הסבר קצר למטופל.

1. פתח את האפליקציה ועבור לטאב **Code**.
2. לחץ על כפתור שיחה חדשה (session) - שיחה עם תיקייה משלה.
3. בחר את התיקייה שבה יושבים קובצי ה-PDF המנוקים.
4. הדבק את הבקשה הבאה בעברית ושלח אותה.

\`\`\`
בתיקייה הזו יש כמה דוחות פתולוגיה מנוקי-מזהים בפורמט PDF.
קרא את כולם וצור שני קבצים בתיקייה:
1. קובץ אקסל מסכם עם העמודות: מספר דוח, סוג הנגע, אבחנה, גודל, שוליים.
2. דף הסבר קצר וברור למטופל בעברית פשוטה על משמעות הממצא.
הצג לי כל קובץ כ-diff לפני השמירה ואל תשמור עד שאאשר.
\`\`\`

5. עבור על ה-diff של כל קובץ, ולחץ אישור (approve) רק כשהתוכן נכון.

מה שתראה: Claude עובר על הקבצים בצעדים, מציג לך תצוגת diff של מה שעומד להיכתב, והקבצים נשמרים בתיקייה רק אחרי שלחצת אישור.

## נסה בעצמך

- [ ] צור תיקייה ריקה עם קובץ טקסט אחד שכתוב בו "שלום". בטאב Code פתח שיחה (session) על התיקייה, ובקש: "הוסף שורה שנייה עם התאריך של היום, והצג לי diff לפני השמירה". קרא את ה-diff ואשר אותו.

## טעויות נפוצות

- **לצפות שה-Chat ייגע בקבצים שלך.** במצב Chat ה-Claude רק מדבר ולא עורך קבצים. אם המשימה כוללת קריאה או עריכה של קבצים בתיקייה - עבור לטאב Code.
- **לאשר שינוי בלי לקרוא את ה-diff.** האישור הוא הבלם הבטיחותי שלך. קרא את הסימון של מה שנוסף ומה שנמחק לפני שאתה לוחץ אישור.
- **לחשוב שצריך טרמינל או תכנות.** לא צריך. הטאב Code הוא ממשק גרפי עם כפתורים, וה-terminal המובנה אופציונלי לחלוטין.

## נקודות לזכירה

- ב-Chat אתה מעתיק תשובות בעצמך, ובטאב Code אתה נותן ל-Claude לקרוא ולערוך קבצים בתיקייה.
- בטאב Code אתה רואה כל שינוי כ-diff ומאשר אותו לפני שהוא נשמר.
- אין כאן תכנות ואין צורך בטרמינל - רק לחיצות ואישורים.

:::advanced
שיחת Code שומרת את ההקשר של הפרויקט לאורך כל ההודעות, כך שתוכל לחדד תוצאה על פני כמה הודעות בלי להדביק שוב את החומר בכל פעם. כל שינוי בקובץ מוצג כ-diff שאתה מאשר, וזה בלם הבטיחות שהופך את הטאב למתאים למסמכי מרפאה.
:::

## מה הלאה

בשיעור הבא, [הטאב Code](/academy/claude-code/the-code-tab), תכיר את הממשק עצמו ותלמד לפתוח שיחה, לבחור תיקייה, ולעבוד בכמה שיחות במקביל.`,
    en: `After this lesson you will know exactly when to stay in Chat and when to move to the Code tab, and why that difference changes your day at the clinic.

First, a reassurance: this is not programming. You will not write a single line of code, install anything, or touch a terminal. The Code tab is simply a comfortable way to let Claude work on files in a folder of yours, step by step, while you approve every change before it is saved.

## What you will learn here

- You will be able to decide in a second whether a task belongs in Chat or in the Code tab.
- You will be able to read a **diff** (a view of the change - what it was before and after) and approve it with one click.
- You will be able to ask Claude for two different outputs from the same source, and see every change before it lands in a file.

## Why this matters for you at the clinic

Say you have a folder of de-identified pathology reports at the end of a surgery week. In Chat you would paste text, get an answer, and copy it back into Excel by hand, every single time, report after report. In the Code tab you point at the folder, and Claude reads the files, builds the Excel sheet, and prepares a patient handout in parallel - and nothing is saved to your folder until you approve it. That removes the manual copying that eats time and introduces errors, especially when you work through dozens of reports in one evening.

The rule of thumb is easy to remember: as long as you only ask and copy answers yourself, stay in Chat. The moment you want Claude to read files from your folder, edit them, or build new files, move to the Code tab.

## The idea in plain language

In Chat you hold a conversation: you ask, you get an answer, and you copy what you need. In that mode Claude does not touch your files - it only talks. In the Code tab, by contrast, you hand Claude a folder, and it reads and edits files in it on its own, across several steps, showing you every change for approval.

:::beginner
In the simplest terms: Chat is like a conversation - you ask and copy the answer yourself. Code is like handing an assistant a key to a folder so it works on the files for you. There is nothing to worry about, since nothing is saved until you approve it.
:::

The thing the Code tab adds beyond the Cowork tab (the tab where Claude does longer work on files with no code) is visual control: you **see** every change as a diff and approve it, and you can have a preview of the result. Think of it like a document with track changes: the assistant highlights in yellow what it wants to change, and you accept or reject each mark before it enters the file.

## A clinic example, step by step

The task: a folder holds a few de-identified pathology reports as PDF files, and you want two things - a summary Excel sheet and a short patient handout.

1. Open the app and go to the **Code** tab.
2. Click "new session" (a new conversation with its own folder).
3. Pick the folder that holds the de-identified PDF files.
4. Paste the following request in Hebrew and send it.

\`\`\`
בתיקייה הזו יש כמה דוחות פתולוגיה מנוקי-מזהים בפורמט PDF.
קרא את כולם וצור שני קבצים בתיקייה:
1. קובץ אקסל מסכם עם העמודות: מספר דוח, סוג הנגע, אבחנה, גודל, שוליים.
2. דף הסבר קצר וברור למטופל בעברית פשוטה על משמעות הממצא.
הצג לי כל קובץ כ-diff לפני השמירה ואל תשמור עד שאאשר.
\`\`\`

5. Go over the diff of each file, and click approve only once the content is right.

What you will see: Claude works through the files in steps, shows you a diff view of what is about to be written, and the files are saved to the folder only after you click approve.

## Try it yourself

- [ ] Create an empty folder with a single text file that says "hello". In the Code tab open a session on the folder, and ask: "Add a second line with today's date, and show me the diff before saving." Read the diff and approve it.

## Common mistakes

- **Expecting Chat to touch your files.** In the Chat mode Claude only talks and does not edit files. If the task involves reading or editing files in a folder, move to the Code tab.
- **Approving a change without reading the diff.** The approval is your safety brake. Read the markup of what was added and what was removed before you click approve.
- **Thinking you need a terminal or programming.** You do not. The Code tab is a graphical interface with buttons, and the built-in terminal is entirely optional.

## Points to remember

- In Chat you copy answers yourself, and in the Code tab you let Claude read and edit files in a folder.
- In the Code tab you see every change as a diff and approve it before it is saved.
- There is no programming here and no terminal needed - only clicks and approvals.

:::advanced
A Code session keeps the project context across all your messages, so you can refine a result over several messages without pasting the material again each time. Every file change is shown as a diff that you approve, and that approval is the safety control that makes the tab suitable for clinic documents.
:::

## What is next

In the next lesson, [the Code tab](/academy/claude-code/the-code-tab), you will meet the interface itself and learn to open a session, pick a folder, and work in several conversations in parallel.`,
  },
};

export default lesson;
