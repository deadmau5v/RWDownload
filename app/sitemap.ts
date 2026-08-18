import { MetadataRoute } from 'next'
import { gameVersions } from '@/lib/gameVersions'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pan.denox.cc'
  
  const versionRoutes: MetadataRoute.Sitemap = gameVersions.map((item) => ({
    url: `${baseUrl}/v/${item.slug}`,
    lastModified: item.releaseDate ? new Date(item.releaseDate) : new Date(),
    changeFrequency: 'monthly',
    priority: item.recommended ? 0.9 : 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...versionRoutes,
  ]
}
