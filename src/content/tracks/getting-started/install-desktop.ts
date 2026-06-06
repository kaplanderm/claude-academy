import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'install-desktop',
  track: 'getting-started',
  title: { he: 'התקנת Claude Desktop צעד אחר צעד', en: 'Installing Claude Desktop Step by Step' },
  description: {
    he: 'הורדה, התקנה והתחברות במק או בחלונות. בלי שום שלב טכני.',
    en: 'Download, install, and sign in on Mac or Windows. With no technical step.',
  },
  duration: 6,
  updated: '2026-06-06',
  content: {
    he: `בסוף השיעור תהיה לך אפליקציית Claude מותקנת ופתוחה על המחשב, מחוברת לחשבון שלך ומוכנה לעבודה.

## מה תלמד כאן

- תוכל להוריד ולהתקין את אפליקציית Claude למחשב במק או בחלונות.
- תוכל להתחבר לחשבון ולוודא שההתקנה הצליחה לפי שלושת הטאבים בראש המסך.

## למה זה חשוב לך במרפאה

האפליקציה במחשב נוחה יותר מהדפדפן לעבודה היומיומית: גרירת קובץ דוח פתולוגיה אל החלון, ניסוח מכתב הפניה, או סיכום מהיר בסוף היום. כשהיא מותקנת ומחוברת אתה לא מתעסק שוב בהתחברות בכל פעם, והכול נפתח בלחיצה אחת מהמחשב במקום לחפש לשונית בדפדפן. בנוסף, האפליקציה היא הדרך היחידה להגיע לשני המצבים המתקדמים, Cowork ו-Code, שעליהם נדבר בהמשך המסלול, כך שהתקנה אחת היום פותחת לך את כל הדלתות לשיעורים הבאים.

## ההסבר בפשטות

אפליקציית Claude למחשב (Desktop) היא תוכנה רגילה שמתקינים פעם אחת, בדיוק כמו שמתקינים אפליקציה לסמארטפון מהחנות: מורידים, מאשרים, ומאותו רגע יש לך סמל קבוע לפתוח ממנו. אין כאן שום הגדרה טכנית להבין, רק שלוש לחיצות, והאפליקציה מטפלת בכל השאר בעצמה.

חשוב לדעת: האפליקציה דורשת מנוי בתשלום (Pro או Max או Team). אם תיכנס בלי מנוי, חלק מהיכולות יופיעו אבל לא ייפתחו. אם עוד אין לך חשבון, אפשר ליצור אחד בחינם תוך דקה ואז לשדרג למנוי, ועל סוגי המנויים נדבר בשיעור נפרד.

:::beginner
"להתקין" פירושו פשוט להעתיק את התוכנה אל המחשב שלך פעם אחת, בדיוק כמו אפליקציה חדשה בטלפון. אינך צריך להבין שום דבר טכני, רק לעקוב אחרי המסך וללחוץ כשמבקשים. בסוף תהיה לך אפליקציה עם סמל קבוע, ותפתח אותה כמו כל תוכנה אחרת.
:::

## דוגמה מהמרפאה, צעד אחר צעד

המשימה: להתקין את האפליקציה ולפתוח אותה, כדי שתוכל מחר לגרור אליה דוח ולבקש סיכום.

1. פתח דפדפן וגש לכתובת \`claude.ai/download\`.
2. לחץ על כפתור ההורדה המתאים למחשב שלך (מק או חלונות). הקובץ יירד אוטומטית.
3. במק: פתח את הקובץ שירד וגרור את סמל Claude אל תיקיית \`Applications\`. בחלונות: לחץ פעמיים על הקובץ שירד ועקוב אחרי המסך עד הסוף.
4. פתח את האפליקציה (במק מתיקיית \`Applications\`, בחלונות מתפריט ההתחלה).
5. לחץ על כפתור ההתחברות והתחבר עם אותו חשבון שבו אתה משתמש בדפדפן.
6. כדי לוודא שהכול עובד, לחץ על הטאב Chat בראש המסך והדבק בתיבת הכתיבה את ההודעה הבאה, ואז שלח:

\`\`\`
שלום, האם אתה רואה את ההודעה הזו? ענה לי במילה אחת בעברית.
\`\`\`

אחרי ההתחברות אתה אמור לראות בראש המסך את שלושת הטאבים Chat, Cowork ו-Code זה לצד זה. זו נקודת ההצלחה, וזה הסימן היחיד שאתה צריך לחפש. אם שלושת הטאבים שם, ההתקנה הסתיימה כמו שצריך ואתה מוכן להמשיך. הטאב Chat הוא מקום השיחה הרגיל, ושני הטאבים Cowork ו-Code הם המצבים המתקדמים שנגיע אליהם בהמשך, אז אין צורך לגעת בהם עכשיו.

הנה תזכורת קצרה למה כל טאב משמש, רק כדי שתזהה אותם בראש המסך:

| טאב | למה הוא משמש |
|---|---|
| הטאב Chat | שיחה רגילה: לשאול, לקבל תשובה, להעלות קובץ ולהדביק טקסט. |
| הטאב Cowork | עבודה ארוכה יותר על תיקיית קבצים, בלי לכתוב שום קוד. |
| הטאב Code | סביבת עבודה מתקדמת עם תיקיית פרויקט ועורך קבצים מובנה. |

בשיעור הזה אנחנו עוצרים אחרי שראינו את שלושת הטאבים. בהמשך המסלול ניכנס לכל אחד מהם לעומק.

בחלונות ייתכן שתופיע פעם אחת בקשה להתקין רכיב עזר בשם \`Git for Windows\`, וזו בקשה רגילה וחד-פעמית שאפשר לאשר אותה בשקט. זה רכיב רקע שעוזר לאפליקציה לעבוד; אתה לעולם לא תפתח אותו או תשתמש בו בעצמך, והוא פשוט יושב ברקע. אל תיבהל מהשם הטכני, זה צעד שגרתי שקורה פעם אחת בלבד.

:::advanced
בחלונות האפליקציה מבקשת את \`Git for Windows\` פעם אחת מפני שהטאב Code נשען עליו מאחורי הקלעים; אתה עצמך לעולם לא מריץ אותו. גם החיבורים (connectors) והגדרות הבחירה של המודל יושבים בהגדרות של האפליקציה עצמה, ולא בקובץ טקסט כלשהו שצריך לערוך ידנית.
:::

> אם אתה במק או בחלונות, האפליקציה זהה ושלושת הטאבים נראים אותו דבר. במחשבי Linux אין אפליקציה כזו, ושם משתמשים בדרך אחרת שמיועדת למפתחים ולא נדרשת לך.

## נסה בעצמך

אחרי שהאפליקציה פתוחה, לחץ על הטאב Chat למעלה, וכתוב בתיבת הכתיבה את המילה שלום ושלח. אם קיבלת תשובה בעברית, הכול עובד.

\`\`\`
שלום
\`\`\`

## טעויות נפוצות

- **הטאבים Cowork ו-Code מופיעים אפורים ולא נפתחים** - סימן שאתה בחשבון חינמי. מנוי בתשלום (Pro או Max או Team) פותח אותם.
- **התקנת אבל המסך מבקש להתחבר** - התקנה לבד לא מספיקה. לחץ על כפתור ההתחברות והיכנס עם החשבון שלך.
- **לא בטוח שהורדת את הגרסה הנכונה** - בכתובת \`claude.ai/download\` יש כפתור נפרד למק וכפתור נפרד לחלונות. בחר את זה שתואם למחשב שלך.

## נקודות לזכירה

- מתקינים פעם אחת מהכתובת \`claude.ai/download\`, ואז נכנסים בלחיצה אחת מהמחשב.
- סימן ההצלחה הוא שלושת הטאבים Chat, Cowork ו-Code שמופיעים בראש המסך.
- בקשת \`Git for Windows\` היא רגילה וחד-פעמית, ואתה לא נוגע בה בעצמך.

## מה הלאה

בשיעור הבא, [הטאב Chat](/academy/getting-started/chat-tab), תלמד לשאול שאלה ולקבל תשובה ראשונה בתוך האפליקציה.`,
    en: `By the end of this lesson you will have the Claude app installed and open on your computer, signed in to your account and ready to work.

## What you will learn here

- You will be able to download and install the Claude desktop app on Mac or Windows.
- You will be able to sign in and confirm the install worked by the three tabs at the top of the screen.

## Why this matters in your clinic

The desktop app is more comfortable than the browser for daily work: dragging a pathology report file into the window, drafting a referral letter, or a quick end-of-day summary. Once it is installed and signed in you do not deal with signing in every time, and everything opens with one click from your computer instead of hunting for a browser tab. The app is also the only way to reach the two advanced modes, Cowork and Code, which we cover later in the track, so one install today opens all the doors to the next lessons.

## The explanation, simply

The Claude desktop app is ordinary software you install once, just like installing a phone app from the store: you download, approve, and from that moment you have a permanent icon to open it from. There is no technical setting to understand here, only three clicks.

Important to know: the app requires a paid plan (Pro or Max or Team). If you enter without a plan, some capabilities will appear but will not open.

:::beginner
"Install" simply means copying the software onto your computer once, exactly like a new app on your phone. You do not need to understand anything technical, just follow the screen and click when asked. At the end you will have an app with a permanent icon, and you open it like any other program.
:::

## A clinic example, step by step

The task: install the app and open it, so that tomorrow you can drag a report into it and ask for a summary.

1. Open a browser and go to the address \`claude.ai/download\`.
2. Click the download button that matches your computer (Mac or Windows). The file downloads automatically.
3. On Mac: open the downloaded file and drag the Claude icon into the \`Applications\` folder. On Windows: double-click the downloaded file and follow the screen to the end.
4. Open the app (on Mac from the \`Applications\` folder, on Windows from the Start menu).
5. Click the sign-in button and sign in with the same account you use in the browser.
6. To confirm everything works, click the Chat tab at the top, paste the message below into the input box, and send:

\`\`\`
Hi, can you see this message? Reply in one word.
\`\`\`

After signing in you should see three tabs at the top of the screen: Chat, Cowork, and Code. This is the success point, and it is the only sign you need to look for. If the three tabs are there, the install finished correctly and you are ready to continue. The Chat tab is the ordinary conversation place, and the Cowork and Code tabs are the advanced modes we reach later, so there is no need to touch them now.

Here is a short reminder of what each tab is for, just so you recognize them at the top of the screen:

| Tab | What it is for |
|---|---|
| The Chat tab | An ordinary conversation: ask, get an answer, upload a file, paste text. |
| The Cowork tab | Longer work on a folder of files, with no code to write. |
| The Code tab | An advanced workspace with a project folder and a built-in file editor. |

In this lesson we stop once we have seen the three tabs. Later in the track we go into each of them in depth.

On Windows a one-time prompt may appear asking to install a helper component named Git for Windows. This is a normal, one-time prompt and you can safely approve it. It is a background component that helps the app work; you will never open it or use it yourself, and it simply sits in the background. Do not be alarmed by the technical name, this is a routine step that happens only once.

:::advanced
On Windows the app asks for Git for Windows once because the Code tab relies on it behind the scenes; you yourself never run it. The connectors and the model selection settings also live inside the app's own Settings, not in any text file you have to edit by hand.
:::

> Whether you are on Mac or Windows, the app is identical and the three tabs look the same. On Linux computers there is no such app, and there a different path meant for developers is used, which you do not need.

## Try it yourself

Once the app is open, click the Chat tab at the top, type the word שלום in the input box, and send. If you got a reply in Hebrew, everything works.

\`\`\`
שלום
\`\`\`

## Common mistakes

- **The Cowork and Code tabs appear greyed out and do not open** - a sign you are on a free plan. A paid plan (Pro or Max or Team) unlocks them.
- **You installed but the screen asks you to sign in** - installing alone is not enough. Click the sign-in button and enter with your account.
- **Not sure you downloaded the right version** - at the address \`claude.ai/download\` there is a separate button for Mac and a separate button for Windows. Choose the one that matches your computer.

## Points to remember

- You install once from the address \`claude.ai/download\`, and then enter with one click from your computer.
- The success sign is the three tabs at the top of the screen: Chat, Cowork, and Code.
- The Git for Windows prompt is normal and one-time, and you never touch it yourself.

## What is next

In the next lesson, [The Chat tab](/academy/getting-started/chat-tab), you will learn to ask a question and get your first answer inside the app.`,
  },
};

export default lesson;
