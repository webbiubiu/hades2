'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PrivateVideoCardProps {
  title: string
  description: string
  embedId: string
  className?: string
  thumbnailQuality?: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault'
}

export default function PrivateVideoCard({ 
  title, 
  description, 
  embedId, 
  className = "",
  thumbnailQuality = 'hqdefault'
}: PrivateVideoCardProps) {
  const [showVideo, setShowVideo] = useState(false);
  
  const thumbnailUrl = `https://img.youtube.com/vi/${embedId}/${thumbnailQuality}.jpg`;
  
  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className={`gaming-card ${className}`}>
      <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
        {!showVideo ? (
          // Privacy-friendly thumbnail
          <div 
            className="relative w-full h-full cursor-pointer group"
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
              width={480}
              height={360}
              className="w-full h-full object-cover"
            />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300">
              <div className="bg-red-600 hover:bg-red-700 rounded-full p-2 transform group-hover:scale-110 transition-all duration-300">
                <svg 
                  className="w-6 h-6 text-white ml-0.5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            
            {/* Small privacy indicator */}
            <div className="absolute top-2 right-2">
              <div className="bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                🔒
              </div>
            </div>
          </div>
        ) : (
          // Load video only after user consent
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube-nocookie.com/embed/${embedId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <h3 className="gaming-card-title">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}