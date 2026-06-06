import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'what-is-claude',
  track: 'getting-started',
  title: { he: 'מה זה Claude ואיך הוא עוזר לרופא', en: 'What Claude Is and How It Helps a Physician' },
  description: { he: 'היכרות קצרה: מה Claude יודע לעשות, ולמה הוא שימושי בעבודה הקלינית.', en: 'A short intro: what Claude can do and why it is useful in clinical work.' },
  duration: 7,
  updated: '2026-06-06',
  content: {
    he: `בסוף השיעור תדע מה הכלי Claude יודע לעשות, איפה הוא עוזר לך ביום העבודה, ואיפה חשוב לשמור על שיקול הדעת שלך.

## מה תלמד כאן

- תוכל להסביר במילים פשוטות מה הכלי Claude עושה ולמי הוא מתאים.
- תוכל לזהות שלוש משימות קליניות שבהן הוא חוסך לך זמן כבר היום.
- תוכל לקבוע אילו גבולות לשמור, ובמיוחד מה אסור להקליד בחשבון רגיל.

## למה זה חשוב לך במרפאה

כל יום נוחתים עליך טקסטים שדורשים ניסוח: מכתב הפניה שצריך לצאת ברור, תשובת פתולוגיה ארוכה שצריך לזקק לשורות החשובות, והסבר לחולה שצריך להיות בגובה העיניים. הכלי Claude לוקח את החלק הזה על עצמו ומחזיר לך טיוטה תוך שניות, כך שאתה רק עובר ומאשר. במקום לשבת מול עמוד ריק בסוף יום ארוך, אתה מתחיל מטיוטה מסודרת ומשפר אותה. הוא גם קורא תמונה שאתה מעלה, למשל צילום של מסמך סרוק או של גרף מעבדה, ומסכם לך מה כתוב בו. החיסכון אינו בזמן בלבד: טקסט ברור יותר אל המטופל ואל הרופא המפנה מצמצם אי הבנות וטלפונים חוזרים.

## ההסבר בפשטות

הכלי Claude הוא עוזר מבוסס בינה מלאכותית שמדברים איתו בעברית רגילה, בדיוק כמו בהתכתבות. אתה כותב בקשה במילים שלך, והוא עונה בטקסט: מנסח, מסכם, מסביר, מתרגם. אין צורך בשום ידע טכני, ואין שום פקודה מיוחדת ללמוד מראש. ככל שתסביר לו טוב יותר מה אתה רוצה, כך התשובה תהיה קרובה יותר לצורך שלך, בדיוק כמו שהיית מסביר למתמחה.

הדימוי הכי קרוב הוא **מתמחה חד ומסור שזמין לך בכל שעה**. הוא קורא מהר, מנסח יפה, ולא מתעייף, אבל הוא לא מחליף את הרופא. אתה נותן לו את ההקשר, הוא מחזיר טיוטה, ואתה מאשר או מתקן, ממש כמו עבודה עם מתמחה טוב. אתה הסמכות הקלינית, ואתה זה שמאשר כל מילה לפני שהיא יוצאת. חשוב לזכור: הכלי Claude אינו מכשיר רפואי, הוא יכול לטעות בפרטים או להמציא מקור שלא קיים, ולכן כל פלט קליני עובר אימות שלך מול מקור מהימן. בחשבון רגיל אין לו גישה לאינטרנט חי אלא אם חיברת אותו, וזה בסדר לרוב המשימות של ניסוח וסיכום, שבהן הוא עובד על מה שאתה נותן לו ולא על מידע חיצוני.

## דוגמה מהמרפאה, צעד אחר צעד

נניח שיש לך משפט מכתב הפניה מסורבל, ואתה רוצה לנסח אותו ברור יותר, בלי שום פרט מזהה.

1. פתח את הכלי Claude ובחר את הטאב Chat (צ'אט) לכתיבה.
2. לחץ על תיבת ההקלדה בתחתית המסך.
3. הדבק את הבקשה הבאה:

\`\`\`
נסח מחדש את משפט ההפניה הבא בעברית קלינית ברורה וקצרה, בלי שום פרט מזהה:
"מועבר בזאת לבדיקתכם נגע פיגמנטרי באזור הגב העליון אשר הופיע לדברי המטופל בחודשים האחרונים ואשר מעורר חשד לשינוי במראהו ועל כן מומלץ על הערכה דרמטוסקופית."
\`\`\`

4. לחץ על כפתור השליחה (החץ).

מיד תראה גרסה קצרה וברורה של אותו משפט, מוכנה להעתקה אל המכתב שלך. אם הגרסה ארוכה מדי או רשמית מדי, פשוט כתוב בהמשך השיחה "קצר עוד יותר" או "בטון פחות רשמי", והכלי Claude יתקן בלי שתצטרך להתחיל מחדש.

:::beginner
אם משהו בתשובה לא מדויק, אל תתחיל שיחה חדשה. כתוב פשוט מה לשנות, כמו "החלף הערכה דרמטוסקופית בבדיקת עור", והוא ימשיך מאותה נקודה.
:::

## נסה בעצמך

בחר ערך מעבדה אחד לא רגיש, למשל ויטמין D נמוך, ובקש מהכלי Claude הסבר קצר בעברית ידידותית לחולה. הקלד: "הסבר בעברית פשוטה למטופל מה המשמעות של רמת ויטמין D נמוכה ולמה כדאי לטפל בה." קרא את התשובה ושים לב כמה היא נגישה.

## טעויות נפוצות

- **לסמוך בלי לאמת.** התיקון: קרא כל טיוטה קלינית כאילו מתמחה כתב אותה, ותקן לפני שאתה משתמש.
- **להקליד שם או תעודת זהות של מטופל בחשבון רגיל.** התיקון: עבוד תמיד עם נתונים מנוטרלי זיהוי, כמו בדוגמה שלמעלה.
- **לצפות לאינטרנט חי בחשבון רגיל.** התיקון: למשימות עדכניות חבר מקור מתאים, אבל לניסוח וסיכום אין צורך בכך.

## נקודות לזכירה

- הכלי Claude הוא עוזר שמדברים איתו בעברית, ומצוין לניסוח, סיכום והסבר.
- הוא מתמחה מהיר ולא תחליף לשיקול הדעת שלך, ולכן אתה מאשר כל פלט.
- אף פעם אל תקליד פרט מזהה של מטופל בחשבון רגיל.

:::advanced
בקצרה: Claude מגיע בשלושה דגמים. Opus 4.8 הוא החזק ביותר ומתאים לחשיבה מורכבת, Sonnet 4.6 מהיר לעבודה יומיומית, ו-Haiku 4.5 זריז וזול. הכלי גם מחליט בעצמו כמה "לחשוב" על כל שאלה, לפי מידת המורכבות שלה.
:::

## מה הלאה

בשיעור הבא, [דרכי השימוש](/academy/getting-started/usage-paths), תלמד איפה בדיוק מריצים את הכלי Claude כדי שיתאים לעבודה שלך.`,
    en: `By the end of this lesson you will know what the tool Claude can do, where it helps in your workday, and where it is important to keep your own judgment in charge.

## What you will learn here

- You will be able to explain in plain words what the tool Claude does and who it fits.
- You will be able to name three clinical tasks where it saves you time today.
- You will be able to keep the right limits, especially what you must never type into a regular account.

## Why this matters in your clinic

Every day brings text that needs wording: a referral letter that must read clearly, a long pathology report that needs distilling to the lines that matter, and an explanation for a patient that has to be at eye level. The tool Claude takes that part on and returns a draft within seconds, so you only review and approve. Instead of facing a blank page at the end of a long day, you start from an organized draft and improve it. It also reads an image you upload, for example a photo of a scanned document or a lab graph, and summarizes what it says. The saving is not only in time: clearer text to the patient and to the referring physician cuts misunderstandings and callback phone calls.

## The plain explanation

The tool Claude is an AI-based assistant that you talk to in everyday Hebrew, exactly like a chat. You write a request in your own words, and it answers in text: it drafts, summarizes, explains, translates. No technical knowledge is needed, and there is no special command to learn in advance. The better you describe what you want, the closer the answer fits your need, just like explaining a task to a resident.

The closest picture is **a sharp, dedicated resident available to you at any hour**. The resident reads fast, writes well, and never tires, but does not replace the physician. You give the context, it returns a draft, and you approve or correct, exactly like working with a good resident. You are the clinical authority, and you approve every word before it goes out. Remember: the tool Claude is not a medical device, it can be wrong on details or invent a source that does not exist, so every clinical output passes your verification against a trusted source. In a regular account it has no live internet unless you connect it, and that is fine for most drafting and summarizing tasks, where it works on what you give it rather than on outside information.

## A clinic example, step by step

Say you have a clumsy referral-letter sentence, and you want to word it more clearly, with no identifying detail.

1. Open the tool Claude in the **Chat** tab.
2. Click the text box at the bottom of the screen.
3. Paste the following request:

\`\`\`
נסח מחדש את משפט ההפניה הבא בעברית קלינית ברורה וקצרה, בלי שום פרט מזהה:
"מועבר בזאת לבדיקתכם נגע פיגמנטרי באזור הגב העליון אשר הופיע לדברי המטופל בחודשים האחרונים ואשר מעורר חשד לשינוי במראהו ועל כן מומלץ על הערכה דרמטוסקופית."
\`\`\`

4. Click the send button (the arrow).

You will immediately see a short, clear version of that sentence, ready to copy into your letter. If the version is too long or too formal, just write next in the same chat "even shorter" or "less formal tone," and the tool Claude will revise without your having to start over.

:::beginner
If something in the answer is off, do not start a new chat. Just write what to change, like "replace dermoscopic assessment with skin exam," and it will continue from that point.
:::

## Try it yourself

Pick one non-sensitive lab value, for example a low vitamin D, and ask the tool Claude for a short patient-friendly explanation in Hebrew. Type: "הסבר בעברית פשוטה למטופל מה המשמעות של רמת ויטמין D נמוכה ולמה כדאי לטפל בה." Read the answer and notice how accessible it is.

## Common mistakes

- **Trusting without verifying.** The fix: read every clinical draft as if a resident wrote it, and correct it before you use it.
- **Typing a patient name or ID into a regular account.** The fix: always work with de-identified data, as in the example above.
- **Expecting live internet in a regular account.** The fix: for up-to-date tasks connect a suitable source, but drafting and summarizing do not need it.

## Points to remember

- The tool Claude is an assistant you talk to in Hebrew, and it is excellent for drafting, summarizing, and explaining.
- It is a fast resident and not a substitute for your judgment, so you approve every output.
- Never type a patient identifier into a regular account.

:::advanced
In brief: Claude comes in three models. Opus 4.8 is the strongest and suits hard reasoning, Sonnet 4.6 is fast for daily work, and Haiku 4.5 is quick and cheap. The tool also decides on its own how much to "think" per question, based on how complex it is.
:::

## What is next

In the next lesson, [Ways to Use Claude](/academy/getting-started/usage-paths), you will learn exactly where to run the tool Claude so it fits your work.`,
  },
};

export default lesson;
