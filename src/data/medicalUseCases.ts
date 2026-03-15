export interface MedicalUseCase {
  id: string;
  icon: string;
  title: { he: string; en: string };
  description: { he: string; en: string };
  content: { he: string; en: string };
}

export const medicalUseCases: MedicalUseCase[] = [
  {
    id: 'diagnosis',
    icon: '🏥',
    title: { he: 'אבחון וטיפול', en: 'Diagnosis & Treatment' },
    description: {
      he: 'אבחון מבדל, פרוטוקולי טיפול, אינטראקציות תרופות ופרשנות מעבדה',
      en: 'Differential diagnosis, treatment protocols, drug interactions, and lab interpretation',
    },
    content: {
      he: `## שימושים עיקריים

- **אבחון מבדל** — הצגת תמונה קלינית וקבלת רשימת אבחנות אפשריות
- **סקירת פרוטוקולי טיפול** — בדיקת התאמה לקווים מנחים עדכניים
- **בדיקת אינטראקציות תרופות** — זיהוי מהיר של קונפליקטים פוטנציאליים
- **פרשנות תוצאות מעבדה** — הסבר על תוצאות חריגות ומשמעותיהן

### מהי אבחנה מבדלת?

אבחנה מבדלת (Differential Diagnosis) היא תהליך שבו הרופא מפרט את כל האבחנות הרפואיות האפשריות שיכולות להסביר את הסימפטומים של המטופל. Claude יכול לעזור ליצור רשימה כזו על סמך התמונה הקלינית שתתארו.

### פרומפטים לדוגמה

\`\`\`
אני רופא עור. מטופל בן 45 עם נגע פיגמנטי א-סימטרי בגב, קוטר 6 מ"מ, עם גבולות לא סדירים. מה האבחנה המבדלת?
\`\`\`

\`\`\`
מטופלת בת 60 נוטלת Metformin 1000mg ו-Lisinopril 10mg. מתכננים להוסיף Spironolactone. האם יש אינטראקציות שצריך להיות מודעים להן?
\`\`\`

\`\`\`
תוצאות מעבדה: המוגלובין 18.5, טסיאות 48%, MCV 62. ברזל 8. CRP 2.1. מה הפרשנות הסבירה ביותר?
\`\`\`

### מהו MCV?
> MCV (Mean Corpuscular Volume) הוא נפח ממוצע של כדורית דם אדומה. ערך נמוך (מתחת ל-80) מעיד על אנמיה מיקרוציטית, שנפוצה בחסר ברזל. Claude יכול להסביר ערכי מעבדה ולהציע מהלך בירור.

### פלטפורמה מומלצת

**מה זה "פלטפורמה"?** — הכלי (אפליקציה או אתר) דרכו אתם מדברים עם Claude. ישנן כמה אפשרויות, כל אחת מתאימה לסיטואציה אחרת.

- **claude.ai עם Projects** — צרו פרויקט לכל תחום רפואי עם הנחיות וקווים מנחים. "פרויקט" הוא מעין תיקייה שבה Claude זוכר את ההקשר שלכם
- **Claude Code** — לניתוח נתונים קליניים (מאונימיים). כלי שורת פקודה למתקדמים

### 🔒 הערה בנושא פרטיות
> **תמיד הסירו פרטים מזהים לפני שליחת מידע ל-Claude.** השתמשו בגילאים, מין ומגדר במקום שם, ת.ז. ותאריכים.`,
      en: `## Key Use Cases

- **Differential diagnosis** — Present clinical picture and receive a prioritized list of possible diagnoses
- **Treatment protocol review** — Verify alignment with current clinical guidelines
- **Drug interaction checking** — Quick identification of potential conflicts
- **Lab result interpretation** — Explain lab findings and their clinical significance

### What is a Differential Diagnosis?

A differential diagnosis is the process where a physician lists all possible medical conditions that could explain a patient's symptoms. Claude can help generate such a list based on the clinical picture you describe.

### Example Prompts

\`\`\`
I'm a dermatologist. A 45-year-old patient has an asymmetric pigmented lesion on the back, 6mm diameter, with irregular borders. What is the differential diagnosis?
\`\`\`

\`\`\`
A 60-year-old female patient takes Metformin 1000mg and Lisinopril 10mg. We plan to add Spironolactone. Are there interactions we should be aware of?
\`\`\`

\`\`\`
Lab results: Hemoglobin 18.5, Hematocrit 48%, MCV 62. Iron 8. CRP 2.1. What is the most likely interpretation?
\`\`\`

### What is MCV?
> MCV (Mean Corpuscular Volume) measures the average size of red blood cells. A low value (below 80) indicates microcytic anemia, common in iron deficiency. Claude can explain lab values and suggest a workup plan.

### Recommended Platform

**What is a "platform"?** — The tool (app or website) you use to talk to Claude. There are several options, each suited to different situations.

- **claude.ai with Projects** — Create a project for each medical domain with guidelines and reference material. A "project" is like a folder where Claude remembers your context
- **Claude Code** — For analyzing clinical data (anonymized). A command-line tool for advanced users

### 🔒 Privacy Note
> **Always remove identifying information before sending data to Claude.** Use age ranges, initials, and generic locations instead of names, IDs, and dates.`,
    },
  },
  {
    id: 'documentation',
    icon: '📋',
    title: { he: 'תיעוד רפואי', en: 'Medical Documentation' },
    description: {
      he: 'סיכומי ביקור, מכתבי הפניה, סיכומי שחרור וקידוד ICD',
      en: 'Visit summaries, referral letters, discharge summaries, and ICD coding',
    },
    content: {
      he: `## שימושים עיקריים

- **סיכומי ביקור** — יצירת סיכום מובנה בפורמט SOAP או כל פורמט אחר
- **מכתבי הפניה** — מכתבים מקצועיים לרופאים מקבילים
- **סיכומי שחרור** — יצירת מסמך שחרור מקיף ומקצועי
- **קידוד ICD** — סיוע במציאת קודי ICD-10 המתאימים

### מהו פורמט SOAP?

SOAP הוא פורמט סטנדרטי לתיעוד ביקור רפואי:
- **S** (Subjective) — מה המטופל מתאר: תלונות, היסטוריה
- **O** (Objective) — ממצאים בבדיקה פיזיקלית ותוצאות מעבדה
- **A** (Assessment) — הערכה/אבחנה של הרופא
- **P** (Plan) — תכנית טיפול, מעקב, בדיקות נוספות

Claude יכול לקחת הערות גולמיות ולארגן אותן בפורמט מובנה וברור.

### פרומפטים לדוגמה

\`\`\`
סכם את הביקור הבא בפורמט SOAP:
S: מטופל בן 55 מתלונן על פריחה עורית בזרועות. החל לפני 3 חודשים.
O: אריתמה מפושטת בזרועות, ללא גרד, לא דממית.
\`\`\`

\`\`\`
כתוב מכתב הפניה לרופא עור: מטופל בן 40 עם נגע חשוד בזרוע הימנית, דרוש הערכה דרמטוסקופית.
\`\`\`

### מהו קידוד ICD?
> ICD-10 (International Classification of Diseases) היא מערכת קידוד בינלאומית שמשמשת לתיעוד אבחנות רפואיות. כל מצב רפואי מקבל קוד ייחודי (למשל L82.1 = קרטוזיס סבוריאי). Claude יכול להציע את הקוד המתאים על סמך תיאור המצב.

### פלטפורמה מומלצת
- **claude.ai** — לתיעוד שוטף
- **Desktop App** — נוח ומהיר לשימוש יומיומי. זו אפליקציה שמתקינים על המחשב ומאפשרת גישה מהירה ל-Claude

### 🔒 הערה בנושא פרטיות
> **לעולם אל תכלילו שם מלא, ת.ז., מספר טלפון או כתובת אמיתית.** השתמשו בגילאים, מין, ותיאור כללי בלבד.`,
      en: `## Key Use Cases

- **Visit summaries** — Generate structured summaries in SOAP or any other format
- **Referral letters** — Professional letters to receiving physicians
- **Discharge summaries** — Create comprehensive and concise discharge documents
- **ICD coding** — Assistance finding the appropriate ICD-10 codes

### What is the SOAP Format?

SOAP is a standard format for medical visit documentation:
- **S** (Subjective) — What the patient reports: complaints, history
- **O** (Objective) — Physical exam findings and lab results
- **A** (Assessment) — The physician's evaluation/diagnosis
- **P** (Plan) — Treatment plan, follow-up, additional tests

Claude can take raw notes and organize them into a structured, clear format.

### Example Prompts

\`\`\`
Summarize the following visit in SOAP format:
S: 55-year-old patient complains of itchy rash on the arms. Started 3 months ago.
O: Diffuse erythema on arms, no scratching, non-hemorrhagic.
\`\`\`

\`\`\`
Write a referral letter to a dermatologist: 40-year-old patient with a suspicious lesion on the right arm, needs dermoscopic evaluation.
\`\`\`

### What is ICD Coding?
> ICD-10 (International Classification of Diseases) is an international coding system used to document medical diagnoses. Each condition gets a unique code (e.g., L82.1 = seborrheic keratosis). Claude can suggest the appropriate code based on your description.

### Recommended Platform
- **claude.ai** — For routine documentation
- **Desktop App** — Convenient and fast for daily use. This is an app you install on your computer for quick access to Claude

### 🔒 Privacy Note
> **Never include real patient names, IDs, phone numbers, or email addresses.** Use age ranges, initials, and generic descriptions instead.`,
    },
  },
  {
    id: 'research',
    icon: '🔬',
    title: { he: 'מחקר רפואי', en: 'Medical Research' },
    description: {
      he: 'סקירת ספרות, עיצוב מחקר, ניתוח סטטיסטי, כתיבת מאמרים',
      en: 'Literature review, study design, statistical analysis, manuscript writing',
    },
    content: {
      he: `## שימושים עיקריים

- **סקירת ספרות** — סיכום מאמרים ומגמות מחקריות
- **עיצוב מחקר** — עזרה בתכנון מתודולוגיה וחישוב גודל מדגם
- **ניתוח סטטיסטי** — בחירת מבחנים סטטיסטיים ופרשנות תוצאות
- **כתיבת מאמרים** — ניסוח ועריכה של כתבי יד מדעיים

### מונחים טכניים מוסברים

- **סקירת ספרות (Literature Review)** — סיכום שיטתי של מחקרים שפורסמו בנושא מסוים
- **מתודולוגיה** — השיטה שבה מתבצע המחקר: סוג המחקר, אוכלוסייה, קריטריונים
- **גודל מדגם (Sample Size)** — מספר המשתתפים הדרוש למחקר כדי שהתוצאות יהיו משמעותיות סטטיסטית
- **Endpoints** — המדדים שלפיהם נמדדת הצלחת הטיפול במחקר

### פרומפטים לדוגמה

\`\`\`
סקור את הספרות העדכנית על יעילות Mohs surgery ב-BCC חוזר. התמקד במחקרים מ-5 השנים האחרונות.
\`\`\`

\`\`\`
אני מתכנן מחקר פרוספקטיבי על טיפולי PDT לעומת AK. עזור לי לעצב את המתודולוגיה כולל קריטריוני הכללה/הדרה, endpoints, וחישוב גודל מדגם.
\`\`\`

### קריאה נוספת
למחקר על AI בדרמטולוגיה: [DermUnbound Research](https://kaplanclinic.co.il/he/derm-ai)

### פלטפורמה מומלצת
- **claude.ai עם חיפוש אינטרנט** — לסקירת ספרות עדכנית. Claude יכול לחפש מאמרים חדשים ולסכם אותם
- **Claude Code** — לניתוח נתונים סטטיסטיים. כלי שורת פקודה שמאפשר לעבוד עם קבצי נתונים

### 🔒 הערה בנושא פרטיות
> **בניתוח נתוני מחקר, ודאו שהנתונים מאונימיים לפני העלאה לפלטפורמה.** אל תשתמשו בנתונים גולמיים של מטופלים.`,
      en: `## Key Use Cases

- **Literature review** — Summarize papers and research trends
- **Study design** — Help with methodology planning and sample size calculation
- **Statistical analysis** — Choosing statistical tests and interpreting results
- **Manuscript writing** — Drafting and editing scientific papers

### Technical Terms Explained

- **Literature Review** — A systematic summary of published research on a specific topic
- **Methodology** — The method used to conduct research: study type, population, criteria
- **Sample Size** — The number of participants needed in a study for results to be statistically significant
- **Endpoints** — The measures used to evaluate treatment success in a study

### Example Prompts

\`\`\`
Review the recent literature on the efficacy of Mohs surgery for recurrent BCC. Focus on studies from the last 5 years.
\`\`\`

\`\`\`
I'm planning a prospective study on PDT treatments for AK. Help me design the methodology including inclusion/exclusion criteria, endpoints, and sample size calculation.
\`\`\`

### Further Reading
For research on AI in dermatology: [DermUnbound Research](https://kaplanclinic.co.il/en/derm-ai)

### Recommended Platform
- **claude.ai with web search** — For up-to-date literature review. Claude can search for and summarize recent papers
- **Claude Code** — For statistical data analysis. A command-line tool that allows working with data files

### 🔒 Privacy Note
> **When analyzing research data, ensure all data is anonymized before uploading to the platform.** Never use raw patient data.`,
    },
  },
  {
    id: 'patient-communication',
    icon: '💬',
    title: { he: 'תקשורת עם מטופלים', en: 'Patient Communication' },
    description: {
      he: 'חומרי הסבר, הנחיות אחרי פרוצדורה, תרגום שפה רפואית',
      en: 'Patient education, post-procedure instructions, translating medical jargon',
    },
    content: {
      he: `## שימושים עיקריים

- **חומרי הסבר למטופלים** — הסברים בשפה פשוטה על מצבים רפואיים
- **הנחיות אחרי פרוצדורה** — הוראות ברורות לאחרי טיפולים
- **יצירת FAQ** — שאלות נפוצות לכל פרוצדורה או מצב
- **תרגום שפה רפואית** — המרת מונחים מקצועיים לשפה נגישה

### למה זה חשוב?

מטופלים רבים לא מבינים מונחים רפואיים. כש-Claude מתרגם שפה רפואית לשפה יומיומית, זה:
- מפחית חרדה אצל מטופלים
- משפר היענות לטיפול
- חוסך זמן יקר בקליניקה

### פרומפטים לדוגמה

\`\`\`
כתוב הסבר למטופל על הליך ביופסיית עור בשפה פשוטה ומרגיעה. כלול מה לצפות, זמן החלמה, ומתי לפנות לרופא.
\`\`\`

\`\`\`
צור דף שאלות נפוצות (FAQ) למטופלים לפני הליך הקפאת נגעי עור בלייזר.
\`\`\`

\`\`\`
הסבר למטופל מה זה אומר שהתוצאה שלו הראתה "dysplastic nevus with moderate atypia" בשפה פשוטה.
\`\`\`

### מה זה FAQ?
> FAQ (Frequently Asked Questions) — דף שאלות נפוצות. מסמך שמרכז את השאלות שמטופלים שואלים הכי הרבה, עם תשובות ברורות. Claude יכול ליצור דף כזה לכל פרוצדורה.

### פלטפורמה מומלצת
- **claude.ai** — ליצירת חומרים מפורטים
- **אפליקציית מובייל** — לתשובות מהירות בזמן אמת. אפליקציית Claude בטלפון

### 🔒 הערה בנושא פרטיות
> **החומרים מיועדים למטופלים — ודאו שאין בהם פרטים מזהים.** תמיד קראו והתאימו לפני שליחה.`,
      en: `## Key Use Cases

- **Patient education materials** — Clear explanations of medical conditions in simple language
- **Post-procedure instructions** — Clear guidelines for after treatments
- **FAQ creation** — Common questions for each procedure or condition
- **Translating medical jargon** — Converting professional terms to accessible language

### Why This Matters

Many patients don't understand medical terminology. When Claude translates medical language to everyday language, it:
- Reduces patient anxiety
- Improves treatment compliance
- Saves valuable clinic time

### Example Prompts

\`\`\`
Write an explanation for a patient about a skin biopsy procedure in simple, reassuring language. Include what to expect, recovery time, and when to contact the doctor.
\`\`\`

\`\`\`
Create a FAQ sheet for patients before a laser skin lesion removal procedure.
\`\`\`

\`\`\`
Explain to a patient what it means that their result showed "dysplastic nevus with moderate atypia" in plain language.
\`\`\`

### What is a FAQ?
> FAQ (Frequently Asked Questions) — A document that compiles the most common questions patients ask, with clear answers. Claude can create one for any procedure.

### Recommended Platform
- **claude.ai** — For creating detailed materials
- **Mobile App** — For quick responses in real time. The Claude app on your phone

### 🔒 Privacy Note
> **These materials are intended for patients — make sure they contain no identifying information.** Always review and customize before sharing.`,
    },
  },
  {
    id: 'practice-management',
    icon: '⚙️',
    title: { he: 'ניהול מרפאה', en: 'Practice Management' },
    description: {
      he: 'אופטימיזציה של תורים, אוטומציה, הכשרת צוות וניהול מלאי',
      en: 'Appointment optimization, automation, staff training, and inventory management',
    },
    content: {
      he: `## שימושים עיקריים

- **אופטימיזציה של תורים** — שיפור זימון תורים והפחתת ביטולים
- **אוטומציה של תהליכי עבודה** — יצירת סקריפטים למשימות חוזרות
- **חומרי הכשרה לצוות** — יצירת מדריכים ופרוטוקולים לצוות המרפאה
- **ניהול מלאי** — מעקב אחר חומרים רפואיים ותזכורות הזמנה

### מה זה "אוטומציה"?

אוטומציה היא הפיכת משימות ידניות חוזרות לתהליכים אוטומטיים. למשל:
- שליחת SMS תזכורת לתור אוטומטית
- יצירת דוחות חודשיים אוטומטיים
- הפקת סיכומי ביקור מתבנית

Claude יכול לעזור **לתכנן** תהליכים כאלה, גם אם אתם לא מתכנתים.

### פרומפטים לדוגמה

\`\`\`
צור תבנית לזימון תורים שמפחיתה ביטולים ב-30%. כלול: SMS תזכורת, אישור אונליין, מדיניות גמישה.
\`\`\`

\`\`\`
צור רשימת צ'קליסט יומית לפתיחת מרפאת דרמטולוגיה — כולל הכנת חדרים, ציוד, בדיקת מכשירים.
\`\`\`

### מהו "סקריפט"?
> סקריפט הוא קובץ עם רצף פקודות שרצות אוטומטית. אתם לא חייבים לכתוב אותו בעצמכם — תוכלו לבקש מ-Claude לכתוב אותו ולהעביר אותו לאיש ה-IT שלכם.

### פלטפורמה מומלצת
- **Claude Code** — ליצירת אוטומציות וסקריפטים. דורש ידע טכני בסיסי או עזרה מאיש IT
- **API** — לאינטגרציה עם מערכות קיימות. ה-API הוא ממשק שמאפשר לתוכנות אחרות "לדבר" עם Claude

### 🔒 הערה בנושא פרטיות
> **באוטומציות שמערבות נתוני מטופלים, ודאו שהמידע מוגן ומוצפן.** השתמשו ב-API עם הסכמי עיבוד נתונים.`,
      en: `## Key Use Cases

- **Appointment optimization** — Improve scheduling and reduce cancellations
- **Workflow automation** — Create scripts for recurring tasks
- **Staff training materials** — Generate guides and protocols for clinic staff
- **Inventory management** — Track medical supplies and order reminders

### What is "Automation"?

Automation means turning repetitive manual tasks into automatic processes. For example:
- Sending automatic SMS appointment reminders
- Generating automatic monthly reports
- Creating visit summaries from templates

Claude can help **plan** such processes, even if you're not a programmer.

### Example Prompts

\`\`\`
Create an appointment scheduling template that reduces cancellations by 30%. Include: SMS reminders, online confirmation, flexible scheduling policies.
\`\`\`

\`\`\`
Create a daily opening checklist for a dermatology clinic — including room preparation, equipment check, and supply verification.
\`\`\`

### What is a "Script"?
> A script is a file with a sequence of commands that run automatically. You don't have to write it yourself — you can ask Claude to write it and pass it to your IT person.

### Recommended Platform
- **Claude Code** — For creating automations and scripts. Requires basic technical knowledge or IT support
- **API** — For integration with existing systems. The API is an interface that allows other software to "talk" to Claude

### 🔒 Privacy Note
> **When automating workflows involving patient data, ensure all information is protected and encrypted.** Use the API with data processing agreements.`,
    },
  },
  {
    id: 'marketing',
    icon: '📣',
    title: { he: 'שיווק רפואי', en: 'Medical Marketing' },
    description: {
      he: 'תוכן לאתר, פוסטים חינוכיים, SEO רפואי',
      en: 'Website content, educational social posts, medical SEO',
    },
    content: {
      he: `## שימושים עיקריים

- **תוכן לאתר** — דפי שירות, דפי נחיתה, תיאורי טיפולים
- **פוסטים חינוכיים לרשתות חברתיות** — אינסטגרם, פייסבוק, לינקדאין
- **אסטרטגיית המלצות מטופלים** — איסוף והצגת חוויות חיוביות
- **SEO רפואי** — אופטימיזציה למנועי חיפוש

### מה זה SEO?

SEO (Search Engine Optimization) — אופטימיזציה למנועי חיפוש. בפשטות: לגרום לאתר המרפאה שלכם להופיע גבוה בתוצאות גוגל כשמישהו מחפש "רופא עור" או "הסרת שומות". Claude יכול לעזור לכתוב תוכן שמותאם לחיפוש.

### מה זה CTA?
> CTA (Call to Action) — קריאה לפעולה. למשל: "קבעו תור עכשיו", "צרו קשר". זה הכפתור או המשפט שמעודד את הגולש לעשות משהו.

### פרומפטים לדוגמה

\`\`\`
כתוב פוסט אינסטגרם חינוכי על חשיבות בדיקות שומות שנתיות. הטון: מקצועי, מעודד לפעולה, עם קריאה לפעולה (CTA).
\`\`\`

\`\`\`
צור סדרת תוכן שבועית לאינסטגרם של מרפאת דרמטולוגיה: טיפים לעור, מיתוסים, מקרים מהמרפאה.
\`\`\`

### פלטפורמה מומלצת
- **claude.ai עם Artifacts** — ליצירת תוכן ויזואלי בזמן אמת. Artifacts הוא פיצ'ר של Claude שמאפשר לראות תוצרים (כמו מסמכים, קוד, גרפיקה) בזמן אמת

### 🔒 הערה בנושא פרטיות
> **הקפידו על אתיקה רפואית בשיווק.** אל תבטיחו תוצאות טיפול ואל תשתמשו בתמונות של מטופלים אמיתיים ללא הסכמה.`,
      en: `## Key Use Cases

- **Website content** — Service pages, landing pages, treatment descriptions
- **Educational social media posts** — Instagram, Facebook, LinkedIn
- **Patient testimonial strategy** — Collecting and presenting positive experiences
- **Medical SEO** — Search engine optimization for medical practices

### What is SEO?

SEO (Search Engine Optimization) means making your clinic's website appear higher in Google results when someone searches "dermatologist" or "mole removal." Claude can help write search-optimized content.

### What is CTA?
> CTA (Call to Action) — A phrase like "Book an appointment now" or "Contact us." It's the button or sentence that encourages the visitor to take action.

### Example Prompts

\`\`\`
Write an educational Instagram post about the importance of annual mole checks. Tone: professional, encouraging action, with a clear CTA (call to action).
\`\`\`

\`\`\`
Create a weekly Instagram content plan for a dermatology clinic: skin tips, myths, cases from the clinic.
\`\`\`

### Recommended Platform
- **claude.ai with Artifacts** — For creating content and visuals in real time. Artifacts is a Claude feature that lets you see outputs (like documents, code, graphics) in real time

### 🔒 Privacy Note
> **Maintain medical ethics in marketing.** Never promise treatment results and never use real patient photos without explicit consent.`,
    },
  },
  {
    id: 'privacy',
    icon: '🔒',
    title: { he: 'פרטיות וסודיות רפואית', en: 'Medical Privacy & Confidentiality' },
    description: {
      he: 'עקרונות HIPAA, אנונימיזציה, דפוסי שימוש בטוחים',
      en: 'HIPAA compliance, anonymization, secure usage patterns',
    },
    content: {
      he: `## עקרונות מרכזיים

- **עמידה בדיני פרטיות** — HIPAA, חוק הגנת הפרטיות הישראלי, תקנות מקומיות
- **טכניקות אנונימיזציה** — שיטות להסרת פרטים מזהים
- **דפוסי שימוש בטוחים ב-Claude** — איך להשתמש בבטחה
- **מה אסור לשתף עם AI** — רשימה ברורה של מה לא לשלוח

### מה זה HIPAA?

HIPAA (Health Insurance Portability and Accountability Act) — חוק אמריקאי שמגן על מידע בריאותי של מטופלים. בישראל, חוק הגנת הפרטיות (תשמ"ב) ממלא תפקיד דומה. שני החוקים אוסרים על שיתוף מידע מזהה של מטופלים ללא הסכמתם.

### מה זה "אנונימיזציה"?

אנונימיזציה היא הסרת כל הפרטים שיכולים לזהות מטופל. למשל:
- במקום "יוסי כהן בן 47" → "גבר בן 45-50"
- במקום "ת.ז. 123456789" → לא לכלול בכלל
- במקום "15.3.2026" → "מרץ 2026" או "לאחרונה"

### שיטות אנונימיזציה

1. **הסירו שמות** — השתמשו בשמות בדויים או ראשי תיבות
2. **הסירו ת.ז. ומספרי זהות** — לעולם אל תכלילו ת.ז., מספר טלפון, או מספר זהות
3. **החליפו תאריכים** — השתמשו בטווחי גילאים במקום תאריכים מדויקים
4. **העדיפו כלים מקומיים** — כשאפשר, השתמשו בכלים שרצים מקומית

### מה **אסור** לשלוח ל-Claude

- שמות מלאים של מטופלים
- מספרי תעודת זהות
- מספרי טלפון, כתובות אימייל
- תאריכי לידה מדויקים
- תמונות של מטופלים

### חוק הגנת הפרטיות הישראלי
> בישראל, חוק הגנת הפרטיות (תשע"ב) מגביל את השימוש במידע רפואי. ודאו שהעברת מידע לשירותי ענן מתבצעת בהתאם לחוק.

### פלטפורמה מומלצת

- **Desktop App (עם MCP מקומי)** — לנתונים רגישים יותר. MCP (Model Context Protocol) הוא פרוטוקול שמאפשר ל-Claude לעבוד עם כלים מקומיים על המחשב שלכם, בלי לשלוח נתונים לענן
- **API עם הסכמי עיבוד נתונים** — לשימוש מוסדי. ה-API מאפשר שליטה מלאה על איפה ואיך הנתונים מעובדים

### 🔒 הערה בנושא פרטיות
> **זהו הנושא החשוב ביותר בשימוש ב-AI ברפואה.** פרטיות המטופל היא אחריות הרופא — תמיד.`,
      en: `## Core Principles

- **Privacy compliance** — HIPAA, Israeli Privacy Protection Law, local regulations
- **Anonymization techniques** — Methods for removing identifying information
- **Secure Claude usage patterns** — How to use Claude safely
- **What NOT to share with AI** — Clear list of what to never send

### What is HIPAA?

HIPAA (Health Insurance Portability and Accountability Act) is a US law protecting patient health information. In Israel, the Privacy Protection Law serves a similar role. Both laws prohibit sharing identifiable patient information without consent.

### What is "Anonymization"?

Anonymization means removing all details that could identify a patient. For example:
- Instead of "John Smith, age 47" → "Male, 45-50"
- Instead of "ID 123456789" → Don't include at all
- Instead of "March 15, 2026" → "March 2026" or "recently"

### Anonymization Methods

1. **Remove names** — Use pseudonyms or initials
2. **Remove IDs and identification numbers** — Never include ID numbers, phone numbers, or identity documents
3. **Replace dates** — Use age ranges instead of exact birth dates
4. **Prefer local tools** — When possible, use tools that run locally

### What you must **NEVER** send to Claude

- Full patient names
- ID or social security numbers
- Phone numbers, email addresses
- Exact birth dates
- Patient photographs

### Israeli Privacy Protection Law
> In Israel, the Privacy Protection Law (1981) restricts the use of medical information. Ensure that transferring data to cloud services complies with the law.

### Recommended Platform

- **Desktop App (with local MCP)** — For more sensitive data. MCP (Model Context Protocol) is a protocol that lets Claude work with local tools on your computer, without sending data to the cloud
- **API with data processing agreements** — For institutional use. The API gives you full control over where and how data is processed

### 🔒 Privacy Note
> **This is the most important topic when using AI in medicine.** Patient privacy is always the physician's responsibility.`,
    },
  },
];

export function getMedicalUseCaseBySlug(slug: string): MedicalUseCase | undefined {
  return medicalUseCases.find(uc => uc.id === slug);
}
