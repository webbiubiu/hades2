import { MetadataRoute } from 'next'
import { gameConfig } from '@/config/gameConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()
  
  // 静态页面
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${gameConfig.site.url}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${gameConfig.site.url}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${gameConfig.site.url}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${gameConfig.site.url}/videos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${gameConfig.site.url}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // 博客文章页面
  const blogPosts: MetadataRoute.Sitemap = gameConfig.sampleContent.blogPosts.map(post => ({
    url: `${gameConfig.site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPosts]
}