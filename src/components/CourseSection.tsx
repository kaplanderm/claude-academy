'use client';
import { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { courses } from '@/data/courses';
import { Clock, BookOpen, ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from 'lucide-react';
import LessonViewer from './LessonViewer';

interface CourseSectionProps {
  selectedLevel?: string;
}

export default function CourseSection({ selectedLevel = 'all' }: CourseSectionProps) {
  const { t, dir, lang } = useLang();
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);

  const levelLabels: Record<string, { he: string; en: string }> = {
    beginner: { he: 'מתחילים', en: 'Beginner' },
    intermediate: { he: 'בינוניים', en: 'Intermediate' },
    advanced: { he: 'מתקדמים', en: 'Advanced' },
  };

  const levelBadgeClass: Record<string, string> = {
    beginner: 'badge-beginner',
    intermediate: 'badge-intermediate',
    advanced: 'badge-advanced',
  };

  const filteredCourses = selectedLevel === 'all'
    ? courses
    : courses.filter(c => c.level === selectedLevel);

  if (activeLessonId && activeCourseId) {
    const course = courses.find(c => c.id === activeCourseId);
    const lesson = course?.lessons.find(l => l.id === activeLessonId);
    if (course && lesson) {
      return (
        <LessonViewer
          course={course}
          lesson={lesson}
          onBack={() => { setActiveLessonId(null); setActiveCourseId(null); }}
          onNavigate={(lessonId: string) => {
            setActiveLessonId(lessonId);
            setTimeout(() => {
              document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
          }}
        />
      );
    }
  }

  return (
    <section id="courses" className="py-20 bg-claude-cream/30" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t('courses.title')}</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('courses.subtitle')}</p>
        </div>

        <div className="space-y-6">
          {filteredCourses.map((course) => {
            const isExpanded = expandedCourse === course.id;
            return (
              <div key={course.id} className="glass-card overflow-hidden">
                {/* Course header */}
                <div
                  className="p-6 cursor-pointer flex items-center gap-4 hover:bg-claude-cream/50 transition-colors"
                  onClick={() => setExpandedCourse(isExpanded ? null : course.id)}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                    style={{ backgroundColor: `${course.color}15` }}
                  >
                    {course.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-xl font-bold text-text-primary">
                        {course.title[lang]}
                      </h3>
                      <span className={`badge ${levelBadgeClass[course.level]}`}>
                        {levelLabels[course.level][lang]}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm line-clamp-1">
                      {course.description[lang]}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-6 shrink-0 text-sm text-text-muted">
                    <span className="flex items-center gap-1"><BookOpen size={14} /> {course.lessonsCount} {t('courses.lessons')}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {course.duration} {t('common.minutes')}</span>
                  </div>
                  <div className="shrink-0 text-text-muted">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {/* Expanded lessons */}
                {isExpanded && (
                  <div className="border-t border-border-color">
                    {course.lessons.map((lesson, lIdx) => (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          setActiveLessonId(lesson.id);
                          setActiveCourseId(course.id);
                          setTimeout(() => {
                            document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }, 50);
                        }}
                        className="w-full flex items-center gap-4 p-4 px-6 hover:bg-claude-cream/50 transition-colors text-start border-b border-border-color/50 last:border-b-0"
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                          style={{ backgroundColor: course.color }}
                        >
                          {lIdx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-text-primary text-sm">{lesson.title[lang]}</div>
                          <div className="text-xs text-text-muted">{lesson.description[lang]}</div>
                        </div>
                        <span className="text-xs text-text-muted shrink-0">{lesson.duration} {t('common.minutes')}</span>
                        <div className={`shrink-0 text-claude-orange ${dir === 'rtl' ? '' : ''}`}>
                          {dir === 'rtl' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
