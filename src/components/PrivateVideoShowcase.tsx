'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PrivateVideoShowcaseProps {
  title?: string
  description?: string
  videoId: string
  thumbnailQuality?: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault'
}

export default function PrivateVideoShowcase({ 
  title = "Hades2 – v1.0 Launch Trailer", 
  description = "Experience the epic return to the Underworld in this official launch trailer",
  videoId,
  thumbnailQuality = 'maxresdefault'
}: PrivateVideoShowcaseProps) {
  const [showVideo, setShowVideo] = useState(false);
  
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;
  
  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <section className="gaming-section gaming-section-dark">
      <div className="content-container">
        <div className="video-showcase">
          <div className="video-showcase-header">
            <h2 className="gaming-section-title">{title}</h2>
            {description && (
              <p className="video-showcase-description">{description}</p>
            )}
          </div>
          
          <div className="video-showcase-container">
            <div className="video-wrapper">
              {!showVideo ? (
                // Privacy-friendly thumbnail with play button
                <div 
                  className="video-thumbnail-container cursor-pointer relative group"
                  onClick={handlePlayClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handlePlayClick();
                    }
                  }}
                  aria-label={`Play video: ${title}`}
                >
                  <Image
                    src={thumbnailUrl}
                    alt={`${title} - Video thumbnail`}
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover rounded-lg"
                    priority
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg">
                    <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <svg 
                        className="w-12 h-12 text-white ml-1" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Privacy notice */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black bg-opacity-75 text-white text-sm px-3 py-2 rounded">
                      🔒 Click to load video (connects to YouTube)
                    </div>
                  </div>
                </div>
              ) : (
                // Load video only after user consent
                <iframe 
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="video-iframe"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}