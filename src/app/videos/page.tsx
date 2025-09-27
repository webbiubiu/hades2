'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function VideosPage() {
  // Hades2视频数据
  const videos = [
    {
      id: '-SnaCUsUF3E',
      title: 'Hades2 - v1.0 Gameplay Showcase',
      description: 'Comprehensive gameplay showcase featuring combat, magic, and exploration in the full v1.0 release.',
      category: 'gameplay',
      duration: '8:30',
      views: '2.8M views',
      date: '2 weeks ago'
    },
    {
      id: 'U8lJRcUeEMs',
      title: 'Hades2 – v1.0 Launch Trailer',
      description: 'Official launch trailer for Hades2 v1.0 showcasing the complete mythological adventure.',
      category: 'trailers',
      duration: '2:45',
      views: '3.2M views',
      date: '2 weeks ago'
    },
    {
      id: 'JH6VPBKlnXE',
      title: 'Meeting Hades Post Game + House Soot Item | Hades 2',
      description: 'Post-game content showing meeting with Hades and discovering the House Soot item mechanics.',
      category: 'guides',
      duration: '12:45',
      views: '850K views',
      date: '1 week ago'
    },
    {
      id: '2Gv0eQjJ-gY',
      title: 'Hades2 - The Unseen Update Trailer',
      description: 'The third Major Update for Hades2 featuring expanded core combat and Guardian encounters.',
      category: 'trailers',
      duration: '3:30',
      views: '1.5M views',
      date: '1 month ago'
    },
    {
      id: 'yrpGYTlCjNQ',
      title: 'Hades2 - The Warsong Update Trailer',
      description: 'The second Major Update featuring new encounters at the end of the surface route and Ares arrival.',
      category: 'trailers',
      duration: '3:45',
      views: '1.8M views',
      date: '3 months ago'
    },
    {
      id: 'WH3jT53hIYM',
      title: 'Hades2 - The Olympic Update Trailer',
      description: 'The first Major Update featuring spectacular new places to explore and colorful new characters.',
      category: 'trailers',
      duration: '4:10',
      views: '2.2M views',
      date: '6 months ago'
    },
    {
      id: 'Miu_akSity4',
      title: 'Hades2 - Early Access Showcase',
      description: 'Early Access showcase revealing the game mechanics and world before the full release.',
      category: 'gameplay',
      duration: '15:20',
      views: '4.1M views',
      date: '8 months ago'
    },
    {
      id: 'l-iHDj3EwdI',
      title: 'Hades2 - Reveal Trailer',
      description: 'The very first reveal trailer that introduced the world to Hades2 and Melinoë.',
      category: 'trailers',
      duration: '2:30',
      views: '6.5M views',
      date: '2 years ago'
    },
    {
      id: '9gp_6AoaRh8',
      title: 'Hades2 - Official Nintendo Switch 2 Edition Launch Trailer',
      description: 'Official trailer for the Nintendo Switch 2 edition featuring enhanced performance and features.',
      category: 'trailers',
      duration: '1:45',
      views: '1.2M views',
      date: '1 week ago'
    }
  ]

  return (
    <>
      <Navbar />
      
      {/* Video Grid */}
      <section className="video-grid-section">
        <div className="container">
          <h2>All Videos</h2>
          <div className="video-grid">
            {videos.map(video => (
              <div key={video.id} className="video-card" data-category={video.category}>
                <div className="video-thumbnail">
                  <iframe 
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="video-info">
                  <span className="video-category">{video.category}</span>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <div className="video-meta">
                    <span className="video-duration">{video.duration}</span>
                    <span className="video-views">{video.views}</span>
                    <span className="video-date">{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  )
}