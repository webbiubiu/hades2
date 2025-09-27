import { gameConfig } from '@/config/gameConfig'

export function GET() {
  const robotsTxt = `# Robots.txt for ${gameConfig.site.title}
# Website: ${gameConfig.site.url}

User-agent: *
Allow: /

# Allow all crawlers to access all content
Allow: /blog/
Allow: /about/
Allow: /videos/
Allow: /privacy/

# Allow search engines to access images
Allow: /images/

# Sitemap location
Sitemap: ${gameConfig.site.url}/sitemap.xml

# Common bot optimizations
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /`

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // 缓存24小时
    },
  })
}