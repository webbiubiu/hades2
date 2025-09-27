import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import GameInfoCard from '@/components/GameInfoCard'
import BlogCard from '@/components/BlogCard'
import VideoCard from '@/components/VideoCard'
import FeatureCard from '@/components/FeatureCard'
import CharacterCard from '@/components/CharacterCard'
import VideoShowcase from '@/components/VideoShowcase'
import { gameConfig, getCanonicalUrl } from '@/config/gameConfig'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${gameConfig.game.name} - ${gameConfig.site.title}`,
  description: `${gameConfig.game.subtitle}. ${gameConfig.site.description}`,
  alternates: {
    canonical: getCanonicalUrl()
  }
}

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="gaming-hero"
        style={{
          background: `linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(26, 26, 26, 0.7) 100%), url('${gameConfig.images.heroBackground}') center/cover no-repeat`
        }}
      >
        <div className="gaming-hero-content">
          <div className="hero-text">
            <h1 className="gaming-hero-title">{gameConfig.game.name}</h1>
            <p className="gaming-hero-subtitle">
              {gameConfig.game.subtitle}
            </p>
            <div className="gaming-hero-buttons">
              <Link 
                href={gameConfig.links.steam} 
                target="_blank"
                className="gaming-btn gaming-btn-primary"
              >
                Play on Steam
              </Link>
              <Link 
                href="/about" 
                className="gaming-btn gaming-btn-secondary"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="gaming-hero-image">
            <Image
              src={gameConfig.images.hero}
              alt="Hades2 Hero"
              width={350}
              height={280}
              priority
              sizes="(max-width: 768px) 280px, (max-width: 1200px) 350px, 400px"
            />
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <VideoShowcase 
        title="Hades2 – v1.0 Launch Trailer"
        description="Experience the epic return to the Underworld in this official launch trailer"
        videoId="U8lJRcUeEMs"
      />

      {/* Game Introduction Section */}
      <section className="gaming-section gaming-section-darker">
        <div className="content-container">
          <h2 className="gaming-section-title">{gameConfig.game.introduction.title}</h2>
          <div className="gaming-grid gaming-grid-2 gap-6">
            <div className="gaming-card">
              <div className="feature-icon mb-4">🎮</div>
              <h3 className="gaming-card-title">Official Launch</h3>
              <p className="gaming-card-content">
                Supergiant Games has officially launched Hades2, the highly anticipated sequel. Hades2 v1.0 launches worldwide on <span className="text-orange-500 font-semibold">September 25, 2025</span>, bringing the full mythic adventure to Nintendo Switch, Switch 2, Steam, and Epic Games Store.
              </p>
            </div>

            <div className="gaming-card">
              <div className="feature-icon mb-4">⚔️</div>
              <h3 className="gaming-card-title">Enhanced Gameplay</h3>
              <p className="gaming-card-content">
                Building on the original&apos;s strengths, Hades2 introduces an expanded world of Greek mythology, featuring <span className="text-orange-500 font-semibold">Melinoë</span> as the lead protagonist. Players will tackle the Titan of Time, explore new areas, and unlock dozens of story events.
              </p>
            </div>

            <div className="gaming-card">
              <div className="feature-icon mb-4">🚀</div>
              <h3 className="gaming-card-title">Technical Excellence</h3>
              <p className="gaming-card-content">
                Features cross-save support between platforms. Hades2 on Switch 2 supports blazing-fast <span className="text-orange-500 font-semibold">120fps at 1080p</span> in TV mode, while original Switch maintains 60fps at 720p.
              </p>
            </div>

            <div className="gaming-card">
              <div className="feature-icon mb-4">🏆</div>
              <h3 className="gaming-card-title">Critical Acclaim</h3>
              <p className="gaming-card-content">
                Already recognized as <span className="text-orange-500 font-semibold">one of the highest-rated games of 2025</span>, praised for its evolved rogue-like progression, engaging combat loop, rich narrative, and best-in-class writing and voice performances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Info Section */}
      <section className="gaming-section gaming-section-dark">
        <div className="content-container">
          <h2 className="gaming-section-title">Game Information</h2>
          <div className="gaming-grid gaming-grid-auto">
            <GameInfoCard title="Release Date" content={gameConfig.game.releaseDate} />
            <GameInfoCard title="Platforms" content={gameConfig.game.platforms} />
            <GameInfoCard title="Developer" content={gameConfig.game.developer} />
            <GameInfoCard title="Genre" content={gameConfig.game.genre} />
            <GameInfoCard title="Price" content={gameConfig.game.price} />
            <GameInfoCard title="Languages" content="English, Japanese, Chinese, Korean, French, Spanish, German" />
          </div>
        </div>
      </section>

      {/* Character Showcase */}
      <section className="gaming-section gaming-section-darker">
        <div className="content-container">
          <h2 className="gaming-section-title">Meet the Characters</h2>
          <div className="gaming-grid gaming-grid-auto gap-6">
            {gameConfig.characters.map((character, index) => (
              <CharacterCard
                key={index}
                name={character.name}
                title={character.title}
                description={character.description}
                image={character.image}
                fullImage={character.fullImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="gaming-section gaming-section-dark">
        <div className="content-container">
          <h2 className="gaming-section-title">Hades2 News</h2>
          <div className="gaming-grid gaming-grid-3">
            {gameConfig.sampleContent.blogPosts
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 3)
              .map((post, index) => (
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
          <div className="text-center mt-8 mb-4">
            <Link href="/blog" className="gaming-btn gaming-btn-primary">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Videos */}
      <section className="gaming-section gaming-section-darker">
        <div className="content-container">
          <h2 className="gaming-section-title">Latest Videos</h2>
          <div className="gaming-grid gaming-grid-3">
            {gameConfig.sampleContent.videos.map((video, index) => (
              <VideoCard
                key={index}
                title={video.title}
                description={video.description}
                embedId={video.embedId}
              />
            ))}
          </div>
          <div className="text-center mt-8 mb-4">
            <Link href="/videos" className="gaming-btn gaming-btn-primary">
              View All Videos
            </Link>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section className="gaming-section gaming-section-dark">
        <div className="content-container">
          <h2 className="gaming-section-title">Game Features</h2>
          <div className="gaming-grid gaming-grid-auto">
            {gameConfig.features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Hades2 in Early Access?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, Hades2 has officially exited Early Access and launched its full v1.0 release on September 25, 2025. Early Access players automatically receive the complete version with all new content and features."
                }
              },
              {
                "@type": "Question",
                "name": "When does Hades2 come out?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hades2 v1.0 officially launched worldwide on September 25, 2025, available on PC (Steam, Epic Games Store), Nintendo Switch, Nintendo Switch 2, PlayStation, and Xbox platforms."
                }
              },
              {
                "@type": "Question",
                "name": "How to use Change of Fate in Hades2?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Change of Fate allows you to alter your destiny during runs. Access it through the Altar of Fates using Fate Fragments. Select different paths to modify upcoming encounters, boons, or rewards. It's essential for strategic planning in challenging runs."
                }
              },
              {
                "@type": "Question",
                "name": "How to get Bronze in Hades2?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bronze is obtained by mining bronze ore nodes in various regions, defeating certain enemies, or completing specific chambers. Check the Underworld's mining areas and look for glowing bronze deposits. It's used for weapon upgrades and crafting."
                }
              },
              {
                "@type": "Question",
                "name": "Where to get Bronze in Hades2?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bronze can be found in Erebus chambers, Mining locations in the Underworld, and as drops from Armored enemies. The Crossroads also has mining spots. Use your pickaxe tool to extract bronze from ore veins."
                }
              },
              {
                "@type": "Question",
                "name": "How to get Dark in Hades2?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Psyche (formerly Dark) is earned by completing runs, defeating bosses, and accomplishing various objectives. It's the primary currency for permanent upgrades at the Silver Pool. Collect it from defeated enemies and successful escape attempts."
                }
              }
            ]
          })
        }}
      />

      {/* FAQ Section */}
      <section className="gaming-section gaming-section-darker">
        <div className="content-container">
          <h2 className="gaming-section-title">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="gaming-grid gaming-grid-auto gap-6">
              <div className="gaming-card">
                <h3 className="gaming-card-title">Is Hades2 in Early Access?</h3>
                <p className="gaming-card-content">
                  No, Hades2 has officially exited Early Access and launched its full v1.0 release on September 25, 2025. Early Access players automatically receive the complete version with all new content and features.
                </p>
              </div>

              <div className="gaming-card">
                <h3 className="gaming-card-title">When does Hades2 come out?</h3>
                <p className="gaming-card-content">
                  Hades2 v1.0 officially launched worldwide on September 25, 2025, available on PC (Steam, Epic Games Store), Nintendo Switch, Nintendo Switch 2, PlayStation, and Xbox platforms.
                </p>
              </div>

              <div className="gaming-card">
                <h3 className="gaming-card-title">How to use Change of Fate in Hades2?</h3>
                <p className="gaming-card-content">
                  Change of Fate allows you to alter your destiny during runs. Access it through the Altar of Fates using <strong>Fate Fragments</strong>. Select different paths to modify upcoming encounters, boons, or rewards. It&apos;s essential for strategic planning in challenging runs.
                </p>
              </div>

              <div className="gaming-card">
                <h3 className="gaming-card-title">How to get Bronze in Hades2?</h3>
                <p className="gaming-card-content">
                  <strong>Bronze</strong> is obtained by mining bronze ore nodes in various regions, defeating certain enemies, or completing specific chambers. Check the Underworld&apos;s mining areas and look for glowing bronze deposits. It&apos;s used for weapon upgrades and crafting.
                </p>
              </div>

              <div className="gaming-card">
                <h3 className="gaming-card-title">Where to get Bronze in Hades2?</h3>
                <p className="gaming-card-content">
                  Bronze can be found in <strong>Erebus chambers</strong>, <strong>Mining locations</strong> in the Underworld, and as drops from <strong>Armored enemies</strong>. The Crossroads also has mining spots. Use your pickaxe tool to extract bronze from ore veins.
                </p>
              </div>

              <div className="gaming-card">
                <h3 className="gaming-card-title">How to get Dark in Hades2?</h3>
                <p className="gaming-card-content">
                  <strong>Psyche</strong> (formerly Dark) is earned by completing runs, defeating bosses, and accomplishing various objectives. It&apos;s the primary currency for permanent upgrades at the Silver Pool. Collect it from defeated enemies and successful escape attempts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  )
}