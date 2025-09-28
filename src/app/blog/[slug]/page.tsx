import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import { gameConfig, getCanonicalUrl } from '@/config/gameConfig'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// 静态生成所有博客页面
export async function generateStaticParams() {
  return gameConfig.sampleContent.blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// 生成动态元数据
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = gameConfig.sampleContent.blogPosts.find(
    (post) => post.slug === params.slug
  )

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.'
    }
  }

  return {
    title: `${post.title} - ${gameConfig.site.title}`,
    description: post.excerpt,
    alternates: {
      canonical: getCanonicalUrl(`/blog/${post.slug}`)
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      url: getCanonicalUrl(`/blog/${post.slug}`)
    }
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = gameConfig.sampleContent.blogPosts.find(
    (post) => post.slug === params.slug
  )

  if (!post) {
    notFound()
  }

  // 简化的内容，避免HTML注入问题
  const getPostContent = (slug: string) => {
    switch (slug) {
      case 'hades-2-v1-launch-guide':
        return {
          content: `
            <h2>The Wait is Over</h2>
            <p>After months of anticipation, Hades 2 v1.0 has officially launched worldwide on September 25, 2025. This complete release brings the full mythic adventure that fans have been eagerly awaiting.</p>
            
            <h2>What's New in v1.0</h2>
            <ul>
              <li><strong>Complete Story Campaign:</strong> Experience the full narrative as Melinoë battles against Chronos</li>
              <li><strong>New Regions:</strong> Explore expanded areas beyond the original Underworld</li>
              <li><strong>Enhanced Magic System:</strong> Master powerful witchcraft and shadow magic abilities</li>
            </ul>

            <h2>Platform Features</h2>
            <p>The launch includes cross-save support between PC and Nintendo Switch family platforms. Hades 2 on Switch 2 supports an impressive 120fps at 1080p in TV mode.</p>
          `,
          author: 'Hades 2 News Team',
          readTime: '5 min read'
        }
      case 'melinoe-witchcraft-guide':
        return {
          content: `
            <h2>Understanding Melinoë's Powers</h2>
            <p>As the Princess of the Underworld, Melinoë wields unique magical abilities that set her apart from her brother Zagreus. Her connection to both shadow and lunar magic opens up entirely new combat possibilities.</p>
            
            <h2>Shadow Magic Fundamentals</h2>
            <ul>
              <li><strong>Shadow Strike:</strong> Teleport through shadows to deal massive damage</li>
              <li><strong>Umbral Form:</strong> Become temporarily invincible while moving through enemies</li>
              <li><strong>Dark Binding:</strong> Root multiple enemies in place with shadow tendrils</li>
            </ul>

            <h2>Lunar Magic Mastery</h2>
            <p>Lunar magic focuses on area control and sustained damage over time. These spells are particularly effective against groups of enemies and provide excellent crowd control options.</p>

            <h2>Advanced Techniques</h2>
            <p>Master witches can chain spells together for extended combos. Practice timing your shadow teleports with lunar area effects for maximum battlefield control.</p>
          `,
          author: 'Magic Specialist',
          readTime: '8 min read'
        }
      case 'hades-2-weapons-combat-guide':
        return {
          content: `
            <h2>The Nocturnal Arms</h2>
            <p>Hades 2 introduces the Nocturnal Arms, a new collection of weapons specifically designed for Melinoë's combat style. Each weapon offers unique mechanics and upgrade paths.</p>
            
            <h2>Available Weapon Types</h2>
            <ul>
              <li><strong>Sister Blades:</strong> Fast dual-wielding weapons perfect for hit-and-run tactics</li>
              <li><strong>Umbral Flames:</strong> Magical projectile weapon with area damage capabilities</li>
              <li><strong>Moonstone Axe:</strong> Heavy weapon with devastating charged attacks</li>
              <li><strong>Witch's Staff:</strong> Magical focus that enhances spell casting abilities</li>
            </ul>

            <h2>Combat System Changes</h2>
            <p>The combat system has been refined based on feedback from the original Hades. New mechanics include enhanced dodge mechanics with magical afterimages, spell-weapon combination attacks, and environmental interaction with shadow magic.</p>

            <h2>Weapon Progression</h2>
            <p>Each weapon can be upgraded through multiple tiers using materials found throughout your runs. Higher tier weapons unlock new special attacks and magical enhancements.</p>
          `,
          author: 'Combat Expert',
          readTime: '10 min read'
        }
      default:
        return {
          content: '<p>Content not found.</p>',
          author: 'Unknown',
          readTime: '1 min read'
        }
    }
  }

  const postContent = getPostContent(post.slug)

  return (
    <main className="blog-article">
      <Navbar />
      
      <article className="container">
        <header className="article-header">
          <div className="article-meta">
            <span className="article-category">News</span>
            <span className="article-date">{post.date}</span>
            <span className="read-time">{postContent.readTime}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="article-excerpt">{post.excerpt}</p>
        </header>

        <div className="article-content">
          <div className="article-image">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          <div 
            className="article-text"
            dangerouslySetInnerHTML={{ __html: postContent.content }}
          />
        </div>
      </article>

      <Footer />
      <BackToTop />
    </main>
  )
}