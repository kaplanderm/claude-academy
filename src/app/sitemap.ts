import { MetadataRoute } from 'next';
import { medicalUseCases } from '@/data/medicalUseCases';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://academy.dermunbound.com';

  const medicalPages = medicalUseCases.map((uc) => ({
    url: `${baseUrl}/medical/${uc.id}`,
    lastModified: new Date('2026-03-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/academy`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    ...medicalPages,
  ];
}
