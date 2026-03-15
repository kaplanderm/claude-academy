export interface Lesson {
  id: string;
  title: { he: string; en: string };
  description: { he: string; en: string };
  duration: number; // minutes
  videoId?: string; // YouTube video ID
  content: { he: string; en: string };
}

export interface Course {
  id: string;
  title: { he: string; en: string };
  description: { he: string; en: string };
  icon: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // total minutes
  lessonsCount: number;
  color: string;
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    id: 'intro-to-claude',
    title: { he: 'מבוא ל-Claude AI', en: 'Introduction to Claude AI' },
    description: {
      he: 'הכירו את Claude - מה הוא, איך הוא עובד, ומה הופך אותו לייחודי בעולם ה-AI',
      en: 'Meet Claude - what it is, how it works, and what makes it unique in the AI world'
    },
    icon: '🎯',
    level: 'beginner',
    duration: 90,
    lessonsCount: 6,
    color: '#27AE60',
    lessons: [
      {
        id: 'what-is-claude',
        title: { he: 'מה זה Claude?', en: 'What is Claude?' },
        description: { he: 'סקירה כללית של Claude ושל Anthropic', en: 'General overview of Claude and Anthropic' },
        duration: 15,
        videoId: '',
        content: {
          he: `# מה זה Claude?

Claude הוא עוזר AI שפותח על ידי **Anthropic**, חברה שהוקמה בשנת 2021 על ידי Dario Amodei ו-Daniela Amodei, שניהם לשעבר מ-OpenAI.

## הפילוסופיה של Anthropic

Anthropic מתמקדת בפיתוח AI **בטוח ואמין**. הגישה שלהם מבוססת על:
- **Constitutional AI** - מערכת של עקרונות שמנחים את ההתנהגות של Claude
- **שקיפות** - Claude מודה כשהוא לא יודע משהו
- **הימנעות מנזק** - עיצוב שמונע שימוש לרעה

## דגמי Claude

| דגם | תיאור | מתאים ל |
|------|--------|---------|
| **Claude Opus 4.6** | הדגם החזק ביותר | משימות מורכבות, קידוד, ניתוח עמוק |
| **Claude Sonnet 4.6** | איזון בין מהירות ויכולת | שימוש יומיומי, עבודה שוטפת |
| **Claude Haiku 4.5** | מהיר וחסכוני | משימות פשוטות, צ'אט מהיר |

## יכולות מרכזיות

1. **שיחה טבעית** - Claude מבין הקשר ומנהל שיחות ארוכות
2. **כתיבת קוד** - תמיכה בכל שפות התכנות הנפוצות
3. **ניתוח מסמכים** - יכולת לקרוא ולנתח PDF, תמונות, וטקסטים ארוכים
4. **ראייה ממוחשבת** - הבנה ופירוש של תמונות
5. **יצירת תוכן** - כתיבה יצירתית, סיכומים, תרגומים
6. **חשיבה מורחבת** - יכולת "לחשוב" לפני מתן תשובה למשימות מורכבות`,
          en: `# What is Claude?

Claude is an AI assistant developed by **Anthropic**, a company founded in 2021 by Dario Amodei and Daniela Amodei, both formerly from OpenAI.

## Anthropic's Philosophy

Anthropic focuses on developing **safe and reliable AI**. Their approach is based on:
- **Constitutional AI** - a system of principles that guide Claude's behavior
- **Transparency** - Claude admits when it doesn't know something
- **Harm avoidance** - design that prevents misuse

## Claude Models

| Model | Description | Best For |
|-------|-------------|----------|
| **Claude Opus 4.6** | The most powerful model | Complex tasks, coding, deep analysis |
| **Claude Sonnet 4.6** | Balance of speed and capability | Everyday use, routine work |
| **Claude Haiku 4.5** | Fast and economical | Simple tasks, quick chat |

## Key Capabilities

1. **Natural conversation** - Claude understands context and manages long conversations
2. **Code writing** - Support for all popular programming languages
3. **Document analysis** - Ability to read and analyze PDFs, images, and long texts
4. **Computer vision** - Understanding and interpreting images
5. **Content creation** - Creative writing, summaries, translations
6. **Extended thinking** - Ability to "think" before answering complex tasks`
        }
      },
      {
        id: 'claude-vs-others',
        title: { he: 'Claude מול מתחרים', en: 'Claude vs Competitors' },
        description: { he: 'השוואה בין Claude לבין ChatGPT, Gemini ועוד', en: 'Comparison between Claude and ChatGPT, Gemini, and more' },
        duration: 15,
        content: {
          he: `# Claude מול המתחרים

## טבלת השוואה

| תכונה | Claude | ChatGPT | Gemini | Copilot |
|--------|--------|---------|--------|---------|
| **חלון הקשר** | 200K tokens | 128K tokens | 1M tokens | 128K tokens |
| **כתיבת קוד** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **בטיחות** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **יצירתיות** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **CLI/קוד** | Claude Code ⭐⭐⭐⭐⭐ | — | — | GitHub Copilot |
| **API** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

## למה לבחור ב-Claude?

### 1. אמינות ודייקנות
Claude נוטה פחות ל"הזיות" (hallucinations) ומודה כשהוא לא בטוח.

### 2. Claude Code
הכלי היחיד מסוגו - CLI מלא לעבודה עם קוד ישירות מהטרמינל.

### 3. חלון הקשר הארוך
200,000 tokens מאפשרים עבודה עם מסמכים ארוכים ופרויקטים מורכבים.

### 4. MCP - Model Context Protocol
פרוטוקול פתוח לחיבור Claude לכלים חיצוניים - ייחודי ל-Anthropic.

### 5. בטיחות מובנית
Constitutional AI מבטיח שהתשובות יהיו מועילות, הגונות ובטוחות.`,
          en: `# Claude vs Competitors

## Comparison Table

| Feature | Claude | ChatGPT | Gemini | Copilot |
|---------|--------|---------|--------|---------|
| **Context Window** | 200K tokens | 128K tokens | 1M tokens | 128K tokens |
| **Code Writing** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Safety** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Creativity** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **CLI/Code** | Claude Code ⭐⭐⭐⭐⭐ | — | — | GitHub Copilot |
| **API** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

## Why Choose Claude?

### 1. Reliability and Accuracy
Claude is less prone to "hallucinations" and admits when it's unsure.

### 2. Claude Code
The only tool of its kind - a full CLI for working with code directly from the terminal.

### 3. Long Context Window
200,000 tokens allow working with long documents and complex projects.

### 4. MCP - Model Context Protocol
An open protocol for connecting Claude to external tools - unique to Anthropic.

### 5. Built-in Safety
Constitutional AI ensures responses are helpful, honest, and safe.`
        }
      },
      {
        id: 'pricing-plans',
        title: { he: 'תוכניות ומחירים', en: 'Pricing & Plans' },
        description: { he: 'סקירת כל התוכניות: חינמי, Pro, Team, Enterprise', en: 'Overview of all plans: Free, Pro, Team, Enterprise' },
        duration: 10,
        content: {
          he: `# תוכניות ומחירים

## סקירת התוכניות

### 🆓 תוכנית חינמית (Free)
- גישה ל-Claude Sonnet
- מספר שיחות מוגבל ליום
- חלון הקשר מלא
- **מחיר:** חינם

### ⭐ Pro ($20/חודש)
- גישה לכל הדגמים כולל Opus
- שימוש מורחב (פי 5 מחינמי)
- Extended Thinking
- Claude Code (שימוש מוגבל)
- Projects ו-Artifacts
- **מחיר:** $20/חודש

### 👥 Team ($25/משתמש/חודש)
- כל היתרונות של Pro
- ניהול צוות מרכזי
- שיתוף Projects בין חברי צוות
- Admin Console
- **מחיר:** $25/משתמש/חודש (מינימום 2)

### 🏢 Enterprise
- כל היתרונות של Team
- SSO ו-SCIM
- Audit Logs
- SLA מותאם
- **מחיר:** לפי הצעת מחיר

## Claude Code - תמחור נפרד
Claude Code משתמש ב-API credits:
- **כלול ב-Pro:** שימוש מוגבל
- **Max 5x ($100/חודש):** שימוש מורחב ב-Claude Code
- **Max 20x ($200/חודש):** שימוש כמעט ללא הגבלה
- **API:** תשלום לפי שימוש בלבד`,
          en: `# Pricing & Plans

## Plan Overview

### 🆓 Free Plan
- Access to Claude Sonnet
- Limited daily conversations
- Full context window
- **Price:** Free

### ⭐ Pro ($20/month)
- Access to all models including Opus
- Extended usage (5x free)
- Extended Thinking
- Claude Code (limited usage)
- Projects and Artifacts
- **Price:** $20/month

### 👥 Team ($25/user/month)
- All Pro benefits
- Central team management
- Share Projects between team members
- Admin Console
- **Price:** $25/user/month (minimum 2)

### 🏢 Enterprise
- All Team benefits
- SSO and SCIM
- Audit Logs
- Custom SLA
- **Price:** Custom pricing

## Claude Code - Separate Pricing
Claude Code uses API credits:
- **Included in Pro:** Limited usage
- **Max 5x ($100/month):** Extended Claude Code usage
- **Max 20x ($200/month):** Nearly unlimited usage
- **API:** Pay-per-use only`
        }
      },
      {
        id: 'first-conversation',
        title: { he: 'השיחה הראשונה שלכם', en: 'Your First Conversation' },
        description: { he: 'תרגול מעשי - איך לדבר עם Claude בצורה אפקטיבית', en: 'Hands-on practice - how to talk to Claude effectively' },
        duration: 20,
        content: {
          he: `# השיחה הראשונה שלכם עם Claude

## כללי בסיס לשיחה אפקטיבית

### 1. היו ספציפיים
❌ "כתוב לי משהו"
✅ "כתוב מייל מקצועי לספק שמבקש הארכת מועד תשלום ב-30 יום, בטון נימוסי אך עניני"

### 2. תנו הקשר
❌ "תקן את הקוד"
✅ "יש לי פונקציית React שמציגה רשימת משתמשים. היא מרנדרת מחדש בכל שינוי. עזור לי לייעל אותה עם useMemo"

### 3. הגדירו פורמט
❌ "ספר לי על Python"
✅ "צור טבלה שמשווה בין Python ל-JavaScript: תחביר, ביצועים, שימושים נפוצים, ועקומת למידה"

### 4. בקשו שלבים
❌ "בנה לי אתר"
✅ "אני רוצה לבנות אתר תיק עבודות. בוא נתחיל מתכנון המבנה - אילו עמודים צריך? מה ה-stack המומלץ?"

## תבניות שימושיות

### תבנית לניתוח
\`\`\`
אני צריך לנתח [נושא]. אנא:
1. סכם את הנקודות העיקריות
2. זהה יתרונות וחסרונות
3. המלץ על צעדים הבאים
\`\`\`

### תבנית לכתיבת קוד
\`\`\`
צור [סוג] ב-[שפה] ש:
- עושה [פעולה 1]
- מטפל ב-[מקרה קצה]
- כולל הערות בעברית
\`\`\`

### תבנית לבדיקת קוד
\`\`\`
בדוק את הקוד הבא:
[הדביקו קוד]
חפש: באגים, בעיות אבטחה, ואפשרויות לשיפור ביצועים
\`\`\``,
          en: `# Your First Conversation with Claude

## Basic Rules for Effective Conversation

### 1. Be Specific
❌ "Write me something"
✅ "Write a professional email to a supplier requesting a 30-day payment extension, in a polite but business-like tone"

### 2. Give Context
❌ "Fix the code"
✅ "I have a React function that displays a user list. It re-renders on every change. Help me optimize it with useMemo"

### 3. Define Format
❌ "Tell me about Python"
✅ "Create a table comparing Python and JavaScript: syntax, performance, common uses, and learning curve"

### 4. Ask for Steps
❌ "Build me a website"
✅ "I want to build a portfolio website. Let's start by planning the structure - what pages do I need? What's the recommended stack?"

## Useful Templates

### Analysis Template
\`\`\`
I need to analyze [topic]. Please:
1. Summarize the key points
2. Identify pros and cons
3. Recommend next steps
\`\`\`

### Code Writing Template
\`\`\`
Create a [type] in [language] that:
- Does [action 1]
- Handles [edge case]
- Includes comments
\`\`\`

### Code Review Template
\`\`\`
Review the following code:
[paste code]
Look for: bugs, security issues, and performance improvements
\`\`\``
        }
      },
      {
        id: 'prompt-engineering',
        title: { he: 'הנדסת פרומפטים', en: 'Prompt Engineering' },
        description: { he: 'טכניקות מתקדמות לכתיבת הנחיות מדויקות', en: 'Advanced techniques for writing precise prompts' },
        duration: 20,
        content: {
          he: `# הנדסת פרומפטים ל-Claude

## טכניקות מרכזיות

### 1. Role Prompting - הגדרת תפקיד
\`\`\`
אתה מומחה אבטחת מידע עם 15 שנות ניסיון.
בדוק את הקוד הבא וזהה פרצות אבטחה אפשריות.
\`\`\`

### 2. Chain of Thought - שרשרת חשיבה
\`\`\`
חשוב צעד אחר צעד:
1. קרא את הדרישות
2. זהה את הבעיה המרכזית
3. הצע 3 פתרונות אפשריים
4. בחר את הטוב ביותר והסבר למה
\`\`\`

### 3. Few-Shot Learning - דוגמאות
\`\`\`
תרגם שמות מוצרים לעברית בסגנון הזה:
- "Wireless Earbuds" → "אוזניות אלחוטיות"
- "Smart Watch" → "שעון חכם"
עכשיו תרגם: "Noise Cancelling Headphones"
\`\`\`

### 4. System Prompts - הנחיות מערכת
בממשק ה-API או ב-Projects, ניתן להגדיר הנחיות מערכת:
\`\`\`
[System] אתה עוזר כתיבה בעברית.
כתוב תמיד בלשון רבים.
השתמש בשפה ברורה ופשוטה.
הימנע ממילים לועזיות כשיש חלופה עברית.
\`\`\`

### 5. Structured Output - פלט מובנה
\`\`\`
נתח את הטקסט הבא והחזר JSON בפורמט:
{
  "sentiment": "positive/negative/neutral",
  "topics": ["נושא1", "נושא2"],
  "summary": "סיכום קצר",
  "confidence": 0.0-1.0
}
\`\`\`

## Extended Thinking - חשיבה מורחבת
Claude יכול "לחשוב" לפני שהוא עונה. זה שימושי במיוחד ל:
- בעיות מתמטיות מורכבות
- ניתוח קוד מורכב
- החלטות עיצוביות
- תכנון ארכיטקטורה`,
          en: `# Prompt Engineering for Claude

## Key Techniques

### 1. Role Prompting
\`\`\`
You are a cybersecurity expert with 15 years of experience.
Review the following code and identify potential security vulnerabilities.
\`\`\`

### 2. Chain of Thought
\`\`\`
Think step by step:
1. Read the requirements
2. Identify the core problem
3. Suggest 3 possible solutions
4. Choose the best one and explain why
\`\`\`

### 3. Few-Shot Learning
\`\`\`
Translate product names in this style:
- "Wireless Earbuds" → "Auriculares inalámbricos"
- "Smart Watch" → "Reloj inteligente"
Now translate: "Noise Cancelling Headphones"
\`\`\`

### 4. System Prompts
In the API or Projects, you can set system prompts:
\`\`\`
[System] You are a writing assistant.
Always write in formal tone.
Use clear and simple language.
Avoid jargon when simpler alternatives exist.
\`\`\`

### 5. Structured Output
\`\`\`
Analyze the following text and return JSON in this format:
{
  "sentiment": "positive/negative/neutral",
  "topics": ["topic1", "topic2"],
  "summary": "brief summary",
  "confidence": 0.0-1.0
}
\`\`\`

## Extended Thinking
Claude can "think" before answering. This is especially useful for:
- Complex mathematical problems
- Complex code analysis
- Design decisions
- Architecture planning`
        }
      },
      {
        id: 'artifacts-projects',
        title: { he: 'Artifacts ו-Projects', en: 'Artifacts & Projects' },
        description: { he: 'שימוש ב-Artifacts ליצירת תוכן ו-Projects לארגון', en: 'Using Artifacts for content creation and Projects for organization' },
        duration: 10,
        content: {
          he: `# Artifacts ו-Projects

## Artifacts - יצירות
Artifacts הם תוצרים שClaude יוצר ומציג בחלון נפרד:

### סוגי Artifacts
- **קוד** - תוכניות שלמות שניתן להריץ
- **HTML** - דפי אינטרנט אינטראקטיביים
- **SVG** - גרפיקה וקטורית
- **Mermaid** - דיאגרמות
- **React** - קומפוננטות React מלאות
- **Markdown** - מסמכים מעוצבים

### טיפים לשימוש ב-Artifacts
1. בקשו "צור artifact" כדי לקבל תוצר בחלון נפרד
2. ניתן לערוך artifacts קיימים
3. ניתן להוריד ולשתף artifacts
4. artifacts של React מורצים בזמן אמת

## Projects - פרויקטים
Projects מאפשרים לארגן שיחות ולהגדיר הקשר:

### יצירת פרויקט
1. לחצו על "New Project"
2. הגדירו שם ותיאור
3. הוסיפו **Custom Instructions** - הנחיות שיחולו על כל שיחה בפרויקט
4. העלו **Knowledge** - מסמכים שClaude יוכל לגשת אליהם

### שימושים מומלצים
- **פרויקט קוד** - העלו את ה-README וקבצי ארכיטקטורה
- **פרויקט כתיבה** - הגדירו סגנון כתיבה ודוגמאות
- **פרויקט מחקר** - העלו מאמרים ומקורות`,
          en: `# Artifacts & Projects

## Artifacts
Artifacts are outputs that Claude creates and displays in a separate window:

### Types of Artifacts
- **Code** - Complete runnable programs
- **HTML** - Interactive web pages
- **SVG** - Vector graphics
- **Mermaid** - Diagrams
- **React** - Full React components
- **Markdown** - Formatted documents

### Tips for Using Artifacts
1. Ask "create an artifact" to get output in a separate window
2. You can edit existing artifacts
3. You can download and share artifacts
4. React artifacts run in real-time

## Projects
Projects allow you to organize conversations and define context:

### Creating a Project
1. Click "New Project"
2. Set a name and description
3. Add **Custom Instructions** - guidelines that apply to every conversation in the project
4. Upload **Knowledge** - documents Claude can access

### Recommended Uses
- **Code project** - Upload README and architecture files
- **Writing project** - Define writing style and examples
- **Research project** - Upload papers and sources`
        }
      }
    ]
  },
  {
    id: 'claude-code-mastery',
    title: { he: 'שליטה ב-Claude Code', en: 'Claude Code Mastery' },
    description: {
      he: 'למדו להשתמש ב-Claude Code - הכלי החזק ביותר למפתחים, ישירות מהטרמינל',
      en: 'Learn to use Claude Code - the most powerful developer tool, directly from the terminal'
    },
    icon: '💻',
    level: 'intermediate',
    duration: 180,
    lessonsCount: 8,
    color: '#E07A2F',
    lessons: [
      {
        id: 'cc-intro',
        title: { he: 'מבוא ל-Claude Code', en: 'Introduction to Claude Code' },
        description: { he: 'מה זה Claude Code ולמה כדאי להשתמש בו', en: 'What is Claude Code and why use it' },
        duration: 15,
        content: {
          he: `# מבוא ל-Claude Code

## מה זה Claude Code?
Claude Code הוא **כלי שורת פקודה (CLI)** שמאפשר לעבוד עם Claude ישירות מהטרמינל. הוא יכול:

- 📁 **לקרוא ולערוך קבצים** בפרויקט שלכם
- 🔍 **לחפש בקוד** עם Grep ו-Glob
- 🖥️ **להריץ פקודות** בטרמינל
- 🌐 **לגשת לאינטרנט** עם WebFetch ו-WebSearch
- 🔗 **להתחבר לשירותים** דרך MCP
- 📋 **לנהל משימות** עם מערכת Todo מובנית
- 🧠 **לזכור הקשר** עם מערכת Memory

## למה Claude Code?

### 1. עובד בסביבה שלכם
אין צורך לעבור חלונות. Claude Code עובד ישירות בטרמינל, עם גישה מלאה לפרויקט.

### 2. הבנת קוד עמוקה
Claude Code מבין את כל מבנה הפרויקט - קבצים, תלויות, היסטוריית git.

### 3. אוטומציה
מ-commit ועד deploy - Claude Code יכול לבצע משימות מורכבות באופן אוטונומי.

### 4. MCP - חיבור לכלים
חיבור לשירותים חיצוניים: GitHub, Jira, Slack, databases ועוד.`,
          en: `# Introduction to Claude Code

## What is Claude Code?
Claude Code is a **command-line interface (CLI) tool** that lets you work with Claude directly from the terminal. It can:

- 📁 **Read and edit files** in your project
- 🔍 **Search code** with Grep and Glob
- 🖥️ **Run commands** in the terminal
- 🌐 **Access the internet** with WebFetch and WebSearch
- 🔗 **Connect to services** through MCP
- 📋 **Manage tasks** with built-in Todo system
- 🧠 **Remember context** with Memory system

## Why Claude Code?

### 1. Works in Your Environment
No need to switch windows. Claude Code works directly in the terminal, with full project access.

### 2. Deep Code Understanding
Claude Code understands your entire project structure - files, dependencies, git history.

### 3. Automation
From commit to deploy - Claude Code can perform complex tasks autonomously.

### 4. MCP - Tool Integration
Connect to external services: GitHub, Jira, Slack, databases, and more.`
        }
      },
      {
        id: 'cc-installation',
        title: { he: 'התקנה והגדרה', en: 'Installation & Setup' },
        description: { he: 'התקנת Claude Code על כל מערכת הפעלה', en: 'Installing Claude Code on any operating system' },
        duration: 20,
        content: {
          he: `# התקנה והגדרה של Claude Code

## דרישות מקדימות
- **Node.js 18+** מותקן
- חשבון **Anthropic** או **Claude Pro/Max**

## התקנה

### macOS / Linux
\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

### Windows
\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`
> 💡 מומלץ להשתמש ב-WSL (Windows Subsystem for Linux) לחוויה מיטבית

## הפעלה ראשונה
\`\`\`bash
# נכנסים לתיקיית הפרויקט
cd my-project

# מפעילים את Claude Code
claude
\`\`\`

## אימות
בהפעלה הראשונה, Claude Code יבקש אימות:
1. **Anthropic API Key** - עבור תשלום per-use
2. **Claude Pro/Max** - אימות דרך הדפדפן

## הגדרות חשובות

### CLAUDE.md
צרו קובץ \`CLAUDE.md\` בשורש הפרויקט:
\`\`\`markdown
# הנחיות לפרויקט

## כללים
- כתוב קוד ב-TypeScript
- השתמש ב-Tailwind CSS
- עקוב אחרי conventions של הפרויקט

## מבנה
- src/components - קומפוננטות
- src/lib - ספריות
- src/app - עמודים
\`\`\`

### מצבי הרשאות
| מצב | תיאור |
|------|--------|
| **Ask** | מבקש אישור לכל פעולה |
| **Auto-edit** | עורך קבצים אוטומטית, מבקש אישור לפקודות |
| **Auto** | מבצע הכל אוטומטית (זהירות!) |`,
          en: `# Installing & Setting Up Claude Code

## Prerequisites
- **Node.js 18+** installed
- **Anthropic** or **Claude Pro/Max** account

## Installation

### macOS / Linux
\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

### Windows
\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`
> 💡 Recommended to use WSL (Windows Subsystem for Linux) for optimal experience

## First Launch
\`\`\`bash
# Navigate to project directory
cd my-project

# Launch Claude Code
claude
\`\`\`

## Authentication
On first launch, Claude Code will request authentication:
1. **Anthropic API Key** - for pay-per-use
2. **Claude Pro/Max** - authenticate through browser

## Important Settings

### CLAUDE.md
Create a \`CLAUDE.md\` file at your project root:
\`\`\`markdown
# Project Instructions

## Rules
- Write code in TypeScript
- Use Tailwind CSS
- Follow project conventions

## Structure
- src/components - components
- src/lib - libraries
- src/app - pages
\`\`\`

### Permission Modes
| Mode | Description |
|------|-------------|
| **Ask** | Asks permission for every action |
| **Auto-edit** | Edits files automatically, asks for commands |
| **Auto** | Does everything automatically (careful!) |`
        }
      },
      {
        id: 'cc-commands',
        title: { he: 'פקודות ומקשי קיצור', en: 'Commands & Shortcuts' },
        description: { he: 'כל הפקודות והמקשי קיצור של Claude Code', en: 'All Claude Code commands and keyboard shortcuts' },
        duration: 25,
        content: {
          he: `# פקודות ומקשי קיצור

## Slash Commands - פקודות מהירות

### פקודות בסיסיות
| פקודה | תיאור |
|--------|--------|
| \`/help\` | הצגת עזרה ורשימת פקודות |
| \`/clear\` | ניקוי ההיסטוריה של השיחה |
| \`/compact\` | דחיסת ההקשר (שימושי כשמגיעים למגבלת חלון) |
| \`/cost\` | הצגת עלות השיחה הנוכחית |
| \`/status\` | מידע על חשבון, מודל, ושימוש |
| \`/doctor\` | בדיקת תקינות ואבחון בעיות |

### פקודות קוד ופרויקט
| פקודה | תיאור |
|--------|--------|
| \`/init\` | יצירת CLAUDE.md - קובץ הגדרות לפרויקט |
| \`/review\` | סקירת קוד (Code Review) |
| \`/bug\` | דיווח על באג ועזרה באיתורו |
| \`/pr\` | יצירת Pull Request |
| \`/commit\` | ביצוע commit עם הודעה אוטומטית |
| \`/diff\` | הצגת שינויים בקוד |

### פקודות הגדרות
| פקודה | תיאור |
|--------|--------|
| \`/model\` | בחירת מודל (Opus, Sonnet, Haiku) |
| \`/permissions\` | ניהול הרשאות כלים |
| \`/memory\` | ניהול זיכרון - מה Claude זוכר |
| \`/login\` | התחברות מחדש |
| \`/logout\` | התנתקות |
| \`/terminal-setup\` | הגדרת טרמינל |
| \`/config\` | הגדרות כלליות |
| \`/vim\` | מצב vim (לעורכי vim) |

### פקודות מתקדמות
| פקודה | תיאור |
|--------|--------|
| \`/fast\` | מעבר למצב מהיר (Fast Mode) - פלט מהיר יותר |
| \`/think\` | הפעלת Extended Thinking - חשיבה מעמיקה |
| \`/plan\` | מצב תכנון - Claude מתכנן לפני ביצוע |

## מקשי קיצור

| מקש | פעולה |
|------|--------|
| \`Enter\` | שליחת הודעה |
| \`Shift+Enter\` | שורה חדשה (בלי לשלוח) |
| \`Escape\` | ביטול פעולה / יציאה מתכנון |
| \`Tab\` | השלמה אוטומטית (שמות קבצים, פקודות) |
| \`Shift+Tab\` | קבלת הצעה אוטומטית |
| \`Up/Down\` | ניווט בהיסטוריה |
| \`Ctrl+C\` | עצירת פעולה נוכחית |
| \`Ctrl+L\` | ניקוי מסך |
| \`Ctrl+J\` | שליחת הודעה (חלופה ל-Enter) |

## הפעלה מתקדמת

### הרצה עם פרומפט
\`\`\`bash
claude "תקן את כל הבאגים בקובץ app.ts"
\`\`\`

### הרצה ללא אינטראקציה
\`\`\`bash
claude -p "מה עושה הפונקציה main?" --output-format json
\`\`\`

### שימוש ב-pipe
\`\`\`bash
cat error.log | claude "נתח את השגיאות ותן פתרונות"
\`\`\`

### בחירת מודל
\`\`\`bash
claude --model claude-sonnet-4-6
\`\`\``,
          en: `# Commands & Shortcuts

## Slash Commands

### Basic Commands
| Command | Description |
|---------|-------------|
| \`/help\` | Show help and list commands |
| \`/clear\` | Clear conversation history |
| \`/compact\` | Compress context (useful when reaching window limit) |
| \`/cost\` | Show current session cost |
| \`/status\` | Account, model, and usage info |
| \`/doctor\` | Health check and diagnostics |

### Code & Project Commands
| Command | Description |
|---------|-------------|
| \`/init\` | Create CLAUDE.md - project config file |
| \`/review\` | Code Review |
| \`/bug\` | Report and help find a bug |
| \`/pr\` | Create a Pull Request |
| \`/commit\` | Commit with auto-generated message |
| \`/diff\` | Show code changes |

### Settings Commands
| Command | Description |
|---------|-------------|
| \`/model\` | Select model (Opus, Sonnet, Haiku) |
| \`/permissions\` | Manage tool permissions |
| \`/memory\` | Manage memory - what Claude remembers |
| \`/login\` | Re-authenticate |
| \`/logout\` | Log out |
| \`/terminal-setup\` | Terminal setup |
| \`/config\` | General settings |
| \`/vim\` | Vim mode |

### Advanced Commands
| Command | Description |
|---------|-------------|
| \`/fast\` | Toggle Fast Mode - faster output |
| \`/think\` | Enable Extended Thinking - deeper reasoning |
| \`/plan\` | Plan mode - Claude plans before executing |

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| \`Enter\` | Send message |
| \`Shift+Enter\` | New line (without sending) |
| \`Escape\` | Cancel action / exit plan mode |
| \`Tab\` | Auto-complete (filenames, commands) |
| \`Shift+Tab\` | Accept auto-suggestion |
| \`Up/Down\` | Navigate history |
| \`Ctrl+C\` | Stop current action |
| \`Ctrl+L\` | Clear screen |
| \`Ctrl+J\` | Send message (alternative to Enter) |

## Advanced Usage

### Run with prompt
\`\`\`bash
claude "Fix all bugs in app.ts"
\`\`\`

### Non-interactive run
\`\`\`bash
claude -p "What does the main function do?" --output-format json
\`\`\`

### Pipe usage
\`\`\`bash
cat error.log | claude "Analyze the errors and provide solutions"
\`\`\`

### Model selection
\`\`\`bash
claude --model claude-sonnet-4-6
\`\`\``
        }
      },
      {
        id: 'cc-tools',
        title: { he: 'כלים מובנים', en: 'Built-in Tools' },
        description: { he: 'הכלים שClaude Code משתמש בהם: Read, Edit, Bash, Grep ועוד', en: 'Tools Claude Code uses: Read, Edit, Bash, Grep, and more' },
        duration: 25,
        content: {
          he: `# כלים מובנים של Claude Code

## רשימת הכלים

### 📖 Read - קריאת קבצים
קורא קבצים מהדיסק. תומך ב-PDF, תמונות, Jupyter notebooks.
\`\`\`
"קרא את הקובץ src/app.ts"
\`\`\`

### ✏️ Edit - עריכת קבצים
מבצע החלפות מדויקות בקבצים קיימים.
\`\`\`
"שנה את שם הפונקציה מ-getData ל-fetchUserData"
\`\`\`

### 📝 Write - כתיבת קבצים
יוצר קבצים חדשים או דורס קיימים.
\`\`\`
"צור קובץ חדש src/utils/helpers.ts"
\`\`\`

### 🖥️ Bash - הרצת פקודות
מריץ פקודות בטרמינל.
\`\`\`
"הרץ את הטסטים"
"בנה את הפרויקט"
\`\`\`

### 🔍 Grep - חיפוש בתוכן
חיפוש regex בקבצים.
\`\`\`
"חפש את כל המקומות שמשתמשים ב-console.log"
\`\`\`

### 📂 Glob - חיפוש קבצים
מציאת קבצים לפי תבניות.
\`\`\`
"מצא את כל קבצי ה-TypeScript בתיקיית src"
\`\`\`

### 🌐 WebFetch / WebSearch
גישה לאינטרנט לחיפוש מידע.

### 🤖 Agent - סוכנים
הפעלת סוכנים מתמחים למשימות מורכבות:
- **Explore** - סריקת codebase
- **Plan** - תכנון מימוש
- **general-purpose** - מחקר כללי

### 📋 TodoWrite - ניהול משימות
מעקב אחרי התקדמות במשימות מורכבות.`,
          en: `# Claude Code Built-in Tools

## Tool List

### 📖 Read - File Reading
Reads files from disk. Supports PDF, images, Jupyter notebooks.
\`\`\`
"Read the file src/app.ts"
\`\`\`

### ✏️ Edit - File Editing
Performs exact replacements in existing files.
\`\`\`
"Change the function name from getData to fetchUserData"
\`\`\`

### 📝 Write - File Writing
Creates new files or overwrites existing ones.
\`\`\`
"Create a new file src/utils/helpers.ts"
\`\`\`

### 🖥️ Bash - Command Execution
Runs commands in the terminal.
\`\`\`
"Run the tests"
"Build the project"
\`\`\`

### 🔍 Grep - Content Search
Regex search across files.
\`\`\`
"Find all places that use console.log"
\`\`\`

### 📂 Glob - File Search
Find files by patterns.
\`\`\`
"Find all TypeScript files in the src directory"
\`\`\`

### 🌐 WebFetch / WebSearch
Internet access for searching information.

### 🤖 Agent - Sub-agents
Launch specialized agents for complex tasks:
- **Explore** - Codebase scanning
- **Plan** - Implementation planning
- **general-purpose** - General research

### 📋 TodoWrite - Task Management
Track progress on complex tasks.`
        }
      },
      {
        id: 'cc-mcp',
        title: { he: 'MCP - Model Context Protocol', en: 'MCP - Model Context Protocol' },
        description: { he: 'חיבור Claude לכלים חיצוניים עם MCP', en: 'Connecting Claude to external tools with MCP' },
        duration: 30,
        content: {
          he: `# MCP - Model Context Protocol

## מה זה MCP?
MCP הוא פרוטוקול פתוח שמאפשר ל-Claude להתחבר לכלים ושירותים חיצוניים. זה כמו "USB port" עבור AI.

## איך זה עובד?
1. **MCP Server** - תוכנה שחושפת כלים ומשאבים
2. **MCP Client** - Claude Code (או כל לקוח MCP)
3. **Protocol** - תקשורת סטנדרטית ביניהם

## הגדרת MCP Servers

### בקובץ settings
\`\`\`json
// ~/.claude/settings.json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_..."
      }
    }
  }
}
\`\`\`

## MCP Servers פופולריים

| שרת | תיאור | דירוג |
|------|--------|--------|
| **GitHub** | ניהול repos, PRs, issues | ⭐⭐⭐⭐⭐ |
| **Filesystem** | גישה מורחבת לקבצים | ⭐⭐⭐⭐⭐ |
| **PostgreSQL** | שאילתות בסיס נתונים | ⭐⭐⭐⭐ |
| **Slack** | שליחת הודעות | ⭐⭐⭐⭐ |
| **Google Drive** | גישה לקבצים | ⭐⭐⭐⭐ |
| **Puppeteer** | אוטומציית דפדפן | ⭐⭐⭐⭐ |
| **Memory** | זיכרון persistent | ⭐⭐⭐ |
| **Brave Search** | חיפוש אינטרנט | ⭐⭐⭐ |
| **Airtable** | ניהול טבלאות | ⭐⭐⭐ |
| **Make/Zapier** | אוטומציות | ⭐⭐⭐⭐ |

## בניית MCP Server משלכם
\`\`\`typescript
import { Server } from "@modelcontextprotocol/sdk/server";

const server = new Server({
  name: "my-server",
  version: "1.0.0"
});

server.setRequestHandler("tools/list", async () => ({
  tools: [{
    name: "greet",
    description: "Says hello",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string" }
      }
    }
  }]
}));
\`\`\``,
          en: `# MCP - Model Context Protocol

## What is MCP?
MCP is an open protocol that allows Claude to connect to external tools and services. It's like a "USB port" for AI.

## How It Works
1. **MCP Server** - Software that exposes tools and resources
2. **MCP Client** - Claude Code (or any MCP client)
3. **Protocol** - Standard communication between them

## Setting Up MCP Servers

### In settings file
\`\`\`json
// ~/.claude/settings.json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_..."
      }
    }
  }
}
\`\`\`

## Popular MCP Servers

| Server | Description | Rating |
|--------|-------------|--------|
| **GitHub** | Manage repos, PRs, issues | ⭐⭐⭐⭐⭐ |
| **Filesystem** | Extended file access | ⭐⭐⭐⭐⭐ |
| **PostgreSQL** | Database queries | ⭐⭐⭐⭐ |
| **Slack** | Send messages | ⭐⭐⭐⭐ |
| **Google Drive** | File access | ⭐⭐⭐⭐ |
| **Puppeteer** | Browser automation | ⭐⭐⭐⭐ |
| **Memory** | Persistent memory | ⭐⭐⭐ |
| **Brave Search** | Web search | ⭐⭐⭐ |
| **Airtable** | Table management | ⭐⭐⭐ |
| **Make/Zapier** | Automations | ⭐⭐⭐⭐ |

## Building Your Own MCP Server
\`\`\`typescript
import { Server } from "@modelcontextprotocol/sdk/server";

const server = new Server({
  name: "my-server",
  version: "1.0.0"
});

server.setRequestHandler("tools/list", async () => ({
  tools: [{
    name: "greet",
    description: "Says hello",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string" }
      }
    }
  }]
}));
\`\`\``
        }
      },
      {
        id: 'cc-memory',
        title: { he: 'מערכת זיכרון', en: 'Memory System' },
        description: { he: 'איך Claude Code זוכר הקשר בין שיחות', en: 'How Claude Code remembers context between conversations' },
        duration: 20,
        content: {
          he: `# מערכת הזיכרון של Claude Code

## סוגי זיכרון

### 1. CLAUDE.md - זיכרון פרויקט
קובץ בשורש הפרויקט שClaude Code קורא אוטומטית:
\`\`\`markdown
# הוראות פרויקט
- שפה: TypeScript
- Framework: Next.js 14
- Styling: Tailwind CSS
- Database: PostgreSQL with Prisma
\`\`\`

### 2. Memory Files - זיכרון אישי
קבצים ב-\`~/.claude/projects/<project>/memory/\`:
- **user** - מידע על המשתמש
- **feedback** - הנחיות שקיבל
- **project** - מידע על הפרויקט
- **reference** - קישורים למקורות

### 3. MEMORY.md - אינדקס
קובץ אינדקס שמפנה לכל קבצי הזיכרון.

## שימוש בזיכרון

### שמירה
\`\`\`
"תזכור שאני מעדיף camelCase בכל הקוד"
"תזכור שהפרויקט הזה משתמש ב-PostgreSQL 15"
\`\`\`

### גישה
\`\`\`
"מה אתה זוכר על ההעדפות שלי?"
"מה ההגדרות של הפרויקט?"
\`\`\`

### ניהול
\`\`\`
/memory  # פתיחת ממשק ניהול הזיכרון
\`\`\`

## טיפים
- שמרו הנחיות חוזרות בזיכרון
- עדכנו את CLAUDE.md כשהפרויקט משתנה
- השתמשו בזיכרון לתיעוד החלטות ארכיטקטוניות`,
          en: `# Claude Code Memory System

## Types of Memory

### 1. CLAUDE.md - Project Memory
A file at the project root that Claude Code reads automatically:
\`\`\`markdown
# Project Instructions
- Language: TypeScript
- Framework: Next.js 14
- Styling: Tailwind CSS
- Database: PostgreSQL with Prisma
\`\`\`

### 2. Memory Files - Personal Memory
Files in \`~/.claude/projects/<project>/memory/\`:
- **user** - Information about the user
- **feedback** - Guidelines received
- **project** - Project information
- **reference** - Links to resources

### 3. MEMORY.md - Index
An index file that points to all memory files.

## Using Memory

### Saving
\`\`\`
"Remember that I prefer camelCase in all code"
"Remember that this project uses PostgreSQL 15"
\`\`\`

### Accessing
\`\`\`
"What do you remember about my preferences?"
"What are the project settings?"
\`\`\`

### Managing
\`\`\`
/memory  # Open memory management interface
\`\`\`

## Tips
- Save recurring instructions in memory
- Update CLAUDE.md when the project changes
- Use memory to document architectural decisions`
        }
      },
      {
        id: 'cc-hooks',
        title: { he: 'Hooks ו-Skills', en: 'Hooks & Skills' },
        description: { he: 'אוטומציה עם hooks ויצירת skills מותאמים', en: 'Automation with hooks and creating custom skills' },
        duration: 20,
        content: {
          he: `# Hooks ו-Skills

## Hooks - אוטומציה
Hooks הם סקריפטים שמופעלים אוטומטית באירועים מסוימים.

### סוגי Hooks
\`\`\`json
// ~/.claude/settings.json
{
  "hooks": {
    "preToolCall": [
      {
        "matcher": "Edit",
        "command": "echo 'About to edit a file'"
      }
    ],
    "postToolCall": [
      {
        "matcher": "Bash",
        "command": "echo 'Command completed'"
      }
    ],
    "notification": [
      {
        "command": "notify-send 'Claude Code' '$message'"
      }
    ]
  }
}
\`\`\`

### שימושים נפוצים
- 🔔 התראות כשClaude מסיים משימה
- ✅ בדיקות אוטומטיות לפני commit
- 📝 תיעוד אוטומטי של שינויים
- 🔒 מניעת גישה לקבצים רגישים

## Skills - כישורים
Skills הם תבניות פרומפט מוכנות מראש שמרחיבות את היכולות.

### שימוש ב-Skills
\`\`\`
/commit          # יצירת commit
/review          # סקירת קוד
/simplify        # פישוט קוד
\`\`\`

### יצירת Skill מותאם
Skills מוגדרים כקבצי markdown עם frontmatter:
\`\`\`markdown
---
name: my-skill
description: Does something useful
trigger: when user asks to do X
---

# Instructions for the skill
Do X by following these steps...
\`\`\``,
          en: `# Hooks & Skills

## Hooks - Automation
Hooks are scripts that run automatically on certain events.

### Hook Types
\`\`\`json
// ~/.claude/settings.json
{
  "hooks": {
    "preToolCall": [
      {
        "matcher": "Edit",
        "command": "echo 'About to edit a file'"
      }
    ],
    "postToolCall": [
      {
        "matcher": "Bash",
        "command": "echo 'Command completed'"
      }
    ],
    "notification": [
      {
        "command": "notify-send 'Claude Code' '$message'"
      }
    ]
  }
}
\`\`\`

### Common Uses
- 🔔 Notifications when Claude completes tasks
- ✅ Automatic checks before commit
- 📝 Automatic documentation of changes
- 🔒 Preventing access to sensitive files

## Skills
Skills are pre-made prompt templates that extend capabilities.

### Using Skills
\`\`\`
/commit          # Create a commit
/review          # Code review
/simplify        # Simplify code
\`\`\`

### Creating Custom Skills
Skills are defined as markdown files with frontmatter:
\`\`\`markdown
---
name: my-skill
description: Does something useful
trigger: when user asks to do X
---

# Instructions for the skill
Do X by following these steps...
\`\`\``
        }
      },
      {
        id: 'cc-workflows',
        title: { he: 'תהליכי עבודה מתקדמים', en: 'Advanced Workflows' },
        description: { he: 'שימוש ב-agents, plan mode, ועבודה עם git', en: 'Using agents, plan mode, and working with git' },
        duration: 25,
        content: {
          he: `# תהליכי עבודה מתקדמים

## Plan Mode - מצב תכנון
לפני שמתחילים לכתוב קוד, כדאי לתכנן:
\`\`\`
"תכנן את המימוש של מערכת הרשאות בפרויקט"
\`\`\`

Claude Code יבנה תוכנית מפורטת ויבקש אישור לפני ביצוע.

## Agents - סוכנים מקבילים
Claude Code יכול להפעיל סוכנים בו-זמנית:

### סוכן Explorer
\`\`\`
"חקור את מבנה הפרויקט וזהה patterns חוזרים"
\`\`\`

### סוכן מחקר
\`\`\`
"חקור את הדרך הטובה ביותר לממש caching ב-Next.js"
\`\`\`

## Git Workflows

### Commit מסודר
\`\`\`
"צור commit עם כל השינויים שעשינו"
\`\`\`
Claude Code:
1. בודק git status
2. בודק git diff
3. מנתח שינויים
4. כותב commit message מתאים
5. מבצע commit

### Pull Request
\`\`\`
"צור PR עם סיכום של כל השינויים"
\`\`\`

### Code Review
\`\`\`
"סקור את ה-PR הזה וחפש בעיות"
\`\`\`

## CI/CD Integration
\`\`\`bash
# הרצה בCI
claude -p "בדוק שהקוד עובר את כל הבדיקות" --output-format json

# Headless mode
claude --print "Generate migration for new user fields"
\`\`\`

## Multi-file Refactoring
\`\`\`
"שנה את כל הAPIים מ-REST ל-GraphQL"
\`\`\`
Claude Code מנהל שינויים בעשרות קבצים בו-זמנית.`,
          en: `# Advanced Workflows

## Plan Mode
Before writing code, it's good to plan:
\`\`\`
"Plan the implementation of a permissions system in the project"
\`\`\`

Claude Code will build a detailed plan and ask for approval before executing.

## Agents - Parallel Agents
Claude Code can launch agents simultaneously:

### Explorer Agent
\`\`\`
"Explore the project structure and identify recurring patterns"
\`\`\`

### Research Agent
\`\`\`
"Research the best way to implement caching in Next.js"
\`\`\`

## Git Workflows

### Proper Commit
\`\`\`
"Create a commit with all the changes we made"
\`\`\`
Claude Code:
1. Checks git status
2. Checks git diff
3. Analyzes changes
4. Writes appropriate commit message
5. Creates commit

### Pull Request
\`\`\`
"Create a PR with a summary of all changes"
\`\`\`

### Code Review
\`\`\`
"Review this PR and look for issues"
\`\`\`

## CI/CD Integration
\`\`\`bash
# Run in CI
claude -p "Check that the code passes all tests" --output-format json

# Headless mode
claude --print "Generate migration for new user fields"
\`\`\`

## Multi-file Refactoring
\`\`\`
"Change all APIs from REST to GraphQL"
\`\`\`
Claude Code manages changes across dozens of files simultaneously.`
        }
      }
    ]
  },
  {
    id: 'interfaces-deep-dive',
    title: { he: 'ממשקים והתקנה', en: 'Interfaces & Setup' },
    description: {
      he: 'השוואה מעמיקה של כל הדרכים לעבוד עם Claude: Desktop, Web, IDE, API',
      en: 'Deep comparison of all ways to work with Claude: Desktop, Web, IDE, API'
    },
    icon: '🖥️',
    level: 'beginner',
    duration: 120,
    lessonsCount: 5,
    color: '#4A90D9',
    lessons: [
      {
        id: 'web-interface',
        title: { he: 'ממשק ה-Web', en: 'Web Interface' },
        description: { he: 'שימוש ב-claude.ai בדפדפן', en: 'Using claude.ai in the browser' },
        duration: 20,
        content: {
          he: `# ממשק ה-Web - claude.ai

## גישה
היכנסו ל-**claude.ai** ובצעו הרשמה/התחברות.

## תכונות עיקריות

### שיחה
- ✅ שיחות טקסט ללא הגבלת אורך (בתוך חלון ההקשר)
- ✅ העלאת קבצים: PDF, תמונות, קוד
- ✅ Artifacts - יצירת קוד, HTML, React בחלון נפרד
- ✅ Extended Thinking

### Projects
- ✅ ארגון שיחות בפרויקטים
- ✅ Custom Instructions לכל פרויקט
- ✅ העלאת Knowledge Base

### יתרונות
- 🟢 נגיש מכל מקום - רק דפדפן
- 🟢 ממשק ידידותי ואינטואיטיבי
- 🟢 תמיכה מלאה ב-Artifacts
- 🟢 Projects לארגון עבודה
- 🟢 אין צורך בהתקנה

### חסרונות
- 🔴 אין גישה ישירה לקבצים במחשב
- 🔴 אין יכולת להריץ קוד מקומית
- 🔴 תלוי בחיבור אינטרנט
- 🔴 אין MCP

## הגדרה מומלצת
1. צרו חשבון ב-claude.ai
2. שדרגו ל-Pro לגישה ל-Opus
3. צרו Projects לנושאים שונים
4. הגדירו Custom Instructions בכל פרויקט`,
          en: `# Web Interface - claude.ai

## Access
Go to **claude.ai** and sign up/log in.

## Key Features

### Conversation
- ✅ Unlimited text conversations (within context window)
- ✅ File uploads: PDF, images, code
- ✅ Artifacts - create code, HTML, React in separate window
- ✅ Extended Thinking

### Projects
- ✅ Organize conversations in projects
- ✅ Custom Instructions per project
- ✅ Upload Knowledge Base

### Pros
- 🟢 Accessible from anywhere - just a browser
- 🟢 User-friendly and intuitive interface
- 🟢 Full Artifacts support
- 🟢 Projects for work organization
- 🟢 No installation needed

### Cons
- 🔴 No direct access to local files
- 🔴 Cannot run code locally
- 🔴 Depends on internet connection
- 🔴 No MCP

## Recommended Setup
1. Create an account at claude.ai
2. Upgrade to Pro for Opus access
3. Create Projects for different topics
4. Set Custom Instructions in each project`
        }
      },
      {
        id: 'desktop-app',
        title: { he: 'אפליקציית Desktop', en: 'Desktop Application' },
        description: { he: 'Claude Desktop למחשב - Windows ו-Mac', en: 'Claude Desktop for computer - Windows and Mac' },
        duration: 25,
        content: {
          he: `# אפליקציית Desktop

## הורדה והתקנה
1. הורידו מ-**claude.ai/download**
2. זמין ל-**Windows** ו-**macOS**
3. התחברו עם חשבון Claude שלכם

## תכונות ייחודיות

### MCP Support
היתרון הגדול של Desktop - תמיכה ב-MCP!
\`\`\`json
// claude_desktop_config.json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "C:/Users/me/Documents"]
    }
  }
}
\`\`\`

### Computer Use (Beta)
Claude יכול לשלוט במחשב שלכם:
- הקלקה וגרירה
- הקלדה
- צילום מסך
- ניווט בתפריטים

### יתרונות
- 🟢 MCP - חיבור לכלים חיצוניים
- 🟢 עובד כאפליקציה native
- 🟢 קיצורי מקלדת מהירים
- 🟢 Computer Use
- 🟢 Always available (system tray)

### חסרונות
- 🔴 לא זמין ל-Linux
- 🔴 צורך משאבי מחשב
- 🔴 אין תמיכה ב-Artifacts כמו ב-Web
- 🔴 MCP דורש הגדרה טכנית

## הגדרת MCP ב-Desktop

### Windows
קובץ הגדרות:
\`%APPDATA%\\Claude\\claude_desktop_config.json\`

### macOS
קובץ הגדרות:
\`~/Library/Application Support/Claude/claude_desktop_config.json\``,
          en: `# Desktop Application

## Download & Installation
1. Download from **claude.ai/download**
2. Available for **Windows** and **macOS**
3. Sign in with your Claude account

## Unique Features

### MCP Support
The big advantage of Desktop - MCP support!
\`\`\`json
// claude_desktop_config.json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "C:/Users/me/Documents"]
    }
  }
}
\`\`\`

### Computer Use (Beta)
Claude can control your computer:
- Click and drag
- Type text
- Take screenshots
- Navigate menus

### Pros
- 🟢 MCP - external tool integration
- 🟢 Works as a native application
- 🟢 Fast keyboard shortcuts
- 🟢 Computer Use
- 🟢 Always available (system tray)

### Cons
- 🔴 Not available for Linux
- 🔴 Uses computer resources
- 🔴 No Artifacts support like Web
- 🔴 MCP requires technical setup

## Setting Up MCP on Desktop

### Windows
Config file:
\`%APPDATA%\\Claude\\claude_desktop_config.json\`

### macOS
Config file:
\`~/Library/Application Support/Claude/claude_desktop_config.json\``
        }
      },
      {
        id: 'ide-integration',
        title: { he: 'שילוב ב-IDE', en: 'IDE Integration' },
        description: { he: 'Claude ב-VS Code, JetBrains ועוד', en: 'Claude in VS Code, JetBrains, and more' },
        duration: 25,
        content: {
          he: `# שילוב ב-IDE

## VS Code - Claude Extension

### התקנה
1. פתחו VS Code
2. Extensions → חפשו "Claude"
3. התקינו את **Claude for VS Code** (מבית Anthropic)

### תכונות
- 💬 צ'אט בתוך VS Code
- 📝 עריכת קוד ישירה
- 🔍 הבנת הקשר הפרויקט
- 🛠️ Terminal integration

### שימוש
- **Ctrl+L** - פתיחת צ'אט Claude
- **Ctrl+I** - inline edit
- סימון קוד → "Ask Claude"

## JetBrains IDEs

### התקנה
1. Settings → Plugins → Marketplace
2. חפשו "Claude" או "Anthropic"
3. התקינו וחברו עם API key

## Claude Code בתוך IDE

### VS Code Terminal
\`\`\`bash
# פתחו טרמינל ב-VS Code והריצו
claude
\`\`\`
Claude Code יזהה אוטומטית את הפרויקט הפתוח.

### יתרונות IDE Integration
- 🟢 עבודה בלי לעזוב את ה-IDE
- 🟢 הקשר אוטומטי של הקובץ הפתוח
- 🟢 inline editing
- 🟢 שילוב עם Git, Debug, Terminal

### חסרונות
- 🔴 חלק מהתוספים עדיין בבטא
- 🔴 פחות יכולות מ-Claude Code CLI
- 🔴 תלוי בעדכוני IDE

## המלצה
השילוב הכי חזק הוא **Claude Code בטרמינל של VS Code** - מקבלים את הטוב משני העולמות.`,
          en: `# IDE Integration

## VS Code - Claude Extension

### Installation
1. Open VS Code
2. Extensions → Search "Claude"
3. Install **Claude for VS Code** (by Anthropic)

### Features
- 💬 Chat inside VS Code
- 📝 Direct code editing
- 🔍 Project context awareness
- 🛠️ Terminal integration

### Usage
- **Ctrl+L** - Open Claude chat
- **Ctrl+I** - Inline edit
- Select code → "Ask Claude"

## JetBrains IDEs

### Installation
1. Settings → Plugins → Marketplace
2. Search "Claude" or "Anthropic"
3. Install and connect with API key

## Claude Code Inside IDE

### VS Code Terminal
\`\`\`bash
# Open terminal in VS Code and run
claude
\`\`\`
Claude Code will auto-detect the open project.

### IDE Integration Pros
- 🟢 Work without leaving the IDE
- 🟢 Automatic context of open file
- 🟢 Inline editing
- 🟢 Integration with Git, Debug, Terminal

### Cons
- 🔴 Some extensions still in beta
- 🔴 Fewer capabilities than Claude Code CLI
- 🔴 Depends on IDE updates

## Recommendation
The strongest combo is **Claude Code in VS Code terminal** - you get the best of both worlds.`
        }
      },
      {
        id: 'api-usage',
        title: { he: 'שימוש ב-API', en: 'API Usage' },
        description: { he: 'בניית אפליקציות עם Anthropic API', en: 'Building applications with the Anthropic API' },
        duration: 30,
        content: {
          he: `# Anthropic API

## התחלה מהירה

### הרשמה
1. היכנסו ל-**console.anthropic.com**
2. צרו API Key
3. הוסיפו credits

### התקנת SDK

#### Python
\`\`\`bash
pip install anthropic
\`\`\`

#### JavaScript/TypeScript
\`\`\`bash
npm install @anthropic-ai/sdk
\`\`\`

### קוד ראשון

#### Python
\`\`\`python
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "שלום! מה אתה יכול לעשות?"}
    ]
)
print(message.content[0].text)
\`\`\`

#### TypeScript
\`\`\`typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const message = await client.messages.create({
  model: 'claude-sonnet-4-6',
  max_tokens: 1024,
  messages: [
    { role: 'user', content: 'Hello! What can you do?' }
  ]
});
console.log(message.content[0].text);
\`\`\`

## תמחור API

| מודל | Input (1M tokens) | Output (1M tokens) |
|------|-------------------|---------------------|
| Opus 4.6 | $5 | $25 |
| Sonnet 4.6 | $3 | $15 |
| Haiku 4.5 | $1 | $5 |

## Tool Use
\`\`\`python
tools = [{
    "name": "get_weather",
    "description": "Get weather for a location",
    "input_schema": {
        "type": "object",
        "properties": {
            "location": {"type": "string"}
        },
        "required": ["location"]
    }
}]
\`\`\`

## יתרונות API
- 🟢 שליטה מלאה
- 🟢 אינטגרציה בכל מערכת
- 🟢 Streaming
- 🟢 Tool Use
- 🟢 Batch Processing

## חסרונות
- 🔴 דורש ידע טכני
- 🔴 תשלום לפי שימוש
- 🔴 צריך לנהל rate limits`,
          en: `# Anthropic API

## Quick Start

### Registration
1. Go to **console.anthropic.com**
2. Create an API Key
3. Add credits

### SDK Installation

#### Python
\`\`\`bash
pip install anthropic
\`\`\`

#### JavaScript/TypeScript
\`\`\`bash
npm install @anthropic-ai/sdk
\`\`\`

### First Code

#### Python
\`\`\`python
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello! What can you do?"}
    ]
)
print(message.content[0].text)
\`\`\`

#### TypeScript
\`\`\`typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const message = await client.messages.create({
  model: 'claude-sonnet-4-6',
  max_tokens: 1024,
  messages: [
    { role: 'user', content: 'Hello! What can you do?' }
  ]
});
console.log(message.content[0].text);
\`\`\`

## API Pricing

| Model | Input (1M tokens) | Output (1M tokens) |
|-------|-------------------|---------------------|
| Opus 4.6 | $5 | $25 |
| Sonnet 4.6 | $3 | $15 |
| Haiku 4.5 | $1 | $5 |

## Tool Use
\`\`\`python
tools = [{
    "name": "get_weather",
    "description": "Get weather for a location",
    "input_schema": {
        "type": "object",
        "properties": {
            "location": {"type": "string"}
        },
        "required": ["location"]
    }
}]
\`\`\`

## API Pros
- 🟢 Full control
- 🟢 Integration with any system
- 🟢 Streaming
- 🟢 Tool Use
- 🟢 Batch Processing

## Cons
- 🔴 Requires technical knowledge
- 🔴 Pay per use
- 🔴 Need to manage rate limits`
        }
      },
      {
        id: 'mobile-usage',
        title: { he: 'שימוש במובייל', en: 'Mobile Usage' },
        description: { he: 'Claude באפליקציות מובייל', en: 'Claude in mobile applications' },
        duration: 20,
        content: {
          he: `# Claude במובייל

## אפליקציית Claude

### iOS
- הורידו מ-App Store
- חפשו "Claude by Anthropic"
- חינם להורדה עם אפשרות שדרוג

### Android
- הורידו מ-Google Play
- חפשו "Claude by Anthropic"
- חינם להורדה עם אפשרות שדרוג

## תכונות מובייל
- 📸 צילום ושליחת תמונות
- 🎤 הקלטה קולית (speech-to-text)
- 📎 העלאת קבצים מהטלפון
- 💬 שיחות בכל מקום
- 🔄 סנכרון עם חשבון Web

## שימושים מומלצים למובייל
1. **שאלות מהירות** בדרך
2. **ניתוח תמונות** - צלמו ושאלו
3. **תרגום מהיר** בחו"ל
4. **רעיונות** - תפסו רעיונות בזמן אמת
5. **עזרה בכתיבה** - מיילים, הודעות

## יתרונות
- 🟢 זמין תמיד
- 🟢 מצלמה מובנית לניתוח תמונות
- 🟢 ממשק מותאם למובייל
- 🟢 סנכרון עם Desktop ו-Web

## חסרונות
- 🔴 מסך קטן לעבודה מורכבת
- 🔴 אין Artifacts
- 🔴 הקלדה איטית יותר
- 🔴 אין MCP`,
          en: `# Claude on Mobile

## Claude App

### iOS
- Download from App Store
- Search "Claude by Anthropic"
- Free to download with upgrade option

### Android
- Download from Google Play
- Search "Claude by Anthropic"
- Free to download with upgrade option

## Mobile Features
- 📸 Take and send photos
- 🎤 Voice recording (speech-to-text)
- 📎 Upload files from phone
- 💬 Chat anywhere
- 🔄 Sync with Web account

## Recommended Mobile Uses
1. **Quick questions** on the go
2. **Image analysis** - snap and ask
3. **Quick translation** abroad
4. **Ideas** - capture ideas in real-time
5. **Writing help** - emails, messages

## Pros
- 🟢 Always available
- 🟢 Built-in camera for image analysis
- 🟢 Mobile-optimized interface
- 🟢 Sync with Desktop and Web

## Cons
- 🔴 Small screen for complex work
- 🔴 No Artifacts
- 🔴 Slower typing
- 🔴 No MCP`
        }
      }
    ]
  },
  {
    id: 'advanced-techniques',
    title: { he: 'טכניקות מתקדמות', en: 'Advanced Techniques' },
    description: {
      he: 'שליטה ביכולות המתקדמות: Extended Thinking, Vision, Tool Use, Agent SDK',
      en: 'Mastering advanced capabilities: Extended Thinking, Vision, Tool Use, Agent SDK'
    },
    icon: '🧠',
    level: 'advanced',
    duration: 150,
    lessonsCount: 5,
    color: '#8E44AD',
    lessons: [
      {
        id: 'extended-thinking',
        title: { he: 'Extended Thinking', en: 'Extended Thinking' },
        description: { he: 'חשיבה מורחבת למשימות מורכבות', en: 'Extended thinking for complex tasks' },
        duration: 25,
        content: {
          he: `# Extended Thinking

## מה זה?
Extended Thinking מאפשר ל-Claude "לחשוב" לפני שהוא עונה. זה משפר משמעותית את הדיוק במשימות מורכבות.

## מתי להשתמש?
- 🧮 בעיות מתמטיות מורכבות
- 🏗️ תכנון ארכיטקטורה
- 🔍 ניתוח קוד מורכב
- 📊 ניתוח נתונים מורכב
- ⚖️ החלטות עם trade-offs

## שימוש ב-API
\`\`\`python
message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=16000,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000
    },
    messages=[{
        "role": "user",
        "content": "Solve this complex optimization problem..."
    }]
)

# הצגת תהליך החשיבה
for block in message.content:
    if block.type == "thinking":
        print("Thinking:", block.thinking)
    elif block.type == "text":
        print("Answer:", block.text)
\`\`\`

## טיפים
1. **הגדירו budget** - כמה tokens לחשיבה
2. **בקשו חשיבה** - "חשוב צעד אחר צעד"
3. **בדקו את החשיבה** - ניתן לראות את תהליך החשיבה
4. **שלבו עם structured output** - לתוצאות מדויקות`,
          en: `# Extended Thinking

## What is it?
Extended Thinking allows Claude to "think" before answering. This significantly improves accuracy on complex tasks.

## When to use?
- 🧮 Complex math problems
- 🏗️ Architecture planning
- 🔍 Complex code analysis
- 📊 Complex data analysis
- ⚖️ Decisions with trade-offs

## API Usage
\`\`\`python
message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=16000,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000
    },
    messages=[{
        "role": "user",
        "content": "Solve this complex optimization problem..."
    }]
)

# Display thinking process
for block in message.content:
    if block.type == "thinking":
        print("Thinking:", block.thinking)
    elif block.type == "text":
        print("Answer:", block.text)
\`\`\`

## Tips
1. **Set budget** - how many tokens for thinking
2. **Request thinking** - "think step by step"
3. **Review thinking** - you can see the thinking process
4. **Combine with structured output** - for precise results`
        }
      },
      {
        id: 'vision-capabilities',
        title: { he: 'ראייה ממוחשבת', en: 'Vision Capabilities' },
        description: { he: 'ניתוח תמונות, מסמכים, ומסכים', en: 'Analyzing images, documents, and screens' },
        duration: 25,
        content: {
          he: `# ראייה ממוחשבת (Vision)

## יכולות
Claude יכול לנתח ולהבין:
- 📸 תמונות
- 📄 מסמכי PDF
- 📊 גרפים ותרשימים
- 🖥️ צילומי מסך
- 📝 כתב יד
- 🗺️ מפות ודיאגרמות

## דוגמאות שימוש

### ניתוח צילום מסך
\`\`\`
"הנה צילום מסך של השגיאה שלי. מה הבעיה?"
\`\`\`

### עיצוב מתמונה
\`\`\`
"הנה mockup של הדף. בנה את ה-HTML/CSS שלו"
\`\`\`

### ניתוח גרף
\`\`\`
"מה המגמות בגרף הזה? סכם את הנקודות העיקריות"
\`\`\`

## ב-API
\`\`\`python
import base64

with open("image.png", "rb") as f:
    image_data = base64.standard_b64encode(f.read()).decode("utf-8")

message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": [
            {
                "type": "image",
                "source": {
                    "type": "base64",
                    "media_type": "image/png",
                    "data": image_data
                }
            },
            {
                "type": "text",
                "text": "Describe what you see in this image"
            }
        ]
    }]
)
\`\`\`

## מגבלות
- לא תמיד מדויק בטקסט קטן
- לא מזהה פנים של אנשים ספציפיים
- מוגבל לפורמטים נפוצים (PNG, JPEG, GIF, WebP)`,
          en: `# Vision Capabilities

## Capabilities
Claude can analyze and understand:
- 📸 Images
- 📄 PDF documents
- 📊 Charts and graphs
- 🖥️ Screenshots
- 📝 Handwriting
- 🗺️ Maps and diagrams

## Usage Examples

### Screenshot Analysis
\`\`\`
"Here's a screenshot of my error. What's the problem?"
\`\`\`

### Design from Image
\`\`\`
"Here's a mockup of the page. Build the HTML/CSS for it"
\`\`\`

### Chart Analysis
\`\`\`
"What are the trends in this graph? Summarize the key points"
\`\`\`

## In API
\`\`\`python
import base64

with open("image.png", "rb") as f:
    image_data = base64.standard_b64encode(f.read()).decode("utf-8")

message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": [
            {
                "type": "image",
                "source": {
                    "type": "base64",
                    "media_type": "image/png",
                    "data": image_data
                }
            },
            {
                "type": "text",
                "text": "Describe what you see in this image"
            }
        ]
    }]
)
\`\`\`

## Limitations
- Not always accurate with small text
- Doesn't identify specific people's faces
- Limited to common formats (PNG, JPEG, GIF, WebP)`
        }
      },
      {
        id: 'agent-sdk',
        title: { he: 'Agent SDK', en: 'Agent SDK' },
        description: { he: 'בניית סוכנים אוטונומיים עם Claude', en: 'Building autonomous agents with Claude' },
        duration: 35,
        content: {
          he: `# Claude Agent SDK

## מה זה?
ה-Agent SDK מאפשר לבנות סוכנים אוטונומיים שמשתמשים ב-Claude כ"מוח".

## התקנה
\`\`\`bash
pip install claude-agent-sdk
\`\`\`

## דוגמה בסיסית
\`\`\`python
from claude_agent_sdk import Agent, Tool

# הגדרת כלים
@Tool
def search_database(query: str) -> str:
    """Search the company database"""
    # ... implementation
    return results

# יצירת סוכן
agent = Agent(
    model="claude-sonnet-4-6",
    tools=[search_database],
    system_prompt="You are a helpful data analyst"
)

# הפעלה
result = agent.run("Find all customers who signed up last month")
print(result)
\`\`\`

## Multi-Agent Systems
\`\`\`python
researcher = Agent(
    model="claude-sonnet-4-6",
    tools=[web_search, read_paper],
    system_prompt="You are a research agent"
)

writer = Agent(
    model="claude-sonnet-4-6",
    tools=[write_doc],
    system_prompt="You are a technical writer"
)

# Orchestration
research = researcher.run("Research latest AI trends")
report = writer.run(f"Write a report based on: {research}")
\`\`\`

## שימושים
- 🤖 אוטומציה של תהליכים עסקיים
- 📊 ניתוח נתונים אוטומטי
- 🔄 CI/CD pipelines חכמים
- 📧 ניהול מיילים אוטומטי
- 🔍 מחקר אוטומטי`,
          en: `# Claude Agent SDK

## What is it?
The Agent SDK enables building autonomous agents that use Claude as their "brain".

## Installation
\`\`\`bash
pip install claude-agent-sdk
\`\`\`

## Basic Example
\`\`\`python
from claude_agent_sdk import Agent, Tool

# Define tools
@Tool
def search_database(query: str) -> str:
    """Search the company database"""
    # ... implementation
    return results

# Create agent
agent = Agent(
    model="claude-sonnet-4-6",
    tools=[search_database],
    system_prompt="You are a helpful data analyst"
)

# Run
result = agent.run("Find all customers who signed up last month")
print(result)
\`\`\`

## Multi-Agent Systems
\`\`\`python
researcher = Agent(
    model="claude-sonnet-4-6",
    tools=[web_search, read_paper],
    system_prompt="You are a research agent"
)

writer = Agent(
    model="claude-sonnet-4-6",
    tools=[write_doc],
    system_prompt="You are a technical writer"
)

# Orchestration
research = researcher.run("Research latest AI trends")
report = writer.run(f"Write a report based on: {research}")
\`\`\`

## Use Cases
- 🤖 Business process automation
- 📊 Automated data analysis
- 🔄 Smart CI/CD pipelines
- 📧 Automated email management
- 🔍 Automated research`
        }
      },
      {
        id: 'security-best-practices',
        title: { he: 'אבטחה ובטיחות', en: 'Security & Safety' },
        description: { he: 'שיטות עבודה בטוחות עם Claude', en: 'Safe working practices with Claude' },
        duration: 30,
        content: {
          he: `# אבטחה ובטיחות

## עקרונות יסוד

### 1. אל תשתפו סודות
- ❌ אל תדביקו API keys בצ'אט
- ❌ אל תשתפו סיסמאות
- ❌ אל תעלו קבצי .env
- ✅ השתמשו במשתני סביבה
- ✅ השתמשו ב-vault לסודות

### 2. בדקו את הפלט
- ✅ תמיד בדקו קוד שClaude כתב
- ✅ הריצו בדיקות לפני deploy
- ✅ בצעו code review
- ✅ שימו לב ל-OWASP Top 10

### 3. הרשאות Claude Code
\`\`\`json
// הגדרות הרשאות
{
  "permissions": {
    "allow": ["Read", "Edit", "Glob", "Grep"],
    "deny": ["Bash(rm -rf)", "Write(.env)"]
  }
}
\`\`\`

### 4. Prompt Injection
היזהרו מ-prompt injection:
- 🔴 אל תאפשרו קלט משתמש ישירות לפרומפט
- ✅ סננו וולידו קלט
- ✅ השתמשו ב-system prompts חזקים

## OWASP Top 10 ב-AI
1. **Prompt Injection** - הזרקת הנחיות
2. **Data Leakage** - דליפת מידע
3. **Insecure Output** - פלט לא מאובטח
4. **Model Denial of Service** - עומס על המודל
5. **Supply Chain** - תלויות לא מאובטחות

## Checklist אבטחה
- [ ] API keys מוגנים
- [ ] הרשאות מוגדרות ב-Claude Code
- [ ] אין סודות בקוד
- [ ] קלט מסונן
- [ ] פלט מבוקר
- [ ] בדיקות אבטחה בCI`,
          en: `# Security & Safety

## Core Principles

### 1. Don't Share Secrets
- ❌ Don't paste API keys in chat
- ❌ Don't share passwords
- ❌ Don't upload .env files
- ✅ Use environment variables
- ✅ Use a vault for secrets

### 2. Verify Output
- ✅ Always review code Claude wrote
- ✅ Run tests before deploy
- ✅ Do code review
- ✅ Watch for OWASP Top 10

### 3. Claude Code Permissions
\`\`\`json
// Permission settings
{
  "permissions": {
    "allow": ["Read", "Edit", "Glob", "Grep"],
    "deny": ["Bash(rm -rf)", "Write(.env)"]
  }
}
\`\`\`

### 4. Prompt Injection
Beware of prompt injection:
- 🔴 Don't allow user input directly into prompts
- ✅ Filter and validate input
- ✅ Use strong system prompts

## OWASP Top 10 for AI
1. **Prompt Injection** - Injecting instructions
2. **Data Leakage** - Information leaks
3. **Insecure Output** - Unsecured output
4. **Model Denial of Service** - Model overload
5. **Supply Chain** - Unsecured dependencies

## Security Checklist
- [ ] API keys protected
- [ ] Permissions configured in Claude Code
- [ ] No secrets in code
- [ ] Input filtered
- [ ] Output controlled
- [ ] Security tests in CI`
        }
      },
      {
        id: 'automation-recipes',
        title: { he: 'מתכוני אוטומציה', en: 'Automation Recipes' },
        description: { he: 'תבניות מוכנות לאוטומציות נפוצות', en: 'Ready templates for common automations' },
        duration: 35,
        content: {
          he: `# מתכוני אוטומציה

## 1. Code Review אוטומטי
\`\`\`bash
#!/bin/bash
# review.sh - סקירת קוד אוטומטית
git diff HEAD~1 | claude -p "Review this diff for:
1. Bugs
2. Security issues
3. Performance problems
4. Best practice violations
Output as JSON with severity levels."
\`\`\`

## 2. תיעוד אוטומטי
\`\`\`bash
claude -p "Read all files in src/ and generate:
1. API documentation
2. Component tree
3. Data flow diagram (mermaid)
Save to docs/"
\`\`\`

## 3. תרגום אוטומטי
\`\`\`bash
claude -p "Read src/i18n/en.json and create
Hebrew translation at src/i18n/he.json.
Keep the same structure and keys."
\`\`\`

## 4. Migration Generator
\`\`\`bash
claude -p "Analyze the current database schema in prisma/schema.prisma.
I need to add a 'tags' field to the Post model.
Generate the migration SQL and update the schema."
\`\`\`

## 5. Test Generator
\`\`\`bash
claude -p "Read src/utils/helpers.ts and generate
comprehensive unit tests using Jest.
Cover edge cases and error scenarios.
Save to src/utils/__tests__/helpers.test.ts"
\`\`\`

## 6. Changelog Generator
\`\`\`bash
git log --oneline v1.0..HEAD | claude -p "Generate a
professional CHANGELOG.md entry from these commits.
Group by: Features, Fixes, Breaking Changes."
\`\`\`

## 7. Dependency Audit
\`\`\`bash
npm audit --json | claude -p "Analyze these security
vulnerabilities and recommend fixes for each one.
Prioritize by severity."
\`\`\``,
          en: `# Automation Recipes

## 1. Automated Code Review
\`\`\`bash
#!/bin/bash
# review.sh - Automated code review
git diff HEAD~1 | claude -p "Review this diff for:
1. Bugs
2. Security issues
3. Performance problems
4. Best practice violations
Output as JSON with severity levels."
\`\`\`

## 2. Auto Documentation
\`\`\`bash
claude -p "Read all files in src/ and generate:
1. API documentation
2. Component tree
3. Data flow diagram (mermaid)
Save to docs/"
\`\`\`

## 3. Auto Translation
\`\`\`bash
claude -p "Read src/i18n/en.json and create
Hebrew translation at src/i18n/he.json.
Keep the same structure and keys."
\`\`\`

## 4. Migration Generator
\`\`\`bash
claude -p "Analyze the current database schema in prisma/schema.prisma.
I need to add a 'tags' field to the Post model.
Generate the migration SQL and update the schema."
\`\`\`

## 5. Test Generator
\`\`\`bash
claude -p "Read src/utils/helpers.ts and generate
comprehensive unit tests using Jest.
Cover edge cases and error scenarios.
Save to src/utils/__tests__/helpers.test.ts"
\`\`\`

## 6. Changelog Generator
\`\`\`bash
git log --oneline v1.0..HEAD | claude -p "Generate a
professional CHANGELOG.md entry from these commits.
Group by: Features, Fixes, Breaking Changes."
\`\`\`

## 7. Dependency Audit
\`\`\`bash
npm audit --json | claude -p "Analyze these security
vulnerabilities and recommend fixes for each one.
Prioritize by severity."
\`\`\``
        }
      }
    ]
  },
  {
    id: 'account-and-api',
    title: { he: 'חשבון, תוכניות ושימוש ב-API', en: 'Account, Plans & API Usage' },
    description: {
      he: 'מדריך מקיף להבנת כל אפשרויות השימוש: חשבון אישי, Pro, Max, Team, Enterprise ו-API. מתי להשתמש במה ואיך.',
      en: 'Comprehensive guide to all usage options: personal account, Pro, Max, Team, Enterprise, and API. When to use what and how.'
    },
    icon: '🔑',
    level: 'beginner' as const,
    duration: 120,
    lessonsCount: 5,
    color: '#2ECC71',
    lessons: [
      {
        id: 'account-types',
        title: { he: 'סוגי חשבונות - מה ההבדל?', en: 'Account Types - What\'s the Difference?' },
        description: { he: 'הבנה מלאה של כל סוגי החשבונות והתוכניות', en: 'Full understanding of all account types and plans' },
        duration: 25,
        content: {
          he: `# סוגי חשבונות ב-Claude - מדריך מלא

## בואו נתחיל מההתחלה - מה זה בכלל "חשבון Claude"?

כשאתם רוצים להשתמש ב-Claude, יש לכם שתי דרכים עיקריות:

1. **חשבון אישי** (דרך claude.ai) - כמו להשתמש באפליקציה רגילה
2. **API** (דרך console.anthropic.com) - כמו לבנות עם לגו - אתם בונים מה שאתם רוצים

בואו נפרק את זה לפרטים:

---

## 🆓 חשבון חינמי (Free)

### מה מקבלים?
- גישה ל-**Claude Sonnet** (הדגם הבינוני)
- שיחות טקסט רגילות
- העלאת קבצים (PDF, תמונות)
- חלון הקשר של 200,000 tokens (בערך 150,000 מילים!)

### מגבלות
- **מספר הודעות מוגבל** - בערך 20-30 הודעות ביום (משתנה)
- **אין גישה ל-Opus** - הדגם החזק ביותר
- **אין Extended Thinking** - חשיבה מעמיקה
- **אין Claude Code** - הכלי למפתחים
- **אין Projects** - ארגון שיחות מתקדם

### למי מתאים?
✅ מי שרוצה לנסות את Claude בפעם הראשונה
✅ שימוש מזדמן - שאלה פה ושם
✅ סטודנטים שרוצים עזרה בשיעורי בית

### איך נרשמים?
1. היכנסו ל-**claude.ai**
2. לחצו **Sign up**
3. הירשמו עם Google, Apple, או מייל
4. מוכנים! אפשר להתחיל לשוחח

---

## ⭐ Pro ($20 לחודש)

### מה מקבלים מעבר לחינמי?
- **פי 5 יותר שימוש** - הרבה יותר הודעות ביום
- **גישה ל-Claude Opus** - הדגם הכי חכם
- **Extended Thinking** - Claude "חושב" לפני שעונה (תוצאות מדויקות יותר)
- **Claude Code** - שימוש מוגבל בכלי המפתחים
- **Projects** - ארגון שיחות עם הנחיות מותאמות
- **Artifacts** - יצירת קוד, HTML, ודיאגרמות בחלון נפרד
- **גישה מוקדמת** לתכונות חדשות

### מגבלות
- עדיין יש **מגבלת שימוש יומית** (אם כי גבוהה בהרבה)
- Claude Code מוגבל בכמות
- אין ניהול צוות

### למי מתאים?
✅ אנשים שמשתמשים ב-Claude כל יום
✅ מי שצריך תשובות מדויקות ומעמיקות
✅ מפתחים שרוצים לנסות Claude Code
✅ כותבים, חוקרים, ואנשי מקצוע

### איך משדרגים?
1. היכנסו ל-claude.ai
2. לחצו על שם המשתמש שלכם (למעלה)
3. בחרו **Upgrade to Pro**
4. הזינו פרטי תשלום
5. מיד מקבלים גישה לכל התכונות

---

## 🚀 Max (שתי רמות)

### Max 5x ($100 לחודש)
- **פי 5 יותר שימוש** מ-Pro
- **Claude Code** - שימוש מורחב
- **עדיפות בתור** - לא ממתינים כשיש עומס
- **גישה מוקדמת** לתכונות ומודלים חדשים

### Max 20x ($200 לחודש)
- **פי 20 יותר שימוש** מ-Pro!
- **Claude Code ללא הגבלה** (כמעט) - שימוש מורחב משמעותית
- אידיאלי למי ש**חי ב-Claude** כל היום
- **כולל** Claude Code, Integrations, Research מתקדם, וחיפוש גלובלי

### למי Max מתאים?
✅ מפתחים שעובדים עם Claude Code באופן יומיומי
✅ מי שמגיע למגבלת ה-Pro בקביעות
✅ פרילנסרים שClaude הוא הכלי המרכזי שלהם
✅ בחרו 5x אם אתם משתמשים כבדים, 20x אם Claude הוא הכלי המרכזי שלכם

---

## 👥 Team ($25 למשתמש לחודש)

### מה מקבלים?
- **כל מה שב-Pro** + ניהול צוות
- **Admin Console** - ניהול מרכזי של חברי הצוות
- **שיתוף Projects** - כל הצוות עובד על אותם פרויקטים
- **חיוב מרכזי** - חשבונית אחת לכל הצוות
- מינימום **2 משתמשים**

### למי מתאים?
✅ צוותים קטנים (2-50 אנשים)
✅ סטארטאפים שרוצים לעבוד ביחד עם Claude
✅ מחלקות בארגון

---

## 🏢 Enterprise (מחיר מותאם)

### מה מקבלים?
- **כל מה שב-Team** + אבטחה מוגברת
- **SSO** (Single Sign-On) - התחברות דרך מערכת הארגון
- **SCIM** - ניהול משתמשים אוטומטי
- **Audit Logs** - מעקב אחרי כל הפעילות
- **SLA מותאם** - התחייבות לזמני תגובה
- **שמירת נתונים מותאמת** - שליטה מלאה על המידע
- **מנהל חשבון ייעודי**

### למי מתאים?
✅ ארגונים גדולים (50+ עובדים)
✅ חברות עם דרישות אבטחה מחמירות
✅ ארגונים שצריכים תאימות לרגולציה

---

## 📊 טבלת השוואה מהירה

| תכונה | חינמי | Pro $20 | Max 5x $100 | Max 20x $200 | Team $25/user | Enterprise |
|--------|--------|---------|-------------|--------------|---------------|------------|
| Claude Sonnet | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Claude Opus | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Extended Thinking | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Claude Code | ❌ | מוגבל | מורחב | כמעט ללא הגבלה | מוגבל | מותאם |
| Projects | ❌ | ✅ | ✅ | ✅ | ✅ (משותף) | ✅ (משותף) |
| ניהול צוות | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| SSO | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Audit Logs | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |`,
          en: `# Claude Account Types - Complete Guide

## Let's Start from the Beginning - What is a "Claude Account"?

When you want to use Claude, there are two main paths:

1. **Personal Account** (via claude.ai) - like using a regular app
2. **API** (via console.anthropic.com) - like building with Lego - you build what you want

Let's break it down:

---

## 🆓 Free Account

### What do you get?
- Access to **Claude Sonnet** (the mid-tier model)
- Regular text conversations
- File uploads (PDF, images)
- Context window of 200,000 tokens (about 150,000 words!)

### Limitations
- **Limited messages** - about 20-30 messages per day (varies)
- **No access to Opus** - the most powerful model
- **No Extended Thinking** - deep reasoning
- **No Claude Code** - the developer tool
- **No Projects** - advanced conversation organization

### Who is it for?
✅ First-time Claude users
✅ Casual use - a question here and there
✅ Students wanting homework help

---

## ⭐ Pro ($20/month)

### What do you get beyond Free?
- **5x more usage** - many more daily messages
- **Access to Claude Opus** - the smartest model
- **Extended Thinking** - Claude "thinks" before answering (more accurate results)
- **Claude Code** - limited developer tool access
- **Projects** - organize conversations with custom instructions
- **Artifacts** - create code, HTML, and diagrams in a separate window
- **Early access** to new features

### Who is it for?
✅ Daily Claude users
✅ Those who need accurate and deep answers
✅ Developers wanting to try Claude Code
✅ Writers, researchers, and professionals

---

## 🚀 Max (Two Tiers)

### Max 5x ($100/month)
- **5x more usage** than Pro
- **Claude Code** - extended usage
- **Priority queue** - no waiting during peak times
- **Early access** to new features and models

### Max 20x ($200/month)
- **20x more usage** than Pro!
- **Claude Code unlimited** (nearly) - significantly extended usage
- Ideal for those who **live in Claude** all day
- **Includes** Claude Code, Integrations, advanced Research, and global web search

---

## 👥 Team ($25/user/month)

### What do you get?
- **Everything in Pro** + team management
- **Admin Console** - central team management
- **Shared Projects** - whole team works on same projects
- **Central billing** - one invoice for the whole team
- Minimum **2 users**

---

## 🏢 Enterprise (Custom pricing)

### What do you get?
- **Everything in Team** + enhanced security
- **SSO** (Single Sign-On)
- **SCIM** - automatic user management
- **Audit Logs** - track all activity
- **Custom SLA** - response time commitments
- **Custom data retention**
- **Dedicated account manager**

---

## 📊 Quick Comparison Table

| Feature | Free | Pro $20 | Max 5x $100 | Max 20x $200 | Team $25/user | Enterprise |
|---------|------|---------|-------------|--------------|---------------|------------|
| Claude Sonnet | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Claude Opus | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Extended Thinking | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Claude Code | ❌ | Limited | Extended | Nearly unlimited | Limited | Custom |
| Projects | ❌ | ✅ | ✅ | ✅ | ✅ (shared) | ✅ (shared) |
| Team Mgmt | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| SSO | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Audit Logs | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |`
        }
      },
      {
        id: 'account-vs-api',
        title: { he: 'חשבון רגיל מול API - מה ההבדל?', en: 'Account vs API - What\'s the Difference?' },
        description: { he: 'מתי להשתמש בחשבון ומתי ב-API? הסבר פשוט ומעשי', en: 'When to use an account and when an API? Simple practical explanation' },
        duration: 25,
        content: {
          he: `# חשבון רגיל מול API - מה ההבדל?

## בואו נסביר את זה בפשטות

דמיינו שClaude הוא מסעדה:

- **חשבון רגיל** (claude.ai) = לאכול במסעדה. מגיעים, יושבים, מזמינים מהתפריט. פשוט ונוח.
- **API** = להזמין את השף הביתה. אתם מחליטים מה לבשל, איך להגיש, לכמה אנשים. יותר עבודה, אבל יותר שליטה.

---

## 🖥️ חשבון רגיל (claude.ai / אפליקציה)

### מה זה?
אתם נכנסים לאתר claude.ai, כותבים הודעה, ומקבלים תשובה. זהו. פשוט.

### מתי להשתמש?
- ✅ **שיחות יומיומיות** - שאלות, עזרה בכתיבה, ניתוח
- ✅ **עבודה אישית** - כתיבת מסמכים, קוד, מחקר
- ✅ **ניסויים** - לנסות רעיונות חדשים עם Claude
- ✅ **Projects** - ארגון עבודה מתמשכת

### איך זה עובד?
1. נכנסים ל-claude.ai
2. כותבים הודעה
3. Claude עונה
4. ממשיכים שיחה
5. ההיסטוריה נשמרת

### תשלום
- **מנוי חודשי קבוע** ($0 / $20 / $100 / $200)
- לא משנה כמה משתמשים (עד המגבלה)
- פשוט ונוח

---

## 🔌 API (Application Programming Interface)

### מה זה?
API זה ממשק שמאפשר **לתוכנה שלכם** לדבר עם Claude. במקום שאתם כותבים בצ'אט, הקוד שלכם שולח בקשות ומקבל תשובות.

### מתי להשתמש?
- ✅ **בניית מוצר** - אפליקציה שמשתמשת ב-Claude
- ✅ **אוטומציה** - תהליכים אוטומטיים
- ✅ **עיבוד בכמויות** - ניתוח מאות מסמכים
- ✅ **אינטגרציה** - חיבור Claude למערכת קיימת
- ✅ **שליטה מלאה** - בחירת מודל, טמפרטורה, הגבלות

### איך זה עובד?
1. נרשמים ב-**console.anthropic.com**
2. יוצרים **API Key** (מפתח גישה)
3. מוסיפים **credits** (כסף לשימוש)
4. שולחים בקשות מהקוד שלכם:

\`\`\`python
import anthropic

client = anthropic.Anthropic(api_key="sk-ant-...")

response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "שלום! מה אתה יכול לעשות?"}
    ]
)

print(response.content[0].text)
\`\`\`

### תשלום
- **לפי שימוש בלבד** - כמו חשמל
- משלמים על כל **token** (יחידת טקסט)
- **Input tokens** - מה ששלחתם (זול יותר)
- **Output tokens** - מה שClaude ענה (יקר יותר)

### מחירון API

| מודל | Input (1M tokens) | Output (1M tokens) | עלות משוערת לשיחה |
|------|-------------------|---------------------|--------------------|
| Haiku 4.5 | $1 | $5 | ~$0.02 |
| Sonnet 4.6 | $3 | $15 | ~$0.05 |
| Opus 4.6 | $5 | $25 | ~$0.10 |

> 💡 **טיפ:** 1 מיליון tokens זה בערך 750,000 מילים - ספר שלם!

---

## 🆚 השוואה ישירה

| קריטריון | חשבון רגיל | API |
|-----------|------------|-----|
| **קושי** | קל מאוד | דורש ידע טכני |
| **תשלום** | מנוי קבוע | לפי שימוש |
| **גמישות** | ממשק קבוע | שליטה מלאה |
| **אוטומציה** | ידני | אוטומטי |
| **Artifacts** | ✅ | ❌ |
| **Projects** | ✅ | ❌ |
| **Tool Use** | ❌ | ✅ |
| **Streaming** | ✅ | ✅ |
| **Extended Thinking** | ✅ (Pro) | ✅ |
| **בניית מוצר** | ❌ | ✅ |

---

## 🎯 מה מתאים לי?

### אני רוצה פשוט לשוחח עם Claude
→ **חשבון רגיל** (חינמי או Pro)

### אני מפתח ורוצה Claude Code
→ **חשבון Pro** ($20) או **Max** ($100/$200)

### אני רוצה לבנות אפליקציה שמשתמשת ב-Claude
→ **API**

### אני רוצה אוטומציה של תהליכים
→ **API** או **Claude Code** (עם חשבון Pro/Max)

### אני מנהל צוות שצריך Claude
→ **Team** ($25/משתמש)

### הארגון שלי צריך Claude
→ **Enterprise** (פנו ל-Anthropic)`,
          en: `# Account vs API - What's the Difference?

## Let's Explain This Simply

Imagine Claude is a restaurant:

- **Regular Account** (claude.ai) = Eating at the restaurant. Arrive, sit down, order from the menu. Simple and convenient.
- **API** = Hiring the chef to cook at your home. You decide what to cook, how to serve, for how many people. More work, but more control.

---

## 🖥️ Regular Account (claude.ai / App)

### What is it?
You go to claude.ai, write a message, get an answer. That's it. Simple.

### When to use?
- ✅ **Daily conversations** - questions, writing help, analysis
- ✅ **Personal work** - writing documents, code, research
- ✅ **Experiments** - trying new ideas with Claude
- ✅ **Projects** - organizing ongoing work

### Payment
- **Fixed monthly subscription** ($0 / $20 / $100 / $200)
- No matter how much you use (up to the limit)

---

## 🔌 API (Application Programming Interface)

### What is it?
API is an interface that lets **your software** talk to Claude. Instead of you typing in a chat, your code sends requests and receives answers.

### When to use?
- ✅ **Building a product** - an app that uses Claude
- ✅ **Automation** - automated processes
- ✅ **Batch processing** - analyzing hundreds of documents
- ✅ **Integration** - connecting Claude to an existing system
- ✅ **Full control** - choosing model, temperature, limits

### Payment
- **Pay per use only** - like electricity
- Pay per **token** (text unit)
- **Input tokens** - what you sent (cheaper)
- **Output tokens** - what Claude answered (more expensive)

### API Pricing

| Model | Input (1M tokens) | Output (1M tokens) | Est. cost per chat |
|-------|-------------------|---------------------|--------------------|
| Haiku 4.5 | $1 | $5 | ~$0.02 |
| Sonnet 4.6 | $3 | $15 | ~$0.05 |
| Opus 4.6 | $5 | $25 | ~$0.10 |

> 💡 **Tip:** 1 million tokens is about 750,000 words - an entire book!

---

## 🎯 What's Right for Me?

### I just want to chat with Claude
→ **Regular Account** (Free or Pro)

### I'm a developer and want Claude Code
→ **Pro Account** ($20) or **Max** ($100/$200)

### I want to build an app that uses Claude
→ **API**

### I want process automation
→ **API** or **Claude Code** (with Pro/Max account)

### I manage a team that needs Claude
→ **Team** ($25/user)

### My organization needs Claude
→ **Enterprise** (contact Anthropic)`
        }
      },
      {
        id: 'api-getting-started',
        title: { he: 'התחלת עבודה עם ה-API', en: 'Getting Started with the API' },
        description: { he: 'מדריך צעד-אחר-צעד לשימוש ראשון ב-API', en: 'Step-by-step guide for first API usage' },
        duration: 30,
        content: {
          he: `# התחלת עבודה עם ה-API - מדריך צעד אחר צעד

## שלב 1: יצירת חשבון API

### 1.1 הרשמה
1. היכנסו ל-**console.anthropic.com**
2. לחצו **Sign Up**
3. מלאו פרטים ואימות מייל
4. זה חשבון **נפרד** מחשבון claude.ai!

### 1.2 יצירת API Key
1. בתפריט, לחצו **API Keys**
2. לחצו **Create Key**
3. תנו שם (למשל "my-first-key")
4. **שמרו את המפתח!** הוא מוצג רק פעם אחת

> ⚠️ **חשוב מאוד:** לעולם אל תשתפו את ה-API Key שלכם! אל תכניסו אותו לקוד שעולה ל-GitHub. השתמשו במשתני סביבה.

### 1.3 הוספת Credits
1. לחצו **Billing**
2. הוסיפו כרטיס אשראי
3. הוסיפו credits (מינימום $5)
4. הגדירו **Spending Limit** - מגבלת הוצאה חודשית

---

## שלב 2: התקנת SDK

### Python (הכי פופולרי)
\`\`\`bash
pip install anthropic
\`\`\`

### JavaScript / TypeScript
\`\`\`bash
npm install @anthropic-ai/sdk
\`\`\`

---

## שלב 3: הקוד הראשון

### Python
\`\`\`python
import anthropic
import os

# הגדירו את המפתח כמשתנה סביבה
# export ANTHROPIC_API_KEY="sk-ant-..."

client = anthropic.Anthropic()  # קורא אוטומטית מ-ANTHROPIC_API_KEY

# שליחת הודעה פשוטה
message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": "הסבר לי מה זה Python בשלוש משפטים פשוטים"
        }
    ]
)

# הדפסת התשובה
print(message.content[0].text)

# הדפסת מידע על השימוש
print(f"Tokens used: {message.usage.input_tokens} in, {message.usage.output_tokens} out")
\`\`\`

### JavaScript
\`\`\`javascript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const message = await client.messages.create({
  model: 'claude-sonnet-4-6',
  max_tokens: 1024,
  messages: [
    { role: 'user', content: 'Explain what JavaScript is in three simple sentences' }
  ]
});

console.log(message.content[0].text);
\`\`\`

---

## שלב 4: תכונות מתקדמות

### System Prompt - הגדרת אופי
\`\`\`python
message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    system="אתה מורה לתכנות מתחילים. הסבר הכל בפשטות עם דוגמאות.",
    messages=[
        {"role": "user", "content": "מה זה loop?"}
    ]
)
\`\`\`

### שיחה רב-תורנית
\`\`\`python
messages = [
    {"role": "user", "content": "שלום! אני רוצה ללמוד Python"},
    {"role": "assistant", "content": "שלום! נהדר! Python היא שפת תכנות מעולה להתחלה. ממה תרצה להתחיל?"},
    {"role": "user", "content": "מה ההבדל בין list ל-tuple?"}
]

message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=messages
)
\`\`\`

### Streaming - תשובה בזמן אמת
\`\`\`python
with client.messages.stream(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[{"role": "user", "content": "כתוב סיפור קצר"}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
\`\`\`

---

## 💡 טיפים חשובים

1. **התחילו עם Haiku** - זול ומהיר, מושלם ללמידה
2. **הגבילו max_tokens** - מונע תשובות ארוכות מדי ועלויות מיותרות
3. **שמרו API Key בסביבה** - לעולם לא בקוד
4. **עקבו אחרי עלויות** - בדקו ב-console.anthropic.com
5. **השתמשו ב-system prompt** - לתוצאות טובות יותר`,
          en: `# Getting Started with the API - Step by Step Guide

## Step 1: Create an API Account

### 1.1 Sign Up
1. Go to **console.anthropic.com**
2. Click **Sign Up**
3. Fill in details and verify email
4. This is a **separate** account from claude.ai!

### 1.2 Create an API Key
1. In the menu, click **API Keys**
2. Click **Create Key**
3. Give it a name (e.g., "my-first-key")
4. **Save the key!** It's shown only once

> ⚠️ **Very Important:** Never share your API Key! Don't put it in code that goes to GitHub. Use environment variables.

### 1.3 Add Credits
1. Click **Billing**
2. Add a credit card
3. Add credits (minimum $5)
4. Set a **Spending Limit** - monthly spending cap

---

## Step 2: Install SDK

### Python (most popular)
\`\`\`bash
pip install anthropic
\`\`\`

### JavaScript / TypeScript
\`\`\`bash
npm install @anthropic-ai/sdk
\`\`\`

---

## Step 3: First Code

### Python
\`\`\`python
import anthropic

client = anthropic.Anthropic()  # reads from ANTHROPIC_API_KEY automatically

message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Explain Python in three simple sentences"}
    ]
)

print(message.content[0].text)
print(f"Tokens used: {message.usage.input_tokens} in, {message.usage.output_tokens} out")
\`\`\`

---

## Step 4: Advanced Features

### System Prompt
\`\`\`python
message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    system="You are a beginner programming teacher. Explain everything simply with examples.",
    messages=[{"role": "user", "content": "What is a loop?"}]
)
\`\`\`

### Multi-turn Conversation
\`\`\`python
messages = [
    {"role": "user", "content": "Hi! I want to learn Python"},
    {"role": "assistant", "content": "Hi! Great! Python is an excellent language to start with. What would you like to begin with?"},
    {"role": "user", "content": "What's the difference between list and tuple?"}
]

message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=messages
)
\`\`\`

### Streaming - Real-time Response
\`\`\`python
with client.messages.stream(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Write a short story"}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
\`\`\`

---

## 💡 Important Tips

1. **Start with Haiku** - cheap and fast, perfect for learning
2. **Limit max_tokens** - prevents overly long responses and unnecessary costs
3. **Store API Key in environment** - never in code
4. **Track costs** - check at console.anthropic.com
5. **Use system prompts** - for better results`
        }
      },
      {
        id: 'claude-code-auth',
        title: { he: 'Claude Code - חשבון או API?', en: 'Claude Code - Account or API?' },
        description: { he: 'איך Claude Code עובד עם חשבון Pro/Max מול API credits', en: 'How Claude Code works with Pro/Max account vs API credits' },
        duration: 20,
        content: {
          he: `# Claude Code - חשבון או API?

## שתי דרכים להפעיל את Claude Code

Claude Code יכול לעבוד בשתי דרכים:

### 1. דרך חשבון Pro/Max (מומלץ למתחילים)

**איך זה עובד:**
- מתחברים עם חשבון claude.ai שלכם
- Claude Code שואל "Login with Claude account?"
- לוחצים Yes ומתחברים דרך הדפדפן
- השימוש כלול במנוי שלכם

**יתרונות:**
- ✅ פשוט - לא צריך API key
- ✅ מנוי קבוע - אין הפתעות בחיוב
- ✅ Pro ($20) כולל שימוש בסיסי ב-Claude Code
- ✅ Max ($100/$200) כולל שימוש מורחב

**חסרונות:**
- ❌ יש מגבלת שימוש (במיוחד ב-Pro)
- ❌ עלול להיתקע באמצע משימה ארוכה

### 2. דרך API Credits

**איך זה עובד:**
- מגדירים API Key כמשתנה סביבה
- Claude Code משתמש ב-credits שלכם
- משלמים לפי שימוש בפועל

\`\`\`bash
# הגדרת API Key
export ANTHROPIC_API_KEY="sk-ant-api03-..."

# הפעלת Claude Code
claude
\`\`\`

**יתרונות:**
- ✅ אין מגבלת שימוש (כל עוד יש credits)
- ✅ משלמים רק על מה שצריכים
- ✅ מתאים לעבודה אינטנסיבית

**חסרונות:**
- ❌ יכול להיות יקר (Opus עולה $5/$25 per 1M tokens)
- ❌ צריך לעקוב אחרי עלויות
- ❌ דורש הגדרת API key

---

## 💰 כמה עולה Claude Code בפועל?

### שימוש טיפוסי ביום עבודה

| פעולה | Tokens בערך | עלות (Sonnet) | עלות (Opus) |
|--------|-------------|---------------|-------------|
| שאלה קצרה | ~1,000 | $0.003 | $0.015 |
| עריכת קובץ | ~5,000 | $0.02 | $0.08 |
| סקירת קוד | ~10,000 | $0.05 | $0.15 |
| בניית פיצ'ר שלם | ~50,000 | $0.20 | $0.75 |
| **יום עבודה שלם** | ~200,000 | **$0.80** | **$3.00** |

### המלצות

- **מתחילים:** Pro plan ($20/חודש) - מספיק לרוב השימושים
- **משתמשים כבדים:** Max plan ($100-$200/חודש) - שימוש כמעט ללא הגבלה
- **צוותים גדולים:** API credits - שליטה מלאה בעלויות
- **פרויקטים גדולים:** API credits עם Sonnet (חסכוני) + Opus (למשימות קריטיות)

---

## 🔧 בחירת מודל ב-Claude Code

Claude Code מאפשר לבחור מודל:
\`\`\`bash
# שימוש ב-Sonnet (ברירת מחדל - מהיר וחסכוני)
claude --model claude-sonnet-4-6

# שימוש ב-Opus (חזק יותר, יקר יותר)
claude --model claude-opus-4-6

# החלפת מודל באמצע שיחה
/model
\`\`\`

### מתי להשתמש באיזה מודל?

**Sonnet 4.6 (ברירת מחדל):**
- עריכת קבצים בודדים
- שאלות ותשובות
- commits ו-PRs
- רוב העבודה היומיומית

**Opus 4.6 (למשימות מורכבות):**
- ארכיטקטורה ותכנון
- refactoring מורכב של כל הפרויקט
- debugging קשה
- כתיבת אלגוריתמים מורכבים`,
          en: `# Claude Code - Account or API?

## Two Ways to Power Claude Code

Claude Code can work in two ways:

### 1. Via Pro/Max Account (Recommended for beginners)

**How it works:**
- Connect with your claude.ai account
- Claude Code asks "Login with Claude account?"
- Click Yes and authenticate through browser
- Usage is included in your subscription

**Pros:**
- ✅ Simple - no API key needed
- ✅ Fixed subscription - no billing surprises
- ✅ Pro ($20) includes basic Claude Code usage
- ✅ Max ($100/$200) includes extended usage

**Cons:**
- ❌ Usage limits (especially on Pro)
- ❌ May hit limits during long tasks

### 2. Via API Credits

**How it works:**
- Set API Key as environment variable
- Claude Code uses your credits
- Pay only for actual usage

\`\`\`bash
export ANTHROPIC_API_KEY="sk-ant-api03-..."
claude
\`\`\`

**Pros:**
- ✅ No usage limits (as long as you have credits)
- ✅ Pay only for what you need
- ✅ Suitable for intensive work

**Cons:**
- ❌ Can be expensive (Opus costs $5/$25 per 1M tokens)
- ❌ Need to track costs
- ❌ Requires API key setup

---

## 💰 How Much Does Claude Code Actually Cost?

### Typical Workday Usage

| Action | ~Tokens | Cost (Sonnet) | Cost (Opus) |
|--------|---------|---------------|-------------|
| Short question | ~1,000 | $0.003 | $0.015 |
| File edit | ~5,000 | $0.02 | $0.08 |
| Code review | ~10,000 | $0.05 | $0.15 |
| Full feature | ~50,000 | $0.20 | $0.75 |
| **Full workday** | ~200,000 | **$0.80** | **$3.00** |

---

## 🔧 Choosing a Model in Claude Code

\`\`\`bash
# Sonnet (default - fast and economical)
claude --model claude-sonnet-4-6

# Opus (more powerful, more expensive)
claude --model claude-opus-4-6

# Switch model mid-conversation
/model
\`\`\`

### When to use which model?

**Sonnet 4.6 (default):**
- Single file edits
- Q&A
- Commits and PRs
- Most daily work

**Opus 4.6 (for complex tasks):**
- Architecture and planning
- Complex full-project refactoring
- Difficult debugging
- Complex algorithm writing`
        }
      },
      {
        id: 'cost-optimization',
        title: { he: 'אופטימיזציה של עלויות', en: 'Cost Optimization' },
        description: { he: 'טיפים לחיסכון בעלויות שימוש ב-Claude', en: 'Tips for saving on Claude usage costs' },
        duration: 20,
        content: {
          he: `# אופטימיזציה של עלויות

## 7 טיפים לחיסכון

### 1. בחרו את המודל הנכון
לא כל משימה דורשת את המודל הכי חזק!

| משימה | מודל מומלץ | עלות יחסית |
|--------|------------|-------------|
| שאלות פשוטות | Haiku | 💲 |
| עבודה יומיומית | Sonnet | 💲💲 |
| משימות מורכבות | Opus | 💲💲💲💲 |

### 2. כתבו פרומפטים יעילים
- **היו ספציפיים** - פחות אי-הבנות = פחות ניסיונות
- **תנו הקשר** - Claude לא צריך "לנחש"
- **הגבילו אורך** - "ענה בקצרה" או "עד 100 מילים"

### 3. השתמשו ב-System Prompts
System prompt נשלח פעם אחת ונשאר לכל השיחה:
\`\`\`
system: "ענה תמיד בקצרה ובנקודה. אל תחזור על השאלה."
\`\`\`
זה חוסך tokens בכל תשובה!

### 4. נהלו את חלון ההקשר
- **התחילו שיחה חדשה** כשהנושא משתנה
- **השתמשו ב-/compact** ב-Claude Code לדחיסת ההקשר
- **אל תשלחו קבצים מיותרים**

### 5. Cache בAPI
Anthropic תומך ב-**Prompt Caching**:
\`\`\`python
# שימוש ב-cache_control לחיסכון
messages=[{
    "role": "user",
    "content": [
        {
            "type": "text",
            "text": long_document,
            "cache_control": {"type": "ephemeral"}
        },
        {
            "type": "text",
            "text": "סכם את המסמך"
        }
    ]
}]
\`\`\`
Cache מוזיל את עלות ה-input ב-90%!

### 6. Batch API לעיבוד כמויות
במקום לשלוח בקשה אחת אחרי השנייה:
\`\`\`python
# Batch API - 50% הנחה!
batch = client.messages.batches.create(
    requests=[
        {"custom_id": "1", "params": {...}},
        {"custom_id": "2", "params": {...}},
        # עד 10,000 בקשות!
    ]
)
\`\`\`
Batch API נותן **50% הנחה** על כל הבקשות!

### 7. הגדירו Spending Limits
ב-console.anthropic.com:
1. **Billing → Spending Limit**
2. הגדירו מגבלה חודשית
3. קבלו התראות כשמתקרבים

---

## 📊 תרחיש עלויות לדוגמה

### מפתח בודד (שימוש יומי)
- **Pro Plan:** $20/חודש - מספיק לרוב
- **API (Sonnet):** $15-25/חודש
- **API (Opus):** $50-100/חודש

### צוות של 5 מפתחים
- **Team Plan:** $125/חודש (5 × $25)
- **API (Sonnet):** $75-125/חודש
- **API מעורב:** $100-200/חודש

### סטארטאפ (שימוש אינטנסיבי)
- **API + Batch:** $200-500/חודש
- **API + Cache:** חיסכון של 40-60%`,
          en: `# Cost Optimization

## 7 Tips for Saving

### 1. Choose the Right Model
Not every task needs the most powerful model!

| Task | Recommended Model | Relative Cost |
|------|-------------------|---------------|
| Simple questions | Haiku | 💲 |
| Daily work | Sonnet | 💲💲 |
| Complex tasks | Opus | 💲💲💲💲 |

### 2. Write Efficient Prompts
- **Be specific** - fewer misunderstandings = fewer retries
- **Give context** - Claude doesn't need to "guess"
- **Limit length** - "answer briefly" or "up to 100 words"

### 3. Use System Prompts
System prompt is sent once and persists for the whole conversation:
\`\`\`
system: "Always answer briefly and to the point. Don't repeat the question."
\`\`\`

### 4. Manage the Context Window
- **Start a new conversation** when the topic changes
- **Use /compact** in Claude Code to compress context
- **Don't send unnecessary files**

### 5. API Caching
Anthropic supports **Prompt Caching**:
\`\`\`python
messages=[{
    "role": "user",
    "content": [
        {
            "type": "text",
            "text": long_document,
            "cache_control": {"type": "ephemeral"}
        },
        {"type": "text", "text": "Summarize the document"}
    ]
}]
\`\`\`
Cache reduces input cost by 90%!

### 6. Batch API for Volume Processing
\`\`\`python
batch = client.messages.batches.create(
    requests=[
        {"custom_id": "1", "params": {...}},
        {"custom_id": "2", "params": {...}},
    ]
)
\`\`\`
Batch API gives **50% discount** on all requests!

### 7. Set Spending Limits
At console.anthropic.com:
1. **Billing → Spending Limit**
2. Set a monthly limit
3. Get alerts when approaching`
        }
      }
    ]
  }
];

