import type { MetadataRoute } from 'next';

// Required for `output: export` (static HTML export).
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://kleios.app/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://kleios.app/privacy', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ];
}
