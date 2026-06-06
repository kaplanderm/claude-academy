import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'working-with-files',
  track: 'claude-code',
  title: { he: 'עבודה עם קבצים - עורך, diff חזותי ותצוגה מקדימה', en: 'Working With Files - Editor, Visual Diff, and Preview' },
  description: {
    he: 'לראות מה Claude עומד לשנות, לאשר, ולראות תצוגה מקדימה.',
    en: 'See what Claude is about to change, approve, and preview.',
  },
  duration: 8,
  updated: '2026-06-06',
  content: {
    he: `# עבודה עם קבצים

בסוף השיעור תדע לראות בדיוק מה Claude עומד לשנות בקובץ, לאשר רק אחרי שווידאת שהתוכן נכון, ולפתוח תצוגה מקדימה של דף הסבר לפני שהוא נשמר.

## מה תלמד כאן

- תוכל לקרוא את ה-diff (השוואת לפני-ואחרי) ולאשר שינוי רק אחרי שראית אותו.
- תוכל לפתוח תצוגה מקדימה של קובץ \`HTML\` או \`PDF\` בתוך הטאב Code עצמו.
- תוכל לעצור שינוי שגוי לפני שהוא נשמר לקובץ.

## למה זה חשוב לך במרפאה

נניח שאתה מבקש דף הסבר למטופל אחרי ניתוח מוז, או מעדכן מכתב הפניה קיים. אתה לא רוצה לגלות טעות רק אחרי שהדף כבר הודפס ונמסר. העורך וה-diff מראים לך את כל הניסוח החדש על המסך, לפני שמשהו נשמר. כך אתה בודק את ההוראות הרפואיות בעיניים שלך, מאשר, ורק אז הקובץ נכתב.

## ההסבר בפשטות

כשאתה מבקש מ-Claude ליצור או לערוך קובץ, הוא לא משנה אותו מאחורי הגב שלך. קודם הוא מציג **diff** (השוואת לפני-ואחרי): טקסט שיורד מסומן באדום, טקסט שנוסף מסומן בירוק. אתה קורא, ואז לוחץ "אשר" או "דחה". רק אחרי אישור הקובץ באמת משתנה.

זה כמו מסמך עם "עקוב אחר שינויים" בתוכנת מסמכים: רואים בדיוק מה השתנה ומחליטים אם לקבל. בנוסף, לקבצים כמו \`HTML\` או \`PDF\` יש **תצוגה מקדימה** (preview) - חלון שמציג את הדף המוגמר כמו שהמטופל יראה אותו, לא את הקוד שמאחוריו.

## דוגמה מהמרפאה, צעד אחר צעד

נבקש דף הסבר בן עמוד אחד לטיפול בפצע אחרי ניתוח מוז, כקובץ \`HTML\`, נראה תצוגה מקדימה, ורק אז נאשר.

1. בתוך הטאב Code, פתח שיחה (session) חדשה ובחר תיקייה לא רגישה (למשל תיקיית טיוטות).
2. הדבק את הבקשה למטה ושלח.
3. כש-Claude מסיים, ייפתח פאנל ה-diff. קרא את כל ההוראות הרפואיות מההתחלה ועד הסוף.
4. לחץ על כפתור התצוגה המקדימה (preview) כדי לראות את הדף כמו שהוא יודפס.
5. אם הכול נכון, לחץ "אשר". אם משהו חסר, כתוב ל-Claude מה לתקן - הקובץ עדיין לא נשמר.

\`\`\`
צור דף הסבר בן עמוד אחד למטופל, כקובץ HTML, על טיפול בפצע אחרי ניתוח מוז.
בלי שם מטופל ובלי פרטים מזהים - דף כללי.
כלול: ניקוי עדין, החלפת חבישה, סימני אזהרה לזיהום, ומתי להתקשר למרפאה.
עברית פשוטה, כותרות ברורות, מתאים להדפסה.
\`\`\`

מה תראה: בצד אחד ה-diff עם כל הטקסט החדש בירוק, ובתצוגה המקדימה דף מעוצב עם כותרות וסעיפים, מוכן להדפסה.

## נסה בעצמך

בקש מ-Claude: "צור קובץ \`HTML\` קצר עם הכותרת 'בדיקה' ופסקה אחת שמסבירה מה זה דף הסבר." פתח את התצוגה המקדימה, ראה את הדף, ואז אשר. זה ייקח פחות משלוש דקות וכל החומר לא רגיש.

## טעויות נפוצות

- **לאשר בלי לקרוא** - לחיצה מהירה על "אשר" מפספסת בדיוק את הביטחון ש-diff נותן. התיקון: קרא את כל הטקסט הירוק לפני שאתה מאשר.
- **לצפות שהקובץ ישתנה בלי אישור** - כל עוד לא לחצת "אשר", הקובץ לא נכתב. התיקון: זכור שהשינוי ממתין לאישור שלך, וחפש את כפתור האישור.
- **להסתכל על הקוד במקום על התצוגה המקדימה** - ה-diff מראה קוד גולמי, לא את הדף המעוצב. התיקון: לבדיקת המראה לחץ על preview, לבדיקת התוכן קרא את ה-diff.

## נקודות לזכירה

- Claude מציג diff לפני כל שינוי, ושום דבר לא נשמר עד שאתה מאשר.
- תצוגה מקדימה מראה את הדף המוגמר \`HTML\` או \`PDF\`, כמו שהמטופל יראה אותו.
- האחריות שלך פשוטה: לקרוא, ואז לאשר.

## מה הלאה

בשיעור הבא, [חיבורים (Connectors)](/academy/claude-code/connectors), תלמד לחבר את הכלי Claude ל-Drive ול-Gmail בלחיצה, כך שיוכל לעבוד ישירות על הקבצים שכבר יש לך.`,
    en: `# Working With Files

By the end of this lesson you will know how to see exactly what Claude is about to change in a file, approve only after you have confirmed the content is correct, and open a preview of a handout before it is saved.

## What you will learn

- You will be able to read the diff (a before-and-after comparison) and approve a change only after you have seen it.
- You will be able to open a preview of an \`HTML\` or \`PDF\` file right inside the Code tab.
- You will be able to stop a wrong change before it is saved to the file.

## Why this matters in your clinic

Say you ask for a patient handout after Mohs surgery, or you update an existing referral letter. You do not want to discover a mistake only after the page has already been printed and handed over. The editor and the diff show you all the new wording on screen, before anything is saved. That way you check the medical instructions with your own eyes, approve, and only then is the file written.

## The plain explanation

When you ask Claude to create or edit a file, it does not change it behind your back. First it shows a **diff** (a before-and-after comparison): removed text is marked in red, added text is marked in green. You read it, then click "approve" or "reject". Only after approval does the file actually change.

It is like a document with "track changes" in a word processor: you see exactly what changed and decide whether to accept it. In addition, files like \`HTML\` or \`PDF\` get a **preview** - a window that shows the finished page the way the patient will see it, not the code behind it.

## A clinic example, step by step

We will ask for a one-page wound-care handout for after Mohs surgery, as an \`HTML\` file, watch the preview, and only then approve.

1. In the Code tab, open a new conversation (session) and pick a non-sensitive folder (for example a drafts folder).
2. Paste the request below and send it.
3. When Claude finishes, the diff panel opens. Read all the medical instructions from start to finish.
4. Click the preview button to see the page as it would be printed.
5. If everything is correct, click "approve". If something is missing, tell Claude what to fix - the file is not saved yet.

\`\`\`
צור דף הסבר בן עמוד אחד למטופל, כקובץ HTML, על טיפול בפצע אחרי ניתוח מוז.
בלי שם מטופל ובלי פרטים מזהים - דף כללי.
כלול: ניקוי עדין, החלפת חבישה, סימני אזהרה לזיהום, ומתי להתקשר למרפאה.
עברית פשוטה, כותרות ברורות, מתאים להדפסה.
\`\`\`

What you will see: on one side the diff with all the new text in green, and in the preview a formatted page with headings and sections, ready to print.

## Try it yourself

Ask Claude: "create a short \`HTML\` file with the heading 'Test' and one paragraph explaining what a handout is." Open the preview, look at the page, then approve. It takes under three minutes and the material is not sensitive.

## Common mistakes

- **Approving without reading** - a quick click on "approve" misses exactly the confidence a diff gives. The fix: read all the green text before you approve.
- **Expecting the file to change without confirming** - as long as you have not clicked "approve", the file is not written. The fix: remember the change is waiting for your confirmation, and look for the approve button.
- **Looking at the code instead of the preview** - the diff shows raw code, not the formatted page. The fix: to check the look click preview, to check the content read the diff.

## Key takeaways

- Claude shows a diff before any change, and nothing is saved until you approve.
- The preview shows the finished \`HTML\` or \`PDF\` page, the way the patient will see it.
- Your job is simple: read, then approve.

## What is next

In the next lesson, [Connectors](/academy/claude-code/connectors), you will learn to link Claude to Drive and Gmail in one click, so it can work directly on the files you already have.`,
  },
};

export default lesson;
