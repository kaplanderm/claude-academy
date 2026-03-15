export type Lang = 'he' | 'en';

export const translations = {
  // Navigation
  nav: {
    home: { he: 'בית', en: 'Home' },
    courses: { he: 'קורסים', en: 'Courses' },
    tools: { he: 'כלים וממשקים', en: 'Tools & Interfaces' },
    plugins: { he: 'תוספים ומחברים', en: 'Plugins & Connectors' },
    useCases: { he: 'שימושים לפי תחום', en: 'Use Cases' },
    blog: { he: 'בלוג וחדשות', en: 'Blog & News' },
    bonus: { he: 'שיעורי בונוס', en: 'Bonus Lessons' },
    about: { he: 'אודות', en: 'About' },
  },
  // Hero
  hero: {
    badge: { he: '🚀 הפלטפורמה המקיפה ללימוד Claude', en: '🚀 The Comprehensive Claude Learning Platform' },
    title1: { he: 'שלטו ב-', en: 'Master ' },
    titleHighlight: { he: 'Claude AI', en: 'Claude AI' },
    title2: { he: ' מההתחלה ועד לרמת מומחה', en: ' From Beginner to Expert' },
    subtitle: {
      he: 'למדו להשתמש ב-Claude ו-Claude Code בכל הממשקים: Desktop, Terminal, IDE ועוד. קורס מקיף בעברית ובאנגלית למתחילים ומתקדמים כאחד.',
      en: 'Learn to use Claude and Claude Code across all interfaces: Desktop, Terminal, IDE, and more. A comprehensive course in Hebrew and English for beginners and advanced users alike.'
    },
    startLearning: { he: 'התחילו ללמוד', en: 'Start Learning' },
    exploreCourses: { he: 'גלו את הקורסים', en: 'Explore Courses' },
    stat1Label: { he: 'שיעורים', en: 'Lessons' },
    stat2Label: { he: 'שעות תוכן', en: 'Hours of Content' },
    stat3Label: { he: 'תחומי שימוש', en: 'Use Case Areas' },
    stat4Label: { he: 'עדכון אחרון', en: 'Last Updated' },
  },
  // Level selector
  levels: {
    title: { he: 'בחרו את הרמה שלכם', en: 'Choose Your Level' },
    subtitle: { he: 'כל הקורסים זמינים - הבחירה משנה את רמת ההסבר והניסוח', en: 'All courses available - your choice changes the explanation depth and style' },
    beginner: { he: 'מתחילים', en: 'Beginner' },
    beginnerDesc: { he: 'אין צורך בידע טכני מוקדם. נתחיל מהבסיס.', en: 'No prior technical knowledge needed. We start from the basics.' },
    intermediate: { he: 'בינוניים', en: 'Intermediate' },
    intermediateDesc: { he: 'ניסיון בסיסי עם טכנולוגיה וכתיבת פרומפטים.', en: 'Basic experience with technology and prompt writing.' },
    advanced: { he: 'מתקדמים', en: 'Advanced' },
    advancedDesc: { he: 'מפתחים ואנשי טכנולוגיה שרוצים לנצל את מלוא העוצמה.', en: 'Developers and tech professionals who want to leverage full power.' },
  },
  // Courses section
  courses: {
    title: { he: 'מערך הקורסים', en: 'Course Curriculum' },
    subtitle: { he: 'מסלול לימודים שלם מההתחלה ועד רמת מומחה', en: 'A complete learning path from start to expert level' },
    duration: { he: 'משך', en: 'Duration' },
    lessons: { he: 'שיעורים', en: 'Lessons' },
    level: { he: 'רמה', en: 'Level' },
    startCourse: { he: 'התחילו קורס', en: 'Start Course' },
    viewDetails: { he: 'צפו בפרטים', en: 'View Details' },
  },
  // Tools section
  tools: {
    title: { he: 'כלים וממשקים', en: 'Tools & Interfaces' },
    subtitle: { he: 'השוואה מקיפה של כל הדרכים לעבוד עם Claude', en: 'Comprehensive comparison of all ways to work with Claude' },
    pros: { he: 'יתרונות', en: 'Pros' },
    cons: { he: 'חסרונות', en: 'Cons' },
    setup: { he: 'הגדרה', en: 'Setup' },
    bestFor: { he: 'מתאים ל', en: 'Best For' },
    rating: { he: 'דירוג', en: 'Rating' },
  },
  // Plugins section
  plugins: {
    title: { he: 'תוספים, מחברים וכישורים', en: 'Plugins, Connectors & Skills' },
    subtitle: { he: 'הרחיבו את היכולות של Claude עם כלים חיצוניים', en: 'Extend Claude\'s capabilities with external tools' },
    category: { he: 'קטגוריה', en: 'Category' },
    difficulty: { he: 'קושי', en: 'Difficulty' },
    popularity: { he: 'פופולריות', en: 'Popularity' },
  },
  // Use cases
  useCases: {
    title: { he: 'שימושים לפי תחום', en: 'Use Cases by Field' },
    subtitle: { he: 'גלו כיצד Claude יכול לעזור בתחום שלכם', en: 'Discover how Claude can help in your field' },
  },
  // Blog
  blog: {
    title: { he: 'בלוג וחדשות', en: 'Blog & News' },
    subtitle: { he: 'עדכונים, טיפים ורעיונות', en: 'Updates, tips, and ideas' },
    readMore: { he: 'קראו עוד', en: 'Read More' },
    fiveMinIdea: { he: '💡 רעיון ב-5 דקות', en: '💡 5-Minute Idea' },
    latestUpdates: { he: '🔄 עדכוני Claude', en: '🔄 Claude Updates' },
    tips: { he: '🎯 טיפים מהירים', en: '🎯 Quick Tips' },
  },
  // Bonus
  bonus: {
    title: { he: 'שיעורי בונוס', en: 'Bonus Lessons' },
    subtitle: { he: 'תוכן מתקדם להרחבת הידע', en: 'Advanced content to expand your knowledge' },
  },
  // Footer
  footer: {
    description: {
      he: 'פלטפורמת ההכשרה המקיפה ביותר ל-Claude AI. למדו, תרגלו, והפכו למומחים.',
      en: 'The most comprehensive training platform for Claude AI. Learn, practice, and become an expert.'
    },
    quickLinks: { he: 'קישורים מהירים', en: 'Quick Links' },
    resources: { he: 'משאבים', en: 'Resources' },
    community: { he: 'קהילה', en: 'Community' },
    rights: { he: 'כל הזכויות שמורות', en: 'All rights reserved' },
    madeWith: { he: 'נבנה עם', en: 'Built with' },
    officialDocs: { he: 'תיעוד רשמי', en: 'Official Docs' },
    apiReference: { he: 'API Reference', en: 'API Reference' },
    discord: { he: 'Discord קהילת', en: 'Discord Community' },
    github: { he: 'GitHub', en: 'GitHub' },
  },
  // Common
  common: {
    language: { he: 'EN', en: 'עב' },
    searchPlaceholder: { he: 'חפשו נושא...', en: 'Search a topic...' },
    comingSoon: { he: 'בקרוב', en: 'Coming Soon' },
    free: { he: 'חינם', en: 'Free' },
    new: { he: 'חדש', en: 'New' },
    popular: { he: 'פופולרי', en: 'Popular' },
    minutes: { he: 'דקות', en: 'minutes' },
    hours: { he: 'שעות', en: 'hours' },
    watchVideo: { he: 'צפו בסרטון', en: 'Watch Video' },
    tryNow: { he: 'נסו עכשיו', en: 'Try Now' },
    learnMore: { he: 'למדו עוד', en: 'Learn More' },
    back: { he: 'חזרה', en: 'Back' },
    next: { he: 'הבא', en: 'Next' },
    previous: { he: 'הקודם', en: 'Previous' },
  },
} as const;

export function t(key: string, lang: Lang): string {
  const keys = key.split('.');
  let current: unknown = translations;
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = (current as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  if (current && typeof current === 'object' && lang in current) {
    return (current as Record<string, string>)[lang];
  }
  return key;
}
