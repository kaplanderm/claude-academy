export interface FeatureGuide {
  id: string;
  icon: string;
  title: { he: string; en: string };
  description: { he: string; en: string };
  content: { he: string; en: string };
}

export const featureGuides: FeatureGuide[] = [
  {
    id: 'cowork-clinic-automation',
    icon: '⚙️',
    title: { he: 'אוטומציית שגרות מרפאה עם Cowork', en: 'Clinic Routine Automation with Cowork' },
    description: {
      he: 'Cowork, Dispatch ו-Routines לניהול משימות מרפאתיות שרצות ברקע - סקירת בוקר, follow-up שבועי, journal club',
      en: 'Cowork, Dispatch, and Routines for running clinic background tasks - morning review, weekly follow-up, journal club',
    },
    content: {
      he: `## מבוא

**Cowork** הוא טאב חדש באפליקציית Claude (Pro ומעלה) שמאפשר לרופא להריץ משימות ברקע בלי להפריע לעבודה השוטפת. במרפאה טיפוסית יש עשרות משימות שחוזרות על עצמן - סקירת דוחות שהגיעו בלילה, הכנת journal club, ניהול רשימת follow-up. Cowork הוא המקום המרכזי להפעיל את כל אלה.

**הבחנות חשובות שכדאי להבין מיד:**

- **Cowork** = הטאב (המקום)
- **Dispatch** = מכניקה שבה משימה ארוכה מ-Cowork מועברת לסוכן רקע
- **Routines** = משימות חוזרות (יומיות/שבועיות) שרצות בענן של Anthropic
- **Claude Desktop scheduled tasks** = משימות שרצות במחשב שלכם, לא בענן

---

## שימושים עיקריים

### 1. סקירת בוקר - דוחות פתולוגיה מהלילה

תרחיש קלאסי: הרופא מגיע ב-7:45, המטופל הראשון ב-8:15. הוא רוצה לדעת מה מחכה לו - אילו דוחות הגיעו בלילה, מה דחוף, מה שגרתי.

**פתרון עם Routine יומית (רצה ב-7:30):**

\`\`\`
סרוק את תיבת הדוא"ל (דרך Gmail connector) לכל הודעה מ-pathology@[מעבדה]
שהגיעה בין 18:00 אתמול ל-6:00 היום.

לכל דוח מצורף:
1. הוצא: שם חומר (specimen), מיקום אנטומי, אבחנה סופית, שוליים (אם רלוונטי)
2. סווג דחיפות:
   - דחוף: malignant, SCC in-situ, atypia severe
   - בינוני: atypia mild, basal cell incompletely excised
   - שגרתי: benign
3. הוצא טבלה מסודרת לפי דחיפות
4. שלח אותה לתיבה עם נושא "סקירת בוקר YYYY-MM-DD"
\`\`\`

הרופא פותח את האימייל ב-8:00 ורואה מיד את הטבלה המסודרת.

### 2. Journal club שבועי אוטומטי

תרחיש: journal club בחמישי ב-12:00. בכל שבוע רופא אחר אחראי להכין רשימת מאמרים חדשים.

**פתרון עם Routine (שלישי 18:00):**

\`\`\`
חפש ב-PubMed מאמרים מ-7 הימים האחרונים בנושאים:
- Mohs micrographic surgery
- BCC / SCC / Melanoma
- Dermoscopy AI
- Skin cancer screening

לכל מאמר:
- כותרת, מחברים, ז'ורנל, PMID
- Abstract מסוכם לשתי שורות
- רלוונטיות קלינית (1-10)

סנן ל-5 המובילים. שמור בקובץ journal-club-YYYY-Wxx.md ב-Google Drive.
\`\`\`

ביום שלישי בערב הרשימה מוכנה. ביום שלישי ב-22:00 הרופא בוחר מאמר ומוסיף הערות לדיון.

### 3. Onboarding מתמחה חדש - סדרת Dispatch

תרחיש: מתמחה חדש הצטרף למרפאה. יש לו צורך ב-4-5 מסמכים: נהלי מרפאה, פרוטוקולי Mohs, רשימת מצבים קליניים שכיחים.

**פתרון עם Cowork + Dispatch מרובה:**

בשיחת Cowork אחת, ניתן להפעיל מספר Dispatch במקביל:

\`\`\`
Dispatch 1:
"מתוך הקבצים ב-/clinic-protocols, כתוב מדריך של עמוד אחד למתמחה חדש על
ניהול יום במרפאה: סדר יום, חלוקת אחריות, תיעוד."

Dispatch 2:
"מתוך כל דוחות ה-Mohs ב-/mohs-archive של השנה האחרונה, הוצא רשימה של
10 מצבים הכי שכיחים ולכל אחד פרוטוקול של 3 שלבים."

Dispatch 3:
"כתוב 5 שאלות להערכה עצמית שהמתמחה יענה עליהן אחרי חודש במרפאה,
ממוקדות בפרקטיקה - לא טריוויה."
\`\`\`

שלוש המשימות רצות במקביל ברקע, ובינתיים הרופא רואה מטופלים. שעה אחר כך יש 3 מסמכים מוכנים.

### 4. ניהול follow-up שבועי

תרחיש: במרפאה יש מטופלים עם ממאירויות עור שצריכים חזרה כל 3/6/12 חודשים. אין מערכת ייעודית שמזכירה מי התחייב לחזור.

**פתרון עם Routine + Google Sheets connector (שישי 16:00):**

\`\`\`
פתח את Google Sheet "follow-up tracker".
בעמודה "next visit" מצא את כל התאריכים ב-14 הימים הקרובים.

לכל מטופל (רק קוד מטופל, בלי PII):
- אבחנה ראשונית
- תאריך אבחנה
- מרווח follow-up
- האם המזכירה כבר זימנה? (עמודה "scheduled")

הוצא טבלה של מטופלים שצריכים לבוא בשבועיים הקרובים אבל עוד לא זומנו.
שלח למזכירה בנושא "Follow-up לזימון".
\`\`\`

המזכירה מקבלת רשימה באופן קבוע, וזימון הופך לתהליך שגרתי במקום ad-hoc.

### 5. Dispatch חד-פעמי למשימה ארוכה

לא כל המשימות חוזרות. לפעמים יש משימה חד-פעמית שלוקחת זמן - למשל הכנת הרצאה.

**פתרון:**

\`\`\`
בטאב Cowork, Dispatch:

"חפש ב-PubMed את כל המאמרים על Mohs ב-2025+ בז'ורנלים: JAAD, JAMA Dermatology,
Dermatologic Surgery. סנן למאמרים עם רלוונטיות גבוהה לפרקטיקה (לא case reports בודדים).

הוצא רשימה של 20 מאמרים עם: PMID, כותרת, מה חדש, איך זה משנה פרקטיקה.
קבץ לפי 5 נושאים מרכזיים.

בסוף, הצע מבנה של הרצאה של 45 דקות על הנושאים, עם slide deck outline."
\`\`\`

20 דקות אחר כך יש למרצה תוכנית הרצאה על השולחן.

---

## פרומפטים לדוגמה

### פרומפט 1: Routine לבדיקת חוסרים במלאי

\`\`\`
כל שני ב-6:00:
פתח את Google Sheet "inventory".
לכל שורה בעמודה "threshold minimum":
- אם "current stock" < "threshold minimum", הוסף לרשימה "to-order"
- חשב כמה להזמין: "target stock" - "current stock"

הוצא רשימת הזמנה עם: פריט, כמות, ספק.
שלח למזכירה ולמנהל הרכש.
\`\`\`

### פרומפט 2: Dispatch לתיעוד מקרה מורכב

\`\`\`
Dispatch:
"יש לי תמליל של ביקור של 45 דקות (מצורף). צור ממנו:
1. סיכום ביקור בפורמט SOAP (Subjective/Objective/Assessment/Plan)
2. מכתב הפניה לעמית בהתאם ל-Plan
3. הוראות למטופל בשפה פשוטה לקראת הניתוח המתוכנן
4. רשימת תרופות שצריך לתאם עם רופא המשפחה

הפלט ב-4 מסמכים נפרדים."
\`\`\`

### פרומפט 3: Routine לעדכון סטטיסטיקות חודשיות

\`\`\`
ב-1 בכל חודש ב-9:00:
עבור על קבצי התיעוד של החודש שחלף ב-~/Documents/patient-summaries/YYYY-MM/
חשב:
- מספר ביקורים חדשים
- חלוקה לפי סוג נגע (benign / premalignant / malignant)
- מספר Mohs (וחלוקה לפי אתר)
- מספר biopsies
- זמן ממוצע לתשובה של פתולוגיה

שמור כדו"ח חודשי ב-~/Documents/clinic-stats/YYYY-MM-report.md
\`\`\`

---

## אזהרות חשובות

**Routines לא אוטומטיות לחלוטין.** Claude עדיין יכול לטעות. בדוק פעם בשבוע שהפלט עדיין תקין.

**Dispatch ארוך צורך משאבים.** אם אתה על Pro, Routine יומית עם פרומפט של 5000 טוקנים יכולה לצרוך חלק ניכר מהמכסה. Max עדיף.

**אין HIPAA compliance** באופן גלובלי. אין BAA בין Anthropic לבין המרפאה שלך במסלול רגיל. שקול Enterprise אם אתה מעבד נתוני מטופלים מזהים.

---

## 🔒 פרטיות והגנה על נתוני מטופלים

חוק הגנת הפרטיות בישראל, תיקון 13 (2024), מחייב רישום פעילות עיבוד של נתוני בריאות. כמה כללים חיוניים:

- **אל תכלול PII בפרומפט של Routine** (שם מלא, ת.ז., תאריך לידה). השתמש בקודי מטופל פנימיים.
- **Gmail connector רואה את כל התיבה.** ליישומים של סריקה אוטומטית - עדיף תיבת מייל ייעודית.
- **שיחות Cowork נשמרות בהיסטוריה.** לפרומפט חד-פעמי עם מידע רגיש - הפעל Incognito.
- **רישום פעילות עיבוד:** ודא ששימוש ב-Cowork ו-Routines מופיע ברישום הפעילות של המרפאה שלך.

## מקורות

1. Anthropic. Claude Cowork documentation. https://docs.claude.com/en/docs/claude-apps/cowork
2. Anthropic. Routines overview. https://support.anthropic.com
3. חוק הגנת הפרטיות תשמ"א-1981, תיקון 13 (2024). https://www.gov.il/he/departments/legalInfo
4. רשות הגנת הפרטיות, משרד המשפטים. רישום פעילות עיבוד. https://www.gov.il/he/departments/the_privacy_protection_authority

---

**הערת עזר קלינית:** Cowork ו-Routines הם כלי עזר לניהול משימות אדמיניסטרטיביות ומשימות מחקר/לימוד. הם אינם מחליפים שיפוט קליני ואינם אחראים על החלטות טיפול.`,
      en: `## Introduction

**Cowork** is a new tab in the Claude app (Pro and up) that lets physicians run background tasks without disrupting ongoing work. A typical clinic has dozens of recurring tasks - reviewing reports that arrived overnight, preparing journal club, managing the follow-up list. Cowork is the central place to run all of them.

**Important distinctions to understand right away:**

- **Cowork** = the tab (the place)
- **Dispatch** = the mechanism by which a long task from Cowork is handed off to a background agent
- **Routines** = recurring (daily/weekly) tasks that run in Anthropic's cloud
- **Claude Desktop scheduled tasks** = tasks that run on your own machine, not in the cloud

---

## Main Use Cases

### 1. Morning review - overnight pathology reports

Classic scenario: the physician arrives at 7:45, first patient at 8:15. She wants to know what's waiting - which reports came in overnight, what's urgent, what's routine.

**Solution with a daily Routine (runs at 7:30):**

\`\`\`
Scan the email inbox (via Gmail connector) for any message from pathology@[lab]
that arrived between 18:00 yesterday and 6:00 today.

For each attached report:
1. Extract: specimen, anatomical site, final diagnosis, margins (if relevant)
2. Classify urgency:
   - Urgent: malignant, SCC in-situ, severe atypia
   - Moderate: mild atypia, basal cell incompletely excised
   - Routine: benign
3. Output a table sorted by urgency
4. Email with subject "Morning review YYYY-MM-DD"
\`\`\`

The physician opens the email at 8:00 and sees the organized table right away.

### 2. Automated weekly journal club

Scenario: journal club Thursday at noon. Each week a different physician is responsible for preparing a list of new papers.

**Solution with Routine (Tuesday 18:00):**

\`\`\`
Search PubMed for papers from the last 7 days on:
- Mohs micrographic surgery
- BCC / SCC / Melanoma
- Dermoscopy AI
- Skin cancer screening

For each paper:
- Title, authors, journal, PMID
- Two-line abstract summary
- Clinical relevance (1-10)

Filter to the top 5. Save to journal-club-YYYY-Wxx.md in Google Drive.
\`\`\`

Tuesday evening the list is ready. Tuesday at 22:00 the physician picks a paper and adds discussion notes.

### 3. New resident onboarding - a chain of Dispatches

Scenario: a new resident joined the clinic. They need 4-5 documents: clinic procedures, Mohs protocols, a list of common clinical presentations.

**Solution with Cowork + multiple Dispatches:**

In one Cowork conversation, multiple Dispatches can run in parallel:

\`\`\`
Dispatch 1:
"From the files in /clinic-protocols, write a one-page guide for a new resident on
running a clinic day: daily schedule, division of responsibilities, documentation."

Dispatch 2:
"From all Mohs reports in /mohs-archive for the last year, extract a list of
the 10 most common presentations and a 3-step protocol for each."

Dispatch 3:
"Write 5 self-assessment questions the resident answers after a month in the clinic,
focused on practice - not trivia."
\`\`\`

All three run in parallel in the background while the physician sees patients. An hour later three documents are ready.

### 4. Weekly follow-up management

Scenario: the clinic has patients with skin malignancies who need to return every 3/6/12 months. There's no dedicated system reminding who's due.

**Solution with Routine + Google Sheets connector (Friday 16:00):**

\`\`\`
Open the Google Sheet "follow-up tracker".
In the "next visit" column, find all dates in the next 14 days.

For each patient (only patient code, no PII):
- Primary diagnosis
- Date of diagnosis
- Follow-up interval
- Has the secretary already scheduled? (column "scheduled")

Output a table of patients due in the next 2 weeks who aren't scheduled.
Email the secretary with subject "Follow-up to schedule".
\`\`\`

The secretary gets a list on a regular cadence, and scheduling becomes routine instead of ad-hoc.

### 5. One-off Dispatch for a long task

Not every task is recurring. Sometimes there's a one-off task that takes time - like preparing a talk.

**Solution:**

\`\`\`
In the Cowork tab, Dispatch:

"Search PubMed for all Mohs papers from 2025+ in journals: JAAD, JAMA Dermatology,
Dermatologic Surgery. Filter to papers with high practice relevance (not individual
case reports).

Output a list of 20 papers with: PMID, title, what's new, how it changes practice.
Group into 5 key themes.

Finally, propose a structure for a 45-minute talk on these themes, with slide deck outline."
\`\`\`

20 minutes later the speaker has a talk plan on the desk.

---

## Example Prompts

### Prompt 1: Routine for low-inventory check

\`\`\`
Every Monday at 6:00:
Open the Google Sheet "inventory".
For each row in the "threshold minimum" column:
- If "current stock" < "threshold minimum", add to a "to-order" list
- Compute how much to order: "target stock" - "current stock"

Output an order list with: item, quantity, supplier.
Send to the secretary and purchasing manager.
\`\`\`

### Prompt 2: Dispatch for complex case documentation

\`\`\`
Dispatch:
"I have a transcript of a 45-minute visit (attached). Generate from it:
1. A visit summary in SOAP format (Subjective/Objective/Assessment/Plan)
2. A referral letter to a colleague based on the Plan
3. Patient instructions in plain language ahead of the planned procedure
4. A list of medications to coordinate with the family physician

Output in 4 separate documents."
\`\`\`

### Prompt 3: Routine for monthly statistics update

\`\`\`
On the 1st of every month at 9:00:
Go through last month's documentation files in ~/Documents/patient-summaries/YYYY-MM/
Compute:
- Number of new visits
- Breakdown by lesion type (benign / premalignant / malignant)
- Number of Mohs cases (and breakdown by site)
- Number of biopsies
- Average turnaround time for pathology

Save as a monthly report to ~/Documents/clinic-stats/YYYY-MM-report.md
\`\`\`

---

## Important Warnings

**Routines aren't fully autonomous.** Claude can still make mistakes. Check the output once a week to make sure it's still correct.

**A long Dispatch consumes resources.** If you're on Pro, a daily Routine with a 5000-token prompt can eat a significant part of your quota. Max is better.

**No global HIPAA compliance.** There's no BAA between Anthropic and your clinic on regular plans. Consider Enterprise if you're processing identifiable patient data.

---

## 🔒 Privacy and Patient Data

Israel's Privacy Protection Law, Amendment 13 (2024), requires a registry of processing activities for health data. A few essential rules:

- **Don't include PII in a Routine prompt** (full name, ID, date of birth). Use internal patient codes.
- **The Gmail connector sees your entire inbox.** For automated scanning use cases - a dedicated inbox is preferable.
- **Cowork conversations are saved in history.** For one-off prompts with sensitive info - enable Incognito.
- **Registry of processing activities:** make sure your Cowork and Routines usage appears in your clinic's processing registry.

## Sources

1. Anthropic. Claude Cowork documentation. https://docs.claude.com/en/docs/claude-apps/cowork
2. Anthropic. Routines overview. https://support.anthropic.com
3. Israel Privacy Protection Law 5741-1981, Amendment 13 (2024). https://www.gov.il/en/departments/legalInfo
4. Israel Privacy Protection Authority, Ministry of Justice. Registry of processing activities. https://www.gov.il/en/departments/the_privacy_protection_authority

---

**Clinical note:** Cowork and Routines are tools for managing administrative and research/learning tasks. They do not replace clinical judgment and are not responsible for treatment decisions.`,
    },
  },
  {
    id: 'patient-education-visuals',
    icon: '🎨',
    title: { he: 'חומרי הסבר למטופל עם frontend-design', en: 'Patient Education Visuals with frontend-design' },
    description: {
      he: 'skill frontend-design יוצרת חומרי הסבר חזותיים למטופלים - מסכי הסבר למחלה, צירי זמן החלמה, טפסי הסכמה ואינפוגרפיקות',
      en: 'The frontend-design skill generates visual patient education materials - disease explainer pages, recovery timelines, consent forms, and infographics',
    },
    content: {
      he: `## מבוא

**frontend-design** הוא skill רשמי של Anthropic שמתקינה את Claude עם יכולות עיצוב ממשק ברמה מקצועית. במקום לייצר HTML גנרי ומשעמם, הוא בונה דפים עם עיצוב מחשבותי, אסתטיקה נקייה וחוויית משתמש איכותית. זה שימושי במיוחד ליצירת חומרי הסבר למטופלים - במקום להסתמך על הדפים המודפסים שיש במרפאה (לעתים קרובות מיושנים, באנגלית, או לא מותאמים למקרה הספציפי).

:::beginner
**מה זה skill?** skill הוא תוסף שמרחיב את היכולות של Claude למשימה מסוימת. frontend-design היא skill שמתווספת אוטומטית לחשבון Claude שלכם (אפשר לבדוק ברשימת ה-skills בהגדרות).
:::

---

## למה חומרי הסבר ויזואליים עובדים יותר טוב

מחקרים הדגימו שחומרי הסבר מאוירים או סכמתיים מעלים משמעותית את הבנת המטופל וההיענות לטיפול לעומת הסבר טקסטואלי בלבד. בכירורגיה דרמטולוגית זה בולט: מטופל שמקבל דף עם ציר זמן החלמה לפני Mohs מגיע פחות ל-emergency עם חרדה לא מוצדקת ושואל פחות שאלות מיותרות בטלפון אחרי הניתוח.

---

## ארבע דוגמאות מעשיות

### 1. מסך הסבר BCC למטופל

מטופלת בת 55 יוצאת מפגישת ייעוץ עם אבחנה של BCC. היא רוצה להבין מה זה ומה הלאה.

**פרומפט:**

\`\`\`
השתמש ב-skill בשם frontend-design.

בנה דף HTML עצמאי (standalone, בלי תלויות חיצוניות) בנושא:
"קרצינומה של תאי בסיס (BCC) - מה זה ומה הלאה" למטופלת בגיל 55+.

דרישות:
- עברית מלאה, RTL
- שני מסכים: (1) "מה זה BCC" עם איור סכמתי של שכבות העור וסימון הנגע,
  (2) "אפשרויות טיפול" עם טבלה: Mohs / excision רגיל / קריותרפיה / imiquimod
- פונט 18px+, צבעים חמים ורגועים, לא מפחיד
- FAQ: "מתי הגידול מסוכן?", "מה הסיכוי לחזרה?", "מה אסור אחרי ניתוח?"
- קישור צר בתחתית לאתר הקליניקה וטלפון המזכירה
- ללא תמונות רפואיות ריאליסטיות - רק איקונים סכמתיים

שמור ב-~/Desktop/bcc-patient.html
\`\`\`

5 דקות אחר כך יש דף מוכן להדפסה או לשליחה בדיגיטל.

### 2. ציר זמן החלמה אחרי Mohs

\`\`\`
השתמש ב-skill בשם frontend-design.

בנה דף ציר זמן אופקי (RTL) על החלמה אחרי Mohs בפנים:

- יום 0: תום הניתוח (שעות ראשונות)
- ימים 1-3: החלפת תחבושות, ניקיון
- יום 7: הסרת תפרים (או לא, לפי סוג תפר)
- שבועות 2-4: נפיחות, אודם, תחושות
- חודשים 1-3: השלמת ריפוי, תחילת הצטלקות
- חודשים 6-12: הבשלת הצלקת

לכל שלב:
- מה צפוי להיראות
- מה לעשות
- דגלים אדומים (מתי להתקשר)

בתחתית: טלפון חירום, טלפון מרפאה, שעות פעילות.
שמור ב-~/Desktop/mohs-recovery.html
\`\`\`

הדף עובד גם ב-mobile (מטופל פותח ב-WhatsApp) וגם להדפסה.

### 3. טופס הסכמה מודעת אינטראקטיבי (טיוטה)

\`\`\`
השתמש ב-skill בשם frontend-design.

בנה טיוטת טופס הסכמה מודעת ל-excision של נגע עור חשוד:

מחולק ל-6 סקציות עם checkbox "קראתי והבנתי" לכל אחת:
1. מה הניתוח - תיאור פשוט
2. מטרה וחלופות
3. סיכונים נפוצים (זיהום, דימום, צלקת)
4. סיכונים נדירים (פגיעה עצבית, איבוד תחושה)
5. מה אם הפתולוגיה ממאירה
6. ציפיות לגבי הצלקת

בסוף: חתימה + תאריך + שם מלא.

**חשוב:** הטופס הוא טיוטה בלבד, לא תחליף להסכמה חוקית שעבר ע"י יועץ משפטי.

שמור ב-~/Desktop/consent-draft.html
\`\`\`

שולחים ליועץ משפטי לסיום. חוסכים לו שעה של הכנה.

### 4. אינפוגרפיקה על הגנה מהשמש

\`\`\`
השתמש ב-skill בשם frontend-design.

בנה אינפוגרפיקה של עמוד A4 על הגנה מהשמש, לקליניקה בישראל.

תוכן:
- UV Index - מה זה ואיפה לבדוק
- 5 כללים: קרם, בגדים, כובע, צל 11-15, משקפיים
- תדירות מריחה מחדש
- SPF 30 מול 50
- שאלון עצמי: האם אני בסיכון מוגבר?
- קישור לעמוד באתר הקליניקה על מניעה שניונית

עיצוב: צבעי שמש, איקונים סכמתיים, A4 portrait.
שמור ב-~/Desktop/sun-protection.html
\`\`\`

---

## תהליך עבודה מומלץ

1. **הכן תבנית בסיסית** - הדף הראשון לוקח הכי הרבה זמן. שמור אותו כבסיס.
2. **צור וריאציות לפי מקרה** - BCC, SCC, מלנומה, לימפומה - כל אחד עם הדף שלו.
3. **תרגום במקרה הצורך** - אם מטופל ברוסית/ערבית, שלח לClaude את הקובץ ובקש תרגום + שמירה של העיצוב.
4. **שמור ב-clinic knowledge base** - תיקיית Drive מרכזית עם כל הדפים, נגיש לכל הצוות.
5. **עדכן פעם בשנה** - גיידליינים משתנים. בקש מ-Claude לבדוק מה התעדכן במקורות.

---

## פרומפטים לדוגמה נוספים

### פרומפט 1: דף הסבר למטופל על biopsy

\`\`\`
השתמש ב-frontend-design.
דף לעריכה: "מה קורה לפני, תוך כדי, ואחרי ביופסיית עור?"

3 סקציות:
- לפני: הכנה (כלום לאכול? להפסיק תרופות? מה ללבוש?)
- תוך כדי: הליך בפועל (זריקת הרדמה מקומית, לוקח X דקות, כאב מינימלי)
- אחרי: איך לטפל באזור, מתי להסיר תחבושת, מה לצפות

עיצוב: חם, לא רפואי מדי, בסגנון infographic.
\`\`\`

### פרומפט 2: כרטיס סיכום ביקור

\`\`\`
השתמש ב-frontend-design.
בנה דף של עמוד אחד המשמש "כרטיס סיכום ביקור":

שדות שהרופא ממלא ידנית אחרי הביקור (אפשר ב-HTML editable):
- תאריך ביקור
- אבחנה
- טיפול שניתן היום
- מה הביקור הבא (תאריך, רופא, מטרה)
- הוראות מיוחדות (תרופות, הגבלות)
- טלפון חירום

עיצוב: בסגנון סיכום ביקור רשמי אבל לא מפחיד.
שמור ב-~/Desktop/visit-summary-template.html
\`\`\`

---

## אזהרות וטיפים מעשיים

**frontend-design מייצרת HTML לא PDF.** להדפסה - פתח בדפדפן ועשה Ctrl+P → Save as PDF.

**ה-skill לא יודעת דיוק רפואי.** אם אתה מבקש "הוסף אחוזי חזרה של BCC", צריך להזין לה את המספר. אל תסמוך עליה למידע קליני.

**אל תעלה PII של מטופלים.** הדפים גנריים - השם והפרטים מוקלדים אחר כך.

**RTL לפעמים שבור.** אם ציר זמן יוצא הפוך, הוסף בפרומפט: "כל הדף RTL עם direction: rtl, פונט Heebo או Assistant".

**בדוק במובייל.** מטופלים בישראל פותחים הכל ב-WhatsApp ממובייל. ודא שהדף עובר את מבחן המובייל.

---

## 🔒 פרטיות

דפי ההסבר שנוצרים הם גנריים - הם לא כוללים PII. ההתאמה האישית (אם יש) נעשית ידנית אחרי קבלת התבנית.

אם אתה מבקש דף מותאם אישית ("דף הסבר למטופל X"), אל תכלול את שמו או פרטיו בפרומפט - Claude ייצר תבנית, והתאמה אישית תעשה ידנית.

## מקורות

1. Anthropic. frontend-design skill documentation. https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design
2. Anthropic. Skills overview. https://docs.claude.com/en/docs/claude-apps/skills
3. Coulter A, et al. Patient information materials for health professionals. *BMJ*. 2015;350:h1285. https://pubmed.ncbi.nlm.nih.gov/25820612/
4. Shapiro BL, et al. Effect of visual aids on informed consent comprehension. *Plast Reconstr Surg Glob Open*. 2020;8(4):e2759. https://pubmed.ncbi.nlm.nih.gov/32440403/

---

**הערת עזר קלינית:** חומרי ההסבר שנוצרים הם עזר חינוכי. הם אינם מחליפים את שיחת ההסכמה מדעת ואת הדרישות המשפטיות של הסכמה חוקית.`,
      en: `## Introduction

**frontend-design** is an official Anthropic skill that equips Claude with professional UI design capabilities. Instead of producing generic, boring HTML, it builds pages with thoughtful design, clean aesthetics, and quality user experience. This is especially useful for patient education materials - instead of relying on the printed sheets lying around the clinic (often outdated, in English, or not tailored to the specific case).

:::beginner
**What's a skill?** A skill is an extension that expands Claude's abilities for a specific task. frontend-design is a skill that's added to your Claude account automatically (you can check it in the settings skills list).
:::

---

## Why Visual Education Materials Work Better

Studies have shown that illustrated or schematic education materials significantly improve patient understanding and treatment adherence compared to text-only explanations. In dermatologic surgery this is prominent: a patient who receives a sheet with a recovery timeline before Mohs shows up less often in the ED with unwarranted anxiety and calls less with unnecessary questions after the surgery.

---

## Four Practical Examples

### 1. BCC patient explainer

A 55-year-old patient leaves a consultation with a BCC diagnosis. She wants to understand what it is and what's next.

**Prompt:**

\`\`\`
Use the skill called frontend-design.

Build a standalone HTML page (no external dependencies) on:
"Basal cell carcinoma (BCC) - what it is and what's next" for a 55+ year old patient.

Requirements:
- Two screens: (1) "What is BCC" with a schematic illustration of skin layers and the
  lesion marked, (2) "Treatment options" with a table: Mohs / standard excision /
  cryotherapy / imiquimod
- 18px+ font, warm soothing colors, not scary
- FAQ: "When is the tumor dangerous?", "What's the recurrence risk?",
  "What's restricted after surgery?"
- Narrow link strip at the footer with clinic website and secretary's phone
- No realistic medical images - only schematic icons

Save to ~/Desktop/bcc-patient.html
\`\`\`

5 minutes later there's a page ready to print or share digitally.

### 2. Mohs recovery timeline

\`\`\`
Use the skill called frontend-design.

Build a horizontal timeline page on recovery after facial Mohs:

- Day 0: end of surgery (first hours)
- Days 1-3: dressing changes, cleaning
- Day 7: suture removal (or not, depending on suture type)
- Weeks 2-4: swelling, redness, sensations
- Months 1-3: wound healing complete, scar formation begins
- Months 6-12: scar maturation

For each phase:
- What to expect visually
- What to do
- Red flags (when to call)

At the bottom: emergency phone, clinic phone, hours.
Save to ~/Desktop/mohs-recovery.html
\`\`\`

The page works on mobile (patient opens in WhatsApp) and in print.

### 3. Interactive informed consent draft

\`\`\`
Use the skill called frontend-design.

Build a draft informed consent form for excision of a suspicious skin lesion:

Divided into 6 sections with an "I read and understood" checkbox for each:
1. The procedure - simple description
2. Purpose and alternatives
3. Common risks (infection, bleeding, scar)
4. Rare risks (nerve injury, sensation loss)
5. What if pathology is malignant
6. Scar expectations

At the bottom: signature + date + full name.

**Important:** the form is a draft only, not a substitute for legal consent reviewed by counsel.

Save to ~/Desktop/consent-draft.html
\`\`\`

Send to legal counsel to finalize. You save them an hour of prep.

### 4. Sun protection infographic

\`\`\`
Use the skill called frontend-design.

Build an A4 infographic on sun protection for a high-UV clinic.

Content:
- UV Index - what it is and where to check
- 5 rules: sunscreen, clothing, hat, shade 11-15, sunglasses
- Reapplication frequency
- SPF 30 vs 50
- Self-quiz: Am I at elevated risk?
- Link to a clinic page on secondary prevention

Design: sun tones, schematic icons, A4 portrait.
Save to ~/Desktop/sun-protection.html
\`\`\`

---

## Recommended Workflow

1. **Prepare a base template** - the first page takes the most time. Save it as a base.
2. **Create variations by case** - BCC, SCC, melanoma, lymphoma - each with its own page.
3. **Translate when needed** - if a patient speaks Russian/Arabic, send the file to Claude and ask for translation with the design preserved.
4. **Save to the clinic knowledge base** - a central Drive folder with all the pages, accessible to the whole team.
5. **Update once a year** - guidelines change. Ask Claude to check what's been updated in the sources.

---

## Additional Example Prompts

### Prompt 1: Biopsy patient explainer

\`\`\`
Use frontend-design.
Page to build: "What happens before, during, and after a skin biopsy?"

3 sections:
- Before: preparation (fasting? stop meds? what to wear?)
- During: the actual procedure (local injection, X minutes, minimal pain)
- After: how to care for the area, when to remove the dressing, what to expect

Design: warm, not overly medical, infographic style.
\`\`\`

### Prompt 2: Visit summary card

\`\`\`
Use frontend-design.
Build a one-page "visit summary card":

Fields the physician fills in manually after the visit (editable HTML works):
- Visit date
- Diagnosis
- Treatment given today
- Next visit (date, physician, purpose)
- Special instructions (medications, restrictions)
- Emergency phone

Design: formal visit summary but not scary.
Save to ~/Desktop/visit-summary-template.html
\`\`\`

---

## Warnings and Practical Tips

**frontend-design produces HTML, not PDF.** To print - open in a browser and Ctrl+P → Save as PDF.

**The skill doesn't know medical accuracy.** If you ask to "add BCC recurrence percentages", you have to feed it the number. Don't rely on it for clinical data.

**Don't upload patient PII.** Pages are generic - the name and details are typed later.

**RTL sometimes breaks.** If a timeline renders flipped, add to the prompt: "entire page RTL with direction: rtl, font Heebo or Assistant".

**Check on mobile.** Patients open everything from WhatsApp on mobile. Make sure the page passes the mobile test.

---

## 🔒 Privacy

The generated explainer pages are generic - they don't include PII. Personalization (if any) happens manually after receiving the template.

If you ask for a personalized page ("explainer for patient X"), don't include their name or details in the prompt - Claude creates a template, and personalization happens manually.

## Sources

1. Anthropic. frontend-design skill documentation. https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design
2. Anthropic. Skills overview. https://docs.claude.com/en/docs/claude-apps/skills
3. Coulter A, et al. Patient information materials for health professionals. *BMJ*. 2015;350:h1285. https://pubmed.ncbi.nlm.nih.gov/25820612/
4. Shapiro BL, et al. Effect of visual aids on informed consent comprehension. *Plast Reconstr Surg Glob Open*. 2020;8(4):e2759. https://pubmed.ncbi.nlm.nih.gov/32440403/

---

**Clinical note:** The educational materials are learning aids. They do not replace the informed consent conversation and do not substitute for the legal requirements of lawful consent.`,
    },
  },
];

export function getFeatureGuideBySlug(slug: string): FeatureGuide | undefined {
  return featureGuides.find(g => g.id === slug);
}
