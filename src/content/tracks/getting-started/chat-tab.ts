import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'chat-tab',
  track: 'getting-started',
  title: { he: 'הטאב Chat - שיחה, קבצים, Artifacts ו-Projects', en: 'The Chat Tab - Conversation, Files, Artifacts, and Projects' },
  description: {
    he: 'איך עובדים בטאב הבסיסי: לשאול, להעלות קובץ או תמונה, ולשמור סדר עם Projects.',
    en: 'How to work in the basic tab: ask, upload a file or image, and stay organized with Projects.',
  },
  duration: 9,
  updated: '2026-06-05',
  content: {
    he: `# הטאב Chat

זה הטאב הבסיסי וההכי מוכר: אתה כותב, Claude עונה. מצוין לשאלה נקודתית, לניסוח ולסיכום.

## שלוש פעולות שכדאי להכיר

- **לכתוב בקשה** - פשוט מתאר מה אתה רוצה. ככל שתהיה ספציפי יותר (פורמט, אורך, טון), כך התוצאה טובה יותר.
- **להעלות קובץ או תמונה** - גרור PDF, מסמך Word או צילום אל תיבת הכתיבה, ואז שאל עליו. לדוגמה: תמונת גרף ובקשה "תסביר לי מה הגרף מראה".
- **Artifacts** - כשמבקשים מסמך, טבלה או דף הסבר, Claude פותח אותו בחלון צד נפרד שאפשר לערוך ולהוריד.

:::beginner
חשוב על הבקשה כמו על הוראה לעוזר אנושי. במקום "כתוב על מלנומה", נסה: "כתוב לי פסקה של 4 שורות למטופל, בשפה פשוטה, שמסבירה מה זו מלנומה ולמה חשוב לעקוב אחרי שומות".
:::

## Projects - לשמור סדר

**Project** הוא תיקיית שיחות עם הקשר קבוע. אתה מגדיר פעם אחת הנחיות ("אני רופא עור, ענה תמיד בעברית, טון מקצועי אך נגיש") ומעלה חומרי רקע, וכל שיחה חדשה ב-Project כבר מכירה את ההקשר.

דוגמאות ל-Projects שימושיים לרופא:
- **מכתבי הפניה** - הנחיות לפורמט אחיד וטון רצוי.
- **חומרי הסבר למטופל** - שפה פשוטה, אורך קבוע, תבנית קבועה.
- **סקירת ספרות** - הנחיות לאיך לסכם מאמר.

## מתי לעבור הלאה

הטאב Chat מצוין, אבל אתה עדיין מעתיק ומדביק ידנית. כשתרצה ש-Claude יעבוד על **תיקייה שלמה של קבצים** ויחזיר תוצאה מוכנה - תעבור לטאב **Cowork** (המסלול הבא) או **Code**.

:::advanced
Artifacts תומך גם בתצוגה מקדימה של HTML פשוט, כך שאפשר לבקש "דף הסבר למטופל מעוצב" ולראות אותו מיד. ב-Projects אפשר להעלות עד עשרות מסמכי רקע; Claude מתייחס אליהם כידע זמין לכל שיחה ב-Project.
:::`,
    en: `# The Chat Tab

This is the basic, most familiar tab: you type, Claude answers. Great for a one-off question, drafting, and summarizing.

## Three actions worth knowing

- **Write a request** - just describe what you want. The more specific you are (format, length, tone), the better the result.
- **Upload a file or image** - drag a PDF, Word document, or photo into the input box, then ask about it. For example: a graph image with the request "explain what this graph shows".
- **Artifacts** - when you ask for a document, table, or handout, Claude opens it in a separate side panel you can edit and download.

:::beginner
Think of the request like an instruction to a human assistant. Instead of "write about melanoma", try: "Write me a 4-line paragraph for a patient, in plain language, explaining what melanoma is and why it is important to monitor moles".
:::

## Projects - staying organized

A **Project** is a folder of conversations with persistent context. You set instructions once ("I am a dermatologist, always answer in Hebrew, professional but accessible tone") and upload background materials, and every new conversation in the Project already knows the context.

Useful Projects for a physician:
- **Referral letters** - instructions for a consistent format and tone.
- **Patient handouts** - plain language, fixed length, fixed template.
- **Literature review** - instructions for how to summarize a paper.

## When to move on

The Chat tab is great, but you still copy and paste manually. When you want Claude to work on a **whole folder of files** and return a finished result, move to the **Cowork** tab (the next track) or **Code**.

:::advanced
Artifacts also previews simple HTML, so you can ask for "a styled patient handout" and see it immediately. In Projects you can upload dozens of background documents; Claude treats them as knowledge available to every conversation in the Project.
:::`,
  },
};

export default lesson;
