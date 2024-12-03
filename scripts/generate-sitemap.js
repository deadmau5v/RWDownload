const fs = require('fs');
const path = require('path');
const { gameVersions } = require('../src/data/gameVersions');

const BASE_URL = 'https://rustedwarfare.d5v.cc'; // Replace with your actual domain

function generateSitemap() {
  const urls = [
    BASE_URL,
    ...gameVersions.map(version => `${BASE_URL}/v/${encodeURIComponent(version.version)}`)
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

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();
