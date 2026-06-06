import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'power-tools',
  track: 'advanced',
  title: { he: 'כלי עוצמה - MCP, Hooks, API ו-SDK', en: 'Power Tools - MCP, Hooks, API, and SDK' },
  description: {
    he: 'להרחיב את Claude עם MCP, hooks, ולבנות מול ה-API.',
    en: 'Extend Claude with MCP, hooks, and build against the API.',
  },
  duration: 9,
  updated: '2026-06-06',
  content: {
    he: `# כלי עוצמה - MCP, Hooks, API ו-SDK

בסוף השיעור תכיר בשפה פשוטה שלושה כלים מתקדמים - MCP, hooks וה-API, ותדע מתי כל אחד רלוונטי ומתי עדיף להישאר בטאב \`Code\` ולעבוד כרגיל.

:::beginner
זה השיעור הכי טכני באתר, וכולו סקירה בלבד. רופא שרק רוצה לעבוד יעיל על דוחות ומכתבים - לא צריך אף אחד מהכלים האלה. קרא אם אתה סקרן, ואז חזור לטאב \`Code\` להמשך העבודה היומית.
:::

## מה תלמד כאן

- תוכל להסביר במשפט אחד מה זה \`MCP\`, מה זה \`hook\` ומה זה \`API\` בלשון פשוטה.
- תוכל לזהות אם משימה כלשהי שלך בכלל מצדיקה את הכלים האלה.

## למה זה חשוב לך במרפאה

נניח שאתה רוצה ש-Claude יישלף נתון ישירות ממערכת הזימונים של המרפאה, או שירוץ אוטומטית בכל פעם שמתווסף דוח פתולוגיה חדש לתיקייה, או שיפיק סיכום יומי שמתעדכן מעצמו בכל ערב. את אלה הטאב Code לבדו לא עושה - בטאב Code אתה זה שמצביע על קובץ ומבקש פעולה, בעוד הכלים כאן מחברים את Claude למקור הנתונים עצמו ומפעילים אותו ללא נוכחותך. הכלים בשיעור הזה הם הדרך לחבר את Claude למערכות חיצוניות ולתהליכים אוטומטיים, אבל הם דורשים מישהו טכני שיקים אותם פעם אחת ויאבטח אותם. זו סקירה כדי שתדע מה אפשרי, מתי בכלל שווה ללכת לכיוון, ועל מה לבקש עזרה בלי ללמוד לתכנת בעצמך.

## ההסבר בפשטות

נסביר את שלושת הכלים במשפט אחד כל אחד, עם הסיבה הקלינית. הפרוטוקול \`MCP\` (ראשי תיבות של Model Context Protocol, פרוטוקול לחיבור מודל למקורות מידע) הוא דרך לחבר את Claude לכלי חיצוני - למשל למסד הנתונים של המרפאה או למערכת ההפניות - כדי שישלוף נתונים בעצמו במקום שתעתיק ידנית. הטריגר \`hook\` (וו אוטומציה) מריץ פעולה בנקודה קבועה - למשל לסכם כל דוח חדש שנכנס לתיקייה, בלי שתצטרך לזכור לבקש. הממשק \`API\` (ראשי תיבות של Application Programming Interface, ממשק תכנותי בין מערכות, ועליו נבנה גם ה-SDK) הוא הדרך לבנות אינטגרציה משלך, אם תרצה אפליקציה פנימית למרפאה שמשתמשת ב-Claude מאחורי הקלעים. שלושת אלה הם תשתית למפתחים, לא תכונה שמפעילים בלחיצת כפתור בתוך הצ'אט.

חשוב על זה כמו על מטבח: הטאב \`Code\` הוא לבשל בעצמך עם המצרכים שלפניך. הכלי \`MCP\` הוא לפתוח דלת ישירה למחסן כדי שהמצרכים יגיעו לבד, הטריגר \`hook\` הוא טיימר שמדליק את התנור בשעה קבועה, והממשק \`API\` הוא להקים מסעדה שלמה עם מטבח משלך. רוב הרופאים נשארים בבישול הביתי שבטאב \`Code\`, וזה בסדר גמור - מעבר לתשתית הזו משתלם רק כשיש תהליך חוזר וברור שגוזל לך זמן כל יום.

## דוגמה מהמרפאה, צעד אחר צעד

נסתכל איך נראית הגדרת MCP, רק כדי לזהות אותה אם מישהו טכני יראה לך אותה. אנחנו לא מזינים שום נתון של מטופל - זו רק הגדרה.

1. פתח את הכלי Claude ועבור אל מסך ההגדרות (\`Settings\`) באפליקציה.
2. אתר את קובץ ההגדרות \`claude_desktop_config.json\`, שבו רושמים את שרתי החיבור.
3. כך נראית רשומה לדוגמה של חיבור לכלי חיצוני:

\`\`\`json
{
  "mcpServers": {
    "clinic-db": {
      "command": "npx",
      "args": ["-y", "example-mcp-server"],
      "env": { "API_TOKEN": "PLACEHOLDER_LO_LEHadbik_Token_Amiti" }
    }
  }
}
\`\`\`

4. בקש ממישהו טכני להתקין ולאמת את השרת לפניך, ואל תכניס לבד מפתחות אמיתיים.

מה שתראה: בלוק טקסט קצר עם שם החיבור, הפקודה שמפעילה אותו והשדה הרגיש. השדה \`API_TOKEN\` הוא בדיוק הנקודה הקריטית - הסוד שמעולם לא משתפים, כמו שתכף נסביר בטעויות הנפוצות. שים לב שגם בדוגמה הזו לא הקלדנו שם, תעודת זהות או שום נתון של מטופל; הגדרת חיבור היא בלוק טכני בלבד.

## נסה בעצמך

פתח שיחה רגילה בטאב \`Chat\` והדבק את ההנחיה: "הסבר לי בשתי שורות מה זה MCP ומה זה hook, בלי קוד". קרא את התשובה והשווה אותה להסבר כאן, ושאל את עצמך אם יש לך תהליך חוזר במרפאה שבאמת מצדיק כזה חיבור. תרגיל של פחות משלוש דקות שמקבע את שני המושגים, בלי שום נתון רגיש.

## טעויות נפוצות

- **שיתוף או שמירה של מפתח API בקוד גלוי.** זו הטעות החמורה ביותר כאן: מפתח (token) הוא כמו סיסמה לחשבון בתשלום שלך, ומי שמשיג אותו יכול לחייב אותך, לגשת לנתונים שחיברת ולפעול בשמך. התיקון: לעולם אל תשלח מפתח בצ'אט, באימייל או בתמונת מסך, ואל תשמור אותו בקובץ שעולה לגיט - שמור אותו רק במשתנה סביבה מוגן, ואם מפתח דלף, בטל אותו מיד והנפק חדש.
- **לחשוב שצריך MCP או API כדי לעבוד עם Claude.** התיקון: לעבודה הקלינית היומית הטאב \`Code\` מספיק לבדו, והכלים האלה הם תוספת לתהליכים חוזרים בלבד.
- **להקים שרת MCP לבד בלי רקע טכני.** התיקון: בקש מאיש טכני שיגדיר, יאמת ויאבטח את החיבור, ואתה רק תשתמש בו דרך הכלי Claude בלבד.

## נקודות לזכירה

- הכלי \`MCP\` מחבר את Claude לכלים חיצוניים, ה-\`hook\` מריץ פעולה אוטומטית, וה-\`API\` הוא לבניית אינטגרציה משלך.
- מפתח \`API\` הוא סוד אישי - אף פעם לא משתפים אותו ולא מעלים אותו לגיט.
- לרופא, הציר המומלץ נשאר הטאב \`Code\` באפליקציית Claude Desktop למחשב.

:::advanced
שרתי \`MCP\` מרחיבים את Claude בכלים מותאמים אישית, \`hooks\` מריצים סקריפטים בתגובה לאירועים, וה-\`API\` וה-\`SDK\` מאפשרים לבנות אינטגרציות משלך - כולם עוצמתיים, וכולם מיותרים לעבודה הקלינית השוטפת. הכלל אחד שחשוב כאן מכל השאר: לעולם אל תשתף מפתח \`API\` ואל תעלה אותו לגיט.
:::

## מה הלאה

סיימת את המסלול המתקדם; [חזרה לאקדמיה](/academy) תחזיר אותך למסלול המומלץ, שבמרכזו הטאב \`Code\` לעבודה היומית.`,
    en: `# Power Tools - MCP, Hooks, API, and SDK

By the end of this lesson you will know, in plain words, three advanced tools - MCP, hooks, and the API - and when each is relevant versus when it is better to stay in the Code tab.

:::beginner
This is the most technical lesson on the site, and it is a survey only. A physician who just wants to work efficiently on reports and letters needs none of these tools. Read it if you are curious, then return to the Code tab.
:::

## What you will learn here

- You will be able to explain in one sentence what MCP is, what a hook is, and what an API is.
- You will be able to tell whether a task of yours even justifies these tools.

## Why this matters in your clinic

Say you want Claude to pull a value directly from your clinic's scheduling system, or to run automatically every time a new pathology report is added to a folder, or to produce a daily summary that refreshes itself every evening. The Code tab alone does not do these - in the Code tab you are the one pointing at a file and asking for an action, whereas the tools here connect Claude to the data source itself and run it without you present. The tools in this lesson are the way to connect Claude to external systems and automated processes, but they need a technical person to set them up once and secure them. This is a survey so you know what is possible, when it is even worth heading that way, and what to ask for help with without learning to program yourself.

## The explanation, simply

We will explain the three tools in one sentence each, with the clinical reason. **MCP** (short for Model Context Protocol) is a way to connect Claude to an external tool - for example your clinic's database or its referral system - so it pulls data on its own instead of you copying it by hand. A **hook** is an automation trigger that runs an action at a fixed point - for example summarizing every new report that lands in a folder, without you having to remember to ask. The **API** (and the SDK built on top of it) is the way to build your own integration, if you want an internal clinic app that uses Claude behind the scenes. All three are infrastructure for developers, not a feature you turn on with a button inside the chat.

Think of it like a kitchen: the Code tab is cooking yourself with the ingredients in front of you. MCP is opening a direct door to the pantry so the ingredients arrive on their own, a hook is a timer that turns on the oven at a set hour, and the API is opening a whole restaurant with a kitchen of your own. Most physicians stay with the home cooking of the Code tab, and that is perfectly fine - moving to this infrastructure pays off only when there is a clear, recurring process that costs you time every day.

## A clinic example, step by step

We will look at what an MCP setup looks like, just so you recognize it if a technical person shows it to you. We enter no patient data - this is only a configuration.

1. Open the tool Claude and go to Settings.
2. Locate the config file \`claude_desktop_config.json\`, where MCP servers are listed.
3. Here is what a sample entry for connecting to an external tool looks like:

\`\`\`json
{
  "mcpServers": {
    "clinic-db": {
      "command": "npx",
      "args": ["-y", "example-mcp-server"],
      "env": { "API_TOKEN": "PLACEHOLDER_DO_NOT_PASTE_A_REAL_TOKEN" }
    }
  }
}
\`\`\`

4. Ask a technical person to install and verify the server for you, and do not enter real keys yourself.

What you will see: a short text block with the connection name, the command that runs it, and the sensitive field. The \`API_TOKEN\` field is exactly the critical point - the secret you never share, as we will explain next in the common mistakes. Notice that even in this example we did not type a name, an ID number, or any patient data; a connection setup is a technical block only.

## Try it yourself

Open a regular conversation in the Chat tab and paste: "Explain to me in two lines what MCP is and what a hook is, without code". Read the answer and compare it to the explanation here, and ask yourself whether you have a recurring process in the clinic that truly justifies such a connection. A drill of under three minutes that fixes both concepts, with no sensitive data.

## Common mistakes

- **Sharing or saving an API key in visible code.** This is the most serious mistake here: a key (token) is like a password to your paid account, and anyone who gets it can run up charges, reach the data you connected, and act in your name. The fix: never send a key in chat, email, or a screenshot, and never save it in a file that goes to git - keep it only in a protected environment variable, and if a key leaks, revoke it at once and issue a new one.
- **Thinking you need MCP or an API to work with Claude.** The fix: for daily clinical work the Code tab is enough on its own, and these tools are an add-on for recurring processes only.
- **Setting up an MCP server yourself with no technical background.** The fix: ask a technical person to configure, verify, and secure the connection, and you just use it through the Claude tool.

## Points to remember

- MCP connects Claude to external tools, a hook runs an action automatically, and the API is for building your own integration.
- An API key is a personal secret - you never share it and never upload it to git.
- For a physician, the recommended axis stays the Code tab in the Claude Desktop app.

:::advanced
\`MCP\` servers extend Claude with custom tools, \`hooks\` fire scripts in response to events, and the \`API\` and \`SDK\` let you build your own integrations - all powerful, all unnecessary for routine clinical use. The one rule that matters most here: never share an \`API\` token or commit it to git.
:::

## What is next

You have finished the advanced track; [back to the academy](/academy) returns you to the recommended path, centered on the Code tab for daily work.`,
  },
};

export default lesson;
