'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useLang } from '@/lib/LangContext';
import { blogPosts } from '@/data/courses';
import { Clock, ArrowRight, ArrowLeft, Lightbulb, RefreshCw, Target, X } from 'lucide-react';

const categoryIcons: Record<string, typeof Lightbulb> = {
  'five-min': Lightbulb,
  'updates': RefreshCw,
  'tips': Target,
};

const categoryColors: Record<string, string> = {
  'five-min': '#E07A2F',
  'updates': '#4A90D9',
  'tips': '#27AE60',
};

// Simple markdown-like rendering (same pattern as BonusSection)
const formatInline = (text: string): string => {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-text-primary">$1</strong>')
    .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-claude-cream text-claude-brown text-sm font-mono">$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-claude-orange hover:underline" target="_blank">$1</a>');
};

// Content here comes only from internal static data files (src/data/courses.ts blogPosts),
// never from user input. The formatInline helper only converts a fixed set of
// markdown-like patterns into a small HTML subset, so XSS risk is bounded.
const Inline: React.FC<{ html: string }> = ({ html }) => (
  <span dangerouslySetInnerHTML={{ __html: html }} />
);

const renderContent = (content: string): React.ReactElement[] => {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let inCodeBlock = false;
  let codeContent = '';
  let inCallout: 'beginner' | 'advanced' | null = null;
  let calloutBuffer: React.ReactElement[] = [];
  let listBuffer: { type: 'ul' | 'ol'; items: React.ReactElement[] } | null = null;

  const getTarget = () => (inCallout ? calloutBuffer : elements);

  const flushList = () => {
    if (!listBuffer) return;
    const target = getTarget();
    const key = `list-${target.length}`;
    if (listBuffer.type === 'ol') {
      target.push(
        <ol key={key} className="list-decimal mr-6 my-3 space-y-1 text-text-secondary">{listBuffer.items}</ol>
      );
    } else {
      target.push(
        <ul key={key} className="list-disc mr-6 my-3 space-y-1 text-text-secondary">{listBuffer.items}</ul>
      );
    }
    listBuffer = null;
  };

  const flushCallout = (idx: number) => {
    if (!inCallout) return;
    flushList();
    const isBeginner = inCallout === 'beginner';
    const emoji = isBeginner ? '\u{1F4A1}' : '\u{1F52C}';
    const label = isBeginner ? 'Beginner / למתחיל' : 'Advanced / למתקדם';
    const classes = isBeginner
      ? 'bg-green-50 border-green-300'
      : 'bg-blue-50 border-blue-300';
    const kids = calloutBuffer;
    elements.push(
      <div key={`callout-${idx}`} className={`${classes} border-l-4 px-4 py-3 my-4 rounded-r-lg`}>
        <div className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-wide">{emoji} {label}</div>
        {kids}
      </div>
    );
    calloutBuffer = [];
    inCallout = null;
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      flushList();
      if (inCodeBlock) {
        getTarget().push(
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

    if (trimmed === ':::beginner') {
      flushList();
      flushCallout(i);
      inCallout = 'beginner';
      calloutBuffer = [];
      return;
    }
    if (trimmed === ':::advanced') {
      flushList();
      flushCallout(i);
      inCallout = 'advanced';
      calloutBuffer = [];
      return;
    }
    if (trimmed === ':::') {
      flushCallout(i);
      return;
    }

    if (trimmed.startsWith('- ')) {
      const text = trimmed.slice(2);
      if (!listBuffer || listBuffer.type !== 'ul') {
        flushList();
        listBuffer = { type: 'ul', items: [] };
      }
      listBuffer.items.push(
        <li key={i}><Inline html={formatInline(text)} /></li>
      );
      return;
    }
    if (trimmed.match(/^\d+\.\s/)) {
      const text = trimmed.replace(/^\d+\.\s/, '');
      if (!listBuffer || listBuffer.type !== 'ol') {
        flushList();
        listBuffer = { type: 'ol', items: [] };
      }
      listBuffer.items.push(
        <li key={i}><Inline html={formatInline(text)} /></li>
      );
      return;
    }

    flushList();

    if (trimmed.startsWith('> ')) {
      const text = trimmed.slice(2);
      getTarget().push(
        <blockquote key={i} className="border-l-4 border-claude-orange/40 bg-claude-cream/50 px-4 py-2 my-3 rounded-r-lg text-text-secondary">
          <Inline html={formatInline(text)} />
        </blockquote>
      );
    } else if (line.startsWith('# ')) {
      getTarget().push(<h1 key={i} className="text-3xl font-bold text-text-primary mt-8 mb-4">{line.slice(2)}</h1>);
    } else if (line.startsWith('## ')) {
      getTarget().push(<h2 key={i} className="text-2xl font-bold text-text-primary mt-6 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      getTarget().push(<h3 key={i} className="text-xl font-semibold text-text-primary mt-5 mb-2">{line.slice(4)}</h3>);
    } else if (trimmed) {
      getTarget().push(
        <p key={i} className="text-text-secondary my-2 leading-relaxed">
          <Inline html={formatInline(line)} />
        </p>
      );
    } else {
      getTarget().push(<div key={i} className="h-2" />);
    }
  });

  flushList();
  flushCallout(lines.length);

  return elements;
};

export default function BlogSection() {
  const { t, dir, lang } = useLang();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBlogId, setActiveBlogId] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: { he: 'הכל', en: 'All' } },
    { id: 'updates', label: { he: '🔄 עדכונים', en: '🔄 Updates' } },
    { id: 'five-min', label: { he: '💡 5 דקות', en: '💡 5 Minutes' } },
    { id: 'tips', label: { he: '🎯 טיפים', en: '🎯 Tips' } },
  ];

  const filtered = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const activeBlogData = blogPosts.find(p => p.id === activeBlogId);

  // Scroll to content when a blog post is selected
  useEffect(() => {
    if (activeBlogId && contentRef.current) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [activeBlogId]);

  const videos = [
    {
      title: { he: 'קורס Claude Code למתחילים', en: 'Claude Code Full Course for Beginners' },
      channel: 'Sabrina Ramonov',
      videoId: 'fYX6hHC9FhQ',
      url: 'https://www.youtube.com/watch?v=fYX6hHC9FhQ',
    },
    {
      title: { he: 'MCP - הסבר מלא (Fireship)', en: 'MCP Explained - Fireship' },
      channel: 'Fireship',
      videoId: 'HyzlYwjoXOQ',
      url: 'https://www.youtube.com/watch?v=HyzlYwjoXOQ',
    },
    {
      title: { he: 'סדנת Prompt Engineering עם Anthropic', en: 'Prompt Workshop with Zack Witten (Anthropic)' },
      channel: 'AI Engineer',
      videoId: 'hkhDdcM5V94',
      url: 'https://www.youtube.com/watch?v=hkhDdcM5V94',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-claude-cream/30" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t('blog.title')}</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('blog.subtitle')}</p>
        </div>

        {/* Category tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-claude-orange text-white shadow-md'
                  : 'bg-white text-text-secondary hover:bg-claude-cream border border-border-color'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(post => {
            const color = categoryColors[post.category] || '#E07A2F';
            const isActive = activeBlogId === post.id;
            return (
              <article
                key={post.id}
                onClick={() => setActiveBlogId(isActive ? null : post.id)}
                className={`glass-card overflow-hidden group cursor-pointer transition-all border ${
                  isActive
                    ? 'border-claude-orange ring-2 ring-claude-orange/20 shadow-lg'
                    : 'border-transparent hover:border-claude-orange/30'
                }`}
              >
                {/* Color bar */}
                <div className="h-1.5" style={{ backgroundColor: color }} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ backgroundColor: `${color}15`, color }}
                    >
                      {post.category === 'updates' ? t('blog.latestUpdates')
                        : post.category === 'five-min' ? t('blog.fiveMinIdea')
                        : t('blog.tips')}
                    </span>
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <Clock size={12} /> {post.readTime} {t('common.minutes')}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 transition-colors ${
                    isActive ? 'text-claude-orange' : 'text-text-primary group-hover:text-claude-orange'
                  }`}>
                    {post.title[lang]}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-3 mb-4">
                    {post.excerpt[lang]}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-muted">{post.date}</span>
                    <span className="text-sm font-medium text-claude-orange flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t('blog.readMore')}
                      {dir === 'rtl' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Inline content viewer */}
        {activeBlogData && 'content' in activeBlogData && (activeBlogData as typeof activeBlogData & { content: { he: string; en: string } }).content && (
          <div ref={contentRef} className="mt-10">
            <div className="glass-card p-6 md:p-10 relative">
              {/* Close button */}
              <button
                onClick={() => setActiveBlogId(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-claude-cream text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Post header */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <h2 className="text-2xl font-bold text-text-primary">{activeBlogData.title[lang]}</h2>
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: `${categoryColors[activeBlogData.category] || '#E07A2F'}15`,
                    color: categoryColors[activeBlogData.category] || '#E07A2F'
                  }}
                >
                  {activeBlogData.category === 'updates' ? t('blog.latestUpdates')
                    : activeBlogData.category === 'five-min' ? t('blog.fiveMinIdea')
                    : t('blog.tips')}
                </span>
                <span className="text-sm text-text-muted flex items-center gap-1">
                  <Clock size={14} /> {activeBlogData.readTime} {t('common.minutes')}
                </span>
              </div>

              {/* Content */}
              <article className="prose prose-lg max-w-none">
                {renderContent(
                  (activeBlogData as typeof activeBlogData & { content: { he: string; en: string } }).content[lang]
                )}
              </article>

              {/* Bottom close button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setActiveBlogId(null)}
                  className="px-6 py-2.5 rounded-xl bg-claude-orange text-white hover:bg-claude-orange-dark transition-colors font-medium"
                >
                  {lang === 'he' ? 'סגור' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Video section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            {lang === 'he' ? '🎬 סרטונים מומלצים' : '🎬 Recommended Videos'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map(video => (
              <a
                key={video.videoId}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card overflow-hidden group cursor-pointer block"
              >
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-claude-orange ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-text-primary text-sm">{video.title[lang]}</h4>
                  <p className="text-xs text-text-muted mt-1">{video.channel}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-text-muted mt-4">
            {lang === 'he'
              ? '* הסרטונים מוצגים כהפניות לתוכן חיצוני. כל הזכויות שמורות ליוצרים המקוריים.'
              : '* Videos are shown as references to external content. All rights reserved to original creators.'}
          </p>
        </div>
      </div>
    </section>
  );
}
