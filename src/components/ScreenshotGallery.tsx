'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ScreenshotGalleryProps {
  screenshots: {
    src: string
    alt: string
    caption?: string
  }[]
}

export default function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  if (!screenshots || screenshots.length === 0) {
    return <div className="text-white text-center p-8">No screenshots available</div>
  }

  return (
    <>
      <div className="gaming-grid gaming-grid-3 gap-4">
        {screenshots.map((screenshot, index) => (
          <div 
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={screenshots[selectedImage].src}
              alt={screenshots[selectedImage].alt}
              width={1200}
              height={675}
              className="object-contain rounded-lg"
            />
            {screenshots[selectedImage].caption && (
              <p className="text-white text-center mt-4">
                {screenshots[selectedImage].caption}
              </p>
            )}
            <button 
              className="absolute top-4 right-4 text-white text-2xl hover:text-orange-400"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}