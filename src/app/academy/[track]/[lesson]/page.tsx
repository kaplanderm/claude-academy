'use client';
import { useParams } from 'next/navigation';
import LessonReader from '@/components/academy/LessonReader';

export default function LessonPage() {
  const params = useParams();
  return <LessonReader trackSlug={params.track as string} lessonId={params.lesson as string} />;
}