export const useCasesData = [
  {
    id: 'developers',
    icon: '👨‍💻',
    title: { he: 'מפתחים', en: 'Developers' },
    description: { he: 'קידוד, debugging, code review, ארכיטקטורה', en: 'Coding, debugging, code review, architecture' },
    color: '#E07A2F',
    examples: [
      { he: 'כתיבת קוד חדש ו-refactoring', en: 'Writing new code and refactoring' },
      { he: 'Debug ופתרון שגיאות', en: 'Debug and error resolution' },
      { he: 'בניית APIs ומערכות backend', en: 'Building APIs and backend systems' },
      { he: 'אוטומציה עם CI/CD', en: 'Automation with CI/CD' },
      { he: 'Code review ותיעוד', en: 'Code review and documentation' },
    ]
  },
  {
    id: 'data-scientists',
    icon: '📊',
    title: { he: 'מדעני נתונים', en: 'Data Scientists' },
    description: { he: 'ניתוח נתונים, ML, ויזואליזציה', en: 'Data analysis, ML, visualization' },
    color: '#4A90D9',
    examples: [
      { he: 'ניתוח דאטאסטים גדולים', en: 'Analyzing large datasets' },
      { he: 'כתיבת קוד Python/R לניתוח', en: 'Writing Python/R analysis code' },
      { he: 'בניית מודלים סטטיסטיים', en: 'Building statistical models' },
      { he: 'יצירת ויזואליזציות', en: 'Creating visualizations' },
      { he: 'פירוש תוצאות ודוחות', en: 'Interpreting results and reports' },
    ]
  },
  {
    id: 'writers',
    icon: '✍️',
    title: { he: 'כותבים ויוצרים', en: 'Writers & Creators' },
    description: { he: 'כתיבה יצירתית, תוכן שיווקי, עריכה', en: 'Creative writing, marketing content, editing' },
    color: '#27AE60',
    examples: [
      { he: 'כתיבת מאמרים ובלוגים', en: 'Writing articles and blogs' },
      { he: 'עריכה ושיפור טקסטים', en: 'Editing and improving texts' },
      { he: 'תוכן לרשתות חברתיות', en: 'Social media content' },
      { he: 'תסריטים וסיפורים', en: 'Scripts and stories' },
      { he: 'תרגום ולוקליזציה', en: 'Translation and localization' },
    ]
  },
  {
    id: 'marketers',
    icon: '📢',
    title: { he: 'משווקים', en: 'Marketers' },
    description: { he: 'אסטרטגיה שיווקית, קופי, ניתוח', en: 'Marketing strategy, copy, analysis' },
    color: '#E74C3C',
    examples: [
      { he: 'כתיבת קופי פרסומי', en: 'Writing ad copy' },
      { he: 'ניתוח מתחרים', en: 'Competitor analysis' },
      { he: 'תכנון קמפיינים', en: 'Campaign planning' },
      { he: 'SEO ואופטימיזציה', en: 'SEO and optimization' },
      { he: 'ניתוח ביצועים', en: 'Performance analysis' },
    ]
  },
  {
    id: 'educators',
    icon: '🎓',
    title: { he: 'מחנכים ומורים', en: 'Educators & Teachers' },
    description: { he: 'יצירת חומרי לימוד, מבחנים, מצגות', en: 'Creating study materials, tests, presentations' },
    color: '#9B59B6',
    examples: [
      { he: 'יצירת תוכניות לימודים', en: 'Creating curricula' },
      { he: 'כתיבת מבחנים ושאלונים', en: 'Writing tests and quizzes' },
      { he: 'הסברים מותאמים לרמה', en: 'Level-adapted explanations' },
      { he: 'יצירת חומרי הוראה', en: 'Creating teaching materials' },
      { he: 'משוב על עבודות תלמידים', en: 'Feedback on student work' },
    ]
  },
  {
    id: 'researchers',
    icon: '🔬',
    title: { he: 'חוקרים', en: 'Researchers' },
    description: { he: 'סקירת ספרות, ניתוח, כתיבה אקדמית', en: 'Literature review, analysis, academic writing' },
    color: '#1ABC9C',
    examples: [
      { he: 'סקירת ספרות מדעית', en: 'Scientific literature review' },
      { he: 'ניתוח תוצאות מחקר', en: 'Research results analysis' },
      { he: 'כתיבת מאמרים אקדמיים', en: 'Academic paper writing' },
      { he: 'סיכום מחקרים', en: 'Research summarization' },
      { he: 'יצירת מצגות מדעיות', en: 'Creating scientific presentations' },
    ]
  },
  {
    id: 'medical',
    icon: '⚕️',
    title: { he: 'רפואה ובריאות', en: 'Healthcare & Medical' },
    description: { he: 'תיעוד רפואי, מחקר, חינוך מטופלים', en: 'Medical documentation, research, patient education' },
    color: '#E67E22',
    examples: [
      { he: 'תיעוד רפואי וסיכומים', en: 'Medical documentation and summaries' },
      { he: 'חיפוש מחקרים רלוונטיים', en: 'Searching relevant research' },
      { he: 'הסבר למטופלים', en: 'Patient explanations' },
      { he: 'ניתוח תוצאות בדיקות', en: 'Test results analysis' },
      { he: 'עזרה בפרוטוקולים', en: 'Help with protocols' },
    ]
  },
  {
    id: 'business',
    icon: '💼',
    title: { he: 'עסקים וניהול', en: 'Business & Management' },
    description: { he: 'אסטרטגיה, דוחות, ניתוח שוק', en: 'Strategy, reports, market analysis' },
    color: '#34495E',
    examples: [
      { he: 'כתיבת תוכניות עסקיות', en: 'Writing business plans' },
      { he: 'ניתוח שוק ומתחרים', en: 'Market and competitor analysis' },
      { he: 'יצירת דוחות ומצגות', en: 'Creating reports and presentations' },
      { he: 'אוטומציה של תהליכים', en: 'Process automation' },
      { he: 'ניתוח פיננסי', en: 'Financial analysis' },
    ]
  },
  {
    id: 'legal',
    icon: '⚖️',
    title: { he: 'משפטים', en: 'Legal' },
    description: { he: 'ניתוח חוזים, מחקר משפטי, כתיבת מסמכים', en: 'Contract analysis, legal research, document writing' },
    color: '#2C3E50',
    examples: [
      { he: 'ניתוח חוזים והסכמים', en: 'Contract and agreement analysis' },
      { he: 'מחקר פסיקה ותקדימים', en: 'Case law research' },
      { he: 'כתיבת מסמכים משפטיים', en: 'Legal document writing' },
      { he: 'סיכום דינים ותקנות', en: 'Summarizing laws and regulations' },
      { he: 'תרגום משפטי', en: 'Legal translation' },
    ]
  },
  {
    id: 'designers',
    icon: '🎨',
    title: { he: 'מעצבים', en: 'Designers' },
    description: { he: 'UI/UX, CSS, SVG, אנימציות', en: 'UI/UX, CSS, SVG, animations' },
    color: '#E91E63',
    examples: [
      { he: 'יצירת CSS מורכב', en: 'Creating complex CSS' },
      { he: 'עיצוב SVG ואיקונים', en: 'SVG and icon design' },
      { he: 'אנימציות ואפקטים', en: 'Animations and effects' },
      { he: 'בניית design systems', en: 'Building design systems' },
      { he: 'ביקורת UI/UX', en: 'UI/UX critique' },
    ]
  },
];

