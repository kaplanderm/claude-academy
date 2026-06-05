import { MetadataRoute } from 'next';
import { medicalUseCases } from '@/data/medicalUseCases';
import { featureGuides } from '@/data/featureGuides';
import { tracks, getAllLessonParams } from '@/content';
import { posts } from '@/content/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://academy.dermunbound.com';
  const now = new Date('2026-06-05');

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/academy`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/tools`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/accessibility`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const trackPages: MetadataRoute.Sitemap = tracks.map(t => ({
    url: `${baseUrl}/academy/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const lessonPages: MetadataRoute.Sitemap = getAllLessonParams().map(({ track, lesson }) => ({
    url: `${baseUrl}/academy/${track}/${lesson}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map(p => ({
    url: `${baseUrl}/blog/${p.id}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const medicalPages: MetadataRoute.Sitemap = medicalUseCases.map(uc => ({
    url: `${baseUrl}/medical/${uc.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const featurePages: MetadataRoute.Sitemap = featureGuides.map(g => ({
    url: `${baseUrl}/features/${g.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...trackPages,
    ...lessonPages,
    ...blogPages,
    ...medicalPages,
    ...featurePages,
  ];
}
