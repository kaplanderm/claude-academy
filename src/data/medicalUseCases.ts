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
      he: 'אבחנה מבדלת, פרוטוקולי טיפול, אינטראקציות תרופות ופרשנות מעבדה',
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
      he: `## מבוא

אחד האתגרים הגדולים ביותר ברפואה הוא לתקשר מידע רפואי מורכב למטופלים. מטופלים מגיעים לקליניקה עם חששות, שאלות ופחדים — והיכולת להסביר להם בשפה ברורה ואמפתית (רגישה ומכילה) היא חלק בלתי נפרד מהטיפול הרפואי. Claude יכול לשמש כ"מתרגם" בין השפה הרפואית המקצועית לבין שפה יומיומית שכל מטופל יכול להבין.

התקשורת עם מטופלים אינה רק עניין של נוחות — מחקרים מראים שמטופלים שמבינים את מצבם הרפואי, תוכנית הטיפול וההנחיות שלאחר טיפול, נוטים יותר לעקוב אחרי ההוראות, חווים פחות חרדה, ומגיעים לתוצאות טיפוליות טובות יותר. Claude מאפשר לרופא ליצור חומרי הסבר מקצועיים, מדויקים ונגישים — בתוך דקות ספורות.

## שימושים עיקריים

- **חומרי הסבר למטופלים** — יצירת דפי מידע מפורטים בשפה פשוטה על מצבים רפואיים, פרוצדורות (פעולות רפואיות) וטיפולים. למשל: "מה זה BCC (סרטן עור בזאלי)?" בשפה שכל מטופל יבין
- **הנחיות אחרי פרוצדורה** — הוראות טיפול ברורות ומפורטות לאחר פעולות כמו ביופסיה (לקיחת דגימת רקמה), ניתוח מוהס, הקפאה בנוזל חנקן, או טיפולי לייזר. כולל מה מותר ומה אסור, סימנים שדורשים פנייה לרופא, ולוח זמנים להחלמה
- **יצירת דפי FAQ** — דפי שאלות נפוצות (FAQ = Frequently Asked Questions, כלומר "שאלות שנשאלות הרבה") לכל פרוצדורה או מצב רפואי. חוסך מהצוות לענות על אותן שאלות שוב ושוב
- **תרגום שפה רפואית** — המרת מונחים מקצועיים כמו "dysplastic nevus" או "cryotherapy" לשפה יומיומית שמטופל ללא רקע רפואי יכול להבין
- **הכנת מטופלים לפרוצדורה** — מדריכי הכנה שמסבירים מה יקרה, כמה זמן זה לוקח, האם יש כאב, מה להביא, ואיך להתכונן — מפחית חרדה לפני הפעולה
- **תקשורת רגישה** — עזרה בניסוח הודעות על תוצאות בדיקות מדאיגות, הסברים על פרוגנוזה (תחזית המחלה), ומסירת בשורות קשות בצורה רגישה ומכבדת
- **חומרי הסבר בשפות שונות** — יצירת אותו חומר הסבר בעברית, ערבית, רוסית, אמהרית או אנגלית — כדי שכל מטופל יקבל מידע בשפה שהוא מבין

## מושגי מפתח

- **Health Literacy (אוריינות בריאותית)** — רמת היכולת של מטופל להבין מידע רפואי ולפעול לפיו. מחקרים מראים שכמחצית מהמטופלים מתקשים להבין הנחיות רפואיות כתובות. Claude עוזר ליצור חומרים שמתאימים לרמות אוריינות שונות
- **Informed Consent (הסכמה מדעת)** — תהליך שבו המטופל מקבל הסבר מלא על הפרוצדורה, הסיכונים, היתרונות והחלופות — ומסכים לטיפול בצורה מושכלת. Claude יכול לעזור לנסח טפסי הסכמה מדעת בשפה ברורה שהמטופל באמת מבין
- **Plain Language (שפה פשוטה)** — כתיבה ברמת קריאה של כיתה ו'-ח', ללא מונחים מקצועיים מיותרים. העיקרון: אם סבתא שלכם לא מבינה את המשפט — צריך לפשט אותו
- **Empathy (אמפתיה)** — היכולת לתקשר עם המטופל ברמה רגשית, לא רק אינפורמטיבית. Claude יכול לעזור לנסח הודעות שמשלבות מידע רפואי מדויק עם רגישות וחמלה

## פרומפטים לדוגמה

### 1. הסבר תוצאת ביופסיה למטופל

כשתוצאת ביופסיה חוזרת מהמעבדה, המטופל נמצא בחרדה. פרומפט זה עוזר ליצור הסבר ברור ומרגיע:

\`\`\`
אני רופא עור. תוצאת הביופסיה של מטופל הראתה "compound nevus with mild atypia, margins clear." כתוב הסבר למטופל בשפה פשוטה ומרגיעה. הסבר מה המשמעות, למה זה לא מסוכן, ומה המעקב הנדרש.
\`\`\`

### 2. הנחיות אחרי ניתוח מוהס

ניתוח מוהס (Mohs Surgery) הוא טכניקה מדויקת להסרת סרטן עור. המטופל צריך הנחיות ברורות לאחר הניתוח:

\`\`\`
צור דף הנחיות למטופל לאחר ניתוח מוהס. כלול: טיפול בפצע ביום הראשון, החלפת תחבושות, מתי מותר להתרחץ, סימנים שדורשים פנייה לרופא (דימום, זיהום, חום), לוח זמנים להחלמה (שבוע 1, שבוע 2, חודש), והגבלות פעילות. כתוב בשפה פשוטה, עם כותרות ברורות ו-bullet points.
\`\`\`

### 3. מדריך הכנה לפרוצדורה

להכין את המטופל מראש מפחית חרדה ומשפר שיתוף פעולה:

\`\`\`
צור מדריך הכנה למטופל לפני ביופסיית עור (shave biopsy). כלול: מה זה ביופסיה בשפה פשוטה, כמה זמן הפעולה לוקחת, האם יש כאב (והרדמה), מה להביא, תרופות שצריך להפסיק (כמו מדללי דם — ציין שחובה לבדוק עם הרופא לפני הפסקה), מה לצפות ביום הפעולה, ותשובות ל-5 שאלות נפוצות.
\`\`\`

### 4. הסבר דוח פתולוגי בשפה פשוטה

דוחות פתולוגיה (בדיקת רקמה במעבדה) כתובים בשפה מקצועית שמטופלים לא מבינים:

\`\`\`
הסבר למטופל בשפה פשוטה את המשמעות של דוח פתולוגי שאומר: "Basal cell carcinoma, nodular type, excision margins clear, no perineural invasion." הרגע אותו, הסבר מה כל חלק אומר, ומה הצעדים הבאים.
\`\`\`

### 5. ניסוח הסכמה מדעת

טופס הסכמה מדעת צריך להיות ברור למטופל ולא רק "חוקי":

\`\`\`
נסח שפה לטופס הסכמה מדעת עבור פרוצדורת הקפאה בנוזל חנקן (cryotherapy) להסרת קרטוזיס אקטינית. כלול: מה הפרוצדורה, מה הסיכונים (כאב, שלפוחית, שינוי צבע, צלקת), מה החלופות, מה ההחלמה הצפויה. כתוב בשפה שמטופל ללא רקע רפואי יבין.
\`\`\`

### 6. ניוזלטר למטופלים

ניוזלטר (מכתב עדכון תקופתי) למטופלים מחזק את הקשר ומעלה מודעות:

\`\`\`
כתוב ניוזלטר קצר (300-400 מילים) למטופלי מרפאת עור בנושא "איך לבדוק שומות בבית — כלל ה-ABCDE". כתוב בעברית פשוטה, עם טון חם ומקצועי, כלול קריאה לפעולה לקביעת בדיקה שנתית.
\`\`\`

### 7. הסבר על אפשרויות טיפול

כשיש כמה אפשרויות טיפול, המטופל צריך להבין את ההבדלים:

\`\`\`
מטופל בן 70 עם BCC (סרטן עור בזאלי) על האף. הסבר לו בשפה פשוטה את 3 אפשרויות הטיפול: ניתוח מוהס, כריתה כירורגית רגילה, וקרם אימיקווימוד. עבור כל אפשרות: מה עושים, כמה זמן לוקח, מה אחוזי ההצלחה, ומה החסרונות. עזור למטופל להבין את ההבדלים כדי שיוכל להחליט עם הרופא.
\`\`\`

### 8. הנחיות רב-לשוניות

במרפאה רב-תרבותית, מטופלים צריכים חומרים בשפתם:

\`\`\`
צור הנחיות טיפול לאחר ביופסיית עור ב-3 שפות: עברית, ערבית ורוסית. כלול: טיפול בפצע, מתי להחליף תחבושת, סימנים של זיהום, ומתי לפנות לרופא. שמור על אותו מבנה ב-3 השפות.
\`\`\`

## דוגמה מעשית: תרחיש קליני

### המצב

רופאת עור מקבלת תוצאת ביופסיה: **"Dysplastic nevus with severe atypia, margins positive"** (שומה חריגה עם תאים לא טיפוסיים ברמה חמורה, הגבולות לא נקיים). המטופלת, אישה בת 35, מודאגת מאוד. הרופאה צריכה להסביר לה את המצב בצורה ברורה, מדויקת ולא מפחידה.

### שלב 1: הפרומפט שהרופאה שולחת

\`\`\`
אני רופאת עור. צריכה להסביר למטופלת בת 35 את תוצאת הביופסיה שלה: "Dysplastic nevus with severe atypia, margins positive."

הסבר בשפה פשוטה:
1. מה כל מילה בתוצאה אומרת
2. למה צריך פעולה נוספת (re-excision) אבל למה זה לא סרטן
3. מה הצעדים הבאים
4. הרגעה מבוססת עובדות

הטון: חם, מרגיע, אבל כנה ומדויק.
\`\`\`

### שלב 2: התשובה ש-Claude מפיק

Claude ייצור הסבר שכולל:
- "השומה שהוצאנו היא שומה **חריגה** — כלומר, התאים שלה נראים שונים מהרגיל תחת המיקרוסקופ. זה **לא סרטן**, אבל זה סוג של שומה שאנחנו מתייחסים אליה ברצינות."
- "'Severe atypia' אומר שהתאים יותר חריגים מהממוצע. זה כמו דירוג: קל, בינוני, חמור. שלך חמור — אבל חשוב להבין: **חמור לא אומר סרטן**. זה אומר שאנחנו רוצים להיות בטוחים."
- "'Margins positive' אומר שכשהפתולוג בדק את קצוות הדגימה, הוא עדיין ראה תאים חריגים. זה אומר שאנחנו צריכים להוציא עוד חתיכה קטנה מסביב — כדי לוודא שהוצאנו הכל."
- הצעדים הבאים: "נקבע תור לכריתה נוספת, פרוצדורה פשוטה בהרדמה מקומית, ואחרי זה — מעקב שנתי עם דרמוסקופיה."

### שלב 3: התאמה אישית

הרופאה קוראת את ההסבר ומתאימה אותו:
- מוסיפה את שם המרפאה ופרטי קשר
- מתאימה את לוח הזמנים לזמינות שלה
- מוסיפה משפט אישי: "אני כאן בשבילך לכל שאלה"
- מוודאת שהמידע הרפואי מדויק

### שלב 4: טיפים להוספת אמפתיה

- פתחו עם משפט שמאשר את הרגש: "אני מבינה שזה מלחיץ לקבל תוצאות כאלה"
- השתמשו ב"אנחנו" במקום "את צריכה": "אנחנו נדאג שהכל יהיה בסדר"
- סיימו עם תקווה מבוססת: "במקרים כמו שלך, הטיפול מצליח בלמעלה מ-95% מהמקרים"
- הציעו דרך קלה ליצור קשר: "אם עולות שאלות, שלחי הודעה לקליניקה"

## שיטת DermUnbound: תקשורת בטוחה עם מטופלים

שיטת DermUnbound פותחה כדי להבטיח שימוש בטוח ואחראי ב-AI לצורכי תקשורת עם מטופלים. חמישה עקרונות מרכזיים:

- **עקרון 1: אנונימיזציה (הסרת פרטים מזהים)** — גם כשמכינים חומר הסבר למטופל ספציפי, אל תכללו שם, תעודת זהות, או פרטים מזהים בפרומפט ל-Claude. תארו את המצב הרפואי בלבד: "מטופלת בת 35 עם dysplastic nevus" ולא "שרה כהן ת.ז. 123456789"
- **עקרון 2: התאמה אישית** — Claude יוצר טיוטה מצוינת, אבל **תמיד** קראו, ערכו והתאימו אישית לפני שליחה למטופל. הוסיפו את הנגיעה האישית שרק אתם, כרופא המטפל, יכולים להוסיף
- **עקרון 3: דיוק רפואי** — וודאו שכל המידע הרפואי שClaude כותב הוא מדויק ועדכני. Claude הוא כלי עזר, לא מקור רפואי סופי. **אתם אחראים על הדיוק**
- **עקרון 4: רגישות תרבותית** — התאימו את החומרים להקשר התרבותי של המטופל. מה שמתאים למטופל ממוצא מערבי עשוי לא להתאים למטופל ממסורת שונה. בקשו מClaude להתאים טון ותוכן לאוכלוסיות שונות
- **עקרון 5: נגישות** — ודאו שהחומרים נגישים לרמות אוריינות שונות. בקשו מClaude לכתוב "ברמת כיתה ו'" או "ברמה בסיסית מאוד". עבור מטופלים מבוגרים — פונט גדול ומשפטים קצרים

למידע נוסף על השיטה: [מחקר DermUnbound](https://kaplanclinic.co.il/he/derm-ai)

## שימושים יצירתיים

- **פרויקט "קול המרפאה"** — צרו פרויקט (Project) ב-claude.ai עם הנחיות שמגדירות את הטון והסגנון של המרפאה שלכם. כך כל חומר ש-Claude מייצר ישמע כמו "אתם"
- **תיאורים לעזרים חזותיים** — בקשו מ-Claude ליצור תיאורים לדיאגרמות, אינפוגרפיקות (גרפיקה שמסבירה מידע בצורה ויזואלית), ואיורים — שתוכלו להעביר למעצב גרפי
- **תסריטי וידאו** — כתבו תסריטים לסרטוני הסבר קצרים (2-3 דקות) שמטופלים יכולים לצפות בהם לפני הפרוצדורה או אחריה
- **ספריית תבניות** — בנו ספרייה של תבניות הסבר למצבים נפוצים (AK, BCC, SCC, שומות חריגות, פסוריאזיס, אגזמה) — ושפרו אותן לאורך זמן
- **הודעות SMS/WhatsApp קצרות** — בקשו מ-Claude לקצר הנחיות מפורטות להודעת טקסט קצרה וברורה שאפשר לשלוח למטופל בוואטסאפ
- **תוכן חינוכי לרשתות חברתיות** — צרו פוסטים חינוכיים קצרים למטופלים בפייסבוק או אינסטגרם, על נושאים כמו הגנה מהשמש, בדיקת שומות, טיפול בעור
- **חומרים לחדר המתנה** — יצירת עלוני מידע, פוסטרים קטנים, או מצגות שרצות על מסך בחדר ההמתנה — בנושאים חינוכיים שמעניינים מטופלים

## טיפים מתקדמים

- **ציינו רמת קריאה** — הגידו ל-Claude באיזו רמה לכתוב: "הסבר ברמה שילד בכיתה ו' יבין" או "כתוב למטופל משכיל אבל ללא רקע רפואי"
- **בקשו אנלוגיות** — אנלוגיות (דימויים/משלים) עוזרות למטופלים להבין. למשל: "ביופסיה זה כמו לקחת דגימה קטנה כדי לבדוק אותה במעבדה — כמו לטעום ממרק לפני שמגישים אותו"
- **פורמט סריקה מהירה** — בקשו bullet points, כותרות ברורות, ומספור — כדי שמטופל יוכל למצוא מידע מהר
- **סימני אזהרה** — תמיד בקשו סעיף "מתי לפנות לרופא" — עם סימנים ברורים שדורשים פנייה דחופה
- **תרגום לשפות** — Claude מתרגם באיכות גבוהה לערבית, רוסית, אמהרית ואנגלית. בקשו תרגום ואז בדקו עם דובר שפת אם אם אפשר
- **הוסיפו ויזואליה** — בקשו מ-Claude לתאר מה צריך להופיע בתמונה/איור ליד הטקסט — ושלחו את התיאור למעצב
- **בנו על פידבק** — שאלו מטופלים אם ההסברים היו ברורים, ושפרו את התבניות בהתאם

## פלטפורמה מומלצת

**מה זה "פלטפורמה"?** — הכלי (אפליקציה או אתר) דרכו אתם מדברים עם Claude. כל אחת מתאימה לסיטואציה אחרת:

- **claude.ai** — האתר הראשי של Claude. מתאים ליצירת חומרי הסבר מפורטים, טפסי הסכמה מדעת, ניוזלטרים, ותוכן חינוכי. יש לו גם תכונת "פרויקטים" (Projects) שמאפשרת לשמור הקשר וסגנון — כך שלא צריך להסביר ל-Claude מחדש בכל שיחה מי אתם ומה הסגנון שלכם
- **אפליקציית Claude לנייד (Mobile App)** — אפליקציה חינמית לטלפון (iPhone ו-Android). מושלמת ליצירת תשובות מהירות בזמן אמת — למשל כשמטופל שואל שאלה ואתם רוצים לנסח תשובה ברורה. זמינה ב-App Store וב-Google Play
- **Desktop App (אפליקציה למחשב)** — אפליקציה שמתקינים על המחשב. נוחה להכנת חומרים במשרד, כי אפשר לעבוד עליה במקביל לתוכנת הרשומה הרפואית

## 🔒 פרטיות ואבטחה

- **לעולם אל תכללו פרטים מזהים** כשיוצרים תבניות הסבר — אל תכתבו שם מטופל, תעודת זהות, מספר טלפון, או כתובת. תארו את המצב הרפואי בלבד
- **בדקו כל חומר לפני שליחה** — Claude מייצר טיוטה. תמיד קראו, בדקו דיוק רפואי, והתאימו לפני שנותנים למטופל
- **שמרו על "אדם בתהליך" (Human in the Loop)** — אל תשלחו חומר AI ישירות למטופל בלי שרופא קרא ואישר. הרופא הוא תמיד שומר הסף
- **הנחיות DermUnbound** — פעלו לפי חמשת העקרונות שתוארו למעלה: אנונימיזציה, התאמה אישית, דיוק רפואי, רגישות תרבותית, ונגישות
- **שמרו עותקים** — שמרו עותק של חומרי הסבר שיצרתם ושלחתם, לצורך תיעוד רפואי`,
      en: `## Introduction

One of the greatest challenges in medicine is communicating complex medical information to patients. Patients come to the clinic with concerns, questions, and fears — and the ability to explain things in clear, empathetic language is an integral part of medical care. Claude can serve as a "translator" between professional medical language and everyday language that any patient can understand.

Patient communication isn't just about convenience — research shows that patients who understand their medical condition, treatment plan, and post-procedure instructions are more likely to follow through on recommendations, experience less anxiety, and achieve better treatment outcomes. Claude enables physicians to create professional, accurate, and accessible educational materials — in just minutes.

## Key Use Cases

- **Patient education materials** — Create detailed information sheets in simple language about medical conditions, procedures, and treatments. For example: "What is BCC (basal cell carcinoma)?" in language any patient can understand
- **Post-procedure instructions** — Clear and detailed care instructions after procedures such as biopsy (tissue sampling), Mohs surgery, liquid nitrogen cryotherapy, or laser treatments. Including dos and don'ts, signs requiring medical attention, and a recovery timeline
- **FAQ creation** — FAQ (Frequently Asked Questions) sheets for each procedure or medical condition. Saves staff from answering the same questions repeatedly
- **Translating medical jargon** — Converting professional terms like "dysplastic nevus" or "cryotherapy" into everyday language that a patient without medical background can understand
- **Pre-procedure preparation guides** — Preparation guides explaining what will happen, how long it takes, whether there's pain, what to bring, and how to prepare — reducing pre-procedure anxiety
- **Sensitive communication** — Help drafting messages about concerning test results, explaining prognosis (disease outlook), and delivering difficult news in a sensitive and respectful way
- **Multilingual patient materials** — Creating the same educational material in Hebrew, Arabic, Russian, Amharic, or English — so every patient receives information in a language they understand

## Key Concepts

- **Health Literacy** — A patient's ability to understand medical information and act on it. Research shows that roughly half of patients struggle to understand written medical instructions. Claude helps create materials suited to different literacy levels
- **Informed Consent** — The process where a patient receives a full explanation of the procedure, risks, benefits, and alternatives — and agrees to treatment in an informed manner. Claude can help draft informed consent forms in clear language the patient truly understands
- **Plain Language** — Writing at a 6th-8th grade reading level, without unnecessary professional terminology. The principle: if your grandmother wouldn't understand the sentence, it needs to be simplified
- **Empathy** — The ability to communicate with the patient on an emotional level, not just informational. Claude can help draft messages that combine accurate medical information with sensitivity and compassion

## Example Prompts

### 1. Explaining a Biopsy Result to a Patient

When a biopsy result comes back from the lab, the patient is anxious. This prompt helps create a clear, reassuring explanation:

\`\`\`
I'm a dermatologist. A patient's biopsy result showed "compound nevus with mild atypia, margins clear." Write an explanation for the patient in simple, reassuring language. Explain what it means, why it's not dangerous, and what follow-up is needed.
\`\`\`

### 2. Post-Mohs Surgery Instructions

Mohs surgery is a precise technique for removing skin cancer. The patient needs clear post-operative instructions:

\`\`\`
Create post-Mohs surgery instruction sheet for a patient. Include: wound care on day one, bandage changes, when bathing is allowed, signs requiring medical attention (bleeding, infection, fever), recovery timeline (week 1, week 2, month), and activity restrictions. Write in plain language with clear headings and bullet points.
\`\`\`

### 3. Pre-Procedure Preparation Guide

Preparing the patient in advance reduces anxiety and improves cooperation:

\`\`\`
Create a preparation guide for a patient before a shave biopsy. Include: what a biopsy is in plain language, how long it takes, whether there's pain (and anesthesia), what to bring, medications to stop (like blood thinners — note they must check with their doctor before stopping), what to expect on the day, and answers to 5 common questions.
\`\`\`

### 4. Explaining a Pathology Report in Simple Terms

Pathology reports (laboratory tissue examination) are written in professional language patients don't understand:

\`\`\`
Explain to a patient in plain language what a pathology report means that says: "Basal cell carcinoma, nodular type, excision margins clear, no perineural invasion." Reassure them, explain what each part means, and outline the next steps.
\`\`\`

### 5. Drafting Informed Consent Language

An informed consent form needs to be clear to the patient, not just legally compliant:

\`\`\`
Draft language for an informed consent form for a cryotherapy procedure to remove actinic keratosis. Include: what the procedure is, risks (pain, blistering, pigment change, scarring), alternatives, expected recovery. Write in language a patient without medical background can understand.
\`\`\`

### 6. Patient Newsletter

A newsletter (periodic update letter) to patients strengthens the relationship and raises awareness:

\`\`\`
Write a short newsletter (300-400 words) for a dermatology clinic's patients about "How to check moles at home — the ABCDE rule." Write in simple English, with a warm and professional tone. Include a call to action to book an annual screening.
\`\`\`

### 7. Explaining Treatment Options

When there are several treatment options, the patient needs to understand the differences:

\`\`\`
A 70-year-old patient has BCC (basal cell carcinoma) on the nose. Explain in plain language the 3 treatment options: Mohs surgery, standard surgical excision, and Imiquimod cream. For each option: what's done, how long it takes, success rates, and disadvantages. Help the patient understand the differences so they can decide with their doctor.
\`\`\`

### 8. Multilingual Instructions

In a multicultural clinic, patients need materials in their language:

\`\`\`
Create post-biopsy wound care instructions in 3 languages: English, Arabic, and Russian. Include: wound care, when to change bandages, signs of infection, and when to contact the doctor. Maintain the same structure in all 3 languages.
\`\`\`

## Practical Example: Clinical Scenario

### The Situation

A dermatologist receives a biopsy result: **"Dysplastic nevus with severe atypia, margins positive"** (an abnormal mole with severely atypical cells, margins not clear). The patient, a 35-year-old woman, is very worried. The doctor needs to explain the situation clearly, accurately, and without causing panic.

### Step 1: The Prompt the Doctor Sends

\`\`\`
I'm a dermatologist. I need to explain to a 35-year-old female patient her biopsy result: "Dysplastic nevus with severe atypia, margins positive."

Explain in plain language:
1. What each word in the result means
2. Why additional action (re-excision) is needed but why it's not cancer
3. What the next steps are
4. Fact-based reassurance

Tone: warm, reassuring, but honest and accurate.
\`\`\`

### Step 2: The Response Claude Generates

Claude creates an explanation including:
- "The mole we removed is an **atypical** mole — meaning its cells look different from normal under the microscope. This is **not cancer**, but it's a type of mole we take seriously."
- "'Severe atypia' means the cells are more unusual than average. Think of it as a scale: mild, moderate, severe. Yours is severe — but it's important to understand: **severe does not mean cancer**. It means we want to be thorough."
- "'Margins positive' means when the pathologist examined the edges of the sample, they still found some atypical cells. This means we need to remove a small additional area around it — to make sure we got everything."
- Next steps: "We'll schedule a re-excision, a simple procedure under local anesthesia, and after that — annual monitoring with dermoscopy."

### Step 3: How the Doctor Customizes It

The doctor reads the explanation and personalizes it:
- Adds the clinic name and contact details
- Adjusts the timeline to her availability
- Adds a personal touch: "I'm here for you with any questions"
- Verifies the medical accuracy

### Step 4: Tips for Adding Empathy and Reassurance

- Open with a sentence that validates the emotion: "I understand it's stressful to receive results like these"
- Use "we" instead of "you need to": "We'll make sure everything is taken care of"
- End with evidence-based hope: "In cases like yours, treatment succeeds in over 95% of cases"
- Offer an easy way to reach out: "If questions come up, send a message to the clinic"

## The DermUnbound Method: Safe Patient Communication

The DermUnbound method was developed to ensure safe and responsible use of AI for patient communication. Five core principles:

- **Principle 1: Anonymization (removing identifying details)** — Even when preparing explanation material for a specific patient, never include name, ID number, or identifying details in the prompt to Claude. Describe only the medical situation: "35-year-old female patient with dysplastic nevus" not "Sarah Cohen ID 123456789"
- **Principle 2: Personalization** — Claude creates an excellent draft, but **always** read, edit, and personalize before sending to the patient. Add the personal touch that only you, as the treating physician, can add
- **Principle 3: Medical Accuracy** — Verify that all medical information Claude writes is accurate and up-to-date. Claude is a tool, not a definitive medical source. **You are responsible for accuracy**
- **Principle 4: Cultural Sensitivity** — Adapt materials to the patient's cultural context. What works for one patient may not work for another from a different cultural background. Ask Claude to adapt tone and content for different populations
- **Principle 5: Accessibility** — Ensure materials are accessible to different literacy levels. Ask Claude to write "at a 6th-grade level" or "at a very basic level." For elderly patients — large font and short sentences

For more on this method: [DermUnbound Research](https://kaplanclinic.co.il/en/derm-ai)

## Creative Uses

- **"Clinic Voice" Project** — Create a Project in claude.ai with instructions that define your clinic's tone and style. This way, every material Claude produces sounds like "you"
- **Visual aid descriptions** — Ask Claude to create descriptions for diagrams, infographics (graphics that explain information visually), and illustrations — which you can then pass to a graphic designer
- **Video scripts** — Write scripts for short explanation videos (2-3 minutes) that patients can watch before or after the procedure
- **Template library** — Build a library of explanation templates for common conditions (AK, BCC, SCC, dysplastic nevi, psoriasis, eczema) — and improve them over time
- **Short SMS/WhatsApp messages** — Ask Claude to condense detailed instructions into a short, clear text message you can send to a patient via WhatsApp
- **Educational social media content** — Create short educational posts for patients on Facebook or Instagram, about topics like sun protection, mole checks, skin care
- **Waiting room materials** — Create information leaflets, small posters, or presentations that run on a screen in the waiting room — on educational topics that interest patients

## Advanced Tips

- **Specify reading level** — Tell Claude what level to write at: "Explain at a 6th-grade level" or "Write for an educated patient but without medical background"
- **Ask for analogies** — Analogies (comparisons/metaphors) help patients understand. For example: "A biopsy is like taking a small sample to test in a lab — like tasting soup before serving it"
- **Quick-scan format** — Request bullet points, clear headings, and numbering — so a patient can find information quickly
- **Warning signs** — Always request a "When to contact the doctor" section — with clear signs that require urgent attention
- **Language translation** — Claude translates at high quality to Arabic, Russian, Amharic, and Hebrew. Request a translation and then check with a native speaker if possible
- **Add visuals** — Ask Claude to describe what should appear in an image/illustration next to the text — and send the description to a designer
- **Build on feedback** — Ask patients if the explanations were clear, and improve your templates accordingly

## Recommended Platform

**What is a "platform"?** — The tool (app or website) you use to talk to Claude. Each is suited to different situations:

- **claude.ai** — Claude's main website. Ideal for creating detailed educational materials, informed consent forms, newsletters, and educational content. It also has a "Projects" feature that lets you save context and style — so you don't have to re-explain to Claude who you are and what your style is in every conversation
- **Claude Mobile App** — A free app for your phone (iPhone and Android). Perfect for creating quick responses in real time — for example, when a patient asks a question and you want to draft a clear answer. Available on the App Store and Google Play
- **Desktop App** — An application you install on your computer. Convenient for preparing materials at the office, since you can work alongside your EMR (Electronic Medical Record) software

## 🔒 Privacy and Security

- **Never include identifying information** when creating explanation templates — don't enter patient names, ID numbers, phone numbers, or addresses. Describe only the medical situation
- **Review all materials before sharing** — Claude produces a draft. Always read, verify medical accuracy, and customize before giving to a patient
- **Keep a "Human in the Loop"** — Don't send AI-generated material directly to a patient without a physician reading and approving it. The doctor is always the gatekeeper
- **DermUnbound guidelines** — Follow the five principles described above: anonymization, personalization, medical accuracy, cultural sensitivity, and accessibility
- **Keep copies** — Save a copy of educational materials you created and shared, for medical documentation purposes`,
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
      he: `## מבוא

ניהול מרפאה רפואית כולל אינספור משימות תפעוליות (תפעול = הפעלה שוטפת של המרפאה) מעבר לטיפול רפואי: זימון תורים, ניהול צוות, מעקב אחר מלאי, הכשרת עובדים, ניהול פיננסי, ועוד. משימות אלה גוזלות זמן יקר שיכול היה להיות מוקדש למטופלים.

Claude יכול לעזור בייעול תהליכים תפעוליים **מבלי לגשת ישירות לרשומות מטופלים**. הרעיון הוא להשתמש ב-Claude ככלי תכנון, כתיבה ואסטרטגיה — ליצור תבניות, פרוטוקולים, צ'קליסטים ותוכניות עבודה שאתם ממקמים בקליניקה. אתם לא צריכים להיות אנשי טכנולוגיה כדי לקבל ערך עצום מהכלי הזה.

## שימושים עיקריים

- **אופטימיזציה של תורים (שיפור מערך התורים)** — יצירת אסטרטגיות להפחתת ביטולים (no-shows), שיפור זרימת מטופלים, ותכנון יעיל יותר של יום העבודה. Claude יכול לעזור לעצב מדיניות תורים, תבניות SMS תזכורת, ושיטות לניהול רשימת המתנה
- **אוטומציה של תהליכים (הפיכת משימות ידניות לאוטומטיות)** — אוטומציה לא חייבת להיות מסובכת. Claude יכול לעזור לתכנן תהליכים אוטומטיים פשוטים: תזכורות תורים, דוחות שבועיים, תבניות מכתבים. אם צריך מימוש טכני — תוכלו להעביר את התוכנית לאיש ה-IT שלכם
- **הכשרת צוות** — יצירת חומרי הדרכה, פרוטוקולים (נהלי עבודה כתובים), SOPs (Standard Operating Procedures — נוהלי עבודה סטנדרטיים, מסמכים שמתארים צעד-צעד כיצד לבצע משימה), ומבחני ידע לצוות המרפאה
- **ניהול מלאי** — יצירת מערכות מעקב אחר חומרים רפואיים, תזכורות הזמנה, ורשימות ציוד. Claude יכול ליצור טבלאות Excel או Google Sheets עם נוסחאות אוטומטיות לניהול מלאי
- **ניהול פיננסי** — יצירת תבניות דוחות חודשיים, מעקב הכנסות והוצאות, ניתוח כדאיות של שירותים חדשים, ותכנון תקציב. Claude יכול ליצור טבלאות ונוסחאות — אתם רק ממלאים את המספרים
- **שיפור חווית מטופל** — עיצוב תהליך הביקור מרגע הכניסה ועד היציאה: שאלוני קבלה, זרימת מטופלים, משובי שביעות רצון, ותקשורת מעקב
- **בניית אתר ונוכחות דיגיטלית** — יצירת תוכן לאתר המרפאה, עמודי שירותים, ומידע למטופלים פוטנציאליים. Claude יכול לכתוב טקסטים מקצועיים שמתאימים לרופאים

## מושגי מפתח

מונחים שתפגשו כשמדברים על ניהול מרפאה חכם — מוסברים בשפה פשוטה:

- **אוטומציה** — הפיכת תהליכים ידניים לאוטומטיים. למשל: במקום שהמזכירה תתקשר לכל מטופל להזכיר לו על תור — המערכת שולחת SMS אוטומטית. **לא דורש ידע בתכנות** — Claude יכול לתכנן את התהליך ואיש IT יכול לממש אותו
- **SOP (נוהל עבודה סטנדרטי)** — Standard Operating Procedure. מסמך שמתאר צעד-אחר-צעד כיצד לבצע משימה מסוימת. למשל: "נוהל הכנת חדר טיפולים" או "נוהל קבלת מטופל חדש". SOPs מבטיחים שכל אחד בצוות עושה את הדברים באותה צורה, בכל פעם
- **CRM (ניהול קשרי לקוחות)** — Customer Relationship Management. מערכת שעוזרת לעקוב אחר מטופלים ותקשורת איתם. בהקשר רפואי: מתי המטופל ביקר לאחרונה, מתי צריך מעקב, איזה טיפולים עשה. אתם כנראה כבר משתמשים במשהו דומה דרך תוכנת הרשומה הרפואית שלכם
- **KPI (מדד ביצוע)** — Key Performance Indicator. מספר שמודד הצלחה. למשל: "אחוז ביטולי תורים" (ככל שנמוך יותר — טוב יותר), "זמן המתנה ממוצע", "מספר מטופלים ביום". KPIs עוזרים לכם לדעת אם המרפאה עובדת טוב ואיפה צריך לשפר
- **API (ממשק תכנות)** — Application Programming Interface. ממשק שמאפשר לתוכנות "לדבר" זו עם זו. כמו תרגומן בין מערכות שונות. למשל: מערכת התורים "מדברת" עם מערכת ה-SMS כדי לשלוח תזכורות אוטומטיות. **אתם לא צריכים להבין את זה טכנית** — רק לדעת שזה אפשרי ולבקש מאיש ה-IT
- **Script (סקריפט)** — קובץ עם רצף פקודות שרצות אוטומטית. כמו "מתכון" למחשב — הוא עוקב אחרי ההוראות צעד אחר צעד. אפשר לבקש מ-Claude לכתוב סקריפט ולהעביר אותו לאיש ה-IT שלכם למימוש

## פרומפטים לדוגמה

### 1. תבניות SMS תזכורת לתורים

ביטולי תורים עולים לקליניקה כסף ומבזבזים זמן. SMS תזכורת מוכח כאחד הכלים היעילים ביותר להפחתת ביטולים:

\`\`\`
צור 5 תבניות SMS לתזכורת תורים במרפאת עור. לכל תבנית: גרסה ליום לפני, גרסה ל-3 שעות לפני. הטון: חם ומקצועי. כלול לינק לאישור/ביטול (placeholder). כלול גם גרסה בערבית. שמור על אורך מקסימלי של 160 תווים לכל SMS.
\`\`\`

### 2. צ'קליסט פתיחת מרפאה

צ'קליסט (רשימת סימון) יומי מבטיח שלא שוכחים שום דבר:

\`\`\`
עצב צ'קליסט יומי מפורט לפתיחת מרפאת דרמטולוגיה. כלול: הכנת חדרי טיפולים (ציוד, חומרי חיטוי, תאורה), בדיקת מכשירים (דרמוסקופ, מכשיר הקפאה, מנורת Wood), בדיקת מלאי חומרים מתכלים, סקירת רשימת מטופלים של היום, הכנת תיקי מטופלים, והפעלת מערכות IT. חלק ל: "לפני פתיחת דלתות" ו"15 דקות ראשונות."
\`\`\`

### 3. מדריך קליטת עובד חדש

קליטת עובד חדש (onboarding) טובה מבטיחה שהעובד יתפקד מהר ונכון:

\`\`\`
צור מדריך קליטה (onboarding) לעובד חדש במרפאת דרמטולוגיה. כלול: שבוע ראשון (היכרות עם הצוות, סיור במרפאה, מערכות IT, נהלי חירום), חודש ראשון (למידת פרוצדורות, צפייה בטיפולים, הכשרה על מערכת התורים), 3 חודשים ראשונים (עצמאות מלאה, הערכת ביצועים). כלול צ'קליסטים לכל שלב.
\`\`\`

### 4. סקר שביעות רצון מטופלים

סקר שביעות רצון עוזר לזהות בעיות ולשפר שירות:

\`\`\`
עצב סקר שביעות רצון קצר (10 שאלות מקסימום) למטופלי מרפאת עור. כלול: שביעות רצון מהטיפול, זמן המתנה, תקשורת עם הצוות, ניקיון המרפאה, קלות קביעת תור, והמלצה לאחרים (NPS). כלול גם שאלה פתוחה אחת. עצב ל-Google Forms או Typeform.
\`\`\`

### 5. תבנית דוח כספי חודשי

מעקב כספי סדיר מונע הפתעות ומאפשר תכנון:

\`\`\`
צור תבנית דוח כספי חודשי למרפאת דרמטולוגיה פרטית. כלול: הכנסות לפי סוג טיפול, הוצאות קבועות (שכר, שכירות, ביטוח), הוצאות משתנות (חומרים, ציוד חד-פעמי), רווח גולמי ונקי, השוואה לחודש קודם ולתקציב. צור כטבלת Excel עם נוסחאות.
\`\`\`

### 6. סקריפט טלפוני לזימון תורים

שיחת זימון תור טובה משפיעה על חווית המטופל:

\`\`\`
כתוב סקריפט (תסריט שיחה) לזימון תורים טלפוני במרפאת עור. כלול: ברכה, שאלות ראשוניות (מטופל חדש/חוזר, סיבת הפנייה, דחיפות), הצעת תור, אישור פרטים, הנחיות הכנה אם צריך, ופרידה. כלול גם תגובות למצבים מיוחדים: מטופל לחוץ, בקשה דחופה, תלונה.
\`\`\`

### 7. נוהלי עבודה סטנדרטיים

SOPs מבטיחים עקביות ומפחיתים טעויות:

\`\`\`
צור SOP (נוהל עבודה סטנדרטי) עבור הכנה וביצוע ביופסיית עור (shave biopsy) במרפאה. כלול: הכנת ציוד (רשימה מדויקת), חיטוי, הרדמה, ביצוע, שליחה לפתולוגיה (כולל מילוי טופס), הנחיות למטופל, תיעוד במערכת. כלול גם סעיף "מה לעשות אם..." למצבים חריגים (דימום מוגבר, תגובה אלרגית).
\`\`\`

### 8. טופס קבלת מטופל חדש

טופס קבלה טוב חוסך זמן ומבטיח מידע מלא:

\`\`\`
עצב טופס קבלת מטופל חדש (intake form) למרפאת דרמטולוגיה. כלול: פרטים אישיים, היסטוריה רפואית רלוונטית (מחלות עור קודמות, אלרגיות, תרופות), היסטוריה משפחתית (סרטן עור, מלנומה), חשיפה לשמש ושיזוף, סיבת הפנייה הנוכחית, והסכמות (פרטיות, צילום). עצב בפורמט שקל למלא דיגיטלית ובנייר.
\`\`\`

## דוגמה מעשית: אופטימיזציה של תורים

### הבעיה

מרפאת דרמטולוגיה סובלת מ-20% ביטולי תורים (no-shows). כל תור ריק עולה למרפאה כ-500 ש"ח בממוצע. עם 10 תורים ביום, זה אומר הפסד של כ-1,000 ש"ח ביום, או כ-22,000 ש"ח בחודש.

### שלב 1: ניתוח הדפוס

שאלו את Claude לעזור לכם להבין את הבעיה:

\`\`\`
אני מנהל מרפאת עור עם 20% ביטולי תורים. עזור לי ליצור טבלה לניתוח הדפוס: באילו ימים יש הכי הרבה ביטולים? באילו שעות? מטופלים חדשים או חוזרים? כמה זמן מראש נקבע התור? צור טבלת Excel שאוכל למלא למשך חודש כדי לזהות דפוסים.
\`\`\`

### שלב 2: תבניות SMS תזכורת

על סמך הניתוח, צרו תזכורות ממוקדות:

\`\`\`
על סמך הממצא שרוב הביטולים הם בתורי בוקר ביום ראשון, צור מערכת תזכורות: SMS ביום חמישי בצהריים, SMS נוסף ביום ראשון בבוקר ב-7:00. כלול אפשרות לאישור/ביטול/שינוי בלחיצה. כתוב גם הודעה למטופלים שלא אישרו.
\`\`\`

### שלב 3: מדיניות ביטולים גמישה

מדיניות ברורה אבל לא נוקשה:

\`\`\`
עצב מדיניות ביטולים למרפאת עור שהיא: הוגנת למטופלים, מפחיתה no-shows, וקלה למימוש. כלול: חלון ביטול (24 שעות?), מה קורה בביטול מאוחר, חריגים (מצב חירום), תקשורת המדיניות למטופלים (שלט, SMS, אתר).
\`\`\`

### שלב 4: ניהול רשימת המתנה

כשמטופל מבטל — מלאו את המקום מהר:

\`\`\`
עצב מערכת ניהול רשימת המתנה (waitlist) למרפאה: איך מטופלים נרשמים לרשימה, סדר עדיפות (דחיפות רפואית, גמישות זמנים, וותק), תהליך עדכון כשמתפנה תור, ותבניות SMS/WhatsApp להצעת תור פנוי.
\`\`\`

### שלב 5: מדידה ושיפור

אחרי חודש, בדקו אם השיפורים עובדים:

\`\`\`
צור דשבורד (לוח מעקב) פשוט ב-Excel למעקב אחרי מדדי תורים: אחוז ביטולים שבועי, אחוז אישורי SMS, אחוז מילוי מרשימת המתנה, הכנסה שנחסכה. כלול גרף שמשווה חודש נוכחי לחודש קודם. צור עם נוסחאות אוטומטיות.
\`\`\`

## שיטת DermUnbound: ניהול מרפאה חכם

שיטת DermUnbound לניהול מרפאה חכם מבוססת על 5 שלבים מעשיים:

- **שלב 1: מיפוי תהליכים** — לפני שמשפרים, צריך להבין. רשמו את כל התהליכים במרפאה: מרגע שמטופל מתקשר לקבוע תור ועד שהוא יוצא ומקבל מעקב. זהו את "צווארי הבקבוק" (bottlenecks) — הנקודות שבהן דברים נתקעים. בקשו מ-Claude לעזור ליצור תרשים זרימה (flowchart) של כל תהליך
- **שלב 2: תעדוף** — אי אפשר לשפר הכל בבת אחת. סדרו את התהליכים לפי: (א) השפעה כספית, (ב) קלות מימוש, (ג) השפעה על שביעות רצון מטופלים. התחילו מ"ניצחונות מהירים" — שיפורים קטנים שנותנים תוצאות מיידיות
- **שלב 3: יצירת SOPs** — השתמשו ב-Claude ליצירת נוהלי עבודה סטנדרטיים לכל תהליך מרכזי. SOP טוב כולל: מטרת התהליך, מי אחראי, צעדים מפורטים, רשימת ציוד, ו"מה לעשות אם..." למצבים חריגים
- **שלב 4: הכשרת צוות** — אין טעם ב-SOPs אם הצוות לא יודע אותם. השתמשו ב-Claude ליצירת חומרי הדרכה: מצגות, מבחנים קצרים, תרגילי סימולציה. קבעו הדרכה חודשית קבועה
- **שלב 5: מדידה ושיפור** — הגדירו KPIs (מדדי ביצוע) לכל תהליך. מדדו מדי חודש. בקשו מ-Claude לנתח את המגמות ולהציע שיפורים. ניהול מרפאה חכם הוא תהליך מתמשך, לא אירוע חד-פעמי

למידע נוסף: [מחקר DermUnbound](https://kaplanclinic.co.il/he/derm-ai)

## שימושים יצירתיים

- **תיאורי משרה** — בקשו מ-Claude לכתוב מודעת דרושים לאחות מרפאה, מזכירה רפואית, או רופא מתמחה. כללו: תיאור התפקיד, דרישות, תנאים, ותרבות המרפאה
- **סקרי שביעות רצון מטופלים** — צרו סקרים מותאמים וניתחו תוצאות. בקשו מ-Claude לזהות דפוסים ולהציע שיפורים על סמך המשוב
- **לוח תוכן לרשתות חברתיות** — תכננו חודש שלם של פוסטים: טיפים לעור, מאחורי הקלעים, שאלות נפוצות, מבצעים עונתיים. Claude יכול ליצור את כל התוכן
- **פרוטוקולי חירום** — צרו עצי החלטה (decision trees) למצבי חירום: תגובה אלרגית לפרוצדורה, התעלפות מטופל, דימום בלתי נשלט. תלו בכל חדר טיפולים
- **אופטימיזציה של זרימת מטופלים** — תכננו את המסלול הפיזי של המטופל במרפאה: קבלה → חדר המתנה → חדר טיפולים → תשלום → יציאה. זהו צווארי בקבוק ושפרו
- **תבניות שיבוץ צוות** — צרו טבלת משמרות חודשית שמתחשבת בהעדפות, מומחיות, ועומס. Claude יכול ליצור טבלת Excel חכמה
- **מבחני ידע לצוות** — צרו מבחנים קצרים (quizzes) על נהלי המרפאה, בטיחות, ושירות לקוחות. מתאים להדרכות חודשיות
- **ניסוח מדיניות** — בקשו מ-Claude לנסח מדיניות ביטולים, מדיניות תשלום, מדיניות פרטיות, ומדיניות תלונות. התאימו לחוק הישראלי ולאופי המרפאה

## טיפים מתקדמים

- **פרויקט "מנהל מרפאה"** — צרו פרויקט (Project) ב-claude.ai עם כל הפרטים על המרפאה שלכם: גודל, צוות, שירותים, שעות פעילות, אוכלוסיית מטופלים. כך Claude "מכיר" את המרפאה ונותן תשובות מותאמות
- **שדרוג SOPs קיימים** — יש לכם נוהלי עבודה ישנים? העלו אותם ל-claude.ai ובקשו "שפר את ה-SOP הזה: הוסף צעדים חסרים, הבהר שפה, והוסף סעיף 'מה לעשות אם...'"
- **ניתוח נתוני תורים** — אם יש לכם גישה ל-Claude Code (או איש IT שיכול לעזור), תוכלו לנתח נתוני תורים (מאונימיים) כדי לזהות דפוסים: ימים עמוסים, שעות שקטות, עונות שיא
- **נוסחאות Excel** — בקשו מ-Claude ליצור נוסחאות Excel למעקב אחרי מדדים: SUMIFS, COUNTIFS, VLOOKUP, גרפים אוטומטיים. פשוט תארו מה אתם רוצים ו-Claude ייצר את הנוסחה
- **הכנה לביקורות ורגולציה** — בקשו מ-Claude ליצור צ'קליסט לביקורת רגולטורית (מעבדה, משרד הבריאות). Claude מכיר תקנים בינלאומיים ויכול לעזור להתכונן

## פלטפורמה מומלצת

**מה זה "פלטפורמה"?** — הכלי (אפליקציה או אתר) דרכו אתם מדברים עם Claude:

- **Claude Code** — כלי שורת פקודה (command line) שמאפשר ל-Claude לעבוד ישירות עם קבצים במחשב שלכם. מתאים ליצירת אוטומציות, ניתוח נתונים מקבצי Excel, ויצירת סקריפטים. **הסבר פשוט:** זה כמו שיחה עם Claude, אבל Claude יכול גם "לגעת" בקבצים שלכם — לקרוא, לערוך, וליצור. אם אתם לא טכניים, בקשו מאיש ה-IT להתקין ולהגדיר עבורכם
- **claude.ai עם Projects** — האתר הרשמי של Claude, עם תכונת "פרויקטים" שמאפשרת לשמור הקשר בין שיחות. **מתאים ל:** ניהול שוטף של המרפאה — יצירת SOPs, חומרי הדרכה, מדיניות, ותכנון. צרו פרויקט בשם "ניהול מרפאה" עם כל הפרטים שלכם
- **API (ממשק לתוכנות)** — API מאפשר לחבר את Claude למערכות אחרות שאתם כבר משתמשים בהן. **הסבר פשוט:** זה כמו לתת ל-Claude "מספר טלפון" שתוכנות אחרות יכולות להתקשר אליו אוטומטית. למשל: מערכת התורים שולחת נתונים ל-Claude, ו-Claude מכין דוח. **דורש איש IT** להגדרה, אבל אחרי ההגדרה עובד אוטומטית

## 🔒 פרטיות ואבטחה

- **לעולם אל תשתפו רשימות מטופלים או רשומות** עם Claude. ניהול מרפאה לא דורש נתונים ברמת מטופל בודד
- **השתמשו בנתונים מצטברים/מאונימיים בלבד** — במקום "יוסי כהן ביטל 3 פעמים", כתבו "10% מהמטופלים מבטלים יותר מפעם אחת"
- **ניהול מרפאה לא דורש נתוני מטופל** — רוב המשימות התפעוליות (SOPs, צ'קליסטים, תבניות, מדיניות) לא דורשות שום מידע על מטופלים ספציפיים
- **הנחיות DermUnbound** — השתמשו ב-AI לתכנון ואסטרטגיה, לא לעיבוד ישיר של נתוני מטופלים
- **הגנה על מידע פיננסי** — גם נתונים פיננסיים רגישים. שתפו מספרים מצטברים, לא חשבוניות ספציפיות`,
      en: `## Introduction

Running a medical practice involves countless operational tasks beyond patient care: appointment scheduling, staff management, inventory tracking, employee training, financial management, and more. These tasks consume valuable time that could otherwise be spent with patients.

Claude can help streamline operational processes **without directly accessing patient records**. The idea is to use Claude as a planning, writing, and strategy tool — creating templates, protocols, checklists, and work plans that you implement in your clinic. You don't need to be a tech person to get tremendous value from this tool.

## Key Use Cases

- **Appointment optimization** — Creating strategies to reduce no-shows, improve patient flow, and plan the workday more efficiently. Claude can help design scheduling policies, SMS reminder templates, and waitlist management methods
- **Process automation (making manual tasks automatic)** — Automation doesn't have to be complicated. Claude can help plan simple automated processes: appointment reminders, weekly reports, letter templates. If technical implementation is needed, you can hand the plan to your IT person
- **Staff training** — Creating training materials, protocols (written work procedures), SOPs (Standard Operating Procedures — documents describing step-by-step how to perform a task), and knowledge quizzes for clinic staff
- **Inventory management** — Creating tracking systems for medical supplies, reorder reminders, and equipment lists. Claude can create Excel or Google Sheets tables with automatic formulas for inventory management
- **Financial management** — Creating monthly report templates, revenue and expense tracking, cost-benefit analysis for new services, and budget planning. Claude can create tables and formulas — you just fill in the numbers
- **Patient experience improvement** — Designing the visit process from arrival to departure: intake forms, patient flow, satisfaction surveys, and follow-up communication
- **Website and digital presence** — Creating content for the clinic website, service pages, and information for potential patients. Claude can write professional copy suitable for physicians

## Key Concepts

Terms you'll encounter when discussing smart practice management — explained in plain language:

- **Automation** — Making manual processes automatic. For example: instead of the receptionist calling each patient to remind them of an appointment, the system sends an automatic SMS. **No programming knowledge required** — Claude can plan the process and an IT person can implement it
- **SOP (Standard Operating Procedure)** — A document describing step-by-step how to perform a specific task. For example: "Room preparation procedure" or "New patient intake procedure." SOPs ensure everyone on the team does things the same way, every time
- **CRM (Customer Relationship Management)** — A system that helps track patients and communication with them. In a medical context: when the patient last visited, when follow-up is needed, what treatments were done. You probably already use something similar through your EMR software
- **KPI (Key Performance Indicator)** — A number that measures success. For example: "appointment cancellation rate" (lower is better), "average wait time," "number of patients per day." KPIs help you know if the clinic is running well and where improvement is needed
- **API (Application Programming Interface)** — An interface that allows software programs to "talk" to each other. Like a translator between different systems. For example: the scheduling system "talks" to the SMS system to send automatic reminders. **You don't need to understand this technically** — just know it's possible and ask your IT person
- **Script** — A file with a sequence of commands that run automatically. Like a "recipe" for the computer — it follows the instructions step by step. You can ask Claude to write a script and hand it to your IT person for implementation

## Example Prompts

### 1. Appointment Reminder SMS Templates

Appointment cancellations cost the clinic money and waste time. SMS reminders are proven to be one of the most effective tools for reducing no-shows:

\`\`\`
Create 5 SMS templates for appointment reminders at a dermatology clinic. For each template: a version for the day before, and a version for 3 hours before. Tone: warm and professional. Include a link for confirmation/cancellation (placeholder). Include an Arabic version too. Keep maximum length of 160 characters per SMS.
\`\`\`

### 2. Daily Clinic Opening Checklist

A daily checklist ensures nothing is forgotten:

\`\`\`
Design a detailed daily opening checklist for a dermatology clinic. Include: treatment room preparation (equipment, disinfection supplies, lighting), device checks (dermatoscope, cryotherapy unit, Wood's lamp), consumable inventory check, review of today's patient list, patient file preparation, and IT systems startup. Split into: "Before opening doors" and "First 15 minutes."
\`\`\`

### 3. New Employee Onboarding Manual

Good onboarding ensures the employee becomes productive quickly and correctly:

\`\`\`
Create an onboarding guide for a new employee at a dermatology clinic. Include: first week (meet the team, clinic tour, IT systems, emergency procedures), first month (learning procedures, observing treatments, scheduling system training), first 3 months (full independence, performance review). Include checklists for each phase.
\`\`\`

### 4. Patient Satisfaction Survey

A satisfaction survey helps identify problems and improve service:

\`\`\`
Design a short patient satisfaction survey (10 questions maximum) for a dermatology clinic. Include: treatment satisfaction, wait time, staff communication, clinic cleanliness, ease of booking, and likelihood to recommend (NPS). Include one open-ended question. Design for Google Forms or Typeform.
\`\`\`

### 5. Monthly Financial Report Template

Regular financial tracking prevents surprises and enables planning:

\`\`\`
Create a monthly financial report template for a private dermatology clinic. Include: revenue by treatment type, fixed expenses (salary, rent, insurance), variable expenses (supplies, disposables), gross and net profit, comparison to previous month and budget. Create as an Excel table with formulas.
\`\`\`

### 6. Phone Scheduling Script

A good scheduling call affects the patient experience:

\`\`\`
Write a phone script for appointment scheduling at a dermatology clinic. Include: greeting, initial questions (new/returning patient, reason for visit, urgency), appointment offer, detail confirmation, preparation instructions if needed, and farewell. Include responses for special situations: stressed patient, urgent request, complaint.
\`\`\`

### 7. Standard Operating Procedures

SOPs ensure consistency and reduce errors:

\`\`\`
Create an SOP (Standard Operating Procedure) for preparing and performing a shave biopsy at the clinic. Include: equipment preparation (precise list), disinfection, anesthesia, execution, pathology submission (including form completion), patient instructions, system documentation. Include a "what to do if..." section for unusual situations (excessive bleeding, allergic reaction).
\`\`\`

### 8. New Patient Intake Form

A good intake form saves time and ensures complete information:

\`\`\`
Design a new patient intake form for a dermatology clinic. Include: personal details, relevant medical history (previous skin conditions, allergies, medications), family history (skin cancer, melanoma), sun exposure and tanning, current reason for visit, and consents (privacy, photography). Design in a format easy to fill out both digitally and on paper.
\`\`\`

## Practical Example: Appointment Optimization

### The Problem

A dermatology clinic suffers from 20% appointment no-shows. Each empty slot costs the clinic approximately $150 on average. With 10 appointments per day, that means a loss of about $300 per day, or roughly $6,600 per month.

### Step 1: Analyze the Pattern

Ask Claude to help you understand the problem:

\`\`\`
I manage a dermatology clinic with 20% appointment no-shows. Help me create a table to analyze the pattern: which days have the most cancellations? Which hours? New or returning patients? How far in advance was the appointment booked? Create an Excel table I can fill in for a month to identify patterns.
\`\`\`

### Step 2: SMS Reminder Templates

Based on the analysis, create targeted reminders:

\`\`\`
Based on the finding that most cancellations are for Monday morning appointments, create a reminder system: SMS on Thursday afternoon, another SMS on Monday morning at 7:00 AM. Include option to confirm/cancel/reschedule with one click. Also write a message for patients who haven't confirmed.
\`\`\`

### Step 3: Flexible Cancellation Policy

A clear but not rigid policy:

\`\`\`
Design a cancellation policy for a dermatology clinic that is: fair to patients, reduces no-shows, and easy to implement. Include: cancellation window (24 hours?), what happens with late cancellation, exceptions (emergencies), communicating the policy to patients (sign, SMS, website).
\`\`\`

### Step 4: Waitlist Management

When a patient cancels, fill the slot quickly:

\`\`\`
Design a waitlist management system for the clinic: how patients sign up for the list, priority order (medical urgency, time flexibility, seniority), notification process when a slot opens, and SMS/WhatsApp templates for offering available appointments.
\`\`\`

### Step 5: Measure and Improve

After a month, check if the improvements are working:

\`\`\`
Create a simple Excel dashboard for tracking appointment metrics: weekly cancellation rate, SMS confirmation rate, waitlist fill rate, revenue saved. Include a chart comparing current month to previous month. Create with automatic formulas.
\`\`\`

## The DermUnbound Method: Smart Practice Management

The DermUnbound method for smart practice management is based on 5 practical steps:

- **Step 1: Process Mapping** — Before improving, you need to understand. Document all processes in the clinic: from the moment a patient calls to book an appointment until they leave and receive follow-up. Identify "bottlenecks" — points where things get stuck. Ask Claude to help create a flowchart of each process
- **Step 2: Prioritization** — You can't improve everything at once. Rank processes by: (a) financial impact, (b) ease of implementation, (c) impact on patient satisfaction. Start with "quick wins" — small improvements that yield immediate results
- **Step 3: Create SOPs** — Use Claude to create Standard Operating Procedures for every key process. A good SOP includes: purpose of the process, who's responsible, detailed steps, equipment list, and "what to do if..." for unusual situations
- **Step 4: Staff Training** — SOPs are useless if staff doesn't know them. Use Claude to create training materials: presentations, short quizzes, simulation exercises. Schedule regular monthly training sessions
- **Step 5: Measure and Improve** — Define KPIs (performance metrics) for each process. Measure monthly. Ask Claude to analyze trends and suggest improvements. Smart practice management is an ongoing process, not a one-time event

For more information: [DermUnbound Research](https://kaplanclinic.co.il/en/derm-ai)

## Creative Uses

- **Job descriptions** — Ask Claude to write job postings for a clinic nurse, medical receptionist, or resident. Include: role description, requirements, conditions, and clinic culture
- **Patient satisfaction surveys** — Create customized surveys and analyze results. Ask Claude to identify patterns and suggest improvements based on feedback
- **Social media content calendar** — Plan a full month of posts: skin tips, behind the scenes, FAQs, seasonal promotions. Claude can create all the content
- **Emergency protocols** — Create decision trees for emergency situations: allergic reaction to a procedure, patient fainting, uncontrolled bleeding. Post in every treatment room
- **Patient flow optimization** — Plan the physical path of the patient through the clinic: reception → waiting room → treatment room → payment → exit. Identify bottlenecks and improve
- **Staff scheduling templates** — Create monthly shift tables that account for preferences, specialties, and workload. Claude can create a smart Excel table
- **Staff knowledge quizzes** — Create short quizzes about clinic procedures, safety, and customer service. Perfect for monthly training sessions
- **Policy drafting** — Ask Claude to draft cancellation policies, payment policies, privacy policies, and complaint policies. Adapt to local law and your clinic's character

## Advanced Tips

- **"Clinic Manager" Project** — Create a Project in claude.ai with all your clinic details: size, staff, services, hours, patient demographics. This way Claude "knows" your clinic and gives tailored answers
- **Upgrade existing SOPs** — Have old work procedures? Upload them to claude.ai and ask "Improve this SOP: add missing steps, clarify language, and add a 'what to do if...' section"
- **Appointment data analysis** — If you have access to Claude Code (or an IT person who can help), you can analyze appointment data (anonymized) to identify patterns: busy days, quiet hours, peak seasons
- **Excel formulas** — Ask Claude to create Excel formulas for tracking metrics: SUMIFS, COUNTIFS, VLOOKUP, automatic charts. Simply describe what you want and Claude will generate the formula
- **Audit preparation** — Ask Claude to create a regulatory audit checklist (laboratory, health ministry). Claude knows international standards and can help prepare

## Recommended Platform

**What is a "platform"?** — The tool (app or website) you use to talk to Claude:

- **Claude Code** — A command-line tool that lets Claude work directly with files on your computer. Suitable for creating automations, analyzing data from Excel files, and creating scripts. **Simple explanation:** It's like chatting with Claude, but Claude can also "touch" your files — read, edit, and create them. If you're not technical, ask your IT person to install and set it up for you
- **claude.ai with Projects** — Claude's official website, with a "Projects" feature that saves context between conversations. **Best for:** ongoing clinic management — creating SOPs, training materials, policies, and planning. Create a project called "Clinic Management" with all your details
- **API (software interface)** — API allows connecting Claude to other systems you already use. **Simple explanation:** It's like giving Claude a "phone number" that other software can call automatically. For example: the scheduling system sends data to Claude, and Claude prepares a report. **Requires IT person** to set up, but after setup it runs automatically

## 🔒 Privacy and Security

- **Never share patient lists or records** with Claude. Practice management doesn't require individual patient-level data
- **Use only aggregate/anonymized data** — Instead of "John Smith cancelled 3 times," write "10% of patients cancel more than once"
- **Practice management doesn't need patient data** — Most operational tasks (SOPs, checklists, templates, policies) don't require any information about specific patients
- **DermUnbound guidelines** — Use AI for planning and strategy, not for directly processing patient data
- **Protect financial information** — Financial data is also sensitive. Share aggregate numbers, not specific invoices`,
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
      he: `## מבוא

שיווק רפואי הוא אתגר ייחודי: צריך למצוא את האיזון בין מקצועיות ואתיקה לבין תוכן מעניין ומושך. רופאים רבים מרגישים אי-נוחות עם שיווק — זה נראה "לא רפואי" או אפילו לא אתי. אבל המציאות היא שבעולם הדיגיטלי, מטופלים מחפשים מידע אונליין לפני שהם בוחרים רופא. אם אתם לא שם — הם ימצאו מישהו אחר.

Claude יכול להפוך את השיווק הרפואי לקל ונעים. במקום לנסות "למכור", Claude עוזר לכם ליצור **תוכן חינוכי** שמעמיד אתכם כסמכות מקצועית בתחומכם. כשמטופל קורא מאמר שכתבתם (בעזרת Claude) על הגנה מהשמש — הוא לומד משהו חשוב, ובמקביל מכיר אתכם כמומחים.

**השיווק הרפואי הטוב ביותר הוא חינוך.** זהו העיקרון המנחה של הגישה שלנו.

## שימושים עיקריים

- **תוכן לאתר המרפאה** — דפי שירות (למשל: "טיפול בפסוריאזיס"), תיאורי טיפולים, דף "אודות הרופא", דפי נחיתה (דף שמיועד לגרום למבקר לבצע פעולה אחת, כמו קביעת תור). Claude יכול לכתוב תוכן שהוא גם מקצועי רפואית וגם מותאם למנועי חיפוש
- **פוסטים חינוכיים לרשתות חברתיות** — תוכן לאינסטגרם (פוסטים, סטוריז, קרוסלות), פייסבוק (פוסטים ארוכים, סרטונים), לינקדאין (מאמרים מקצועיים, עדכונים), TikTok (תסריטים לסרטוני 60 שניות). Claude מייצר תוכן מותאם לכל פלטפורמה בנפרד
- **SEO רפואי** — SEO (אופטימיזציה למנועי חיפוש) פירושו לגרום לאתר שלכם להופיע גבוה בגוגל כשמישהו מחפש "רופא עור בתל אביב" או "הסרת שומות". Claude עוזר לכתוב תוכן שכולל את המילים הנכונות שאנשים מחפשים
- **שיווק באימייל** — ניוזלטרים חודשיים (עדכונים שנשלחים למנויים), תזכורות תור, מבצעים עונתיים (הגנה מהשמש בקיץ, טיפוח עור בחורף), הודעות על טיפולים חדשים
- **ניהול מוניטין אונליין** — תגובות מקצועיות לביקורות באינטרנט (גוגל, Facebook), בניית מוניטין חיובי, טיפול בביקורות שליליות בצורה מכובדת ואתית
- **חומרי שיווק מודפסים** — ברושורים, פלאיירים, פוסטרים למרפאה, כרטיסי ביקור עם מסרים שיווקיים
- **וידאו מרקטינג** — תסריטים לסרטוני הסבר ביוטיוב, תיאורים לסרטונים, רעיונות לסדרות וידאו חינוכיות

## מושגי מפתח

אם אתם לא אנשי טכנולוגיה — אל דאגה. הנה הסבר פשוט למונחים שתפגשו בעולם השיווק הדיגיטלי:

- **SEO (אופטימיזציה למנועי חיפוש)** — כשמטופל מחפש בגוגל "רופא עור בירושלים", גוגל מחליט אילו אתרים להציג ראשונים. SEO זה אוסף של טכניקות שעוזרות לאתר שלכם להופיע גבוה ברשימה. למשל: שימוש במילים שאנשים מחפשים, כתיבת תוכן איכותי, ותיאורים ברורים של השירותים שלכם. Claude יכול לכתוב תוכן שמותאם ל-SEO מבלי שתצטרכו להבין את הטכניקה בעצמכם

- **CTA (קריאה לפעולה)** — הכפתור או המשפט שאומר לקורא מה לעשות עכשיו. למשל: "קבעו תור", "התקשרו עכשיו", "הורידו את המדריך". בלי CTA, מבקר באתר קורא ועוזב. עם CTA טוב, הוא הופך למטופל

- **Content Marketing (שיווק תוכן)** — גישה שבה במקום לפרסם מודעות ("הרופא הכי טוב בעיר!"), אתם מפרסמים תוכן חינוכי שעוזר לאנשים ("5 סימנים שהשומה שלכם צריכה בדיקה"). אנשים שמקבלים ערך ממכם סומכים עליכם ובוחרים בכם כרופאים

- **Engagement (מעורבות)** — המדד לכמה אנשים מגיבים לתוכן שלכם ברשתות חברתיות: לייקים, תגובות, שיתופים, שמירות. engagement גבוה אומר שהתוכן שלכם מעניין ומגיע ליותר אנשים. Claude יכול לעזור לכתוב תוכן שמעודד מעורבות

- **Hashtags (תגיות)** — מילות מפתח עם # לפניהן, כמו #רופאעור #דרמטולוגיה #הגנהמהשמש. הן עוזרות לאנשים שמחפשים נושאים ספציפיים ברשתות חברתיות למצוא את התוכן שלכם. Claude ממליץ על hashtags רלוונטיים לכל פוסט

- **Landing Page (דף נחיתה)** — דף אינטרנט ספציפי שנועד לגרום למבקר לעשות דבר אחד: לקבוע תור, להשאיר פרטים, או להוריד מדריך. בניגוד לדף רגיל באתר שיש בו הרבה קישורים, דף נחיתה ממוקד בפעולה אחת בלבד

- **Conversion (המרה)** — כשמבקר באתר הופך למטופל (קובע תור, מתקשר, משאיר פרטים). "שיעור המרה" הוא אחוז המבקרים שמבצעים את הפעולה הרצויה. למשל, אם מ-100 מבקרים באתר 3 קובעים תור, שיעור ההמרה הוא 3%

- **Artifacts** — פיצ'ר מיוחד ב-claude.ai שמראה את התוכן ש-Claude יוצר בתצוגה ויזואלית בזמן אמת, בצד ימין של המסך. למשל, אם תבקשו מ-Claude לכתוב פוסט — תוכלו לראות אותו מעוצב ומוכן לפני שאתם מעתיקים אותו

## פרומפטים לדוגמה

הנה דוגמאות לפרומפטים שתוכלו להשתמש בהם. פשוט העתיקו ושנו לפי הצורך:

\`\`\`
כתוב פוסט אינסטגרם חינוכי על מניעת סרטן עור. הטון: מקצועי אך נגיש, מעודד פעולה. כלול 5 hashtags רלוונטיים בעברית ובאנגלית. הוסף CTA (קריאה לפעולה) לקביעת בדיקה שנתית.
\`\`\`
**הסבר:** פוסט כזה מחנך את הציבור וגם מביא תורים. Claude ייצור טקסט שמתאים לאינסטגרם (קצר, ויזואלי, עם hashtags).

\`\`\`
צור לוח תוכן חודשי לרשתות חברתיות למרפאת דרמטולוגיה. 4 שבועות, 3 פוסטים בשבוע. מגוון נושאים: טיפים לעור, מיתוסים נפוצים, הסברים על טיפולים, תוכן עונתי. כלול פלטפורמה מומלצת לכל פוסט.
\`\`\`
**הסבר:** לוח תוכן (Content Calendar) זה תכנית שמפרטת מה לפרסם, מתי, ובאיזו פלטפורמה. זה חוסך את הצורך לחשוב כל יום "מה לפרסם".

\`\`\`
כתוב תוכן לדף שירות "ניתוח Mohs" באתר מרפאת עור. כלול: הסבר על הטיפול בשפה נגישה, למי זה מתאים, מה לצפות, זמן החלמה, ו-SEO (שלב מילות מפתח רלוונטיות כמו "ניתוח Mohs בישראל", "הסרת סרטן עור").
\`\`\`
**הסבר:** דף שירות טוב מושך מטופלים מגוגל ועונה על שאלות שלהם לפני שהם מתקשרים.

\`\`\`
כתוב ניוזלטר חודשי למרפאת עור. נושא: חידושים בטיפולי עור לקיץ 2026. כלול 3 מאמרים קצרים, טיפ אחד מעשי, ו-CTA לקביעת תור.
\`\`\`
**הסבר:** ניוזלטר (Newsletter) הוא מייל שנשלח באופן קבוע לרשימת מנויים. זה שומר על קשר עם מטופלים קיימים ומזכיר להם שאתם שם.

\`\`\`
כתוב פוסט מקצועי ללינקדאין על כנס דרמטולוגיה שהשתתפתי בו. הטון: מקצועי, אישי, משדר מומחיות. 200-300 מילים.
\`\`\`
**הסבר:** לינקדאין הוא הרשת המקצועית — מתאים לתוכן שמעמיד אתכם כמומחים בפני קולגות ומטופלים פוטנציאליים.

\`\`\`
צור פוסטים ל-Google My Business למרפאת עור. 4 פוסטים: חדשות, אירוע, הצעה, עדכון. כלול תמונה מומלצת לכל אחד.
\`\`\`
**הסבר:** Google My Business (גוגל לעסק שלי) הוא הפרופיל שמופיע כשמחפשים את המרפאה שלכם בגוגל. פוסטים שם משפרים את הנראות בחיפוש.

\`\`\`
כתוב תבנית בקשה מנומסת ואתית לביקורת (review) ממטופל מרוצה. כלול הסבר למה ביקורות חשובות, וקישור ישיר לגוגל. שמור על אתיקה — בלי לחץ.
\`\`\`
**הסבר:** ביקורות חיוביות בגוגל הן מהכלים השיווקיים החזקים ביותר. בקשה מנומסת אחרי טיפול מוצלח היא לגיטימית ואתית.

\`\`\`
צור דף שאלות נפוצות (FAQ) לאתר מרפאת עור. כלול 15 שאלות נפוצות על: תורים, ביטוחים, הכנה לטיפולים, זמני החלמה, תשלום. כתוב בשפה נגישה.
\`\`\`
**הסבר:** דף FAQ טוב מפחית שיחות טלפון למזכירות, משפר SEO, ונותן מענה מיידי למטופלים.

\`\`\`
עצב תוכן לפוסטר לחדר המתנה על הגנה מהשמש. כלול: 5 טיפים עיקריים, גרפיקה פשוטה, מסר מרכזי. בעברית, מותאם להדפסה בגודל A3.
\`\`\`
**הסבר:** חומרי הסבר בחדר ההמתנה הם שיווק "שקט" — מחנכים מטופלים ומחזקים את המיתוג שלכם.

\`\`\`
כתוב תיאורי וידאו ליוטיוב לסדרת סרטונים חינוכיים על בריאות העור. 5 סרטונים. כלול: כותרת מושכת, תיאור עם מילות מפתח, תגיות מומלצות.
\`\`\`
**הסבר:** יוטיוב הוא מנוע חיפוש (השני בגודלו אחרי גוגל). סרטונים חינוכיים מביאים מטופלים ובונים אמון.

## דוגמה מעשית: בניית נוכחות דיגיטלית

נניח שאתם רופאי עור ורוצים להתחיל לפרסם תוכן חינוכי באינסטגרם. הנה תהליך שלם עם Claude:

**שלב 1: יצירת לוח תוכן**
בקשו מ-Claude: "צור לוח תוכן ל-4 שבועות לאינסטגרם של מרפאת דרמטולוגיה. 3 פוסטים בשבוע. נושאים: הגנה מהשמש, אקנה, שומות, טיפוח עור."

Claude ייצור טבלה עם תאריכים, נושאים, סוגי פוסטים (טיפ, מיתוס, הסבר), ופלטפורמה מומלצת.

**שלב 2: יצירת הפוסטים**
לכל פוסט בלוח, בקשו מ-Claude לכתוב את הטקסט המלא: "כתוב את פוסט #1 מהלוח: טיפ על הגנה מהשמש. כלול: טקסט, hashtags, CTA, והנחיה לתמונה."

**שלב 3: יצירת קול מותג (Brand Voice)**
בקשו מ-Claude: "צור מסמך 'קול מותג' למרפאה שלי. הטון שלי: מקצועי אך חם, מבוסס מדע, ישיר, ללא שפה מפחידה."

שמרו מסמך זה בפרויקט Claude (ראו "פלטפורמה מומלצת") כדי ש-Claude תמיד ישתמש בטון הנכון.

**שלב 4: תסריטי וידאו**
בקשו: "כתוב תסריט לסרטון אינסטגרם של 60 שניות: '3 דברים שרופא עור רוצה שתדעו על קרם הגנה'. טון קליל ומקצועי."

**שלב 5: ניתוח ושיפור**
אחרי חודש, שתפו עם Claude את הנתונים (אילו פוסטים קיבלו הכי הרבה לייקים) ובקשו: "על סמך הביצועים, מה כדאי לשנות בלוח התוכן לחודש הבא?"

## שיטת DermUnbound: שיווק רפואי אתי

גישת DermUnbound לשיווק רפואי מבוססת על 6 עקרונות:

- **עקרון 1: חינוך לפני שיווק** — כל פיסת תוכן צריכה ללמד את הקורא משהו חדש. אם המטופל לא יוצא חכם יותר אחרי הקריאה — התוכן לא טוב מספיק. שיווק שמבוסס על חינוך בונה אמון לטווח ארוך

- **עקרון 2: דיוק רפואי** — כל טענה בתוכן השיווקי חייבת להיות מבוססת רפואית. בקשו מ-Claude לכלול מקורות (references) כשהוא כותב תוכן עם טענות רפואיות. זכרו: Claude יכול לטעות — תמיד בדקו מידע רפואי

- **עקרון 3: שקיפות** — היו שקופים לגבי טיפולים, תוצאות, ומגבלות. אל תבטיחו "ריפוי מוחלט" או "תוצאות מובטחות". מטופלים מעריכים כנות

- **עקרון 4: פרטיות** — לעולם אל תשתמשו בתמונות או סיפורים של מטופלים ללא הסכמה כתובה ומפורשת. גם אם המטופל הסכים בעל פה — דרושה הסכמה בכתב

- **עקרון 5: אתיקה מקצועית** — עקבו אחרי הנחיות הפרסום של הר"י (הסתדרות הרפואית בישראל) ושל לשכת רופאי העור. הימנעו מהשוואות עם רופאים אחרים, התחייבות לתוצאות, או שיווק אגרסיבי

- **עקרון 6: ערך אמיתי** — כל תוכן שאתם מפרסמים צריך לעזור באמת לאנשים. שאלו את עצמכם: "האם הייתי רוצה שהמטופלים שלי יקראו את זה?" אם התשובה כן — פרסמו

[מחקר DermUnbound](https://kaplanclinic.co.il/he/derm-ai)

## שימושים יצירתיים

- **מסמך "קול מותג"** — צרו מסמך שמגדיר את הטון, הסגנון, והערכים של המרפאה. שמרו אותו בפרויקט Claude כדי שכל תוכן שנוצר יהיה עקבי
- **ניתוח מתחרים** — בקשו מ-Claude לנתח אתרי מרפאות מתחרות ולמצוא פערים בתוכן שאתם יכולים למלא
- **תוכן עונתי** — צרו סדרות תוכן לפי עונות: הגנה מהשמש בקיץ, טיפוח עור יבש בחורף, אלרגיות באביב
- **סדרת הסברים** — קרוסלת אינסטגרם של 5 שקפים: "5 מיתוסים על קרם הגנה" או "מה באמת גורם לאקנה"
- **הודעות לעיתונות** — לטיפולים חדשים, ציוד חדש, או אירועי מרפאה
- **תוכן לציוני דרך** — יום השנה למרפאה, 1000 מטופלים, שנה של פעילות
- **תכנית הפניות** — חומרים לעידוד מטופלים להפנות חברים ומשפחה
- **אירועים קהילתיים** — רעיונות ליום עיון פתוח, סדנת הגנה מהשמש, הרצאה בבית ספר
- **תבניות מקרי בוחן** — הצגת לפני/אחרי (with consent) בפורמט מקצועי ואתי

## טיפים מתקדמים

- **העלו תוכן קיים לשיפור** — העלו את תוכן האתר הנוכחי שלכם ל-Claude ובקשו הצעות לשיפור, עדכון, והתאמה ל-SEO
- **השתמשו ב-Artifacts** — ב-claude.ai, פיצ'ר Artifacts מציג את התוכן ש-Claude יוצר בתצוגה ויזואלית בזמן אמת בצד ימין של המסך. זה מאפשר לראות איך הפוסט ייראה לפני שאתם מעתיקים
- **טון שונה לפלטפורמות שונות** — בקשו מ-Claude לכתוב את אותו מסר בטונים שונים: רשמי ללינקדאין, קליל לאינסטגרם, מידעי לאתר
- **מקורות רפואיים** — בקשו מ-Claude לכלול מקורות רפואיים בתוכן חינוכי. זה מוסיף אמינות ומבדל אתכם מתוכן לא-מקצועי
- **A/B Testing** — בקשו מ-Claude ליצור 2-3 גרסאות של כותרת או CTA ובדקו מה עובד טוב יותר. A/B Testing פירושו לנסות שתי גרסאות ולראות איזו מביאה תוצאות טובות יותר
- **תכנון לטווח ארוך** — בקשו מ-Claude ליצור אסטרטגיית תוכן ל-3 חודשים קדימה, לא רק פוסט אחד
- **שימוש חוזר בתוכן** — בקשו מ-Claude להפוך מאמר ארוך ל-5 פוסטים קצרים, או סרטון ל-3 ציטוטים ויזואליים

## פלטפורמה מומלצת

**מה זה "פלטפורמה"?** — הכלי (אתר או אפליקציה) דרכו אתם עובדים עם Claude. הנה ההמלצות לשיווק:

- **claude.ai עם Artifacts** — הפלטפורמה הטובה ביותר ליצירת תוכן שיווקי. **Artifacts** הוא פיצ'ר ייחודי: כש-Claude יוצר תוכן, הוא מוצג בחלון ויזואלי נפרד בצד ימין של המסך. אתם יכולים לראות את הפוסט/מסמך מעוצב בזמן אמת, לבקש שינויים, ולהעתיק את הגרסה הסופית
- **Claude Projects** — "פרויקטים" הם תכונה שמאפשרת לשמור הנחיות קבועות. שמרו את מסמך קול המותג, מידע על המרפאה, וסגנון הכתיבה — ו-Claude תמיד יידע את הסגנון שלכם בלי שתצטרכו להסביר מחדש
- **Claude Mobile** — אפליקציית Claude בטלפון. מושלמת לכתיבת כיתוב (caption) מהיר לתמונה שצילמתם, או רעיון לפוסט שעלה לכם בדרך

## 🔒 פרטיות ואבטחה

- **לעולם אל תשתמשו בתמונות מטופלים** ללא הסכמה כתובה ומפורשת — גם לא תמונות "אנונימיות" שאפשר לזהות לפיהן
- **אל תבטיחו תוצאות טיפול** — זה לא אתי ולא חוקי. כתבו "התוצאות משתנות ממטופל למטופל"
- **עקבו אחרי הנחיות הפרסום של הר"י** — ההסתדרות הרפואית בישראל מפרסמת כללים ברורים לגבי פרסום רפואי
- **אל תשתפו המלצות מטופלים** ללא הסכמה מפורשת בכתב
- **בדקו כל טענה רפואית** בחומרי השיווק — Claude יכול לטעות, ואתם אחראים על הדיוק
- **שקיפות לגבי AI** — שקלו לציין כשתוכן נוצר בעזרת AI, בהתאם לנורמות המתפתחות בתחום`,
      en: `## Introduction

Medical marketing is a unique challenge: you need to balance professionalism and ethics with engaging, attractive content. Many physicians feel uncomfortable with marketing — it seems "unmedical" or even unethical. But the reality is that in the digital world, patients search for information online before choosing a physician. If you're not there, they'll find someone else.

Claude can make medical marketing easy and natural. Instead of trying to "sell," Claude helps you create **educational content** that positions you as a professional authority in your field. When a patient reads an article you wrote (with Claude's help) about sun protection — they learn something important, and at the same time, they get to know you as an expert.

**The best medical marketing is education.** This is the guiding principle of our approach.

## Key Use Cases

- **Clinic website content** — Service pages (e.g., "Psoriasis Treatment"), treatment descriptions, "About the Doctor" page, landing pages (a page designed to get the visitor to take one action, like booking an appointment). Claude can write content that is both medically professional and optimized for search engines
- **Educational social media posts** — Content for Instagram (posts, stories, carousels), Facebook (long posts, videos), LinkedIn (professional articles, updates), TikTok (60-second video scripts). Claude generates content tailored to each platform
- **Medical SEO** — SEO (Search Engine Optimization) means making your website appear high in Google when someone searches "dermatologist near me" or "mole removal." Claude helps write content that includes the right keywords people search for
- **Email marketing** — Monthly newsletters (updates sent to subscribers), appointment reminders, seasonal campaigns (sun protection in summer, skin care in winter), announcements about new treatments
- **Online reputation management** — Professional responses to online reviews (Google, Facebook), building positive reputation, handling negative reviews gracefully and ethically
- **Printed marketing materials** — Brochures, flyers, posters for the clinic, business cards with marketing messages
- **Video marketing** — Scripts for educational YouTube videos, video descriptions, ideas for educational video series

## Key Concepts

If you're not a tech person — don't worry. Here's a simple explanation of terms you'll encounter in the digital marketing world:

- **SEO (Search Engine Optimization)** — When a patient searches Google for "dermatologist in my area," Google decides which websites to show first. SEO is a set of techniques that help your website appear high on the list. For example: using words people search for, writing quality content, and clear descriptions of your services. Claude can write SEO-optimized content without you needing to understand the technique yourself

- **CTA (Call to Action)** — The button or sentence that tells the reader what to do now. For example: "Book an appointment," "Call now," "Download the guide." Without a CTA, a website visitor reads and leaves. With a good CTA, they become a patient

- **Content Marketing** — An approach where instead of publishing ads ("The best doctor in town!"), you publish educational content that helps people ("5 signs your mole needs checking"). People who receive value from you trust you and choose you as their physician

- **Engagement** — The measure of how much people interact with your social media content: likes, comments, shares, saves. High engagement means your content is interesting and reaches more people. Claude can help write content that encourages engagement

- **Hashtags** — Keywords preceded by #, like #dermatology #skinhealth #sunprotection. They help people searching for specific topics on social media find your content. Claude recommends relevant hashtags for each post

- **Landing Page** — A specific web page designed to get the visitor to do one thing: book an appointment, leave their details, or download a guide. Unlike a regular website page with many links, a landing page focuses on a single action

- **Conversion** — When a website visitor becomes a patient (books an appointment, calls, leaves their details). "Conversion rate" is the percentage of visitors who take the desired action. For example, if 3 out of 100 website visitors book an appointment, the conversion rate is 3%

- **Artifacts** — A special feature in claude.ai that shows the content Claude creates in a visual preview in real time, on the right side of the screen. For example, if you ask Claude to write a post — you can see it formatted and ready before you copy it

## Example Prompts

Here are example prompts you can use. Simply copy and modify as needed:

\`\`\`
Write an educational Instagram post about skin cancer prevention. Tone: professional but accessible, encouraging action. Include 5 relevant hashtags. Add a CTA (call to action) for booking an annual checkup.
\`\`\`
**Explanation:** Such a post educates the public and also brings appointments. Claude will create text suited for Instagram (short, visual, with hashtags).

\`\`\`
Create a monthly social media content calendar for a dermatology clinic. 4 weeks, 3 posts per week. Varied topics: skin tips, common myths, treatment explanations, seasonal content. Include recommended platform for each post.
\`\`\`
**Explanation:** A content calendar is a plan that details what to publish, when, and on which platform. It saves the daily question of "what should I post?"

\`\`\`
Write website copy for a "Mohs Surgery" service page. Include: explanation of the treatment in accessible language, who it's for, what to expect, recovery time, and SEO (integrate relevant keywords like "Mohs surgery," "skin cancer removal").
\`\`\`
**Explanation:** A good service page attracts patients from Google and answers their questions before they call.

\`\`\`
Write a monthly email newsletter for a dermatology clinic. Topic: New skin treatments for Summer 2026. Include 3 short articles, one practical tip, and a CTA for booking an appointment.
\`\`\`
**Explanation:** A newsletter is an email sent regularly to a subscriber list. It maintains contact with existing patients and reminds them you're there.

\`\`\`
Write a professional LinkedIn post about a dermatology conference I attended. Tone: professional, personal, conveying expertise. 200-300 words.
\`\`\`
**Explanation:** LinkedIn is the professional network — suitable for content that positions you as an expert among colleagues and potential patients.

\`\`\`
Create Google My Business posts for a dermatology practice. 4 posts: news, event, offer, update. Include recommended image description for each.
\`\`\`
**Explanation:** Google My Business is the profile that appears when someone searches for your clinic on Google. Posts there improve your visibility in search.

\`\`\`
Write a polite and ethical template for requesting a review from a satisfied patient. Include an explanation of why reviews matter, and a direct link to Google. Maintain ethics — no pressure.
\`\`\`
**Explanation:** Positive Google reviews are among the most powerful marketing tools. A polite request after successful treatment is legitimate and ethical.

\`\`\`
Create an FAQ page for a dermatology clinic website. Include 15 common questions about: appointments, insurance, treatment preparation, recovery times, payment. Write in accessible language.
\`\`\`
**Explanation:** A good FAQ page reduces phone calls to the front desk, improves SEO, and provides immediate answers to patients.

\`\`\`
Design content for a waiting room poster about sun protection. Include: 5 main tips, simple graphics, key message. In English, sized for A3 printing.
\`\`\`
**Explanation:** Educational materials in the waiting room are "quiet" marketing — they educate patients and strengthen your branding.

\`\`\`
Write YouTube video descriptions for an educational skin health series. 5 videos. Include: catchy title, description with keywords, recommended tags.
\`\`\`
**Explanation:** YouTube is a search engine (the second largest after Google). Educational videos bring patients and build trust.

## Practical Example: Building a Digital Presence

Let's say you're a dermatologist wanting to start posting educational content on Instagram. Here's a complete process with Claude:

**Step 1: Create a Content Calendar**
Ask Claude: "Create a 4-week content calendar for a dermatology clinic's Instagram. 3 posts per week. Topics: sun protection, acne, moles, skin care."

Claude will create a table with dates, topics, post types (tip, myth, explanation), and recommended platform.

**Step 2: Create Individual Posts**
For each post in the calendar, ask Claude to write the full text: "Write post #1 from the calendar: a tip about sun protection. Include: text, hashtags, CTA, and image guidance."

**Step 3: Create a Brand Voice**
Ask Claude: "Create a 'brand voice' document for my clinic. My tone: professional but warm, science-based, direct, no fear-inducing language."

Save this document in a Claude Project (see "Recommended Platform") so Claude always uses the right tone.

**Step 4: Video Scripts**
Ask: "Write a script for a 60-second Instagram video: '3 things a dermatologist wants you to know about sunscreen.' Light and professional tone."

**Step 5: Analysis and Improvement**
After a month, share with Claude which posts got the most engagement and ask: "Based on performance, what should I change in next month's content calendar?"

## DermUnbound Method: Ethical Medical Marketing

The DermUnbound approach to medical marketing is based on 6 principles:

- **Principle 1: Education Before Marketing** — Every piece of content should teach the reader something new. If the patient doesn't come away smarter after reading — the content isn't good enough. Education-based marketing builds long-term trust

- **Principle 2: Medical Accuracy** — Every claim in marketing content must be medically sound. Ask Claude to include references when writing content with medical claims. Remember: Claude can make mistakes — always verify medical information

- **Principle 3: Transparency** — Be transparent about treatments, results, and limitations. Don't promise "complete cure" or "guaranteed results." Patients appreciate honesty

- **Principle 4: Privacy** — Never use patient photos or stories without written, explicit consent. Even if the patient agreed verbally — written consent is required

- **Principle 5: Professional Ethics** — Follow your medical association's advertising guidelines. Avoid comparisons with other physicians, guaranteeing outcomes, or aggressive marketing

- **Principle 6: Real Value** — Every piece of content you publish should genuinely help people. Ask yourself: "Would I want my patients to read this?" If yes — publish it

[DermUnbound Research](https://kaplanclinic.co.il/en/derm-ai)

## Creative Uses

- **Brand Voice Document** — Create a document defining your clinic's tone, style, and values. Save it in a Claude Project so all generated content stays consistent
- **Competitor Analysis** — Ask Claude to analyze competing clinic websites and find content gaps you can fill
- **Seasonal Content** — Create content series by season: sun protection in summer, dry skin care in winter, allergies in spring
- **Explainer Series** — A 5-slide Instagram carousel: "5 myths about sunscreen" or "What really causes acne"
- **Press Releases** — For new treatments, new equipment, or clinic events
- **Milestone Content** — Clinic anniversary, 1000th patient, year of operation
- **Referral Program** — Materials encouraging patients to refer friends and family
- **Community Events** — Ideas for open house days, sun protection workshops, school lectures
- **Case Study Templates** — Before/after presentations (with consent) in a professional, ethical format

## Advanced Tips

- **Upload existing content for improvement** — Upload your current website content to Claude and ask for suggestions to improve, update, and optimize for SEO
- **Use Artifacts** — In claude.ai, the Artifacts feature displays content Claude creates in a visual preview in real time on the right side of the screen. This lets you see how the post will look before you copy it
- **Different tones for different platforms** — Ask Claude to write the same message in different tones: formal for LinkedIn, casual for Instagram, informative for the website
- **Medical references** — Ask Claude to include medical references in educational content. This adds credibility and differentiates you from non-professional content
- **A/B Testing** — Ask Claude to create 2-3 versions of a headline or CTA and test which works better. A/B Testing means trying two versions and seeing which brings better results
- **Long-term planning** — Ask Claude to create a content strategy for 3 months ahead, not just a single post
- **Content repurposing** — Ask Claude to turn a long article into 5 short posts, or a video into 3 visual quotes

## Recommended Platform

**What is a "platform"?** — The tool (website or app) through which you work with Claude. Here are the recommendations for marketing:

- **claude.ai with Artifacts** — The best platform for creating marketing content. **Artifacts** is a unique feature: when Claude creates content, it's displayed in a separate visual window on the right side of the screen. You can see the post/document formatted in real time, request changes, and copy the final version
- **Claude Projects** — "Projects" is a feature that lets you save permanent instructions. Save your brand voice document, clinic information, and writing style — and Claude will always know your style without you having to explain it again
- **Claude Mobile** — The Claude app on your phone. Perfect for writing a quick caption for a photo you took, or a post idea that came to you on the go

## 🔒 Privacy & Security

- **Never use patient photos** without written, explicit consent — not even "anonymous" photos that could be identified
- **Don't promise treatment results** — It's unethical and often illegal. Write "Results vary from patient to patient"
- **Follow your medical association's advertising guidelines** — Medical associations publish clear rules about medical advertising
- **Don't share patient testimonials** without explicit written consent
- **Verify every medical claim** in marketing materials — Claude can make mistakes, and you are responsible for accuracy
- **Transparency about AI** — Consider noting when content is AI-assisted, in line with evolving norms in the field`,
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
      he: `## מבוא

זהו הנושא **הקריטי ביותר** בשימוש ב-AI ברפואה. כל רופא שמשתמש ב-Claude **חייב** להבין את העקרונות בדף זה לפני שהוא מתחיל. פרטיות המטופל היא לא רק חובה חוקית — היא חובה אתית שעומדת בבסיס הרפואה.

דף זה מהווה מדריך מלא לשמירה על פרטיות המטופלים תוך מינוף הכוח של AI. אתם לא צריכים להיות מומחי טכנולוגיה כדי להגן על הפרטיות — אתם רק צריכים לעקוב אחרי העקרונות והצ'קליסט שכאן.

**כלל אצבע פשוט: אם יש ספק — אל תשתפו. תמיד אפשר לשאול את השאלה בלי פרטים מזהים.**

## למה זה חשוב?

### חובה חוקית
- **חוק הגנת הפרטיות (תשמ"א-1981)** — החוק הישראלי אוסר על שימוש במידע רפואי ללא הסכמה. הפרה של החוק עלולה לגרור קנסות כבדים ואף עונשי מאסר
- **HIPAA** — חוק אמריקאי שרלוונטי אם יש לכם מטופלים אמריקאים או אם אתם עובדים עם מוסדות אמריקאיים. הקנסות על הפרת HIPAA מגיעות למיליוני דולרים
- **GDPR** — תקנות אירופיות שרלוונטיות למטופלים אירופיים. דורשות הגנה מחמירה על מידע אישי

### חובה אתית
- שבועת הרופא כוללת הגנה על סודיות המטופל
- האמון בין רופא למטופל מבוסס על סודיות
- פגיעה בפרטיות מהווה הפרה של האתיקה הרפואית

### סיכונים מעשיים
- **דליפת מידע** — אם מידע מזהה נשלח לשירות ענן, הוא עלול להיחשף
- **ביטוח ואחריות** — ביטוח הרשלנות הרפואית עלול לא לכסות הפרות פרטיות הקשורות ל-AI
- **מוניטין** — דליפת פרטי מטופלים יכולה להרוס מוניטין של שנים
- **אמון המטופלים** — מטופלים שמגלים ששיתפתם את המידע שלהם עם AI עלולים לאבד אמון

## עקרונות מרכזיים

- **עמידה בדיני פרטיות** — היכרות עם שלושת החוקים העיקריים: חוק הגנת הפרטיות הישראלי, HIPAA (אם רלוונטי), ו-GDPR (למטופלים אירופיים). אין צורך להיות משפטנים — אבל צריך להכיר את הקווים האדומים

- **אנונימיזציה שיטתית** — לפני כל שימוש ב-Claude עם מידע קליני, עברו על רשימת הבדיקה (צ'קליסט) למטה. אנונימיזציה היא לא "אופציה" — היא חובה

- **עיקרון המינימום ההכרחי (Minimum Necessary)** — שתפו רק את המידע שנחוץ לשאלה שלכם. אם אתם שואלים על אינטראקציה בין תרופות — אין צורך בגיל, מין, או כל פרט אחר של המטופל

- **מודעות למיקום הנתונים (Data Residency)** — כשאתם מקלידים משהו ב-claude.ai, הנתונים נשלחים לשרתים של Anthropic. חשוב להבין: איפה השרתים? מי יכול לגשת? האם הנתונים נשמרים? (ראו סעיף "Anthropic ופרטיות" למטה)

- **הסכמה מדעת** — בשלב זה אין קונצנזוס בישראל האם יש לספר למטופלים שאתם משתמשים ב-AI. ההמלצה שלנו: היו שקופים כשזה רלוונטי, במיוחד אם ה-AI משפיע ישירות על החלטה טיפולית

- **תיעוד** — תעדו את השימוש ב-AI בהחלטות רפואיות. אם Claude עזר לכם להגיע לאבחנה — רשמו זאת. זה מגן עליכם משפטית ומשפר את השקיפות

## מושגי מפתח

הנה הסבר למונחים שתפגשו בנושא פרטיות ו-AI. כל מונח מוסבר בשפה פשוטה:

- **HIPAA (חוק ניידות ואחריותיות ביטוח בריאות)** — חוק אמריקאי שמגן על מידע בריאותי. למה זה רלוונטי לרופאים ישראלים? כי: (1) אם יש לכם מטופלים אמריקאים, אתם כפופים ל-HIPAA, (2) Anthropic (החברה שמייצרת את Claude) היא חברה אמריקאית, ו-(3) HIPAA הפך לסטנדרט בינלאומי לפרטיות רפואית. HIPAA מגדיר 18 סוגי מזהים שחייבים להסיר (שמות, תאריכים, כתובות, וכו')

- **חוק הגנת הפרטיות (תשמ"א-1981)** — החוק הישראלי שמגן על מידע אישי, כולל מידע רפואי. החוק קובע שמידע רפואי הוא "מידע רגיש" שדורש הגנה מוגברת. העברת מידע רפואי לשירות ענן (כמו Claude) עשויה להיחשב "העברת מידע" לפי החוק. חשוב: החוק דורש **הסכמה** של המטופל לשימוש במידע שלו, אלא אם המידע אנונימי לחלוטין

- **PHI (מידע בריאותי מוגן — Protected Health Information)** — כל נתון שעונה על שני תנאים: (1) הוא יכול לזהות אדם ספציפי, ו-(2) הוא קשור למצב הבריאותי שלו. למשל: "יוסי כהן עם פסוריאזיס" זה PHI. "גבר בן 50 עם פסוריאזיס" זה כבר לא PHI (כי אי אפשר לזהות מי זה)

- **אנונימיזציה לעומת פסאודונימיזציה** — **אנונימיזציה** היא הסרה מוחלטת של כל פרט מזהה כך שאף אחד לא יכול לקשר את המידע לאדם ספציפי. **פסאודונימיזציה** היא החלפת פרטים מזהים בשמות/מספרים בדויים (למשל: "מטופל א'" במקום "יוסי כהן"). ההבדל: בפסאודונימיזציה, מי שמחזיק את "מפתח" ההתאמה יכול לזהות את המטופל. **לשימוש עם Claude — תמיד העדיפו אנונימיזציה מלאה**

- **DPA (הסכם עיבוד נתונים — Data Processing Agreement)** — הסכם משפטי בינכם (או המוסד שלכם) לבין ספק ה-AI שמגדיר: איך הנתונים מעובדים, איפה הם נשמרים, מי אחראי, ומה קורה בדליפה. מוסדות רפואיים גדולים צריכים DPA לפני שמשתמשים ב-Claude

- **הצפנה מקצה לקצה (End-to-End Encryption)** — בהצפנה רגילה, הנתונים מוצפנים בדרך לשרת אבל השרת "רואה" אותם. בהצפנה מקצה לקצה, רק אתם והמקבל יכולים לקרוא את הנתונים — אפילו השרת לא יכול. חשוב לדעת: claude.ai משתמש בהצפנה רגילה (TLS), לא מקצה לקצה — כלומר Anthropic יכולה טכנית לקרוא את מה שאתם שולחים

- **Zero-retention policy (מדיניות אי-שמירה)** — Anthropic מתחייבת שלא לאמן את המודלים שלה על נתוני משתמשים בתשלום (Pro/Team). זה אומר שמה שאתם כותבים לא ישמש ללמד את Claude דברים חדשים. **אבל** — השיחות עצמן נשמרות בחשבון שלכם (כדי שתוכלו לחזור אליהן). בחשבון חינמי — Anthropic עשויה להשתמש בנתונים לאימון

- **MCP (Model Context Protocol)** — פרוטוקול (שיטת תקשורת) שמאפשר ל-Claude לעבוד עם כלים **מקומיים** על המחשב שלכם, בלי שהנתונים נשלחים לענן. למשל: Claude יכול לקרוא קובץ מהמחשב שלכם, לנתח אותו, ולתת תשובה — בלי שהקובץ עוזב את המחשב. זו האפשרות הבטוחה ביותר לנתונים רגישים

## מדריך אנונימיזציה מלא

### מה חייבים להסיר — רשימה מפורטת:

| קטגוריה | דוגמה | מה לעשות |
|---------|--------|----------|
| **שמות** | יוסי כהן | השתמשו בראשי תיבות (י.כ.) או שמות בדויים |
| **מספרי זהות** | ת.ז. 123456789 | **לעולם** אל תכללו — אין שום סיבה |
| **תאריכים** | נולד 15.3.1979 | השתמשו בגיל (בן 47) או טווח (45-50) |
| **טלפון/אימייל** | 054-1234567 | **לעולם** אל תכללו |
| **כתובות** | הרצל 15, תל אביב | השתמשו באזור כללי: "מרכז הארץ" |
| **תמונות** | צילום של הנגע | **לעולם** אל תעלו תמונות מטופלים ל-Claude |
| **מאפיינים ייחודיים** | "הפוליטיקאי הידוע" | היזהרו ממצבים נדירים או תיאורים שמזהים |
| **שמות מוסדות** | "אושפז בשיבא מחלקה X" | השתמשו ב"בית חולים שלישוני" |
| **תאריכי אשפוז** | "אושפז ב-10.2.2026" | "אושפז לאחרונה" |
| **מספרי ביטוח** | מכבי 12345 | **לעולם** אל תכללו |

### דוגמאות מעשיות — לפני ואחרי אנונימיזציה:

**רע (מידע מזהה!):**
"יוסי כהן, ת.ז. 123456789, בן 47, מרח' הרצל 15 תל אביב, 054-1234567. מטופל קבוע במרפאה שלי. אובחן עם מלנומה בגב, Clark level IV. אשתו שרה מעוניינת בפגישת ייעוץ."

**טוב (אנונימי):**
"גבר, 45-50, מרכז הארץ. אובחן עם מלנומה בגב, Clark level IV. בן/בת זוג מעוניין/ת בפגישת ייעוץ."

---

**רע:**
"המטופלת מרים לוי, ת.ז. 987654321, בת 32, מרח' ויצמן 8 חיפה. הגיעה עם ACD (אלרגיק קונטקט דרמטיטיס) אחרי שימוש בצבע שיער Loreal Excellence #5."

**טוב:**
"אישה, 30-35, צפון הארץ. הגיעה עם ACD אחרי שימוש בצבע שיער ביתי."

---

**רע:**
"הילד אורי בן 8, בנו של ד"ר גולדשטיין מהדסה, עם אטופיק דרמטיטיס קשה. נבדק אצל ד"ר שוורץ בשערי צדק."

**טוב:**
"ילד בן 8 עם אטופיק דרמטיטיס קשה שלא מגיב לטיפול מקומי. מה הקו הטיפולי הבא?"

---

**רע:**
"מטופל שהוא שחקן כדורגל ידוע בליגת העל, בן 28, עם פסוריאזיס. מבקש טיפול שלא ידווח לקבוצה."

**טוב:**
"ספורטאי מקצועני, בן 25-30, עם פסוריאזיס. שואל לגבי טיפולים שלא משפיעים על ביצועים אתלטיים."

## פרומפטים לדוגמה — שימוש בטוח

הנה דוגמאות שמראות **איך לשאול נכון** — בלי מידע מזהה:

\`\`\`
גבר בן 55-60, עם נגע פיגמנטי א-סימטרי בגב. קוטר 8 מ"מ, גבולות לא סדירים, שינוי צבע לאחרונה. היסטוריה משפחתית של מלנומה. מה האבחנה המבדלת ומה הבירור המומלץ?
\`\`\`
**למה זה בטוח:** אין שם, ת.ז., תאריכים, או כתובת. הגיל הוא טווח. אי אפשר לזהות את המטופל.

\`\`\`
מה האינטראקציות בין Metformin 1000mg, Lisinopril 10mg, ו-Dupixent (dupilumab) 300mg? האם יש בעיות ידועות?
\`\`\`
**למה זה בטוח:** שאלה על תרופות בלבד — אין בכלל מידע על מטופל ספציפי.

\`\`\`
מה הקווים המנחים העדכניים לטיפול באטופיק דרמטיטיס בינוני-קשה במבוגרים לפי ה-AAD?
\`\`\`
**למה זה בטוח:** שאלה על קווים מנחים — לא דורשת שום מידע על מטופל.

\`\`\`
צור תבנית לסיכום ביקור דרמטולוגי בפורמט SOAP. כלול: שדות לממצאים עוריים, תיאור נגעים, ותכנית מעקב.
\`\`\`
**למה זה בטוח:** בקשה ליצירת תבנית ריקה — אין שום מידע רפואי של מטופל.

\`\`\`
סקור את הספרות האחרונה על יעילות PDT (פוטודינמי תרפי) לטיפול ב-Actinic Keratosis. התמקד במחקרים מ-2023-2026.
\`\`\`
**למה זה בטוח:** שאלה מחקרית כללית — לא קשורה למטופל ספציפי.

\`\`\`
אישה, 40-45, עם היסטוריה של BCC (בזאל סל קרצינומה) שטוח. הנגע חוזר באותו מיקום אחרי כריתה. גודל 1.5 ס"מ, באזור הפנים. מה האפשרויות הטיפוליות ומה הסיכויים לריפוי בכל שיטה?
\`\`\`
**למה זה בטוח:** מספיק מידע קליני לקבל תשובה מועילה, בלי שום פרט מזהה.

## דוגמה מעשית: שימוש בטוח מלא

הנה תהליך שלם — מהרגע שיש לכם מקרה מורכב ועד שאתם משתמשים בתשובת Claude:

**שלב 1: זיהוי הצורך**
יש לכם מטופל עם מקרה מורכב של פסוריאזיס שלא מגיב לטיפול ביולוגי ראשון. אתם רוצים לשאול את Claude על האפשרויות הבאות.

**שלב 2: אנונימיזציה שיטתית**
מתוך התיק:
- ~~ישראל כהן~~ -> "גבר"
- ~~ת.ז. 12345~~ -> [מוסר]
- ~~בן 52, נולד 10.5.1973~~ -> "בן 50-55"
- ~~גר ברמת גן~~ -> "מרכז הארץ"
- ~~054-1234567~~ -> [מוסר]

**שלב 3: הצגת המקרה ל-Claude**
\`\`\`
גבר, 50-55, מרכז הארץ. פסוריאזיס מזה 15 שנה. PASI score 18 לפני טיפול. טופל ב-adalimumab במשך 8 חודשים — תגובה ראשונית טובה (PASI 75 אחרי 3 חודשים) אבל אחר כך אובדן תגובה הדרגתי. PASI נוכחי: 14. Anti-drug antibodies חיוביים. BMI 31. ללא מחלות רקע נוספות. מה האפשרויות הטיפוליות הבאות?
\`\`\`

**שלב 4: שימוש בתשובה**
Claude מספק רשימת אפשרויות: מעבר ל-anti-IL-17, anti-IL-23, או שילוב. אתם:
- קוראים את התשובה ובודקים אותה מול הידע שלכם
- מאמתים את המלצות Claude מול קווים מנחים עדכניים
- משתמשים בזה כ**כלי עזר** — לא כהחלטה סופית

**שלב 5: תיעוד**
ברשומה הרפואית, כותבים: "נשקלו אפשרויות טיפוליות חלופיות כולל anti-IL-17 ו-anti-IL-23. לאחר עיון בספרות ובכלי תמיכה קלינית — ההחלטה: מעבר ל-[תרופה]."

**שלב 6: אל תשמרו את השיחה עם הנתונים**
אם השתמשתם ב-claude.ai — מחקו את השיחה אחרי שסיימתם אם היא כוללת מידע קליני (גם אנונימי, ליתר ביטחון).

## שיטת DermUnbound: פרוטוקול פרטיות

פרוטוקול שיטתי ל-6 שלבים שמבטיח שימוש בטוח:

- **שלב 1: הערכת הצורך** — לפני שאתם פותחים את Claude, שאלו: "האם אני בכלל צריך לשתף מידע קליני?" הרבה שימושים לא דורשים מידע מטופל בכלל (ראו "שימושים שלא דורשים נתוני מטופלים" למטה)

- **שלב 2: אנונימיזציה שיטתית** — אם כן צריך מידע קליני, עברו על הצ'קליסט (רשימת בדיקה) למטה **לפני כל אינטראקציה**. הפכו את זה להרגל — כמו שאתם שוטפים ידיים לפני פרוצדורה

- **שלב 3: בחירת הפלטפורמה הנכונה** — התאימו את רמת הרגישות לפלטפורמה (ראו "פלטפורמות לפי רמת רגישות" למטה). שאלה כללית על תרופות? חשבון חינמי מספיק. מקרה קליני מורכב? חשבון Pro לפחות

- **שלב 4: בדיקה כפולה** — לפני שתלחצו "שלח", קראו שוב את מה שכתבתם. שאלו: "אם מישהו יקרא את זה — האם הוא יכול לזהות את המטופל?" אם כן — הסירו עוד פרטים

- **שלב 5: תיעוד** — רשמו שהשתמשתם ב-AI בתהליך קבלת ההחלטה. זה מגן עליכם משפטית ומשפר שקיפות. לא צריך פירוט מלא — מספיק "נעזרתי בכלי AI לסקירת אפשרויות טיפוליות"

- **שלב 6: סקירה תקופתית** — פעם ברבעון, בדקו את דפוסי השימוש שלכם ב-AI. האם אתם שומרים על הפרוטוקול? האם יש שיחות ישנות שכדאי למחוק? האם המדיניות של Anthropic השתנתה?

[מחקר DermUnbound](https://kaplanclinic.co.il/he/derm-ai)

## Anthropic ופרטיות: מה חשוב לדעת

Anthropic היא החברה שמפתחת את Claude. הנה מה שכל רופא צריך לדעת על מדיניות הנתונים שלהם:

### חשבון חינמי (Free)
- הנתונים שלכם **עשויים לשמש לאימון** מודלים עתידיים של Claude
- "אימון" פירושו ש-Claude לומד מהשיחות שלכם ומשתפר. המידע שכתבתם עלול להשפיע על תשובות ש-Claude נותן לאנשים אחרים
- **לא מתאים לשום מידע קליני** — גם לא אנונימי
- מתאים לשאלות כלליות על רפואה, יצירת תבניות, למידה

### חשבון Pro / Team (בתשלום)
- הנתונים שלכם **לא משמשים לאימון** — זו מדיניות מפורשת של Anthropic
- השיחות נשמרות בחשבון שלכם (כדי שתוכלו לחזור אליהן)
- Anthropic עשויה לבדוק שיחות לצורכי בטיחות (safety review), אבל לא לאימון
- **מתאים למידע קליני אנונימי** — אחרי שעברתם אנונימיזציה

### API (ממשק תכנותי)
- שליטה מלאה על הנתונים
- הנתונים לא נשמרים מעבר ל-30 יום (ברירת מחדל)
- אפשרות Zero-retention — הנתונים לא נשמרים כלל
- **מתאים לשימוש מוסדי** עם הסכמי DPA

### איך לבדוק את סוג החשבון שלכם:
1. היכנסו ל-claude.ai
2. לחצו על שם המשתמש שלכם (פינה שמאלית עליונה)
3. Settings -> Plan — שם תראו אם אתם Free, Pro, או Team

### מה קורה כשמוחקים שיחה?
- השיחה נמחקת מהחשבון שלכם
- Anthropic עשויה לשמור עותק לתקופה מוגבלת לצורכי בטיחות
- בחשבון חינמי — אם הנתונים כבר שימשו לאימון, המחיקה לא "מוחקת" את ההשפעה

## חוק הגנת הפרטיות הישראלי — פירוט

### מה אומר החוק על מידע רפואי?
- מידע רפואי מוגדר כ**"מידע רגיש"** — הרמה הגבוהה ביותר של הגנה
- אסור לעשות שימוש במידע רגיש ללא **הסכמת** בעל המידע
- הסכמה חייבת להיות **מדעת** — המטופל צריך להבין למה המידע ישמש

### דרישות עיבוד נתונים
- מי שמחזיק "מאגר מידע" (כמו רשומות רפואיות) חייב לרשום אותו אצל רשם מאגרי המידע
- חובת אבטחה — יש לנקוט אמצעי אבטחה סבירים
- תקנות הגנת הפרטיות (אבטחת מידע) מפרטות דרישות טכניות

### העברת מידע מעבר לגבולות
- העברת מידע למדינה שאין בה הגנה נאותה דורשת אישור
- שימוש בשירות ענן (כמו Claude) נחשב "העברת מידע"
- ארה"ב (שם נמצאים שרתי Anthropic) נחשבת כמדינה עם הגנה סבירה, אבל יש לנקוט זהירות

### עונשים
- הפרה של חוק הגנת הפרטיות עלולה לגרור: עוונות פליליות, תביעות אזרחיות, קנסות
- בתי משפט בישראל הכירו בפיצויים על פגיעה בפרטיות רפואית

### רלוונטיות ל-AI
- נכון ל-2026, אין עדיין חקיקה ישראלית ספציפית לשימוש ב-AI ברפואה
- הרשות להגנת הפרטיות פרסמה המלצות כלליות לשימוש ב-AI
- ההמלצה: התייחסו לשימוש ב-Claude כאל "העברת מידע" ופעלו בהתאם

## פלטפורמות לפי רמת רגישות

סדר הפלטפורמות מהבטוחה ביותר לפחות בטוחה:

### 1. הכי בטוח: Claude Code / MCP מקומי
- **מה זה:** Claude עובד עם כלים על המחשב שלכם. הנתונים **לא עוזבים את המחשב**
- **מתי להשתמש:** כשיש צורך לנתח נתונים רגישים (מחקר, סטטיסטיקה)
- **דורש:** התקנה טכנית (עזרה מאיש IT)
- **דוגמה:** ניתוח קובץ Excel של נתוני מחקר אנונימיים

### 2. בטוח מאוד: API עם DPA
- **מה זה:** חיבור ישיר ל-Claude דרך ממשק תכנותי, עם הסכם עיבוד נתונים
- **מתי להשתמש:** שימוש מוסדי (בית חולים, מרפאה גדולה)
- **דורש:** צוות IT, הסכם משפטי
- **דוגמה:** מערכת תמיכה בהחלטות קליניות במוסד רפואי

### 3. בטוח: חשבון Pro / Team
- **מה זה:** חשבון בתשלום ב-claude.ai. הנתונים לא משמשים לאימון
- **מתי להשתמש:** שימוש יומיומי עם מידע קליני **אנונימי**
- **דורש:** מנוי ($20/חודש ל-Pro)
- **דוגמה:** שאלת אבחנה מבדלת עם מידע קליני אנונימי

### 4. פחות בטוח: חשבון חינמי
- **מה זה:** גרסה חינמית של claude.ai. הנתונים **עשויים** לשמש לאימון
- **מתי להשתמש:** **רק** לשאלות כלליות שלא כוללות מידע קליני
- **דוגמה:** "מה הקווים המנחים לטיפול בפסוריאזיס?" (שאלה כללית)

**כלל אצבע:** אם אתם מקלידים משהו שקשור למטופל ספציפי (גם אנונימי) — השתמשו לפחות בחשבון Pro.

## רשימת בדיקה (צ'קליסט) לפני שימוש

**הדפיסו רשימה זו ושימו ליד המחשב. עברו עליה לפני כל אינטראקציה עם Claude שכוללת מידע קליני:**

- הסרתי את כל **השמות** (מטופל, בני משפחה, רופאים מטפלים)
- הסרתי את כל **מספרי הזהות** (ת.ז., ביטוח, מספרי תיק)
- הסרתי **תאריכי לידה** מדויקים (השתמשתי בגיל או טווח)
- הסרתי **פרטי התקשרות** (טלפון, אימייל, כתובת)
- הסרתי **כתובות** ספציפיות (השתמשתי באזור כללי)
- לא כללתי **תמונות** של מטופלים
- בדקתי שאין **מאפיינים ייחודיים** שיכולים לזהות (מקצוע נדיר, מצב נדיר, ידוענים)
- השאלה הקלינית **אפשרית** בלי פרטים מזהים
- אני משתמש/ת ב**פלטפורמה מתאימה** לרמת הרגישות
- קראתי את הטקסט **פעם נוספת** לפני שליחה

**אם עניתם "כן" על כל הסעיפים — בטוח לשלוח.**

## שימושים יצירתיים שלא דורשים נתוני מטופלים

חשוב לזכור: הרבה מהשימושים החזקים ביותר של Claude ברפואה **לא דורשים בכלל** מידע על מטופלים ספציפיים:

- **שאלות ידע רפואי כללי** — "מה מנגנון הפעולה של dupilumab?" — שאלה רפואית כללית, אין צורך בפרטי מטופל
- **סקירת קווים מנחים** — "מה הקווים המנחים של AAD לטיפול באקנה?" — מידע ציבורי
- **בדיקת אינטראקציות תרופות** — "האם יש אינטראקציה בין Methotrexate ו-Trimethoprim?" — שאלה על תרופות, לא על מטופל
- **יצירת תבניות וטפסים** — "צור טופס הסכמה מדעת להסרת שומה בלייזר" — תבנית ריקה
- **כתיבת חומרי הסבר** — "כתוב דף הסבר למטופל על מה לצפות אחרי ביופסיית עור" — חומר כללי
- **ניהול מרפאה** — "צור צ'קליסט לפתיחת מרפאת עור בבוקר" — אין מידע רפואי
- **מחקר וסקירת ספרות** — "סקור מחקרים אחרונים על AI בדרמטולוגיה" — מידע אקדמי
- **השתלמות מקצועית** — "הכן לי סיכום של הנושאים החמים בדרמטולוגיה 2026" — למידה כללית
- **שיווק ותוכן** — "כתוב פוסט אינסטגרם על הגנה מהשמש" — תוכן חינוכי כללי
- **תרגום מונחים** — "מה המונח העברי ל-acanthosis nigricans?" — שאלה לשונית

## טיפים מתקדמים

- **צרו פרויקט Claude עם הנחיות פרטיות** — ב-claude.ai, צרו Project (פרויקט) ושימו בהנחיות שלו: "לעולם אל תבקש ממני פרטים מזהים של מטופלים. אם אני שולח מידע שנראה מזהה — הזהר אותי." כך Claude עצמו יזכיר לכם

- **צרו תבניות אנונימיזציה** — יצרו טופס סטנדרטי שאתם ממלאים לפני כל שאלה קלינית. שמרו אותו על שולחן העבודה: "גיל: ___ | מין: ___ | אזור: ___ | תלונה עיקרית: ___ | רקע: ___"

- **השתמשו ב-MCP לנתונים רגישים** — אם יש לכם צורך לנתח נתונים קליניים (למשל מחקר) — בקשו מאיש ה-IT להתקין Claude Code עם MCP. הנתונים לא יעזבו את המחשב

- **עקבו אחרי עדכוני Anthropic** — מדיניות הפרטיות של Anthropic עשויה להשתנות. בדקו אחת לרבעון: https://www.anthropic.com/privacy

- **הדריכו את הצוות** — אם אתם עובדים במרפאה עם מספר רופאים או צוות — ודאו שכולם מכירים את עקרונות הפרטיות. צרו נוהל עבודה (SOP) עם Claude:
\`\`\`
צור נוהל עבודה (SOP) לשימוש ב-AI במרפאה רפואית. כלול: כללי פרטיות, רשימת בדיקה, דוגמאות לשימוש נכון ולא נכון, ומי אחראי.
\`\`\`

- **בדקו את השיחות שלכם** — פעם בחודש, עברו על השיחות שלכם עם Claude ומחקו שיחות שכוללות מידע קליני (גם אנונימי). אין סיבה לשמור אותן

## פלטפורמה מומלצת

- **Desktop App (עם MCP מקומי)** — לנתונים רגישים יותר. MCP (Model Context Protocol) הוא פרוטוקול שמאפשר ל-Claude לעבוד עם כלים מקומיים על המחשב שלכם, בלי לשלוח נתונים לענן. זו האפשרות הבטוחה ביותר
- **claude.ai (חשבון Pro/Team)** — לשימוש יומיומי עם מידע אנונימי. ודאו שאתם בחשבון בתשלום
- **API עם הסכמי עיבוד נתונים** — לשימוש מוסדי. ה-API מאפשר שליטה מלאה על איפה ואיך הנתונים מעובדים

## 🔒 הערה בנושא פרטיות

> **זהו הנושא החשוב ביותר בשימוש ב-AI ברפואה.** פרטיות המטופל היא אחריות הרופא — תמיד. אין טכנולוגיה שפוטרת אתכם מאחריות זו. אם יש ספק — אל תשתפו. תמיד אפשר לשאול שאלה כללית ולקבל תשובה מועילה בלי לסכן אף מטופל.`,
      en: `## Introduction

This is the **most critical topic** when using AI in medicine. Every physician using Claude **must** understand the principles on this page before getting started. Patient privacy is not just a legal obligation — it's an ethical duty at the foundation of medicine.

This page serves as a complete guide to maintaining patient privacy while leveraging the power of AI. You don't need to be a technology expert to protect privacy — you just need to follow the principles and checklist outlined here.

**Simple rule of thumb: When in doubt — don't share. You can always ask the question without identifying details.**

## Why Does This Matter?

### Legal Obligations
- **Israeli Privacy Protection Law (1981)** — Israeli law prohibits the use of medical information without consent. Violations can result in heavy fines and even imprisonment
- **HIPAA** — A US law relevant if you have American patients or work with American institutions. HIPAA fines can reach millions of dollars
- **GDPR** — European regulations relevant for European patients. Require strict protection of personal information

### Ethical Obligations
- The physician's oath includes protecting patient confidentiality
- Trust between doctor and patient is built on confidentiality
- Privacy breaches constitute a violation of medical ethics

### Practical Risks
- **Data leaks** — If identifying information is sent to a cloud service, it could be exposed
- **Insurance and liability** — Malpractice insurance may not cover AI-related privacy breaches
- **Reputation** — Patient data leaks can destroy years of built reputation
- **Patient trust** — Patients who discover you shared their information with AI may lose trust

## Core Principles

- **Privacy law compliance** — Familiarity with the three main laws: Israeli Privacy Protection Law, HIPAA (if relevant), and GDPR (for European patients). You don't need to be a lawyer — but you need to know the red lines

- **Systematic anonymization** — Before every use of Claude with clinical information, go through the checklist below. Anonymization is not "optional" — it's mandatory

- **Minimum Necessary Principle** — Share only the information needed for your query. If you're asking about a drug interaction — there's no need for the patient's age, gender, or any other detail

- **Data residency awareness** — When you type something in claude.ai, the data is sent to Anthropic's servers. It's important to understand: Where are the servers? Who can access them? Is the data saved? (See "Anthropic and Privacy" section below)

- **Informed consent** — Currently there's no consensus in Israel on whether patients need to be told about AI use. Our recommendation: be transparent when relevant, especially if AI directly influences a treatment decision

- **Documentation** — Document AI use in medical decisions. If Claude helped you reach a diagnosis — record it. This protects you legally and improves transparency

## Key Concepts

Here's an explanation of terms you'll encounter regarding privacy and AI. Each term is explained in plain language:

- **HIPAA (Health Insurance Portability and Accountability Act)** — A US law that protects health information. Why is this relevant to Israeli physicians? Because: (1) if you have American patients, you're subject to HIPAA, (2) Anthropic (the company that makes Claude) is an American company, and (3) HIPAA has become an international standard for medical privacy. HIPAA defines 18 types of identifiers that must be removed (names, dates, addresses, etc.)

- **Israeli Privacy Protection Law (1981)** — The Israeli law that protects personal information, including medical data. The law states that medical information is "sensitive information" requiring enhanced protection. Transferring medical data to a cloud service (like Claude) may be considered "data transfer" under the law. Important: the law requires the patient's **consent** for use of their data, unless the data is completely anonymous

- **PHI (Protected Health Information)** — Any data that meets two conditions: (1) it can identify a specific person, AND (2) it relates to their health status. For example: "John Smith with psoriasis" is PHI. "50-year-old male with psoriasis" is not PHI (because you can't identify who it is)

- **Anonymization vs. Pseudonymization** — **Anonymization** is the complete removal of all identifying details so that nobody can link the information to a specific person. **Pseudonymization** is replacing identifying details with fake names/numbers (e.g., "Patient A" instead of "John Smith"). The difference: with pseudonymization, whoever holds the "key" can identify the patient. **For use with Claude — always prefer full anonymization**

- **DPA (Data Processing Agreement)** — A legal agreement between you (or your institution) and the AI provider that defines: how data is processed, where it's stored, who's responsible, and what happens in a breach. Large medical institutions need a DPA before using Claude

- **End-to-End Encryption** — In regular encryption, data is encrypted in transit but the server "sees" it. In end-to-end encryption, only you and the recipient can read the data — even the server cannot. Important to know: claude.ai uses regular encryption (TLS), not end-to-end — meaning Anthropic can technically read what you send

- **Zero-retention policy** — Anthropic commits to not training its models on paid user data (Pro/Team). This means what you write won't be used to teach Claude new things. **However** — conversations themselves are saved in your account (so you can return to them). On free accounts — Anthropic may use data for training

- **MCP (Model Context Protocol)** — A protocol (communication method) that allows Claude to work with **local** tools on your computer, without data being sent to the cloud. For example: Claude can read a file from your computer, analyze it, and give an answer — without the file leaving your computer. This is the safest option for sensitive data

## Complete Anonymization Guide

### What Must Be Removed — Detailed List:

| Category | Example | What to Do |
|----------|---------|------------|
| **Names** | John Smith | Use initials (J.S.) or pseudonyms |
| **ID Numbers** | ID 123456789 | **Never** include — there's no reason |
| **Dates** | Born 03/15/1979 | Use age (47) or range (45-50) |
| **Phone/Email** | 555-123-4567 | **Never** include |
| **Addresses** | 15 Main St, New York | Use general area: "Northeast US" |
| **Photos** | Photo of the lesion | **Never** upload patient photos to Claude |
| **Unique Characteristics** | "the famous politician" | Be careful with rare conditions or identifying descriptions |
| **Institution Names** | "admitted to X Hospital, Ward Y" | Use "tertiary hospital" |
| **Admission Dates** | "admitted 02/10/2026" | "recently admitted" |
| **Insurance Numbers** | Plan #12345 | **Never** include |

### Practical Examples — Before and After Anonymization:

**BAD (identifying information!):**
"John Smith, SSN 123-45-6789, age 47, 15 Oak Street, Springfield. Regular patient at my clinic. Diagnosed with melanoma on his back, Clark level IV. His wife Sarah wants a consultation."

**GOOD (anonymous):**
"Male, 45-50, suburban area. Diagnosed with melanoma on the back, Clark level IV. Spouse interested in consultation."

---

**BAD:**
"Patient Mary Johnson, DOB 05/15/1994, 8 Pine Road, Boston. Presented with ACD (allergic contact dermatitis) after using L'Oreal Excellence #5 hair dye."

**GOOD:**
"Female, 30-35, Northeast US. Presented with ACD after using home hair dye."

---

**BAD:**
"The child Oliver, age 8, son of Dr. Goldstein from the university hospital, with severe atopic dermatitis. Seen by Dr. Schwartz at the children's hospital."

**GOOD:**
"8-year-old child with severe atopic dermatitis not responding to topical treatment. What is the next therapeutic line?"

---

**BAD:**
"Patient who is a famous professional soccer player, age 28, with psoriasis. Wants treatment that won't be reported to his team."

**GOOD:**
"Professional athlete, 25-30, with psoriasis. Asking about treatments that don't affect athletic performance."

## Example Prompts — Safe Usage

Here are examples showing **how to ask correctly** — without identifying information:

\`\`\`
Male, 55-60, with an asymmetric pigmented lesion on the back. 8mm diameter, irregular borders, recent color change. Family history of melanoma. What is the differential diagnosis and recommended workup?
\`\`\`
**Why this is safe:** No name, ID, dates, or address. Age is a range. The patient cannot be identified.

\`\`\`
What are the interactions between Metformin 1000mg, Lisinopril 10mg, and Dupixent (dupilumab) 300mg? Are there known issues?
\`\`\`
**Why this is safe:** A question about drugs only — no patient-specific information at all.

\`\`\`
What are the current guidelines for treating moderate-to-severe atopic dermatitis in adults according to the AAD?
\`\`\`
**Why this is safe:** A question about guidelines — requires no patient information.

\`\`\`
Create a template for a dermatology visit summary in SOAP format. Include: fields for skin findings, lesion descriptions, and follow-up plan.
\`\`\`
**Why this is safe:** A request to create an empty template — no patient medical information.

\`\`\`
Review the recent literature on the efficacy of PDT (photodynamic therapy) for treating Actinic Keratosis. Focus on studies from 2023-2026.
\`\`\`
**Why this is safe:** A general research question — not related to a specific patient.

\`\`\`
Female, 40-45, with history of flat BCC (basal cell carcinoma). Lesion recurred at the same location after excision. Size 1.5cm, facial area. What are the treatment options and cure rates for each method?
\`\`\`
**Why this is safe:** Enough clinical information for a useful answer, with no identifying details.

## Practical Example: Complete Safe Usage

Here's a complete process — from having a complex case to using Claude's response:

**Step 1: Identify the Need**
You have a patient with a complex case of psoriasis not responding to the first biologic treatment. You want to ask Claude about the next options.

**Step 2: Systematic Anonymization**
From the chart:
- ~~Israel Cohen~~ -> "Male"
- ~~ID 12345~~ -> [removed]
- ~~Age 52, born 05/10/1973~~ -> "50-55"
- ~~Lives in Springfield~~ -> "suburban area"
- ~~555-123-4567~~ -> [removed]

**Step 3: Present the Case to Claude**
\`\`\`
Male, 50-55, suburban area. Psoriasis for 15 years. PASI score 18 before treatment. Treated with adalimumab for 8 months — good initial response (PASI 75 after 3 months) but then gradual loss of response. Current PASI: 14. Anti-drug antibodies positive. BMI 31. No other comorbidities. What are the next treatment options?
\`\`\`

**Step 4: Use the Response**
Claude provides a list of options: switching to anti-IL-17, anti-IL-23, or combination therapy. You:
- Read the response and check it against your own knowledge
- Verify Claude's recommendations against current guidelines
- Use it as a **support tool** — not a final decision

**Step 5: Documentation**
In the medical record, write: "Alternative treatment options were considered including anti-IL-17 and anti-IL-23. After reviewing the literature and clinical support tools — decision: switch to [medication]."

**Step 6: Don't Keep the Conversation**
If you used claude.ai — delete the conversation after you're done if it contains clinical information (even anonymized, to be safe).

## DermUnbound Method: Privacy Protocol

A systematic 6-step protocol ensuring safe usage:

- **Step 1: Assess the Need** — Before opening Claude, ask: "Do I actually need to share clinical information?" Many uses don't require patient data at all (see "Uses That Don't Require Patient Data" below)

- **Step 2: Systematic Anonymization** — If clinical information is needed, go through the checklist below **before every interaction**. Make it a habit — like washing your hands before a procedure

- **Step 3: Choose the Right Platform** — Match sensitivity level to platform (see "Platforms by Sensitivity Level" below). General question about medications? A free account is enough. Complex clinical case? Pro account at minimum

- **Step 4: Double-Check** — Before pressing "Send," read what you wrote again. Ask: "If someone reads this — could they identify the patient?" If yes — remove more details

- **Step 5: Documentation** — Record that you used AI in the decision-making process. This protects you legally and improves transparency. No need for full detail — "AI clinical support tool was consulted for treatment options" is sufficient

- **Step 6: Periodic Review** — Once a quarter, review your AI usage patterns. Are you maintaining the protocol? Are there old conversations that should be deleted? Has Anthropic's policy changed?

[DermUnbound Research](https://kaplanclinic.co.il/en/derm-ai)

## Anthropic and Privacy: What You Need to Know

Anthropic is the company that develops Claude. Here's what every physician needs to know about their data policies:

### Free Account
- Your data **may be used for training** future Claude models
- "Training" means Claude learns from your conversations and improves. Information you wrote could influence answers Claude gives to other people
- **Not suitable for any clinical information** — not even anonymized
- Suitable for general medical questions, creating templates, learning

### Pro / Team Account (Paid)
- Your data is **not used for training** — this is Anthropic's explicit policy
- Conversations are saved in your account (so you can return to them)
- Anthropic may review conversations for safety purposes, but not for training
- **Suitable for anonymized clinical information** — after proper anonymization

### API (Application Programming Interface)
- Full control over your data
- Data is not retained beyond 30 days (default)
- Zero-retention option — data is not saved at all
- **Suitable for institutional use** with DPA agreements

### How to Check Your Account Type:
1. Go to claude.ai
2. Click on your username (top left corner)
3. Settings -> Plan — there you'll see if you're Free, Pro, or Team

### What Happens When You Delete a Conversation?
- The conversation is deleted from your account
- Anthropic may retain a copy for a limited period for safety purposes
- On free accounts — if data was already used for training, deletion doesn't "undo" the effect

## Israeli Privacy Protection Law — Details

### What Does the Law Say About Medical Information?
- Medical information is defined as **"sensitive information"** — the highest level of protection
- Use of sensitive information without the owner's **consent** is prohibited
- Consent must be **informed** — the patient needs to understand what the information will be used for

### Data Processing Requirements
- Anyone holding a "database" (like medical records) must register it with the Database Registrar
- Security obligation — reasonable security measures must be taken
- Privacy Protection Regulations (Information Security) detail technical requirements

### Cross-Border Data Transfer
- Transferring information to a country without adequate protection requires approval
- Using a cloud service (like Claude) is considered "data transfer"
- The US (where Anthropic's servers are located) is considered to have reasonable protection, but caution is advised

### Penalties
- Violations of the Privacy Protection Law can result in: criminal offenses, civil lawsuits, fines
- Israeli courts have recognized damages for medical privacy violations

### Relevance to AI
- As of 2026, there is no specific Israeli legislation for AI use in medicine
- The Privacy Protection Authority has published general recommendations for AI use
- Recommendation: treat Claude usage as "data transfer" and act accordingly

## Platforms by Sensitivity Level

Platforms ordered from most secure to least secure:

### 1. Most Secure: Claude Code / Local MCP
- **What it is:** Claude works with tools on your computer. Data **does not leave your computer**
- **When to use:** When you need to analyze sensitive data (research, statistics)
- **Requires:** Technical setup (IT support needed)
- **Example:** Analyzing an anonymized research data Excel file

### 2. Very Secure: API with DPA
- **What it is:** Direct connection to Claude through a programming interface, with a data processing agreement
- **When to use:** Institutional use (hospital, large clinic)
- **Requires:** IT team, legal agreement
- **Example:** Clinical decision support system in a medical institution

### 3. Secure: Pro / Team Account
- **What it is:** A paid account on claude.ai. Data is not used for training
- **When to use:** Daily use with **anonymized** clinical information
- **Requires:** Subscription ($20/month for Pro)
- **Example:** Differential diagnosis question with anonymized clinical data

### 4. Less Secure: Free Account
- **What it is:** Free version of claude.ai. Data **may** be used for training
- **When to use:** **Only** for general questions that don't include clinical information
- **Example:** "What are the guidelines for treating psoriasis?" (general question)

**Rule of thumb:** If you're typing anything related to a specific patient (even anonymized) — use at least a Pro account.

## Checklist Before Use

**Print this list and keep it by your computer. Go through it before every interaction with Claude that includes clinical information:**

- I removed all **names** (patient, family members, treating physicians)
- I removed all **ID numbers** (national ID, insurance, file numbers)
- I removed exact **dates of birth** (used age or range instead)
- I removed **contact information** (phone, email, address)
- I removed specific **addresses** (used general area instead)
- I did not include patient **photographs**
- I checked for **unique characteristics** that could identify (rare profession, rare condition, celebrities)
- The clinical question **is possible** without identifying details
- I am using the **appropriate platform** for this sensitivity level
- I read the text **one more time** before sending

**If you answered "yes" to all items — safe to send.**

## Creative Uses That Don't Require Patient Data

It's important to remember: many of the most powerful medical uses of Claude **don't require any** information about specific patients:

- **General medical knowledge questions** — "What is the mechanism of action of dupilumab?" — a general medical question, no patient details needed
- **Guideline reviews** — "What are the AAD guidelines for treating acne?" — public information
- **Drug interaction checking** — "Is there an interaction between Methotrexate and Trimethoprim?" — a question about drugs, not about a patient
- **Creating templates and forms** — "Create an informed consent form for laser mole removal" — an empty template
- **Writing patient education materials** — "Write a patient information sheet about what to expect after a skin biopsy" — general material
- **Practice management** — "Create a morning opening checklist for a dermatology clinic" — no medical information
- **Research and literature review** — "Review recent studies on AI in dermatology" — academic information
- **Continuing medical education** — "Prepare a summary of hot topics in dermatology 2026" — general learning
- **Marketing and content** — "Write an Instagram post about sun protection" — general educational content
- **Term translation** — "What is the English term for acanthosis nigricans?" — a language question

## Advanced Tips

- **Create a Claude Project with privacy guidelines** — In claude.ai, create a Project and add to its instructions: "Never ask me for patient identifying information. If I send information that appears identifying — warn me." This way Claude itself will remind you

- **Create anonymization templates** — Make a standard form you fill out before every clinical question. Keep it on your desktop: "Age: ___ | Sex: ___ | Region: ___ | Chief complaint: ___ | Background: ___"

- **Use MCP for sensitive data** — If you need to analyze clinical data (e.g., research) — ask your IT person to set up Claude Code with MCP. The data won't leave your computer

- **Follow Anthropic's updates** — Anthropic's privacy policy may change. Check quarterly: https://www.anthropic.com/privacy

- **Train your staff** — If you work in a clinic with multiple physicians or staff — make sure everyone knows the privacy principles. Create an SOP (Standard Operating Procedure) with Claude:
\`\`\`
Create an SOP for AI use in a medical clinic. Include: privacy rules, checklist, examples of correct and incorrect use, and who is responsible.
\`\`\`

- **Audit your conversations** — Once a month, review your Claude conversations and delete any that contain clinical information (even anonymized). There's no reason to keep them

## Recommended Platform

- **Desktop App (with local MCP)** — For more sensitive data. MCP (Model Context Protocol) is a protocol that lets Claude work with local tools on your computer, without sending data to the cloud. This is the safest option
- **claude.ai (Pro/Team account)** — For daily use with anonymized information. Make sure you're on a paid account
- **API with data processing agreements** — For institutional use. The API gives you full control over where and how data is processed

## 🔒 Privacy Note

> **This is the most important topic when using AI in medicine.** Patient privacy is always the physician's responsibility. No technology exempts you from this responsibility. When in doubt — don't share. You can always ask a general question and get a useful answer without putting any patient at risk.`,
    },
  },
];

export function getMedicalUseCaseBySlug(slug: string): MedicalUseCase | undefined {
  return medicalUseCases.find(uc => uc.id === slug);
}
