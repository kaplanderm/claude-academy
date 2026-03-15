'use client';
import { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { blogPosts } from '@/data/courses';
import { Clock, ArrowRight, ArrowLeft, Lightbulb, RefreshCw, Target } from 'lucide-react';

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

export default function BlogSection() {
  const { t, dir, lang } = useLang();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: { he: 'הכל', en: 'All' } },
    { id: 'updates', label: { he: '🔄 עדכונים', en: '🔄 Updates' } },
    { id: 'five-min', label: { he: '💡 5 דקות', en: '💡 5 Minutes' } },
    { id: 'tips', label: { he: '🎯 טיפים', en: '🎯 Tips' } },
  ];

  const filtered = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

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
            return (
              <article key={post.id} className="glass-card overflow-hidden group cursor-pointer">
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
                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-claude-orange transition-colors">
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

        {/* Video section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            {lang === 'he' ? '🎬 סרטונים מומלצים' : '🎬 Recommended Videos'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: { he: 'מבוא ל-Claude Code', en: 'Introduction to Claude Code' },
                channel: 'Anthropic',
                videoId: 'mcp-tutorial',
                thumbnail: 'https://img.youtube.com/vi/d2HW8mXQyx4/maxresdefault.jpg',
              },
              {
                title: { he: 'MCP - המדריך המלא', en: 'MCP - The Complete Guide' },
                channel: 'Fireship',
                videoId: 'mcp-guide',
                thumbnail: 'https://img.youtube.com/vi/kQJBCuMmSGg/maxresdefault.jpg',
              },
              {
                title: { he: 'Prompt Engineering מתקדם', en: 'Advanced Prompt Engineering' },
                channel: 'Anthropic',
                videoId: 'prompt-eng',
                thumbnail: 'https://img.youtube.com/vi/T9aRN5JkmL8/maxresdefault.jpg',
              },
            ].map(video => (
              <div key={video.videoId} className="glass-card overflow-hidden group cursor-pointer">
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-claude-orange/20 to-claude-orange-light/10 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-claude-orange ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-text-primary text-sm">{video.title[lang]}</h4>
                  <p className="text-xs text-text-muted mt-1">{video.channel}</p>
                </div>
              </div>
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
