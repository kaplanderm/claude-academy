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
    title: { he: 'אבחנה מבדלת וטיפול', en: 'Diagnosis & Treatment' },
    description: {
      he: 'אבחנה מבדלת, פרוטוקולי טיפול, אינטראקציות תרופות ופרשנות מעבדה',
      en: 'Differential diagnosis, treatment protocols, drug interactions, and lab interpretation',
    },
    content: {
      he: `## מבוא

Claude (קלוד) הוא עוזר מבוסס **בינה מלאכותית** (AI - Artificial Intelligence) שפותח על ידי חברת Anthropic. אבל מה זה בעצם "בינה מלאכותית"? בפשטות: זו תוכנת מחשב שעברה תהליך "לימוד" על כמויות עצומות של טקסט - כולל ספרות רפואית, מאמרים מדעיים, ספרי לימוד וקווים מנחים - ולכן היא יכולה "לשוחח" אתכם בשפה טבעית ולספק מידע רלוונטי.

**חשוב להבהיר מהרגע הראשון:** Claude **אינו מחליף** את השיפוט הקליני של הרופא. הוא כלי עזר - חשבו עליו כמו ספר עיון דיגיטלי מתקדם שאפשר "לדבר" איתו, לשאול אותו שאלות, ולקבל תשובות מפורטות. בדיוק כמו שהייתם מעיינים ב-UpToDate או בספר לימוד לפני קבלת החלטה - כך תוכלו להשתמש ב-Claude.

### מה Claude יודע לעשות?
- לעבד כמויות גדולות של מידע רפואי ולתמצת אותן
- להציע אבחנות מבדלות על סמך תמונה קלינית
- לבדוק אינטראקציות בין תרופות
- לפרש תוצאות מעבדה
- לסכם מאמרים מדעיים
- לעזור בניסוח תיעוד רפואי

### מה Claude לא יודע לעשות?
- הוא **לא** בודק מטופלים
- הוא **לא** יכול לצפות במטופל או לראות תמונות בזמן אמת (אם כי ניתן להעלות תמונות לשיחה)
- הוא **עלול לטעות** - לפעמים הוא "ממציא" מידע שנשמע אמין אבל שגוי (תופעה שנקראת "הזיה" - ראו הסבר למטה)
- הידע שלו לא תמיד עדכני לשנה הנוכחית

---

## שימושים עיקריים

### 1. אבחנה מבדלת (Differential Diagnosis)

זהו השימוש המרכזי והחזק ביותר של Claude עבור רופאים. **אבחנה מבדלת** היא רשימה מסודרת של כל האבחנות האפשריות שיכולות להסביר את מכלול הסימנים והסימפטומים של מטופל.

**איך להפיק את המקסימום?** ככל שתתנו יותר פרטים, כך התשובה תהיה מדויקת ורלוונטית יותר. הנה מה שכדאי לכלול:

| פרט | למה זה חשוב | דוגמה |
|------|-------------|--------|
| גיל ומין | שכיחות אבחנות משתנה | "גבר בן 55" |
| תלונה עיקרית | מיקוד הדיון | "פריחה מגרדת בכפות הידיים" |
| משך הסימפטומים | חד vs כרוני | "3 שבועות" |
| אופי ההתפתחות | חד, הדרגתי, חוזר | "הופיע פתאום לאחר מאמץ" |
| רקע רפואי | מחלות רקע רלוונטיות | "סוכרת סוג 2, יתר לחץ דם" |
| תרופות קבועות | אינטראקציות ותופעות לוואי | "Metformin, Amlodipine" |
| ממצאים בבדיקה | סימנים קליניים | "פפולות אריתמטוזיות עם קשקשת" |
| בדיקות שנעשו | תוצאות קיימות | "ANA שלילי, ESR 45" |

### 2. סקירת פרוטוקולי טיפול

Claude יכול לסקור את הטיפול שאתם שוקלים ולהשוות אותו לקווים המנחים (guidelines) העדכניים. זה שימושי במיוחד כאשר:
- אתם מתלבטים בין שתי גישות טיפוליות
- אתם רוצים לוודא שהטיפול תואם את ההמלצות האחרונות
- אתם נתקלים במקרה שאינו שגרתי לתחום ההתמחות שלכם

**דוגמה מעשית:** "מטופלת עם פסוריאזיס מתונה-קשה שנכשלה ב-Methotrexate. מה הקו הטיפולי הבא לפי הקווים המנחים של AAD/EDF?"

### 3. בדיקת אינטראקציות תרופות

במקום לבדוק כל זוג תרופות בנפרד, תוכלו לתת ל-Claude את כל רשימת התרופות בבת אחת. הוא יסרוק את כל הקומבינציות האפשריות ויציג:
- אינטראקציות מסוכנות (contraindications)
- אינטראקציות שדורשות ניטור
- אינטראקציות פוטנציאליות שכדאי להכיר
- התאמות מינון נדרשות

**זרימת עבודה מומלצת:**
1. רשמו את כל התרופות כולל מינונים
2. ציינו את התרופה החדשה שמתוכננת
3. בקשו מ-Claude לבדוק אינטראקציות
4. **אמתו** את הממצאים מול מאגר תרופות מוכר (Lexicomp, Micromedex)

### 4. פרשנות תוצאות מעבדה

Claude יכול לעזור לפרש צירופים של ממצאי מעבדה - לא רק לומר "גבוה" או "נמוך", אלא להסביר את הקשרים בין ממצאים שונים ולהציע מהלך בירור (workup) מסודר.

**למה זה שימושי?**
- כשיש צירוף לא שגרתי של ממצאים
- כשתוצאות סותרות לכאורה
- כשצריך לתכנן בירור שלב-אחר-שלב
- כשצריך להסביר ממצאים למטופל בשפה פשוטה

### 5. ניהול מקרים מורכבים (Multi-morbidity)

מטופלים עם מספר מחלות רקע מציבים אתגר ייחודי: הטיפול במחלה אחת עלול להחמיר מחלה אחרת, או שתרופות לתחומים שונים עלולות להתנגש.

Claude מצטיין בלראות את "התמונה הגדולה" - הוא יכול לשקלל בו-זמנית:
- רשימת מחלות רקע מלאה
- כל התרופות הקבועות
- מגבלות כלייתיות/כבדיות
- גיל והיסטוריה רלוונטית
- העדפות המטופל ואיכות חיים

### 6. עדכון ידע רפואי (Staying Current)

הרפואה מתקדמת במהירות - מאמרים חדשים, קווים מנחים מעודכנים, תרופות חדשות. Claude יכול לעזור:
- לסכם מאמרים חדשים בתחום שלכם
- להשוות בין גרסאות שונות של קווים מנחים
- להסביר מנגנוני פעולה של תרופות חדשות
- להכין סקירה לקראת הרצאה או ועדה

**שימו לב:** תמיד בדקו את תאריך הידע של Claude. מידע חדש מאוד עלול לא להיכלל. כדאי לבקש מ-Claude לציין על אילו מקורות הוא מתבסס.

---

## מושגי מפתח - מילון למתחילים

אם אתם חדשים בעולם ה-AI, הנה הסברים פשוטים למונחים שתיתקלו בהם:

### Prompt (פרומפט) - ההוראה שאתם נותנים
**פרומפט** הוא פשוט הטקסט שאתם כותבים ל-Claude - השאלה, הבקשה, או תיאור המקרה. חשבו על זה כמו כתיבת **בקשת ייעוץ** (consultation request): ככל שתהיו מדויקים ומפורטים יותר, כך התשובה תהיה טובה יותר.

**פרומפט גרוע:** "מה זה פריחה אדומה?"
**פרומפט טוב:** "אני רופא עור. מטופלת בת 35, בריאה בד"כ, עם פריחה אריתמטוזית פפולרית סימטרית על גפיים, 5 ימים, ללא גרד, ללא חום. מה האבחנה המבדלת?"

### Context Window (חלון הקשר) - כמה Claude "זוכר"
לכל שיחה עם Claude יש מגבלה על כמות המידע שהוא יכול "להחזיק בראש" - זה נקרא **חלון הקשר**. ב-Claude הנוכחי זה כ-200,000 מילים, שזה כמו **ספר של 600 עמודים**. בפועל, זה אומר שאתם יכולים:
- לנהל שיחה ארוכה ומפורטת
- להעלות מסמכים ארוכים (מאמרים, קווים מנחים)
- לתאר מקרים מורכבים עם כל הפרטים

**חשוב:** כשהשיחה מגיעה לגבול, Claude עלול "לשכוח" מה נאמר בתחילתה. במקרה כזה, פתחו שיחה חדשה.

### Hallucination (הזיה) - כשה-AI ממציא
זו אחת התופעות החשובות ביותר שצריך להכיר. לפעמים Claude "ממציא" מידע שנשמע מאוד אמין ומקצועי - אבל הוא פשוט שגוי. למשל:
- ציטוט מאמר שלא קיים (עם שם מחברים, שנה, וכותרת - הכל בדוי)
- מינון שגוי של תרופה
- הנחיה קלינית שלא קיימת בקווים המנחים

**כלל אצבע:** ככל שהטענה ספציפית יותר (מספר, שם מאמר, סטטיסטיקה), כך חשוב יותר לאמת אותה ממקור עצמאי.

### Projects (פרויקטים) - תיקיות חכמות ב-claude.ai
**פרויקט** ב-claude.ai הוא כמו תיקייה שבה אתם יכולים:
- לשמור **הנחיות קבועות** (System Prompt) - למשל "אתה עוזר לרופא עור ישראלי, ענה בעברית"
- להעלות **קבצים** - קווים מנחים, פרוטוקולים, טבלאות
- לנהל **מספר שיחות** שכולן חולקות את אותו ידע בסיסי

זה חוסך לכם לחזור על אותן הוראות בכל שיחה מחדש.

### Temperature (טמפרטורה) - רמת ה"יצירתיות"
**טמפרטורה** היא הגדרה שקובעת עד כמה התשובות של Claude "יצירתיות" לעומת "צפויות":
- **טמפרטורה נמוכה** (0-0.3): תשובות עקביות וצפויות - **מומלץ לשימוש רפואי**
- **טמפרטורה גבוהה** (0.7-1): תשובות מגוונות ויצירתיות יותר - פחות מתאים לרפואה

ברוב הפלטפורמות הרגילות (claude.ai) אין לכם שליטה ישירה בהגדרה זו, אבל כדאי להכיר את המושג.

### Token (טוקן) - יחידת טקסט
**טוקן** הוא יחידת המדידה של טקסט עבור AI. בממוצע, מילה אחת באנגלית שווה כ-1.3 טוקנים, ובעברית כ-2-3 טוקנים (כי עברית "עולה" יותר לעיבוד). זה רלוונטי בעיקר להבנת תמחור:
- **Claude Pro** (מנוי חודשי ~$20) - מכסה גבוהה לשימוש יומי
- **Claude API** (לפי שימוש) - תשלום לפי כמות טוקנים

---

## פרומפטים לדוגמה

להלן דוגמאות מפורטות לפרומפטים שתוכלו להתאים לצרכים שלכם. כל דוגמה כוללת הסבר למה הפרומפט מנוסח כך.

### 1. מקרה דרמטולוגי - נגע פיגמנטי חשוד

הפרומפט הבא מדגים הצגת מקרה לפי קריטריוני ABCDE. שימו לב לרמת הפירוט:

\`\`\`
אני רופא עור. מטופל בן 52, גבר, פוטוטיפ II (עור בהיר, נוטה להישרף בשמש). מגיע עם נגע פיגמנטי בגב עליון שהשתנה ב-6 החודשים האחרונים.

ממצאי בדיקה:
- Asymmetry: א-סימטריה ברורה
- Border: גבולות לא סדירים עם "כניסות" (notching)
- Color: ריבוי צבעים - חום כהה, שחור, ואזור כחלחל
- Diameter: 8 מ"מ
- Evolution: המטופל מדווח על גדילה וכהייה

רקע: היסטוריה של כוויות שמש חוזרות בילדות. אין היסטוריה משפחתית של מלנומה.

אנא ספק:
1. אבחנה מבדלת מסודרת לפי סבירות
2. המלצה לבירור
3. סימנים דרמוסקופיים שכדאי לחפש
\`\`\`

**למה הפרומפט הזה טוב?** הוא כולל את כל המרכיבים הקריטיים: גיל, מין, פוטוטיפ, היסטוריה, ממצאי ABCDE מובנים, ובקשה מפורשת למה אתם רוצים בתשובה.

### 2. בדיקת אינטראקציות עם 5+ תרופות

כשמטופל לוקח תרופות רבות, הפרומפט הבא חוסך זמן:

\`\`\`
מטופלת בת 68 עם הרקע הבא:
- יתר לחץ דם
- סוכרת סוג 2
- פרפור עליות
- דיכאון

תרופות קבועות:
1. Metformin 1000mg x2/d
2. Amlodipine 5mg x1/d
3. Apixaban (Eliquis) 5mg x2/d
4. Escitalopram 10mg x1/d
5. Omeprazole 20mg x1/d

מתכננים להוסיף: Fluconazole 150mg חד-פעמי לטיפול בקנדידיאזיס.

אנא בדוק:
1. אינטראקציות בין כל התרופות הקיימות
2. אינטראקציות עם התרופה החדשה (Fluconazole)
3. דרג את החומרה: קריטי / משמעותי / קל
4. המלצות פרקטיות
\`\`\`

### 3. פרשנות ספירת דם (CBC) עם חריגות

כשתוצאות מעבדה מציגות תמונה לא ברורה:

\`\`\`
אני רופא משפחה. מטופל בן 42, גבר, מגיע לבדיקה שגרתית. תוצאות CBC:

- WBC: 3.2 x10^9/L (נמוך; תקין 4.5-11)
- Hemoglobin: 10.8 g/dL (נמוך; תקין 13.5-17.5)
- MCV: 105 fL (גבוה; תקין 80-100)
- Platelets: 118 x10^9/L (נמוך; תקין 150-400)
- RDW: 16.2% (גבוה; תקין <14.5)

בדיקות נוספות:
- B12: 148 pg/mL (נמוך; תקין 200-900)
- Folate: תקין
- Reticulocytes: 0.8% (נמוך)
- LDH: 580 U/L (גבוה)

אנא:
1. מה הפרשנות של צירוף הממצאים?
2. אבחנה מבדלת
3. בירור נוסף מומלץ
4. דחיפות - האם זה דורש הפניה מיידית?
\`\`\`

### 4. מקרה מורכב - סוכרת + CKD + זיהום עורי

כשיש מספר בעיות מתחרות:

\`\`\`
מטופל בן 71, גבר, עם:
- סוכרת סוג 2 (HbA1c 8.2%)
- CKD שלב 3b (eGFR 38)
- אי-ספיקת לב NYHA II
- צלוליטיס ברגל שמאל (אריתמה, חום מקומי, בצקת, 10x15 ס"מ, ללא מוגלה)

תרופות נוכחיות: Insulin Glargine 24U, Empagliflozin 10mg, Furosemide 40mg, Carvedilol 12.5mg, Aspirin 100mg

שאלות:
1. בחירת אנטיביוטיקה - מה מתאים בהתחשב ב-eGFR 38?
2. האם צריך התאמת מינון?
3. האם להמשיך Empagliflozin בזמן הזיהום?
4. מתי לשקול אשפוז?
5. מעקב מומלץ
\`\`\`

### 5. פריחה בילדות - אבחנה מבדלת ילדים

דגש על גילאי ילדות:

\`\`\`
אני רופאת ילדים. ילדה בת 6, בריאה בד"כ, חיסונים עדכניים.

מגיעה עם:
- חום 38.5 מעלות מזה 3 ימים
- פריחה שהחלה בפנים (לחיים אדומות, "slapped cheek" appearance) ואז התפשטה לגוף - מקולו-פפולרית, רטיקולרית (דמוית רשת)
- בשבוע שעבר הייתה הצטננות קלה
- ללא גרד
- מצב כללי טוב, ללא לימפאדנופתיה

אבחנה מבדלת לפריחות ויראליות בילדות (exanthems):
1. רשימה מסודרת
2. מאפיינים מבדלים של כל אבחנה
3. בירור מומלץ
4. מתי להפנות לרופא עור / מיון
\`\`\`

### 6. חירום - חשד ל-TEN/SJS

מקרה דחוף שבו Claude יכול לעזור בזיהוי מהיר:

\`\`\`
מקרה דחוף. מטופלת בת 34, לפני 10 ימים התחילה Allopurinol 300mg.

מגיעה עם:
- חום 39.2
- כאבי גרון ועיניים בוערות מ-48 שעות
- פריחה מקולרית שהתפשטה במהירות על פני הגו, הגפיים והפנים
- Target-like lesions
- שלפוחיות (bullae) על 5% משטח הגוף
- Nikolsky sign חיובי באזורים מוגבלים
- שפתיים - שחיקות עם קרומים
- עיניים - דלקת לחמית עם הפרשה
- ללא מעורבות איברי מין כרגע

שאלות דחופות:
1. האם זה TEN, SJS, או SJS-TEN overlap?
2. SCORTEN score - מה הניקוד הצפוי?
3. ניהול מיידי - צעדים ראשונים
4. האם להפסיק את Allopurinol?
5. הפניה ואשפוז - מה הדחיפות?
\`\`\`

### 7. השוואת פרוטוקולי טיפול - ביולוגיים לפסוריאזיס

כשצריך להחליט בין אפשרויות טיפוליות:

\`\`\`
אני רופא עור. מטופל בן 45 עם פסוריאזיס בפלאקים קשה (PASI 18, BSA 22%), נכשל ב-Methotrexate (חוסר יעילות) וב-Cyclosporine (עלייה בקראטינין).

רקע נוסף: BMI 32, שומנים גבוהים, HBsAg שלילי, PPD שלילי, QuantiFERON שלילי.

אנא השווה בין:
1. Anti-IL-17 (Secukinumab, Ixekizumab)
2. Anti-IL-23 (Guselkumab, Risankizumab)
3. Anti-TNF (Adalimumab)

לפי הקריטריונים:
- יעילות (PASI 90 response rates)
- פרופיל בטיחות
- נוחות מתן (תדירות הזרקות)
- התאמה למטופל עם BMI גבוה ושומנים גבוהים
- עלות יחסית בישראל
\`\`\`

### 8. תכנון מעקב - נגע חשוד

כשהאבחנה אינה חד-משמעית:

\`\`\`
מטופלת בת 38 עם נגע פיגמנטי בשוק (3 מ"מ), דרמוסקופיה מראה:
- Reticular pattern עם אזורי regression מוקדמים
- אין רשת לא טיפוסית
- ללא Blue-white veil
- גבולות סדירים ברובם

ההחלטה הקלינית: מעקב (ולא כריתה מיידית).

אנא ספק:
1. מרווח מעקב מומלץ
2. סימנים דרמוסקופיים שידרשו שינוי בגישה
3. הנחיות למטופלת - מה לעקוב אחריו בבית
4. תיעוד מומלץ (צילום, מיפוי דרמוסקופי)
5. קריטריונים לכריתה עתידית
\`\`\`

### 9. בירור מצב דרמטולוגי נדיר

כשנתקלים באבחנה לא שגרתית:

\`\`\`
מטופלת בת 55, מגיעה עם:
- שלפוחיות מתוחות (tense bullae) על עור תקין ואריתמטוזי
- בעיקר על הגו, הבטן, והמשטחים הפלקסוריים
- Nikolsky שלילי
- גרד עז
- הופיע לפני חודשיים, מחמיר בהדרגה
- רקע: Linagliptin (תוסף לטיפול בסוכרת) - החל לפני 4 חודשים

חשד קליני: Bullous Pemphigoid, אולי drug-induced (DPP-4 inhibitor associated).

אנא ספק:
1. בירור מומלץ (סרולוגיה, ביופסיה, DIF)
2. האם להפסיק Linagliptin?
3. טיפול קו ראשון
4. פרוטוקול ניטור
5. מה מבדיל בין BP רגיל ל-drug-induced BP?
\`\`\`

---

## דוגמה מעשית: תרחיש קליני מלא

להלן דוגמה מלאה שמדגימה את כל תהליך העבודה עם Claude - מהצגת המקרה ועד התיעוד.

### שלב 1: הצגת המקרה ל-Claude

מטופלת בת 28 מגיעה לקליניקת עור עם פריחה לא שגרתית. ככה הייתם מציגים את המקרה:

\`\`\`
אני רופא עור בישראל. אנא עזור לי עם המקרה הבא.

מטופלת בת 28, בריאה בד"כ, ללא תרופות קבועות, ללא אלרגיות ידועות.

CC (סיבת הפנייה): פריחה על הגו, 2 שבועות.

HPI: לפני כשבועיים הבחינה בכתם בודד, עגלגל, ורוד-חום, בקוטר 3 ס"מ על החזה ("herald patch"). במהלך השבוע האחרון הופיעו עשרות כתמים קטנים יותר (1-2 ס"מ) על הגב, הבטן, והחזה, בהפצה שעוקבת אחרי קווי Langer ("Christmas tree pattern"). הכתמים הקטנים עם קשקשת עדינה בשוליים (collarette of scale). גרד קל.

PMH: אין
Medications: אין
Social: לא חזרה מטיול לחו"ל, אין חשיפה למחלות מין

בדיקה:
- Oval salmon-colored patches with peripheral collarette of scale
- Christmas tree distribution on back
- Herald patch on anterior chest
- No mucosal involvement
- No lymphadenopathy

אנא ספק אבחנה מבדלת ותכנית בירור.
\`\`\`

### שלב 2: מבנה התשובה הצפויה מ-Claude

Claude יגיב בדרך כלל עם מבנה כזה:

**אבחנה מבדלת (לפי סבירות יורדת):**
1. **Pityriasis Rosea** - ההסתברות הגבוהה ביותר, עם herald patch, Christmas tree pattern, collarette of scale
2. **Secondary Syphilis** - חייב לשלול, גם אם ההיסטוריה נראית "נקייה"
3. **Guttate Psoriasis** - בדרך כלל לאחר זיהום סטרפטוקוקלי
4. **Nummular Dermatitis** - פחות סביר בהתחשב בהפצה
5. **Tinea Corporis** - KOH שולל
6. **Drug Eruption** - פחות סביר ללא תרופות

**בירור מומלץ:**
- RPR/VDRL (לשלילת עגבת - חובה!)
- KOH prep מנגע נבחר
- שקילת ASO/Anti-DNase B אם יש היסטוריה של כאב גרון
- ביופסיה אם האבחנה לא ברורה אחרי 6-8 שבועות

### שלב 3: שאלות המשך

לאחר קבלת התשובה, תוכלו לשאול שאלות ממוקדות:

\`\`\`
תודה. שאלות המשך:
1. RPR חזר שלילי. האם זה שולל עגבת סופית?
2. המטופלת בהיריון בשבוע 12 - האם זה משנה את הגישה?
3. הגרד מפריע לה מאוד - מה הטיפול הסימפטומטי המומלץ בהיריון?
\`\`\`

### שלב 4: פרשנות והפעלת שיקול דעת

כש-Claude עונה על שאלות ההמשך, אתם:
- **מאמתים** את ההמלצות מול UpToDate או מקור אחר
- **מפעילים שיפוט קליני** - Claude הוא חוות דעת נוספת, לא האחרונה
- **מתאימים** להקשר הישראלי - זמינות תרופות, קופות חולים, הנחיות מקומיות

### שלב 5: תיעוד

מומלץ לתעד שימוש ב-AI בקובץ הרפואי:

> "אבחנה מבדלת נשקלה בסיוע כלי AI (Claude, Anthropic). האבחנה הסופית והתכנית הטיפולית נקבעו על סמך שיקול דעת קליני."

---

## שיטת DermUnbound: שימוש בטוח ב-AI קליני

**DermUnbound** היא מתודולוגיה שפיתחנו לשימוש בטוח ואחראי ב-AI בפרקטיקה הדרמטולוגית. היא מבוססת על חמישה שלבים:

### שלב 1: אנונימיזציה - הסרת פרטים מזהים

**זה השלב הקריטי ביותר.** לפני ששולחים כל מידע ל-Claude, יש להסיר:

| מה להסיר | מה לכתוב במקום | דוגמה |
|-----------|----------------|--------|
| שם מלא | לא לציין | ❌ "יוסי כהן" → ✅ "מטופל" |
| תעודת זהות | לא לציין | ❌ "012345678" → ✅ (לא מזכירים) |
| תאריך לידה | גיל בלבד | ❌ "15.03.1985" → ✅ "בן 41" |
| כתובת | אזור כללי | ❌ "הרצל 5, ת"א" → ✅ "מרכז הארץ" |
| טלפון | לא לציין | ❌ "050-1234567" → ✅ (לא מזכירים) |
| תאריכי אשפוז | פרק זמן | ❌ "5.1.26" → ✅ "לפני חודשיים" |

### שלב 2: הצגת מקרה מובנית

השתמשו במבנה אחיד - זה משפר את איכות התשובות:

\`\`\`
[תחום ההתמחות שלי]
מטופל/ת בן/בת [גיל], [מין]

CC: [תלונה עיקרית]
HPI: [סיפור המחלה הנוכחית]
PMH: [רקע רפואי]
Medications: [תרופות]
Allergies: [אלרגיות]
Exam: [ממצאי בדיקה]
Labs: [תוצאות מעבדה רלוונטיות]

שאלות ספציפיות:
1. ...
2. ...
\`\`\`

### שלב 3: אימות צולב (Cross-Reference)

**לעולם אל תסתמכו על תשובת Claude בלבד.** תמיד אמתו מול:
- UpToDate
- קווים מנחים עדכניים (AAD, EDF, BAD)
- Lexicomp / Micromedex (לתרופות)
- פנייה לעמית מומחה כשיש ספק

**כלל:** אם Claude אומר משהו שנשמע לכם לא נכון - כנראה שזה לא נכון. סמכו על האינסטינקט הקליני שלכם.

### שלב 4: תיעוד

תעדו בקובץ הרפואי כשהשתמשתם ב-AI:
- ציינו שנעשה שימוש בכלי AI
- הדגישו שההחלטה הקלינית הסופית היא של הרופא
- זה מגן עליכם מבחינה מדיקו-לגלית ומוסיף שקיפות

### שלב 5: למידה מתמשכת

בנו לעצמכם "ספרייה" של פרומפטים שעובדים:
- שמרו פרומפטים שנתנו תשובות טובות
- שפרו פרומפטים שנתנו תשובות חלקיות
- שתפו עם עמיתים (בהסרת מידע מזהה כמובן)
- עקבו אחרי עדכוני Claude - הכלי משתפר כל הזמן

[מידע נוסף על שימוש בטוח ב-AI ברפואה - מחקר DermUnbound](https://kaplanclinic.co.il/he/derm-ai)

---

## טיפים מתקדמים

### 1. צרו פרויקט "עוזר קליני" ב-claude.ai
היכנסו ל-claude.ai, לחצו על "Projects", וצרו פרויקט חדש. בהנחיות המערכת (System Prompt) כתבו:

\`\`\`
אתה עוזר קליני לרופא עור ישראלי. ענה תמיד בעברית רפואית מקצועית. כשאתה מציע אבחנה מבדלת, סדר לפי סבירות. כשאתה ממליץ על טיפול, ציין את רמת העדות (evidence level). הסתמך על קווים מנחים עדכניים של AAD, EDF, BAD.
\`\`\`

### 2. העלו קווים מנחים כ-PDF
בתוך הפרויקט, העלו קבצי PDF של הקווים המנחים החשובים לכם. Claude יוכל להתייחס אליהם ישירות בתשובות.

### 3. השתמשו בתבניות אחידות
צרו לעצמכם תבנית קבועה להצגת מקרים (כמו בשלב 2 של שיטת DermUnbound). עקביות בפורמט = עקביות באיכות התשובות.

### 4. שרשרת פרומפטים (Prompt Chaining)
במקום לשאול הכל בשאלה אחת, פרקו לשלבים:
1. **קודם:** "מה האבחנה המבדלת למקרה הזה?"
2. **אחר כך:** "בוא נתמקד באפשרות מספר 2 - Cutaneous Lupus. מה הבירור הספציפי?"
3. **ואז:** "אם הביופסיה מאשרת Lupus - מה פרוטוקול הטיפול?"

### 5. בקשו מ-Claude להסביר את ההיגיון
הוסיפו לפרומפט: "הסבר את ההיגיון מאחורי כל שלב בתשובתך." זה עוזר לכם להעריך את איכות התשובה ולזהות טעויות.

### 6. הכנה לוועדות (Tumor Board / M&M)
Claude יכול לעזור להכין הצגת מקרה מסודרת, לסכם את הספרות הרלוונטית, ולהציע נקודות לדיון.

### 7. השוואת קווים מנחים בינלאומיים
"השווה את ההמלצות לטיפול ב-[מצב] בין הקווים המנחים האמריקאים (AAD), האירופיים (EDF), והבריטיים (BAD)."

### 8. יצירת תרחישי לימוד
Claude יכול ליצור מקרים קליניים (case-based learning) להוראת מתמחים - מקרה, שאלות, ותשובות מפורטות.

### 9. סיכום מאמרים מדעיים
העלו מאמר (PDF) לשיחה ובקשו: "סכם את המאמר הזה ב-5 נקודות עיקריות, כולל: שאלת המחקר, שיטה, תוצאות עיקריות, מגבלות, ומשמעות קלינית."

---

## פלטפורמה מומלצת

### claude.ai עם Projects - מומלץ לרוב הרופאים
**מה זה?** אתר claude.ai הוא הדרך הפשוטה ביותר לעבוד עם Claude. נכנסים, נרשמים, ומתחילים לכתוב.

**מה זה Projects?** תכונה שמאפשרת ליצור "תיקיות חכמות" - כל תיקייה שומרת:
- הנחיות קבועות (Claude "יודע" שאתם רופאי עור, למשל)
- קבצים שהעליתם (קווים מנחים, פרוטוקולים)
- היסטוריית שיחות

**איך מתחילים?**
1. היכנסו ל-claude.ai ופתחו חשבון (Google, email)
2. שדרגו ל-Claude Pro ($20/חודש) - שווה את ההשקעה
3. לחצו על "Projects" בתפריט
4. צרו פרויקט חדש - למשל "דרמטולוגיה קלינית"
5. הוסיפו System Prompt (ראו דוגמה למעלה)
6. התחילו שיחה חדשה בתוך הפרויקט

### Claude Desktop App - לשאלות יומיומיות מהירות
אפליקציה שמותקנת על המחשב. נוחה לשאלות קצרות תוך כדי עבודה, בלי לפתוח דפדפן. זמינה ל-Windows וגם ל-Mac.

### Claude Code - לניתוח נתונים
כלי שורת פקודה (command-line) למתקדמים. מתאים ל:
- ניתוח נתוני מחקר
- עיבוד קבצי מעבדה
- אוטומציה של משימות חוזרות

**שימו לב:** כלי זה דורש ידע טכני. אם אתם מעוניינים, בקשו עזרה מצוות ה-IT של המוסד שלכם.

### API - לשילוב מוסדי
**מה זה API?** זו דרך שבה מערכת מחשב אחת "מדברת" עם מערכת אחרת. למשל, בית חולים יכול לשלב את Claude בתוך מערכת הרשומות הרפואיות (EMR) שלו, כך שהרופאים ישתמשו ב-Claude ישירות מתוך המערכת שהם מכירים.

זה דורש פיתוח מצד צוות טכנולוגי, אבל מאפשר:
- שילוב בזרימת העבודה הקיימת
- אנונימיזציה אוטומטית
- תיעוד אוטומטי של שימוש ב-AI
- שליטה מוסדית על הגדרות ופרטיות

---

## 🔒 פרטיות ואבטחה

### מה לעולם לא לשתף עם Claude

| קטגוריה | דוגמאות | הסבר |
|----------|---------|-------|
| **שמות** | שם מלא, שם משפחה | מידע מזהה ישיר |
| **מספרי זיהוי** | ת.ז., דרכון, קופ"ח | מידע מזהה ישיר |
| **תאריכים** | תאריך לידה, אשפוז | ניתן לזהות בשילוב עם מידע אחר |
| **כתובות** | רחוב, עיר, מיקוד | מידע מזהה |
| **טלפונים/מיילים** | כל פרטי קשר | מידע מזהה ישיר |
| **תמונות עם מזהים** | תמונות עם שם/ת.ז. | גם אם הנגע רלוונטי - חתכו את המזהים |

### כך מבצעים אנונימיזציה נכונה

**לפני:**
> "יוסי כהן, ת.ז. 012345678, יליד 15.03.1985, מרח' הרצל 5 תל אביב, טל' 050-1234567, אושפז ב-5.1.2026 בבילינסון..."

**אחרי:**
> "מטופל בן 41, גבר, מרכז הארץ, אושפז לפני חודשיים במחלקה פנימית..."

### חשבון חינמי מול חשבון בתשלום

| | חינמי | Pro ($20/חודש) | Team ($25/משתמש/חודש) |
|--|-------|----------------|----------------------|
| **מודל** | Claude בסיסי | Claude המתקדם ביותר | Claude המתקדם ביותר |
| **שימוש יומי** | מוגבל | גבוה יותר | גבוה מאוד |
| **Projects** | לא | כן | כן |
| **אימון על הנתונים שלכם** | לא* | לא* | לא |

*Anthropic מצהירה שאינה משתמשת בשיחות לאימון מודלים, אלא אם אישרתם זאת.

### המלצות DermUnbound לפרטיות
1. **השתמשו בחשבון Pro** - יותר שליטה ותכונות
2. **הפעילו אנונימיזציה תמיד** - גם אם "זה סתם שאלה קצרה"
3. **אל תעלו קבצים עם מידע מזהה** - בדקו PDF-ים לפני העלאה
4. **הכירו את מדיניות הפרטיות** - קראו את התנאים של Anthropic
5. **במוסד רפואי** - בדקו את מדיניות המוסד לגבי שימוש ב-AI חיצוני

[מדיניות פרטיות ושימוש בטוח](https://kaplanclinic.co.il/he/derm-ai)`,
      en: `## Introduction

Claude is an AI (Artificial Intelligence) assistant developed by Anthropic that can help physicians with clinical decision-making. But what exactly is "AI"? Simply put, it is a computer program that has been "trained" on vast amounts of text - including medical literature, scientific articles, textbooks, and clinical guidelines - so it can converse with you in natural language and provide relevant information.

**An important clarification from the start:** Claude does **not** replace a physician's clinical judgment. It is an assistive tool - think of it as an advanced digital reference book that you can "talk to," ask questions, and receive detailed answers. Just as you might consult UpToDate or a textbook before making a decision, you can use Claude in the same way.

### What Claude can do:
- Process large volumes of medical information and summarize them
- Suggest differential diagnoses based on a clinical picture
- Check drug interactions
- Interpret lab results
- Summarize scientific articles
- Assist with medical documentation

### What Claude cannot do:
- It does **not** examine patients
- It **cannot** observe a patient or see real-time images (though you can upload images to the conversation)
- It **can make mistakes** - sometimes it "invents" information that sounds credible but is incorrect (a phenomenon called "hallucination" - see explanation below)
- Its knowledge may not always be current to the present year

---

## Key Use Cases

### 1. Differential Diagnosis

This is the most powerful and central use of Claude for physicians. A **differential diagnosis** is an organized list of all possible diagnoses that could explain a patient's signs and symptoms.

**How to get the best results?** The more detail you provide, the more accurate and relevant the response. Here is what to include:

| Detail | Why It Matters | Example |
|--------|---------------|---------|
| Age and sex | Disease prevalence varies | "55-year-old male" |
| Chief complaint | Focuses the discussion | "Pruritic rash on palms" |
| Duration of symptoms | Acute vs. chronic | "3 weeks" |
| Onset pattern | Sudden, gradual, recurrent | "Appeared suddenly after exertion" |
| Medical history | Relevant comorbidities | "Type 2 diabetes, hypertension" |
| Current medications | Interactions, adverse effects | "Metformin, Amlodipine" |
| Exam findings | Clinical signs | "Erythematous papules with scale" |
| Tests done | Existing results | "ANA negative, ESR 45" |

### 2. Treatment Protocol Review

Claude can review the treatment you are considering and compare it against current guidelines. This is especially useful when:
- You are deciding between two therapeutic approaches
- You want to confirm alignment with the latest recommendations
- You encounter a case outside your usual subspecialty

**Practical example:** "A patient with moderate-to-severe psoriasis who failed Methotrexate. What is the next-line therapy according to AAD/EDF guidelines?"

### 3. Drug Interaction Checking

Instead of checking each drug pair individually, you can give Claude the entire medication list at once. It will scan all possible combinations and present:
- Dangerous interactions (contraindications)
- Interactions requiring monitoring
- Potential interactions worth knowing about
- Required dose adjustments

**Recommended workflow:**
1. List all medications including doses
2. Specify the new medication being considered
3. Ask Claude to check interactions
4. **Verify** findings against a recognized drug database (Lexicomp, Micromedex)

### 4. Lab Result Interpretation

Claude can help interpret combinations of lab findings - not just stating "high" or "low," but explaining the relationships between different findings and suggesting a structured workup plan.

**Why this is useful:**
- When there is an unusual combination of findings
- When results appear contradictory
- When you need to plan a stepwise workup
- When you need to explain findings to a patient in plain language

### 5. Complex Case Management (Multi-morbidity)

Patients with multiple comorbidities pose a unique challenge: treating one condition may worsen another, or medications for different conditions may conflict.

Claude excels at seeing the "big picture" - it can simultaneously weigh:
- Complete comorbidity list
- All current medications
- Renal/hepatic limitations
- Age and relevant history
- Patient preferences and quality of life

### 6. Staying Current with Medical Knowledge

Medicine advances rapidly - new articles, updated guidelines, novel medications. Claude can help:
- Summarize new articles in your field
- Compare different versions of guidelines
- Explain mechanisms of action for new drugs
- Prepare a review for a lecture or committee meeting

**Note:** Always check Claude's knowledge cutoff date. Very recent information may not be included. Consider asking Claude to cite the sources it relies on.

---

## Key Concepts - Glossary for Beginners

If you are new to AI, here are plain-language explanations of terms you will encounter:

### Prompt - The instruction you give
A **prompt** is simply the text you write to Claude - the question, request, or case description. Think of it like writing a **consultation request**: the more precise and detailed you are, the better the response will be.

**Poor prompt:** "What is a red rash?"
**Good prompt:** "I am a dermatologist. A 35-year-old female, generally healthy, presents with a symmetric papular erythematous rash on the extremities, 5 days duration, non-pruritic, afebrile. What is the differential diagnosis?"

### Context Window - How much Claude can "remember"
Each conversation with Claude has a limit on how much information it can hold - this is called the **context window**. The current Claude model supports approximately 200,000 words, equivalent to a **600-page book**. In practice, this means you can:
- Have a long, detailed conversation
- Upload lengthy documents (articles, guidelines)
- Describe complex cases with full details

**Important:** When a conversation reaches the limit, Claude may "forget" what was said at the beginning. In that case, start a new conversation.

### Hallucination - When AI invents things
This is one of the most important phenomena to understand. Sometimes Claude "invents" information that sounds highly credible and professional - but is simply wrong. For example:
- Citing an article that does not exist (with author names, year, and title - all fabricated)
- Stating an incorrect medication dose
- Referencing a clinical guideline that does not exist

**Rule of thumb:** The more specific the claim (a number, an article name, a statistic), the more important it is to verify it against an independent source.

### Projects - Smart folders on claude.ai
A **Project** on claude.ai is like a folder where you can:
- Save **permanent instructions** (System Prompt) - e.g., "You are assisting an Israeli dermatologist, respond in Hebrew"
- Upload **files** - guidelines, protocols, tables
- Manage **multiple conversations** that all share the same base knowledge

This saves you from repeating the same instructions in every new conversation.

### Temperature - The "creativity" level
**Temperature** is a setting that controls how "creative" versus "predictable" Claude's answers are:
- **Low temperature** (0 - 0.3): Consistent, predictable answers - **recommended for medical use**
- **High temperature** (0.7 - 1): More varied and creative answers - less suitable for medicine

On most standard platforms (claude.ai), you do not have direct control over this setting, but it is worth understanding the concept.

### Token - A unit of text
A **token** is the unit of measurement for text in AI. On average, one English word equals about 1.3 tokens. This is mainly relevant for understanding pricing:
- **Claude Pro** (monthly subscription ~$20) - generous daily usage cap
- **Claude API** (pay-per-use) - charged by token count

---

## Example Prompts

Below are detailed prompt examples you can adapt to your needs. Each includes an explanation of why the prompt is structured that way.

### 1. Dermatology Case - Suspicious Pigmented Lesion

This prompt demonstrates case presentation using ABCDE criteria. Note the level of detail:

\`\`\`
I am a dermatologist. A 52-year-old male patient, phototype II (fair skin, tendency to sunburn). Presents with a pigmented lesion on the upper back that has changed over the past 6 months.

Examination findings:
- Asymmetry: clear asymmetry
- Border: irregular borders with notching
- Color: multiple colors - dark brown, black, and a bluish area
- Diameter: 8 mm
- Evolution: patient reports growth and darkening

History: recurrent childhood sunburns. No family history of melanoma.

Please provide:
1. Differential diagnosis ranked by likelihood
2. Recommended workup
3. Dermoscopic features to look for
\`\`\`

**Why this prompt works well:** It includes all critical components: age, sex, phototype, history, structured ABCDE findings, and an explicit request for what you want in the response.

### 2. Drug Interaction Check with 5+ Medications

When a patient takes many medications, this prompt saves time:

\`\`\`
A 68-year-old female with the following background:
- Hypertension
- Type 2 diabetes
- Atrial fibrillation
- Depression

Current medications:
1. Metformin 1000mg x2/d
2. Amlodipine 5mg x1/d
3. Apixaban (Eliquis) 5mg x2/d
4. Escitalopram 10mg x1/d
5. Omeprazole 20mg x1/d

Planning to add: Fluconazole 150mg single dose for candidiasis.

Please check:
1. Interactions among all existing medications
2. Interactions with the new medication (Fluconazole)
3. Rate severity: critical / significant / minor
4. Practical recommendations
\`\`\`

### 3. CBC Interpretation with Abnormalities

When lab results present an unclear picture:

\`\`\`
I am a family physician. A 42-year-old male presents for routine checkup. CBC results:

- WBC: 3.2 x10^9/L (low; normal 4.5-11)
- Hemoglobin: 10.8 g/dL (low; normal 13.5-17.5)
- MCV: 105 fL (high; normal 80-100)
- Platelets: 118 x10^9/L (low; normal 150-400)
- RDW: 16.2% (high; normal <14.5)

Additional tests:
- B12: 148 pg/mL (low; normal 200-900)
- Folate: normal
- Reticulocytes: 0.8% (low)
- LDH: 580 U/L (high)

Please:
1. What is the interpretation of these combined findings?
2. Differential diagnosis
3. Recommended further workup
4. Urgency - does this require immediate referral?
\`\`\`

### 4. Complex Case - Diabetes + CKD + Skin Infection

When multiple competing problems are present:

\`\`\`
A 71-year-old male with:
- Type 2 diabetes (HbA1c 8.2%)
- CKD stage 3b (eGFR 38)
- Heart failure NYHA II
- Cellulitis on left leg (erythema, local warmth, edema, 10x15 cm, no purulence)

Current medications: Insulin Glargine 24U, Empagliflozin 10mg, Furosemide 40mg, Carvedilol 12.5mg, Aspirin 100mg

Questions:
1. Antibiotic selection - what is appropriate given eGFR 38?
2. Are dose adjustments needed?
3. Should Empagliflozin be continued during the infection?
4. When to consider hospitalization?
5. Recommended follow-up
\`\`\`

### 5. Childhood Rash - Pediatric Differential

Emphasis on pediatric age-specific considerations:

\`\`\`
I am a pediatrician. A 6-year-old girl, previously healthy, immunizations up to date.

Presents with:
- Fever 38.5°C for 3 days
- Rash that began on the face (bilateral red cheeks, "slapped cheek" appearance) then spread to the trunk - maculopapular, reticular (lace-like) pattern
- Mild upper respiratory symptoms last week
- No pruritus
- Good general condition, no lymphadenopathy

Differential diagnosis for childhood viral exanthems:
1. Ranked list
2. Distinguishing features of each diagnosis
3. Recommended workup
4. When to refer to a dermatologist / emergency department
\`\`\`

### 6. Emergency - Suspected TEN/SJS

An urgent case where Claude can help with rapid identification:

\`\`\`
Urgent case. A 34-year-old female started Allopurinol 300mg 10 days ago.

Presents with:
- Fever 39.2°C
- Sore throat and burning eyes for 48 hours
- Rapidly spreading macular rash on trunk, extremities, and face
- Target-like lesions
- Bullae on 5% body surface area
- Nikolsky sign positive in limited areas
- Lips - erosions with crusting
- Eyes - conjunctivitis with discharge
- No genital involvement currently

Urgent questions:
1. Is this TEN, SJS, or SJS-TEN overlap?
2. SCORTEN score - what is the expected score?
3. Immediate management - first steps
4. Should Allopurinol be discontinued?
5. Referral and admission - what is the urgency?
\`\`\`

### 7. Treatment Protocol Comparison - Biologics for Psoriasis

When deciding between therapeutic options:

\`\`\`
I am a dermatologist. A 45-year-old male with severe plaque psoriasis (PASI 18, BSA 22%), failed Methotrexate (inefficacy) and Cyclosporine (creatinine elevation).

Additional background: BMI 32, hyperlipidemia, HBsAg negative, PPD negative, QuantiFERON negative.

Please compare:
1. Anti-IL-17 (Secukinumab, Ixekizumab)
2. Anti-IL-23 (Guselkumab, Risankizumab)
3. Anti-TNF (Adalimumab)

By the following criteria:
- Efficacy (PASI 90 response rates)
- Safety profile
- Convenience (injection frequency)
- Suitability for a patient with high BMI and hyperlipidemia
- Relative cost
\`\`\`

### 8. Follow-up Planning - Suspicious Lesion

When the diagnosis is not clear-cut:

\`\`\`
A 38-year-old female with a pigmented lesion on the shin (3 mm), dermoscopy shows:
- Reticular pattern with early regression areas
- No atypical network
- No blue-white veil
- Borders mostly regular

Clinical decision: monitoring (not immediate excision).

Please provide:
1. Recommended follow-up interval
2. Dermoscopic signs that would require a change in approach
3. Patient instructions - what to monitor at home
4. Recommended documentation (photography, dermoscopic mapping)
5. Criteria for future excision
\`\`\`

### 9. Rare Dermatologic Condition Workup

When encountering an uncommon diagnosis:

\`\`\`
A 55-year-old female presents with:
- Tense bullae on normal and erythematous skin
- Primarily on trunk, abdomen, and flexural surfaces
- Nikolsky negative
- Intense pruritus
- Onset 2 months ago, gradually worsening
- Background: Linagliptin (added for diabetes) - started 4 months ago

Clinical suspicion: Bullous Pemphigoid, possibly drug-induced (DPP-4 inhibitor associated).

Please provide:
1. Recommended workup (serology, biopsy, DIF)
2. Should Linagliptin be discontinued?
3. First-line treatment
4. Monitoring protocol
5. What distinguishes standard BP from drug-induced BP?
\`\`\`

---

## Practical Example: Complete Clinical Scenario

Below is a full example demonstrating the entire workflow with Claude - from case presentation to documentation.

### Step 1: Present the case to Claude

A 28-year-old woman presents to the dermatology clinic with an unusual rash. Here is how you would present the case:

\`\`\`
I am a dermatologist. Please help me with the following case.

A 28-year-old female, generally healthy, no regular medications, no known allergies.

CC: Rash on the trunk, 2 weeks duration.

HPI: Approximately 2 weeks ago, she noticed a single, round, pink-brown patch, 3 cm diameter, on the chest ("herald patch"). Over the past week, dozens of smaller patches (1-2 cm) appeared on the back, abdomen, and chest, distributed along Langer lines ("Christmas tree pattern"). The smaller patches have fine peripheral scaling (collarette of scale). Mild pruritus.

PMH: None
Medications: None
Social: No recent travel abroad, no STI exposure

Exam:
- Oval salmon-colored patches with peripheral collarette of scale
- Christmas tree distribution on back
- Herald patch on anterior chest
- No mucosal involvement
- No lymphadenopathy

Please provide a differential diagnosis and workup plan.
\`\`\`

### Step 2: Expected response structure from Claude

Claude will typically respond with a structure like this:

**Differential Diagnosis (by decreasing likelihood):**
1. **Pityriasis Rosea** - Highest probability, with herald patch, Christmas tree pattern, collarette of scale
2. **Secondary Syphilis** - Must be ruled out, even if the history appears "clean"
3. **Guttate Psoriasis** - Usually after streptococcal infection
4. **Nummular Dermatitis** - Less likely given the distribution
5. **Tinea Corporis** - KOH rules out
6. **Drug Eruption** - Less likely without medications

**Recommended Workup:**
- RPR/VDRL (to rule out syphilis - mandatory!)
- KOH prep from a selected lesion
- Consider ASO/Anti-DNase B if history of sore throat
- Biopsy if diagnosis unclear after 6-8 weeks

### Step 3: Ask follow-up questions

After receiving the response, you can ask focused follow-up questions:

\`\`\`
Thank you. Follow-up questions:
1. RPR came back negative. Does this definitively rule out syphilis?
2. The patient is 12 weeks pregnant - does this change the approach?
3. The pruritus is bothering her significantly - what is the recommended symptomatic treatment in pregnancy?
\`\`\`

### Step 4: Interpret and apply clinical judgment

When Claude answers the follow-up questions, you:
- **Verify** recommendations against UpToDate or another source
- **Apply clinical judgment** - Claude is an additional opinion, not the final one
- **Adapt** to the local context - drug availability, insurance coverage, local guidelines

### Step 5: Documentation

It is recommended to document AI use in the medical record:

> "Differential diagnosis was considered with the assistance of an AI tool (Claude, Anthropic). The final diagnosis and treatment plan were determined based on clinical judgment."

---

## The DermUnbound Method: Safe Clinical AI Use

**DermUnbound** is a methodology we developed for safe and responsible AI use in dermatologic practice. It is based on five steps:

### Step 1: Anonymization - Remove identifying information

**This is the most critical step.** Before sending any information to Claude, remove:

| What to Remove | What to Write Instead | Example |
|----------------|----------------------|---------|
| Full name | Do not mention | "John Smith" → "Patient" |
| ID numbers | Do not mention | "012345678" → (omit) |
| Date of birth | Age only | "03/15/1985" → "41-year-old" |
| Address | General area | "123 Main St, NYC" → "Urban area" |
| Phone/email | Do not mention | "555-0123" → (omit) |
| Admission dates | Time frame | "Jan 5, 2026" → "Two months ago" |

### Step 2: Structured Case Presentation

Use a consistent format - this improves response quality:

\`\`\`
[My specialty]
Patient: [age]-year-old [sex]

CC: [Chief complaint]
HPI: [History of present illness]
PMH: [Past medical history]
Medications: [Current medications]
Allergies: [Known allergies]
Exam: [Physical examination findings]
Labs: [Relevant lab results]

Specific questions:
1. ...
2. ...
\`\`\`

### Step 3: Cross-Reference

**Never rely on Claude's response alone.** Always verify against:
- UpToDate
- Current guidelines (AAD, EDF, BAD)
- Lexicomp / Micromedex (for medications)
- Colleague consultation when in doubt

**Rule:** If Claude says something that sounds wrong to you - it probably is wrong. Trust your clinical instinct.

### Step 4: Documentation

Document in the medical record when you used AI:
- Note that an AI tool was used
- Emphasize that the final clinical decision is the physician's
- This protects you medico-legally and adds transparency

### Step 5: Continuous Learning

Build your own "library" of prompts that work:
- Save prompts that produced good responses
- Refine prompts that produced partial responses
- Share with colleagues (removing identifying information, of course)
- Follow Claude updates - the tool improves continuously

[Learn more about safe AI use in medicine - DermUnbound Research](https://kaplanclinic.co.il/he/derm-ai)

---

## Advanced Tips

### 1. Create a "Clinical Assistant" Project on claude.ai
Go to claude.ai, click "Projects," and create a new project. In the System Prompt, write:

\`\`\`
You are a clinical assistant for an Israeli dermatologist. Always respond in professional medical language. When suggesting a differential diagnosis, rank by likelihood. When recommending treatment, cite the evidence level. Base your recommendations on current AAD, EDF, and BAD guidelines.
\`\`\`

### 2. Upload guidelines as PDFs
Within the project, upload PDF files of the guidelines most important to you. Claude will be able to reference them directly in its responses.

### 3. Use consistent templates
Create a standard template for case presentations (as in Step 2 of the DermUnbound Method). Consistency in format = consistency in response quality.

### 4. Prompt chaining
Instead of asking everything in one question, break it into steps:
1. **First:** "What is the differential diagnosis for this case?"
2. **Then:** "Let us focus on possibility #2 - Cutaneous Lupus. What is the specific workup?"
3. **Next:** "If biopsy confirms Lupus - what is the treatment protocol?"

### 5. Ask Claude to explain its reasoning
Add to your prompt: "Explain the reasoning behind each step in your answer." This helps you evaluate response quality and identify errors.

### 6. Prepare for Tumor Boards / M&M Conferences
Claude can help prepare a structured case presentation, summarize relevant literature, and suggest discussion points.

### 7. Compare international guidelines
"Compare the treatment recommendations for [condition] between American (AAD), European (EDF), and British (BAD) guidelines."

### 8. Create teaching cases
Claude can generate clinical cases (case-based learning) for resident education - a case, questions, and detailed answers.

### 9. Summarize scientific articles
Upload an article (PDF) to the conversation and ask: "Summarize this article in 5 key points, including: research question, methods, main results, limitations, and clinical significance."

---

## Recommended Platform

### claude.ai with Projects - Recommended for most physicians
**What is it?** The website claude.ai is the simplest way to work with Claude. You sign up, log in, and start typing.

**What are Projects?** A feature that lets you create "smart folders" - each folder saves:
- Permanent instructions (Claude "knows" you are a dermatologist, for instance)
- Files you have uploaded (guidelines, protocols)
- Conversation history

**How to get started:**
1. Go to claude.ai and create an account (Google, email)
2. Upgrade to Claude Pro ($20/month) - well worth the investment
3. Click "Projects" in the menu
4. Create a new project - e.g., "Clinical Dermatology"
5. Add a System Prompt (see example above)
6. Start a new conversation within the project

### Claude Desktop App - For quick daily questions
An application installed on your computer. Convenient for short questions while working, without opening a browser. Available for Windows and Mac.

### Claude Code - For data analysis
A command-line tool for advanced users. Suitable for:
- Research data analysis
- Processing lab files
- Automating repetitive tasks

**Note:** This tool requires technical knowledge. If interested, ask your institution's IT team for assistance.

### API - For institutional integration
**What is an API?** It is a way for one computer system to "talk to" another. For example, a hospital can integrate Claude into its electronic medical record (EMR) system, so physicians use Claude directly from the system they already know.

This requires development by a technical team but enables:
- Integration into existing workflows
- Automatic anonymization
- Automatic logging of AI use
- Institutional control over settings and privacy

---

## Privacy and Security

### What to NEVER share with Claude

| Category | Examples | Explanation |
|----------|----------|-------------|
| **Names** | Full name, family name | Direct identifier |
| **ID numbers** | National ID, passport, insurance | Direct identifier |
| **Dates** | Date of birth, admission dates | Can identify when combined with other info |
| **Addresses** | Street, city, zip code | Identifying information |
| **Contact details** | Phone, email | Direct identifier |
| **Images with identifiers** | Photos with name/ID visible | Even if the lesion is relevant - crop out identifiers |

### How to properly anonymize

**Before:**
> "John Smith, DOB 03/15/1985, 123 Main St, New York, phone 555-0123, admitted January 5, 2026 at City Hospital..."

**After:**
> "41-year-old male, urban area, admitted two months ago to internal medicine ward..."

### Free vs. paid accounts

| | Free | Pro ($20/month) | Team ($25/user/month) |
|--|------|-----------------|----------------------|
| **Model** | Basic Claude | Most advanced Claude | Most advanced Claude |
| **Daily usage** | Limited | Higher | Very high |
| **Projects** | No | Yes | Yes |
| **Training on your data** | No* | No* | No |

*Anthropic states it does not use conversations for model training unless you opt in.

### DermUnbound privacy recommendations
1. **Use a Pro account** - more control and features
2. **Always anonymize** - even for "just a quick question"
3. **Do not upload files with identifying information** - check PDFs before uploading
4. **Know the privacy policy** - read Anthropic's terms
5. **In a medical institution** - check your institution's policy on external AI use

[Privacy policy and safe use practices](https://kaplanclinic.co.il/he/derm-ai)`,
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
      he: `## מבוא

תיעוד רפואי (Medical Documentation) הוא אחד החלקים הכי זמן-אינטנסיביים בעבודת הרופא. מחקרים מראים שרופאים מקדישים עד 50% מזמן העבודה שלהם לתיעוד - זמן שיכול היה להיות מוקדש למטופלים. Claude יכול לקצר דרמטית את זמן התיעוד, תוך שיפור האיכות, העקביות והשלמות של המסמכים הרפואיים.

מה זה תיעוד רפואי? בפשטות - כל מסמך כתוב שקשור לטיפול במטופל: סיכומי ביקור, מכתבי הפניה, סיכומי שחרור, פרוטוקולי ניתוח, ועוד. תיעוד טוב הוא הבסיס לרפואה בטוחה, לתקשורת בין רופאים, ולהגנה משפטית.

Claude לא מחליף את שיקול הדעת הרפואי שלכם - הוא כלי שעוזר לכם לתעד מהר יותר, בצורה מסודרת יותר, ובסטנדרט אחיד. אתם תמיד בודקים, מאשרים ומתקנים את התוצר הסופי.

## שימושים עיקריים

- **כתיבת סיכומי ביקור בפורמט SOAP** - פורמט SOAP (ראו הסבר מפורט למטה) הוא הסטנדרט המקובל לתיעוד ביקורים רפואיים. Claude יכול לקחת את ההערות הגולמיות שלכם מהביקור - אפילו משפטים חלקיים או נקודות - ולהפוך אותם לסיכום ביקור מקצועי ומובנה. פשוט הדביקו את ההערות שלכם ובקשו מ-Claude לארגן בפורמט SOAP.

- **קידוד ICD-10** - ICD-10 (International Classification of Diseases, גרסה 10) היא מערכת קידוד בינלאומית שנותנת לכל אבחנה רפואית קוד ייחודי. למשל: L82.1 = קרטוזיס סבוריאי, C44.31 = BCC של עור הפנים. Claude יכול לעזור לכם למצוא את הקוד הנכון על סמך תיאור האבחנה בשפה חופשית, וגם להציע קודים חלופיים שאולי מתאימים יותר. זה חוסך זמן רב בחיפוש ידני בטבלאות הקידוד.

- **מכתבי הפניה** - כתיבת מכתבי הפניה מקצועיים לרופאים מומחים. Claude יכול ליצור מכתב הפניה מובנה שכולל: רקע רפואי רלוונטי, ממצאים מהבדיקה, סיבת ההפניה, ושאלה קלינית ספציפית. אתם רק צריכים לספק את הנתונים הבסיסיים ו-Claude ינסח מכתב מקצועי.

- **סיכומי שחרור** - יצירת סיכומי שחרור (Discharge Summaries) מקיפים ומסודרים לאחר אשפוז או פרוצדורה. כולל: סיבת האשפוז, מהלך הטיפול, ממצאים, אבחנות, תרופות בשחרור, והנחיות מעקב. Claude עוזר להבטיח שלא שוכחים פרטים חשובים.

- **פרוטוקולי ניתוח** - כתיבת פרוטוקולי ניתוח (Operative Notes) מפורטים ומובנים. תארו ל-Claude את הפרוצדורה שביצעתם - סוג הפרוצדורה, מיקום, הרדמה, ממצאים, טכניקת סגירה - והוא ינסח פרוטוקול מקצועי בפורמט סטנדרטי. מתאים לכריתות, ביופסיות, ניתוחי מוהס, ועוד.

- **פרשנות דוחות פתולוגיה** - Claude יכול לעזור לפרש ולסכם דוחות פתולוגיה בשפה ברורה. למשל: להסביר את המשמעות של שוליים (margins), דרגת דיפרנציאציה, עומק חדירה, ועוד - הן לצורך התיעוד שלכם והן ליצירת הסבר למטופל.

- **תבניות תיעוד** - יצירת תבניות (Templates) מוכנות מראש שאפשר להשתמש בהן שוב ושוב. למשל: תבנית לסיכום ביקור דרמטולוגי, תבנית למכתב הפניה לאונקולוג, תבנית לפרוטוקול ביופסיה. בנו פעם אחת - השתמשו לתמיד.

## מושגי מפתח

- **SOAP** - פורמט סטנדרטי לתיעוד ביקור רפואי. ראשי תיבות של ארבעה חלקים:
 - **S (Subjective)** - מה שהמטופל מדווח: תלונות, תסמינים, היסטוריה רפואית. למשל: "מטופל מדווח על כתם חדש בגב שגדל ב-3 החודשים האחרונים"
 - **O (Objective)** - מה שהרופא מוצא בבדיקה: ממצאים פיזיקליים, תוצאות בדיקות, ממצאי דרמוסקופיה. למשל: "נגע מלנוציטי א-סימטרי, 8 מ"מ, עם גוונים מרובים"
 - **A (Assessment)** - ההערכה והאבחנה של הרופא. למשל: "חשד למלנומה, דרושה ביופסיה"
 - **P (Plan)** - תוכנית הפעולה: טיפול, מעקב, בדיקות נוספות, הפניות. למשל: "ביופסיה אקסציזיונלית, מעקב תוך שבועיים עם תוצאות"

- **ICD-10** - International Classification of Diseases, גרסה 10. מערכת קידוד בינלאומית שמספקת קוד ייחודי לכל מצב רפואי. משמשת לתיעוד, לדיווח לקופות חולים, ולמחקר. דוגמאות: L40.0 = פסוריאזיס וולגריס, D22.5 = נבוס מלנוציטי של הגו.

- **CPT Codes** - Current Procedural Terminology. קודים שמתארים פרוצדורות רפואיות (לא אבחנות). משמשים בעיקר לצורכי חיוב וקידוד פרוצדורות. למשל: 11102 = ביופסיית עור tangential.

- **EMR / EHR** - Electronic Medical Record / Electronic Health Record. מערכות מחשוב לניהול רשומות רפואיות דיגיטליות. בישראל: מערכות כמו אופק (כללית), קליק (מכבי), ועוד. Claude לא מתחבר ישירות למערכות אלה, אבל עוזר ליצור תוכן שאפשר להעתיק ולהדביק לתוכן.

- **Template (תבנית)** - מסמך מוכן מראש עם מבנה קבוע שאפשר למלא ולהתאים לכל מטופל. חוסך זמן, מבטיח עקביות, ומונע שכחת פרטים חשובים. Claude מצטיין ביצירת תבניות מותאמות אישית לקליניקה שלכם.

## פרומפטים לדוגמה

להלן 9 דוגמאות לפרומפטים (הוראות שנותנים ל-Claude) בנושא תיעוד רפואי. את כל הדוגמאות צריך להתאים למידע אנונימי בלבד - ללא שמות, ת.ז., או פרטים מזהים.

**1. המרת הערות גולמיות לסיכום SOAP:**
\`\`\`
קיבלתי מטופל היום. הנה ההערות שלי מהביקור. אנא ארגן בפורמט SOAP:
- בן 62, גבר
- בא בגלל נגע בגב שגדל
- יש לו 3 חודשים
- בבדיקה: פפולה אדומה-חומה, 12 מ"מ, לא סימטרית
- דרמוסקופיה: רשת לא טיפוסית, נקודות כחולות-אפורות
- אני חושד ל-BCC או מלנומה
- ביצעתי ביופסיה אקסציזיונלית
- מעקב עם תוצאות בעוד שבועיים
\`\`\`

**2. מציאת קוד ICD-10 לאבחנה דרמטולוגית:**
\`\`\`
מה הקוד ICD-10 המתאים עבור: קרצינומה בזאלית של כנף האף, סוג נודולרי, ללא גרורות? אנא ספק את הקוד הספציפי ביותר ואת הקודים ההיררכיים.
\`\`\`

**3. כתיבת מכתב הפניה לאונקולוג:**
\`\`\`
כתוב מכתב הפניה לאונקולוג עבור מטופל עם הפרטים הבאים:
- גבר בן 58
- אובחן עם מלנומה Breslow 2.1mm בגב
- ביופסיית sentinel node חיובית
- דרוש דיון בטיפול משלים
אנא כתוב מכתב מקצועי שכולל רקע, ממצאים, ושאלה קלינית ברורה.
\`\`\`

**4. יצירת סיכום שחרור לאחר ניתוח מוהס:**
\`\`\`
צור סיכום שחרור לאחר ניתוח מוהס:
- מטופלת בת 72
- BCC נודולרי בקצה האף
- 3 שלבי מוהס עד לשוליים נקיים
- סגירה בדש מקומי (local flap)
- ללא סיבוכים
- הנחיות: חבישה 48 שעות, אנטיביוטיקה מקומית, מעקב בעוד שבוע
\`\`\`

**5. כתיבת פרוטוקול ניתוח לכריתה:**
\`\`\`
כתוב פרוטוקול ניתוח עבור הפרוצדורה הבאה:
- כריתה אליפטית (elliptical excision) של נגע חשוד בזרוע שמאל
- הרדמה מקומית: לידוקאין 1% עם אפינפרין
- שוליים: 2 מ"מ קליניים
- גודל הנגע: 6 מ"מ
- גודל הכריתה: 10x25 מ"מ
- סגירה: תפרים תת-עוריים (Vicryl 4-0) ותפרי עור (Nylon 5-0)
- הדגימה נשלחה לפתולוגיה
כתוב בפורמט פרוטוקול ניתוח סטנדרטי.
\`\`\`

**6. פרשנות דוח פתולוגיה בשפה פשוטה:**
\`\`\`
הסבר את דוח הפתולוגיה הבא בשפה פשוטה שרופא משפחה (לא דרמטולוג) יבין:
"Sections show a nodular basal cell carcinoma, measuring 4mm in greatest dimension. Tumor extends to a depth of 1.2mm. Peripheral margins are clear at 1.5mm. Deep margin is clear at 0.8mm. No perineural or lymphovascular invasion identified."
\`\`\`

**7. יצירת תבנית טופס קליטה לקליניקת דרמטולוגיה:**
\`\`\`
צור תבנית לטופס קליטה (intake form) לקליניקת דרמטולוגיה. הטופס צריך לכלול:
- פרטים דמוגרפיים בסיסיים
- היסטוריה דרמטולוגית (מצבים קודמים, טיפולים)
- היסטוריה משפחתית של סרטן עור
- חשיפה לשמש והרגלי הגנה
- תרופות נוכחיות (כולל טופיקליות)
- אלרגיות
- סיבת הביקור
עצב בפורמט ברור עם מקום לסימון ולמילוי.
\`\`\`

**8. סיכום היסטוריה רפואית מורכבת:**
\`\`\`
סכם את ההיסטוריה הדרמטולוגית הבאה בפסקה קצרה ומסודרת:
- 2018: אבחנה של פסוריאזיס, טופל ב-topical steroids
- 2019: החמרה, עבר ל-methotrexate
- 2020: תופעות לוואי בכבד, הופסק methotrexate
- 2021: התחיל biologics (adalimumab), תגובה טובה
- 2023: BCC בגב, כריתה עם שוליים נקיים
- 2024: מעקב - הפסוריאזיס יציב, ללא הישנות BCC
צור סיכום כרונולוגי תמציתי שמתאים להכנסה לתיק רפואי.
\`\`\`

**9. כתיבת מכתב מעקב לרופא המפנה:**
\`\`\`
כתוב מכתב מעקב קצר לרופא המשפחה שהפנה מטופלת עם נגע חשוד:
- תוצאת הביופסיה: seborrheic keratosis (ממצא שפיר)
- אין צורך בטיפול נוסף
- מומלץ מעקב שגרתי
- המטופלת יודעת על התוצאות
כתוב בטון מקצועי אך חם.
\`\`\`

## דוגמה מעשית: כתיבת סיכום ביקור

הנה הדגמה מלאה של תהליך כתיבת סיכום ביקור עם Claude:

**שלב 1: הרופא כותב הערות גולמיות**
אחרי הביקור, הרופא כותב במהירות (אפילו בעברית לא מסודרת):
"גבר 45, כתם חום על המצח, שם לב לפני חודש, גדל קצת. בדיקה - פפולה חומה 7 מ"מ, גבולות לא סדירים. דרמוסקופיה - רשת פיגמנטרית לא טיפוסית. ביצעתי shave biopsy. מעקב עם תוצאות."

**שלב 2: פרומפט ל-Claude**
\`\`\`
ארגן את ההערות הבאות לסיכום ביקור בפורמט SOAP. השתמש בשפה רפואית מקצועית:
[הדביקו את ההערות כאן]
\`\`\`

**שלב 3: Claude מייצר סיכום מובנה**
Claude יחזיר משהו כמו:
- **S:** מטופל בן 45 פונה עקב נגע פיגמנטרי במצח שהבחין בו לפני כחודש, עם גדילה הדרגתית.
- **O:** פפולה חומה, 7 מ"מ בקוטר, במצח. גבולות לא סדירים. ממצאי דרמוסקופיה: רשת פיגמנטרית לא טיפוסית (atypical pigment network).
- **A:** נגע פיגמנטרי חשוד. אבחנה מבדלת כוללת: dysplastic nevus, melanoma in situ, pigmented BCC.
- **P:** בוצעה shave biopsy. הדגימה נשלחה לבדיקה פתולוגית. המטופל זומן למעקב תוך שבועיים לקבלת תוצאות ולהחלטה על המשך טיפול בהתאם.

**שלב 4: הרופא בודק ומתקן**
הרופא קורא את הסיכום, מוודא שהכל מדויק, מוסיף פרטים שחסרים, ומעתיק למערכת ה-EMR.

**שלב 5: טיפים להתאמה אישית**
- הוסיפו ל-Claude את הפורמט הספציפי של הקליניקה שלכם
- בקשו שיכלול/יוציא סעיפים ספציפיים
- אם אתם עובדים בעברית, בקשו "כתוב בעברית רפואית מקצועית"
- שמרו את הפרומפטים הטובים לשימוש חוזר

## שיטת DermUnbound: תיעוד רפואי חכם

שיטת DermUnbound היא גישה בת 5 שלבים לשימוש בטוח ויעיל ב-AI לתיעוד רפואי:

**שלב 1: אנונימיזציה - הגנה על פרטיות המטופל**
לעולם אל תכניסו מידע מזהה של מטופלים ל-Claude. הסירו שמות, מספרי תעודת זהות, תאריכי לידה מדויקים, כתובות, ומספרי טלפון. השתמשו במקום: "גבר בן 45", "מטופלת בת 72". זה לא רק עניין של פרטיות - זו חובה חוקית ואתית.

**שלב 2: יצירת תבניות - בנו פעם אחת, השתמשו לתמיד**
השקיעו זמן ביצירת תבניות מותאמות לקליניקה שלכם. למשל: תבנית לסיכום ביקור דרמטולוגי, תבנית למכתב הפניה, תבנית לפרוטוקול ביופסיה. ברגע שיש לכם תבנית טובה, כל ביקור הבא ייקח שניות במקום דקות.

**שלב 3: סטנדרטיזציה - אחידות בכל הקליניקה**
ודאו שכל הרופאים בקליניקה משתמשים באותן תבניות ובאותו פורמט. זה משפר את התקשורת, מקל על מעקב, ומעלה את רמת התיעוד בכל המרפאה.

**שלב 4: בקרת איכות - תמיד בודקים לפני חתימה**
Claude הוא כלי עזר, לא תחליף לרופא. תמיד קראו את התיעוד שנוצר, ודאו דיוק רפואי, ותקנו לפי הצורך. אל תחתמו על מסמך שלא קראתם בעיון.

**שלב 5: שיפור מתמיד - למדו מניסיון**
שפרו את התבניות לאורך זמן. אם שמתם לב שתמיד מוסיפים אותו תיקון - עדכנו את התבנית. בקשו מ-Claude לשפר את הפרומפטים שלכם בהתבסס על הניסיון שצברתם.

[מידע נוסף - מחקר DermUnbound](https://kaplanclinic.co.il/he/derm-ai)

## שימושים יצירתיים

- **יצירת טפסים לפרוצדורות ספציפיות** - למשל: טופס הסכמה מדעת לניתוח מוהס, רשימת תיוג (checklist) לפני ביופסיה, טופס מעקב אחרי פעולה
- **אוטומציה של תיעוד חוזר** - אם אתם כותבים את אותו סוג סיכום 20 פעם ביום, Claude יכול ליצור תבנית שרק צריך למלא בפרטים ספציפיים
- **סיכום היסטוריה רפואית של שנים** - מטופל עם תיק עבה? בקשו מ-Claude לסכם את ההיסטוריה בפסקה אחת או בטבלה כרונולוגית
- **יצירת גרסאות ידידותיות למטופל** - קחו סיכום רפואי מקצועי ובקשו מ-Claude להפוך אותו לגרסה שהמטופל יכול להבין
- **תיעוד רב-לשוני** - צרו את אותו מסמך בעברית, ערבית, אנגלית ורוסית. חשוב במיוחד בישראל עם אוכלוסייה מגוונת
- **בניית מדריך סגנון תיעוד** - צרו מדריך שמגדיר את סטנדרט התיעוד בקליניקה: פורמט, מינוח מועדף, מבנה מסמכים
- **יצירת רשימות תיוג לפרוצדורות** - צ'קליסט לפני ניתוח מוהס, רשימת בדיקות לפני טיפול ביולוגי, רשימת מעקב אחרי כריתה

## טיפים מתקדמים

- **צרו "פרויקט תיעוד" ב-Claude** - ב-claude.ai אפשר ליצור פרויקט (Project) ולהעלות אליו את תבניות הקליניקה שלכם, הנחיות פורמט, ודוגמאות. ככה Claude "יזכור" את ההעדפות שלכם בכל שיחה חדשה בתוך הפרויקט
- **העלו דוגמאות כסגנון ייחוס** - תנו ל-Claude דוגמה של סיכום ביקור שאתם אוהבים ובקשו "כתוב בסגנון הזה". זה עובד טוב יותר מאשר לתאר את הסגנון במילים
- **בקשו מ-Claude לבדוק שלמות** - לאחר שכתבתם סיכום, בקשו מ-Claude: "בדוק האם חסר משהו בסיכום הביקור הזה" - הוא יכול לזהות פרטים חסרים
- **צרו קיצורים מתבניות** - קחו תבניות ש-Claude יצר והפכו אותן לקיצורים (macros/snippets) במערכת ה-EMR שלכם. למשל: הקלדת ".soap" תכניס את תבנית ה-SOAP שלכם
- **בקשו מ-Claude לשפר ניסוח** - הדביקו סיכום קיים ובקשו "שפר את הקריאות של הסיכום הזה" או "הפוך את זה ליותר תמציתי"
- **השתמשו ב-Claude לתרגום מונחים** - אם אתם לא בטוחים במונח הנכון באנגלית או בעברית, Claude יכול לתת את המונח בשתי השפות עם הסבר

## פלטפורמה מומלצת

- **claude.ai** - הפלטפורמה הראשית של Claude. הכי מתאימה ליצירת תבניות, מסמכים ארוכים, ועבודה מעמיקה עם תיעוד. אפשר ליצור פרויקטים, להעלות קבצים, ולשמור שיחות. גשו אליה דרך הדפדפן בכתובת claude.ai
- **Claude Desktop** - אפליקציה שמתקינים על המחשב. נוחה לגישה מהירה לתיעוד שוטף - אפשר לפתוח אותה עם קיצור מקשים ולשאול שאלה מהירה בלי לפתוח דפדפן. מתאימה למשימות תיעוד קצרות ומהירות
- **Artifacts** - תכונה ב-Claude שמאפשרת לראות תצוגה מקדימה של מסמכים בפורמט מעוצב. כשאתם מבקשים מ-Claude ליצור מסמך, הוא מציג אותו ב-Artifact - חלון נפרד שמראה איך המסמך ייראה בפועל, עם עיצוב, כותרות, וטבלאות. אפשר להעתיק משם ישירות

## 🔒 פרטיות ואבטחה

הנושא הכי חשוב בשימוש ב-AI לתיעוד רפואי הוא הגנה על פרטיות המטופלים. הנה הכללים:

- **צרו תבניות ללא מידע מזהה** - בנו את התבניות שלכם עם דוגמאות בדויות. אחר כך מלאו את המידע האמיתי מקומית, במערכת ה-EMR שלכם
- **לעולם אל תדביקו רשומות מטופלים אמיתיות ב-Claude** - גם אם זה מפתה. השתמשו במידע אנונימי: גיל, מין, תיאור כללי. ללא שמות, ת.ז., כתובות, או פרטי קשר
- **השתמשו בדוגמאות מאונימות** - כשיוצרים תבניות, השתמשו בנתונים בדויים לחלוטין
- **הנחיות DermUnbound** - עקבו אחרי 5 השלבים של שיטת DermUnbound (ראו למעלה) לשימוש בטוח ואחראי

[שימוש בטוח ב-AI](https://kaplanclinic.co.il/he/derm-ai)

> **כלל זהב: צרו תבניות עם Claude, מלאו מידע אמיתי מחוץ ל-Claude.** ככה תקבלו את היתרונות של AI בתיעוד - בלי לסכן את פרטיות המטופלים.`,
      en: `## Introduction

Medical documentation is one of the most time-consuming parts of medical practice. Studies show that physicians spend up to 50% of their working time on documentation - time that could otherwise be spent with patients. Claude can dramatically reduce documentation time while improving the quality, consistency, and completeness of your medical records.

Medical documentation encompasses every written record related to patient care: visit summaries, referral letters, discharge summaries, operative notes, and more. High-quality documentation is the foundation of safe medical practice, effective inter-physician communication, and legal protection.

Claude does not replace your clinical judgment - it is a tool that helps you document faster, more consistently, and at a uniform standard. You always review, approve, and correct the final output.

## Key Use Cases

- **Writing visit summaries in SOAP format** - SOAP (see detailed explanation below) is the accepted standard for documenting medical visits. Claude can take your raw notes from the encounter - even partial sentences or bullet points - and transform them into a professional, structured visit summary. Simply paste your notes and ask Claude to organize them in SOAP format.

- **ICD-10 coding** - ICD-10 (International Classification of Diseases, 10th revision) is an international coding system that assigns a unique code to every medical diagnosis. For example: L82.1 = seborrheic keratosis, C44.31 = BCC of facial skin. Claude can help you find the correct code based on a free-text description of the diagnosis, and also suggest alternative codes that may be more appropriate. This saves considerable time compared to manual code table searches.

- **Referral letters** - Writing professional referral letters to specialist physicians. Claude can create a structured referral letter that includes: relevant medical background, examination findings, reason for referral, and a specific clinical question. You only need to provide the basic data, and Claude will draft a professional letter.

- **Discharge summaries** - Creating comprehensive, organized discharge summaries after hospitalization or procedures. Including: reason for admission, course of treatment, findings, diagnoses, medications at discharge, and follow-up instructions. Claude helps ensure no important details are missed.

- **Operative notes** - Writing detailed, structured operative notes. Describe the procedure to Claude - type of procedure, location, anesthesia, findings, closure technique - and it will draft a professional operative note in standard format. Suitable for excisions, biopsies, Mohs surgery, and more.

- **Pathology report interpretation** - Claude can help interpret and summarize pathology reports in clear language. For example: explaining the significance of margins, differentiation grade, depth of invasion, and more - both for your own documentation and for creating patient-friendly explanations.

- **Documentation templates** - Creating ready-made templates that can be reused repeatedly. For example: a template for dermatology visit summaries, a referral letter template for oncology, a biopsy protocol template. Build once - use forever.

## Key Concepts

- **SOAP** - A standard format for medical visit documentation. An acronym for four components:
 - **S (Subjective)** - What the patient reports: complaints, symptoms, medical history. Example: "Patient reports a new spot on the back that has been growing over the past 3 months"
 - **O (Objective)** - What the physician finds on examination: physical findings, test results, dermoscopy findings. Example: "Asymmetric melanocytic lesion, 8mm, with multiple colors"
 - **A (Assessment)** - The physician's evaluation and diagnosis. Example: "Suspicious for melanoma, biopsy indicated"
 - **P (Plan)** - The action plan: treatment, follow-up, additional tests, referrals. Example: "Excisional biopsy performed. Patient scheduled for follow-up in two weeks for results and treatment planning"

- **ICD-10** - International Classification of Diseases, 10th revision. An international coding system that provides a unique code for every medical condition. Used for documentation, insurance reporting, and research. Examples: L40.0 = psoriasis vulgaris, D22.5 = melanocytic nevus of trunk.

- **CPT Codes** - Current Procedural Terminology. Codes that describe medical procedures (not diagnoses). Used primarily for billing and procedure coding. Example: 11102 = tangential skin biopsy.

- **EMR / EHR** - Electronic Medical Record / Electronic Health Record. Computer systems for managing digital medical records. Claude does not connect directly to these systems, but helps create content that can be copied and pasted into them.

- **Template** - A pre-made document with a fixed structure that can be filled in and customized for each patient. Saves time, ensures consistency, and prevents omission of important details. Claude excels at creating templates customized to your practice.

## Example Prompts

Below are 9 example prompts for medical documentation tasks. All examples should be adapted to use anonymized information only - no names, ID numbers, or identifying details.

**1. Converting raw notes to SOAP format:**
\`\`\`
I saw a patient today. Here are my notes from the visit. Please organize in SOAP format:
- 62-year-old male
- Presented for a growing lesion on the back
- Present for 3 months
- Exam: red-brown papule, 12mm, asymmetric
- Dermoscopy: atypical network, blue-gray dots
- Suspicious for BCC or melanoma
- Performed excisional biopsy
- Follow-up with results in two weeks
\`\`\`

**2. Finding the ICD-10 code for a dermatologic diagnosis:**
\`\`\`
What is the appropriate ICD-10 code for: basal cell carcinoma of the nasal ala, nodular type, no metastasis? Please provide the most specific code and the hierarchical codes.
\`\`\`

**3. Writing a referral letter to an oncologist:**
\`\`\`
Write a referral letter to an oncologist for a patient with the following details:
- 58-year-old male
- Diagnosed with melanoma, Breslow 2.1mm, on the back
- Positive sentinel node biopsy
- Discussion needed regarding adjuvant therapy
Please write a professional letter including background, findings, and a clear clinical question.
\`\`\`

**4. Creating a discharge summary after Mohs surgery:**
\`\`\`
Create a discharge summary after Mohs surgery:
- 72-year-old female
- Nodular BCC on the nasal tip
- 3 Mohs stages to clear margins
- Closure with local flap
- No complications
- Instructions: dressing for 48 hours, topical antibiotic, follow-up in one week
\`\`\`

**5. Writing an operative note for an excision:**
\`\`\`
Write an operative note for the following procedure:
- Elliptical excision of a suspicious lesion on the left arm
- Local anesthesia: 1% lidocaine with epinephrine
- Margins: 2mm clinical
- Lesion size: 6mm
- Excision size: 10x25mm
- Closure: subcutaneous sutures (Vicryl 4-0) and skin sutures (Nylon 5-0)
- Specimen sent to pathology
Write in standard operative note format.
\`\`\`

**6. Interpreting a pathology report in plain language:**
\`\`\`
Explain the following pathology report in plain language that a family physician (non-dermatologist) would understand:
"Sections show a nodular basal cell carcinoma, measuring 4mm in greatest dimension. Tumor extends to a depth of 1.2mm. Peripheral margins are clear at 1.5mm. Deep margin is clear at 0.8mm. No perineural or lymphovascular invasion identified."
\`\`\`

**7. Creating an intake form template for a dermatology clinic:**
\`\`\`
Create an intake form template for a dermatology clinic. The form should include:
- Basic demographic information
- Dermatologic history (previous conditions, treatments)
- Family history of skin cancer
- Sun exposure and protection habits
- Current medications (including topicals)
- Allergies
- Reason for visit
Design in a clear format with checkboxes and fill-in fields.
\`\`\`

**8. Summarizing a complex patient history:**
\`\`\`
Summarize the following dermatologic history in a concise, organized paragraph:
- 2018: Diagnosed with psoriasis, treated with topical steroids
- 2019: Worsening, switched to methotrexate
- 2020: Liver side effects, methotrexate discontinued
- 2021: Started biologics (adalimumab), good response
- 2023: BCC on the back, excised with clear margins
- 2024: Follow-up - psoriasis stable, no BCC recurrence
Create a chronological summary suitable for a medical record.
\`\`\`

**9. Writing a follow-up letter to the referring physician:**
\`\`\`
Write a brief follow-up letter to the referring family physician about a patient with a suspicious lesion:
- Biopsy result: seborrheic keratosis (benign finding)
- No further treatment needed
- Routine follow-up recommended
- Patient has been informed of the results
Write in a professional yet warm tone.
\`\`\`

## Practical Example: Writing a Visit Summary

Here is a complete walkthrough of writing a visit summary with Claude:

**Step 1: The physician writes raw notes**
After the encounter, the physician quickly jots down notes (even rough shorthand):
"Male 45, brown spot on forehead, noticed 1 month ago, growing slightly. Exam - brown papule 7mm, irregular borders. Dermoscopy - atypical pigment network. Performed shave biopsy. Follow-up with results."

**Step 2: Prompt Claude**
\`\`\`
Organize the following notes into a visit summary in SOAP format. Use professional medical language:
[paste notes here]
\`\`\`

**Step 3: Claude generates a structured summary**
Claude will return something like:
- **S:** 45-year-old male presents with a pigmented lesion on the forehead, first noticed approximately one month ago, with gradual growth.
- **O:** Brown papule, 7mm in diameter, on the forehead. Irregular borders. Dermoscopy findings: atypical pigment network.
- **A:** Suspicious pigmented lesion. Differential diagnosis includes: dysplastic nevus, melanoma in situ, pigmented BCC.
- **P:** Shave biopsy performed. Specimen sent for histopathological examination. Patient scheduled for follow-up in two weeks for results and further management as indicated.

**Step 4: The physician reviews and edits**
The physician reads the summary, verifies accuracy, adds any missing details, and copies it into the EMR system.

**Step 5: Tips for customization**
- Add your clinic's specific format preferences to Claude
- Request inclusion or exclusion of specific sections
- If working in a specific language, specify "Write in professional medical English"
- Save your best prompts for reuse

## The DermUnbound Method: Smart Medical Documentation

The DermUnbound Method is a 5-step approach to safe and effective use of AI for medical documentation:

**Step 1: Anonymization - Protecting patient privacy**
Never enter identifiable patient information into Claude. Remove names, ID numbers, exact dates of birth, addresses, and phone numbers. Use instead: "45-year-old male," "72-year-old female." This is not just a privacy matter - it is a legal and ethical obligation.

**Step 2: Template creation - Build once, use forever**
Invest time in creating templates customized to your practice. For example: a dermatology visit summary template, a referral letter template, a biopsy protocol template. Once you have a good template, each subsequent encounter takes seconds instead of minutes.

**Step 3: Standardization - Consistency across your practice**
Ensure all physicians in your practice use the same templates and format. This improves communication, facilitates follow-up, and elevates documentation standards across the entire clinic.

**Step 4: Quality control - Always review before signing**
Claude is an assistive tool, not a physician replacement. Always read the generated documentation, verify medical accuracy, and correct as needed. Never sign a document you have not carefully reviewed.

**Step 5: Continuous improvement - Learn from experience**
Refine your templates over time. If you notice you always make the same correction - update the template. Ask Claude to improve your prompts based on the experience you have accumulated.

[Learn more - DermUnbound Research](https://kaplanclinic.co.il/he/derm-ai)

## Creative Uses

- **Creating forms for specific procedures** - For example: an informed consent form for Mohs surgery, a pre-biopsy checklist, a post-procedure follow-up form
- **Automating repetitive documentation** - If you write the same type of summary 20 times a day, Claude can create a template that only requires filling in specific details
- **Summarizing years of medical history** - Patient with a thick chart? Ask Claude to summarize the history in a single paragraph or chronological table
- **Creating patient-friendly versions** - Take a professional medical summary and ask Claude to convert it into a version the patient can understand
- **Multilingual documentation** - Create the same document in Hebrew, Arabic, English, and Russian. Especially important in Israel's diverse population
- **Building a documentation style guide** - Create a guide that defines your clinic's documentation standards: format, preferred terminology, document structure
- **Creating procedure checklists** - A pre-Mohs surgery checklist, a pre-biologics workup list, a post-excision follow-up checklist

## Advanced Tips

- **Create a "Documentation" project in Claude** - On claude.ai, you can create a Project and upload your clinic's templates, format guidelines, and examples. This way Claude "remembers" your preferences in every new conversation within that project
- **Upload examples as style references** - Give Claude an example of a visit summary you like and say "Write in this style." This works better than describing the style in words
- **Ask Claude to check completeness** - After writing a summary, ask Claude: "Check whether anything is missing from this visit summary" - it can identify missing details
- **Create macros from templates** - Take templates Claude created and convert them into macros/snippets in your EMR system. For example: typing ".soap" inserts your SOAP template
- **Ask Claude to improve readability** - Paste an existing summary and ask "Improve the readability of this summary" or "Make this more concise"
- **Use Claude for terminology translation** - If you are unsure of the correct term in English or Hebrew, Claude can provide the term in both languages with an explanation

## Recommended Platform

- **claude.ai** - Claude's primary platform. Best suited for creating templates, long documents, and in-depth documentation work. You can create projects, upload files, and save conversations. Access it through your browser at claude.ai
- **Claude Desktop** - An application you install on your computer. Convenient for quick daily documentation access - you can open it with a keyboard shortcut and ask a quick question without opening a browser. Ideal for short, fast documentation tasks
- **Artifacts** - A feature in Claude that provides a formatted preview of documents. When you ask Claude to create a document, it displays it in an Artifact - a separate panel that shows how the document will actually look, with formatting, headings, and tables. You can copy directly from there

## 🔒 Privacy and Security

The most important consideration when using AI for medical documentation is protecting patient privacy. Here are the rules:

- **Create templates without identifying information** - Build your templates with fictional examples. Then fill in real information locally, in your EMR system
- **Never paste real patient records into Claude** - Even if it is tempting. Use anonymized information: age, sex, general description. No names, ID numbers, addresses, or contact details
- **Use anonymized examples** - When creating templates, use completely fictional data
- **DermUnbound guidelines** - Follow the 5 steps of the DermUnbound Method (see above) for safe and responsible use

[Safe AI Use](https://kaplanclinic.co.il/he/derm-ai)

> **Golden rule: Create templates with Claude, fill in real information outside of Claude.** This way you get the benefits of AI in documentation - without risking patient privacy.`,
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
      he: `## מבוא

המחקר הרפואי עובר מהפכה. בעבר, ביצוע מחקר רפואי היה שמור כמעט אך ורק לרופאים באקדמיה - אלה שעובדים בבתי חולים גדולים עם מחלקות מחקר, סטטיסטיקאים צמודים, ותקציבים ייעודיים. רופאים בקהילה, במרפאות פרטיות או בקופות החולים, לעיתים קרובות ויתרו על מחקר למרות שראו תופעות קליניות מעניינות - פשוט כי לא היו להם הכלים, הזמן או הידע המתודולוגי.

Claude משנה את המשוואה הזו. בינה מלאכותית (AI - Artificial Intelligence, כלומר מערכות מחשב שיכולות "לחשוב" ולעבד מידע בצורה חכמה) מאפשרת לכל רופא - גם בלי הכשרה פורמלית במחקר - לבצע סקירות ספרות, לתכנן מחקרים, להבין מושגים סטטיסטיים, ולכתוב מאמרים מדעיים ברמה גבוהה. זה לא מחליף סטטיסטיקאי או מנחה מחקר, אבל זה מנגיש את עולם המחקר בצורה חסרת תקדים.

אם אתם רואים תופעה קלינית מעניינת בקליניקה, שואלים את עצמכם "למה אף אחד לא חקר את זה?" או רוצים לפרסם מקרה מעניין - Claude יכול ללוות אתכם לאורך כל התהליך, מהשאלה הראשונית ועד לפרסום המאמר.

## שימושים עיקריים

- **סקירת ספרות (Literature Review)** - Claude יכול לעזור לכם לבנות אסטרטגיית חיפוש ספרות שיטתית, לסכם מאמרים, לזהות מגמות מחקריות, ולמפות את מה שכבר ידוע בנושא שמעניין אתכם. במקום לבלות שעות בקריאת עשרות מאמרים, תוכלו להעלות מאמרים ל-Claude ולבקש סיכום ממוקד של הממצאים העיקריים, נקודות החוזק והחולשה של כל מחקר, והפערים שנותרו בספרות

- **תכנון מחקר (Study Design)** - עזרה בבחירת סוג המחקר המתאים (פרוספקטיבי, רטרוספקטיבי, חתך רוחב, מקרה-ביקורת, RCT), הגדרת קריטריוני הכללה והדרה, בחירת Endpoints (נקודות מדידה שלפיהן בודקים את הצלחת הטיפול), ותכנון לוח זמנים ריאלי. Claude יכול גם לעזור לזהות בעיות מתודולוגיות פוטנציאליות לפני שמתחילים

- **ניתוח סטטיסטי (Statistical Analysis)** - הסבר פשוט וברור של מושגים סטטיסטיים כמו p-value, רווחי סמך, ניתוח עוצמה ו-NNT. Claude יכול לעזור לבחור את המבחן הסטטיסטי המתאים לנתונים שלכם, להסביר מה התוצאות אומרות, ולוודא שאתם מפרשים אותן נכון

- **כתיבת מאמרים (Manuscript Writing)** - עזרה בניסוח כל חלקי המאמר: תקציר (Abstract), מבוא (Introduction), שיטות (Methods), תוצאות (Results), ודיון (Discussion). Claude יכול לעזור לשמור על הסגנון האקדמי הנכון, לוודא שהמבנה עומד בדרישות כתב העת, ולערוך טיוטות חוזרות

- **כתיבת הצעות מחקר וגרנטים (Grant Writing)** - ניסוח הצעות מחקר משכנעות לקרנות מימון. Claude יכול לעזור להגדיר את חשיבות המחקר, לנסח את ההשערות, לבנות תקציב מחקרי, ולכתוב בשפה שמותאמת לקרן הספציפית

- **סקירה שיטתית (Systematic Review)** - ביצוע סקירה שיטתית דורש מתודולוגיה קפדנית. Claude יכול לעזור לבנות את פרוטוקול הסקירה, להגדיר את שאלת המחקר בפורמט PICO (Patient, Intervention, Comparison, Outcome), ליצור אסטרטגיית חיפוש ל-PubMed ומאגרים נוספים, ולעזור בסינון המאמרים לפי קריטריונים קבועים

- **מטא-אנליזה (Meta-analysis)** - שילוב סטטיסטי של תוצאות ממספר מחקרים. Claude יכול להסביר את העקרונות (מודל אפקט קבוע לעומת אפקט אקראי, הטרוגניות, Forest Plot), לעזור בפרשנות התוצאות, ולזהות מקורות פוטנציאליים להטיה

- **הכנת פוסטרים ומצגות לכנסים** - יצירת תוכן לפוסטרים מדעיים, מצגות לכנסים, והרצאות. Claude יכול לעזור לתמצת מחקר לפורמט ויזואלי, לנסח את המסרים העיקריים, ולהתאים את רמת הפירוט לקהל היעד

## מושגי מפתח - מילון מחקרי

הנה הסבר פשוט למונחים שכל רופא שנכנס לעולם המחקר צריך להכיר:

- **p-value (ערך p)** - ההסתברות לקבל את התוצאה שקיבלתם (או תוצאה קיצונית יותר) אם בעצם אין הבדל אמיתי בין הקבוצות. p<0.05 נחשב "מובהק סטטיסטית" - כלומר, יש פחות מ-5% סיכוי שהתוצאה נובעת ממקריות בלבד. חשבו על זה כמו בדיקת שקר: אם זרקתם מטבע 100 פעם וקיבלתם 90 פעם "עץ", ה-p-value היה מאוד נמוך - כי הסיכוי שזה קרה במקרה הוא זניח, ולכן סביר שהמטבע מוטה

- **Confidence Interval - רווח סמך (CI)** - הטווח שבו התוצאה האמיתית נמצאת בסבירות של 95%. לדוגמה, אם מחקר מצא שטיפול מפחית סיכון ב-30% עם CI של 20%-40%, אנחנו בטוחים ב-95% שההפחתה האמיתית היא בין 20% ל-40%. ככל שרווח הסמך צר יותר - התוצאה מדויקת יותר. אם רווח הסמך חוצה את ה-0 (או את ה-1 ביחסי סיכוי), התוצאה לא מובהקת

- **Power Analysis - ניתוח עוצמה** - חישוב שנעשה לפני המחקר כדי לקבוע כמה משתתפים (נבדקים) צריך כדי לזהות הבדל אם הוא באמת קיים. עוצמה של 80% אומרת שיש סיכוי של 80% למצוא הבדל מובהק אם ההבדל באמת קיים. מחקר עם מעט מדי משתתפים עלול "לפספס" ממצא אמיתי - וזו טעות שקל למנוע עם חישוב נכון מראש

- **NNT - Number Needed to Treat (מספר הדרוש לטיפול)** - כמה מטופלים צריך לטפל בטיפול מסוים כדי שמטופל אחד נוסף ירוויח מהטיפול (בהשוואה לקבוצת הביקורת). NNT=5 אומר שמכל 5 מטופלים שנטפל בהם, אחד ירוויח מהטיפול. ככל שה-NNT נמוך יותר - הטיפול יעיל יותר. NNT=1 זה טיפול מושלם (לא קיים במציאות), NNT=100 אומר שצריך לטפל ב-100 אנשים כדי שאחד ירוויח

- **Systematic Review - סקירה שיטתית** - סקירה של כל המחקרים שפורסמו בנושא מסוים, שנעשית לפי פרוטוקול קבוע ומוגדר מראש. בניגוד לסקירת ספרות רגילה (שבה הכותב בוחר אילו מחקרים לכלול), סקירה שיטתית כוללת חיפוש ממצה במספר מאגרי מידע, קריטריוני הכללה/הדרה ברורים, והערכת איכות של כל מחקר

- **Meta-analysis - מטא-אנליזה** - שילוב סטטיסטי של תוצאות ממספר מחקרים שבדקו את אותה שאלה. היתרון: גודל מדגם גדול יותר מכל מחקר בודד, ולכן עוצמה סטטיסטית גבוהה יותר. התוצאה מוצגת בדרך כלל ב-Forest Plot - תרשים שמראה את התוצאה של כל מחקר ואת התוצאה המשולבת

- **IRB / ועדת הלסינקי (Helsinki Committee)** - ועדת אתיקה מוסדית שמאשרת מחקרים בבני אדם. בישראל, כל מחקר שכולל מטופלים (גם רטרוספקטיבי) דורש אישור ועדת הלסינקי. הוועדה בודקת שהמחקר אתי, שיש הסכמה מדעת, ושהסיכון למשתתפים מינימלי

- **PRISMA** - הנחיות בינלאומיות (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) לדיווח סקירות שיטתיות ומטא-אנליזות. כוללות רשימת בדיקה (Checklist) של 27 פריטים ותרשים זרימה (Flow Diagram) שמתאר את תהליך סינון המאמרים

- **Impact Factor - מקדם השפעה** - מדד שמתאר את חשיבות כתב עת מדעי, מבוסס על מספר הציטוטים הממוצע למאמר. כתב עת עם Impact Factor גבוה נחשב יוקרתי יותר. לדוגמה: NEJM (IF~170) לעומת כתב עת מקומי (IF~1-2). חשוב לדעת: Impact Factor אינו מדד מושלם - מאמר מצוין יכול להתפרסם בכתב עת עם IF נמוך, ולהיפך

## פרומפטים לדוגמה

\`\`\`
בנה לי אסטרטגיית חיפוש ספרות ב-PubMed על הקשר בין psoriasis לבין מחלות קרדיווסקולריות. אני צריך search terms, MeSH terms, ופילטרים מומלצים. תמקד במחקרים מ-5 השנים האחרונות.
\`\`\`

\`\`\`
אני רוצה לבצע מחקר רטרוספקטיבי על תוצאות ניתוחי Mohs ב-SCC בקרב מטופלים מדוכאי חיסון. עזור לי לעצב את המחקר: קריטריוני הכללה/הדרה, משתנים שצריך לאסוף, endpoints ראשוניים ומשניים, וחישוב גודל מדגם.
\`\`\`

\`\`\`
יש לי נתונים על 200 מטופלים עם אקנה שטופלו ב-isotretinoin. יש לי משתנים: גיל, מין, מינון, משך טיפול, חומרת אקנה לפני ואחרי (סקאלה 1-10), ותופעות לוואי. איזה מבחנים סטטיסטיים כדאי לי להשתמש בהם? הסבר בפשטות.
\`\`\`

\`\`\`
כתוב תקציר (Abstract) מובנה (Background, Methods, Results, Conclusions) לסדרת מקרים (case series) של 12 מטופלים עם pyoderma gangrenosum שטופלו ב-adalimumab. שיעור תגובה: 83%. מעקב ממוצע: 14 חודשים. 2 מטופלים עם הישנות.
\`\`\`

\`\`\`
עזור לי לבנות את חלק ה-Methods של מאמר על מחקר רטרוספקטיבי של 500 ביופסיות עור מ-2020-2025. כלול: עיצוב המחקר, אוכלוסייה, איסוף נתונים, ניתוח סטטיסטי, ואישורים אתיים.
\`\`\`

\`\`\`
ראיתי 3 מקרים בחודש האחרון של תגובות עוריות חמורות ל-checkpoint inhibitors בחולי מלנומה. איך אני יכול להפוך את התצפית הקלינית הזו לשאלת מחקר? מה הדרך הטובה ביותר לגשת לזה?
\`\`\`

\`\`\`
אני צריך להגיש בקשה לוועדת הלסינקי למחקר רטרוספקטיבי. המחקר בודק שכיחות של fungal infections בחולי סוכרת שפנו למרפאת עור. עזור לי לכתוב את טופס הבקשה: רקע מדעי, מטרות, מתודולוגיה, שיקולים אתיים, ונימוק לוויתור על הסכמה מדעת.
\`\`\`

\`\`\`
אני כותב הצעת מחקר (grant proposal) לקרן מחקר. המחקר הוא ניסוי קליני אקראי (RCT) שמשווה טיפול PDT לטיפול קונבנציונלי ב-actinic keratosis. עזור לי לבנות את ההצעה: Specific Aims, Significance, Innovation, ו-Approach.
\`\`\`

\`\`\`
עזור לי ליצור תיאור של PRISMA flow diagram לסקירה שיטתית שלי: חיפוש ב-3 מאגרים (PubMed, Embase, Cochrane), 1,245 תוצאות ראשוניות, הסרת 312 כפילויות, 933 סוננו לפי כותרת ותקציר, 87 עברו סקירת טקסט מלא, 23 נכללו בסקירה הסופית.
\`\`\`

\`\`\`
יש לי 5 מאמרים על יעילות של cryotherapy בטיפול ב-actinic keratosis. סכם כל מאמר (מתודולוגיה, תוצאות, מגבלות) והשווה ביניהם בטבלה. ציין את ה-clearance rate, recurrence rate, ותופעות לוואי בכל מחקר.
\`\`\`

## דוגמה מעשית: ממקרה קליני למאמר

תארו לעצמכם את הסיטואציה הבאה - רופאת עור בקהילה מבחינה בתופעה מעניינת:

### שלב 1: התצפית הקלינית
ד"ר כהן, רופאת עור בקופת חולים, שמה לב שב-6 החודשים האחרונים היא ראתה 8 מקרים של lichen planus בחולים שמטופלים ב-checkpoint inhibitors (אימונותרפיה לסרטן). זה נראה לה הרבה יותר מהצפוי.

### שלב 2: ניסוח שאלת המחקר עם Claude
ד"ר כהן פונה ל-Claude ומתארת את התצפית. Claude עוזר לה לנסח שאלת מחקר ברורה: "מהי השכיחות של lichenoid reactions בחולים המטופלים ב-checkpoint inhibitors, ומהם גורמי הסיכון?"

### שלב 3: סקירת ספרות
Claude עוזר לבנות אסטרטגיית חיפוש ב-PubMed עם MeSH terms מתאימים. מתברר שיש מספר מצומצם של מחקרים בנושא - מה שאומר שיש פער בספרות וזו הזדמנות לפרסום.

### שלב 4: תכנון המחקר
Claude מסייע בעיצוב מחקר רטרוספקטיבי: הגדרת קריטריונים, משתנים לאיסוף, חישוב גודל מדגם. מציע לכלול גם קבוצת ביקורת של חולים תחת checkpoint inhibitors ללא תגובות עוריות.

### שלב 5: ניתוח סטטיסטי
לאחר איסוף הנתונים, Claude עוזר לבחור מבחנים סטטיסטיים מתאימים (Chi-square למשתנים קטגוריאליים, Mann-Whitney למשתנים רציפים לא נורמליים), לפרש את התוצאות, וליצור טבלאות ותרשימים.

### שלב 6: כתיבת המאמר
Claude מלווה את כתיבת כל חלקי המאמר - מהתקציר המובנה, דרך המבוא שממקם את המחקר בהקשר הספרות, חלק השיטות המפורט, הצגת התוצאות, ועד לדיון שכולל השוואה לספרות, מגבלות המחקר, ומסקנות.

### שלב 7: הגשה ותגובה למבקרים
Claude עוזר לבחור כתב עת מתאים, לכתוב מכתב נלווה (cover letter) לעורך, ואחרי שמגיעים הערות מבקרים (reviewers' comments) - לנסח תשובות מקצועיות ומנומקות לכל הערה.

**התוצאה:** מאמר שפורסם בכתב עת עם peer-review. ד"ר כהן הפכה תצפית קלינית יומיומית למאמר מדעי - בלי צוות מחקר, בלי סטטיסטיקאי צמוד, ובלי ניסיון קודם בפרסום.

## שיטת DermUnbound: מחקר מונחה AI

DermUnbound מציעה גישה חדשנית למחקר רפואי - שילוב של מומחיות קלינית עם כלי AI, כך שכל רופא יכול להפוך ל-Clinician Coder (רופא שמשלב מיומנויות קליניות עם כלי AI מתקדמים).

### גישת ה-Clinician Coder
הרעיון המרכזי: אתם לא צריכים להיות מדעני מחשב או סטטיסטיקאים. אתם צריכים להיות רופאים טובים שיודעים להשתמש ב-AI ככלי. זה כמו סטטוסקופ דיגיטלי - כלי שמרחיב את היכולות שלכם, לא מחליף אותן.

### שלב 1: זיהוי שאלה קלינית
הכל מתחיל מהקליניקה. שאלות מחקר טובות נולדות מתצפיות קליניות אמיתיות - לא ממאמרים. כשאתם רואים משהו חריג, שואלים "למה?", או חושבים "לו רק היה מחקר על זה" - זו נקודת ההתחלה.

### שלב 2: סקירת ספרות עם AI
השתמשו ב-Claude כדי למפות את הנוף המחקרי: מה כבר ידוע? מהם הפערים? האם שאלת המחקר שלכם חדשנית? Claude יכול לסכם עשרות מאמרים בדקות ולזהות מגמות שלוקח שבועות לזהות ידנית.

### שלב 3: תכנון מתודולוגי
תכננו את המחקר עם עזרת AI, אבל תמיד אמתו עם סטטיסטיקאי או מתודולוג. Claude מצוין ב"טיוטה ראשונה" של פרוטוקול מחקרי, אבל עין מקצועית אנושית חיונית לאימות.

### שלב 4: ניתוח נתונים
Claude Code (כלי שורת הפקודה של Claude) יכול לנתח נתוני מחקר: לרוץ על קבצי CSV, לבצע מבחנים סטטיסטיים, ליצור תרשימים, ולהפיק דוחות. זה מיוחד כי אתם יכולים לתאר בשפה טבעית ("תריץ מבחן t בין שתי הקבוצות") ולקבל תוצאות.

### שלב 5: כתיבה ועריכה
כתיבת מאמר מדעי היא תהליך איטרטיבי (חוזר על עצמו). Claude מאפשר לכתוב טיוטה, לקבל משוב, לשפר, לכתוב שוב - עד שהמאמר מוכן. השתמשו ב-Claude Projects כדי לשמור את הפרוטוקול, הטיוטות הקודמות, והמשוב - כך Claude "זוכר" את כל ההקשר.

### שלב 6: ביקורת עמיתים (Peer Review)
לפני הגשה, בקשו מ-Claude לבצע ביקורת ביקורתית של המאמר - כאילו הוא reviewer. Claude יזהה חולשות מתודולוגיות, טענות לא מגובות, ובעיות מבניות. עדיף לתקן אותן לפני שהמבקרים האמיתיים מוצאים אותן.

### שלושת הרמות של DermUnbound Research

| רמה | תיאור | שימוש עיקרי |
|------|---------|-------------|
| **Tier 1: Enterprise Cloud AI** | claude.ai, ChatGPT | סקירת ספרות, כתיבת מאמרים, ניתוח קל |
| **Tiers 2-3: Sovereign AI** | מודלים מקומיים (LLMs על המחשב שלכם) | עבודה עם נתונים רגישים, ניתוח ללא חיבור לענן |
| **Tier 4: Vibe Coding** | Claude Code, GitHub Copilot | ניתוח נתונים, בניית כלים, אוטומציה |

קישור: [מחקר DermUnbound - Kaplan Clinic](https://kaplanclinic.co.il/he/derm-ai)

## שימושים יצירתיים

- **הפיכת תצפיות קליניות לשאלות מחקר** - תארו ל-Claude תופעה שראיתם בקליניקה, והוא יעזור לנסח שאלת מחקר מובנית
- **הכנת הגשות לוועדת הלסינקי (IRB)** - Claude יכול לעזור בכתיבת טפסי ההגשה, כולל רקע מדעי, שיקולים אתיים, ונימוק לוויתור על הסכמה מדעת (במחקרים רטרוספקטיביים)
- **כתיבת תקצירים לכנסים** - תקצירים קצרים וממוקדים שעומדים בדרישות הפורמט של הכנס
- **יצירת תוכן לפוסטרים מדעיים** - תוכן תמציתי וויזואלי שמתאים לפורמט פוסטר
- **תרגום מאמרים מדעיים** - תרגום מקצועי של מאמרים בין אנגלית לעברית (ולהיפך), עם שמירה על מונחים מדעיים מדויקים
- **הכנת מצגות ל-Journal Club** - סיכום מאמר, ניתוח ביקורתי של המתודולוגיה, והכנת שאלות לדיון
- **כתיבת מכתבים נלווים (Cover Letters)** - מכתב לעורך כתב העת שמסביר למה המאמר שלכם חשוב ומתאים לכתב העת
- **תגובה להערות מבקרים (Reviewer Response)** - ניסוח תשובות מקצועיות, מנומקות ומכבדות לכל הערה של המבקרים
- **יצירת תיאורי Visual Abstracts** - תיאור טקסטואלי של תקציר ויזואלי שניתן להמיר לגרפיקה

## טיפים מתקדמים

- **העלאת טיוטות לביקורת** - העלו את טיוטת המאמר שלכם ובקשו מ-Claude לבקר אותה כ-reviewer: "קרא את המאמר הזה כ-reviewer ביקורתי. מצא חולשות מתודולוגיות, טענות לא מגובות, ובעיות סגנוניות"

- **ניתוח נתונים עם Claude Code** - השתמשו ב-Claude Code כדי לנתח קבצי נתונים (CSV, Excel). אתם מתארים מה אתם רוצים ("תריץ רגרסיה לוגיסטית עם גיל ומין כמשתנים מנבאים") ו-Claude כותב ומריץ את הקוד

- **יצירת Projects למחקר** - צרו Project ב-claude.ai עם פרוטוקול המחקר, טיוטות קודמות, ומאמרי רקע. כך Claude "זוכר" את כל ההקשר בכל שיחה

- **זיהוי חולשות מתודולוגיות** - בקשו מ-Claude למצוא בעיות בשיטות המחקר שלכם לפני שאתם מגישים. עדיף לתקן עכשיו מאשר לקבל דחייה

- **חישובי עוצמה (Power Calculations)** - Claude Code יכול לרוץ חישובי עוצמה ב-Python (עם ספריית statsmodels) כדי לקבוע גודל מדגם נדרש

- **יצירת טבלאות ותרשימים** - תארו את הנתונים ואת סוג הטבלה או התרשים שאתם רוצים, ו-Claude ייצור קוד להפקתם (Python, R, או אפילו LaTeX)

## פלטפורמה מומלצת

- **claude.ai עם Projects** - לכתיבת מאמרים, סקירות ספרות, והכנת הגשות. שמרו את פרוטוקול המחקר והטיוטות בתוך Project כדי שClaude יזכור את כל ההקשר
- **claude.ai עם חיפוש אינטרנט** - לסקירת ספרות עדכנית. Claude יכול לחפש מאמרים חדשים ולסכם אותם, לזהות מגמות מחקריות, ולמצוא מאמרים רלוונטיים שאולי לא הכרתם
- **Claude Code** - לניתוח נתונים סטטיסטיים. כלי שורת פקודה שמאפשר לעבוד עם קבצי נתונים (CSV, Excel), לרוץ מבחנים סטטיסטיים, ליצור תרשימים, ולבצע חישובי עוצמה. מתאים במיוחד ל-Tier 4 (Vibe Coding) בגישת DermUnbound
- **API** - לעיבוד מאגרי נתונים גדולים באופן תכנותי. מתאים למחקרים עם מאות או אלפי רשומות שצריך לעבד באופן אוטומטי

## 🔒 פרטיות ואבטחה במחקר

> **כלל ברזל: לעולם אל תעלו נתונים מזהים של מטופלים לפלטפורמות AI בענן.**

- **נתונים אנונימיים בלבד** - לפני העלאת נתוני מחקר ל-Claude, ודאו שכל הנתונים עברו אנונימיזציה מלאה: הסרת שמות, מספרי תעודת זהות, תאריכי לידה מדויקים, כתובות, וכל מידע מזהה אחר
- **קיום הנחיות ועדת הלסינקי** - גם כשמשתמשים ב-AI, יש לעמוד בכל דרישות ועדת האתיקה. ציינו בפרוטוקול המחקר שנעשה שימוש בכלי AI
- **שימוש במודלים מקומיים לנתונים רגישים** - לפי גישת DermUnbound, נתונים רגישים במיוחד צריכים לעבור עיבוד על מודלים מקומיים (Tiers 2-3: Sovereign AI) ולא בענן
- **תיעוד השימוש ב-AI** - כתבי עת רבים דורשים כעת לציין אם נעשה שימוש ב-AI בתהליך הכתיבה. היו שקופים לגבי זה
- **פרוטוקולי אבטחת מידע של DermUnbound** - [מדיניות מחקר ופרטיות](https://kaplanclinic.co.il/he/derm-ai)`,
      en: `## Introduction

Medical research is undergoing a transformation. Historically, conducting medical research was reserved almost exclusively for physicians in academic institutions - those working in large hospitals with dedicated research departments, in-house statisticians, and designated funding. Community-based physicians, those in private clinics or health maintenance organizations, often abandoned research pursuits despite encountering fascinating clinical phenomena - simply because they lacked the tools, time, or methodological expertise.

Claude changes this equation. Artificial intelligence enables any physician - even without formal research training - to conduct literature reviews, design studies, understand statistical concepts, and write high-quality scientific papers. It does not replace a statistician or research mentor, but it democratizes access to the research world in an unprecedented way.

If you observe an interesting clinical phenomenon in your practice, ask yourself "why hasn't anyone studied this?", or want to publish an interesting case - Claude can guide you through the entire process, from the initial question to the published paper.

## Key Use Cases

- **Literature Review** - Claude can help you build a systematic literature search strategy, summarize papers, identify research trends, and map what is already known about your topic of interest. Instead of spending hours reading dozens of papers, you can upload articles to Claude and request a focused summary of key findings, strengths and weaknesses of each study, and gaps remaining in the literature

- **Study Design** - Assistance in choosing the appropriate study type (prospective, retrospective, cross-sectional, case-control, RCT), defining inclusion and exclusion criteria, selecting endpoints, and planning a realistic timeline. Claude can also help identify potential methodological issues before you begin

- **Statistical Analysis** - Clear, simple explanations of statistical concepts such as p-value, confidence intervals, power analysis, and NNT. Claude can help choose the appropriate statistical test for your data, explain what the results mean, and ensure you are interpreting them correctly

- **Manuscript Writing** - Assistance in drafting all sections of a paper: Abstract, Introduction, Methods, Results, and Discussion. Claude can help maintain the proper academic style, ensure the structure meets journal requirements, and edit successive drafts

- **Grant Writing** - Drafting compelling research proposals for funding bodies. Claude can help define the significance of the research, formulate hypotheses, build a research budget, and write in language tailored to the specific funding agency

- **Systematic Review** - Conducting a systematic review requires rigorous methodology. Claude can help build the review protocol, define the research question in PICO format (Patient, Intervention, Comparison, Outcome), create search strategies for PubMed and other databases, and assist in screening articles according to predefined criteria

- **Meta-analysis** - Statistical combination of results from multiple studies examining the same question. Claude can explain the principles (fixed-effect vs. random-effects models, heterogeneity, Forest Plot), assist in interpreting results, and identify potential sources of bias

- **Conference Posters and Presentations** - Creating content for scientific posters, conference presentations, and lectures. Claude can help condense research into a visual format, articulate key messages, and tailor the level of detail to the target audience

## Key Concepts - Research Glossary

Here is a straightforward explanation of terms every physician entering the research world should know:

- **p-value** - The probability of obtaining your result (or a more extreme one) if there is actually no real difference between groups. p<0.05 is considered "statistically significant" - meaning there is less than a 5% chance the result is due to chance alone. Think of it like a lie detector test: if you flipped a coin 100 times and got "heads" 90 times, the p-value would be very low - because the probability of this happening by chance is negligible, suggesting the coin is biased

- **Confidence Interval (CI)** - The range within which the true result lies with 95% probability. For example, if a study found that a treatment reduces risk by 30% with a CI of 20%-40%, we are 95% confident that the true reduction is between 20% and 40%. The narrower the confidence interval, the more precise the result. If the confidence interval crosses 0 (or 1 for odds ratios), the result is not statistically significant

- **Power Analysis** - A calculation performed before the study to determine how many participants are needed to detect a difference if it truly exists. A power of 80% means there is an 80% chance of finding a significant difference if the difference truly exists. A study with too few participants may "miss" a real finding - an error that is easily prevented with proper upfront calculation

- **NNT (Number Needed to Treat)** - How many patients need to be treated with a given intervention for one additional patient to benefit (compared to the control group). NNT=5 means that for every 5 patients treated, one will benefit from the treatment. The lower the NNT, the more effective the treatment. NNT=1 would be a perfect treatment (does not exist in reality), NNT=100 means you need to treat 100 people for one to benefit

- **Systematic Review** - A review of all published studies on a specific topic, conducted according to a predefined, fixed protocol. Unlike a narrative literature review (where the author chooses which studies to include), a systematic review includes an exhaustive search across multiple databases, clear inclusion/exclusion criteria, and quality assessment of each study

- **Meta-analysis** - A statistical combination of results from multiple studies that examined the same question. The advantage: a larger sample size than any individual study, resulting in greater statistical power. Results are typically presented in a Forest Plot - a chart showing each study's result and the combined result

- **IRB / Helsinki Committee** - An institutional ethics committee that approves human research. In Israel, any study involving patients (including retrospective ones) requires Helsinki Committee approval. The committee verifies that the research is ethical, that informed consent is obtained, and that risk to participants is minimal

- **PRISMA** - International guidelines (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) for reporting systematic reviews and meta-analyses. Includes a 27-item checklist and a Flow Diagram describing the article screening process

- **Impact Factor** - A metric describing the importance of a scientific journal, based on the average number of citations per article. A journal with a high Impact Factor is considered more prestigious. For example: NEJM (IF~170) versus a local journal (IF~1-2). Important to note: Impact Factor is not a perfect metric - an excellent paper can be published in a low-IF journal, and vice versa

## Example Prompts

\`\`\`
Build me a literature search strategy for PubMed on the relationship between psoriasis and cardiovascular disease. I need search terms, MeSH terms, and recommended filters. Focus on studies from the last 5 years.
\`\`\`

\`\`\`
I want to conduct a retrospective study on Mohs surgery outcomes for SCC in immunosuppressed patients. Help me design the study: inclusion/exclusion criteria, variables to collect, primary and secondary endpoints, and sample size calculation.
\`\`\`

\`\`\`
I have data on 200 acne patients treated with isotretinoin. My variables are: age, sex, dosage, treatment duration, acne severity before and after (scale 1-10), and side effects. Which statistical tests should I use? Explain simply.
\`\`\`

\`\`\`
Write a structured abstract (Background, Methods, Results, Conclusions) for a case series of 12 patients with pyoderma gangrenosum treated with adalimumab. Response rate: 83%. Mean follow-up: 14 months. 2 patients with recurrence.
\`\`\`

\`\`\`
Help me build the Methods section of a paper about a retrospective study of 500 skin biopsies from 2020-2025. Include: study design, population, data collection, statistical analysis, and ethical approvals.
\`\`\`

\`\`\`
I've seen 3 cases this month of severe cutaneous reactions to checkpoint inhibitors in melanoma patients. How can I turn this clinical observation into a research question? What's the best approach?
\`\`\`

\`\`\`
I need to submit an application to the Helsinki Committee (IRB) for a retrospective study examining the prevalence of fungal infections in diabetic patients who presented to a dermatology clinic. Help me write the application: scientific background, objectives, methodology, ethical considerations, and justification for informed consent waiver.
\`\`\`

\`\`\`
I'm writing a grant proposal for a research fund. The study is a randomized clinical trial (RCT) comparing PDT treatment to conventional treatment for actinic keratosis. Help me structure the proposal: Specific Aims, Significance, Innovation, and Approach.
\`\`\`

\`\`\`
Help me create a description of a PRISMA flow diagram for my systematic review: search across 3 databases (PubMed, Embase, Cochrane), 1,245 initial results, 312 duplicates removed, 933 screened by title and abstract, 87 underwent full-text review, 23 included in the final review.
\`\`\`

\`\`\`
I have 5 papers on the efficacy of cryotherapy for treating actinic keratosis. Summarize each paper (methodology, results, limitations) and compare them in a table. Note the clearance rate, recurrence rate, and side effects in each study.
\`\`\`

## Practical Example: From Clinical Case to Published Paper

Imagine the following scenario - a community dermatologist notices an interesting pattern:

### Step 1: The Clinical Observation
Dr. Cohen, a dermatologist in a community health clinic, notices that over the past 6 months she has seen 8 cases of lichen planus in patients being treated with checkpoint inhibitors (cancer immunotherapy). This seems far higher than expected.

### Step 2: Formulating a Research Question with Claude
Dr. Cohen turns to Claude and describes her observation. Claude helps her formulate a clear research question: "What is the incidence of lichenoid reactions in patients treated with checkpoint inhibitors, and what are the risk factors?"

### Step 3: Literature Review
Claude helps build a PubMed search strategy with appropriate MeSH terms. It turns out there are a limited number of studies on the topic - which means there is a gap in the literature and an opportunity for publication.

### Step 4: Study Design
Claude assists in designing a retrospective study: defining criteria, variables to collect, and sample size calculation. It suggests including a control group of patients on checkpoint inhibitors without cutaneous reactions.

### Step 5: Statistical Analysis
After data collection, Claude helps select appropriate statistical tests (Chi-square for categorical variables, Mann-Whitney for non-normally distributed continuous variables), interpret results, and create tables and figures.

### Step 6: Manuscript Writing
Claude guides the writing of all paper sections - from the structured abstract, through the introduction that places the study in the context of existing literature, the detailed methods section, results presentation, to a discussion that includes comparison with the literature, study limitations, and conclusions.

### Step 7: Submission and Responding to Reviewers
Claude helps choose an appropriate journal, write a cover letter to the editor, and after reviewer comments arrive - draft professional, well-reasoned responses to each comment.

**The Result:** A published paper in a peer-reviewed journal. Dr. Cohen turned an everyday clinical observation into a scientific paper - without a research team, without a dedicated statistician, and without prior publication experience.

## The DermUnbound Method: AI-Guided Research

DermUnbound offers an innovative approach to medical research - combining clinical expertise with AI tools, so that any physician can become a Clinician Coder (a physician who combines clinical skills with advanced AI tools).

### The Clinician Coder Approach
The central idea: you do not need to be a computer scientist or statistician. You need to be a good physician who knows how to use AI as a tool. Think of it as a digital stethoscope - a tool that extends your capabilities, not one that replaces them.

### Step 1: Identifying a Clinical Question
Everything starts at the clinic. Good research questions are born from real clinical observations - not from articles. When you see something unusual, ask "why?", or think "if only there were a study on this" - that is your starting point.

### Step 2: Literature Review with AI
Use Claude to map the research landscape: what is already known? What are the gaps? Is your research question novel? Claude can summarize dozens of papers in minutes and identify trends that take weeks to identify manually.

### Step 3: Methodological Planning
Design the study with AI assistance, but always validate with a statistician or methodologist. Claude excels at creating a "first draft" of a research protocol, but a professional human eye is essential for verification.

### Step 4: Data Analysis
Claude Code (Claude's command-line tool) can analyze research data: process CSV files, run statistical tests, generate charts, and produce reports. What makes it special is that you can describe in natural language ("run a t-test between the two groups") and receive results.

### Step 5: Writing and Editing
Scientific manuscript writing is an iterative process. Claude enables you to write a draft, receive feedback, improve, and rewrite - until the paper is ready. Use Claude Projects to save the protocol, previous drafts, and feedback - so Claude "remembers" all the context.

### Step 6: Peer Review Preparation
Before submission, ask Claude to perform a critical review of the paper - as if it were a reviewer. Claude will identify methodological weaknesses, unsupported claims, and structural issues. It is better to fix these before the real reviewers find them.

### The Three Tiers of DermUnbound Research

| Tier | Description | Primary Use |
|------|-------------|-------------|
| **Tier 1: Enterprise Cloud AI** | claude.ai, ChatGPT | Literature review, manuscript writing, basic analysis |
| **Tiers 2-3: Sovereign AI** | Local models (LLMs on your own computer) | Working with sensitive data, analysis without cloud connection |
| **Tier 4: Vibe Coding** | Claude Code, GitHub Copilot | Data analysis, building tools, automation |

Link: [DermUnbound Research - Kaplan Clinic](https://kaplanclinic.co.il/en/derm-ai)

## Creative Applications

- **Generating research questions from clinical practice** - Describe a phenomenon you observed in the clinic to Claude, and it will help formulate a structured research question
- **Preparing IRB submissions** - Claude can assist with writing submission forms, including scientific background, ethical considerations, and justification for informed consent waiver (in retrospective studies)
- **Writing conference abstracts** - Concise, focused abstracts that meet the format requirements of the conference
- **Creating scientific poster content** - Concise, visual content suited to poster format
- **Translating research papers** - Professional translation of papers between English and Hebrew (and vice versa), maintaining accurate scientific terminology
- **Preparing Journal Club presentations** - Paper summary, critical methodology analysis, and preparation of discussion questions
- **Writing cover letters to journals** - A letter to the journal editor explaining why your paper is important and suitable for their journal
- **Responding to reviewer comments** - Drafting professional, well-reasoned, and respectful responses to each reviewer comment
- **Creating Visual Abstract descriptions** - Textual descriptions of visual abstracts that can be converted to graphics

## Advanced Tips

- **Upload drafts for review** - Upload your manuscript draft and ask Claude to critique it as a reviewer: "Read this paper as a critical reviewer. Find methodological weaknesses, unsupported claims, and stylistic issues"

- **Data analysis with Claude Code** - Use Claude Code to analyze data files (CSV, Excel). You describe what you want ("run a logistic regression with age and sex as predictor variables") and Claude writes and executes the code

- **Create Projects for research** - Create a Project in claude.ai with your research protocol, previous drafts, and background papers. This way Claude "remembers" all context in every conversation

- **Identify methodological weaknesses** - Ask Claude to find problems in your research methods before you submit. It is better to fix now than to receive a rejection

- **Power calculations** - Claude Code can run power calculations in Python (using the statsmodels library) to determine required sample size

- **Generate tables and figures** - Describe your data and the type of table or chart you want, and Claude will generate code to produce them (Python, R, or even LaTeX)

## Recommended Platform

- **claude.ai with Projects** - For manuscript writing, literature reviews, and preparing submissions. Save your research protocol and drafts within a Project so Claude remembers all context
- **claude.ai with web search** - For up-to-date literature review. Claude can search for and summarize recent papers, identify research trends, and find relevant articles you may not have known about
- **Claude Code** - For statistical data analysis. A command-line tool that enables working with data files (CSV, Excel), running statistical tests, generating charts, and performing power calculations. Especially suited for Tier 4 (Vibe Coding) in the DermUnbound approach
- **API** - For processing large datasets programmatically. Suitable for studies with hundreds or thousands of records that need automated processing

## 🔒 Privacy and Security in Research

> **Iron rule: Never upload identifiable patient data to cloud AI platforms.**

- **Anonymized data only** - Before uploading research data to Claude, ensure all data has been fully anonymized: remove names, ID numbers, exact birth dates, addresses, and any other identifying information
- **Compliance with Helsinki Committee guidelines** - Even when using AI, all ethics committee requirements must be met. Note in your research protocol that AI tools were used
- **Use local models for sensitive data** - Per the DermUnbound approach, particularly sensitive data should be processed on local models (Tiers 2-3: Sovereign AI) rather than in the cloud
- **Document AI usage** - Many journals now require disclosure of AI use in the writing process. Be transparent about this
- **DermUnbound data security protocols** - [Research and Privacy Policy](https://kaplanclinic.co.il/en/derm-ai)`,
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

אחד האתגרים הגדולים ביותר ברפואה הוא לתקשר מידע רפואי מורכב למטופלים. מטופלים מגיעים לקליניקה עם חששות, שאלות ופחדים - והיכולת להסביר להם בשפה ברורה ואמפתית (רגישה ומכילה) היא חלק בלתי נפרד מהטיפול הרפואי. Claude יכול לשמש כ"מתרגם" בין השפה הרפואית המקצועית לבין שפה יומיומית שכל מטופל יכול להבין.

התקשורת עם מטופלים אינה רק עניין של נוחות - מחקרים מראים שמטופלים שמבינים את מצבם הרפואי, תוכנית הטיפול וההנחיות שלאחר טיפול, נוטים יותר לעקוב אחרי ההוראות, חווים פחות חרדה, ומגיעים לתוצאות טיפוליות טובות יותר. Claude מאפשר לרופא ליצור חומרי הסבר מקצועיים, מדויקים ונגישים - בתוך דקות ספורות.

## שימושים עיקריים

- **חומרי הסבר למטופלים** - יצירת דפי מידע מפורטים בשפה פשוטה על מצבים רפואיים, פרוצדורות (פעולות רפואיות) וטיפולים. למשל: "מה זה BCC (סרטן עור בזאלי)?" בשפה שכל מטופל יבין
- **הנחיות אחרי פרוצדורה** - הוראות טיפול ברורות ומפורטות לאחר פעולות כמו ביופסיה (לקיחת דגימת רקמה), ניתוח מוהס, הקפאה בנוזל חנקן, או טיפולי לייזר. כולל מה מותר ומה אסור, סימנים שדורשים פנייה לרופא, ולוח זמנים להחלמה
- **יצירת דפי FAQ** - דפי שאלות נפוצות (FAQ = Frequently Asked Questions, כלומר "שאלות שנשאלות הרבה") לכל פרוצדורה או מצב רפואי. חוסך מהצוות לענות על אותן שאלות שוב ושוב
- **תרגום שפה רפואית** - המרת מונחים מקצועיים כמו "dysplastic nevus" או "cryotherapy" לשפה יומיומית שמטופל ללא רקע רפואי יכול להבין
- **הכנת מטופלים לפרוצדורה** - מדריכי הכנה שמסבירים מה יקרה, כמה זמן זה לוקח, האם יש כאב, מה להביא, ואיך להתכונן - מפחית חרדה לפני הפעולה
- **תקשורת רגישה** - עזרה בניסוח הודעות על תוצאות בדיקות מדאיגות, הסברים על פרוגנוזה (תחזית המחלה), ומסירת בשורות קשות בצורה רגישה ומכבדת
- **חומרי הסבר בשפות שונות** - יצירת אותו חומר הסבר בעברית, ערבית, רוסית, אמהרית או אנגלית - כדי שכל מטופל יקבל מידע בשפה שהוא מבין

## מושגי מפתח

- **Health Literacy (אוריינות בריאותית)** - רמת היכולת של מטופל להבין מידע רפואי ולפעול לפיו. מחקרים מראים שכמחצית מהמטופלים מתקשים להבין הנחיות רפואיות כתובות. Claude עוזר ליצור חומרים שמתאימים לרמות אוריינות שונות
- **Informed Consent (הסכמה מדעת)** - תהליך שבו המטופל מקבל הסבר מלא על הפרוצדורה, הסיכונים, היתרונות והחלופות - ומסכים לטיפול בצורה מושכלת. Claude יכול לעזור לנסח טפסי הסכמה מדעת בשפה ברורה שהמטופל באמת מבין
- **Plain Language (שפה פשוטה)** - כתיבה ברמת קריאה של כיתה ו'-ח', ללא מונחים מקצועיים מיותרים. העיקרון: אם סבתא שלכם לא מבינה את המשפט - צריך לפשט אותו
- **Empathy (אמפתיה)** - היכולת לתקשר עם המטופל ברמה רגשית, לא רק אינפורמטיבית. Claude יכול לעזור לנסח הודעות שמשלבות מידע רפואי מדויק עם רגישות וחמלה

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
צור מדריך הכנה למטופל לפני ביופסיית עור (shave biopsy). כלול: מה זה ביופסיה בשפה פשוטה, כמה זמן הפעולה לוקחת, האם יש כאב (והרדמה), מה להביא, תרופות שצריך להפסיק (כמו מדללי דם - ציין שחובה לבדוק עם הרופא לפני הפסקה), מה לצפות ביום הפעולה, ותשובות ל-5 שאלות נפוצות.
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
כתוב ניוזלטר קצר (300-400 מילים) למטופלי מרפאת עור בנושא "איך לבדוק שומות בבית - כלל ה-ABCDE". כתוב בעברית פשוטה, עם טון חם ומקצועי, כלול קריאה לפעולה לקביעת בדיקה שנתית.
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
- "השומה שהוצאנו היא שומה **חריגה** - כלומר, התאים שלה נראים שונים מהרגיל תחת המיקרוסקופ. זה **לא סרטן**, אבל זה סוג של שומה שאנחנו מתייחסים אליה ברצינות."
- "'Severe atypia' אומר שהתאים יותר חריגים מהממוצע. זה כמו דירוג: קל, בינוני, חמור. שלך חמור - אבל חשוב להבין: **חמור לא אומר סרטן**. זה אומר שאנחנו רוצים להיות בטוחים."
- "'Margins positive' אומר שכשהפתולוג בדק את קצוות הדגימה, הוא עדיין ראה תאים חריגים. זה אומר שאנחנו צריכים להוציא עוד חתיכה קטנה מסביב - כדי לוודא שהוצאנו הכל."
- הצעדים הבאים: "נקבע תור לכריתה נוספת, פרוצדורה פשוטה בהרדמה מקומית, ואחרי זה - מעקב שנתי עם דרמוסקופיה."

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

- **עקרון 1: אנונימיזציה (הסרת פרטים מזהים)** - גם כשמכינים חומר הסבר למטופל ספציפי, אל תכללו שם, תעודת זהות, או פרטים מזהים בפרומפט ל-Claude. תארו את המצב הרפואי בלבד: "מטופלת בת 35 עם dysplastic nevus" ולא "שרה כהן ת.ז. 123456789"
- **עקרון 2: התאמה אישית** - Claude יוצר טיוטה מצוינת, אבל **תמיד** קראו, ערכו והתאימו אישית לפני שליחה למטופל. הוסיפו את הנגיעה האישית שרק אתם, כרופא המטפל, יכולים להוסיף
- **עקרון 3: דיוק רפואי** - וודאו שכל המידע הרפואי שClaude כותב הוא מדויק ועדכני. Claude הוא כלי עזר, לא מקור רפואי סופי. **אתם אחראים על הדיוק**
- **עקרון 4: רגישות תרבותית** - התאימו את החומרים להקשר התרבותי של המטופל. מה שמתאים למטופל ממוצא מערבי עשוי לא להתאים למטופל ממסורת שונה. בקשו מClaude להתאים טון ותוכן לאוכלוסיות שונות
- **עקרון 5: נגישות** - ודאו שהחומרים נגישים לרמות אוריינות שונות. בקשו מClaude לכתוב "ברמת כיתה ו'" או "ברמה בסיסית מאוד". עבור מטופלים מבוגרים - פונט גדול ומשפטים קצרים

למידע נוסף על השיטה: [מחקר DermUnbound](https://kaplanclinic.co.il/he/derm-ai)

## שימושים יצירתיים

- **פרויקט "קול המרפאה"** - צרו פרויקט (Project) ב-claude.ai עם הנחיות שמגדירות את הטון והסגנון של המרפאה שלכם. כך כל חומר ש-Claude מייצר ישמע כמו "אתם"
- **תיאורים לעזרים חזותיים** - בקשו מ-Claude ליצור תיאורים לדיאגרמות, אינפוגרפיקות (גרפיקה שמסבירה מידע בצורה ויזואלית), ואיורים - שתוכלו להעביר למעצב גרפי
- **תסריטי וידאו** - כתבו תסריטים לסרטוני הסבר קצרים (2-3 דקות) שמטופלים יכולים לצפות בהם לפני הפרוצדורה או אחריה
- **ספריית תבניות** - בנו ספרייה של תבניות הסבר למצבים נפוצים (AK, BCC, SCC, שומות חריגות, פסוריאזיס, אגזמה) - ושפרו אותן לאורך זמן
- **הודעות SMS/WhatsApp קצרות** - בקשו מ-Claude לקצר הנחיות מפורטות להודעת טקסט קצרה וברורה שאפשר לשלוח למטופל בוואטסאפ
- **תוכן חינוכי לרשתות חברתיות** - צרו פוסטים חינוכיים קצרים למטופלים בפייסבוק או אינסטגרם, על נושאים כמו הגנה מהשמש, בדיקת שומות, טיפול בעור
- **חומרים לחדר המתנה** - יצירת עלוני מידע, פוסטרים קטנים, או מצגות שרצות על מסך בחדר ההמתנה - בנושאים חינוכיים שמעניינים מטופלים

## טיפים מתקדמים

- **ציינו רמת קריאה** - הגידו ל-Claude באיזו רמה לכתוב: "הסבר ברמה שילד בכיתה ו' יבין" או "כתוב למטופל משכיל אבל ללא רקע רפואי"
- **בקשו אנלוגיות** - אנלוגיות (דימויים/משלים) עוזרות למטופלים להבין. למשל: "ביופסיה זה כמו לקחת דגימה קטנה כדי לבדוק אותה במעבדה - כמו לטעום ממרק לפני שמגישים אותו"
- **פורמט סריקה מהירה** - בקשו bullet points, כותרות ברורות, ומספור - כדי שמטופל יוכל למצוא מידע מהר
- **סימני אזהרה** - תמיד בקשו סעיף "מתי לפנות לרופא" - עם סימנים ברורים שדורשים פנייה דחופה
- **תרגום לשפות** - Claude מתרגם באיכות גבוהה לערבית, רוסית, אמהרית ואנגלית. בקשו תרגום ואז בדקו עם דובר שפת אם אם אפשר
- **הוסיפו ויזואליה** - בקשו מ-Claude לתאר מה צריך להופיע בתמונה/איור ליד הטקסט - ושלחו את התיאור למעצב
- **בנו על פידבק** - שאלו מטופלים אם ההסברים היו ברורים, ושפרו את התבניות בהתאם

## פלטפורמה מומלצת

**מה זה "פלטפורמה"?** - הכלי (אפליקציה או אתר) דרכו אתם מדברים עם Claude. כל אחת מתאימה לסיטואציה אחרת:

- **claude.ai** - האתר הראשי של Claude. מתאים ליצירת חומרי הסבר מפורטים, טפסי הסכמה מדעת, ניוזלטרים, ותוכן חינוכי. יש לו גם תכונת "פרויקטים" (Projects) שמאפשרת לשמור הקשר וסגנון - כך שלא צריך להסביר ל-Claude מחדש בכל שיחה מי אתם ומה הסגנון שלכם
- **אפליקציית Claude לנייד (Mobile App)** - אפליקציה חינמית לטלפון (iPhone ו-Android). מושלמת ליצירת תשובות מהירות בזמן אמת - למשל כשמטופל שואל שאלה ואתם רוצים לנסח תשובה ברורה. זמינה ב-App Store וב-Google Play
- **Desktop App (אפליקציה למחשב)** - אפליקציה שמתקינים על המחשב. נוחה להכנת חומרים במשרד, כי אפשר לעבוד עליה במקביל לתוכנת הרשומה הרפואית

## 🔒 פרטיות ואבטחה

- **לעולם אל תכללו פרטים מזהים** כשיוצרים תבניות הסבר - אל תכתבו שם מטופל, תעודת זהות, מספר טלפון, או כתובת. תארו את המצב הרפואי בלבד
- **בדקו כל חומר לפני שליחה** - Claude מייצר טיוטה. תמיד קראו, בדקו דיוק רפואי, והתאימו לפני שנותנים למטופל
- **שמרו על "אדם בתהליך" (Human in the Loop)** - אל תשלחו חומר AI ישירות למטופל בלי שרופא קרא ואישר. הרופא הוא תמיד שומר הסף
- **הנחיות DermUnbound** - פעלו לפי חמשת העקרונות שתוארו למעלה: אנונימיזציה, התאמה אישית, דיוק רפואי, רגישות תרבותית, ונגישות
- **שמרו עותקים** - שמרו עותק של חומרי הסבר שיצרתם ושלחתם, לצורך תיעוד רפואי`,
      en: `## Introduction

One of the greatest challenges in medicine is communicating complex medical information to patients. Patients come to the clinic with concerns, questions, and fears - and the ability to explain things in clear, empathetic language is an integral part of medical care. Claude can serve as a "translator" between professional medical language and everyday language that any patient can understand.

Patient communication isn't just about convenience - research shows that patients who understand their medical condition, treatment plan, and post-procedure instructions are more likely to follow through on recommendations, experience less anxiety, and achieve better treatment outcomes. Claude enables physicians to create professional, accurate, and accessible educational materials - in just minutes.

## Key Use Cases

- **Patient education materials** - Create detailed information sheets in simple language about medical conditions, procedures, and treatments. For example: "What is BCC (basal cell carcinoma)?" in language any patient can understand
- **Post-procedure instructions** - Clear and detailed care instructions after procedures such as biopsy (tissue sampling), Mohs surgery, liquid nitrogen cryotherapy, or laser treatments. Including dos and don'ts, signs requiring medical attention, and a recovery timeline
- **FAQ creation** - FAQ (Frequently Asked Questions) sheets for each procedure or medical condition. Saves staff from answering the same questions repeatedly
- **Translating medical jargon** - Converting professional terms like "dysplastic nevus" or "cryotherapy" into everyday language that a patient without medical background can understand
- **Pre-procedure preparation guides** - Preparation guides explaining what will happen, how long it takes, whether there's pain, what to bring, and how to prepare - reducing pre-procedure anxiety
- **Sensitive communication** - Help drafting messages about concerning test results, explaining prognosis (disease outlook), and delivering difficult news in a sensitive and respectful way
- **Multilingual patient materials** - Creating the same educational material in Hebrew, Arabic, Russian, Amharic, or English - so every patient receives information in a language they understand

## Key Concepts

- **Health Literacy** - A patient's ability to understand medical information and act on it. Research shows that roughly half of patients struggle to understand written medical instructions. Claude helps create materials suited to different literacy levels
- **Informed Consent** - The process where a patient receives a full explanation of the procedure, risks, benefits, and alternatives - and agrees to treatment in an informed manner. Claude can help draft informed consent forms in clear language the patient truly understands
- **Plain Language** - Writing at a 6th-8th grade reading level, without unnecessary professional terminology. The principle: if your grandmother wouldn't understand the sentence, it needs to be simplified
- **Empathy** - The ability to communicate with the patient on an emotional level, not just informational. Claude can help draft messages that combine accurate medical information with sensitivity and compassion

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
Create a preparation guide for a patient before a shave biopsy. Include: what a biopsy is in plain language, how long it takes, whether there's pain (and anesthesia), what to bring, medications to stop (like blood thinners - note they must check with their doctor before stopping), what to expect on the day, and answers to 5 common questions.
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
Write a short newsletter (300-400 words) for a dermatology clinic's patients about "How to check moles at home - the ABCDE rule." Write in simple English, with a warm and professional tone. Include a call to action to book an annual screening.
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
- "The mole we removed is an **atypical** mole - meaning its cells look different from normal under the microscope. This is **not cancer**, but it's a type of mole we take seriously."
- "'Severe atypia' means the cells are more unusual than average. Think of it as a scale: mild, moderate, severe. Yours is severe - but it's important to understand: **severe does not mean cancer**. It means we want to be thorough."
- "'Margins positive' means when the pathologist examined the edges of the sample, they still found some atypical cells. This means we need to remove a small additional area around it - to make sure we got everything."
- Next steps: "We'll schedule a re-excision, a simple procedure under local anesthesia, and after that - annual monitoring with dermoscopy."

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

- **Principle 1: Anonymization (removing identifying details)** - Even when preparing explanation material for a specific patient, never include name, ID number, or identifying details in the prompt to Claude. Describe only the medical situation: "35-year-old female patient with dysplastic nevus" not "Sarah Cohen ID 123456789"
- **Principle 2: Personalization** - Claude creates an excellent draft, but **always** read, edit, and personalize before sending to the patient. Add the personal touch that only you, as the treating physician, can add
- **Principle 3: Medical Accuracy** - Verify that all medical information Claude writes is accurate and up-to-date. Claude is a tool, not a definitive medical source. **You are responsible for accuracy**
- **Principle 4: Cultural Sensitivity** - Adapt materials to the patient's cultural context. What works for one patient may not work for another from a different cultural background. Ask Claude to adapt tone and content for different populations
- **Principle 5: Accessibility** - Ensure materials are accessible to different literacy levels. Ask Claude to write "at a 6th-grade level" or "at a very basic level." For elderly patients - large font and short sentences

For more on this method: [DermUnbound Research](https://kaplanclinic.co.il/en/derm-ai)

## Creative Uses

- **"Clinic Voice" Project** - Create a Project in claude.ai with instructions that define your clinic's tone and style. This way, every material Claude produces sounds like "you"
- **Visual aid descriptions** - Ask Claude to create descriptions for diagrams, infographics (graphics that explain information visually), and illustrations - which you can then pass to a graphic designer
- **Video scripts** - Write scripts for short explanation videos (2-3 minutes) that patients can watch before or after the procedure
- **Template library** - Build a library of explanation templates for common conditions (AK, BCC, SCC, dysplastic nevi, psoriasis, eczema) - and improve them over time
- **Short SMS/WhatsApp messages** - Ask Claude to condense detailed instructions into a short, clear text message you can send to a patient via WhatsApp
- **Educational social media content** - Create short educational posts for patients on Facebook or Instagram, about topics like sun protection, mole checks, skin care
- **Waiting room materials** - Create information leaflets, small posters, or presentations that run on a screen in the waiting room - on educational topics that interest patients

## Advanced Tips

- **Specify reading level** - Tell Claude what level to write at: "Explain at a 6th-grade level" or "Write for an educated patient but without medical background"
- **Ask for analogies** - Analogies (comparisons/metaphors) help patients understand. For example: "A biopsy is like taking a small sample to test in a lab - like tasting soup before serving it"
- **Quick-scan format** - Request bullet points, clear headings, and numbering - so a patient can find information quickly
- **Warning signs** - Always request a "When to contact the doctor" section - with clear signs that require urgent attention
- **Language translation** - Claude translates at high quality to Arabic, Russian, Amharic, and Hebrew. Request a translation and then check with a native speaker if possible
- **Add visuals** - Ask Claude to describe what should appear in an image/illustration next to the text - and send the description to a designer
- **Build on feedback** - Ask patients if the explanations were clear, and improve your templates accordingly

## Recommended Platform

**What is a "platform"?** - The tool (app or website) you use to talk to Claude. Each is suited to different situations:

- **claude.ai** - Claude's main website. Ideal for creating detailed educational materials, informed consent forms, newsletters, and educational content. It also has a "Projects" feature that lets you save context and style - so you don't have to re-explain to Claude who you are and what your style is in every conversation
- **Claude Mobile App** - A free app for your phone (iPhone and Android). Perfect for creating quick responses in real time - for example, when a patient asks a question and you want to draft a clear answer. Available on the App Store and Google Play
- **Desktop App** - An application you install on your computer. Convenient for preparing materials at the office, since you can work alongside your EMR (Electronic Medical Record) software

## 🔒 Privacy and Security

- **Never include identifying information** when creating explanation templates - don't enter patient names, ID numbers, phone numbers, or addresses. Describe only the medical situation
- **Review all materials before sharing** - Claude produces a draft. Always read, verify medical accuracy, and customize before giving to a patient
- **Keep a "Human in the Loop"** - Don't send AI-generated material directly to a patient without a physician reading and approving it. The doctor is always the gatekeeper
- **DermUnbound guidelines** - Follow the five principles described above: anonymization, personalization, medical accuracy, cultural sensitivity, and accessibility
- **Keep copies** - Save a copy of educational materials you created and shared, for medical documentation purposes`,
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

Claude יכול לעזור בייעול תהליכים תפעוליים **מבלי לגשת ישירות לרשומות מטופלים**. הרעיון הוא להשתמש ב-Claude ככלי תכנון, כתיבה ואסטרטגיה - ליצור תבניות, פרוטוקולים, צ'קליסטים ותוכניות עבודה שאתם ממקמים בקליניקה. אתם לא צריכים להיות אנשי טכנולוגיה כדי לקבל ערך עצום מהכלי הזה.

## שימושים עיקריים

- **אופטימיזציה של תורים (שיפור מערך התורים)** - יצירת אסטרטגיות להפחתת ביטולים (no-shows), שיפור זרימת מטופלים, ותכנון יעיל יותר של יום העבודה. Claude יכול לעזור לעצב מדיניות תורים, תבניות SMS תזכורת, ושיטות לניהול רשימת המתנה
- **אוטומציה של תהליכים (הפיכת משימות ידניות לאוטומטיות)** - אוטומציה לא חייבת להיות מסובכת. Claude יכול לעזור לתכנן תהליכים אוטומטיים פשוטים: תזכורות תורים, דוחות שבועיים, תבניות מכתבים. אם צריך מימוש טכני - תוכלו להעביר את התוכנית לאיש ה-IT שלכם
- **הכשרת צוות** - יצירת חומרי הדרכה, פרוטוקולים (נהלי עבודה כתובים), SOPs (Standard Operating Procedures - נוהלי עבודה סטנדרטיים, מסמכים שמתארים צעד-צעד כיצד לבצע משימה), ומבחני ידע לצוות המרפאה
- **ניהול מלאי** - יצירת מערכות מעקב אחר חומרים רפואיים, תזכורות הזמנה, ורשימות ציוד. Claude יכול ליצור טבלאות Excel או Google Sheets עם נוסחאות אוטומטיות לניהול מלאי
- **ניהול פיננסי** - יצירת תבניות דוחות חודשיים, מעקב הכנסות והוצאות, ניתוח כדאיות של שירותים חדשים, ותכנון תקציב. Claude יכול ליצור טבלאות ונוסחאות - אתם רק ממלאים את המספרים
- **שיפור חווית מטופל** - עיצוב תהליך הביקור מרגע הכניסה ועד היציאה: שאלוני קבלה, זרימת מטופלים, משובי שביעות רצון, ותקשורת מעקב
- **בניית אתר ונוכחות דיגיטלית** - יצירת תוכן לאתר המרפאה, עמודי שירותים, ומידע למטופלים פוטנציאליים. Claude יכול לכתוב טקסטים מקצועיים שמתאימים לרופאים

## מושגי מפתח

מונחים שתפגשו כשמדברים על ניהול מרפאה חכם - מוסברים בשפה פשוטה:

- **אוטומציה** - הפיכת תהליכים ידניים לאוטומטיים. למשל: במקום שהמזכירה תתקשר לכל מטופל להזכיר לו על תור - המערכת שולחת SMS אוטומטית. **לא דורש ידע בתכנות** - Claude יכול לתכנן את התהליך ואיש IT יכול לממש אותו
- **SOP (נוהל עבודה סטנדרטי)** - Standard Operating Procedure. מסמך שמתאר צעד-אחר-צעד כיצד לבצע משימה מסוימת. למשל: "נוהל הכנת חדר טיפולים" או "נוהל קבלת מטופל חדש". SOPs מבטיחים שכל אחד בצוות עושה את הדברים באותה צורה, בכל פעם
- **CRM (ניהול קשרי לקוחות)** - Customer Relationship Management. מערכת שעוזרת לעקוב אחר מטופלים ותקשורת איתם. בהקשר רפואי: מתי המטופל ביקר לאחרונה, מתי צריך מעקב, איזה טיפולים עשה. אתם כנראה כבר משתמשים במשהו דומה דרך תוכנת הרשומה הרפואית שלכם
- **KPI (מדד ביצוע)** - Key Performance Indicator. מספר שמודד הצלחה. למשל: "אחוז ביטולי תורים" (ככל שנמוך יותר - טוב יותר), "זמן המתנה ממוצע", "מספר מטופלים ביום". KPIs עוזרים לכם לדעת אם המרפאה עובדת טוב ואיפה צריך לשפר
- **API (ממשק תכנות)** - Application Programming Interface. ממשק שמאפשר לתוכנות "לדבר" זו עם זו. כמו תרגומן בין מערכות שונות. למשל: מערכת התורים "מדברת" עם מערכת ה-SMS כדי לשלוח תזכורות אוטומטיות. **אתם לא צריכים להבין את זה טכנית** - רק לדעת שזה אפשרי ולבקש מאיש ה-IT
- **Script (סקריפט)** - קובץ עם רצף פקודות שרצות אוטומטית. כמו "מתכון" למחשב - הוא עוקב אחרי ההוראות צעד אחר צעד. אפשר לבקש מ-Claude לכתוב סקריפט ולהעביר אותו לאיש ה-IT שלכם למימוש

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

כשמטופל מבטל - מלאו את המקום מהר:

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

- **שלב 1: מיפוי תהליכים** - לפני שמשפרים, צריך להבין. רשמו את כל התהליכים במרפאה: מרגע שמטופל מתקשר לקבוע תור ועד שהוא יוצא ומקבל מעקב. זהו את "צווארי הבקבוק" (bottlenecks) - הנקודות שבהן דברים נתקעים. בקשו מ-Claude לעזור ליצור תרשים זרימה (flowchart) של כל תהליך
- **שלב 2: תעדוף** - אי אפשר לשפר הכל בבת אחת. סדרו את התהליכים לפי: (א) השפעה כספית, (ב) קלות מימוש, (ג) השפעה על שביעות רצון מטופלים. התחילו מ"ניצחונות מהירים" - שיפורים קטנים שנותנים תוצאות מיידיות
- **שלב 3: יצירת SOPs** - השתמשו ב-Claude ליצירת נוהלי עבודה סטנדרטיים לכל תהליך מרכזי. SOP טוב כולל: מטרת התהליך, מי אחראי, צעדים מפורטים, רשימת ציוד, ו"מה לעשות אם..." למצבים חריגים
- **שלב 4: הכשרת צוות** - אין טעם ב-SOPs אם הצוות לא יודע אותם. השתמשו ב-Claude ליצירת חומרי הדרכה: מצגות, מבחנים קצרים, תרגילי סימולציה. קבעו הדרכה חודשית קבועה
- **שלב 5: מדידה ושיפור** - הגדירו KPIs (מדדי ביצוע) לכל תהליך. מדדו מדי חודש. בקשו מ-Claude לנתח את המגמות ולהציע שיפורים. ניהול מרפאה חכם הוא תהליך מתמשך, לא אירוע חד-פעמי

למידע נוסף: [מחקר DermUnbound](https://kaplanclinic.co.il/he/derm-ai)

## שימושים יצירתיים

- **תיאורי משרה** - בקשו מ-Claude לכתוב מודעת דרושים לאחות מרפאה, מזכירה רפואית, או רופא מתמחה. כללו: תיאור התפקיד, דרישות, תנאים, ותרבות המרפאה
- **סקרי שביעות רצון מטופלים** - צרו סקרים מותאמים וניתחו תוצאות. בקשו מ-Claude לזהות דפוסים ולהציע שיפורים על סמך המשוב
- **לוח תוכן לרשתות חברתיות** - תכננו חודש שלם של פוסטים: טיפים לעור, מאחורי הקלעים, שאלות נפוצות, מבצעים עונתיים. Claude יכול ליצור את כל התוכן
- **פרוטוקולי חירום** - צרו עצי החלטה (decision trees) למצבי חירום: תגובה אלרגית לפרוצדורה, התעלפות מטופל, דימום בלתי נשלט. תלו בכל חדר טיפולים
- **אופטימיזציה של זרימת מטופלים** - תכננו את המסלול הפיזי של המטופל במרפאה: קבלה → חדר המתנה → חדר טיפולים → תשלום → יציאה. זהו צווארי בקבוק ושפרו
- **תבניות שיבוץ צוות** - צרו טבלת משמרות חודשית שמתחשבת בהעדפות, מומחיות, ועומס. Claude יכול ליצור טבלת Excel חכמה
- **מבחני ידע לצוות** - צרו מבחנים קצרים (quizzes) על נהלי המרפאה, בטיחות, ושירות לקוחות. מתאים להדרכות חודשיות
- **ניסוח מדיניות** - בקשו מ-Claude לנסח מדיניות ביטולים, מדיניות תשלום, מדיניות פרטיות, ומדיניות תלונות. התאימו לחוק הישראלי ולאופי המרפאה

## טיפים מתקדמים

- **פרויקט "מנהל מרפאה"** - צרו פרויקט (Project) ב-claude.ai עם כל הפרטים על המרפאה שלכם: גודל, צוות, שירותים, שעות פעילות, אוכלוסיית מטופלים. כך Claude "מכיר" את המרפאה ונותן תשובות מותאמות
- **שדרוג SOPs קיימים** - יש לכם נוהלי עבודה ישנים? העלו אותם ל-claude.ai ובקשו "שפר את ה-SOP הזה: הוסף צעדים חסרים, הבהר שפה, והוסף סעיף 'מה לעשות אם...'"
- **ניתוח נתוני תורים** - אם יש לכם גישה ל-Claude Code (או איש IT שיכול לעזור), תוכלו לנתח נתוני תורים (מאונימיים) כדי לזהות דפוסים: ימים עמוסים, שעות שקטות, עונות שיא
- **נוסחאות Excel** - בקשו מ-Claude ליצור נוסחאות Excel למעקב אחרי מדדים: SUMIFS, COUNTIFS, VLOOKUP, גרפים אוטומטיים. פשוט תארו מה אתם רוצים ו-Claude ייצר את הנוסחה
- **הכנה לביקורות ורגולציה** - בקשו מ-Claude ליצור צ'קליסט לביקורת רגולטורית (מעבדה, משרד הבריאות). Claude מכיר תקנים בינלאומיים ויכול לעזור להתכונן

## פלטפורמה מומלצת

**מה זה "פלטפורמה"?** - הכלי (אפליקציה או אתר) דרכו אתם מדברים עם Claude:

- **Claude Code** - כלי שורת פקודה (command line) שמאפשר ל-Claude לעבוד ישירות עם קבצים במחשב שלכם. מתאים ליצירת אוטומציות, ניתוח נתונים מקבצי Excel, ויצירת סקריפטים. **הסבר פשוט:** זה כמו שיחה עם Claude, אבל Claude יכול גם "לגעת" בקבצים שלכם - לקרוא, לערוך, וליצור. אם אתם לא טכניים, בקשו מאיש ה-IT להתקין ולהגדיר עבורכם
- **claude.ai עם Projects** - האתר הרשמי של Claude, עם תכונת "פרויקטים" שמאפשרת לשמור הקשר בין שיחות. **מתאים ל:** ניהול שוטף של המרפאה - יצירת SOPs, חומרי הדרכה, מדיניות, ותכנון. צרו פרויקט בשם "ניהול מרפאה" עם כל הפרטים שלכם
- **API (ממשק לתוכנות)** - API מאפשר לחבר את Claude למערכות אחרות שאתם כבר משתמשים בהן. **הסבר פשוט:** זה כמו לתת ל-Claude "מספר טלפון" שתוכנות אחרות יכולות להתקשר אליו אוטומטית. למשל: מערכת התורים שולחת נתונים ל-Claude, ו-Claude מכין דוח. **דורש איש IT** להגדרה, אבל אחרי ההגדרה עובד אוטומטית

## 🔒 פרטיות ואבטחה

- **לעולם אל תשתפו רשימות מטופלים או רשומות** עם Claude. ניהול מרפאה לא דורש נתונים ברמת מטופל בודד
- **השתמשו בנתונים מצטברים/מאונימיים בלבד** - במקום "יוסי כהן ביטל 3 פעמים", כתבו "10% מהמטופלים מבטלים יותר מפעם אחת"
- **ניהול מרפאה לא דורש נתוני מטופל** - רוב המשימות התפעוליות (SOPs, צ'קליסטים, תבניות, מדיניות) לא דורשות שום מידע על מטופלים ספציפיים
- **הנחיות DermUnbound** - השתמשו ב-AI לתכנון ואסטרטגיה, לא לעיבוד ישיר של נתוני מטופלים
- **הגנה על מידע פיננסי** - גם נתונים פיננסיים רגישים. שתפו מספרים מצטברים, לא חשבוניות ספציפיות`,
      en: `## Introduction

Running a medical practice involves countless operational tasks beyond patient care: appointment scheduling, staff management, inventory tracking, employee training, financial management, and more. These tasks consume valuable time that could otherwise be spent with patients.

Claude can help streamline operational processes **without directly accessing patient records**. The idea is to use Claude as a planning, writing, and strategy tool - creating templates, protocols, checklists, and work plans that you implement in your clinic. You don't need to be a tech person to get tremendous value from this tool.

## Key Use Cases

- **Appointment optimization** - Creating strategies to reduce no-shows, improve patient flow, and plan the workday more efficiently. Claude can help design scheduling policies, SMS reminder templates, and waitlist management methods
- **Process automation (making manual tasks automatic)** - Automation doesn't have to be complicated. Claude can help plan simple automated processes: appointment reminders, weekly reports, letter templates. If technical implementation is needed, you can hand the plan to your IT person
- **Staff training** - Creating training materials, protocols (written work procedures), SOPs (Standard Operating Procedures - documents describing step-by-step how to perform a task), and knowledge quizzes for clinic staff
- **Inventory management** - Creating tracking systems for medical supplies, reorder reminders, and equipment lists. Claude can create Excel or Google Sheets tables with automatic formulas for inventory management
- **Financial management** - Creating monthly report templates, revenue and expense tracking, cost-benefit analysis for new services, and budget planning. Claude can create tables and formulas - you just fill in the numbers
- **Patient experience improvement** - Designing the visit process from arrival to departure: intake forms, patient flow, satisfaction surveys, and follow-up communication
- **Website and digital presence** - Creating content for the clinic website, service pages, and information for potential patients. Claude can write professional copy suitable for physicians

## Key Concepts

Terms you'll encounter when discussing smart practice management - explained in plain language:

- **Automation** - Making manual processes automatic. For example: instead of the receptionist calling each patient to remind them of an appointment, the system sends an automatic SMS. **No programming knowledge required** - Claude can plan the process and an IT person can implement it
- **SOP (Standard Operating Procedure)** - A document describing step-by-step how to perform a specific task. For example: "Room preparation procedure" or "New patient intake procedure." SOPs ensure everyone on the team does things the same way, every time
- **CRM (Customer Relationship Management)** - A system that helps track patients and communication with them. In a medical context: when the patient last visited, when follow-up is needed, what treatments were done. You probably already use something similar through your EMR software
- **KPI (Key Performance Indicator)** - A number that measures success. For example: "appointment cancellation rate" (lower is better), "average wait time," "number of patients per day." KPIs help you know if the clinic is running well and where improvement is needed
- **API (Application Programming Interface)** - An interface that allows software programs to "talk" to each other. Like a translator between different systems. For example: the scheduling system "talks" to the SMS system to send automatic reminders. **You don't need to understand this technically** - just know it's possible and ask your IT person
- **Script** - A file with a sequence of commands that run automatically. Like a "recipe" for the computer - it follows the instructions step by step. You can ask Claude to write a script and hand it to your IT person for implementation

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

- **Step 1: Process Mapping** - Before improving, you need to understand. Document all processes in the clinic: from the moment a patient calls to book an appointment until they leave and receive follow-up. Identify "bottlenecks" - points where things get stuck. Ask Claude to help create a flowchart of each process
- **Step 2: Prioritization** - You can't improve everything at once. Rank processes by: (a) financial impact, (b) ease of implementation, (c) impact on patient satisfaction. Start with "quick wins" - small improvements that yield immediate results
- **Step 3: Create SOPs** - Use Claude to create Standard Operating Procedures for every key process. A good SOP includes: purpose of the process, who's responsible, detailed steps, equipment list, and "what to do if..." for unusual situations
- **Step 4: Staff Training** - SOPs are useless if staff doesn't know them. Use Claude to create training materials: presentations, short quizzes, simulation exercises. Schedule regular monthly training sessions
- **Step 5: Measure and Improve** - Define KPIs (performance metrics) for each process. Measure monthly. Ask Claude to analyze trends and suggest improvements. Smart practice management is an ongoing process, not a one-time event

For more information: [DermUnbound Research](https://kaplanclinic.co.il/en/derm-ai)

## Creative Uses

- **Job descriptions** - Ask Claude to write job postings for a clinic nurse, medical receptionist, or resident. Include: role description, requirements, conditions, and clinic culture
- **Patient satisfaction surveys** - Create customized surveys and analyze results. Ask Claude to identify patterns and suggest improvements based on feedback
- **Social media content calendar** - Plan a full month of posts: skin tips, behind the scenes, FAQs, seasonal promotions. Claude can create all the content
- **Emergency protocols** - Create decision trees for emergency situations: allergic reaction to a procedure, patient fainting, uncontrolled bleeding. Post in every treatment room
- **Patient flow optimization** - Plan the physical path of the patient through the clinic: reception → waiting room → treatment room → payment → exit. Identify bottlenecks and improve
- **Staff scheduling templates** - Create monthly shift tables that account for preferences, specialties, and workload. Claude can create a smart Excel table
- **Staff knowledge quizzes** - Create short quizzes about clinic procedures, safety, and customer service. Perfect for monthly training sessions
- **Policy drafting** - Ask Claude to draft cancellation policies, payment policies, privacy policies, and complaint policies. Adapt to local law and your clinic's character

## Advanced Tips

- **"Clinic Manager" Project** - Create a Project in claude.ai with all your clinic details: size, staff, services, hours, patient demographics. This way Claude "knows" your clinic and gives tailored answers
- **Upgrade existing SOPs** - Have old work procedures? Upload them to claude.ai and ask "Improve this SOP: add missing steps, clarify language, and add a 'what to do if...' section"
- **Appointment data analysis** - If you have access to Claude Code (or an IT person who can help), you can analyze appointment data (anonymized) to identify patterns: busy days, quiet hours, peak seasons
- **Excel formulas** - Ask Claude to create Excel formulas for tracking metrics: SUMIFS, COUNTIFS, VLOOKUP, automatic charts. Simply describe what you want and Claude will generate the formula
- **Audit preparation** - Ask Claude to create a regulatory audit checklist (laboratory, health ministry). Claude knows international standards and can help prepare

## Recommended Platform

**What is a "platform"?** - The tool (app or website) you use to talk to Claude:

- **Claude Code** - A command-line tool that lets Claude work directly with files on your computer. Suitable for creating automations, analyzing data from Excel files, and creating scripts. **Simple explanation:** It's like chatting with Claude, but Claude can also "touch" your files - read, edit, and create them. If you're not technical, ask your IT person to install and set it up for you
- **claude.ai with Projects** - Claude's official website, with a "Projects" feature that saves context between conversations. **Best for:** ongoing clinic management - creating SOPs, training materials, policies, and planning. Create a project called "Clinic Management" with all your details
- **API (software interface)** - API allows connecting Claude to other systems you already use. **Simple explanation:** It's like giving Claude a "phone number" that other software can call automatically. For example: the scheduling system sends data to Claude, and Claude prepares a report. **Requires IT person** to set up, but after setup it runs automatically

## 🔒 Privacy and Security

- **Never share patient lists or records** with Claude. Practice management doesn't require individual patient-level data
- **Use only aggregate/anonymized data** - Instead of "John Smith cancelled 3 times," write "10% of patients cancel more than once"
- **Practice management doesn't need patient data** - Most operational tasks (SOPs, checklists, templates, policies) don't require any information about specific patients
- **DermUnbound guidelines** - Use AI for planning and strategy, not for directly processing patient data
- **Protect financial information** - Financial data is also sensitive. Share aggregate numbers, not specific invoices`,
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

שיווק רפואי הוא אתגר ייחודי: צריך למצוא את האיזון בין מקצועיות ואתיקה לבין תוכן מעניין ומושך. רופאים רבים מרגישים אי-נוחות עם שיווק - זה נראה "לא רפואי" או אפילו לא אתי. אבל המציאות היא שבעולם הדיגיטלי, מטופלים מחפשים מידע אונליין לפני שהם בוחרים רופא. אם אתם לא שם - הם ימצאו מישהו אחר.

Claude יכול להפוך את השיווק הרפואי לקל ונעים. במקום לנסות "למכור", Claude עוזר לכם ליצור **תוכן חינוכי** שמעמיד אתכם כסמכות מקצועית בתחומכם. כשמטופל קורא מאמר שכתבתם (בעזרת Claude) על הגנה מהשמש - הוא לומד משהו חשוב, ובמקביל מכיר אתכם כמומחים.

**השיווק הרפואי הטוב ביותר הוא חינוך.** זהו העיקרון המנחה של הגישה שלנו.

## שימושים עיקריים

- **תוכן לאתר המרפאה** - דפי שירות (למשל: "טיפול בפסוריאזיס"), תיאורי טיפולים, דף "אודות הרופא", דפי נחיתה (דף שמיועד לגרום למבקר לבצע פעולה אחת, כמו קביעת תור). Claude יכול לכתוב תוכן שהוא גם מקצועי רפואית וגם מותאם למנועי חיפוש
- **פוסטים חינוכיים לרשתות חברתיות** - תוכן לאינסטגרם (פוסטים, סטוריז, קרוסלות), פייסבוק (פוסטים ארוכים, סרטונים), לינקדאין (מאמרים מקצועיים, עדכונים), TikTok (תסריטים לסרטוני 60 שניות). Claude מייצר תוכן מותאם לכל פלטפורמה בנפרד
- **SEO רפואי** - SEO (אופטימיזציה למנועי חיפוש) פירושו לגרום לאתר שלכם להופיע גבוה בגוגל כשמישהו מחפש "רופא עור בתל אביב" או "הסרת שומות". Claude עוזר לכתוב תוכן שכולל את המילים הנכונות שאנשים מחפשים
- **שיווק באימייל** - ניוזלטרים חודשיים (עדכונים שנשלחים למנויים), תזכורות תור, מבצעים עונתיים (הגנה מהשמש בקיץ, טיפוח עור בחורף), הודעות על טיפולים חדשים
- **ניהול מוניטין אונליין** - תגובות מקצועיות לביקורות באינטרנט (גוגל, Facebook), בניית מוניטין חיובי, טיפול בביקורות שליליות בצורה מכובדת ואתית
- **חומרי שיווק מודפסים** - ברושורים, פלאיירים, פוסטרים למרפאה, כרטיסי ביקור עם מסרים שיווקיים
- **וידאו מרקטינג** - תסריטים לסרטוני הסבר ביוטיוב, תיאורים לסרטונים, רעיונות לסדרות וידאו חינוכיות

## מושגי מפתח

אם אתם לא אנשי טכנולוגיה - אל דאגה. הנה הסבר פשוט למונחים שתפגשו בעולם השיווק הדיגיטלי:

- **SEO (אופטימיזציה למנועי חיפוש)** - כשמטופל מחפש בגוגל "רופא עור בירושלים", גוגל מחליט אילו אתרים להציג ראשונים. SEO זה אוסף של טכניקות שעוזרות לאתר שלכם להופיע גבוה ברשימה. למשל: שימוש במילים שאנשים מחפשים, כתיבת תוכן איכותי, ותיאורים ברורים של השירותים שלכם. Claude יכול לכתוב תוכן שמותאם ל-SEO מבלי שתצטרכו להבין את הטכניקה בעצמכם

- **CTA (קריאה לפעולה)** - הכפתור או המשפט שאומר לקורא מה לעשות עכשיו. למשל: "קבעו תור", "התקשרו עכשיו", "הורידו את המדריך". בלי CTA, מבקר באתר קורא ועוזב. עם CTA טוב, הוא הופך למטופל

- **Content Marketing (שיווק תוכן)** - גישה שבה במקום לפרסם מודעות ("הרופא הכי טוב בעיר!"), אתם מפרסמים תוכן חינוכי שעוזר לאנשים ("5 סימנים שהשומה שלכם צריכה בדיקה"). אנשים שמקבלים ערך ממכם סומכים עליכם ובוחרים בכם כרופאים

- **Engagement (מעורבות)** - המדד לכמה אנשים מגיבים לתוכן שלכם ברשתות חברתיות: לייקים, תגובות, שיתופים, שמירות. engagement גבוה אומר שהתוכן שלכם מעניין ומגיע ליותר אנשים. Claude יכול לעזור לכתוב תוכן שמעודד מעורבות

- **Hashtags (תגיות)** - מילות מפתח עם # לפניהן, כמו #רופאעור #דרמטולוגיה #הגנהמהשמש. הן עוזרות לאנשים שמחפשים נושאים ספציפיים ברשתות חברתיות למצוא את התוכן שלכם. Claude ממליץ על hashtags רלוונטיים לכל פוסט

- **Landing Page (דף נחיתה)** - דף אינטרנט ספציפי שנועד לגרום למבקר לעשות דבר אחד: לקבוע תור, להשאיר פרטים, או להוריד מדריך. בניגוד לדף רגיל באתר שיש בו הרבה קישורים, דף נחיתה ממוקד בפעולה אחת בלבד

- **Conversion (המרה)** - כשמבקר באתר הופך למטופל (קובע תור, מתקשר, משאיר פרטים). "שיעור המרה" הוא אחוז המבקרים שמבצעים את הפעולה הרצויה. למשל, אם מ-100 מבקרים באתר 3 קובעים תור, שיעור ההמרה הוא 3%

- **Artifacts** - פיצ'ר מיוחד ב-claude.ai שמראה את התוכן ש-Claude יוצר בתצוגה ויזואלית בזמן אמת, בצד ימין של המסך. למשל, אם תבקשו מ-Claude לכתוב פוסט - תוכלו לראות אותו מעוצב ומוכן לפני שאתם מעתיקים אותו

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
**הסבר:** לינקדאין הוא הרשת המקצועית - מתאים לתוכן שמעמיד אתכם כמומחים בפני קולגות ומטופלים פוטנציאליים.

\`\`\`
צור פוסטים ל-Google My Business למרפאת עור. 4 פוסטים: חדשות, אירוע, הצעה, עדכון. כלול תמונה מומלצת לכל אחד.
\`\`\`
**הסבר:** Google My Business (גוגל לעסק שלי) הוא הפרופיל שמופיע כשמחפשים את המרפאה שלכם בגוגל. פוסטים שם משפרים את הנראות בחיפוש.

\`\`\`
כתוב תבנית בקשה מנומסת ואתית לביקורת (review) ממטופל מרוצה. כלול הסבר למה ביקורות חשובות, וקישור ישיר לגוגל. שמור על אתיקה - בלי לחץ.
\`\`\`
**הסבר:** ביקורות חיוביות בגוגל הן מהכלים השיווקיים החזקים ביותר. בקשה מנומסת אחרי טיפול מוצלח היא לגיטימית ואתית.

\`\`\`
צור דף שאלות נפוצות (FAQ) לאתר מרפאת עור. כלול 15 שאלות נפוצות על: תורים, ביטוחים, הכנה לטיפולים, זמני החלמה, תשלום. כתוב בשפה נגישה.
\`\`\`
**הסבר:** דף FAQ טוב מפחית שיחות טלפון למזכירות, משפר SEO, ונותן מענה מיידי למטופלים.

\`\`\`
עצב תוכן לפוסטר לחדר המתנה על הגנה מהשמש. כלול: 5 טיפים עיקריים, גרפיקה פשוטה, מסר מרכזי. בעברית, מותאם להדפסה בגודל A3.
\`\`\`
**הסבר:** חומרי הסבר בחדר ההמתנה הם שיווק "שקט" - מחנכים מטופלים ומחזקים את המיתוג שלכם.

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

- **עקרון 1: חינוך לפני שיווק** - כל פיסת תוכן צריכה ללמד את הקורא משהו חדש. אם המטופל לא יוצא חכם יותר אחרי הקריאה - התוכן לא טוב מספיק. שיווק שמבוסס על חינוך בונה אמון לטווח ארוך

- **עקרון 2: דיוק רפואי** - כל טענה בתוכן השיווקי חייבת להיות מבוססת רפואית. בקשו מ-Claude לכלול מקורות (references) כשהוא כותב תוכן עם טענות רפואיות. זכרו: Claude יכול לטעות - תמיד בדקו מידע רפואי

- **עקרון 3: שקיפות** - היו שקופים לגבי טיפולים, תוצאות, ומגבלות. אל תבטיחו "ריפוי מוחלט" או "תוצאות מובטחות". מטופלים מעריכים כנות

- **עקרון 4: פרטיות** - לעולם אל תשתמשו בתמונות או סיפורים של מטופלים ללא הסכמה כתובה ומפורשת. גם אם המטופל הסכים בעל פה - דרושה הסכמה בכתב

- **עקרון 5: אתיקה מקצועית** - עקבו אחרי הנחיות הפרסום של הר"י (הסתדרות הרפואית בישראל) ושל לשכת רופאי העור. הימנעו מהשוואות עם רופאים אחרים, התחייבות לתוצאות, או שיווק אגרסיבי

- **עקרון 6: ערך אמיתי** - כל תוכן שאתם מפרסמים צריך לעזור באמת לאנשים. שאלו את עצמכם: "האם הייתי רוצה שהמטופלים שלי יקראו את זה?" אם התשובה כן - פרסמו

[מחקר DermUnbound](https://kaplanclinic.co.il/he/derm-ai)

## שימושים יצירתיים

- **מסמך "קול מותג"** - צרו מסמך שמגדיר את הטון, הסגנון, והערכים של המרפאה. שמרו אותו בפרויקט Claude כדי שכל תוכן שנוצר יהיה עקבי
- **ניתוח מתחרים** - בקשו מ-Claude לנתח אתרי מרפאות מתחרות ולמצוא פערים בתוכן שאתם יכולים למלא
- **תוכן עונתי** - צרו סדרות תוכן לפי עונות: הגנה מהשמש בקיץ, טיפוח עור יבש בחורף, אלרגיות באביב
- **סדרת הסברים** - קרוסלת אינסטגרם של 5 שקפים: "5 מיתוסים על קרם הגנה" או "מה באמת גורם לאקנה"
- **הודעות לעיתונות** - לטיפולים חדשים, ציוד חדש, או אירועי מרפאה
- **תוכן לציוני דרך** - יום השנה למרפאה, 1000 מטופלים, שנה של פעילות
- **תכנית הפניות** - חומרים לעידוד מטופלים להפנות חברים ומשפחה
- **אירועים קהילתיים** - רעיונות ליום עיון פתוח, סדנת הגנה מהשמש, הרצאה בבית ספר
- **תבניות מקרי בוחן** - הצגת לפני/אחרי (with consent) בפורמט מקצועי ואתי

## טיפים מתקדמים

- **העלו תוכן קיים לשיפור** - העלו את תוכן האתר הנוכחי שלכם ל-Claude ובקשו הצעות לשיפור, עדכון, והתאמה ל-SEO
- **השתמשו ב-Artifacts** - ב-claude.ai, פיצ'ר Artifacts מציג את התוכן ש-Claude יוצר בתצוגה ויזואלית בזמן אמת בצד ימין של המסך. זה מאפשר לראות איך הפוסט ייראה לפני שאתם מעתיקים
- **טון שונה לפלטפורמות שונות** - בקשו מ-Claude לכתוב את אותו מסר בטונים שונים: רשמי ללינקדאין, קליל לאינסטגרם, מידעי לאתר
- **מקורות רפואיים** - בקשו מ-Claude לכלול מקורות רפואיים בתוכן חינוכי. זה מוסיף אמינות ומבדל אתכם מתוכן לא-מקצועי
- **A/B Testing** - בקשו מ-Claude ליצור 2-3 גרסאות של כותרת או CTA ובדקו מה עובד טוב יותר. A/B Testing פירושו לנסות שתי גרסאות ולראות איזו מביאה תוצאות טובות יותר
- **תכנון לטווח ארוך** - בקשו מ-Claude ליצור אסטרטגיית תוכן ל-3 חודשים קדימה, לא רק פוסט אחד
- **שימוש חוזר בתוכן** - בקשו מ-Claude להפוך מאמר ארוך ל-5 פוסטים קצרים, או סרטון ל-3 ציטוטים ויזואליים

## פלטפורמה מומלצת

**מה זה "פלטפורמה"?** - הכלי (אתר או אפליקציה) דרכו אתם עובדים עם Claude. הנה ההמלצות לשיווק:

- **claude.ai עם Artifacts** - הפלטפורמה הטובה ביותר ליצירת תוכן שיווקי. **Artifacts** הוא פיצ'ר ייחודי: כש-Claude יוצר תוכן, הוא מוצג בחלון ויזואלי נפרד בצד ימין של המסך. אתם יכולים לראות את הפוסט/מסמך מעוצב בזמן אמת, לבקש שינויים, ולהעתיק את הגרסה הסופית
- **Claude Projects** - "פרויקטים" הם תכונה שמאפשרת לשמור הנחיות קבועות. שמרו את מסמך קול המותג, מידע על המרפאה, וסגנון הכתיבה - ו-Claude תמיד יידע את הסגנון שלכם בלי שתצטרכו להסביר מחדש
- **Claude Mobile** - אפליקציית Claude בטלפון. מושלמת לכתיבת כיתוב (caption) מהיר לתמונה שצילמתם, או רעיון לפוסט שעלה לכם בדרך

## 🔒 פרטיות ואבטחה

- **לעולם אל תשתמשו בתמונות מטופלים** ללא הסכמה כתובה ומפורשת - גם לא תמונות "אנונימיות" שאפשר לזהות לפיהן
- **אל תבטיחו תוצאות טיפול** - זה לא אתי ולא חוקי. כתבו "התוצאות משתנות ממטופל למטופל"
- **עקבו אחרי הנחיות הפרסום של הר"י** - ההסתדרות הרפואית בישראל מפרסמת כללים ברורים לגבי פרסום רפואי
- **אל תשתפו המלצות מטופלים** ללא הסכמה מפורשת בכתב
- **בדקו כל טענה רפואית** בחומרי השיווק - Claude יכול לטעות, ואתם אחראים על הדיוק
- **שקיפות לגבי AI** - שקלו לציין כשתוכן נוצר בעזרת AI, בהתאם לנורמות המתפתחות בתחום`,
      en: `## Introduction

Medical marketing is a unique challenge: you need to balance professionalism and ethics with engaging, attractive content. Many physicians feel uncomfortable with marketing - it seems "unmedical" or even unethical. But the reality is that in the digital world, patients search for information online before choosing a physician. If you're not there, they'll find someone else.

Claude can make medical marketing easy and natural. Instead of trying to "sell," Claude helps you create **educational content** that positions you as a professional authority in your field. When a patient reads an article you wrote (with Claude's help) about sun protection - they learn something important, and at the same time, they get to know you as an expert.

**The best medical marketing is education.** This is the guiding principle of our approach.

## Key Use Cases

- **Clinic website content** - Service pages (e.g., "Psoriasis Treatment"), treatment descriptions, "About the Doctor" page, landing pages (a page designed to get the visitor to take one action, like booking an appointment). Claude can write content that is both medically professional and optimized for search engines
- **Educational social media posts** - Content for Instagram (posts, stories, carousels), Facebook (long posts, videos), LinkedIn (professional articles, updates), TikTok (60-second video scripts). Claude generates content tailored to each platform
- **Medical SEO** - SEO (Search Engine Optimization) means making your website appear high in Google when someone searches "dermatologist near me" or "mole removal." Claude helps write content that includes the right keywords people search for
- **Email marketing** - Monthly newsletters (updates sent to subscribers), appointment reminders, seasonal campaigns (sun protection in summer, skin care in winter), announcements about new treatments
- **Online reputation management** - Professional responses to online reviews (Google, Facebook), building positive reputation, handling negative reviews gracefully and ethically
- **Printed marketing materials** - Brochures, flyers, posters for the clinic, business cards with marketing messages
- **Video marketing** - Scripts for educational YouTube videos, video descriptions, ideas for educational video series

## Key Concepts

If you're not a tech person - don't worry. Here's a simple explanation of terms you'll encounter in the digital marketing world:

- **SEO (Search Engine Optimization)** - When a patient searches Google for "dermatologist in my area," Google decides which websites to show first. SEO is a set of techniques that help your website appear high on the list. For example: using words people search for, writing quality content, and clear descriptions of your services. Claude can write SEO-optimized content without you needing to understand the technique yourself

- **CTA (Call to Action)** - The button or sentence that tells the reader what to do now. For example: "Book an appointment," "Call now," "Download the guide." Without a CTA, a website visitor reads and leaves. With a good CTA, they become a patient

- **Content Marketing** - An approach where instead of publishing ads ("The best doctor in town!"), you publish educational content that helps people ("5 signs your mole needs checking"). People who receive value from you trust you and choose you as their physician

- **Engagement** - The measure of how much people interact with your social media content: likes, comments, shares, saves. High engagement means your content is interesting and reaches more people. Claude can help write content that encourages engagement

- **Hashtags** - Keywords preceded by #, like #dermatology #skinhealth #sunprotection. They help people searching for specific topics on social media find your content. Claude recommends relevant hashtags for each post

- **Landing Page** - A specific web page designed to get the visitor to do one thing: book an appointment, leave their details, or download a guide. Unlike a regular website page with many links, a landing page focuses on a single action

- **Conversion** - When a website visitor becomes a patient (books an appointment, calls, leaves their details). "Conversion rate" is the percentage of visitors who take the desired action. For example, if 3 out of 100 website visitors book an appointment, the conversion rate is 3%

- **Artifacts** - A special feature in claude.ai that shows the content Claude creates in a visual preview in real time, on the right side of the screen. For example, if you ask Claude to write a post - you can see it formatted and ready before you copy it

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
**Explanation:** LinkedIn is the professional network - suitable for content that positions you as an expert among colleagues and potential patients.

\`\`\`
Create Google My Business posts for a dermatology practice. 4 posts: news, event, offer, update. Include recommended image description for each.
\`\`\`
**Explanation:** Google My Business is the profile that appears when someone searches for your clinic on Google. Posts there improve your visibility in search.

\`\`\`
Write a polite and ethical template for requesting a review from a satisfied patient. Include an explanation of why reviews matter, and a direct link to Google. Maintain ethics - no pressure.
\`\`\`
**Explanation:** Positive Google reviews are among the most powerful marketing tools. A polite request after successful treatment is legitimate and ethical.

\`\`\`
Create an FAQ page for a dermatology clinic website. Include 15 common questions about: appointments, insurance, treatment preparation, recovery times, payment. Write in accessible language.
\`\`\`
**Explanation:** A good FAQ page reduces phone calls to the front desk, improves SEO, and provides immediate answers to patients.

\`\`\`
Design content for a waiting room poster about sun protection. Include: 5 main tips, simple graphics, key message. In English, sized for A3 printing.
\`\`\`
**Explanation:** Educational materials in the waiting room are "quiet" marketing - they educate patients and strengthen your branding.

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

- **Principle 1: Education Before Marketing** - Every piece of content should teach the reader something new. If the patient doesn't come away smarter after reading - the content isn't good enough. Education-based marketing builds long-term trust

- **Principle 2: Medical Accuracy** - Every claim in marketing content must be medically sound. Ask Claude to include references when writing content with medical claims. Remember: Claude can make mistakes - always verify medical information

- **Principle 3: Transparency** - Be transparent about treatments, results, and limitations. Don't promise "complete cure" or "guaranteed results." Patients appreciate honesty

- **Principle 4: Privacy** - Never use patient photos or stories without written, explicit consent. Even if the patient agreed verbally - written consent is required

- **Principle 5: Professional Ethics** - Follow your medical association's advertising guidelines. Avoid comparisons with other physicians, guaranteeing outcomes, or aggressive marketing

- **Principle 6: Real Value** - Every piece of content you publish should genuinely help people. Ask yourself: "Would I want my patients to read this?" If yes - publish it

[DermUnbound Research](https://kaplanclinic.co.il/en/derm-ai)

## Creative Uses

- **Brand Voice Document** - Create a document defining your clinic's tone, style, and values. Save it in a Claude Project so all generated content stays consistent
- **Competitor Analysis** - Ask Claude to analyze competing clinic websites and find content gaps you can fill
- **Seasonal Content** - Create content series by season: sun protection in summer, dry skin care in winter, allergies in spring
- **Explainer Series** - A 5-slide Instagram carousel: "5 myths about sunscreen" or "What really causes acne"
- **Press Releases** - For new treatments, new equipment, or clinic events
- **Milestone Content** - Clinic anniversary, 1000th patient, year of operation
- **Referral Program** - Materials encouraging patients to refer friends and family
- **Community Events** - Ideas for open house days, sun protection workshops, school lectures
- **Case Study Templates** - Before/after presentations (with consent) in a professional, ethical format

## Advanced Tips

- **Upload existing content for improvement** - Upload your current website content to Claude and ask for suggestions to improve, update, and optimize for SEO
- **Use Artifacts** - In claude.ai, the Artifacts feature displays content Claude creates in a visual preview in real time on the right side of the screen. This lets you see how the post will look before you copy it
- **Different tones for different platforms** - Ask Claude to write the same message in different tones: formal for LinkedIn, casual for Instagram, informative for the website
- **Medical references** - Ask Claude to include medical references in educational content. This adds credibility and differentiates you from non-professional content
- **A/B Testing** - Ask Claude to create 2-3 versions of a headline or CTA and test which works better. A/B Testing means trying two versions and seeing which brings better results
- **Long-term planning** - Ask Claude to create a content strategy for 3 months ahead, not just a single post
- **Content repurposing** - Ask Claude to turn a long article into 5 short posts, or a video into 3 visual quotes

## Recommended Platform

**What is a "platform"?** - The tool (website or app) through which you work with Claude. Here are the recommendations for marketing:

- **claude.ai with Artifacts** - The best platform for creating marketing content. **Artifacts** is a unique feature: when Claude creates content, it's displayed in a separate visual window on the right side of the screen. You can see the post/document formatted in real time, request changes, and copy the final version
- **Claude Projects** - "Projects" is a feature that lets you save permanent instructions. Save your brand voice document, clinic information, and writing style - and Claude will always know your style without you having to explain it again
- **Claude Mobile** - The Claude app on your phone. Perfect for writing a quick caption for a photo you took, or a post idea that came to you on the go

## 🔒 Privacy & Security

- **Never use patient photos** without written, explicit consent - not even "anonymous" photos that could be identified
- **Don't promise treatment results** - It's unethical and often illegal. Write "Results vary from patient to patient"
- **Follow your medical association's advertising guidelines** - Medical associations publish clear rules about medical advertising
- **Don't share patient testimonials** without explicit written consent
- **Verify every medical claim** in marketing materials - Claude can make mistakes, and you are responsible for accuracy
- **Transparency about AI** - Consider noting when content is AI-assisted, in line with evolving norms in the field`,
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

זהו הנושא **הקריטי ביותר** בשימוש ב-AI ברפואה. כל רופא שמשתמש ב-Claude **חייב** להבין את העקרונות בדף זה לפני שהוא מתחיל. פרטיות המטופל היא לא רק חובה חוקית - היא חובה אתית שעומדת בבסיס הרפואה.

דף זה מהווה מדריך מלא לשמירה על פרטיות המטופלים תוך מינוף הכוח של AI. אתם לא צריכים להיות מומחי טכנולוגיה כדי להגן על הפרטיות - אתם רק צריכים לעקוב אחרי העקרונות והצ'קליסט שכאן.

**כלל אצבע פשוט: אם יש ספק - אל תשתפו. תמיד אפשר לשאול את השאלה בלי פרטים מזהים.**

## למה זה חשוב?

### חובה חוקית
- **חוק הגנת הפרטיות (תשמ"א-1981)** - החוק הישראלי אוסר על שימוש במידע רפואי ללא הסכמה. הפרה של החוק עלולה לגרור קנסות כבדים ואף עונשי מאסר
- **HIPAA** - חוק אמריקאי שרלוונטי אם יש לכם מטופלים אמריקאים או אם אתם עובדים עם מוסדות אמריקאיים. הקנסות על הפרת HIPAA מגיעות למיליוני דולרים
- **GDPR** - תקנות אירופיות שרלוונטיות למטופלים אירופיים. דורשות הגנה מחמירה על מידע אישי

### חובה אתית
- שבועת הרופא כוללת הגנה על סודיות המטופל
- האמון בין רופא למטופל מבוסס על סודיות
- פגיעה בפרטיות מהווה הפרה של האתיקה הרפואית

### סיכונים מעשיים
- **דליפת מידע** - אם מידע מזהה נשלח לשירות ענן, הוא עלול להיחשף
- **ביטוח ואחריות** - ביטוח הרשלנות הרפואית עלול לא לכסות הפרות פרטיות הקשורות ל-AI
- **מוניטין** - דליפת פרטי מטופלים יכולה להרוס מוניטין של שנים
- **אמון המטופלים** - מטופלים שמגלים ששיתפתם את המידע שלהם עם AI עלולים לאבד אמון

## עקרונות מרכזיים

- **עמידה בדיני פרטיות** - היכרות עם שלושת החוקים העיקריים: חוק הגנת הפרטיות הישראלי, HIPAA (אם רלוונטי), ו-GDPR (למטופלים אירופיים). אין צורך להיות משפטנים - אבל צריך להכיר את הקווים האדומים

- **אנונימיזציה שיטתית** - לפני כל שימוש ב-Claude עם מידע קליני, עברו על רשימת הבדיקה (צ'קליסט) למטה. אנונימיזציה היא לא "אופציה" - היא חובה

- **עיקרון המינימום ההכרחי (Minimum Necessary)** - שתפו רק את המידע שנחוץ לשאלה שלכם. אם אתם שואלים על אינטראקציה בין תרופות - אין צורך בגיל, מין, או כל פרט אחר של המטופל

- **מודעות למיקום הנתונים (Data Residency)** - כשאתם מקלידים משהו ב-claude.ai, הנתונים נשלחים לשרתים של Anthropic. חשוב להבין: איפה השרתים? מי יכול לגשת? האם הנתונים נשמרים? (ראו סעיף "Anthropic ופרטיות" למטה)

- **הסכמה מדעת** - בשלב זה אין קונצנזוס בישראל האם יש לספר למטופלים שאתם משתמשים ב-AI. ההמלצה שלנו: היו שקופים כשזה רלוונטי, במיוחד אם ה-AI משפיע ישירות על החלטה טיפולית

- **תיעוד** - תעדו את השימוש ב-AI בהחלטות רפואיות. אם Claude עזר לכם להגיע לאבחנה - רשמו זאת. זה מגן עליכם משפטית ומשפר את השקיפות

## מושגי מפתח

הנה הסבר למונחים שתפגשו בנושא פרטיות ו-AI. כל מונח מוסבר בשפה פשוטה:

- **HIPAA (חוק ניידות ואחריותיות ביטוח בריאות)** - חוק אמריקאי שמגן על מידע בריאותי. למה זה רלוונטי לרופאים ישראלים? כי: (1) אם יש לכם מטופלים אמריקאים, אתם כפופים ל-HIPAA, (2) Anthropic (החברה שמייצרת את Claude) היא חברה אמריקאית, ו-(3) HIPAA הפך לסטנדרט בינלאומי לפרטיות רפואית. HIPAA מגדיר 18 סוגי מזהים שחייבים להסיר (שמות, תאריכים, כתובות, וכו')

- **חוק הגנת הפרטיות (תשמ"א-1981)** - החוק הישראלי שמגן על מידע אישי, כולל מידע רפואי. החוק קובע שמידע רפואי הוא "מידע רגיש" שדורש הגנה מוגברת. העברת מידע רפואי לשירות ענן (כמו Claude) עשויה להיחשב "העברת מידע" לפי החוק. חשוב: החוק דורש **הסכמה** של המטופל לשימוש במידע שלו, אלא אם המידע אנונימי לחלוטין

- **PHI (מידע בריאותי מוגן - Protected Health Information)** - כל נתון שעונה על שני תנאים: (1) הוא יכול לזהות אדם ספציפי, ו-(2) הוא קשור למצב הבריאותי שלו. למשל: "יוסי כהן עם פסוריאזיס" זה PHI. "גבר בן 50 עם פסוריאזיס" זה כבר לא PHI (כי אי אפשר לזהות מי זה)

- **אנונימיזציה לעומת פסאודונימיזציה** - **אנונימיזציה** היא הסרה מוחלטת של כל פרט מזהה כך שאף אחד לא יכול לקשר את המידע לאדם ספציפי. **פסאודונימיזציה** היא החלפת פרטים מזהים בשמות/מספרים בדויים (למשל: "מטופל א'" במקום "יוסי כהן"). ההבדל: בפסאודונימיזציה, מי שמחזיק את "מפתח" ההתאמה יכול לזהות את המטופל. **לשימוש עם Claude - תמיד העדיפו אנונימיזציה מלאה**

- **DPA (הסכם עיבוד נתונים - Data Processing Agreement)** - הסכם משפטי בינכם (או המוסד שלכם) לבין ספק ה-AI שמגדיר: איך הנתונים מעובדים, איפה הם נשמרים, מי אחראי, ומה קורה בדליפה. מוסדות רפואיים גדולים צריכים DPA לפני שמשתמשים ב-Claude

- **הצפנה מקצה לקצה (End-to-End Encryption)** - בהצפנה רגילה, הנתונים מוצפנים בדרך לשרת אבל השרת "רואה" אותם. בהצפנה מקצה לקצה, רק אתם והמקבל יכולים לקרוא את הנתונים - אפילו השרת לא יכול. חשוב לדעת: claude.ai משתמש בהצפנה רגילה (TLS), לא מקצה לקצה - כלומר Anthropic יכולה טכנית לקרוא את מה שאתם שולחים

- **Zero-retention policy (מדיניות אי-שמירה)** - Anthropic מתחייבת שלא לאמן את המודלים שלה על נתוני משתמשים בתשלום (Pro/Team). זה אומר שמה שאתם כותבים לא ישמש ללמד את Claude דברים חדשים. **אבל** - השיחות עצמן נשמרות בחשבון שלכם (כדי שתוכלו לחזור אליהן). בחשבון חינמי - Anthropic עשויה להשתמש בנתונים לאימון

- **MCP (Model Context Protocol)** - פרוטוקול (שיטת תקשורת) שמאפשר ל-Claude לעבוד עם כלים **מקומיים** על המחשב שלכם, בלי שהנתונים נשלחים לענן. למשל: Claude יכול לקרוא קובץ מהמחשב שלכם, לנתח אותו, ולתת תשובה - בלי שהקובץ עוזב את המחשב. זו האפשרות הבטוחה ביותר לנתונים רגישים

## מדריך אנונימיזציה מלא

### מה חייבים להסיר - רשימה מפורטת:

| קטגוריה | דוגמה | מה לעשות |
|---------|--------|----------|
| **שמות** | יוסי כהן | השתמשו בראשי תיבות (י.כ.) או שמות בדויים |
| **מספרי זהות** | ת.ז. 123456789 | **לעולם** אל תכללו - אין שום סיבה |
| **תאריכים** | נולד 15.3.1979 | השתמשו בגיל (בן 47) או טווח (45-50) |
| **טלפון/אימייל** | 054-1234567 | **לעולם** אל תכללו |
| **כתובות** | הרצל 15, תל אביב | השתמשו באזור כללי: "מרכז הארץ" |
| **תמונות** | צילום של הנגע | **לעולם** אל תעלו תמונות מטופלים ל-Claude |
| **מאפיינים ייחודיים** | "הפוליטיקאי הידוע" | היזהרו ממצבים נדירים או תיאורים שמזהים |
| **שמות מוסדות** | "אושפז בשיבא מחלקה X" | השתמשו ב"בית חולים שלישוני" |
| **תאריכי אשפוז** | "אושפז ב-10.2.2026" | "אושפז לאחרונה" |
| **מספרי ביטוח** | מכבי 12345 | **לעולם** אל תכללו |

### דוגמאות מעשיות - לפני ואחרי אנונימיזציה:

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

## פרומפטים לדוגמה - שימוש בטוח

הנה דוגמאות שמראות **איך לשאול נכון** - בלי מידע מזהה:

\`\`\`
גבר בן 55-60, עם נגע פיגמנטי א-סימטרי בגב. קוטר 8 מ"מ, גבולות לא סדירים, שינוי צבע לאחרונה. היסטוריה משפחתית של מלנומה. מה האבחנה המבדלת ומה הבירור המומלץ?
\`\`\`
**למה זה בטוח:** אין שם, ת.ז., תאריכים, או כתובת. הגיל הוא טווח. אי אפשר לזהות את המטופל.

\`\`\`
מה האינטראקציות בין Metformin 1000mg, Lisinopril 10mg, ו-Dupixent (dupilumab) 300mg? האם יש בעיות ידועות?
\`\`\`
**למה זה בטוח:** שאלה על תרופות בלבד - אין בכלל מידע על מטופל ספציפי.

\`\`\`
מה הקווים המנחים העדכניים לטיפול באטופיק דרמטיטיס בינוני-קשה במבוגרים לפי ה-AAD?
\`\`\`
**למה זה בטוח:** שאלה על קווים מנחים - לא דורשת שום מידע על מטופל.

\`\`\`
צור תבנית לסיכום ביקור דרמטולוגי בפורמט SOAP. כלול: שדות לממצאים עוריים, תיאור נגעים, ותכנית מעקב.
\`\`\`
**למה זה בטוח:** בקשה ליצירת תבנית ריקה - אין שום מידע רפואי של מטופל.

\`\`\`
סקור את הספרות האחרונה על יעילות PDT (פוטודינמי תרפי) לטיפול ב-Actinic Keratosis. התמקד במחקרים מ-2023-2026.
\`\`\`
**למה זה בטוח:** שאלה מחקרית כללית - לא קשורה למטופל ספציפי.

\`\`\`
אישה, 40-45, עם היסטוריה של BCC (בזאל סל קרצינומה) שטוח. הנגע חוזר באותו מיקום אחרי כריתה. גודל 1.5 ס"מ, באזור הפנים. מה האפשרויות הטיפוליות ומה הסיכויים לריפוי בכל שיטה?
\`\`\`
**למה זה בטוח:** מספיק מידע קליני לקבל תשובה מועילה, בלי שום פרט מזהה.

## דוגמה מעשית: שימוש בטוח מלא

הנה תהליך שלם - מהרגע שיש לכם מקרה מורכב ועד שאתם משתמשים בתשובת Claude:

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
גבר, 50-55, מרכז הארץ. פסוריאזיס מזה 15 שנה. PASI score 18 לפני טיפול. טופל ב-adalimumab במשך 8 חודשים - תגובה ראשונית טובה (PASI 75 אחרי 3 חודשים) אבל אחר כך אובדן תגובה הדרגתי. PASI נוכחי: 14. Anti-drug antibodies חיוביים. BMI 31. ללא מחלות רקע נוספות. מה האפשרויות הטיפוליות הבאות?
\`\`\`

**שלב 4: שימוש בתשובה**
Claude מספק רשימת אפשרויות: מעבר ל-anti-IL-17, anti-IL-23, או שילוב. אתם:
- קוראים את התשובה ובודקים אותה מול הידע שלכם
- מאמתים את המלצות Claude מול קווים מנחים עדכניים
- משתמשים בזה כ**כלי עזר** - לא כהחלטה סופית

**שלב 5: תיעוד**
ברשומה הרפואית, כותבים: "נשקלו אפשרויות טיפוליות חלופיות כולל anti-IL-17 ו-anti-IL-23. לאחר עיון בספרות ובכלי תמיכה קלינית - ההחלטה: מעבר ל-[תרופה]."

**שלב 6: אל תשמרו את השיחה עם הנתונים**
אם השתמשתם ב-claude.ai - מחקו את השיחה אחרי שסיימתם אם היא כוללת מידע קליני (גם אנונימי, ליתר ביטחון).

## שיטת DermUnbound: פרוטוקול פרטיות

פרוטוקול שיטתי ל-6 שלבים שמבטיח שימוש בטוח:

- **שלב 1: הערכת הצורך** - לפני שאתם פותחים את Claude, שאלו: "האם אני בכלל צריך לשתף מידע קליני?" הרבה שימושים לא דורשים מידע מטופל בכלל (ראו "שימושים שלא דורשים נתוני מטופלים" למטה)

- **שלב 2: אנונימיזציה שיטתית** - אם כן צריך מידע קליני, עברו על הצ'קליסט (רשימת בדיקה) למטה **לפני כל אינטראקציה**. הפכו את זה להרגל - כמו שאתם שוטפים ידיים לפני פרוצדורה

- **שלב 3: בחירת הפלטפורמה הנכונה** - התאימו את רמת הרגישות לפלטפורמה (ראו "פלטפורמות לפי רמת רגישות" למטה). שאלה כללית על תרופות? חשבון חינמי מספיק. מקרה קליני מורכב? חשבון Pro לפחות

- **שלב 4: בדיקה כפולה** - לפני שתלחצו "שלח", קראו שוב את מה שכתבתם. שאלו: "אם מישהו יקרא את זה - האם הוא יכול לזהות את המטופל?" אם כן - הסירו עוד פרטים

- **שלב 5: תיעוד** - רשמו שהשתמשתם ב-AI בתהליך קבלת ההחלטה. זה מגן עליכם משפטית ומשפר שקיפות. לא צריך פירוט מלא - מספיק "נעזרתי בכלי AI לסקירת אפשרויות טיפוליות"

- **שלב 6: סקירה תקופתית** - פעם ברבעון, בדקו את דפוסי השימוש שלכם ב-AI. האם אתם שומרים על הפרוטוקול? האם יש שיחות ישנות שכדאי למחוק? האם המדיניות של Anthropic השתנתה?

[מחקר DermUnbound](https://kaplanclinic.co.il/he/derm-ai)

## Anthropic ופרטיות: מה חשוב לדעת

Anthropic היא החברה שמפתחת את Claude. הנה מה שכל רופא צריך לדעת על מדיניות הנתונים שלהם:

### חשבון חינמי (Free)
- הנתונים שלכם **עשויים לשמש לאימון** מודלים עתידיים של Claude
- "אימון" פירושו ש-Claude לומד מהשיחות שלכם ומשתפר. המידע שכתבתם עלול להשפיע על תשובות ש-Claude נותן לאנשים אחרים
- **לא מתאים לשום מידע קליני** - גם לא אנונימי
- מתאים לשאלות כלליות על רפואה, יצירת תבניות, למידה

### חשבון Pro / Team (בתשלום)
- הנתונים שלכם **לא משמשים לאימון** - זו מדיניות מפורשת של Anthropic
- השיחות נשמרות בחשבון שלכם (כדי שתוכלו לחזור אליהן)
- Anthropic עשויה לבדוק שיחות לצורכי בטיחות (safety review), אבל לא לאימון
- **מתאים למידע קליני אנונימי** - אחרי שעברתם אנונימיזציה

### API (ממשק תכנותי)
- שליטה מלאה על הנתונים
- הנתונים לא נשמרים מעבר ל-30 יום (ברירת מחדל)
- אפשרות Zero-retention - הנתונים לא נשמרים כלל
- **מתאים לשימוש מוסדי** עם הסכמי DPA

### איך לבדוק את סוג החשבון שלכם:
1. היכנסו ל-claude.ai
2. לחצו על שם המשתמש שלכם (פינה שמאלית עליונה)
3. Settings -> Plan - שם תראו אם אתם Free, Pro, או Team

### מה קורה כשמוחקים שיחה?
- השיחה נמחקת מהחשבון שלכם
- Anthropic עשויה לשמור עותק לתקופה מוגבלת לצורכי בטיחות
- בחשבון חינמי - אם הנתונים כבר שימשו לאימון, המחיקה לא "מוחקת" את ההשפעה

## חוק הגנת הפרטיות הישראלי - פירוט

### מה אומר החוק על מידע רפואי?
- מידע רפואי מוגדר כ**"מידע רגיש"** - הרמה הגבוהה ביותר של הגנה
- אסור לעשות שימוש במידע רגיש ללא **הסכמת** בעל המידע
- הסכמה חייבת להיות **מדעת** - המטופל צריך להבין למה המידע ישמש

### דרישות עיבוד נתונים
- מי שמחזיק "מאגר מידע" (כמו רשומות רפואיות) חייב לרשום אותו אצל רשם מאגרי המידע
- חובת אבטחה - יש לנקוט אמצעי אבטחה סבירים
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

**כלל אצבע:** אם אתם מקלידים משהו שקשור למטופל ספציפי (גם אנונימי) - השתמשו לפחות בחשבון Pro.

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

**אם עניתם "כן" על כל הסעיפים - בטוח לשלוח.**

## שימושים יצירתיים שלא דורשים נתוני מטופלים

חשוב לזכור: הרבה מהשימושים החזקים ביותר של Claude ברפואה **לא דורשים בכלל** מידע על מטופלים ספציפיים:

- **שאלות ידע רפואי כללי** - "מה מנגנון הפעולה של dupilumab?" - שאלה רפואית כללית, אין צורך בפרטי מטופל
- **סקירת קווים מנחים** - "מה הקווים המנחים של AAD לטיפול באקנה?" - מידע ציבורי
- **בדיקת אינטראקציות תרופות** - "האם יש אינטראקציה בין Methotrexate ו-Trimethoprim?" - שאלה על תרופות, לא על מטופל
- **יצירת תבניות וטפסים** - "צור טופס הסכמה מדעת להסרת שומה בלייזר" - תבנית ריקה
- **כתיבת חומרי הסבר** - "כתוב דף הסבר למטופל על מה לצפות אחרי ביופסיית עור" - חומר כללי
- **ניהול מרפאה** - "צור צ'קליסט לפתיחת מרפאת עור בבוקר" - אין מידע רפואי
- **מחקר וסקירת ספרות** - "סקור מחקרים אחרונים על AI בדרמטולוגיה" - מידע אקדמי
- **השתלמות מקצועית** - "הכן לי סיכום של הנושאים החמים בדרמטולוגיה 2026" - למידה כללית
- **שיווק ותוכן** - "כתוב פוסט אינסטגרם על הגנה מהשמש" - תוכן חינוכי כללי
- **תרגום מונחים** - "מה המונח העברי ל-acanthosis nigricans?" - שאלה לשונית

## טיפים מתקדמים

- **צרו פרויקט Claude עם הנחיות פרטיות** - ב-claude.ai, צרו Project (פרויקט) ושימו בהנחיות שלו: "לעולם אל תבקש ממני פרטים מזהים של מטופלים. אם אני שולח מידע שנראה מזהה - הזהר אותי." כך Claude עצמו יזכיר לכם

- **צרו תבניות אנונימיזציה** - יצרו טופס סטנדרטי שאתם ממלאים לפני כל שאלה קלינית. שמרו אותו על שולחן העבודה: "גיל: ___ | מין: ___ | אזור: ___ | תלונה עיקרית: ___ | רקע: ___"

- **השתמשו ב-MCP לנתונים רגישים** - אם יש לכם צורך לנתח נתונים קליניים (למשל מחקר) - בקשו מאיש ה-IT להתקין Claude Code עם MCP. הנתונים לא יעזבו את המחשב

- **עקבו אחרי עדכוני Anthropic** - מדיניות הפרטיות של Anthropic עשויה להשתנות. בדקו אחת לרבעון: https://www.anthropic.com/privacy

- **הדריכו את הצוות** - אם אתם עובדים במרפאה עם מספר רופאים או צוות - ודאו שכולם מכירים את עקרונות הפרטיות. צרו נוהל עבודה (SOP) עם Claude:
\`\`\`
צור נוהל עבודה (SOP) לשימוש ב-AI במרפאה רפואית. כלול: כללי פרטיות, רשימת בדיקה, דוגמאות לשימוש נכון ולא נכון, ומי אחראי.
\`\`\`

- **בדקו את השיחות שלכם** - פעם בחודש, עברו על השיחות שלכם עם Claude ומחקו שיחות שכוללות מידע קליני (גם אנונימי). אין סיבה לשמור אותן

## פלטפורמה מומלצת

- **Desktop App (עם MCP מקומי)** - לנתונים רגישים יותר. MCP (Model Context Protocol) הוא פרוטוקול שמאפשר ל-Claude לעבוד עם כלים מקומיים על המחשב שלכם, בלי לשלוח נתונים לענן. זו האפשרות הבטוחה ביותר
- **claude.ai (חשבון Pro/Team)** - לשימוש יומיומי עם מידע אנונימי. ודאו שאתם בחשבון בתשלום
- **API עם הסכמי עיבוד נתונים** - לשימוש מוסדי. ה-API מאפשר שליטה מלאה על איפה ואיך הנתונים מעובדים

## 🔒 הערה בנושא פרטיות

> **זהו הנושא החשוב ביותר בשימוש ב-AI ברפואה.** פרטיות המטופל היא אחריות הרופא - תמיד. אין טכנולוגיה שפוטרת אתכם מאחריות זו. אם יש ספק - אל תשתפו. תמיד אפשר לשאול שאלה כללית ולקבל תשובה מועילה בלי לסכן אף מטופל.`,
      en: `## Introduction

This is the **most critical topic** when using AI in medicine. Every physician using Claude **must** understand the principles on this page before getting started. Patient privacy is not just a legal obligation - it's an ethical duty at the foundation of medicine.

This page serves as a complete guide to maintaining patient privacy while leveraging the power of AI. You don't need to be a technology expert to protect privacy - you just need to follow the principles and checklist outlined here.

**Simple rule of thumb: When in doubt - don't share. You can always ask the question without identifying details.**

## Why Does This Matter?

### Legal Obligations
- **Israeli Privacy Protection Law (1981)** - Israeli law prohibits the use of medical information without consent. Violations can result in heavy fines and even imprisonment
- **HIPAA** - A US law relevant if you have American patients or work with American institutions. HIPAA fines can reach millions of dollars
- **GDPR** - European regulations relevant for European patients. Require strict protection of personal information

### Ethical Obligations
- The physician's oath includes protecting patient confidentiality
- Trust between doctor and patient is built on confidentiality
- Privacy breaches constitute a violation of medical ethics

### Practical Risks
- **Data leaks** - If identifying information is sent to a cloud service, it could be exposed
- **Insurance and liability** - Malpractice insurance may not cover AI-related privacy breaches
- **Reputation** - Patient data leaks can destroy years of built reputation
- **Patient trust** - Patients who discover you shared their information with AI may lose trust

## Core Principles

- **Privacy law compliance** - Familiarity with the three main laws: Israeli Privacy Protection Law, HIPAA (if relevant), and GDPR (for European patients). You don't need to be a lawyer - but you need to know the red lines

- **Systematic anonymization** - Before every use of Claude with clinical information, go through the checklist below. Anonymization is not "optional" - it's mandatory

- **Minimum Necessary Principle** - Share only the information needed for your query. If you're asking about a drug interaction - there's no need for the patient's age, gender, or any other detail

- **Data residency awareness** - When you type something in claude.ai, the data is sent to Anthropic's servers. It's important to understand: Where are the servers? Who can access them? Is the data saved? (See "Anthropic and Privacy" section below)

- **Informed consent** - Currently there's no consensus in Israel on whether patients need to be told about AI use. Our recommendation: be transparent when relevant, especially if AI directly influences a treatment decision

- **Documentation** - Document AI use in medical decisions. If Claude helped you reach a diagnosis - record it. This protects you legally and improves transparency

## Key Concepts

Here's an explanation of terms you'll encounter regarding privacy and AI. Each term is explained in plain language:

- **HIPAA (Health Insurance Portability and Accountability Act)** - A US law that protects health information. Why is this relevant to Israeli physicians? Because: (1) if you have American patients, you're subject to HIPAA, (2) Anthropic (the company that makes Claude) is an American company, and (3) HIPAA has become an international standard for medical privacy. HIPAA defines 18 types of identifiers that must be removed (names, dates, addresses, etc.)

- **Israeli Privacy Protection Law (1981)** - The Israeli law that protects personal information, including medical data. The law states that medical information is "sensitive information" requiring enhanced protection. Transferring medical data to a cloud service (like Claude) may be considered "data transfer" under the law. Important: the law requires the patient's **consent** for use of their data, unless the data is completely anonymous

- **PHI (Protected Health Information)** - Any data that meets two conditions: (1) it can identify a specific person, AND (2) it relates to their health status. For example: "John Smith with psoriasis" is PHI. "50-year-old male with psoriasis" is not PHI (because you can't identify who it is)

- **Anonymization vs. Pseudonymization** - **Anonymization** is the complete removal of all identifying details so that nobody can link the information to a specific person. **Pseudonymization** is replacing identifying details with fake names/numbers (e.g., "Patient A" instead of "John Smith"). The difference: with pseudonymization, whoever holds the "key" can identify the patient. **For use with Claude - always prefer full anonymization**

- **DPA (Data Processing Agreement)** - A legal agreement between you (or your institution) and the AI provider that defines: how data is processed, where it's stored, who's responsible, and what happens in a breach. Large medical institutions need a DPA before using Claude

- **End-to-End Encryption** - In regular encryption, data is encrypted in transit but the server "sees" it. In end-to-end encryption, only you and the recipient can read the data - even the server cannot. Important to know: claude.ai uses regular encryption (TLS), not end-to-end - meaning Anthropic can technically read what you send

- **Zero-retention policy** - Anthropic commits to not training its models on paid user data (Pro/Team). This means what you write won't be used to teach Claude new things. **However** - conversations themselves are saved in your account (so you can return to them). On free accounts - Anthropic may use data for training

- **MCP (Model Context Protocol)** - A protocol (communication method) that allows Claude to work with **local** tools on your computer, without data being sent to the cloud. For example: Claude can read a file from your computer, analyze it, and give an answer - without the file leaving your computer. This is the safest option for sensitive data

## Complete Anonymization Guide

### What Must Be Removed - Detailed List:

| Category | Example | What to Do |
|----------|---------|------------|
| **Names** | John Smith | Use initials (J.S.) or pseudonyms |
| **ID Numbers** | ID 123456789 | **Never** include - there's no reason |
| **Dates** | Born 03/15/1979 | Use age (47) or range (45-50) |
| **Phone/Email** | 555-123-4567 | **Never** include |
| **Addresses** | 15 Main St, New York | Use general area: "Northeast US" |
| **Photos** | Photo of the lesion | **Never** upload patient photos to Claude |
| **Unique Characteristics** | "the famous politician" | Be careful with rare conditions or identifying descriptions |
| **Institution Names** | "admitted to X Hospital, Ward Y" | Use "tertiary hospital" |
| **Admission Dates** | "admitted 02/10/2026" | "recently admitted" |
| **Insurance Numbers** | Plan #12345 | **Never** include |

### Practical Examples - Before and After Anonymization:

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

## Example Prompts - Safe Usage

Here are examples showing **how to ask correctly** - without identifying information:

\`\`\`
Male, 55-60, with an asymmetric pigmented lesion on the back. 8mm diameter, irregular borders, recent color change. Family history of melanoma. What is the differential diagnosis and recommended workup?
\`\`\`
**Why this is safe:** No name, ID, dates, or address. Age is a range. The patient cannot be identified.

\`\`\`
What are the interactions between Metformin 1000mg, Lisinopril 10mg, and Dupixent (dupilumab) 300mg? Are there known issues?
\`\`\`
**Why this is safe:** A question about drugs only - no patient-specific information at all.

\`\`\`
What are the current guidelines for treating moderate-to-severe atopic dermatitis in adults according to the AAD?
\`\`\`
**Why this is safe:** A question about guidelines - requires no patient information.

\`\`\`
Create a template for a dermatology visit summary in SOAP format. Include: fields for skin findings, lesion descriptions, and follow-up plan.
\`\`\`
**Why this is safe:** A request to create an empty template - no patient medical information.

\`\`\`
Review the recent literature on the efficacy of PDT (photodynamic therapy) for treating Actinic Keratosis. Focus on studies from 2023-2026.
\`\`\`
**Why this is safe:** A general research question - not related to a specific patient.

\`\`\`
Female, 40-45, with history of flat BCC (basal cell carcinoma). Lesion recurred at the same location after excision. Size 1.5cm, facial area. What are the treatment options and cure rates for each method?
\`\`\`
**Why this is safe:** Enough clinical information for a useful answer, with no identifying details.

## Practical Example: Complete Safe Usage

Here's a complete process - from having a complex case to using Claude's response:

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
Male, 50-55, suburban area. Psoriasis for 15 years. PASI score 18 before treatment. Treated with adalimumab for 8 months - good initial response (PASI 75 after 3 months) but then gradual loss of response. Current PASI: 14. Anti-drug antibodies positive. BMI 31. No other comorbidities. What are the next treatment options?
\`\`\`

**Step 4: Use the Response**
Claude provides a list of options: switching to anti-IL-17, anti-IL-23, or combination therapy. You:
- Read the response and check it against your own knowledge
- Verify Claude's recommendations against current guidelines
- Use it as a **support tool** - not a final decision

**Step 5: Documentation**
In the medical record, write: "Alternative treatment options were considered including anti-IL-17 and anti-IL-23. After reviewing the literature and clinical support tools - decision: switch to [medication]."

**Step 6: Don't Keep the Conversation**
If you used claude.ai - delete the conversation after you're done if it contains clinical information (even anonymized, to be safe).

## DermUnbound Method: Privacy Protocol

A systematic 6-step protocol ensuring safe usage:

- **Step 1: Assess the Need** - Before opening Claude, ask: "Do I actually need to share clinical information?" Many uses don't require patient data at all (see "Uses That Don't Require Patient Data" below)

- **Step 2: Systematic Anonymization** - If clinical information is needed, go through the checklist below **before every interaction**. Make it a habit - like washing your hands before a procedure

- **Step 3: Choose the Right Platform** - Match sensitivity level to platform (see "Platforms by Sensitivity Level" below). General question about medications? A free account is enough. Complex clinical case? Pro account at minimum

- **Step 4: Double-Check** - Before pressing "Send," read what you wrote again. Ask: "If someone reads this - could they identify the patient?" If yes - remove more details

- **Step 5: Documentation** - Record that you used AI in the decision-making process. This protects you legally and improves transparency. No need for full detail - "AI clinical support tool was consulted for treatment options" is sufficient

- **Step 6: Periodic Review** - Once a quarter, review your AI usage patterns. Are you maintaining the protocol? Are there old conversations that should be deleted? Has Anthropic's policy changed?

[DermUnbound Research](https://kaplanclinic.co.il/en/derm-ai)

## Anthropic and Privacy: What You Need to Know

Anthropic is the company that develops Claude. Here's what every physician needs to know about their data policies:

### Free Account
- Your data **may be used for training** future Claude models
- "Training" means Claude learns from your conversations and improves. Information you wrote could influence answers Claude gives to other people
- **Not suitable for any clinical information** - not even anonymized
- Suitable for general medical questions, creating templates, learning

### Pro / Team Account (Paid)
- Your data is **not used for training** - this is Anthropic's explicit policy
- Conversations are saved in your account (so you can return to them)
- Anthropic may review conversations for safety purposes, but not for training
- **Suitable for anonymized clinical information** - after proper anonymization

### API (Application Programming Interface)
- Full control over your data
- Data is not retained beyond 30 days (default)
- Zero-retention option - data is not saved at all
- **Suitable for institutional use** with DPA agreements

### How to Check Your Account Type:
1. Go to claude.ai
2. Click on your username (top left corner)
3. Settings -> Plan - there you'll see if you're Free, Pro, or Team

### What Happens When You Delete a Conversation?
- The conversation is deleted from your account
- Anthropic may retain a copy for a limited period for safety purposes
- On free accounts - if data was already used for training, deletion doesn't "undo" the effect

## Israeli Privacy Protection Law - Details

### What Does the Law Say About Medical Information?
- Medical information is defined as **"sensitive information"** - the highest level of protection
- Use of sensitive information without the owner's **consent** is prohibited
- Consent must be **informed** - the patient needs to understand what the information will be used for

### Data Processing Requirements
- Anyone holding a "database" (like medical records) must register it with the Database Registrar
- Security obligation - reasonable security measures must be taken
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

**Rule of thumb:** If you're typing anything related to a specific patient (even anonymized) - use at least a Pro account.

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

**If you answered "yes" to all items - safe to send.**

## Creative Uses That Don't Require Patient Data

It's important to remember: many of the most powerful medical uses of Claude **don't require any** information about specific patients:

- **General medical knowledge questions** - "What is the mechanism of action of dupilumab?" - a general medical question, no patient details needed
- **Guideline reviews** - "What are the AAD guidelines for treating acne?" - public information
- **Drug interaction checking** - "Is there an interaction between Methotrexate and Trimethoprim?" - a question about drugs, not about a patient
- **Creating templates and forms** - "Create an informed consent form for laser mole removal" - an empty template
- **Writing patient education materials** - "Write a patient information sheet about what to expect after a skin biopsy" - general material
- **Practice management** - "Create a morning opening checklist for a dermatology clinic" - no medical information
- **Research and literature review** - "Review recent studies on AI in dermatology" - academic information
- **Continuing medical education** - "Prepare a summary of hot topics in dermatology 2026" - general learning
- **Marketing and content** - "Write an Instagram post about sun protection" - general educational content
- **Term translation** - "What is the English term for acanthosis nigricans?" - a language question

## Advanced Tips

- **Create a Claude Project with privacy guidelines** - In claude.ai, create a Project and add to its instructions: "Never ask me for patient identifying information. If I send information that appears identifying - warn me." This way Claude itself will remind you

- **Create anonymization templates** - Make a standard form you fill out before every clinical question. Keep it on your desktop: "Age: ___ | Sex: ___ | Region: ___ | Chief complaint: ___ | Background: ___"

- **Use MCP for sensitive data** - If you need to analyze clinical data (e.g., research) - ask your IT person to set up Claude Code with MCP. The data won't leave your computer

- **Follow Anthropic's updates** - Anthropic's privacy policy may change. Check quarterly: https://www.anthropic.com/privacy

- **Train your staff** - If you work in a clinic with multiple physicians or staff - make sure everyone knows the privacy principles. Create an SOP (Standard Operating Procedure) with Claude:
\`\`\`
Create an SOP for AI use in a medical clinic. Include: privacy rules, checklist, examples of correct and incorrect use, and who is responsible.
\`\`\`

- **Audit your conversations** - Once a month, review your Claude conversations and delete any that contain clinical information (even anonymized). There's no reason to keep them

## Recommended Platform

- **Desktop App (with local MCP)** - For more sensitive data. MCP (Model Context Protocol) is a protocol that lets Claude work with local tools on your computer, without sending data to the cloud. This is the safest option
- **claude.ai (Pro/Team account)** - For daily use with anonymized information. Make sure you're on a paid account
- **API with data processing agreements** - For institutional use. The API gives you full control over where and how data is processed

## 🔒 Privacy Note

> **This is the most important topic when using AI in medicine.** Patient privacy is always the physician's responsibility. No technology exempts you from this responsibility. When in doubt - don't share. You can always ask a general question and get a useful answer without putting any patient at risk.`,
    },
  },
];

export function getMedicalUseCaseBySlug(slug: string): MedicalUseCase | undefined {
  return medicalUseCases.find(uc => uc.id === slug);
}
