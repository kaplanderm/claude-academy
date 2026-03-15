'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useLang } from '@/lib/LangContext';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

// Simple markdown-like rendering (same pattern as BonusSection)
const formatInline = (text: string): string => {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-text-primary">$1</strong>')
    .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-claude-cream text-claude-brown text-sm font-mono">$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-claude-orange hover:underline" target="_blank">$1</a>')
    .replace(/\u274C/g, '<span class="text-red-500">\u274C</span>')
    .replace(/\u2705/g, '<span class="text-green-500">\u2705</span>');
};

const renderContent = (content: string): React.ReactElement[] => {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let inCodeBlock = false;
  let codeContent = '';

  lines.forEach((line, i) => {
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${i}`} className="code-block my-4 overflow-x-auto">
            <code>{codeContent}</code>
          </pre>
        );
        codeContent = '';
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeContent += line + '\n';
      return;
    }

    if (line.trim().startsWith('> ')) {
      const text = line.trim().slice(2);
      elements.push(
        <blockquote key={i} className="border-l-4 border-claude-orange/40 bg-claude-cream/50 px-4 py-2 my-3 rounded-r-lg text-text-secondary">
          <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        </blockquote>
      );
    } else if (line.startsWith('# ')) {
      elements.push(<h1 key={i} className="text-3xl font-bold text-text-primary mt-8 mb-4">{line.slice(2)}</h1>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-bold text-text-primary mt-6 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-semibold text-text-primary mt-5 mb-2">{line.slice(4)}</h3>);
    } else if (line.trim().startsWith('- ')) {
      const text = line.trim().slice(2);
      elements.push(
        <li key={i} className="text-text-secondary ml-4 my-1 list-disc">
          <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        </li>
      );
    } else if (line.trim().match(/^\d+\.\s/)) {
      const text = line.trim().replace(/^\d+\.\s/, '');
      elements.push(
        <li key={i} className="text-text-secondary ml-4 my-1 list-decimal">
          <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        </li>
      );
    } else if (line.trim()) {
      elements.push(
        <p key={i} className="text-text-secondary my-2 leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
        </p>
      );
    } else {
      elements.push(<div key={i} className="h-2" />);
    }
  });

  return elements;
};

interface MedicalUseCase {
  id: string;
  icon: string;
  title: { he: string; en: string };
  description: { he: string; en: string };
  content: { he: string; en: string };
}

const medicalUseCases: MedicalUseCase[] = [
  {
    id: 'diagnosis',
    icon: '\uD83C\uDFE5',
    title: { he: '\u05D0\u05D1\u05D7\u05D5\u05DF \u05D5\u05D8\u05D9\u05E4\u05D5\u05DC', en: 'Diagnosis & Treatment' },
    description: {
      he: '\u05D0\u05D1\u05D7\u05D5\u05DF \u05DE\u05D1\u05D3\u05DC, \u05E4\u05E8\u05D5\u05D8\u05D5\u05E7\u05D5\u05DC\u05D9 \u05D8\u05D9\u05E4\u05D5\u05DC, \u05D0\u05D9\u05E0\u05D8\u05E8\u05D0\u05E7\u05E6\u05D9\u05D5\u05EA \u05EA\u05E8\u05D5\u05E4\u05D5\u05EA \u05D5\u05E4\u05E8\u05E9\u05E0\u05D5\u05EA \u05DE\u05E2\u05D1\u05D3\u05D4',
      en: 'Differential diagnosis, treatment protocols, drug interactions, and lab interpretation',
    },
    content: {
      he: `## \u05E9\u05D9\u05DE\u05D5\u05E9\u05D9\u05DD \u05E2\u05D9\u05E7\u05E8\u05D9\u05D9\u05DD

- **\u05D0\u05D1\u05D7\u05D5\u05DF \u05DE\u05D1\u05D3\u05DC** \u2014 \u05D4\u05E6\u05D2\u05EA \u05EA\u05DE\u05D5\u05E0\u05D4 \u05E7\u05DC\u05D9\u05E0\u05D9\u05EA \u05D5\u05E7\u05D1\u05DC\u05EA \u05E8\u05E9\u05D9\u05DE\u05EA \u05D0\u05D1\u05D7\u05E0\u05D5\u05EA \u05D0\u05E4\u05E9\u05E8\u05D9\u05D5\u05EA
- **\u05E1\u05E7\u05D9\u05E8\u05EA \u05E4\u05E8\u05D5\u05D8\u05D5\u05E7\u05D5\u05DC\u05D9 \u05D8\u05D9\u05E4\u05D5\u05DC** \u2014 \u05D1\u05D3\u05D9\u05E7\u05EA \u05D4\u05EA\u05D0\u05DE\u05D4 \u05DC\u05E7\u05D5\u05D5\u05D9\u05DD \u05DE\u05E0\u05D7\u05D9\u05DD \u05E2\u05D3\u05DB\u05E0\u05D9\u05D9\u05DD
- **\u05D1\u05D3\u05D9\u05E7\u05EA \u05D0\u05D9\u05E0\u05D8\u05E8\u05D0\u05E7\u05E6\u05D9\u05D5\u05EA \u05EA\u05E8\u05D5\u05E4\u05D5\u05EA** \u2014 \u05D6\u05D9\u05D4\u05D5\u05D9 \u05DE\u05D4\u05D9\u05E8 \u05E9\u05DC \u05E7\u05D5\u05E0\u05E4\u05DC\u05D9\u05E7\u05D8\u05D9\u05DD \u05E4\u05D5\u05D8\u05E0\u05E6\u05D9\u05D0\u05DC\u05D9\u05D9\u05DD
- **\u05E4\u05E8\u05E9\u05E0\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05DE\u05E2\u05D1\u05D3\u05D4** \u2014 \u05D4\u05E1\u05D1\u05E8 \u05E2\u05DC \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D7\u05E8\u05D9\u05D2\u05D5\u05EA \u05D5\u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9\u05D4\u05DF

### \u05E4\u05E8\u05D5\u05DE\u05E4\u05D8\u05D9\u05DD \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4

\`\`\`
\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E4\u05D0 \u05E2\u05D5\u05E8. \u05DE\u05D8\u05D5\u05E4\u05DC \u05D1\u05DF 45 \u05E2\u05DD \u05E0\u05D2\u05E2 \u05E4\u05D9\u05D2\u05DE\u05E0\u05D8\u05D9 \u05D0-\u05E1\u05D9\u05DE\u05D8\u05E8\u05D9 \u05D1\u05D2\u05D1, \u05E7\u05D5\u05D8\u05E8 6 \u05DE"\u05DE, \u05E2\u05DD \u05D2\u05D1\u05D5\u05DC\u05D5\u05EA \u05DC\u05D0 \u05E1\u05D3\u05D9\u05E8\u05D9\u05DD. \u05DE\u05D4 \u05D4\u05D0\u05D1\u05D7\u05E0\u05D4 \u05D4\u05DE\u05D1\u05D3\u05DC\u05EA?
\`\`\`

\`\`\`
\u05DE\u05D8\u05D5\u05E4\u05DC\u05EA \u05D1\u05EA 60 \u05E0\u05D5\u05D8\u05DC\u05EA Metformin 1000mg \u05D5-Lisinopril 10mg. \u05DE\u05EA\u05DB\u05E0\u05E0\u05D9\u05DD \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 Spironolactone. \u05D4\u05D0\u05DD \u05D9\u05E9 \u05D0\u05D9\u05E0\u05D8\u05E8\u05D0\u05E7\u05E6\u05D9\u05D5\u05EA \u05E9\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05D5\u05D3\u05E2\u05D9\u05DD \u05DC\u05D4\u05DF?
\`\`\`

\`\`\`
\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05DE\u05E2\u05D1\u05D3\u05D4: \u05D4\u05DE\u05D5\u05D2\u05DC\u05D5\u05D1\u05D9\u05DF 18.5, \u05D8\u05E1\u05D9\u05D0\u05D5\u05EA 48%, MCV 62. \u05D1\u05E8\u05D6\u05DC 8. CRP 2.1. \u05DE\u05D4 \u05D4\u05E4\u05E8\u05E9\u05E0\u05D5\u05EA \u05D4\u05E1\u05D1\u05D9\u05E8\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8?
\`\`\`

### \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DE\u05D5\u05DE\u05DC\u05E6\u05EA
- **claude.ai \u05E2\u05DD Projects** \u2014 \u05E6\u05E8\u05D5 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05DC\u05DB\u05DC \u05EA\u05D7\u05D5\u05DD \u05E8\u05E4\u05D5\u05D0\u05D9 \u05E2\u05DD \u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05D5\u05E7\u05D5\u05D5\u05D9\u05DD \u05DE\u05E0\u05D7\u05D9\u05DD
- **Claude Code** \u2014 \u05DC\u05E0\u05D9\u05EA\u05D5\u05D7 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E7\u05DC\u05D9\u05E0\u05D9\u05D9\u05DD (\u05DE\u05D0\u05E0\u05D5\u05E0\u05D9\u05DE\u05D9\u05D9\u05DD)

### \uD83D\uDD12 \u05D4\u05E2\u05E8\u05D4 \u05D1\u05E0\u05D5\u05E9\u05D0 \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA
> **\u05EA\u05DE\u05D9\u05D3 \u05D4\u05E1\u05D9\u05E8\u05D5 \u05E4\u05E8\u05D8\u05D9\u05DD \u05DE\u05D6\u05D4\u05D9\u05DD \u05DC\u05E4\u05E0\u05D9 \u05E9\u05DC\u05D9\u05D7\u05EA \u05DE\u05D9\u05D3\u05E2 \u05DC-Claude.** \u05D4\u05E9\u05EA\u05DE\u05E9\u05D5 \u05D1\u05D2\u05D9\u05DC\u05D0\u05D9\u05DD, \u05DE\u05D9\u05DF \u05D5\u05DE\u05D2\u05D3\u05E8 \u05D1\u05DE\u05E7\u05D5\u05DD \u05E9\u05DD, \u05EA.\u05D6. \u05D5\u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD.`,
      en: `## Key Use Cases

- **Differential diagnosis** \u2014 Present clinical picture and receive a prioritized list of possible diagnoses
- **Treatment protocol review** \u2014 Verify alignment with current clinical guidelines
- **Drug interaction checking** \u2014 Quick identification of potential conflicts
- **Lab result interpretation** \u2014 Explain lab findings and their clinical significance

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

### Recommended Platform
- **claude.ai with Projects** \u2014 Create a project for each medical domain with guidelines and reference material
- **Claude Code** \u2014 For analyzing clinical data (anonymized)

### \uD83D\uDD12 Privacy Note
> **Always remove identifying information before sending data to Claude.** Use age ranges, initials, and generic locations instead of names, IDs, and dates.`,
    },
  },
  {
    id: 'documentation',
    icon: '\uD83D\uDCCB',
    title: { he: '\u05EA\u05D9\u05E2\u05D5\u05D3 \u05E8\u05E4\u05D5\u05D0\u05D9', en: 'Medical Documentation' },
    description: {
      he: '\u05E1\u05D9\u05DB\u05D5\u05DE\u05D9 \u05D1\u05D9\u05E7\u05D5\u05E8, \u05DE\u05DB\u05EA\u05D1\u05D9 \u05D4\u05E4\u05E0\u05D9\u05D4, \u05E1\u05D9\u05DB\u05D5\u05DE\u05D9 \u05E9\u05D7\u05E8\u05D5\u05E8 \u05D5\u05E7\u05D9\u05D3\u05D5\u05D3 ICD',
      en: 'Visit summaries, referral letters, discharge summaries, and ICD coding',
    },
    content: {
      he: `## \u05E9\u05D9\u05DE\u05D5\u05E9\u05D9\u05DD \u05E2\u05D9\u05E7\u05E8\u05D9\u05D9\u05DD

- **\u05E1\u05D9\u05DB\u05D5\u05DE\u05D9 \u05D1\u05D9\u05E7\u05D5\u05E8** \u2014 \u05D9\u05E6\u05D9\u05E8\u05EA \u05E1\u05D9\u05DB\u05D5\u05DD \u05DE\u05D5\u05D1\u05E0\u05D4 \u05D1\u05E4\u05D5\u05E8\u05DE\u05D8 SOAP \u05D0\u05D5 \u05DB\u05DC \u05E4\u05D5\u05E8\u05DE\u05D8 \u05D0\u05D7\u05E8
- **\u05DE\u05DB\u05EA\u05D1\u05D9 \u05D4\u05E4\u05E0\u05D9\u05D4** \u2014 \u05DE\u05DB\u05EA\u05D1\u05D9\u05DD \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D9\u05DD \u05DC\u05E8\u05D5\u05E4\u05D0\u05D9\u05DD \u05DE\u05E7\u05D1\u05D9\u05DC\u05D9\u05DD
- **\u05E1\u05D9\u05DB\u05D5\u05DE\u05D9 \u05E9\u05D7\u05E8\u05D5\u05E8** \u2014 \u05D9\u05E6\u05D9\u05E8\u05EA \u05DE\u05E1\u05DE\u05DA \u05E9\u05D7\u05E8\u05D5\u05E8 \u05DE\u05E7\u05D9\u05E3 \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9
- **\u05E7\u05D9\u05D3\u05D5\u05D3 ICD** \u2014 \u05E1\u05D9\u05D5\u05E2 \u05D1\u05DE\u05E6\u05D9\u05D0\u05EA \u05E7\u05D5\u05D3\u05D9 ICD-10 \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D9\u05DD

### \u05E4\u05E8\u05D5\u05DE\u05E4\u05D8\u05D9\u05DD \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4

\`\`\`
\u05E1\u05DB\u05DD \u05D0\u05EA \u05D4\u05D1\u05D9\u05E7\u05D5\u05E8 \u05D4\u05D1\u05D0 \u05D1\u05E4\u05D5\u05E8\u05DE\u05D8 SOAP:
S: \u05DE\u05D8\u05D5\u05E4\u05DC \u05D1\u05DF 55 \u05DE\u05EA\u05DC\u05D5\u05E0\u05DF \u05E2\u05DC \u05E4\u05E8\u05D9\u05D7\u05D4 \u05E2\u05D5\u05E8\u05D9\u05EA \u05D1\u05D6\u05E8\u05D5\u05E2\u05D5\u05EA. \u05D4\u05D7\u05DC \u05DC\u05E4\u05E0\u05D9 3 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD.
O: \u05D0\u05E8\u05D9\u05EA\u05DE\u05D4 \u05DE\u05E4\u05D5\u05E9\u05D8\u05EA \u05D1\u05D6\u05E8\u05D5\u05E2\u05D5\u05EA, \u05DC\u05DC\u05D0 \u05D2\u05E8\u05D3, \u05DC\u05D0 \u05D3\u05DE\u05DE\u05D9\u05EA.
\`\`\`

\`\`\`
\u05DB\u05EA\u05D5\u05D1 \u05DE\u05DB\u05EA\u05D1 \u05D4\u05E4\u05E0\u05D9\u05D4 \u05DC\u05E8\u05D5\u05E4\u05D0 \u05E2\u05D5\u05E8: \u05DE\u05D8\u05D5\u05E4\u05DC \u05D1\u05DF 40 \u05E2\u05DD \u05E0\u05D2\u05E2 \u05D7\u05E9\u05D5\u05D3 \u05D1\u05D6\u05E8\u05D5\u05E2 \u05D4\u05D9\u05DE\u05E0\u05D9\u05EA, \u05D3\u05E8\u05D5\u05E9 \u05D4\u05E2\u05E8\u05DB\u05D4 \u05D3\u05E8\u05DE\u05D8\u05D5\u05E1\u05E7\u05D5\u05E4\u05D9\u05EA.
\`\`\`

### \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DE\u05D5\u05DE\u05DC\u05E6\u05EA
- **claude.ai** \u2014 \u05DC\u05EA\u05D9\u05E2\u05D5\u05D3 \u05E9\u05D5\u05D8\u05E3
- **Desktop App** \u2014 \u05E0\u05D5\u05D7 \u05D5\u05DE\u05D4\u05D9\u05E8 \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D9\u05D5\u05DE\u05D9\u05D5\u05DE\u05D9

### \uD83D\uDD12 \u05D4\u05E2\u05E8\u05D4 \u05D1\u05E0\u05D5\u05E9\u05D0 \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA
> **\u05DC\u05E2\u05D5\u05DC\u05DD \u05D0\u05DC \u05EA\u05DB\u05DC\u05D9\u05DC\u05D5 \u05E9\u05DD \u05DE\u05DC\u05D0, \u05EA.\u05D6., \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF \u05D0\u05D5 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA.** \u05D4\u05E9\u05EA\u05DE\u05E9\u05D5 \u05D1\u05D2\u05D9\u05DC\u05D0\u05D9\u05DD, \u05DE\u05D9\u05DF, \u05D5\u05EA\u05D9\u05D0\u05D5\u05E8 \u05DB\u05DC\u05DC\u05D9 \u05D1\u05DC\u05D1\u05D3.`,
      en: `## Key Use Cases

- **Visit summaries** \u2014 Generate structured summaries in SOAP or any other format
- **Referral letters** \u2014 Professional letters to receiving physicians
- **Discharge summaries** \u2014 Create comprehensive and concise discharge documents
- **ICD coding** \u2014 Assistance finding the appropriate ICD-10 codes

### Example Prompts

\`\`\`
Summarize the following visit in SOAP format:
S: 55-year-old patient complains of itchy rash on the arms. Started 3 months ago.
O: Diffuse erythema on arms, no scratching, non-hemorrhagic.
\`\`\`

\`\`\`
Write a referral letter to a dermatologist: 40-year-old patient with a suspicious lesion on the right arm, needs dermoscopic evaluation.
\`\`\`

### Recommended Platform
- **claude.ai** \u2014 For routine documentation
- **Desktop App** \u2014 Convenient and fast for daily use

### \uD83D\uDD12 Privacy Note
> **Never include real patient names, IDs, phone numbers, or email addresses.** Use age ranges, initials, and generic descriptions instead.`,
    },
  },
  {
    id: 'research',
    icon: '\uD83D\uDD2C',
    title: { he: '\u05DE\u05D7\u05E7\u05E8 \u05E8\u05E4\u05D5\u05D0\u05D9', en: 'Medical Research' },
    description: {
      he: '\u05E1\u05E7\u05D9\u05E8\u05EA \u05E1\u05E4\u05E8\u05D5\u05EA, \u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05D7\u05E7\u05E8, \u05E0\u05D9\u05EA\u05D5\u05D7 \u05E1\u05D8\u05D8\u05D9\u05E1\u05D8\u05D9, \u05DB\u05EA\u05D9\u05D1\u05EA \u05DE\u05D0\u05DE\u05E8\u05D9\u05DD',
      en: 'Literature review, study design, statistical analysis, manuscript writing',
    },
    content: {
      he: `## \u05E9\u05D9\u05DE\u05D5\u05E9\u05D9\u05DD \u05E2\u05D9\u05E7\u05E8\u05D9\u05D9\u05DD

- **\u05E1\u05E7\u05D9\u05E8\u05EA \u05E1\u05E4\u05E8\u05D5\u05EA** \u2014 \u05E1\u05D9\u05DB\u05D5\u05DD \u05DE\u05D0\u05DE\u05E8\u05D9\u05DD \u05D5\u05DE\u05D2\u05DE\u05D5\u05EA \u05DE\u05D7\u05E7\u05E8\u05D9\u05D5\u05EA
- **\u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05D7\u05E7\u05E8** \u2014 \u05E2\u05D6\u05E8\u05D4 \u05D1\u05EA\u05DB\u05E0\u05D5\u05DF \u05DE\u05EA\u05D5\u05D3\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4 \u05D5\u05D7\u05D9\u05E9\u05D5\u05D1 \u05D2\u05D5\u05D3\u05DC \u05DE\u05D3\u05D2\u05DD
- **\u05E0\u05D9\u05EA\u05D5\u05D7 \u05E1\u05D8\u05D8\u05D9\u05E1\u05D8\u05D9** \u2014 \u05D1\u05D7\u05D9\u05E8\u05EA \u05DE\u05D1\u05D7\u05E0\u05D9\u05DD \u05E1\u05D8\u05D8\u05D9\u05E1\u05D8\u05D9\u05D9\u05DD \u05D5\u05E4\u05E8\u05E9\u05E0\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA
- **\u05DB\u05EA\u05D9\u05D1\u05EA \u05DE\u05D0\u05DE\u05E8\u05D9\u05DD** \u2014 \u05E0\u05D9\u05E1\u05D5\u05D7 \u05D5\u05E2\u05E8\u05D9\u05DB\u05D4 \u05E9\u05DC \u05DB\u05EA\u05D1\u05D9 \u05D9\u05D3 \u05DE\u05D3\u05E2\u05D9\u05D9\u05DD

### \u05E4\u05E8\u05D5\u05DE\u05E4\u05D8\u05D9\u05DD \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4

\`\`\`
\u05E1\u05E7\u05D5\u05E8 \u05D0\u05EA \u05D4\u05E1\u05E4\u05E8\u05D5\u05EA \u05D4\u05E2\u05D3\u05DB\u05E0\u05D9\u05EA \u05E2\u05DC \u05D9\u05E2\u05D9\u05DC\u05D5\u05EA Mohs surgery \u05D1-BCC \u05D7\u05D5\u05D6\u05E8. \u05D4\u05EA\u05DE\u05E7\u05D3 \u05D1\u05DE\u05D7\u05E7\u05E8\u05D9\u05DD \u05DE-5 \u05D4\u05E9\u05E0\u05D9\u05DD \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D5\u05EA.
\`\`\`

\`\`\`
\u05D0\u05E0\u05D9 \u05DE\u05EA\u05DB\u05E0\u05DF \u05DE\u05D7\u05E7\u05E8 \u05E4\u05E8\u05D5\u05E1\u05E4\u05E7\u05D8\u05D9\u05D1\u05D9 \u05E2\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC\u05D9 PDT \u05DC\u05E2\u05D5\u05DE\u05EA AK. \u05E2\u05D6\u05D5\u05E8 \u05DC\u05D9 \u05DC\u05E2\u05E6\u05D1 \u05D0\u05EA \u05D4\u05DE\u05EA\u05D5\u05D3\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4 \u05DB\u05D5\u05DC\u05DC \u05E7\u05E8\u05D9\u05D8\u05E8\u05D9\u05D5\u05E0\u05D9 \u05D4\u05DB\u05DC\u05DC\u05D4/\u05D4\u05D3\u05E8\u05D4, endpoints, \u05D5\u05D7\u05D9\u05E9\u05D5\u05D1 \u05D2\u05D5\u05D3\u05DC \u05DE\u05D3\u05D2\u05DD.
\`\`\`

### \u05E7\u05E8\u05D9\u05D0\u05D4 \u05E0\u05D5\u05E1\u05E4\u05EA
\u05DC\u05DE\u05D7\u05E7\u05E8 \u05E2\u05DC AI \u05D1\u05D3\u05E8\u05DE\u05D8\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4: [DermUnbound Research](https://kaplanclinic.co.il/he/derm-ai)

### \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DE\u05D5\u05DE\u05DC\u05E6\u05EA
- **claude.ai \u05E2\u05DD \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8** \u2014 \u05DC\u05E1\u05E7\u05D9\u05E8\u05EA \u05E1\u05E4\u05E8\u05D5\u05EA \u05E2\u05D3\u05DB\u05E0\u05D9\u05EA
- **Claude Code** \u2014 \u05DC\u05E0\u05D9\u05EA\u05D5\u05D7 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E1\u05D8\u05D8\u05D9\u05E1\u05D8\u05D9\u05D9\u05DD

### \uD83D\uDD12 \u05D4\u05E2\u05E8\u05D4 \u05D1\u05E0\u05D5\u05E9\u05D0 \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA
> **\u05D1\u05E0\u05D9\u05EA\u05D5\u05D7 \u05E0\u05EA\u05D5\u05E0\u05D9 \u05DE\u05D7\u05E7\u05E8, \u05D5\u05D3\u05D0\u05D5 \u05E9\u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DE\u05D0\u05D5\u05E0\u05D9\u05DE\u05D9\u05D9\u05DD \u05DC\u05E4\u05E0\u05D9 \u05D4\u05E2\u05DC\u05D0\u05D4 \u05DC\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4.** \u05D0\u05DC \u05EA\u05E9\u05EA\u05DE\u05E9\u05D5 \u05D1\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D2\u05D5\u05DC\u05DE\u05D9\u05D9\u05DD \u05E9\u05DC \u05DE\u05D8\u05D5\u05E4\u05DC\u05D9\u05DD.`,
      en: `## Key Use Cases

- **Literature review** \u2014 Summarize papers and research trends
- **Study design** \u2014 Help with methodology planning and sample size calculation
- **Statistical analysis** \u2014 Choosing statistical tests and interpreting results
- **Manuscript writing** \u2014 Drafting and editing scientific papers

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
- **claude.ai with web search** \u2014 For up-to-date literature review
- **Claude Code** \u2014 For statistical data analysis

### \uD83D\uDD12 Privacy Note
> **When analyzing research data, ensure all data is anonymized before uploading to the platform.** Never use raw patient data.`,
    },
  },
  {
    id: 'patient-communication',
    icon: '\uD83D\uDCAC',
    title: { he: '\u05EA\u05E7\u05E9\u05D5\u05E8\u05EA \u05E2\u05DD \u05DE\u05D8\u05D5\u05E4\u05DC\u05D9\u05DD', en: 'Patient Communication' },
    description: {
      he: '\u05D7\u05D5\u05DE\u05E8\u05D9 \u05D4\u05E1\u05D1\u05E8, \u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05D0\u05D7\u05E8\u05D9 \u05E4\u05E8\u05D5\u05E6\u05D3\u05D5\u05E8\u05D4, \u05EA\u05E8\u05D2\u05D5\u05DD \u05E9\u05E4\u05D4 \u05E8\u05E4\u05D5\u05D0\u05D9\u05EA',
      en: 'Patient education, post-procedure instructions, translating medical jargon',
    },
    content: {
      he: `## \u05E9\u05D9\u05DE\u05D5\u05E9\u05D9\u05DD \u05E2\u05D9\u05E7\u05E8\u05D9\u05D9\u05DD

- **\u05D7\u05D5\u05DE\u05E8\u05D9 \u05D4\u05E1\u05D1\u05E8 \u05DC\u05DE\u05D8\u05D5\u05E4\u05DC\u05D9\u05DD** \u2014 \u05D4\u05E1\u05D1\u05E8\u05D9\u05DD \u05D1\u05E9\u05E4\u05D4 \u05E4\u05E9\u05D5\u05D8\u05D4 \u05E2\u05DC \u05DE\u05E6\u05D1\u05D9\u05DD \u05E8\u05E4\u05D5\u05D0\u05D9\u05D9\u05DD
- **\u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05D0\u05D7\u05E8\u05D9 \u05E4\u05E8\u05D5\u05E6\u05D3\u05D5\u05E8\u05D4** \u2014 \u05D4\u05D5\u05E8\u05D0\u05D5\u05EA \u05D1\u05E8\u05D5\u05E8\u05D5\u05EA \u05DC\u05D0\u05D7\u05E8\u05D9 \u05D8\u05D9\u05E4\u05D5\u05DC\u05D9\u05DD
- **\u05D9\u05E6\u05D9\u05E8\u05EA FAQ** \u2014 \u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA \u05DC\u05DB\u05DC \u05E4\u05E8\u05D5\u05E6\u05D3\u05D5\u05E8\u05D4 \u05D0\u05D5 \u05DE\u05E6\u05D1
- **\u05EA\u05E8\u05D2\u05D5\u05DD \u05E9\u05E4\u05D4 \u05E8\u05E4\u05D5\u05D0\u05D9\u05EA** \u2014 \u05D4\u05DE\u05E8\u05EA \u05DE\u05D5\u05E0\u05D7\u05D9\u05DD \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D9\u05DD \u05DC\u05E9\u05E4\u05D4 \u05E0\u05D2\u05D9\u05E9\u05D4

### \u05E4\u05E8\u05D5\u05DE\u05E4\u05D8\u05D9\u05DD \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4

\`\`\`
\u05DB\u05EA\u05D5\u05D1 \u05D4\u05E1\u05D1\u05E8 \u05DC\u05DE\u05D8\u05D5\u05E4\u05DC \u05E2\u05DC \u05D4\u05DC\u05D9\u05DA \u05D1\u05D9\u05D5\u05E4\u05E1\u05D9\u05D9\u05EA \u05E2\u05D5\u05E8 \u05D1\u05E9\u05E4\u05D4 \u05E4\u05E9\u05D5\u05D8\u05D4 \u05D5\u05DE\u05E8\u05D2\u05D9\u05E2\u05D4. \u05DB\u05DC\u05D5\u05DC \u05DE\u05D4 \u05DC\u05E6\u05E4\u05D5\u05EA, \u05D6\u05DE\u05DF \u05D4\u05D7\u05DC\u05DE\u05D4, \u05D5\u05DE\u05EA\u05D9 \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05E8\u05D5\u05E4\u05D0.
\`\`\`

\`\`\`
\u05E6\u05D5\u05E8 \u05D3\u05E3 \u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA (FAQ) \u05DC\u05DE\u05D8\u05D5\u05E4\u05DC\u05D9\u05DD \u05DC\u05E4\u05E0\u05D9 \u05D4\u05DC\u05D9\u05DA \u05D4\u05E7\u05E4\u05D0\u05EA \u05E0\u05D2\u05E2\u05D9 \u05E2\u05D5\u05E8 \u05D1\u05DC\u05D9\u05D9\u05D6\u05E8.
\`\`\`

\`\`\`
\u05D4\u05E1\u05D1\u05E8 \u05DC\u05DE\u05D8\u05D5\u05E4\u05DC \u05DE\u05D4 \u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05E9\u05D4\u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D5 \u05D4\u05E8\u05D0\u05EA\u05D4 "dysplastic nevus with moderate atypia" \u05D1\u05E9\u05E4\u05D4 \u05E4\u05E9\u05D5\u05D8\u05D4.
\`\`\`

### \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DE\u05D5\u05DE\u05DC\u05E6\u05EA
- **claude.ai** \u2014 \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05D7\u05D5\u05DE\u05E8\u05D9\u05DD \u05DE\u05E4\u05D5\u05E8\u05D8\u05D9\u05DD
- **\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA \u05DE\u05D5\u05D1\u05D9\u05D9\u05DC** \u2014 \u05DC\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA

### \uD83D\uDD12 \u05D4\u05E2\u05E8\u05D4 \u05D1\u05E0\u05D5\u05E9\u05D0 \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA
> **\u05D4\u05D7\u05D5\u05DE\u05E8\u05D9\u05DD \u05DE\u05D9\u05D5\u05E2\u05D3\u05D9\u05DD \u05DC\u05DE\u05D8\u05D5\u05E4\u05DC\u05D9\u05DD \u2014 \u05D5\u05D3\u05D0\u05D5 \u05E9\u05D0\u05D9\u05DF \u05D1\u05D4\u05DD \u05E4\u05E8\u05D8\u05D9\u05DD \u05DE\u05D6\u05D4\u05D9\u05DD.** \u05EA\u05DE\u05D9\u05D3 \u05E7\u05E8\u05D0\u05D5 \u05D5\u05D4\u05EA\u05D0\u05D9\u05DE\u05D5 \u05DC\u05E4\u05E0\u05D9 \u05E9\u05DC\u05D9\u05D7\u05D4.`,
      en: `## Key Use Cases

- **Patient education materials** \u2014 Clear explanations of medical conditions in simple language
- **Post-procedure instructions** \u2014 Clear guidelines for after treatments
- **FAQ creation** \u2014 Common questions for each procedure or condition
- **Translating medical jargon** \u2014 Converting professional terms to accessible language

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

### Recommended Platform
- **claude.ai** \u2014 For creating detailed materials
- **Mobile App** \u2014 For quick responses in real time

### \uD83D\uDD12 Privacy Note
> **These materials are intended for patients \u2014 make sure they contain no identifying information.** Always review and customize before sharing.`,
    },
  },
  {
    id: 'practice-management',
    icon: '\u2699\uFE0F',
    title: { he: '\u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05E8\u05E4\u05D0\u05D4', en: 'Practice Management' },
    description: {
      he: '\u05D0\u05D5\u05E4\u05D8\u05D9\u05DE\u05D9\u05D6\u05E6\u05D9\u05D4 \u05E9\u05DC \u05EA\u05D5\u05E8\u05D9\u05DD, \u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4, \u05D4\u05DB\u05E9\u05E8\u05EA \u05E6\u05D5\u05D5\u05EA \u05D5\u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05DC\u05D0\u05D9',
      en: 'Appointment optimization, automation, staff training, and inventory management',
    },
    content: {
      he: `## \u05E9\u05D9\u05DE\u05D5\u05E9\u05D9\u05DD \u05E2\u05D9\u05E7\u05E8\u05D9\u05D9\u05DD

- **\u05D0\u05D5\u05E4\u05D8\u05D9\u05DE\u05D9\u05D6\u05E6\u05D9\u05D4 \u05E9\u05DC \u05EA\u05D5\u05E8\u05D9\u05DD** \u2014 \u05E9\u05D9\u05E4\u05D5\u05E8 \u05D6\u05D9\u05DE\u05D5\u05DF \u05EA\u05D5\u05E8\u05D9\u05DD \u05D5\u05D4\u05E4\u05D7\u05EA\u05EA \u05D1\u05D9\u05D8\u05D5\u05DC\u05D9\u05DD
- **\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4 \u05E9\u05DC \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4** \u2014 \u05D9\u05E6\u05D9\u05E8\u05EA \u05E1\u05E7\u05E8\u05D9\u05E4\u05D8\u05D9\u05DD \u05DC\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05D7\u05D5\u05D6\u05E8\u05D5\u05EA
- **\u05D7\u05D5\u05DE\u05E8\u05D9 \u05D4\u05DB\u05E9\u05E8\u05D4 \u05DC\u05E6\u05D5\u05D5\u05EA** \u2014 \u05D9\u05E6\u05D9\u05E8\u05EA \u05DE\u05D3\u05E8\u05D9\u05DB\u05D9\u05DD \u05D5\u05E4\u05E8\u05D5\u05D8\u05D5\u05E7\u05D5\u05DC\u05D9\u05DD \u05DC\u05E6\u05D5\u05D5\u05EA \u05D4\u05DE\u05E8\u05E4\u05D0\u05D4
- **\u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05DC\u05D0\u05D9** \u2014 \u05DE\u05E2\u05E7\u05D1 \u05D0\u05D7\u05E8 \u05D7\u05D5\u05DE\u05E8\u05D9\u05DD \u05E8\u05E4\u05D5\u05D0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D6\u05DB\u05D5\u05E8\u05D5\u05EA \u05D4\u05D6\u05DE\u05E0\u05D4

### \u05E4\u05E8\u05D5\u05DE\u05E4\u05D8\u05D9\u05DD \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4

\`\`\`
\u05E6\u05D5\u05E8 \u05EA\u05D1\u05E0\u05D9\u05EA \u05DC\u05D6\u05D9\u05DE\u05D5\u05DF \u05EA\u05D5\u05E8\u05D9\u05DD \u05E9\u05DE\u05E4\u05D7\u05D9\u05EA\u05D4 \u05D1\u05D9\u05D8\u05D5\u05DC\u05D9\u05DD \u05D1-30%. \u05DB\u05DC\u05D5\u05DC: SMS \u05EA\u05D6\u05DB\u05D5\u05E8\u05EA, \u05D0\u05D9\u05E9\u05D5\u05E8 \u05D0\u05D5\u05E0\u05DC\u05D9\u05D9\u05DF, \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05D2\u05DE\u05D9\u05E9\u05D4.
\`\`\`

\`\`\`
\u05E6\u05D5\u05E8 \u05E8\u05E9\u05D9\u05DE\u05EA \u05E6'\u05E7\u05DC\u05D9\u05E1\u05D8 \u05D9\u05D5\u05DE\u05D9\u05EA \u05DC\u05E4\u05EA\u05D9\u05D7\u05EA \u05DE\u05E8\u05E4\u05D0\u05EA \u05D3\u05E8\u05DE\u05D8\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4 \u2014 \u05DB\u05D5\u05DC\u05DC \u05D4\u05DB\u05E0\u05EA \u05D7\u05D3\u05E8\u05D9\u05DD, \u05E6\u05D9\u05D5\u05D3, \u05D1\u05D3\u05D9\u05E7\u05EA \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD.
\`\`\`

### \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DE\u05D5\u05DE\u05DC\u05E6\u05EA
- **Claude Code** \u2014 \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D5\u05EA \u05D5\u05E1\u05E7\u05E8\u05D9\u05E4\u05D8\u05D9\u05DD
- **API** \u2014 \u05DC\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4 \u05E2\u05DD \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05E7\u05D9\u05D9\u05DE\u05D5\u05EA

### \uD83D\uDD12 \u05D4\u05E2\u05E8\u05D4 \u05D1\u05E0\u05D5\u05E9\u05D0 \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA
> **\u05D1\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D5\u05EA \u05E9\u05DE\u05E2\u05E8\u05D1\u05D5\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9 \u05DE\u05D8\u05D5\u05E4\u05DC\u05D9\u05DD, \u05D5\u05D3\u05D0\u05D5 \u05E9\u05D4\u05DE\u05D9\u05D3\u05E2 \u05DE\u05D5\u05D2\u05DF \u05D5\u05DE\u05D5\u05E6\u05E4\u05DF.** \u05D4\u05E9\u05EA\u05DE\u05E9\u05D5 \u05D1-API \u05E2\u05DD \u05D4\u05E1\u05DB\u05DE\u05D9 \u05E2\u05D9\u05D1\u05D5\u05D3 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD.`,
      en: `## Key Use Cases

- **Appointment optimization** \u2014 Improve scheduling and reduce cancellations
- **Workflow automation** \u2014 Create scripts for recurring tasks
- **Staff training materials** \u2014 Generate guides and protocols for clinic staff
- **Inventory management** \u2014 Track medical supplies and order reminders

### Example Prompts

\`\`\`
Create an appointment scheduling template that reduces cancellations by 30%. Include: SMS reminders, online confirmation, flexible scheduling policies.
\`\`\`

\`\`\`
Create a daily opening checklist for a dermatology clinic \u2014 including room preparation, equipment check, and supply verification.
\`\`\`

### Recommended Platform
- **Claude Code** \u2014 For creating automations and scripts
- **API** \u2014 For integration with existing systems

### \uD83D\uDD12 Privacy Note
> **When automating workflows involving patient data, ensure all information is protected and encrypted.** Use the API with data processing agreements.`,
    },
  },
  {
    id: 'marketing',
    icon: '\uD83D\uDCE3',
    title: { he: '\u05E9\u05D9\u05D5\u05D5\u05E7 \u05E8\u05E4\u05D5\u05D0\u05D9', en: 'Medical Marketing' },
    description: {
      he: '\u05EA\u05D5\u05DB\u05DF \u05DC\u05D0\u05EA\u05E8, \u05E4\u05D5\u05E1\u05D8\u05D9\u05DD \u05D7\u05D9\u05E0\u05D5\u05DB\u05D9\u05D9\u05DD, SEO \u05E8\u05E4\u05D5\u05D0\u05D9',
      en: 'Website content, educational social posts, medical SEO',
    },
    content: {
      he: `## \u05E9\u05D9\u05DE\u05D5\u05E9\u05D9\u05DD \u05E2\u05D9\u05E7\u05E8\u05D9\u05D9\u05DD

- **\u05EA\u05D5\u05DB\u05DF \u05DC\u05D0\u05EA\u05E8** \u2014 \u05D3\u05E4\u05D9 \u05E9\u05D9\u05E8\u05D5\u05EA, \u05D3\u05E4\u05D9 \u05E0\u05D7\u05D9\u05EA\u05D4, \u05EA\u05D9\u05D0\u05D5\u05E8\u05D9 \u05D8\u05D9\u05E4\u05D5\u05DC\u05D9\u05DD
- **\u05E4\u05D5\u05E1\u05D8\u05D9\u05DD \u05D7\u05D9\u05E0\u05D5\u05DB\u05D9\u05D9\u05DD \u05DC\u05E8\u05E9\u05EA\u05D5\u05EA \u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA** \u2014 \u05D0\u05D9\u05E0\u05E1\u05D8\u05D2\u05E8\u05DD, \u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7, \u05DC\u05D9\u05E0\u05E7\u05D3\u05D0\u05D9\u05DF
- **\u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D9\u05EA \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05DE\u05D8\u05D5\u05E4\u05DC\u05D9\u05DD** \u2014 \u05D0\u05D9\u05E1\u05D5\u05E3 \u05D5\u05D4\u05E6\u05D2\u05EA \u05D7\u05D5\u05D5\u05D9\u05D5\u05EA \u05D7\u05D9\u05D5\u05D1\u05D9\u05D5\u05EA
- **SEO \u05E8\u05E4\u05D5\u05D0\u05D9** \u2014 \u05D0\u05D5\u05E4\u05D8\u05D9\u05DE\u05D9\u05D6\u05E6\u05D9\u05D4 \u05DC\u05DE\u05E0\u05D5\u05E2\u05D9 \u05D7\u05D9\u05E4\u05D5\u05E9

### \u05E4\u05E8\u05D5\u05DE\u05E4\u05D8\u05D9\u05DD \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4

\`\`\`
\u05DB\u05EA\u05D5\u05D1 \u05E4\u05D5\u05E1\u05D8 \u05D0\u05D9\u05E0\u05E1\u05D8\u05D2\u05E8\u05DD \u05D7\u05D9\u05E0\u05D5\u05DB\u05D9 \u05E2\u05DC \u05D7\u05E9\u05D9\u05D1\u05D5\u05EA \u05D1\u05D3\u05D9\u05E7\u05D5\u05EA \u05E9\u05D5\u05DE\u05D5\u05EA \u05E9\u05E0\u05EA\u05D9\u05D5\u05EA. \u05D4\u05D8\u05D5\u05DF: \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9, \u05DE\u05E2\u05D5\u05D3\u05D3 \u05DC\u05E4\u05E2\u05D5\u05DC\u05D4, \u05E2\u05DD \u05E7\u05E8\u05D9\u05D0\u05D4 \u05DC\u05E4\u05E2\u05D5\u05DC\u05D4 (CTA).
\`\`\`

\`\`\`
\u05E6\u05D5\u05E8 \u05E1\u05D3\u05E8\u05EA \u05EA\u05D5\u05DB\u05DF \u05E9\u05D1\u05D5\u05E2\u05D9\u05EA \u05DC\u05D0\u05D9\u05E0\u05E1\u05D8\u05D2\u05E8\u05DD \u05E9\u05DC \u05DE\u05E8\u05E4\u05D0\u05EA \u05D3\u05E8\u05DE\u05D8\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4: \u05D8\u05D9\u05E4\u05D9\u05DD \u05DC\u05E2\u05D5\u05E8, \u05DE\u05D9\u05EA\u05D5\u05E1\u05D9\u05DD, \u05DE\u05E7\u05E8\u05D9\u05DD \u05DE\u05D4\u05DE\u05E8\u05E4\u05D0\u05D4.
\`\`\`

### \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DE\u05D5\u05DE\u05DC\u05E6\u05EA
- **claude.ai \u05E2\u05DD Artifacts** \u2014 \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05D5\u05DB\u05DF \u05D5\u05D9\u05D6\u05D5\u05D0\u05DC\u05D9 \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA

### \uD83D\uDD12 \u05D4\u05E2\u05E8\u05D4 \u05D1\u05E0\u05D5\u05E9\u05D0 \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA
> **\u05D4\u05E7\u05E4\u05D9\u05D3\u05D5 \u05E2\u05DC \u05D0\u05EA\u05D9\u05E7\u05D4 \u05E8\u05E4\u05D5\u05D0\u05D9\u05EA \u05D1\u05E9\u05D9\u05D5\u05D5\u05E7.** \u05D0\u05DC \u05EA\u05D1\u05D8\u05D9\u05D7\u05D5 \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D5\u05D0\u05DC \u05EA\u05E9\u05EA\u05DE\u05E9\u05D5 \u05D1\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC \u05DE\u05D8\u05D5\u05E4\u05DC\u05D9\u05DD \u05D0\u05DE\u05D9\u05EA\u05D9\u05D9\u05DD \u05DC\u05DC\u05D0 \u05D4\u05E1\u05DB\u05DE\u05D4.`,
      en: `## Key Use Cases

- **Website content** \u2014 Service pages, landing pages, treatment descriptions
- **Educational social media posts** \u2014 Instagram, Facebook, LinkedIn
- **Patient testimonial strategy** \u2014 Collecting and presenting positive experiences
- **Medical SEO** \u2014 Search engine optimization for medical practices

### Example Prompts

\`\`\`
Write an educational Instagram post about the importance of annual mole checks. Tone: professional, encouraging action, with a clear CTA (call to action).
\`\`\`

\`\`\`
Create a weekly Instagram content plan for a dermatology clinic: skin tips, myths, cases from the clinic.
\`\`\`

### Recommended Platform
- **claude.ai with Artifacts** \u2014 For creating content and visuals in real time

### \uD83D\uDD12 Privacy Note
> **Maintain medical ethics in marketing.** Never promise treatment results and never use real patient photos without explicit consent.`,
    },
  },
  {
    id: 'privacy',
    icon: '\uD83D\uDD12',
    title: { he: '\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05D5\u05E1\u05D5\u05D3\u05D9\u05D5\u05EA \u05E8\u05E4\u05D5\u05D0\u05D9\u05EA', en: 'Medical Privacy & Confidentiality' },
    description: {
      he: '\u05E2\u05E7\u05E8\u05D5\u05E0\u05D5\u05EA HIPAA, \u05D0\u05E0\u05D5\u05E0\u05D9\u05DE\u05D9\u05D6\u05E6\u05D9\u05D4, \u05D3\u05E4\u05D5\u05E1\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D8\u05D5\u05D7\u05D9\u05DD',
      en: 'HIPAA compliance, anonymization, secure usage patterns',
    },
    content: {
      he: `## \u05E2\u05E7\u05E8\u05D5\u05E0\u05D5\u05EA \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD

- **\u05E2\u05DE\u05D9\u05D3\u05D4 \u05D1\u05D3\u05D9\u05E0\u05D9 \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA** \u2014 HIPAA, \u05D7\u05D5\u05E7 \u05D4\u05D2\u05E0\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05D4\u05D9\u05E9\u05E8\u05D0\u05DC\u05D9, \u05EA\u05E7\u05E0\u05D5\u05EA \u05DE\u05E7\u05D5\u05DE\u05D9\u05D5\u05EA
- **\u05D8\u05DB\u05E0\u05D9\u05E7\u05D5\u05EA \u05D0\u05E0\u05D5\u05E0\u05D9\u05DE\u05D9\u05D6\u05E6\u05D9\u05D4** \u2014 \u05E9\u05D9\u05D8\u05D5\u05EA \u05DC\u05D4\u05E1\u05E8\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD \u05DE\u05D6\u05D4\u05D9\u05DD
- **\u05D3\u05E4\u05D5\u05E1\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D8\u05D5\u05D7\u05D9\u05DD \u05D1-Claude** \u2014 \u05D0\u05D9\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D1\u05D8\u05D7\u05D4
- **\u05DE\u05D4 \u05D0\u05E1\u05D5\u05E8 \u05DC\u05E9\u05EA\u05E3 \u05E2\u05DD AI** \u2014 \u05E8\u05E9\u05D9\u05DE\u05D4 \u05D1\u05E8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D4 \u05DC\u05D0 \u05DC\u05E9\u05DC\u05D5\u05D7

### \u05E9\u05D9\u05D8\u05D5\u05EA \u05D0\u05E0\u05D5\u05E0\u05D9\u05DE\u05D9\u05D6\u05E6\u05D9\u05D4

1. **\u05D4\u05E1\u05D9\u05E8\u05D5 \u05E9\u05DE\u05D5\u05EA** \u2014 \u05D4\u05E9\u05EA\u05DE\u05E9\u05D5 \u05D1\u05E9\u05DE\u05D5\u05EA \u05D1\u05D3\u05D5\u05D9\u05D9\u05DD \u05D0\u05D5 \u05E8\u05D0\u05E9\u05D9 \u05EA\u05D9\u05D1\u05D5\u05EA
2. **\u05D4\u05E1\u05D9\u05E8\u05D5 \u05EA.\u05D6. \u05D5\u05DE\u05E1\u05E4\u05E8\u05D9 \u05D6\u05D4\u05D5\u05EA** \u2014 \u05DC\u05E2\u05D5\u05DC\u05DD \u05D0\u05DC \u05EA\u05DB\u05DC\u05D9\u05DC\u05D5 \u05EA.\u05D6., \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF, \u05D0\u05D5 \u05DE\u05E1\u05E4\u05E8 \u05D6\u05D4\u05D5\u05EA
3. **\u05D4\u05D7\u05DC\u05D9\u05E4\u05D5 \u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD** \u2014 \u05D4\u05E9\u05EA\u05DE\u05E9\u05D5 \u05D1\u05D8\u05D5\u05D5\u05D7\u05D9 \u05D2\u05D9\u05DC\u05D0\u05D9\u05DD \u05D1\u05DE\u05E7\u05D5\u05DD \u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD \u05DE\u05D3\u05D5\u05D9\u05D9\u05E7\u05D9\u05DD
4. **\u05D4\u05E2\u05D3\u05D9\u05E4\u05D5 \u05DB\u05DC\u05D9\u05DD \u05DE\u05E7\u05D5\u05DE\u05D9\u05D9\u05DD** \u2014 \u05DB\u05E9\u05D0\u05E4\u05E9\u05E8, \u05D4\u05E9\u05EA\u05DE\u05E9\u05D5 \u05D1\u05DB\u05DC\u05D9\u05DD \u05E9\u05E8\u05E6\u05D9\u05DD \u05DE\u05E7\u05D5\u05DE\u05D9\u05EA

### \u05DE\u05D4 **\u05D0\u05E1\u05D5\u05E8** \u05DC\u05E9\u05DC\u05D5\u05D7 \u05DC-Claude

- \u05E9\u05DE\u05D5\u05EA \u05DE\u05DC\u05D0\u05D9\u05DD \u05E9\u05DC \u05DE\u05D8\u05D5\u05E4\u05DC\u05D9\u05DD
- \u05DE\u05E1\u05E4\u05E8\u05D9 \u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA
- \u05DE\u05E1\u05E4\u05E8\u05D9 \u05D8\u05DC\u05E4\u05D5\u05DF, \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC
- \u05EA\u05D0\u05E8\u05D9\u05DB\u05D9 \u05DC\u05D9\u05D3\u05D4 \u05DE\u05D3\u05D5\u05D9\u05D9\u05E7\u05D9\u05DD
- \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC \u05DE\u05D8\u05D5\u05E4\u05DC\u05D9\u05DD

### \u05D7\u05D5\u05E7 \u05D4\u05D2\u05E0\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05D4\u05D9\u05E9\u05E8\u05D0\u05DC\u05D9
> \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC, \u05D7\u05D5\u05E7 \u05D4\u05D2\u05E0\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA (\u05EA\u05E9\u05E2"\u05D1) \u05DE\u05D2\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05DE\u05D9\u05D3\u05E2 \u05E8\u05E4\u05D5\u05D0\u05D9. \u05D5\u05D3\u05D0\u05D5 \u05E9\u05D4\u05E2\u05D1\u05E8\u05EA \u05DE\u05D9\u05D3\u05E2 \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05E2\u05E0\u05DF \u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D7\u05D5\u05E7.

### \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DE\u05D5\u05DE\u05DC\u05E6\u05EA
- **Desktop App (\u05E2\u05DD MCP \u05DE\u05E7\u05D5\u05DE\u05D9)** \u2014 \u05DC\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E8\u05D2\u05D9\u05E9\u05D9\u05DD \u05D9\u05D5\u05EA\u05E8
- **API \u05E2\u05DD \u05D4\u05E1\u05DB\u05DE\u05D9 \u05E2\u05D9\u05D1\u05D5\u05D3 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD** \u2014 \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DE\u05D5\u05E1\u05D3\u05D9

### \uD83D\uDD12 \u05D4\u05E2\u05E8\u05D4 \u05D1\u05E0\u05D5\u05E9\u05D0 \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA
> **\u05D6\u05D4\u05D5 \u05D4\u05E0\u05D5\u05E9\u05D0 \u05D4\u05D7\u05E9\u05D5\u05D1 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D1\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1-AI \u05D1\u05E8\u05E4\u05D5\u05D0\u05D4.** \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05D4\u05DE\u05D8\u05D5\u05E4\u05DC \u05D4\u05D9\u05D0 \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05D4\u05E8\u05D5\u05E4\u05D0 \u2014 \u05EA\u05DE\u05D9\u05D3.`,
      en: `## Core Principles

- **Privacy compliance** \u2014 HIPAA, Israeli Privacy Protection Law, local regulations
- **Anonymization techniques** \u2014 Methods for removing identifying information
- **Secure Claude usage patterns** \u2014 How to use Claude safely
- **What NOT to share with AI** \u2014 Clear list of what to never send

### Anonymization Methods

1. **Remove names** \u2014 Use pseudonyms or initials
2. **Remove IDs and identification numbers** \u2014 Never include ID numbers, phone numbers, or identity documents
3. **Replace dates** \u2014 Use age ranges instead of exact birth dates
4. **Prefer local tools** \u2014 When possible, use tools that run locally

### What you must **NEVER** send to Claude

- Full patient names
- ID or social security numbers
- Phone numbers, email addresses
- Exact birth dates
- Patient photographs

### Israeli Privacy Protection Law
> In Israel, the Privacy Protection Law (1981) restricts the use of medical information. Ensure that transferring data to cloud services complies with the law.

### Recommended Platform
- **Desktop App (with local MCP)** \u2014 For more sensitive data
- **API with data processing agreements** \u2014 For institutional use

### \uD83D\uDD12 Privacy Note
> **This is the most important topic when using AI in medicine.** Patient privacy is always the physician's responsibility.`,
    },
  },
];

