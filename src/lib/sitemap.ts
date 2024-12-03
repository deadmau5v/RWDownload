import { gameVersions } from '@/data/gameVersions';

export function generateSitemap(baseUrl: string) {
  const urls = [
    baseUrl,
    ...gameVersions.map(version => `${baseUrl}/v/${encodeURIComponent(version.version)}`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>`;

  return sitemap;
}
