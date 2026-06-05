import type { Lesson } from '@/content/types';

const lesson: Lesson = {
  id: 'power-tools',
  track: 'advanced',
  title: { he: 'כלי עוצמה - MCP, Hooks, API ו-SDK', en: 'Power Tools - MCP, Hooks, API, and SDK' },
  description: {
    he: 'סקירה למתקדמים: להרחיב את Claude עם שרתי MCP מותאמים, hooks, ולבנות אפליקציות מול ה-API.',
    en: 'An advanced overview: extending Claude with custom MCP servers, hooks, and building apps against the API.',
  },
  duration: 9,
  updated: '2026-06-05',
  content: {
    he: `# כלי עוצמה למתקדמים

:::beginner
זה התוכן הכי טכני באתר, ומיועד למי שכבר נוח עם קוד או רוצה לבנות אוטומציות. רופא שרק רוצה לעבוד יעיל - לא צריך את זה.
:::

## MCP - שרתים מותאמים

מעבר ל-Connectors המוכנים, **Model Context Protocol** מאפשר לחבר את Claude לכל שירות עם API: מסד נתונים, מערכת פנימית, כלי מותאם. מגדירים שרת MCP בקובץ הגדרות (\`claude_desktop_config.json\` או \`~/.claude/settings.json\`):

\`\`\`json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "..." }
    }
  }
}
\`\`\`

אפשר לכתוב שרתי MCP משלך ב-Python או TypeScript.

## Hooks ו-Skills

- **Hooks** - להריץ פקודות אוטומטית בנקודות מסוימות (למשל לפני commit, אחרי עריכה).
- **Skills** - "מתכונים" מוכנים שמופעלים בפקודת / . אפשר ליצור Skills מותאמים לתהליכים חוזרים בפרויקט שלך.

## API ו-Agent SDK

לבניית אפליקציות משלך:

\`\`\`python
import anthropic
client = anthropic.Anthropic()
msg = client.messages.create(
    model="claude-opus-4-8",
    max_tokens=1024,
    messages=[{"role": "user", "content": "..."}]
)
print(msg.content[0].text)
\`\`\`

- **API** - שליטה מלאה, תשלום לפי שימוש, מתאים לבניית מוצרים.
- **Agent SDK** - לבנות סוכנים מותאמים עם Tool Use, זיכרון ו-orchestration.

:::advanced
Opus 4.8: 1M context בברירת מחדל ב-API, 128K פלט, adaptive thinking בלבד (אין thinking budgets), ו-mid-conversation system messages ששומרים על prompt cache. fast mode דרך speed: "fast" בתמחור פרימיום. למיגרציות ענק - Dynamic Workflows מ-Claude Code.
:::

זהו - כיסית את כל הדרכים לעבוד עם Claude, מהפשוטה (Chat) ועד המתקדמת (API). לרופא, הציר המרכזי נשאר **Claude Desktop והטאב Code**.`,
    en: `# Power Tools for Advanced Users

:::beginner
This is the most technical content on the site, meant for those already comfortable with code or who want to build automations. A physician who just wants to work efficiently does not need this.
:::

## MCP - custom servers

Beyond the ready-made Connectors, **Model Context Protocol** lets you connect Claude to any service with an API: a database, an internal system, a custom tool. You define an MCP server in a config file (\`claude_desktop_config.json\` or \`~/.claude/settings.json\`):

\`\`\`json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "..." }
    }
  }
}
\`\`\`

You can write your own MCP servers in Python or TypeScript.

## Hooks and Skills

- **Hooks** - run commands automatically at certain points (for example before a commit, after an edit).
- **Skills** - ready-made "recipes" triggered with a / command. You can create custom Skills for recurring processes in your project.

## API and Agent SDK

For building your own applications:

\`\`\`python
import anthropic
client = anthropic.Anthropic()
msg = client.messages.create(
    model="claude-opus-4-8",
    max_tokens=1024,
    messages=[{"role": "user", "content": "..."}]
)
print(msg.content[0].text)
\`\`\`

- **API** - full control, usage-based pricing, suited to building products.
- **Agent SDK** - build custom agents with Tool Use, memory, and orchestration.

:::advanced
Opus 4.8: 1M context by default on the API, 128K output, adaptive thinking only (no thinking budgets), and mid-conversation system messages that preserve the prompt cache. Fast mode via speed: "fast" at premium pricing. For huge migrations - Dynamic Workflows from Claude Code.
:::

That is it - you have covered every way to work with Claude, from the simplest (Chat) to the most advanced (API). For a physician, the central axis remains **Claude Desktop and the Code tab**.`,
  },
};

export default lesson;
