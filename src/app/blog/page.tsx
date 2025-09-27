import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import BlogCard from '@/components/BlogCard'
import { gameConfig, getCanonicalUrl } from '@/config/gameConfig'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${gameConfig.game.name} News & Guides - ${gameConfig.site.title}`,
  description: `Latest ${gameConfig.game.name} news, guides, tips, and updates. Stay informed about the immortal rogue-like adventure.`,
  alternates: {
    canonical: getCanonicalUrl('/blog')
  }
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-20 pb-8 bg-black">
        <div className="content-container">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Latest Hades2 News</h1>
          <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
            Stay updated with the latest Hades2 news, guides, and community content
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="gaming-section gaming-section-dark">
        <div className="content-container">
          <h2 className="gaming-section-title">All Articles</h2>
          <div className="gaming-grid gaming-grid-3">
            {gameConfig.sampleContent.blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  )
}