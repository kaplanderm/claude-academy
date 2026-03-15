'use client';
import { LangProvider, useLang } from '@/lib/LangContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LevelSelector from '@/components/LevelSelector';
import CourseSection from '@/components/CourseSection';
import ToolsComparison from '@/components/ToolsComparison';
import PluginsSection from '@/components/PluginsSection';
import UseCasesSection from '@/components/UseCasesSection';
import BlogSection from '@/components/BlogSection';
import BonusSection from '@/components/BonusSection';
import Footer from '@/components/Footer';

function AppContent() {
  const { dir } = useLang();

  return (
    <div dir={dir}>
      <Header />
      <main>
        <Hero />
        <LevelSelector />
        <CourseSection />
        <ToolsComparison />
        <PluginsSection />
        <UseCasesSection />
        <BlogSection />
        <BonusSection />
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  );
}