export const blogPosts = [
  {
    id: 'claude-4-5-release',
    title: { he: 'Claude 4.5/4.6 - מה חדש?', en: 'Claude 4.5/4.6 - What\'s New?' },
    category: 'updates',
    date: '2025-03-15',
    readTime: 5,
    excerpt: {
      he: 'סקירת כל החידושים בגרסאות האחרונות של Claude, כולל שיפורים בקוד, ראייה, ו-Extended Thinking.',
      en: 'Overview of all innovations in the latest Claude versions, including improvements in code, vision, and Extended Thinking.'
    }
  },
  {
    id: 'mcp-revolution',
    title: { he: 'מהפכת MCP - חיבור Claude לעולם', en: 'The MCP Revolution - Connecting Claude to the World' },
    category: 'updates',
    date: '2025-02-20',
    readTime: 7,
    excerpt: {
      he: 'Model Context Protocol משנה את הדרך שבה AI מתקשר עם כלים חיצוניים. למדו איך להשתמש בו.',
      en: 'Model Context Protocol changes how AI communicates with external tools. Learn how to use it.'
    }
  },
  {
    id: 'five-min-automation',
    title: { he: '💡 אוטומציה ב-5 דקות: תרגום אתר שלם', en: '💡 5-Min Automation: Translate an Entire Website' },
    category: 'five-min',
    date: '2025-03-10',
    readTime: 5,
    excerpt: {
      he: 'איך לתרגם אתר שלם לעברית עם Claude Code ב-5 דקות בלבד.',
      en: 'How to translate an entire website to Hebrew with Claude Code in just 5 minutes.'
    }
  },
  {
    id: 'five-min-testing',
    title: { he: '💡 בדיקות ב-5 דקות: כיסוי מלא לפרויקט', en: '💡 5-Min Testing: Full Coverage for a Project' },
    category: 'five-min',
    date: '2025-03-05',
    readTime: 5,
    excerpt: {
      he: 'צרו test suite מלא לפרויקט Node.js עם Claude Code ב-5 דקות.',
      en: 'Create a full test suite for a Node.js project with Claude Code in 5 minutes.'
    }
  },
  {
    id: 'tip-system-prompts',
    title: { he: '🎯 System Prompts שעובדים', en: '🎯 System Prompts That Work' },
    category: 'tips',
    date: '2025-03-12',
    readTime: 3,
    excerpt: {
      he: '5 תבניות system prompt שישפרו דרמטית את התוצאות שלכם.',
      en: '5 system prompt templates that will dramatically improve your results.'
    }
  },
  {
    id: 'tip-context-management',
    title: { he: '🎯 ניהול הקשר - הטיפ שישנה לכם הכל', en: '🎯 Context Management - The Tip That Changes Everything' },
    category: 'tips',
    date: '2025-03-08',
    readTime: 3,
    excerpt: {
      he: 'איך לנהל את חלון ההקשר של Claude ולמנוע "שכחה" באמצע שיחה.',
      en: 'How to manage Claude\'s context window and prevent "forgetting" mid-conversation.'
    }
  },
];

