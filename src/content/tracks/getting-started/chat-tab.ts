import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'chat-tab',
  track: 'getting-started',
  title: { he: 'הטאב Chat - שיחה, קבצים, Artifacts ו-Projects', en: 'The Chat Tab - Conversation, Files, Artifacts, and Projects' },
  description: { he: 'לשאול, להעלות קובץ או תמונה, ולשמור סדר עם Projects.', en: 'Ask, upload a file or image, and stay organized with Projects.' },
  duration: 9,
  updated: '2026-06-06',
  content: {
    he: `אחרי השיעור הזה תדע להעלות קובץ אל הטאב Chat, לבקש סיכום ממוקד, ולהפוך תשובה למסמך שאפשר לערוך ולהוריד.

## מה תלמד כאן

- תוכל להעלות מסמך או תמונה ולבקש סיכום קצר ומדויק.
- תוכל לבקש מסמך פתוח לעריכה בחלון צד (Artifact) ולהוריד אותו.
- תוכל לפתוח Project עם הנחיות קבועות שכל שיחה חדשה כבר מכירה.

## למה זה חשוב לך במרפאה

מגיע אליך דוח פתולוגיה או תשובת מעבדה בן כמה עמודים, ואתה צריך את השורה התחתונה ב-20 שניות לפני הכניסה לחדר. אותו דבר עם מכתב הסבר למטופל: במקום לנסח מאפס כל פעם, אתה מקבל טיוטה נקייה ועורך אותה. גם תמונת גרף ממאמר או טבלת תוצאות שאתה לא בטוח איך לקרוא הופכות לשורה ברורה. הטאב Chat לוקח את המשימות האלה - קריאת מסמך ארוך וכתיבת הסבר - וחותך אותן לדקות.

## ההסבר בפשטות

הטאב Chat הוא שיחה רגילה: אתה כותב, Claude עונה, ואפשר לצרף קובץ או תמונה לשיחה. המילה החשובה כאן היא הקשר (context) - כל מה ש-Claude "רואה" באותה שיחה: מה שכתבת, מה שהעלית, וכל מה שנאמר קודם בשיחה הזו. ככל שההקשר ברור וממוקד יותר, התשובה מדויקת יותר. כשפותחים שיחה חדשה מתחילים מהקשר ריק, וזה דווקא יתרון כשרוצים נושא נקי בלי גרירה של דיון קודם.

חשוב על זה כמו על תדרוך למתמחה. אם תיתן לו דף ותגיד "תקרא ותחזיר לי שלוש נקודות עיקריות", תקבל בדיוק את זה. אם תגיד רק "מה דעתך?", תקבל תשובה כללית. אותו היגיון בדיוק עובד כאן: ההבדל בין תשובה שמשרתת אותך לתשובה כללית הוא כמעט תמיד בניסוח הבקשה, לא ביכולת של הכלי.

:::beginner
אם זה נשמע מסובך, אל תדאג. שיחה כאן היא בדיוק כמו לכתוב הודעה: אתה כותב מה שאתה רוצה, ובמידת הצורך מצרף קובץ או תמונה. אין מה לזכור פקודות מיוחדות, מספיק לבקש בעברית פשוטה את מה שאתה צריך.
:::

## דוגמה מהמרפאה, צעד אחר צעד

המשימה: לקבל סיכום של שלוש נקודות מדוח פתולוגיה מנוקה מזיהוי (בלי שם, בלי תעודת זהות, בלי תאריך לידה).

1. פתח את הטאב Chat ופתח שיחה חדשה.
2. ודא שהקובץ שאתה מעלה הוא PDF מנוקה מזיהוי - הסר או השחר שם, תעודת זהות ומספר מטופל לפני ההעלאה.
3. גרור את ה-PDF אל תיבת הכתיבה, או לחץ על סמל המהדק והעלה אותו.
4. הדבק את הבקשה הבאה ושלח.

\`\`\`
צירפתי דוח פתולוגיה מנוקה מזיהוי. סכם אותו בשלוש נקודות בלבד:
1. האבחנה העיקרית במילה אחת או שתיים.
2. שולי הכריתה - נקיים או לא, ובכמה מ"מ.
3. צעד המשך מומלץ אחד.
ענה בעברית, בקצרה, בלי הקדמות.
\`\`\`

מה שתראה: שלוש שורות ממוקדות בעברית, כל אחת עונה בדיוק על מה שביקשת, בלי פסקת רקע מיותרת.

### להפוך את זה ל-Artifact שאפשר לערוך

עכשיו נבקש הסבר ידידותי למטופל כמסמך פתוח לעריכה.

1. באותה שיחה, הדבק את הבקשה הבאה ושלח.

\`\`\`
על בסיס אותו דוח, כתוב מסמך הסבר קצר למטופל בשפה פשוטה,
4 עד 5 שורות, בגוף פונה אישית, בלי מונחים רפואיים מפחידים.
פתח אותו כמסמך נפרד שאוכל לערוך.
\`\`\`

2. ייפתח חלון צד נפרד (Artifact) עם המסמך. ערוך טקסט ישירות בתוכו, ולחץ על כפתור ההורדה בראש החלון כדי לשמור עותק.

מה שתראה: ההסבר מופיע בחלון הצד ולא באמצע השיחה, כך שקל לקרוא, לתקן מילה, ולהוריד.

## נסה בעצמך

- [ ] קח קובץ לא רגיש (למשל תקציר של מאמר סקירה, או טקסט שכתבת בעצמך), גרור אותו ל-Chat, ובקש סיכום בשלוש נקודות. אם התשובה כללית מדי, הוסף שורה אחת שמבקשת פורמט מדויק יותר.

## טעויות נפוצות

- **בקשה מעורפלת מחזירה תשובה כללית** - "תסכם את זה" יחזיר משהו רחב. התיקון: ציין מספר נקודות, אורך ושפה ("שלוש נקודות, בעברית, משפט לכל אחת").
- **העלאת מסמך עם פרטים מזהים** - אל תעלה דוח עם שם, תעודת זהות או תאריך לידה. התיקון: נקה או השחר את הפרטים לפני ההעלאה.
- **לבקש Artifact בלי לומר זאת** - אם תרצה מסמך שאפשר לערוך, בקש זאת במפורש ("פתח כמסמך נפרד שאוכל לערוך"). אחרת התשובה תופיע בתוך השיחה בלבד.

## נקודות לזכירה

- ההקשר הוא כל מה ש-Claude רואה בשיחה; ככל שהוא ממוקד, התשובה מדויקת יותר.
- בקשה ספציפית עם פורמט, אורך ושפה עדיפה תמיד על בקשה כללית.
- ה-Artifact הוא חלון צד שבו המסמך פתוח לעריכה והורדה.

:::advanced
ה-Project מאפשר לך להגדיר פעם אחת הנחיות קבועות ולצרף מאגר ידע קטן, כך שכל שיחה חדשה באותו Project כבר מכירה את הסגנון וההקשר שלך. ההקשר (context window) הוא כמות הטקסט ש-Claude יכול להחזיק בבת אחת, עד מיליון טוקנים בתוכניות הגבוהות. כך הנחיות קבועות וחומר הרקע נטענים אוטומטית בכל שיחה בלי שתצטרך לחזור עליהם.
:::

## מה הלאה

בשיעור הבא, [תוכניות ומחירים](/academy/getting-started/pricing-plans), תבין איזו תוכנית פותחת את האפליקציה ואת היכולות המתקדמות, וכמה זה עולה.`,
    en: `After this lesson you will be able to upload a file in the Chat tab, ask for a focused summary, and turn an answer into a document you can edit and download.

## What You Will Learn

- You will be able to upload a document or an image and ask for a short, precise summary.
- You will be able to request a document that opens for editing in a side panel (an Artifact) and download it.
- You will be able to open a Project with standing instructions that every new conversation already knows.

## Why This Matters In Your Clinic

A pathology report or a lab result lands on your desk, several pages long, and you need the bottom line in 20 seconds before walking into the room. The same goes for a patient handout: instead of writing from scratch every time, you get a clean draft and edit it. A graph image from a paper, or a results table you are not sure how to read, also turns into one clear line. The Chat tab takes these tasks, reading a long document and writing an explanation, and cuts them down to minutes.

## The Explanation, Simply

The Chat tab is an ordinary conversation: you type, Claude answers, and you can attach a file or an image to the conversation. The key word here is context (הקשר), everything Claude "sees" in that conversation: what you wrote, what you uploaded, and everything said earlier in this conversation. The clearer and more focused the context, the more accurate the answer. Opening a new conversation starts from an empty context, which is an advantage when you want a clean topic with no carryover from an earlier discussion.

Think of it like a briefing for a resident. Hand over a page and say "read it and give me three main points," and you get exactly that. Say only "what do you think?" and you get a generic answer. The same logic works here: the difference between an answer that serves you and a generic one is almost always in how you phrase the request, not in the tool's ability.

:::beginner
If this sounds complicated, do not worry. A conversation here is just like writing a message: you type what you want, and attach a file or an image if you need to. There are no special commands to memorize; it is enough to ask in plain words for what you need.
:::

## A Clinic Example, Step By Step

The task: get a three-point summary from a de-identified pathology report (no name, no ID number, no date of birth).

1. Open the Chat tab and start a new conversation.
2. Make sure the file you upload is a de-identified PDF, removing or redacting name, ID number, and patient number before upload.
3. Drag the PDF into the message box, or click the paperclip icon and upload it.
4. Paste the request below and send.

\`\`\`
צירפתי דוח פתולוגיה מנוקה מזיהוי. סכם אותו בשלוש נקודות בלבד:
1. האבחנה העיקרית במילה אחת או שתיים.
2. שולי הכריתה - נקיים או לא, ובכמה מ"מ.
3. צעד המשך מומלץ אחד.
ענה בעברית, בקצרה, בלי הקדמות.
\`\`\`

What you will see: three focused lines in Hebrew, each answering exactly what you asked, with no extra background paragraph.

### Turn It Into an Artifact You Can Edit

Now ask for a patient-friendly explanation as an editable document.

1. In the same conversation, paste the request below and send.

\`\`\`
על בסיס אותו דוח, כתוב מסמך הסבר קצר למטופל בשפה פשוטה,
4 עד 5 שורות, בגוף פונה אישית, בלי מונחים רפואיים מפחידים.
פתח אותו כמסמך נפרד שאוכל לערוך.
\`\`\`

2. A separate side panel (an Artifact) opens with the document. Edit the text directly inside it, and click the download button at the top of the panel to save a copy.

What you will see: the explanation appears in the side panel rather than in the middle of the conversation, so it is easy to read, fix a word, and download.

## Try It Yourself

- [ ] Take a non-sensitive file (for example an abstract of a review article, or text you wrote yourself), drag it into Chat, and ask for a three-point summary. If the answer is too generic, add one line asking for a more precise format.

## Common Mistakes

- **A vague request returns a generic answer.** "Summarize this" returns something broad. The fix: state the number of points, the length, and the language ("three points, in Hebrew, one sentence each").
- **Uploading a document with identifying details.** Do not upload a report with a name, an ID number, or a date of birth. The fix: clean or redact the details before upload.
- **Asking for an Artifact without saying so.** If you want a document you can edit, ask for it explicitly ("open as a separate document I can edit"). Otherwise the answer appears inside the conversation only.

## Points To Remember

- The context is everything Claude sees in the conversation; the more focused it is, the more accurate the answer.
- A specific request with format, length, and language always beats a general one.
- An Artifact is a side panel where the document opens for editing and download.

:::advanced
A Project lets you set reusable instructions once and attach a small knowledge base, so every new conversation in that Project already knows your style and context. The context window is how much text Claude can hold at once, up to one million tokens on the higher plans. That way your standing instructions and background material load automatically in every conversation, with no need to repeat them.
:::

## What Is Next

In the next lesson, [Plans and Pricing](/academy/getting-started/pricing-plans), you will understand which plan unlocks the app and its advanced capabilities, and how much it costs.`,
  },
};

export default lesson;
