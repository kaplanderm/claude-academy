import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'what-is-claude',
  track: 'getting-started',
  title: { he: 'מה זה Claude ואיך הוא עוזר לרופא', en: 'What Claude Is and How It Helps a Physician' },
  description: {
    he: 'היכרות קצרה: מה Claude יודע לעשות, ולמה הוא שימושי בעבודה הקלינית - בלי שום ידע טכני.',
    en: 'A short intro: what Claude can do and why it is useful in clinical work - with no technical knowledge.',
  },
  duration: 7,
  updated: '2026-06-05',
  content: {
    he: `# מה זה Claude?

Claude הוא עוזר מבוסס בינה מלאכותית מבית Anthropic. בפועל זה כמו לדבר עם קולגה חכם שזמין 24/7: אתה כותב לו בעברית פשוטה מה אתה צריך, והוא עונה, מנסח, מסכם, מתרגם ומנתח.

:::beginner
לא צריך שום רקע טכני. אתה לא "מתכנת" כלום - אתה פשוט כותב בקשה בשפה רגילה, כמו הודעת וואטסאפ, ומקבל תשובה.
:::

## מה הוא יודע לעשות שימושי לרופא

- **לנסח ולסכם** - מכתבי הפניה, סיכומי ביקור, תשובות למטופלים, חומרי הסבר.
- **לנתח טקסט ומסמכים** - להעלות דוח פתולוגיה או מאמר ולקבל סיכום ממוקד.
- **לקרוא תמונות** - להראות צילום מסך, גרף או טבלה ולשאול עליהם.
- **לעבוד בעברית** - Claude חזק בעברית, כולל ניסוח רפואי וטון מותאם למטופל.

## מה חשוב לזכור

- **הוא יכול לטעות.** אמת כל מידע קליני מול מקור מהימן לפני החלטה לגבי מטופל.
- **פרטיות.** אל תזין פרטים מזהים של מטופלים (שם, ת"ז, תאריך לידה) בחשבון רגיל. על כך נרחיב במסלול Claude Code.
- **הוא לא מחליף שיקול דעת.** הוא כלי עזר, לא רופא.

## הדגם שמאחורי הקלעים

נכון ליוני 2026, הדגם החזק ביותר נקרא **Claude Opus 4.8**. יש גם דגמים מהירים יותר (Sonnet, Haiku) למשימות פשוטות. אתה לא צריך לבחור ידנית - ברירת המחדל טובה לרוב המשימות.

:::advanced
Opus 4.8 (מאי 2026) מצטיין במשימות ארוכות ומורכבות, תומך בחלון הקשר של עד מיליון טוקנים, ומריץ "adaptive thinking" - הוא חושב לעומק רק כשצריך. למשימות יומיומיות מהירות, Sonnet 4.6 לרוב מספיק.
:::

בשיעור הבא נראה את **דרכי השימוש השונות** - איפה בכלל מריצים את Claude.`,
    en: `# What Is Claude?

Claude is an AI assistant from Anthropic. In practice it is like talking to a smart colleague available 24/7: you write what you need in plain language, and it answers, drafts, summarizes, translates, and analyzes.

:::beginner
No technical background is needed. You are not "programming" anything - you just write a request in plain language, like a text message, and get an answer.
:::

## What it does that is useful to a physician

- **Draft and summarize** - referral letters, visit summaries, replies to patients, handouts.
- **Analyze text and documents** - upload a pathology report or paper and get a focused summary.
- **Read images** - show a screenshot, graph, or table and ask about it.
- **Work in Hebrew** - Claude is strong in Hebrew, including clinical phrasing and a patient-appropriate tone.

## What to keep in mind

- **It can be wrong.** Verify every clinical fact against a trusted source before deciding on patient care.
- **Privacy.** Do not enter identifying patient details (name, ID, date of birth) in a regular account. More on this in the Claude Code track.
- **It does not replace judgment.** It is a helper tool, not a physician.

## The model behind the scenes

As of June 2026, the most capable model is **Claude Opus 4.8**. There are also faster models (Sonnet, Haiku) for simpler tasks. You do not need to choose manually - the default is good for most tasks.

:::advanced
Opus 4.8 (May 2026) excels at long, complex tasks, supports a context window of up to one million tokens, and runs "adaptive thinking" - it reasons deeply only when needed. For quick everyday tasks, Sonnet 4.6 is usually enough.
:::

Next we will look at the **different ways to use Claude** - where you actually run it.`,
  },
};

export default lesson;