export default function MedicalUseCasesSection() {
  const { dir, lang } = useLang();
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to content when a card is selected
  useEffect(() => {
    if (activeCard && contentRef.current) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [activeCard]);

  const activeData = medicalUseCases.find(c => c.id === activeCard);

  return (
    <section id="medical-uses" className="py-20 bg-white" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {lang === 'he' ? 'Claude AI \u05D1\u05E4\u05E8\u05E7\u05D8\u05D9\u05E7\u05D4 \u05D4\u05E8\u05E4\u05D5\u05D0\u05D9\u05EA' : 'Claude AI in Medical Practice'}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {lang === 'he'
              ? '\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05DB\u05DC \u05EA\u05D7\u05D5\u05DD \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05E9\u05D9\u05DE\u05D5\u05E9, \u05E4\u05E8\u05D5\u05DE\u05E4\u05D8\u05D9\u05DD \u05DE\u05D5\u05DB\u05E0\u05D9\u05DD, \u05D5\u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4'
              : 'Click each area for use cases, ready prompts, and platform recommendations'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {medicalUseCases.map(useCase => {
            const isActive = activeCard === useCase.id;
            return (
              <div
                key={useCase.id}
                onClick={() => setActiveCard(isActive ? null : useCase.id)}
                className={`glass-card p-6 group cursor-pointer transition-all border ${
                  isActive
                    ? 'border-claude-orange ring-2 ring-claude-orange/20 shadow-lg'
                    : 'border-transparent hover:border-claude-orange/30'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{useCase.icon}</span>
                  <div className="flex items-center gap-2">
                    {isActive ? (
                      <ChevronUp size={18} className="text-claude-orange" />
                    ) : (
                      <ChevronDown size={18} className="text-text-muted" />
                    )}
                  </div>
                </div>
                <h3 className={`text-lg font-bold mb-2 transition-colors ${
                  isActive ? 'text-claude-orange' : 'text-text-primary group-hover:text-claude-orange'
                }`}>
                  {useCase.title[lang]}
                </h3>
                <p className="text-sm text-text-secondary">
                  {useCase.description[lang]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Inline content viewer */}
        {activeData && (
          <div ref={contentRef} className="mt-10">
            <div className="glass-card p-6 md:p-10 relative">
              {/* Close button */}
              <button
                onClick={() => setActiveCard(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-claude-cream text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Card header */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="text-3xl">{activeData.icon}</span>
                <h2 className="text-2xl font-bold text-text-primary">{activeData.title[lang]}</h2>
              </div>

              {/* Content */}
              <article className="prose prose-lg max-w-none">
                {renderContent(activeData.content[lang])}
              </article>

              {/* Bottom close button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setActiveCard(null)}
                  className="px-6 py-2.5 rounded-xl bg-claude-orange text-white hover:bg-claude-orange-dark transition-colors font-medium"
                >
                  {lang === 'he' ? '\u05E1\u05D2\u05D5\u05E8' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
