import type { MetadataRoute } from 'next';

// Required for `output: export` (static HTML export).
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://kleios.app/sitemap.xml',
  };
}
