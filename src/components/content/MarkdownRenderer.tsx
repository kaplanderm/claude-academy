'use client';
import React from 'react';
import { useLang } from '@/lib/LangContext';
import type { Lang } from '@/lib/i18n';
import type { Level } from '@/content/types';

/**
 * Single consolidated renderer for the mini-markdown used across lessons, blog
 * posts, medical use cases, and feature guides. Replaces the three near-identical
 * copies that previously lived in LessonViewer, medical/[slug]/page, and BlogSection.
 *
 * Content comes only from internal static data files, never user input. formatInline
 * converts a fixed set of patterns into a bounded HTML subset, so XSS risk is bounded.
 *
 * Supported syntax: # ## ### headings (rendered as h2/h3/h4 so the page h1 stays unique),
 * **bold**, `code`, [text](url), - and 1. lists, > blockquote, | tables |, ``` code blocks,
 * - [ ] / - [x] checkboxes, and :::beginner / :::advanced ... ::: callouts.
 *
 * When `level` is provided, callouts are filtered: a :::beginner block shows only at
 * the beginner level, a :::advanced block only at the advanced level. When `level` is
 * omitted (blog / medical), every callout renders as a styled box.
 */

// Wrap each maximal LTR run (Latin words, numbers, slashes, paths, pure-Latin
// parentheticals) in <bdi> so the Unicode bidi algorithm cannot reorder the
// neutral punctuation that sits between a Hebrew run and an embedded English/number
// run. This is the core fix for RTL jumbling. Terminal sentence punctuation is left
// OUTSIDE the run so it stays with the Hebrew text.
const LTR_RUN = /(\([A-Za-z0-9][A-Za-z0-9 .,/+:'"-]*\)|[A-Za-z][A-Za-z0-9.+/\\:'"@#&_-]*[A-Za-z0-9]|\d[\d.,:/x+-]*\d|[A-Za-z]|\d)/g;

// Operates on the post-markdown HTML string. Splits on tags so it never wraps inside
// an attribute or an already-isolated <code>; only visible text runs are wrapped.
function isolateLtr(html: string): string {
  let inCode = false;
  return html
    .split(/(<[^>]+>)/)
    .map((seg) => {
      if (seg.startsWith('<')) {
        if (/^<code\b/i.test(seg)) inCode = true;
        else if (/^<\/code>/i.test(seg)) inCode = false;
        return seg;
      }
      if (inCode || !seg) return seg;
      return seg.replace(LTR_RUN, '<bdi>$1</bdi>');
    })
    .join('');
}

const formatInline = (text: string): string => {
  const html = text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-text-primary">$1</strong>')
    .replace(/`(.+?)`/g, '<code dir="ltr" class="px-1.5 py-0.5 rounded bg-claude-cream text-claude-brown text-sm font-mono" style="unicode-bidi:isolate">$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, (_m, label: string, href: string) => {
      const external = /^https?:\/\//.test(href);
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${href}" dir="auto" class="link-accent"${attrs}>${label}</a>`;
    })
    .replace(/❌/g, '<span class="text-red-600">❌</span>')
    .replace(/✅/g, '<span class="text-green-700">✅</span>');
  return isolateLtr(html);
};

const Inline: React.FC<{ html: string }> = ({ html }) => (
  <span dangerouslySetInnerHTML={{ __html: html }} />
);

export interface RenderOptions {
  level?: Level;
  lang: Lang;
}

export function renderMarkdown(content: string, opts: RenderOptions): React.ReactElement[] {
  const { level, lang } = opts;
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];

  let inCodeBlock = false;
  let codeContent = '';
  let inTable = false;
  let tableRows: string[][] = [];
  let listBuffer: { type: 'ul' | 'ol'; items: React.ReactElement[] } | null = null;

  // callout state
  let inCallout: 'beginner' | 'advanced' | null = null;
  let calloutBuffer: React.ReactElement[] = [];
  let calloutSkipped = false; // current callout is hidden for this level

  const getTarget = () => (inCallout && !calloutSkipped ? calloutBuffer : elements);

  const flushList = () => {
    if (!listBuffer) return;
    const target = getTarget();
    const key = `list-${elements.length}-${target.length}`;
    const cls = 'ps-6 my-3 space-y-1.5 text-text-secondary';
    target.push(
      listBuffer.type === 'ol'
        ? <ol key={key} dir="auto" className={`list-decimal ${cls}`}>{listBuffer.items}</ol>
        : <ul key={key} dir="auto" className={`list-disc ${cls}`}>{listBuffer.items}</ul>
    );
    listBuffer = null;
  };

  const flushTable = (key: string) => {
    if (!inTable) return;
    const rows = tableRows;
    inTable = false;
    tableRows = [];
    if (rows.length === 0) return;
    getTarget().push(
      <div key={key} className="overflow-x-auto my-4">
        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-claude-warm">
              {rows[0]?.map((cell, ci) => (
                <th key={ci} scope="col" className="p-3 text-sm font-bold text-text-primary border-b border-claude-peach text-start">
                  <Inline html={formatInline(cell)} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(1).map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-claude-cream/30'}>
                {row.map((cell, ci) => (
                  <td key={ci} className="p-3 text-sm text-text-secondary border-b border-border-color/30 text-start">
                    <Inline html={formatInline(cell)} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const flushCallout = (idx: number) => {
    if (!inCallout) return;
    flushList();
    flushTable(`callout-table-${idx}`);
    if (!calloutSkipped) {
      const isBeginner = inCallout === 'beginner';
      const emoji = isBeginner ? '\u{1F4A1}' : '\u{1F527}';
      const label = isBeginner
        ? (lang === 'he' ? 'הסבר למתחילים' : 'For beginners')
        : (lang === 'he' ? 'למתקדמים' : 'For advanced users');
      const classes = isBeginner ? 'bg-green-50 border-green-400' : 'bg-blue-50 border-blue-400';
      elements.push(
        <div key={`callout-${idx}`} className={`${classes} border-s-4 px-4 py-3 my-4 rounded-e-lg`}>
          <div className="text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wide">
            <span aria-hidden="true">{emoji}</span> {label}
          </div>
          {calloutBuffer}
        </div>
      );
    }
    calloutBuffer = [];
    inCallout = null;
    calloutSkipped = false;
  };

  lines.forEach((raw, i) => {
    const line = raw;
    const trimmed = line.trim();

    // code fences
    if (trimmed.startsWith('```')) {
      flushList();
      flushTable(`t-${i}`);
      if (inCodeBlock) {
        getTarget().push(
          <pre key={`code-${i}`} className="code-block my-4 overflow-x-auto" dir="ltr">
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

    // callout markers
    if (trimmed === ':::beginner' || trimmed === ':::advanced') {
      flushList();
      flushTable(`t-${i}`);
      flushCallout(i);
      inCallout = trimmed === ':::beginner' ? 'beginner' : 'advanced';
      calloutBuffer = [];
      calloutSkipped = level !== undefined && level !== inCallout;
      return;
    }
    if (trimmed === ':::') {
      flushCallout(i);
      return;
    }

    // tables
    if (trimmed.startsWith('|')) {
      flushList();
      if (!inTable) { inTable = true; tableRows = []; }
      const cells = line.split('|').filter(c => c.trim() !== '').map(c => c.trim());
      if (!cells.every(c => c.match(/^[-:]+$/))) tableRows.push(cells);
      return;
    } else if (inTable) {
      flushTable(`table-${i}`);
    }

    // checkboxes
    if (trimmed.startsWith('- [ ]') || trimmed.startsWith('- [x]')) {
      flushList();
      const checked = trimmed.includes('[x]');
      const text = trimmed.replace(/- \[.\]\s*/, '');
      getTarget().push(
        <div key={i} dir="auto" className="flex items-start gap-2 my-1.5 text-text-secondary">
          <span
            aria-hidden="true"
            className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
              checked ? 'bg-interactive border-interactive text-white' : 'border-gray-400'
            }`}
          >
            {checked ? '✓' : ''}
          </span>
          <Inline html={formatInline(text)} />
        </div>
      );
      return;
    }

    // lists
    if (trimmed.startsWith('- ')) {
      const text = trimmed.slice(2);
      if (!listBuffer || listBuffer.type !== 'ul') { flushList(); listBuffer = { type: 'ul', items: [] }; }
      listBuffer.items.push(<li key={i} dir="auto" className="leading-relaxed"><Inline html={formatInline(text)} /></li>);
      return;
    }
    if (trimmed.match(/^\d+\.\s/)) {
      const text = trimmed.replace(/^\d+\.\s/, '');
      if (!listBuffer || listBuffer.type !== 'ol') { flushList(); listBuffer = { type: 'ol', items: [] }; }
      listBuffer.items.push(<li key={i} dir="auto" className="leading-relaxed"><Inline html={formatInline(text)} /></li>);
      return;
    }

    flushList();

    // blockquote
    if (trimmed.startsWith('> ')) {
      getTarget().push(
        <blockquote key={i} dir="auto" className="border-s-4 border-claude-orange/40 bg-claude-cream/50 px-4 py-2 my-3 rounded-e-lg text-text-secondary">
          <Inline html={formatInline(trimmed.slice(2))} />
        </blockquote>
      );
    }
    // headings: content # -> h2, ## -> h3, ### -> h4 (page already owns the single h1)
    else if (line.startsWith('### ')) {
      getTarget().push(<h4 key={i} dir="auto" className="text-lg font-semibold text-text-primary mt-5 mb-2"><Inline html={formatInline(line.slice(4))} /></h4>);
    } else if (line.startsWith('## ')) {
      getTarget().push(<h3 key={i} dir="auto" className="text-xl font-bold text-text-primary mt-6 mb-3"><Inline html={formatInline(line.slice(3))} /></h3>);
    } else if (line.startsWith('# ')) {
      getTarget().push(<h2 key={i} dir="auto" className="text-2xl font-bold text-text-primary mt-8 mb-3 pb-2 border-b border-orange-100"><Inline html={formatInline(line.slice(2))} /></h2>);
    } else if (trimmed) {
      getTarget().push(<p key={i} dir="auto" className="text-text-secondary my-2 leading-relaxed"><Inline html={formatInline(line)} /></p>);
    } else {
      getTarget().push(<div key={i} className="h-2" />);
    }
  });

  flushList();
  flushTable('table-end');
  flushCallout(lines.length);
  return elements;
}

export default function MarkdownRenderer({ content, level }: { content: string; level?: Level }) {
  const { lang } = useLang();
  return <>{renderMarkdown(content, { level, lang })}</>;
}
