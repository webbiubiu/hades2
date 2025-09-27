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
import { gameConfig, getYouTubeEmbed } from '@/config/gameConfig'

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
                Building on the original's strengths, Hades2 introduces an expanded world of Greek mythology, featuring <span className="text-orange-500 font-semibold">Melinoë</span> as the lead protagonist. Players will tackle the Titan of Time, explore new areas, and unlock dozens of story events.
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
            {gameConfig.sampleContent.blogPosts.slice(0, 3).map((post, index) => (
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

      <Footer />
      <BackToTop />
    </>
  )
}