export const bonusLessons = [
  {
    id: 'bonus-regex',
    title: { he: 'Regex עם Claude', en: 'Regex with Claude' },
    description: { he: 'למדו ליצור ביטויים רגולריים מורכבים בקלות', en: 'Learn to create complex regular expressions easily' },
    duration: 20,
    level: 'intermediate' as const,
    icon: '🔤',
  },
  {
    id: 'bonus-sql',
    title: { he: 'SQL מתקדם עם Claude', en: 'Advanced SQL with Claude' },
    description: { he: 'שאילתות מורכבות, אופטימיזציה, ו-debugging', en: 'Complex queries, optimization, and debugging' },
    duration: 30,
    level: 'intermediate' as const,
    icon: '🗃️',
  },
  {
    id: 'bonus-git',
    title: { he: 'Git Mastery עם Claude Code', en: 'Git Mastery with Claude Code' },
    description: { he: 'שליטה מלאה ב-Git דרך Claude Code', en: 'Full Git mastery through Claude Code' },
    duration: 25,
    level: 'intermediate' as const,
    icon: '📦',
  },
  {
    id: 'bonus-api-design',
    title: { he: 'עיצוב API עם Claude', en: 'API Design with Claude' },
    description: { he: 'תכנון ובניית APIs מקצועיים', en: 'Planning and building professional APIs' },
    duration: 35,
    level: 'advanced' as const,
    icon: '🔌',
  },
  {
    id: 'bonus-prompt-library',
    title: { he: 'ספריית פרומפטים', en: 'Prompt Library' },
    description: { he: '50+ פרומפטים מוכנים לשימוש', en: '50+ ready-to-use prompts' },
    duration: 15,
    level: 'beginner' as const,
    icon: '📚',
  },
  {
    id: 'bonus-claude-for-teams',
    title: { he: 'Claude לצוותים', en: 'Claude for Teams' },
    description: { he: 'איך להטמיע Claude בצוות פיתוח', en: 'How to integrate Claude in a development team' },
    duration: 30,
    level: 'advanced' as const,
    icon: '👥',
  },
];
