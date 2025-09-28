import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import VideoShowcase from '@/components/VideoShowcase'
import { gameConfig, getCanonicalUrl } from '@/config/gameConfig'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `About ${gameConfig.game.name} - ${gameConfig.site.title}`,
  description: `Learn about ${gameConfig.game.name}, the ${gameConfig.game.subtitle.toLowerCase()} with expanded mythological adventure and enhanced gameplay.`,
  alternates: {
    canonical: getCanonicalUrl('/about')
  }
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-20 pb-8 bg-black">
        <div className="content-container">
          <h1 className="text-4xl font-bold text-white text-center mb-4">About Hades 2</h1>
          <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
            Discover the epic mythological adventure that redefined the roguelike genre
          </p>
        </div>
      </div>

      {/* Video Showcase */}
      <VideoShowcase 
        title="Hades 2 - v1.0 Gameplay Showcase"
        description="Watch the official gameplay showcase and see the combat system in action"
        videoId="-SnaCUsUF3E"
      />

      {/* Game Overview */}
      <section className="gaming-section gaming-section-dark">
        <div className="content-container">
          <h2 className="gaming-section-title">Epic Return to the Underworld</h2>
          <div className="article-content">
            <p>
              Hades 2 marks the triumphant return to the mythological Underworld in this highly anticipated sequel 
              from Supergiant Games. Building upon the award-winning foundation of the original Hades, this roguelike 
              masterpiece introduces players to an entirely new chapter in Greek mythology, where ancient powers clash 
              and destinies are forged through divine combat.
            </p>
            
            <div className="text-center my-8">
              <Image
                src="/images/hades2_apr24_01.webp"
                alt="Hades 2 Combat"
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <p>
              Step into the sandals of the immortal Princess of the Underworld as she embarks on a perilous quest 
              to confront the Titan of Time himself. Armed with powerful witchcraft and shadow magic, players must 
              navigate through an expanded mythological realm where every death becomes a stepping stone toward 
              ultimate victory.
            </p>

            <h3>Revolutionized Roguelike Experience</h3>
            <p>
              Hades 2 elevates the roguelike formula to unprecedented heights, offering a perfect blend of strategic 
              combat, narrative depth, and endless replayability. Each expedition into the dangerous realms reveals 
              new story elements, character interactions, and divine secrets that enrich the overall experience.
            </p>

            <div className="grid grid-cols-2 gap-4 my-8">
              <Image
                src="/images/hades2_apr24_02.webp"
                alt="Underworld Environment"
                width={400}
                height={225}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/images/hades2_apr24_03.webp"
                alt="Magic System"
                width={400}
                height={225}
                className="rounded-lg shadow-lg"
              />
            </div>

            <h3>Master the Arts of War and Magic</h3>
            <p>
              The combat system in Hades 2 has been completely reimagined to incorporate magical elements alongside 
              traditional weaponry. Players can customize their playstyle through:
            </p>
            <ul>
              <li>Powerful witchcraft abilities that manipulate time and space</li>
              <li>Divine Boons from Olympian gods that enhance combat capabilities</li>
              <li>An arsenal of mystical weapons, each with unique upgrade paths</li>
              <li>Strategic combinations that create devastating spell-weapon synergies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Continued Content */}
      <section className="gaming-section gaming-section-darker">
        <div className="content-container">
          <div className="article-content">
            <h3>Expanded Mythological World</h3>
            <p>
              Journey through breathtaking environments that extend far beyond the traditional Underworld. 
              Explore mysterious surface realms, encounter legendary figures from Greek mythology, and uncover 
              ancient secrets hidden within beautifully crafted landscapes that showcase Supergiant Games&apos; 
              signature artistic vision.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/hades2_apr24_04.webp"
                alt="Surface World"
                width={700}
                height={394}
                className="rounded-lg shadow-lg"
              />
            </div>

            <h3>Critical Acclaim</h3>
            <p>
              Since its Early Access launch, Hades 2 has garnered widespread praise from critics and players alike. 
              Major gaming publications have consistently highlighted the game&apos;s exceptional quality:
            </p>
            <ul>
              <li>GameSpot praised it as &ldquo;one of the finest roguelike experiences ever created&rdquo;</li>
              <li>Eurogamer celebrated its magical combat system and narrative depth</li>
              <li>Multiple publications have noted its successful evolution of the original formula</li>
            </ul>

            <h3>Technical Excellence</h3>
            <p>
              Hades 2 delivers a premium gaming experience across all supported platforms. The full v1.0 release 
              includes cross-save functionality, ensuring your progress follows you whether you&apos;re playing on PC 
              or Nintendo Switch family consoles. The game runs at smooth 60fps on standard hardware while 
              supporting enhanced performance modes on newer systems.
            </p>

            <h3>The Complete Adventure Awaits</h3>
            <p>
              With the official v1.0 launch on September 25, 2025, Hades 2 presents the complete mythological 
              adventure that fans have been eagerly anticipating. The full release includes the entire story 
              campaign, complete character arcs, numerous unlockable features, and extensive post-game content 
              that ensures hundreds of hours of engaging gameplay.
            </p>

            <p>
              Whether you&apos;re a veteran of the original Hades or new to the series, Hades 2 offers an 
              unforgettable journey through Greek mythology that seamlessly blends action, strategy, and 
              storytelling into one extraordinary gaming experience.
            </p>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="gaming-section gaming-section-dark">
        <div className="content-container">
          <h2 className="gaming-section-title">Development Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">November 20, 2025</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Physical Edition Release</h3>
                <p>Retail physical copies become available for Nintendo Switch and Nintendo Switch 2 platforms.</p>
              </div>
            </div>

            <div className="timeline-item featured">
              <div className="timeline-date">September 25, 2025</div>
              <div className="timeline-content">
                <h3 className="timeline-title">v1.0 Full Release</h3>
                <p>Complete launch across PC, Nintendo Switch, and Nintendo Switch 2 with the full campaign, all features, and cross-save support.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">February 19, 2025</div>
              <div className="timeline-content">
                <h3 className="timeline-title">The Warsong Update</h3>
                <p>Second major update introducing additional storylines, combat mechanics, and character development features.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">October 16, 2024</div>
              <div className="timeline-content">
                <h3 className="timeline-title">The Olympic Update</h3>
                <p>First major Early Access update featuring new regions, weapons, characters, and significant content expansion.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">May 6, 2024</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Early Access Launch</h3>
                <p>Hades 2 launches in Early Access on Steam and Epic Games Store, beginning community-driven development phase.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">April 2024</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Technical Test</h3>
                <p>Limited technical test conducted with select players to gather feedback and optimize performance before Early Access.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Development Phase</h3>
                <p>Intensive development period with team working on expanding the Hades universe and creating new gameplay mechanics.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">December 8, 2022</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Official Announcement</h3>
                <p>Hades 2 revealed at The Game Awards 2022, marking Supergiant Games&apos; first-ever sequel announcement.</p>
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