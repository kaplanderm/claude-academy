import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'cli-install',
  track: 'advanced',
  title: { he: 'התקנת ה-CLI (שורת פקודה)', en: 'Installing the CLI (Command Line)' },
  description: {
    he: 'למתקדמים בלבד: התקנת הכלי Claude Code כתוכנת שורת פקודה. רופא מתחיל לא צריך.',
    en: 'Advanced only: installing Claude Code as a CLI. A beginner does not need it.',
  },
  duration: 7,
  updated: '2026-06-06',
  content: {
    he: `בסוף השיעור תדע להתקין את הכלי \`claude\` בשורת הפקודה של המחשב שלך, לזהות שההתקנה הצליחה, ולהבין שהוא מריץ בדיוק את אותו מנוע שמפעיל את הטאב Code שכבר מוכר לך.

:::beginner
המסלול הזה אופציונלי לחלוטין, ואתה מוזמן לדלג עליו בלי שום הפסד. רופא בלי רקע טכני לא צריך טרמינל בכלל, וכלום כאן לא פותח יכולת קלינית חדשה - זה רק ממשק אחר לאותו דבר שכבר יש לך בטאב Code שבאפליקציה. המשך הלאה רק אם אתה סקרן, או אם אתה עובד על מחשב Linux שאין בו כלל את אפליקציית Desktop שמתקינים בדרך כלל.
:::

## מה תלמד כאן

- תוכל להתקין את הכלי \`claude\` כתוכנת שורת פקודה במחשב שלך, בפקודה אחת.
- תוכל לזהות שההתקנה הצליחה, ולתקן את שגיאת ההרשאות הנפוצה במחשב מסוג Windows שבמרפאה.
- תוכל להסביר לעצמך למה הטאב Code ושורת הפקודה הם שני פרצופים של אותו מנוע.

## למה זה חשוב לך במרפאה

האמת הפשוטה: ברוב המקרים זה לא חשוב לך במרפאה. אם אתה כבר עובד בטאב Code על דוחות פתולוגיה, מכתבי הפניה או סיכומים יומיים - אתה מקבל שם בדיוק את אותו מנוע, ובנוסף יש לך גם סרגל צד (sidebar) עם רשימת השיחות, עורך קבצים, ותצוגת הבדלים (diff) חזותית שמראה לך כל שינוי לפני שאתה מאשר שיישמר. ההסתכלות החזותית הזאת דווקא בטוחה יותר כשמדובר בחומר של מטופלים. שורת הפקודה (CLI) נחוצה רק בשני מצבים: כשאתה על מחשב Linux שבו אין אפליקציית Desktop, או כשאתה רוצה לשלב את הכלי בסקריפט אוטומטי שרץ לבד על שרת, למשל כדי להפיק סיכום בלילה. אם אף אחד מאלה לא נכון לגביך - דלג על השיעור הזה בלב שלם, ולא תפסיד שום יכולת קלינית.

## ההסבר בפשטות

הטאב Code הוא חלון גרפי עם כפתורים שאתה לוחץ עליהם. שורת הפקודה (CLI, ראשי תיבות של Command Line Interface) היא חלון טקסט שבו אתה מקליד פקודה ומקיש Enter במקום ללחוץ. כדי שהחלון הזה יוכל בכלל להריץ את \`claude\`, צריך קודם להתקין מנוע הרצה שנקרא Node.js, ואיתו מגיע אוטומטית עוזר בשם \`npm\` (מנהל חבילות) שתפקידו להוריד ולהתקין תוכנות מהאינטרנט. את שני אלה מתקינים פעם אחת בלבד, והם נשארים על המחשב לתמיד.

חשוב על זה כמו על תקע חשמל שמתקין חשמלאי בקיר: מתקינים אותו פעם אחת, ומאותו רגע כל מכשיר שמתאים לתקע פשוט נדלק כשמחברים אותו, בלי לקרוא לחשמלאי שוב. מנוע ההרצה Node.js הוא התקע בקיר, והכלי \`claude\` הוא המכשיר שאתה מחבר אליו אחר כך.

## דוגמה מהמרפאה, צעד אחר צעד

נתקין את הכלי ונבדוק שהוא חי וזמין, בלי להזין שום שם, מספר זהות או נתון של מטופל אמיתי.

1. התקן את Node.js פעם אחת: היכנס לאתר \`nodejs.org\`, הורד את גרסת ה-LTS היציבה, ואשר את כל מסכי ברירת המחדל בלי לשנות דבר.
2. פתח את חלון שורת הפקודה: במחשב Windows חפש **PowerShell** בתפריט התחל, וחשוב מאוד - לחץ עליו בקליק ימני ובחר **Run as administrator**, כדי שתהיה לו הרשאה להתקין.
3. הקלד את הפקודה הבאה והקש Enter כדי להוריד ולהתקין את הכלי:

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

4. כדי לוודא שההתקנה הצליחה, הקלד את הפקודה הבאה והקש על מקש Enter כך:

\`\`\`bash
claude --version
\`\`\`

מה שתראה: אם הכל עבד, תקבל שורה אחת קצרה עם מספר גרסה (למשל \`2.x.x\`), וזה הסימן שהכלי מותקן. אם במקום זה קיבלת הודעת שגיאה כמו \`EACCES\` או \`permission denied\` - הסיבה כמעט תמיד היא שלא פתחת את PowerShell עם הרשאות מנהל; סגור את החלון, פתח אותו מחדש עם **Run as administrator**, והרץ שוב את פקודת ההתקנה.

## נסה בעצמך

פתח את שורת הפקודה והרץ רק את הפקודה \`claude --version\`. אם חזר אליך מספר גרסה - הכלי מותקן ומוכן, וסיימת. כל הבדיקה הזאת היא על תוכנה בלבד, אז אל תזין שום נתון רגיש של מטופל בשלב הזה.

## טעויות נפוצות

- **שגיאת הרשאות במחשב Windows** - פתחת PowerShell רגיל במקום כמנהל, ולכן אין לו הרשאה להתקין. הפתרון: לחץ קליק ימני על PowerShell, בחר **Run as administrator**, והרץ שוב.
- **הכלי \`npm\` לא מוכר כפקודה** - Node.js עוד לא הותקן, או שלא פתחת חלון שורת פקודה חדש אחרי ההתקנה. הפתרון: התקן את Node.js, סגור את החלון לגמרי ופתח חלון חדש.
- **ציפייה ליכולת חדשה** - שורת הפקודה לא נותנת שום דבר קליני שלא קיים כבר בטאב Code הגרפי. הפתרון: זכור שזה רק ממשק שונה לאותו מנוע, ולא תכונה נוספת.
- **התקנה בלי גרסת LTS** - הורדת גרסת Node.js ניסיונית במקום היציבה. הפתרון: בחר תמיד את כפתור ה-LTS באתר.

## נקודות לזכירה

- את הכלי מתקינים בפקודה אחת, \`npm install -g @anthropic-ai/claude-code\`, אחרי התקנה חד-פעמית של מנוע ההרצה Node.js במחשב.
- במחשב Windows הפעל את שורת הפקודה כמנהל כדי להימנע משגיאת הרשאות.
- שורת הפקודה והטאב Code מריצים את אותו מנוע; ההבדל היחיד הוא הממשק.

:::advanced
ההתקנה דרך \`npm\` היא התקנה גלובלית (\`-g\`), כלומר הכלי זמין מכל תיקייה במחשב, והוא מריץ בדיוק את אותו מנוע שמפעיל את הטאב Code - לכן שורת הפקודה לא פותחת שום יכולת קלינית חדשה, אלא רק ממשק טרמינל. במחשב Windows שגיאת הרשאות בזמן ההתקנה מעידה כמעט תמיד שצריך טרמינל עם הרשאות מנהל (Run as administrator).
:::

## מה הלאה

בשיעור הבא, [פקודות ומקשי קיצור](/academy/advanced/terminal-basics), תלמד את הפקודות והקיצורים שמזרזים את העבודה בתוך שורת הפקודה אחרי שהתקנת אותה.`,
    en: `By the end of this lesson you will know how to install the \`claude\` tool in your computer's command line, confirm the install worked, and understand that it runs the same engine as the Code tab.

:::beginner
This track is entirely optional, and you are welcome to skip it with no loss. A physician with no technical background does not need a terminal at all, and nothing here opens a new clinical capability - it is only a different interface to the same thing you already have in the Code tab. Continue only if you are curious, or if you work on a Linux computer that has no Desktop app.
:::

## What you will learn here

- You will be able to install the \`claude\` tool as a command-line program on your computer, with a single command.
- You will be able to confirm the install worked, and fix the common permission error on a Windows computer.
- You will be able to explain to yourself why the Code tab and the command line are two faces of the same engine.

## Why this matters in your clinic

The plain truth: in most cases it does not matter for your clinic. If you already work in the Code tab on pathology reports, referral letters, or daily summaries, you get the exact same engine there, plus a sidebar of conversations, a file editor, and a visual diff that you approve before anything is saved. That visual approach is actually safer when patient material is involved. The command line (CLI) is needed only in two situations: when you are on a Linux computer with no Desktop app, or when you want to wire the tool into an automated script that runs by itself on a server, for example to produce a summary overnight. If neither is true for you, skip this lesson with a clear conscience and you will lose no clinical capability.

## The explanation, simply

The Code tab is a graphical window with buttons you click. The command line (CLI, short for Command Line Interface) is a text window where you type a command and press Enter instead of clicking. For that window to run \`claude\` at all, you first need to install a runtime called Node.js, and it brings along a helper named \`npm\` (a package manager) whose job is to download and install programs from the internet. You install both of these only once, and they stay on the computer for good.

Think of it like a power outlet an electrician installs in the wall: you install it once, and from that moment any device that fits the plug just turns on when you connect it, with no need to call the electrician again. Node.js is the outlet in the wall, and the \`claude\` tool is the device you plug in afterward.

## A clinic example, step by step

We will install the tool and check it is alive and available, without entering any name, ID number, or real patient data.

1. Install Node.js once: go to \`nodejs.org\`, download the stable LTS version, and accept all the default screens without changing anything.
2. Open the command-line window: on a Windows computer search for **PowerShell** in the Start menu, and very importantly - right-click it and choose **Run as administrator**, so it has permission to install.
3. Type the following command and press Enter to download and install the tool:

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

4. To confirm the install succeeded, type the following command and press Enter:

\`\`\`bash
claude --version
\`\`\`

What you will see: if everything worked, you get one short line with a version number (for example \`2.x.x\`), and that is the sign the tool is installed. If instead you got an error like \`EACCES\` or \`permission denied\`, the reason is almost always that you did not open PowerShell with administrator rights; close the window, reopen it with **Run as administrator**, and run the install command again.

## Try it yourself

Open the command line and run just the command \`claude --version\`. If a version number comes back, the tool is installed and ready, and you are done. This whole check is on software only, so do not enter any sensitive patient data at this stage.

## Common mistakes

- **Permission error on a Windows computer** - you opened a regular PowerShell instead of an administrator one, so it has no permission to install. The fix: right-click PowerShell and choose **Run as administrator**.
- **The \`npm\` tool is not recognized as a command** - Node.js is not installed yet, or you did not open a fresh command-line window after the install. The fix: install Node.js, close the window completely, and open a new one.
- **Expecting a new capability** - the command line gives nothing clinical that the Code tab does not already have. The fix: remember it is only a different interface to the same engine, not an extra feature.
- **Installing without the LTS version** - you downloaded an experimental Node.js version instead of the stable one. The fix: always choose the LTS button on the site.

## Points to remember

- The tool installs with one command, \`npm install -g @anthropic-ai/claude-code\`, after a one-time Node.js install.
- On a Windows computer, run the command line as administrator to avoid a permission error.
- The command line and the Code tab run the same engine; the only difference is the interface.

:::advanced
The \`npm\` install is global (\`-g\`), so the tool is available from any folder, and it runs the exact same engine that powers the Code tab - which is why the command line opens no new clinical capability, only a terminal interface. On Windows, a permission error during install almost always means you need an elevated (administrator) terminal.
:::

## What is next

In the next lesson, [Commands and shortcuts](/academy/advanced/terminal-basics), you will learn the commands and shortcuts that speed up work inside the command line once you have installed it.`,
  },
};

export default lesson;
