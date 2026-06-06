import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'terminal-basics',
  track: 'advanced',
  title: { he: 'פקודות ומקשי קיצור בטרמינל', en: 'Terminal Commands and Shortcuts' },
  description: {
    he: 'הפקודות, הקיצורים וה-slash commands ב-Claude Code מהטרמינל.',
    en: 'The commands, shortcuts, and slash commands in Claude Code from the terminal.',
  },
  duration: 8,
  updated: '2026-06-06',
  content: {
    he: `בסוף השיעור תוכל להפעיל פקודות מהירות (slash commands) בשורת הפקודה, ותוכל לבחור את מצב ההרשאות שמתאים לכל משימה.

:::beginner
זה תוכן למסלול המתקדם. אם אתה עובד נוח בטאב Code עם הכפתורים והעכבר, אינך חייב כלום מכאן. המשך רק אם אתה עובד בשורת הפקודה ורוצה לזרז אותה.
:::

## מה תלמד כאן

- תוכל להריץ פקודה מהירה אחת במקום להקליד הוראה ארוכה, למשל \`/init\` או \`/review\`.
- תוכל להחליט בכל משימה אם הכלי פועל לבד או עוצר לאישור שלך, דרך מצב ההרשאות.

## למה זה חשוב לך במרפאה

תאר לעצמך שאתה פותח תיקייה של טיוטות מכתבי הפניה, ורוצה שהכלי יכיר את כללי הכתיבה שלך לפני שהוא נוגע בקובץ. במקום להסביר הכל מחדש בכל פעם, פקודה אחת בונה לך קובץ הנחיות קבוע לתיקייה. ובמשימה רגישה, כמו עריכת סיכום פתולוגיה, אתה רוצה לראות כל שינוי לפני שהוא נשמר, ולא שהכלי יכתוב לבד. מצב ההרשאות הוא בדיוק הבורר הזה.

## ההסבר בפשטות

פקודה מהירה (slash command) היא קיצור שמתחיל בלוכסן וחוסך הקלדה של הוראה ארוכה. במקום לכתוב "תקרא את כל התיקייה ותסכם את הכללים", אתה מקליד \`/init\` והכלי יודע מה לעשות. כל פקודה מהירה מתאימה למשימה חוזרת שאתה עושה הרבה, כמו \`/init\` שמכין קובץ הנחיות לתיקייה או \`/review\` שמחזיר הערות על קובץ, ולכן היא חוסכת לך זמן בכל יום עבודה. מצב ההרשאות הוא נושא נפרד וחשוב יותר: הוא קובע כמה הכלי פועל לבד מול כמה הוא עוצר ושואל אותך.

חשוב על זה כמו על נהיגה. במצב הזהיר אתה במושב הנהג, והכלי מבקש רשות לפני כל פנייה, וזה המצב שאתה רוצה כשנוגעים בחומר רפואי. במצב האוטונומי הכלי נוהג לבד מתחילת המשימה ועד סופה, וזה מתאים רק לעבודה לא רגישה שבה אתה מוכן לתת לו לרוץ. ברירת המחדל היא הזהירה, ומומלץ להישאר בה כשיש ספק.

## דוגמה מהמרפאה, צעד אחר צעד

ננסה את \`/init\` על תיקייה לא רגישה של טיוטות, בלי שום שם או מספר זהות של מטופל. כל הנתונים בדוגמה ממוסכים, ולכן אפשר להריץ אותה בבטחה גם בפעם הראשונה.

1. צור תיקייה חדשה בשם \`drafts-demo\`, ושים בה שני מכתבי הפניה לדוגמה שכבר ניקית מפרטים מזהים.
2. פתח את שורת הפקודה בתוך התיקייה הזו, והפעל את הכלי בהקלדת הפקודה \`claude\`.
3. הקלד את הפקודה המהירה \`/init\` ולחץ על מקש האנטר כדי להריץ אותה.
4. כשהכלי מציג את מצב ההרשאות, השאר אותו במצב הזהיר שעוצר לאישור.
5. אם תרצה שהוא יסיים מהר יותר, הוסף את \`/fast\` שמאיץ את קצב הפלט עד פי 2.5 מהרגיל.
6. כשמופיע קובץ חדש בשם \`CLAUDE.md\`, פתח אותו וקרא את כללי הכתיבה שהכלי הסיק מהטיוטות.

אם אתה מעדיף הוראה מנוסחת במקום הפקודה הקצרה, הדבק את הטקסט הבא בשורת הפקודה אחרי שהכלי עלה. שים לב שאין בו שום פרט מזהה, והוא בטוח להעתקה:

\`\`\`text
קרא את שני מכתבי ההפניה בתיקייה drafts-demo, הסק מהם את כללי הכתיבה והניסוח שלי, וכתוב אותם לקובץ CLAUDE.md. אל תיגע בשום קובץ אחר, ועצור לאישורי לפני כל כתיבה.
\`\`\`

מה שתראה: קובץ \`CLAUDE.md\` קצר שמסכם את סגנון המכתבים שלך, ומעכשיו הכלי יקרא אותו אוטומטית בכל פעם שתעבוד בתיקייה הזו. כך אינך צריך להסביר את הכללים מחדש בכל שיחה.

## נסה בעצמך

פתח תיקייה ריקה לגמרי, הפעל את הכלי, והקלד \`/review\` על קובץ טקסט קטן שכתבת. תוך פחות משלוש דקות תראה איך פקודה אחת מחזירה הערות מסודרות, בלי שום נתון רגיש.

## טעויות נפוצות

- **הפעלת \`/init\` בתיקייה עם חומר אמיתי של מטופלים** - הכלי קורא את כל התיקייה. הפתרון: הרץ רק על תיקיית טיוטות נקייה מפרטים מזהים.
- **השארת מצב אוטונומי במשימה רפואית** - הכלי יכתוב שינויים בלי לעצור. הפתרון: חזור למצב הזהיר שעוצר לאישור כשנוגעים בחומר קליני.
- **ציפייה ש-\`/fast\` ישנה את האיכות** - הוא רק מאיץ את קצב הפלט עד פי 2.5, ולא משנה את התשובה. הפתרון: השתמש בו כשרוצים מהירות, וכבה אותו כשרוצים את העבודה המדודה ביותר.

## נקודות לזכירה

- פקודה מהירה כמו \`/init\` או \`/review\` חוסכת הקלדה של הוראה ארוכה.
- מצב ההרשאות הוא הבורר בין אוטונומיה למשנה זהירות, והברירה הבטוחה בחומר רפואי היא הזהירה.
- הפקודה \`/fast\` מאיצה את קצב הפלט עד פי 2.5 בלי לשנות את התוכן.

## מה הלאה

בשיעור הבא, [כלי עוצמה](/academy/advanced/power-tools), תלמד להרחיב את הכלי עם שרתי MCP ו-hooks כדי לחבר אותו למערכות שלך.`,
    en: `By the end of this lesson you will be able to run quick commands (slash commands) in the command line, and you will be able to choose the permission mode that fits each task.

:::beginner
This is advanced-track content. If you work comfortably in the Code tab with buttons and a mouse, you need none of this. Continue only if you work in the command line and want to speed it up.
:::

## What you will learn here

- You will be able to run a single quick command instead of typing a long instruction, for example \`/init\` or \`/review\`.
- You will be able to decide, per task, whether the tool acts on its own or stops for your approval, through the permission mode.

## Why this matters in your clinic

Picture opening a folder of draft referral letters, and wanting the tool to learn your writing rules before it touches a file. Instead of explaining it all again each time, one command builds you a permanent instructions file for the folder. And on a sensitive task, like editing a pathology summary, you want to see every change before it is saved, not have the tool write on its own. The permission mode is exactly that switch.

## The explanation, simply

A quick command (slash command) is a shortcut that starts with a slash and saves you typing a long instruction. Instead of writing "read the whole folder and summarize the rules", you type \`/init\` and the tool knows what to do. Each quick command matches a repeated task you do often, like \`/init\` which prepares an instructions file for the folder or \`/review\` which returns notes on a file, so it saves you time on every working day. The permission mode is a separate and more important matter: it sets how much the tool acts on its own versus how much it stops and asks you.

Think of it like driving. In the careful mode you are in the driver's seat, and the tool asks permission before every turn, which is the mode you want when touching medical material. In the autonomous mode the tool drives on its own from the start of the task to the end, which suits only non-sensitive work where you are happy to let it run. The default is the careful one, and it is best to stay there when in doubt.

## A clinic example, step by step

We will try \`/init\` on a non-sensitive folder of drafts, with no patient name or ID at all. All the data in the example is de-identified, so it is safe to run even on your first try.

1. Create a new folder named \`drafts-demo\`, and put two sample referral letters in it that you have already cleaned of identifying details.
2. Open the command line inside that folder, and start the tool by typing the \`claude\` command.
3. Type the quick command \`/init\` and press the Enter key to run it.
4. When the tool shows the permission mode, leave it in the careful mode that stops for approval.
5. If you want it to finish faster, add \`/fast\`, which speeds the output rate up to 2.5x.
6. When a new file named \`CLAUDE.md\` appears, open it and read the writing rules the tool inferred from the drafts.

If you prefer a written instruction over the short command, paste the text below into the command line after the tool starts. Note that it contains no identifying detail, and it is safe to copy:

\`\`\`text
Read the two referral letters in the drafts-demo folder, infer my writing and phrasing rules from them, and write those rules to a CLAUDE.md file. Do not touch any other file, and stop for my approval before every write.
\`\`\`

What you will see: a short \`CLAUDE.md\` file that summarizes your letter style, and from now on the tool reads it automatically every time you work in that folder. That way you do not have to explain the rules again in every conversation.

## Try it yourself

Open a completely empty folder, start the tool, and type \`/review\` on a small text file you wrote. In under three minutes you will see how one command returns organized notes, with no sensitive data.

## Common mistakes

- **Running \`/init\` in a folder with real patient material** - the tool reads the whole folder. The fix: run it only on a draft folder cleaned of identifying details.
- **Leaving autonomous mode on a medical task** - the tool will write changes without stopping. The fix: return to the careful mode that stops for approval when touching clinical material.
- **Expecting \`/fast\` to change quality** - it only speeds the output rate up to 2.5x, and does not change the answer. The fix: use it when you want speed, and turn it off when you want the most measured work.

## Points to remember

- A quick command like \`/init\` or \`/review\` saves typing a long instruction.
- The permission mode is the switch between autonomy and extra caution, and the safe choice on medical material is the careful one.
- The \`/fast\` command speeds the output rate up to 2.5x without changing the content.

## What is next

In the next lesson, [Power Tools](/academy/advanced/power-tools), you will learn to extend the tool with MCP servers and hooks to connect it to your own systems.`,
  },
};

export default lesson;
